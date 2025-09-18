// Life Alliance PWA Service Worker
// Bump this version on each deploy to force old cache cleanup
const CACHE_VERSION = 'v1.0.1';
const CACHE_NAME = `life-alliance-${CACHE_VERSION}`;

// Core assets to pre-cache (fast boot and offline shell)
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/manifest.json',
  'Logos/Alliance logo.png',
  'Logos/Emblem.png',
  'Logos/Stamp.png',
  // Guild logos
  'Guilds logo and names/- Amanecer -.png',
  'Guilds logo and names/-A-Vesperion-.png',
  'Guilds logo and names/Demigods.png',
  'Guilds logo and names/Enderun.png',
  'Guilds logo and names/Equilibrium Vita.png',
  'Guilds logo and names/Family Business.png',
  'Guilds logo and names/FrenchLEADER.png',
  'Guilds logo and names/Guardians.png',
  'Guilds logo and names/I M P E R I V M.png',
  'Guilds logo and names/Italians.png',
  'Guilds logo and names/Krosmic Fluxx.png',
  'Guilds logo and names/Nemesis.png',
  'Guilds logo and names/Nomads.png',
  'Guilds logo and names/perfect guild.png',
  'Guilds logo and names/Punishment.png',
  'Guilds logo and names/SAQ SELECTION.png',
  'Guilds logo and names/Sausage Fingers Society.png',
  'Guilds logo and names/sparta logoo.png',
  'Guilds logo and names/The Trenches.png',
  'Guilds logo and names/Thieves.png',
  'Guilds logo and names/Tight.png',
  'Guilds logo and names/Vendetta.png',
  // Leader images
  'Leaders/Boriss.png',
  'Leaders/Candee.png',
  'Leaders/Cunyee.png',
  'Leaders/Terro.png',
  'Leaders/Zubic-vila.png',
  // External resources
  'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cinzel+Decorative:wght@400;700;900&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

// Install: pre-cache core and activate immediately
self.addEventListener('install', event => {
  console.log('[SW] Installing', CACHE_NAME);
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .finally(() => self.skipWaiting())
  );
});

// Strategy helpers
async function networkFirst(request) {
  try {
    const fresh = await fetch(request, { cache: 'no-store' });
    const cache = await caches.open(CACHE_NAME);
    cache.put(request, fresh.clone());
    return fresh;
  } catch (err) {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request) || await caches.match('/index.html');
    return cached;
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  if (cached) return cached;
  const res = await fetch(request);
  cache.put(request, res.clone());
  return res;
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  const networkPromise = fetch(request).then(res => {
    cache.put(request, res.clone());
    return res;
  }).catch(() => cached);
  return cached || networkPromise;
}

// Fetch: network-first for HTML, cache-first for images, SWR for CSS/JS
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Handle navigation and HTML
  const isHTML = request.mode === 'navigate' || (request.destination === 'document') || url.pathname.endsWith('.html');
  if (isHTML) {
    event.respondWith(networkFirst(request));
    return;
  }

  // Images heavy: cache-first
  if (request.destination === 'image') {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Fonts and styles/scripts: stale-while-revalidate for snappy loads
  if (request.destination === 'style' || request.destination === 'script' || request.destination === 'font') {
    event.respondWith(staleWhileRevalidate(request));
    return;
  }

  // Default fallback
  event.respondWith(staleWhileRevalidate(request));
});

// Activate: clean old caches and take control
self.addEventListener('activate', event => {
  console.log('[SW] Activating', CACHE_NAME);
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.map(n => {
      if (n !== CACHE_NAME && n.startsWith('life-alliance-')) {
        console.log('[SW] Deleting old cache', n);
        return caches.delete(n);
      }
    }));
    await self.clients.claim();
  })());
});

// Background sync for offline form submissions
self.addEventListener('sync', event => {
  if (event.tag === 'contact-form-sync') {
    console.log('Life Alliance PWA: Syncing contact form...');
    event.waitUntil(syncContactForm());
  }
});

// Push notification handling
self.addEventListener('push', event => {
  console.log('Life Alliance PWA: Push notification received');
  
  const options = {
    body: event.data ? event.data.text() : 'New update from Life Alliance!',
    icon: 'Logos/Alliance logo.png',
    badge: 'Logos/Alliance logo.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'View Alliance',
        icon: 'Logos/Alliance logo.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: 'Logos/Alliance logo.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Life Alliance', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', event => {
  console.log('Life Alliance PWA: Notification clicked');
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Helper function for contact form sync
async function syncContactForm() {
  // This would handle offline form submissions
  // For now, just log that sync was attempted
  console.log('Life Alliance PWA: Contact form sync completed');
}
