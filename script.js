// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing website...');
    
    // DOM Elements
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

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
                    animateCounter(document.getElementById('memberCount'), 3595);
                    animateCounter(document.getElementById('guildCount'), 22);
                    animateCounter(document.getElementById('onlineCount'), 100);
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
        "members": 248,
        "logo": "Guilds logo and names/- Amanecer -.png"
      },
      {
        "name": "Vesperion",
        "members": 205,
        "logo": "Guilds logo and names/-A-Vesperion-.png"
      },
      {
        "name": "Demigods",
        "members": 138,
        "logo": "Guilds logo and names/Demigods.png"
      },
      {
        "name": "Enderun",
        "members": 98,
        "logo": "Guilds logo and names/Enderun.png"
      },
      {
        "name": "Equilibrium Vita",
        "members": 246,
        "logo": "Guilds logo and names/Equilibrium Vita.png"
      },
      {
        "name": "Family Business",
        "members": 227,
        "logo": "Guilds logo and names/Family Business.png"
      },
      {
        "name": "FrenchLEADER",
        "members": 193,
        "logo": "Guilds logo and names/FrenchLEADER.png"
      },
      {
        "name": "Guardians",
        "members": 209,
        "logo": "Guilds logo and names/Guardians.png"
      },
      {
        "name": "IMPERIVM",
        "members": 118,
        "logo": "Guilds logo and names/I M P E R I V M.png"
      },
      {
        "name": "Italians",
        "members": 142,
        "logo": "Guilds logo and names/Italians.png"
      },
      {
        "name": "Krosmic Fluxx",
        "members": 234,
        "logo": "Guilds logo and names/Krosmic Fluxx.png"
      },
      {
        "name": "Nemesis",
        "members": 166,
        "logo": "Guilds logo and names/Nemesis.png"
      },
      {
        "name": "Nomads",
        "members": 9,
        "logo": "Guilds logo and names/Nomads.png"
      },
      {
        "name": "Perfect Guild",
        "members": 192,
        "logo": "Guilds logo and names/perfect guild.png"
      },
      {
        "name": "Punishment",
        "members": 214,
        "logo": "Guilds logo and names/Punishment.png"
      },
      {
        "name": "SAQ SELECTION",
        "members": 47,
        "logo": "Guilds logo and names/SAQ SELECTION.png"
      },
      {
        "name": "Sausage Fingers Society",
        "members": 94,
        "logo": "Guilds logo and names/Sausage Fingers Society.png"
      },
      {
        "name": "Sparta",
        "members": 232,
        "logo": "Guilds logo and names/sparta logoo.png"
      },
      {
        "name": "The Trenches",
        "members": 35,
        "logo": "Guilds logo and names/The Trenches.png"
      },
      {
        "name": "Thieves",
        "members": 244,
        "logo": "Guilds logo and names/Thieves.png"
      },
      {
        "name": "Tight",
        "members": 132,
        "logo": "Guilds logo and names/Tight.png"
      },
      {
        "name": "Vendetta",
        "members": 182,
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

    // Initialize the website
    init();
    console.log('All scripts loaded and executed');
});
