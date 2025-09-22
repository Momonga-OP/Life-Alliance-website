
// Breadcrumb Navigation Functionality
function initBreadcrumbNavigation() {
    const breadcrumbNav = document.getElementById('breadcrumbNav');
    const currentPage = document.getElementById('currentPage');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!breadcrumbNav || !currentPage) return;
    
    // Show breadcrumb when not on home section
    function updateBreadcrumb() {
        const currentSection = getCurrentSection();
        if (currentSection && currentSection !== 'home') {
            breadcrumbNav.style.display = 'block';
            currentPage.textContent = currentSection.charAt(0).toUpperCase() + currentSection.slice(1);
        } else {
            breadcrumbNav.style.display = 'none';
        }
    }
    
    function getCurrentSection() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        for (let section of sections) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                return section.id;
            }
        }
        return 'home';
    }
    
    // Update breadcrumb on scroll
    window.addEventListener('scroll', updateBreadcrumb);
    
    // Update breadcrumb on nav link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(updateBreadcrumb, 100);
        });
    });
    
    // Initial update
    updateBreadcrumb();
}

// Sticky Navigation
function initStickyNavigation() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });
}


// Smooth Section Transitions
function initSmoothTransitions() {
    const sections = document.querySelectorAll('section');
    const cards = document.querySelectorAll('.guild-card, .leader-card, .event-card, .feature-card, .phase-item');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all sections
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Observe all cards with staggered animation
    cards.forEach((card, index) => {
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 100); // Stagger the animation
                }
            });
        }, observerOptions);
        
        cardObserver.observe(card);
    });
}

// Enhanced Navigation with Smooth Scrolling
function initEnhancedNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Smooth scroll to section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active nav link
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
}

// 3D Carousel functionality
function init3DCarousel() {
    const carousel = document.getElementById('leadersCarousel');
    if (!carousel) {
        console.log('Carousel container not found');
        return;
    }

    const cards = carousel.querySelectorAll('.carousel-card');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    const dots = carousel.querySelectorAll('.carousel-dot');
    
    console.log('Carousel elements found:', {
        carousel: !!carousel,
        cards: cards.length,
        prevBtn: !!prevBtn,
        nextBtn: !!nextBtn,
        dots: dots.length
    });
    
    let currentIndex = 0;
    let isAnimating = false;

    function updateCarousel() {
        if (isAnimating) return;
        isAnimating = true;

        cards.forEach((card, index) => {
            const cardIndex = parseInt(card.dataset.index);
            card.className = 'carousel-card';
            
            if (cardIndex === currentIndex) {
                card.classList.add('active');
            } else if (cardIndex === (currentIndex + 1) % cards.length) {
                card.classList.add('next');
            } else if (cardIndex === (currentIndex - 1 + cards.length) % cards.length) {
                card.classList.add('prev');
            } else {
                card.classList.add('hidden');
            }
        });

        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });

        setTimeout(() => {
            isAnimating = false;
        }, 600);
    }

    // Force initial update
    function forceUpdate() {
        cards.forEach((card, index) => {
            const cardIndex = parseInt(card.dataset.index);
            card.className = 'carousel-card';
            
            if (cardIndex === currentIndex) {
                card.classList.add('active');
            } else if (cardIndex === (currentIndex + 1) % cards.length) {
                card.classList.add('next');
            } else if (cardIndex === (currentIndex - 1 + cards.length) % cards.length) {
                card.classList.add('prev');
            } else {
                card.classList.add('hidden');
            }
        });

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function nextSlide() {
        if (isAnimating) return;
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
    }

    function prevSlide() {
        if (isAnimating) return;
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCarousel();
    }

    function goToSlide(index) {
        if (isAnimating || index === currentIndex) return;
        currentIndex = index;
        updateCarousel();
    }


    // Event listeners
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });

    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }

    // Keyboard navigation
    carousel.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            nextSlide();
        }
    });

    // Make carousel focusable
    carousel.setAttribute('tabindex', '0');

    // Initialize
    console.log('Initializing 3D carousel with', cards.length, 'cards');
    forceUpdate();
}

