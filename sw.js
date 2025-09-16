// Life Alliance PWA Service Worker
const CACHE_NAME = 'life-alliance-v1.0.0';
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

// Install event - cache resources
self.addEventListener('install', event => {
  console.log('Life Alliance PWA: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Life Alliance PWA: Caching files');
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.log('Life Alliance PWA: Cache failed', error);
      })
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
      .catch(() => {
        // If both cache and network fail, show offline page
        if (event.request.destination === 'document') {
          return caches.match('/index.html');
        }
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Life Alliance PWA: Activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Life Alliance PWA: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
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