// Maintenance Mode Toggle Function
function toggleMaintenanceMode(show = true) {
    const overlay = document.getElementById('maintenanceOverlay');
    if (overlay) {
        if (show) {
            overlay.style.display = 'flex';
            // Prevent body scroll when maintenance mode is active
            document.body.style.overflow = 'hidden';
        } else {
            overlay.style.display = 'none';
            // Restore body scroll when maintenance mode is disabled
            document.body.style.overflow = '';
        }
    }
}

// Check for maintenance mode on page load
function checkMaintenanceMode() {
    // You can change this to true to enable maintenance mode
    const maintenanceEnabled = false; // Set to true to enable maintenance mode
    
    if (maintenanceEnabled) {
        toggleMaintenanceMode(true);
    }
}

// Easy toggle function for admin use
// Call toggleMaintenanceMode(true) to enable maintenance mode
// Call toggleMaintenanceMode(false) to disable maintenance mode
window.toggleMaintenanceMode = toggleMaintenanceMode;

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing website...');
    
    // Check maintenance mode on load
    checkMaintenanceMode();
    
    // Initialize new features
    initBreadcrumbNavigation();
    initStickyNavigation();
    initSmoothTransitions();
    initEnhancedNavigation();
    init3DCarousel();

    // Removed in-page activity feed section

    // Live Ticker
    initTicker();
    
    // DOM Elements
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollProgress = document.getElementById('scrollProgress');
    const backToTop = document.getElementById('backToTop');
    const dofusTime = document.getElementById('dofusTime');

    // Mobile Navigation Toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Scroll Progress Bar
    function updateScrollProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        if (scrollProgress) {
            scrollProgress.style.width = scrollPercent + '%';
        }
    }

    // Back to Top Button
    function toggleBackToTop() {
        if (backToTop) {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }
    }

    // Back to Top functionality
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Active Navigation Link
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.pageYOffset + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }

    // Scroll event listeners
    window.addEventListener('scroll', () => {
        updateScrollProgress();
        toggleBackToTop();
        updateActiveNavLink();
    });

    // Medieval Particles
    function createMedievalParticles() {
        const particlesContainer = document.getElementById('medievalParticles');
        if (!particlesContainer) return;

        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'medieval-particle';
            
            // Random position and properties
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 8 + 's';
            particle.style.animationDuration = (Math.random() * 4 + 8) + 's';
            
            particlesContainer.appendChild(particle);
            
            // Remove particle after animation
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 12000);
        }

        // Create initial particles
        for (let i = 0; i < 15; i++) {
            setTimeout(createParticle, i * 500);
        }

        // Continue creating particles
        setInterval(createParticle, 2000);
    }

    // Initialize medieval particles
    createMedievalParticles();

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animated counters
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }

    // Dynamic online counter that changes every 10 seconds
    let onlineCounterStarted = false;
    
    function startDynamicOnlineCounter() {
        if (onlineCounterStarted) return; // Prevent multiple instances
        onlineCounterStarted = true;
        
        const onlineElement = document.getElementById('onlineCount');
        if (!onlineElement) return;

        function updateOnlineCount() {
            // Generate random number between 90-150
            const randomCount = Math.floor(Math.random() * (150 - 90 + 1)) + 90;
            
            console.log(`Updating online count to: ${randomCount}`);
            
            // Animate the change
            animateCounter(onlineElement, randomCount, 1000);
        }

        // Update immediately
        updateOnlineCount();
        
        // Update every 10 seconds
        setInterval(updateOnlineCount, 10000);
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Animate counters when they come into view
                if (entry.target.classList.contains('hero-stats')) {
                    animateCounter(document.getElementById('memberCount'), 3511);
                    animateCounter(document.getElementById('guildCount'), 25);
                    // Start dynamic online counter instead of fixed value
                    startDynamicOnlineCounter();
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.hero-stats, .feature-card, .guild-card, .phase-item, .leader-card, .event-card').forEach(el => {
        observer.observe(el);
    });

    // Real guild data
    const guildsData = [
      {
        "name": "Amanecer",
        "members": 180,
        "logo": "Guilds logo and names/- Amanecer -.png"
      },
      {
        "name": "Vesperion",
        "members": 165,
        "logo": "Guilds logo and names/-A-Vesperion-.png"
      },
      {
        "name": "Demigods",
        "members": 200,
        "logo": "Guilds logo and names/Demigods.png"
      },
      {
        "name": "Enderun",
        "members": 175,
        "logo": "Guilds logo and names/Enderun.png"
      },
      {
        "name": "Equilibrium Vita",
        "members": 160,
        "logo": "Guilds logo and names/Equilibrium Vita.png"
      },
      {
        "name": "Family Business",
        "members": 185,
        "logo": "Guilds logo and names/Family Business.png"
      },
      {
        "name": "FrenchLEADER",
        "members": 190,
        "logo": "Guilds logo and names/FrenchLEADER.png"
      },
      {
        "name": "Guardians",
        "members": 170,
        "logo": "Guilds logo and names/Guardians.png"
      },
      {
        "name": "IMPERIVM",
        "members": 195,
        "logo": "Guilds logo and names/I M P E R I V M.png"
      },
      {
        "name": "Italians",
        "members": 155,
        "logo": "Guilds logo and names/Italians.png"
      },
      {
        "name": "Krosmic Fluxx",
        "members": 150,
        "logo": "Guilds logo and names/Krosmic Fluxx.png"
      },
      {
        "name": "Nemesis",
        "members": 180,
        "logo": "Guilds logo and names/Nemesis.png"
      },
      {
        "name": "Nomads",
        "members": 145,
        "logo": "Guilds logo and names/Nomads.png"
      },
      {
        "name": "Perfect Guild",
        "members": 200,
        "logo": "Guilds logo and names/perfect guild.png"
      },
      {
        "name": "Punishment",
        "members": 165,
        "logo": "Guilds logo and names/Punishment.png"
      },
      {
        "name": "SAQ SELECTION",
        "members": 175,
        "logo": "Guilds logo and names/SAQ SELECTION.png"
      },
      {
        "name": "Sausage Fingers Society",
        "members": 140,
        "logo": "Guilds logo and names/Sausage Fingers Society.png"
      },
      {
        "name": "Sparta",
        "members": 190,
        "logo": "Guilds logo and names/sparta logoo.png"
      },
      {
        "name": "The Trenches",
        "members": 160,
        "logo": "Guilds logo and names/The Trenches.png"
      },
      {
        "name": "Thieves",
        "members": 155,
        "logo": "Guilds logo and names/Thieves.png"
      },
      {
        "name": "Tight",
        "members": 145,
        "logo": "Guilds logo and names/Tight.png"
      },
      {
        "name": "Vendetta",
        "members": 170,
        "logo": "Guilds logo and names/Vendetta.png"
      }
    ];

    // Sample data for leaders
    const leadersData = [
        {
            name: "Commander Nexus",
            role: "Alliance Leader",
            avatar: "👑",
            description: "Strategic mastermind with 5+ years of Dofus experience. Leads with wisdom and determination."
        },
        {
            name: "General Storm",
            role: "Military Commander",
            avatar: "⚡",
            description: "Battle-tested warrior who coordinates all PvP operations and tactical maneuvers."
        },
        {
            name: "Advisor Sage",
            role: "Diplomatic Advisor",
            avatar: "🧙",
            description: "Master negotiator who handles inter-alliance relations and conflict resolution."
        },
        {
            name: "Captain Shield",
            role: "Defense Coordinator",
            avatar: "🛡️",
            description: "Protector of our territories and coordinator of defensive strategies."
        },
        {
            name: "Master Forge",
            role: "Resource Manager",
            avatar: "⚒️",
            description: "Oversees all economic activities and resource distribution across the alliance."
        },
        {
            name: "Scout Eagle",
            role: "Intelligence Officer",
            avatar: "🦅",
            description: "Gathers crucial information and maintains our intelligence network."
        }
    ];

    // Sample data for events
    const eventsData = [
        {
            title: "Weekly Alliance Raid",
            date: "Every Saturday",
            description: "Join us for our weekly alliance raid where we tackle the most challenging dungeons together.",
            status: "upcoming"
        },
        {
            title: "PvP Tournament",
            date: "Next Friday",
            description: "Compete in our monthly PvP tournament with amazing prizes for the winners.",
            status: "upcoming"
        },
        {
            title: "New Member Orientation",
            date: "Ongoing",
            description: "Welcome new members to our alliance with guided tours and introduction sessions.",
            status: "ongoing"
        },
        {
            title: "Alliance Meeting",
            date: "Next Sunday",
            description: "Monthly alliance meeting to discuss strategies, upcoming events, and alliance business.",
            status: "upcoming"
        },
        {
            title: "Guild Wars Preparation",
            date: "Next Wednesday",
            description: "Strategic planning session for upcoming guild wars and territory control.",
            status: "upcoming"
        },
        {
            title: "Community Night",
            date: "Every Thursday",
            description: "Relaxed gaming session where members can socialize and play together casually.",
            status: "ongoing"
        }
    ];

    // Function to create guild cards
    function createGuildCard(guild) {
        console.log('Creating guild card for:', guild.name);
        const logoElement = guild.logo && guild.logo.includes('.png') 
            ? `<img src="${guild.logo}" alt="${guild.name} logo" class="guild-logo-img">`
            : `<div class="guild-logo">${guild.logo || '⚔️'}</div>`;
        
        return `
            <div class="guild-card">
                ${logoElement}
                <h3 class="guild-name">${guild.name}</h3>
                <p class="guild-members">${guild.members} Members</p>
            </div>
        `;
    }

    // Function to create leader cards
    function createLeaderCard(leader) {
        return `
            <div class="leader-card">
                <div class="leader-avatar">${leader.avatar}</div>
                <h3 class="leader-name">${leader.name}</h3>
                <p class="leader-role">${leader.role}</p>
                <p class="leader-description">${leader.description}</p>
            </div>
        `;
    }

    // Function to create event cards
    function createEventCard(event) {
        return `
            <div class="event-card">
                <div class="event-date">${event.date}</div>
                <h3 class="event-title">${event.title}</h3>
                <p class="event-description">${event.description}</p>
                <span class="event-status ${event.status}">${event.status}</span>
            </div>
        `;
    }

    // Load guilds - now handled directly in HTML
    function loadGuilds() {
        console.log('Guilds are now directly in HTML - no JavaScript loading needed');
    }

    // Load leaders
    function loadLeaders() {
        const leadersGrid = document.getElementById('leadersGrid');
        if (leadersGrid) {
            leadersGrid.innerHTML = leadersData.map(createLeaderCard).join('');
        }
    }

    // Load events - now handled directly in HTML
    function loadEvents() {
        console.log('Events are now directly in HTML - no JavaScript loading needed');
    }

    // Initialize the website
    function init() {
        console.log('Initializing website...');
        loadGuilds();
        loadLeaders();
        loadEvents();
        console.log('Website initialization complete');
        
        // Add scroll effect to navbar
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                if (window.scrollY > 100) {
                    navbar.style.background = 'rgba(26, 15, 10, 0.98)';
                } else {
                    navbar.style.background = 'rgba(26, 15, 10, 0.95)';
                }
            }
        });
        
        // Add parallax effect to hero background
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const stars = document.querySelector('.stars');
            const nebula = document.querySelector('.nebula');
            
            if (stars) {
                stars.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
            if (nebula) {
                nebula.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
        });

        // Guild modal interactions
        const guildCards = document.querySelectorAll('.guild-card');
        const guildModal = document.getElementById('guildModal');
        const guildModalImg = document.getElementById('guildModalImage');
        const guildModalCaption = document.getElementById('guildModalCaption');
        const guildModalClose = document.querySelector('.guild-modal-close');
        const guildModalBackdrop = document.querySelector('.guild-modal-backdrop');

        function openGuildModal(src, caption) {
            if (!guildModal || !guildModalImg) return;
            guildModalImg.src = src;
            if (guildModalCaption) guildModalCaption.textContent = caption || '';
            guildModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeGuildModal() {
            if (!guildModal) return;
            guildModal.classList.remove('active');
            document.body.style.overflow = '';
            if (guildModalImg) guildModalImg.src = '';
        }

        guildCards.forEach(card => {
            card.addEventListener('click', () => {
                const img = card.querySelector('img.guild-logo-img');
                const name = card.querySelector('.guild-name')?.textContent?.trim() || 'Guild';
                if (img && img.getAttribute('src')) {
                    openGuildModal(img.getAttribute('src'), name);
                }
            });
        });

        if (guildModalClose) guildModalClose.addEventListener('click', closeGuildModal);
        if (guildModalBackdrop) guildModalBackdrop.addEventListener('click', closeGuildModal);
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeGuildModal(); });
    }

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        .animate {
            animation: fadeInUp 0.8s ease-out forwards;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .guild-card,
        .leader-card,
        .event-card {
            opacity: 0;
            transform: translateY(30px);
        }
        
        .guild-card.animate,
        .leader-card.animate,
        .event-card.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .phase-item {
            opacity: 0;
            transform: translateX(-30px);
        }
        
        .phase-item.animate {
            opacity: 1;
            transform: translateX(0);
        }
        
        .feature-card {
            opacity: 0;
            transform: translateY(30px);
        }
        
        .feature-card.animate {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);

    // Initialize contact form
    initializeContactForm();
    
    // Initialize the website
    init();
    console.log('All scripts loaded and executed');
});

// Live Activity Feed
function initActivityFeed() {
    const feed = document.getElementById('activityFeed');
    if (!feed) return;

    const activities = [
        {
            type: 'guild',
            icon: '<i class="fas fa-people-group"></i>',
            title: 'New guild joined LIFE Alliance',
            meta: 'Sleeping Forest • Level 62 • 33 members',
            link: { href: '#', label: 'Ankama Page' }
        },
        {
            type: 'event',
            icon: '<i class="fas fa-trophy"></i>',
            title: 'The Rise of the Alliance - Winners',
            meta: 'Winners will be announced on September 25',
            link: null
        },
        {
            type: 'lottery',
            icon: '<i class="fas fa-ticket"></i>',
            title: 'Weekly Lottery Winner',
            meta: 'Monday winner: Terro',
            link: null
        }
    ];

    feed.innerHTML = activities.map(a => `
        <div class="activity-item">
            <div class="activity-icon">${a.icon}</div>
            <div class="activity-content">
                <div class="activity-title">${a.title}</div>
                <div class="activity-meta">${a.meta}</div>
            </div>
            <div class="activity-link">${a.link ? `<a href="${a.link.href}" target="_blank" rel="noopener">${a.link.label}</a>` : ''}</div>
        </div>
    `).join('');
}

// Live Ticker (Google Sheet source)
function initTicker() {
    const track = document.getElementById('tickerTrack');
    if (!track) return;

    // Configure your Google Sheet here
    const SHEET_ID = '1feQUP1HPPxg0pHkahLxqgVqdcjAJwhTzamfsgm62OfQ';
    const SHEET_NAME = 'Sheet1'; // Change if you rename the tab
    const BASE_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${encodeURIComponent(SHEET_NAME)}&tqx=out:json`;

    let lastItems = [];

    function iconForType(type) {
        switch ((type || '').toLowerCase()) {
            case 'guild': return '<i class="fas fa-people-group"></i>';
            case 'event': return '<i class="fas fa-trophy"></i>';
            case 'lottery': return '<i class="fas fa-ticket"></i>';
            case 'milestone': return '<i class="fas fa-flag-checkered"></i>';
            case 'notice': return '<i class="fas fa-bell"></i>';
            default: return '<i class="fas fa-scroll"></i>';
        }
    }

    function render(items) {
        if (!items || items.length === 0) return;
        // Duplicate items for a long seamless track
        const multiplied = items.length < 6 ? [...items, ...items, ...items] : items;
        track.innerHTML = multiplied.map(it => {
            const linkHtml = it.link && it.link.href ? ` — <a href="${it.link.href}" target="_blank" rel="noopener">${it.link.label || 'Link'}</a>` : '';
            return `<span class="ticker-item">${iconForType(it.type)}<span>${it.text}</span>${linkHtml}</span>`;
        }).join('');
        
        // Remove loading animation and restore full opacity
        track.style.opacity = '1';
        track.style.animation = 'none';
        // Force reflow
        void track.offsetWidth;
        track.style.animation = '';
    }

    function parseGviz(text) {
        const match = text.match(/google\.visualization\.Query\.setResponse\(([\s\S]+)\);/);
        if (!match) throw new Error('Unexpected GViz response');
        const json = JSON.parse(match[1]);
        const table = json.table;
        const labels = table.cols.map(c => (c.label || '').toLowerCase());
        // Fallback to fixed column positions if labels are missing
        const idx = {
            timestamp: labels.indexOf('timestamp'),
            type: labels.indexOf('type'),
            text: labels.indexOf('text'),
            link: labels.indexOf('link'),
            label: labels.indexOf('label')
        };
        if (idx.timestamp === -1 && idx.type === -1 && idx.text === -1) {
            idx.timestamp = 0; idx.type = 1; idx.text = 2; idx.link = 3; idx.label = 4;
        }
        const rows = (table.rows || []).map(r => (r.c || []).map(cell => cell ? (cell.f || cell.v) : ''));
        // Map to our item structure and filter out empty texts; skip header row if present
        const items = rows.map(r => ({
            timestamp: idx.timestamp >= 0 ? r[idx.timestamp] : '',
            type: idx.type >= 0 ? r[idx.type] : '',
            text: idx.text >= 0 ? r[idx.text] : '',
            link: (idx.link >= 0 && r[idx.link]) ? { href: r[idx.link], label: (idx.label >= 0 ? (r[idx.label] || 'Open') : 'Open') } : null
        })).filter(it => {
            const isHeader = String(it.text).toLowerCase() === 'text' || String(it.type).toLowerCase() === 'type';
            return !isHeader && it.text && typeof it.text === 'string';
        });
        // Sort by timestamp desc if present
        items.sort((a, b) => {
            const ta = Date.parse(a.timestamp) || 0;
            const tb = Date.parse(b.timestamp) || 0;
            return tb - ta;
        });
        return items;
    }

    async function load() {
        try {
            const url = `${BASE_URL}&t=${Date.now()}`; // cache-bust
            const res = await fetch(url, { cache: 'no-store' });
            const text = await res.text();
            const items = parseGviz(text);
            if (items && items.length) {
                lastItems = items;
                render(items);
            } else if (lastItems.length) {
                render(lastItems);
            }
        } catch (err) {
            console.warn('Ticker fetch error:', err);
            if (lastItems.length) render(lastItems);
        }
    }

    // Initial render with placeholders while first fetch completes
    const placeholders = [
        { type: 'notice', text: 'Loading latest updates…' }
    ];
    render(placeholders);
    
    // Add loading animation to ticker
    track.style.opacity = '0.7';
    track.style.animation = 'pulse 1.5s ease-in-out infinite';
    
    load();
    setInterval(load, 90000); // refresh every 90s

    // Optional: if ticker viewport is scrollable, pause/resume animation after manual scroll
    const viewport = document.querySelector('.ticker-viewport');
    if (!viewport) return;
    let resumeTimer = null;
    viewport.addEventListener('scroll', () => {
        track.style.animationPlayState = 'paused';
        if (resumeTimer) clearTimeout(resumeTimer);
        resumeTimer = setTimeout(() => {
            track.style.animationPlayState = 'running';
        }, 3000);
    }, { passive: true });
}

// Contact Form Functionality
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    console.log('Initializing contact form...');
    console.log('Contact form element:', contactForm);
    console.log('Form status element:', formStatus);
    
    if (!contactForm) {
        console.error('Contact form not found!');
        return;
    }
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const messageType = formData.get('messageType');
        const message = formData.get('message');
        const priority = formData.get('priority');
        
        // Validate form
        if (!messageType || !message.trim()) {
            showFormStatus('Please fill in all required fields.', 'error');
            return;
        }
        
        // Show loading state
        showFormStatus('Sending message...', 'loading');
        
        try {
            // Send to Discord webhook
            await sendToDiscord(messageType, message, priority);
            showFormStatus('Message sent successfully! We\'ll get back to you soon.', 'success');
            contactForm.reset();
        } catch (error) {
            console.error('Error sending message:', error);
            showFormStatus('Failed to send message. Please try again later.', 'error');
        }
    });
}

function showFormStatus(message, type) {
    const formStatus = document.getElementById('formStatus');
    if (!formStatus) return;
    
    formStatus.textContent = message;
    formStatus.className = `form-status ${type}`;
    
    // Auto-hide success messages after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
    }
}

async function sendToDiscord(messageType, message, priority) {
    // Discord Webhook URL - Life Alliance Contact Channel
    const webhookUrl = 'https://discord.com/api/webhooks/1417253678192132199/KZGOlgVOEsB4piTqQ7-RhX2jtvC0lEWCc0v-Io-mkm05vOAvdepMem2EZ3h5WEdUGYw9';
    
    // Priority emojis
    const priorityEmojis = {
        low: '🟢',
        medium: '🟡', 
        high: '🔴'
    };
    
    // Message type emojis
    const typeEmojis = {
        join: '🤝',
        guild: '🏰',
        event: '🎉',
        suggestion: '💡',
        complaint: '⚠️',
        other: '📝'
    };
    
    const embed = {
        title: `${typeEmojis[messageType]} New Contact Message`,
        color: priority === 'high' ? 0xff0000 : priority === 'medium' ? 0xffaa00 : 0x00ff00,
        fields: [
            {
                name: 'Type',
                value: messageType.charAt(0).toUpperCase() + messageType.slice(1),
                inline: true
            },
            {
                name: 'Priority',
                value: `${priorityEmojis[priority]} ${priority.charAt(0).toUpperCase() + priority.slice(1)}`,
                inline: true
            },
            {
                name: 'Message',
                value: message,
                inline: false
            }
        ],
        footer: {
            text: 'Life Alliance Contact Form',
            icon_url: 'https://cdn.discordapp.com/attachments/your-icon-url-here'
        },
        timestamp: new Date().toISOString()
    };
    
    const payload = {
        content: `**New anonymous message received!** ${priorityEmojis[priority]}`,
        embeds: [embed]
    };
    
    const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    });
    
    if (!response.ok) {
        throw new Error(`Discord webhook failed: ${response.status}`);
    }
}

// Simple Dofus Time Clock
function showTime() {
    const timeElement = document.getElementById('timeDisplay');
    if (timeElement) {
        const now = new Date();
        const parisTime = new Date(now.toLocaleString("en-US", {timeZone: "Europe/Paris"}));
        
        const hours = parisTime.getHours().toString().padStart(2, '0');
        const minutes = parisTime.getMinutes().toString().padStart(2, '0');
        const seconds = parisTime.getSeconds().toString().padStart(2, '0');
        
        // Update the span inside the time display, not the entire element
        const timeSpan = timeElement.querySelector('span');
        if (timeSpan) {
            timeSpan.textContent = `${hours}:${minutes}:${seconds}`;
        } else {
            timeElement.textContent = `${hours}:${minutes}:${seconds}`;
        }
    }
}

// Start the clock
showTime();
setInterval(showTime, 1000);

// Mobile title visibility
function toggleMobileTitle() {
    const mobileTitle = document.querySelector('.mobile-only-title');
    const desktopTitle = document.querySelector('.hero-title');
    
    if (window.innerWidth <= 768) {
        // Mobile - show mobile title, hide desktop title
        if (mobileTitle) mobileTitle.style.display = 'block';
        if (desktopTitle) desktopTitle.style.display = 'none';
    } else {
        // Desktop - show desktop title, hide mobile title
        if (mobileTitle) mobileTitle.style.display = 'none';
        if (desktopTitle) desktopTitle.style.display = 'block';
    }
}

// Run on load and resize
window.addEventListener('load', toggleMobileTitle);
window.addEventListener('resize', toggleMobileTitle);

// PWA Installation and Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('Life Alliance PWA: Service Worker registered successfully');
            })
            .catch((error) => {
                console.log('Life Alliance PWA: Service Worker registration failed');
            });
    });
}

// PWA Install Prompt - Removed as requested to avoid overlap with ticker

// Offline Detection
window.addEventListener('online', () => {
    console.log('Life Alliance PWA: Back online');
    showNotification('You are back online!', 'success');
});

window.addEventListener('offline', () => {
    console.log('Life Alliance PWA: Gone offline');
    showNotification('You are offline. Some features may be limited.', 'warning');
});

// Notification Permission
function requestNotificationPermission() {
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                console.log('Life Alliance PWA: Notification permission granted');
            }
        });
    }
}

// Show notification helper
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `pwa-notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'warning' ? '#FF9800' : '#2196F3'};
        color: white;
        padding: 12px 20px;
        border-radius: 5px;
        z-index: 10001;
        font-family: 'Cinzel', serif;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Request notification permission on first visit
setTimeout(requestNotificationPermission, 2000);
