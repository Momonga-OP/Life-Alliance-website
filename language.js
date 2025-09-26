// Language System for Life Alliance Website
// Supports English and Spanish

const languages = {
    en: {
        // Navigation
        nav: {
            home: "Home",
            about: "About", 
            guilds: "Guilds",
            phases: "Phases",
            leaders: "Leaders",
            events: "Events",
            discord: "Discord",
            contact: "Contact"
        },
        
        // Hero Section
        hero: {
            title: "LIFE ALLIANCE",
            subtitle: "The Biggest English Speaking Alliance",
            server: "Dofus Touch - Blair Server",
            stats: {
                guilds: "Guilds",
                members: "Active Members", 
                leaders: "Online Now"
            }
        },
        
        // Buttons
        buttons: {
            learnMore: "Learn More"
        },
        
        // About Section
        about: {
            title: "About Life Alliance",
            description: "Our mission is to create a space where every guild has a voice, every member has a role, and every fight is an opportunity to grow stronger together. Whether in PvP, PvM, or AvA, LIFE Alliance is about more than winning it's about belonging.",
            features: {
                unity: {
                    title: "International Unity",
                    description: "Bringing together players from all languages and cultures"
                },
                home: {
                    title: "A True Home", 
                    description: "More than an alliance - a family where everyone belongs"
                },
                diversity: {
                    title: "Diversity is Strength",
                    description: "Proving that different backgrounds create stronger teams"
                }
            }
        },
        
        // Mission Section
        mission: {
            title: "Our Mission",
            description1: "LIFE Alliance stands as the home of the international community on the Blair Server where English, Spanish, French, Italian, and more players come together under one banner. We are more than just an alliance: we are a family built on friendship, teamwork, and the will to keep Blair diverse and alive.",
            description2: "Our mission is to create a space where every guild has a voice, every member has a role, and every fight is an opportunity to grow stronger together. Whether in PvP, PvM, or AvA, LIFE Alliance is about more than winning it's about belonging.",
            slogan1: "Your guild deserves more than just an alliance.",
            slogan2: "It deserves a home. It deserves LIFE.",
            vision: {
                title: "Our Vision",
                subtitle: "We strive to:",
                goal1: "Keep the international spirit alive in a server dominated by single-language groups.",
                goal2: "Foster a community where activity, fairness, and respect are the foundations.",
                goal3: "Compete in PvP, PvM, and AvA not only to win, but to show that diversity is strength.",
                goal4: "Create an environment where every guild can grow, every leader can contribute, and every player can feel proud to wear the LIFE tag."
            }
        },
        
        // Guilds Section
        guilds: {
            title: "Our Guilds",
            description: "Each guild brings its unique strengths and culture to our alliance"
        },
        
        // Phases Section
        phases: {
            title: "Alliance Phases",
            phase1: {
                title: "Phase 1 – Foundation",
                focus: "Focus: Stabilize & Engage",
                goal1: "Strengthen leadership presence (introduce the leadership team clearly)",
                goal2: "Increase activity through consistent events (lotteries, PvM/PvP, features)",
                goal3: "Encourage guild leaders to show visibility in Discord and game",
                goal4: "Build identity: \"LIFE = International Home of Blair\"",
                goal: "Goal: Reignite activity and stabilize at 100–120 peak actives",
                status: "In Progress"
            },
            phase2: {
                title: "Phase 2 – Expansion",
                focus: "Focus: Recruitment & Growth",
                goal1: "Attract new guilds with bilingual recruitment (ENG/SPA/FR)",
                goal2: "Form soft partnerships with mid size guilds",
                goal3: "Promote LIFE's international uniqueness across forums and Discords",
                goal4: "Use big events (like your PvP/PvM with 55mk prize) as recruitment showcases",
                goal: "Goal: Grow to 5k+ members across all guilds, visible as Blair's international hub",
                status: "Upcoming"
            },
            phase3: {
                title: "Phase 3 – Coordination",
                focus: "Focus: Training & Structure",
                goal1: "Form strike teams (8–16 Teams) that can be reliably mobilized",
                goal2: "Run mock AvAs and practice drills with leadership callers",
                goal3: "Establish clear communication channels (Discord squads, AvA voice rooms)",
                goal4: "Rotate leadership duties (events, recruitment, PvP organization)",
                goal: "Goal: 250 reliable fighters, 3 trained squads, council-led structure working smoothly",
                status: "Upcoming"
            },
            phase4: {
                title: "Phase 4 – AvA Relaunch",
                focus: "Focus: Visibility & War Readiness",
                goal1: "Launch a hype campaign (\"LIFE STRIKES BACK\")",
                goal2: "Organize 2 final mock AvAs with mandatory participation",
                goal3: "Relaunch with a major AvA attempt (aim for 400–500 fighters)",
                goal4: "Publicly recap the war, even if we lose → visibility builds momentum",
                goal: "Goal: Successful return to AvA, LIFE recognized as a serious force",
                status: "Upcoming"
            },
            phase5: {
                title: "Phase 5 – Legacy",
                focus: "Focus: Sustain & Evolve",
                goal1: "Establish a cadence (1 AvA every 2–3 weeks)",
                goal2: "Mentor smaller guilds to secure loyalty and pipeline growth",
                goal3: "Celebrate community with monthly awards (best fighter, recruiter, etc.)",
                goal4: "Keep Discord active with ongoing mini events (lotteries, Easter eggs, debate)",
                goal: "Goal: LIFE becomes the long term international alliance of Blair, known for both community and competitiveness",
                status: "Upcoming"
            }
        },
        
        // Leaders Section
        leaders: {
            title: "Leadership Team",
            description: "Meet the dedicated leaders who guide our alliance",
            flipHint: "Hover to flip",
            carousel: {
                prev: "Previous leader",
                next: "Next leader",
                goTo: "Go to leader",
                autoNext: "Auto next in:",
                userControl: "Click arrows, dots, or swipe to control"
            },
            candee: {
                role: "Community Management & Recruitment",
                desc1: "Hello, I am Can-dee, your next door neighbour cat lady that smells like naphthalene.",
                desc2: "I have been playing dofus back in 2009 (pls dont try guessing my age) and Touch since 2017.",
                desc3: "In game I have done everything from leading alliances, going to war, hosting events, creating communities to quiting and coming back 69 times and counting.",
                desc4: "In an attempt to not bore you any further with my resumé, my role in LIFE is lending some of my old-lady knowledge in regards to community management and recruitment. My special ability is finding solutions to all kinds of drama, while remaining funny, charismatic, but mostly modest.",
                desc5: "I am eager to see where LIFE takes us. Here's to hoping we can all communicate and accomplish our goals - together -"
            },
            boriss: {
                role: "Guild Recruitment & Strategy",
                desc1: "Hello my name is Boriss and I started playing Dofus during the beta on PC, used to play on Rushu and was one the first people crazy enough to reach level 200.",
                desc2: "After many breaks im back on Dodge and used to have a own guild and lead this alliance. After A while we decided to merge with Guardians since Dodge was dead.",
                desc3: "I enjoy PvP and PvM (Besides Wind dojo, fuck that place). My current role in the leaderteam is getting new guilds in and trying to be funny once in a while."
            },
            terro: {
                role: "Leadership Team",
                desc1: "Terro's profile coming soon...",
                desc2: "Stay tuned for more information about this amazing leader!"
            },
            latif: {
                role: "Alliance Leader",
                desc1: "Hello everyone, I'm Latif, though most of you probably know me better as Momonga.",
                desc2: "I started on Dofus Touch I'm not as much of a veteran as some of the others, used to lead a guild called Moroclan now im the leader of Sparta guild.",
                desc3: "In LIFE, I serve as the Alliance Leader. I'll be honest: I'm not the best at PvM or PvP, and I don't play as much these days as I used to."
            },
            zubic: {
                role: "Voice of Life",
                desc1: "Heya! I'm Zubic-Vila",
                desc2: "Been casting spells and chasing quests since 2007 on good ol' Rushu. Took a few long naps but came back swinging in Dofus Touch on Dodge around 2020.",
                desc3: "Joined Soul, climbed the ranks like a true gobball whisperer, and ended up leading the guild! In 2024, we merged into Guardians, and now I'm the proud second-in-command. My current role in the leadership team is being the \"Voice of Life\" — aka the one annoying everyone with announcements, reminders, and stuff to read. If it pops up in alliance chat and sounds suspiciously organized... yeah, that might be me...",
                desc4: "I'm all about PvM, especially if it involves quests, lore, and helping friends through dungeons they swore they'd never do again. If you need help, a laugh, or someone to look at you with nothing but subtitles on her face — I'm your fairy."
            }
        },
        
        // Events Section
        events: {
            title: "Upcoming Events",
            description: "Join us for exciting events and competitions",
            event1: {
                date: "September 16th",
                title: "The Rise of the Alliance - First PVP/PVM Event",
                description: "We will be launching our very first PVP/PVM Event as the Life Alliance on the new server. This is a historic moment for our alliance as we establish our presence and showcase our strength to the Blair Server community.",
                download: "Download Event Details (PDF)",
                status: "Ongoing"
            },
            event2: {
                date: "Sunday, September 28th, 2025 at 21:00 (Dofus Time)",
                title: "LIFE vs INT Alliance - PvP Tournament",
                description: "Prepare for an epic showdown! This Sunday at 9:00 PM (Dofus time), LIFE Alliance faces off against INT Alliance in an intense 4 vs 4 PvP tournament. Witness the clash of titans as our best warriors compete for glory and honor. Join us in Discord to cheer on our champions!",
                watch: "Join Discord to Watch",
                status: "Upcoming"
            },
            event3: {
                date: "Daily",
                title: "Debate Me Event",
                description: "Every day, our Discord bot (Spectra) posts a debate prompt in the #debate-me channel. Topics are always related to the game, and members are free to reply with their opinions, share experiences, and use examples from the game.",
                download: "Download Debate Rules (PDF)",
                status: "Ongoing"
            }
        },
        
        // Discord Section
        discord: {
            title: "Join Our Community",
            description: "Connect with fellow alliance members on Discord",
            button: "Join Discord Server",
            features: [
                "Real-time communication",
                "Event announcements", 
                "Strategy discussions",
                "Social interactions"
            ]
        },
        
        // Contact Section
        contact: {
            title: "Contact Us",
            description: "Have questions, suggestions, or want to join our alliance? Send us an anonymous message and we'll get back to you through Discord!",
            form: {
                title: "Send us a Message",
                description: "Have questions, suggestions, or want to join our alliance? Send us an anonymous message and we'll get back to you through Discord!",
                messageType: "Message Type",
                selectCategory: "Select a category",
                joinAlliance: "Want to Join Alliance",
                guildRecruitment: "Guild Recruitment",
                eventQuestion: "Event Question",
                suggestion: "Suggestion",
                complaint: "Complaint",
                other: "Other",
                yourMessage: "Your Message",
                messagePlaceholder: "Write your message here...",
                priorityLevel: "Priority Level",
                priorityLow: "Low - General inquiry",
                priorityMedium: "Medium - Important question",
                priorityHigh: "High - Urgent matter",
                sendMessage: "Send Message"
            },
            features: {
                anonymous: "Anonymous Messaging",
                instant: "Instant Delivery",
                discord: "Discord Integration"
            }
        },
        footer: {
            home: "Home",
            about: "About",
            guilds: "Guilds",
            discord: "Discord",
            allianceName: "LIFE Alliance",
            rights: "All rights reserved",
            server: "Dofus Touch - Blair Server"
        },
        guilds: {
            title: "Our Guilds",
            description: "Each guild brings its unique strengths and culture to our alliance",
            members: "Members"
        },
        
        // Footer
        footer: {
            rights: "All rights reserved",
            description: "Uniting players across all servers in epic adventures"
        },
        
        // Buttons
        buttons: {
            learnMore: "Learn More",
            joinUs: "Join Us",
            download: "Download",
            viewDetails: "View Details"
        },
        
        // Time Display
        time: {
            dofusTime: "Dofus Touch Time",
            loading: "Loading..."
        }
    },
    
    es: {
        // Navigation
        nav: {
            home: "Inicio",
            about: "Acerca de", 
            guilds: "Gremios",
            phases: "Fases",
            leaders: "Líderes",
            events: "Eventos",
            discord: "Discord",
            contact: "Contacto"
        },
        
        // Hero Section
        hero: {
            title: "LIFE ALLIANCE",
            subtitle: "La Alianza de Habla Inglesa Más Grande",
            server: "Dofus Touch - Servidor Blair",
            stats: {
                guilds: "Gremios",
                members: "Miembros Activos", 
                leaders: "En Línea Ahora"
            }
        },
        
        // Buttons
        buttons: {
            learnMore: "Aprende Más"
        },
        
        // About Section
        about: {
            title: "Acerca de Alianza Vida",
            description: "Nuestra misión es crear un espacio donde cada gremio tenga voz, cada miembro tenga un rol, y cada pelea sea una oportunidad para crecer más fuerte juntos. Ya sea en PvP, PvM, o AvA, Alianza Vida es más que ganar, es pertenecer.",
            features: {
                unity: {
                    title: "Unidad Internacional",
                    description: "Reuniendo jugadores de todos los idiomas y culturas"
                },
                home: {
                    title: "Un Verdadero Hogar", 
                    description: "Más que una alianza - una familia donde todos pertenecen"
                },
                diversity: {
                    title: "La Diversidad es Fuerza",
                    description: "Demostrando que diferentes orígenes crean equipos más fuertes"
                }
            }
        },
        
        // Mission Section
        mission: {
            title: "Nuestra Misión",
            description1: "Alianza VIDA se erige como el hogar de la comunidad internacional en el Servidor Blair donde jugadores de inglés, español, francés, italiano y más se unen bajo una sola bandera. Somos más que una alianza: somos una familia construida sobre amistad, trabajo en equipo y la voluntad de mantener Blair diverso y vivo.",
            description2: "Nuestra misión es crear un espacio donde cada gremio tenga voz, cada miembro tenga un rol, y cada pelea sea una oportunidad para crecer más fuerte juntos. Ya sea en PvP, PvM, o AvA, Alianza VIDA es más que ganar, es pertenecer.",
            slogan1: "Tu gremio merece más que solo una alianza.",
            slogan2: "Merece un hogar. Merece VIDA.",
            vision: {
                title: "Nuestra Visión",
                subtitle: "Nos esforzamos por:",
                goal1: "Mantener vivo el espíritu internacional en un servidor dominado por grupos de un solo idioma.",
                goal2: "Fomentar una comunidad donde la actividad, la justicia y el respeto sean los fundamentos.",
                goal3: "Competir en PvP, PvM y AvA no solo para ganar, sino para mostrar que la diversidad es fuerza.",
                goal4: "Crear un ambiente donde cada gremio pueda crecer, cada líder pueda contribuir, y cada jugador pueda sentirse orgulloso de llevar la etiqueta VIDA."
            }
        },
        
        // Guilds Section
        guilds: {
            title: "Nuestros Gremios",
            description: "Cada gremio aporta sus fortalezas únicas y cultura a nuestra alianza"
        },
        
        // Phases Section
        phases: {
            title: "Fases de la Alianza",
            phase1: {
                title: "Fase 1 – Fundación",
                focus: "Enfoque: Estabilizar y Comprometer",
                goal1: "Fortalecer la presencia del liderazgo (presentar claramente el equipo de liderazgo)",
                goal2: "Aumentar la actividad a través de eventos consistentes (loterías, PvM/PvP, características)",
                goal3: "Animar a los líderes de gremios a mostrar visibilidad en Discord y el juego",
                goal4: "Construir identidad: \"VIDA = Hogar Internacional de Blair\"",
                goal: "Objetivo: Reavivar la actividad y estabilizar en 100-120 activos pico",
                status: "En Progreso"
            },
            phase2: {
                title: "Fase 2 – Expansión",
                focus: "Enfoque: Reclutamiento y Crecimiento",
                goal1: "Atraer nuevos gremios con reclutamiento bilingüe (ING/ESP/FR)",
                goal2: "Formar asociaciones suaves con gremios de tamaño medio",
                goal3: "Promover la singularidad internacional de VIDA en foros y Discords",
                goal4: "Usar grandes eventos (como tu PvP/PvM con premio de 55mk) como vitrinas de reclutamiento",
                goal: "Objetivo: Crecer a 5k+ miembros en todos los gremios, visible como el centro internacional de Blair",
                status: "Próximo"
            },
            phase3: {
                title: "Fase 3 – Coordinación",
                focus: "Enfoque: Entrenamiento y Estructura",
                goal1: "Formar equipos de ataque (8-16 Equipos) que puedan ser movilizados de manera confiable",
                goal2: "Ejecutar AvAs simuladas y ejercicios de práctica con llamadores de liderazgo",
                goal3: "Establecer canales de comunicación claros (escuadrones de Discord, salas de voz AvA)",
                goal4: "Rotar deberes de liderazgo (eventos, reclutamiento, organización PvP)",
                goal: "Objetivo: 250 luchadores confiables, 3 escuadrones entrenados, estructura dirigida por consejo funcionando sin problemas",
                status: "Próximo"
            },
            phase4: {
                title: "Fase 4 – Relanzamiento AvA",
                focus: "Enfoque: Visibilidad y Preparación para la Guerra",
                goal1: "Lanzar una campaña de hype (\"VIDA CONTRAATACA\")",
                goal2: "Organizar 2 AvAs simuladas finales con participación obligatoria",
                goal3: "Relanzar con un intento AvA importante (apuntar a 400-500 luchadores)",
                goal4: "Recapitular públicamente la guerra, incluso si perdemos → la visibilidad genera impulso",
                goal: "Objetivo: Retorno exitoso a AvA, VIDA reconocida como una fuerza seria",
                status: "Próximo"
            },
            phase5: {
                title: "Fase 5 – Legado",
                focus: "Enfoque: Sostener y Evolucionar",
                goal1: "Establecer un ritmo (1 AvA cada 2-3 semanas)",
                goal2: "Mentorizar gremios más pequeños para asegurar lealtad y crecimiento de canal",
                goal3: "Celebrar la comunidad con premios mensuales (mejor luchador, reclutador, etc.)",
                goal4: "Mantener Discord activo con mini eventos continuos (loterías, huevos de Pascua, debate)",
                goal: "Objetivo: VIDA se convierte en la alianza internacional a largo plazo de Blair, conocida tanto por la comunidad como por la competitividad",
                status: "Próximo"
            }
        },
        
        // Leaders Section
        leaders: {
            title: "Equipo de Liderazgo",
            description: "Conoce a los líderes dedicados que guían nuestra alianza",
            flipHint: "Pasa el cursor para voltear",
            carousel: {
                prev: "Líder anterior",
                next: "Siguiente líder",
                goTo: "Ir al líder",
                autoNext: "Siguiente automático en:",
                userControl: "Haz clic en las flechas, puntos o desliza para controlar"
            },
            candee: {
                role: "Gestión de Comunidad y Reclutamiento",
                desc1: "Hola, soy Can-dee, tu vecina de al lado que es una señora de los gatos que huele a naftalina.",
                desc2: "He estado jugando dofus desde 2009 (por favor no trates de adivinar mi edad) y Touch desde 2017.",
                desc3: "En el juego he hecho de todo, desde liderar alianzas, ir a la guerra, organizar eventos, crear comunidades hasta renunciar y volver 69 veces y contando.",
                desc4: "En un intento de no aburrirte más con mi currículum, mi rol en VIDA es prestar algo de mi conocimiento de señora mayor en cuanto a gestión de comunidad y reclutamiento. Mi habilidad especial es encontrar soluciones a todo tipo de drama, mientras permanezco divertida, carismática, pero sobre todo modesta.",
                desc5: "Estoy ansiosa por ver a dónde nos lleva VIDA. Aquí está la esperanza de que todos podamos comunicarnos y lograr nuestros objetivos - juntos -"
            },
            boriss: {
                role: "Reclutamiento de Gremios y Estrategia",
                desc1: "Hola, me llamo Boriss y comencé a jugar Dofus durante la beta en PC, solía jugar en Rushu y fui de los primeros lo suficientemente locos como para alcanzar el nivel 200.",
                desc2: "Después de muchos descansos, estoy de vuelta en Dodge y solía tener un gremio propio y liderar esta alianza. Después de un tiempo decidimos fusionarnos con Guardians ya que Dodge estaba muerto.",
                desc3: "Disfruto del PvP y PvM (Excepto el dojo del viento, odio ese lugar). Mi rol actual en el equipo de líderes es traer nuevos gremios e intentar ser gracioso de vez en cuando."
            },
            terro: {
                role: "Equipo de Liderazgo",
                desc1: "El perfil de Terro llegará pronto...",
                desc2: "¡Mantente atento para más información sobre este increíble líder!"
            },
            latif: {
                role: "Líder de la Alianza",
                desc1: "Hola a todos, soy Latif, aunque la mayoría probablemente me conozcan mejor como Momonga.",
                desc2: "Empecé en Dofus Touch, no soy tan veterano como algunos de los demás, solía liderar un gremio llamado Moroclan, ahora soy el líder del gremio Sparta.",
                desc3: "En VIDA, sirvo como Líder de la Alianza. Seré honesto: no soy el mejor en PvM o PvP, y no juego tanto como antes."
            },
            zubic: {
                role: "Voz de VIDA",
                desc1: "¡Hola! Soy Zubic-Vila",
                desc2: "Lanzando hechizos y persiguiendo misiones desde 2007 en el viejo Rushu. Tomé algunas siestas largas pero volví con fuerza en Dofus Touch en Dodge alrededor de 2020.",
                desc3: "Me uní a Soul, subí de rango como una verdadera susurradora de gobballs y terminé liderando el gremio. En 2024, nos fusionamos con Guardians y ahora soy la orgullosa segunda al mando. Mi rol actual en el equipo de liderazgo es ser la \"Voz de VIDA\" — o sea, la que molesta a todos con anuncios, recordatorios y cosas para leer. Si aparece en el chat de la alianza y suena sospechosamente organizado... sí, probablemente soy yo...",
                desc4: "Me encanta el PvM, especialmente si implica misiones, historia y ayudar a amigos en mazmorras que juraron no volver a hacer. Si necesitas ayuda, una risa, o alguien que te mire con subtítulos en la cara — soy tu hada."
            }
        },
        
        // Events Section
        events: {
            title: "Próximos Eventos",
            description: "Únete a nosotros para eventos emocionantes y competencias",
            event1: {
                date: "16 de Septiembre",
                title: "El Ascenso de la Alianza - Primer Evento PVP/PVM",
                description: "Lanzaremos nuestro primer evento PVP/PVM como Alianza VIDA en el nuevo servidor. Este es un momento histórico para nuestra alianza mientras establecemos nuestra presencia y mostramos nuestra fuerza a la comunidad del Servidor Blair.",
                download: "Descargar Detalles del Evento (PDF)",
                status: "En Curso"
            },
            event2: {
                date: "Domingo, 28 de Septiembre, 2025 a las 21:00 (Hora de Dofus)",
                title: "LIFE vs INT Alliance - Torneo PvP",
                description: "¡Prepárate para un enfrentamiento épico! Este domingo a las 9:00 PM (hora de Dofus), LIFE Alliance se enfrenta contra INT Alliance en un intenso torneo PvP 4 vs 4. ¡Presencia el choque de titanes mientras nuestros mejores guerreros compiten por gloria y honor. ¡Únete a nosotros en Discord para animar a nuestros campeones!",
                watch: "Únete a Discord para Ver",
                status: "Próximo"
            },
            event3: {
                date: "Diario",
                title: "Evento Debate Me",
                description: "Cada día, nuestro bot de Discord (Spectra) publica un tema de debate en el canal #debate-me. Los temas siempre están relacionados con el juego, y los miembros son libres de responder con sus opiniones, compartir experiencias y usar ejemplos del juego.",
                download: "Descargar Reglas de Debate (PDF)",
                status: "En Curso"
            }
        },
        
        // Discord Section
        discord: {
            title: "Únete a Nuestra Comunidad",
            description: "Conéctate con otros miembros de la alianza en Discord",
            button: "Unirse al Servidor de Discord",
            features: [
                "Comunicación en tiempo real",
                "Anuncios de eventos", 
                "Discusiones de estrategia",
                "Interacciones sociales"
            ]
        },
        
        // Contact Section
        contact: {
            title: "Contáctanos",
            description: "¿Tienes preguntas, sugerencias o quieres unirte a nuestra alianza? Envíanos un mensaje anónimo y te responderemos a través de Discord!",
            form: {
                title: "Envíanos un Mensaje",
                description: "¿Tienes preguntas, sugerencias o quieres unirte a nuestra alianza? Envíanos un mensaje anónimo y te responderemos a través de Discord!",
                messageType: "Tipo de Mensaje",
                selectCategory: "Selecciona una categoría",
                joinAlliance: "Quiero Unirme a la Alianza",
                guildRecruitment: "Reclutamiento de Gremio",
                eventQuestion: "Pregunta sobre Evento",
                suggestion: "Sugerencia",
                complaint: "Queja",
                other: "Otro",
                yourMessage: "Tu Mensaje",
                messagePlaceholder: "Escribe tu mensaje aquí...",
                priorityLevel: "Nivel de Prioridad",
                priorityLow: "Baja - Consulta general",
                priorityMedium: "Media - Pregunta importante",
                priorityHigh: "Alta - Asunto urgente",
                sendMessage: "Enviar Mensaje"
            },
            features: {
                anonymous: "Mensajería Anónima",
                instant: "Entrega Instantánea",
                discord: "Integración con Discord"
            }
        },
        footer: {
            home: "Inicio",
            about: "Acerca de",
            guilds: "Gremios",
            discord: "Discord",
            allianceName: "LIFE Alliance",
            rights: "Todos los derechos reservados",
            server: "Dofus Touch - Servidor Blair"
        },
        guilds: {
            title: "Nuestros Gremios",
            description: "Cada gremio aporta sus fortalezas y cultura únicas a nuestra alianza",
            members: "Miembros"
        },
        
        // Footer
        footer: {
            rights: "Todos los derechos reservados",
            description: "Uniendo jugadores de todos los servidores en aventuras épicas"
        },
        
        // Buttons
        buttons: {
            learnMore: "Saber Más",
            joinUs: "Únete",
            download: "Descargar",
            viewDetails: "Ver Detalles"
        },
        
        // Time Display
        time: {
            dofusTime: "Hora de Dofus Touch",
            loading: "Cargando..."
        }
    },
    
    fr: {
        // Navigation
        nav: {
            home: "Accueil",
            about: "À propos", 
            guilds: "Guildes",
            phases: "Phases",
            leaders: "Dirigeants",
            events: "Événements",
            discord: "Discord",
            contact: "Contact"
        },
        
        // Hero Section
        hero: {
            title: "LIFE ALLIANCE",
            subtitle: "La Plus Grande Alliance Francophone",
            server: "Dofus Touch - Serveur Blair",
            stats: {
                guilds: "Guildes",
                members: "Membres Actifs", 
                leaders: "En Ligne Maintenant"
            }
        },
        
        // Buttons
        buttons: {
            learnMore: "En Savoir Plus"
        },
        
        // About Section
        about: {
            title: "À propos de l'Alliance Vie",
            description: "Notre mission est de créer un espace où chaque guilde a une voix, chaque membre a un rôle, et chaque combat est une opportunité de grandir plus fort ensemble. Que ce soit en PvP, PvM, ou AvA, l'Alliance Vie est plus que gagner, c'est appartenir.",
            features: {
                unity: {
                    title: "Unité Internationale",
                    description: "Rassemblant des joueurs de toutes les langues et cultures"
                },
                home: {
                    title: "Un Vrai Foyer", 
                    description: "Plus qu'une alliance - une famille où tout le monde appartient"
                },
                diversity: {
                    title: "La Diversité est une Force",
                    description: "Prouvant que des origines différentes créent des équipes plus fortes"
                }
            }
        },
        
        // Mission Section
        mission: {
            title: "Notre Mission",
            description1: "L'Alliance VIE se dresse comme le foyer de la communauté internationale sur le Serveur Blair où les joueurs anglais, espagnols, français, italiens et plus se rassemblent sous une seule bannière. Nous sommes plus qu'une alliance : nous sommes une famille construite sur l'amitié, le travail d'équipe et la volonté de garder Blair divers et vivant.",
            description2: "Notre mission est de créer un espace où chaque guilde a une voix, chaque membre a un rôle, et chaque combat est une opportunité de grandir plus fort ensemble. Que ce soit en PvP, PvM, ou AvA, l'Alliance VIE est plus que gagner, c'est appartenir.",
            slogan1: "Votre guilde mérite plus qu'une simple alliance.",
            slogan2: "Elle mérite un foyer. Elle mérite la VIE.",
            vision: {
                title: "Notre Vision",
                subtitle: "Nous nous efforçons de :",
                goal1: "Maintenir l'esprit international vivant dans un serveur dominé par des groupes monolingues.",
                goal2: "Favoriser une communauté où l'activité, l'équité et le respect sont les fondations.",
                goal3: "Concourir en PvP, PvM et AvA non seulement pour gagner, mais pour montrer que la diversité est une force.",
                goal4: "Créer un environnement où chaque guilde peut grandir, chaque dirigeant peut contribuer, et chaque joueur peut être fier de porter l'étiquette VIE."
            }
        },
        
        // Guilds Section
        guilds: {
            title: "Nos Guildes",
            description: "Chaque guilde apporte ses forces uniques et sa culture à notre alliance"
        },
        
        // Phases Section
        phases: {
            title: "Phases de l'Alliance",
            phase1: {
                title: "Phase 1 – Fondation",
                focus: "Focus : Stabiliser et Engager",
                goal1: "Renforcer la présence du leadership (présenter clairement l'équipe de direction)",
                goal2: "Augmenter l'activité grâce à des événements cohérents (loterie, PvM/PvP, fonctionnalités)",
                goal3: "Encourager les dirigeants de guilde à montrer leur visibilité sur Discord et en jeu",
                goal4: "Construire l'identité : \"VIE = Foyer International de Blair\"",
                goal: "Objectif : Ranimer l'activité et stabiliser à 100-120 actifs de pointe",
                status: "En Cours"
            },
            phase2: {
                title: "Phase 2 – Expansion",
                focus: "Focus : Recrutement et Croissance",
                goal1: "Attirer de nouvelles guildes avec un recrutement trilingue (ANG/ESP/FR)",
                goal2: "Former des partenariats souples avec des guildes de taille moyenne",
                goal3: "Promouvoir l'unicité internationale de VIE à travers les forums et Discord",
                goal4: "Utiliser les grands événements (comme votre PvP/PvM avec prix de 55mk) comme vitrines de recrutement",
                goal: "Objectif : Croître à 5k+ membres dans toutes les guildes, visible comme le centre international de Blair",
                status: "À Venir"
            },
            phase3: {
                title: "Phase 3 – Coordination",
                focus: "Focus : Formation et Structure",
                goal1: "Former des équipes de frappe (8-16 Équipes) qui peuvent être mobilisées de manière fiable",
                goal2: "Exécuter des AvAs simulées et des exercices d'entraînement avec des appelants de leadership",
                goal3: "Établir des canaux de communication clairs (escouades Discord, salles vocales AvA)",
                goal4: "Faire tourner les devoirs de leadership (événements, recrutement, organisation PvP)",
                goal: "Objectif : 250 combattants fiables, 3 escouades entraînées, structure dirigée par conseil fonctionnant sans problème",
                status: "À Venir"
            },
            phase4: {
                title: "Phase 4 – Relance AvA",
                focus: "Focus : Visibilité et Préparation à la Guerre",
                goal1: "Lancer une campagne de hype (\"VIE CONTRE-ATTAQUE\")",
                goal2: "Organiser 2 AvAs simulées finales avec participation obligatoire",
                goal3: "Relancer avec une tentative AvA majeure (viser 400-500 combattants)",
                goal4: "Récapituler publiquement la guerre, même si nous perdons → la visibilité génère l'élan",
                goal: "Objectif : Retour réussi à AvA, VIE reconnue comme une force sérieuse",
                status: "À Venir"
            },
            phase5: {
                title: "Phase 5 – Héritage",
                focus: "Focus : Maintenir et Évoluer",
                goal1: "Établir un rythme (1 AvA toutes les 2-3 semaines)",
                goal2: "Mentorer les petites guildes pour assurer la loyauté et la croissance du pipeline",
                goal3: "Célébrer la communauté avec des récompenses mensuelles (meilleur combattant, recruteur, etc.)",
                goal4: "Garder Discord actif avec des mini-événements continus (loterie, œufs de Pâques, débat)",
                goal: "Objectif : VIE devient l'alliance internationale à long terme de Blair, connue à la fois pour la communauté et la compétitivité",
                status: "À Venir"
            }
        },
        
        // Leaders Section
        leaders: {
            title: "Équipe de Direction",
            description: "Rencontrez les dirigeants dévoués qui guident notre alliance",
            flipHint: "Survoler pour retourner",
            carousel: {
                prev: "Dirigeant précédent",
                next: "Dirigeant suivant",
                goTo: "Aller au dirigeant",
                autoNext: "Suivant automatique dans :",
                userControl: "Cliquez sur les flèches, points ou glissez pour contrôler"
            },
            candee: {
                role: "Gestion de Communauté et Recrutement",
                desc1: "Bonjour, je suis Can-dee, votre voisine d'à côté qui est une dame des chats qui sent la naphtaline.",
                desc2: "Je joue à dofus depuis 2009 (s'il vous plaît n'essayez pas de deviner mon âge) et Touch depuis 2017.",
                desc3: "Dans le jeu j'ai tout fait, de diriger des alliances, aller à la guerre, organiser des événements, créer des communautés à quitter et revenir 69 fois et compter.",
                desc4: "Dans une tentative de ne pas vous ennuyer davantage avec mon CV, mon rôle dans VIE est de prêter une partie de mes connaissances de dame âgée en matière de gestion de communauté et de recrutement. Ma capacité spéciale est de trouver des solutions à toutes sortes de drames, tout en restant drôle, charismatique, mais surtout modeste.",
                desc5: "J'ai hâte de voir où VIE nous mène. Voici l'espoir que nous puissions tous communiquer et accomplir nos objectifs - ensemble -"
            },
            boriss: {
                role: "Recrutement de Guilde et Stratégie",
                desc1: "Bonjour, je m'appelle Boriss et j'ai commencé à jouer à Dofus pendant la bêta sur PC, j'avais l'habitude de jouer sur Rushu et j'étais l'un des premiers assez fous pour atteindre le niveau 200.",
                desc2: "Après de nombreuses pauses, je suis de retour sur Dodge et j'avais l'habitude d'avoir ma propre guilde et de diriger cette alliance. Après un moment nous avons décidé de fusionner avec Guardians puisque Dodge était mort.",
                desc3: "J'aime le PvP et PvM (Sauf le dojo du vent, je déteste cet endroit). Mon rôle actuel dans l'équipe de dirigeants est d'amener de nouvelles guildes et d'essayer d'être drôle de temps en temps."
            },
            terro: {
                role: "Équipe de Direction",
                desc1: "Le profil de Terro arrive bientôt...",
                desc2: "Restez à l'écoute pour plus d'informations sur ce dirigeant incroyable !"
            },
            latif: {
                role: "Dirigeant de l'Alliance",
                desc1: "Bonjour à tous, je suis Latif, bien que la plupart me connaissent probablement mieux sous le nom de Momonga.",
                desc2: "J'ai commencé sur Dofus Touch, je ne suis pas autant vétéran que certains des autres, j'avais l'habitude de diriger une guilde appelée Moroclan maintenant je suis le dirigeant de la guilde Sparta.",
                desc3: "Dans VIE, je sers comme Dirigeant de l'Alliance. Je vais être honnête : je ne suis pas le meilleur en PvM ou PvP, et je ne joue pas autant qu'avant."
            },
            zubic: {
                role: "Voix de VIE",
                desc1: "Salut ! Je suis Zubic-Vila",
                desc2: "Lancer des sorts et poursuivre des quêtes depuis 2007 sur le bon vieux Rushu. J'ai pris quelques longues siestes mais je suis revenu en force sur Dofus Touch sur Dodge vers 2020.",
                desc3: "J'ai rejoint Soul, grimpé les rangs comme une vraie chuchoteuse de gobballs et j'ai fini par diriger la guilde ! En 2024, nous avons fusionné avec Guardians et maintenant je suis la fière seconde en commande. Mon rôle actuel dans l'équipe de direction est d'être la \"Voix de VIE\" — c'est-à-dire celle qui embête tout le monde avec des annonces, des rappels et des trucs à lire. Si ça apparaît dans le chat de l'alliance et que ça sonne suspectement organisé... oui, c'est probablement moi...",
                desc4: "Je suis passionnée de PvM, surtout si ça implique des quêtes, du lore et aider des amis dans des donjons qu'ils ont juré de ne plus jamais refaire. Si vous avez besoin d'aide, d'un rire, ou de quelqu'un qui vous regarde avec des sous-titres sur le visage — je suis votre fée."
            }
        },
        
        // Events Section
        events: {
            title: "Prochains Événements",
            description: "Rejoignez-nous pour des événements passionnants et des compétitions",
            event1: {
                date: "16 Septembre",
                title: "L'Ascension de l'Alliance - Premier Événement PVP/PVM",
                description: "Nous lancerons notre tout premier événement PVP/PVM en tant qu'Alliance VIE sur le nouveau serveur. C'est un moment historique pour notre alliance alors que nous établissons notre présence et montrons notre force à la communauté du Serveur Blair.",
                download: "Télécharger les Détails de l'Événement (PDF)",
                status: "En Cours"
            },
            event2: {
                date: "Dimanche, 28 Septembre, 2025 à 21:00 (Heure de Dofus)",
                title: "LIFE vs INT Alliance - Tournoi PvP",
                description: "Préparez-vous pour un affrontement épique ! Ce dimanche à 21h00 (heure de Dofus), l'Alliance VIE affronte l'Alliance INT dans un intense tournoi PvP 4 vs 4. Assistez au choc des titans alors que nos meilleurs guerriers se battent pour la gloire et l'honneur. Rejoignez-nous sur Discord pour encourager nos champions !",
                watch: "Rejoindre Discord pour Regarder",
                status: "À Venir"
            },
            event3: {
                date: "Quotidien",
                title: "Événement Débat Moi",
                description: "Chaque jour, notre bot Discord (Spectra) publie un sujet de débat dans le canal #debate-me. Les sujets sont toujours liés au jeu, et les membres sont libres de répondre avec leurs opinions, partager des expériences et utiliser des exemples du jeu.",
                download: "Télécharger les Règles de Débat (PDF)",
                status: "En Cours"
            }
        },
        
        // Discord Section
        discord: {
            title: "Rejoignez Notre Communauté",
            description: "Connectez-vous avec d'autres membres de l'alliance sur Discord",
            button: "Rejoindre le Serveur Discord",
            features: [
                "Communication en temps réel",
                "Annonces d'événements", 
                "Discussions de stratégie",
                "Interactions sociales"
            ]
        },
        
        // Contact Section
        contact: {
            title: "Contactez-nous",
            description: "Vous avez des questions, des suggestions ou voulez rejoindre notre alliance ? Envoyez-nous un message anonyme et nous vous répondrons via Discord !",
            form: {
                title: "Envoyez-nous un Message",
                description: "Vous avez des questions, des suggestions ou voulez rejoindre notre alliance ? Envoyez-nous un message anonyme et nous vous répondrons via Discord !",
                messageType: "Type de Message",
                selectCategory: "Sélectionnez une catégorie",
                joinAlliance: "Je veux Rejoindre l'Alliance",
                guildRecruitment: "Recrutement de Guilde",
                eventQuestion: "Question sur l'Événement",
                suggestion: "Suggestion",
                complaint: "Plainte",
                other: "Autre",
                yourMessage: "Votre Message",
                messagePlaceholder: "Écrivez votre message ici...",
                priorityLevel: "Niveau de Priorité",
                priorityLow: "Faible - Demande générale",
                priorityMedium: "Moyenne - Question importante",
                priorityHigh: "Élevée - Affaire urgente",
                sendMessage: "Envoyer le Message"
            },
            features: {
                anonymous: "Messagerie Anonyme",
                instant: "Livraison Instantanée",
                discord: "Intégration Discord"
            }
        },
        footer: {
            home: "Accueil",
            about: "À propos",
            guilds: "Guildes",
            discord: "Discord",
            allianceName: "LIFE Alliance",
            rights: "Tous droits réservés",
            server: "Dofus Touch - Serveur Blair"
        },
        guilds: {
            title: "Nos Guildes",
            description: "Chaque guilde apporte ses forces et sa culture uniques à notre alliance",
            members: "Membres"
        },
        
        // Footer
        footer: {
            rights: "Tous droits réservés",
            description: "Unissant les joueurs de tous les serveurs dans des aventures épiques"
        },
        
        // Buttons
        buttons: {
            learnMore: "En Savoir Plus",
            joinUs: "Rejoignez-nous",
            download: "Télécharger",
            viewDetails: "Voir les Détails"
        },
        
        // Time Display
        time: {
            dofusTime: "Heure de Dofus Touch",
            loading: "Chargement..."
        }
    }
};

// Language management
class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'en';
        this.init();
    }
    
    init() {
        this.loadLanguage(this.currentLanguage);
        this.createLanguageSwitcher();
    }
    
    loadLanguage(lang) {
        if (!languages[lang]) {
            lang = 'en';
        }
        
        this.currentLanguage = lang;
        localStorage.setItem('language', lang);
        
        // Update all text elements
        this.updateTexts(languages[lang]);
        
        // Update language switcher
        this.updateLanguageSwitcher();
    }
    
    updateTexts(langData) {
        // Update all elements with data-translate attributes
        this.updateByDataAttributes(langData);
        
        // Update specific sections that need special handling
        this.updateHero(langData.hero);
        this.updateNavigation(langData.nav);
    }
    
    updateByDataAttributes(langData) {
        // Find all elements with data-translate attributes
        const elements = document.querySelectorAll('[data-translate]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const value = this.getNestedValue(langData, key);
            
            if (value) {
                // Ensure "LIFE" stays untranslated
                const finalText = value.replace(/LIFE/g, 'LIFE');
                element.textContent = finalText;
            }
        });

        // Handle placeholder attributes
        const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            const value = this.getNestedValue(langData, key);
            if (value) {
                element.placeholder = value;
            }
        });
    }
    
    getNestedValue(obj, path) {
        return path.split('.').reduce((current, key) => {
            return current && current[key] !== undefined ? current[key] : null;
        }, obj);
    }
    
    updateNavigation(navData) {
        const navLinks = document.querySelectorAll('.nav-link');
        const navTexts = ['home', 'about', 'guilds', 'phases', 'leaders', 'events', 'discord', 'contact'];
        
        navLinks.forEach((link, index) => {
            if (navTexts[index]) {
                link.textContent = navData[navTexts[index]];
            }
        });
    }
    
    updateHero(heroData) {
        // Update hero title (keep the special effects)
        const heroTitle = document.querySelector('.true-focus-text');
        if (heroTitle) {
            heroTitle.textContent = heroData.title;
        }
        
        // Update mobile title
        const mobileTitle = document.querySelector('.mobile-only-title');
        if (mobileTitle) {
            mobileTitle.textContent = heroData.title;
        }
        
        // Update subtitle
        const subtitle = document.querySelector('.hero-subtitle');
        if (subtitle) {
            subtitle.textContent = heroData.subtitle;
        }
        
        // Update server text
        const server = document.querySelector('.hero-server');
        if (server) {
            server.textContent = heroData.server;
        }
        
        // Update stats
        const statLabels = document.querySelectorAll('.stat-label');
        const statTexts = ['members', 'guilds', 'leaders'];
        
        statLabels.forEach((label, index) => {
            if (statTexts[index]) {
                label.textContent = heroData.stats[statTexts[index]];
            }
        });
    }
    
    updateAbout(aboutData) {
        const aboutTitle = document.querySelector('#about .section-title');
        if (aboutTitle) {
            aboutTitle.textContent = aboutData.title;
        }
        
        const aboutDesc = document.querySelector('#about .section-description');
        if (aboutDesc) {
            aboutDesc.textContent = aboutData.description;
        }
        
        // Update feature cards
        const featureCards = document.querySelectorAll('.feature-card');
        const features = ['unity', 'home', 'diversity'];
        
        featureCards.forEach((card, index) => {
            if (features[index]) {
                const title = card.querySelector('h4');
                const desc = card.querySelector('p');
                
                if (title) title.textContent = aboutData.features[features[index]].title;
                if (desc) desc.textContent = aboutData.features[features[index]].description;
            }
        });
    }
    
    updateMission(missionData) {
        const missionTitle = document.querySelector('#mission .section-title');
        if (missionTitle) {
            missionTitle.textContent = missionData.title;
        }
        
        const missionDesc = document.querySelector('#mission .section-description');
        if (missionDesc) {
            missionDesc.textContent = missionData.description;
        }
        
        // Update mission goals
        const goalItems = document.querySelectorAll('#mission .mission-goal');
        goalItems.forEach((item, index) => {
            if (missionData.goals[index]) {
                item.textContent = missionData.goals[index];
            }
        });
    }
    
    updateGuilds(guildsData) {
        const guildsTitle = document.querySelector('#guilds .section-title');
        if (guildsTitle) {
            guildsTitle.textContent = guildsData.title;
        }
        
        const guildsDesc = document.querySelector('#guilds .section-description');
        if (guildsDesc) {
            guildsDesc.textContent = guildsData.description;
        }
    }
    
    updatePhases(phasesData) {
        const phasesTitle = document.querySelector('#phases .section-title');
        if (phasesTitle) {
            phasesTitle.textContent = phasesData.title;
        }
        
        const phasesDesc = document.querySelector('#phases .section-description');
        if (phasesDesc) {
            phasesDesc.textContent = phasesData.description;
        }
        
        // Update phase cards
        const phaseCards = document.querySelectorAll('.phase-card');
        const phases = ['phase1', 'phase2', 'phase3'];
        
        phaseCards.forEach((card, index) => {
            if (phases[index]) {
                const title = card.querySelector('h3');
                const desc = card.querySelector('p');
                
                if (title) title.textContent = phasesData[phases[index]].title;
                if (desc) desc.textContent = phasesData[phases[index]].description;
            }
        });
    }
    
    updateLeaders(leadersData) {
        const leadersTitle = document.querySelector('#leaders .section-title');
        if (leadersTitle) {
            leadersTitle.textContent = leadersData.title;
        }
        
        const leadersDesc = document.querySelector('#leaders .section-description');
        if (leadersDesc) {
            leadersDesc.textContent = leadersData.description;
        }
    }
    
    updateEvents(eventsData) {
        const eventsTitle = document.querySelector('#events .section-title');
        if (eventsTitle) {
            eventsTitle.textContent = eventsData.title;
        }
        
        const eventsDesc = document.querySelector('#events .section-description');
        if (eventsDesc) {
            eventsDesc.textContent = eventsData.description;
        }
    }
    
    updateDiscord(discordData) {
        const discordTitle = document.querySelector('#discord .section-title');
        if (discordTitle) {
            discordTitle.textContent = discordData.title;
        }
        
        const discordDesc = document.querySelector('#discord .section-description');
        if (discordDesc) {
            discordDesc.textContent = discordData.description;
        }
        
        const discordButton = document.querySelector('.btn-discord');
        if (discordButton) {
            discordButton.textContent = discordData.button;
        }
    }
    
    updateContact(contactData) {
        const contactTitle = document.querySelector('#contact .section-title');
        if (contactTitle) {
            contactTitle.textContent = contactData.title;
        }
        
        const contactDesc = document.querySelector('#contact .section-description');
        if (contactDesc) {
            contactDesc.textContent = contactData.description;
        }
    }
    
    updateFooter(footerData) {
        const footerDesc = document.querySelector('.footer-description');
        if (footerDesc) {
            footerDesc.textContent = footerData.description;
        }
        
        const footerRights = document.querySelector('.footer-bottom p');
        if (footerRights) {
            footerRights.textContent = `© 2024 Life Alliance. ${footerData.rights}.`;
        }
    }
    
    updateButtons(buttonData) {
        // Update any buttons with data attributes
        const buttons = document.querySelectorAll('[data-text]');
        buttons.forEach(button => {
            const textKey = button.getAttribute('data-text');
            if (buttonData[textKey]) {
                button.textContent = buttonData[textKey];
            }
        });
    }
    
    updateTimeDisplay(timeData) {
        const timeDisplay = document.getElementById('timeDisplay');
        if (timeDisplay) {
            const span = timeDisplay.querySelector('span');
            if (span) {
                span.textContent = timeData.loading;
            }
        }
    }
    
    createLanguageSwitcher() {
        // Hook up language select if present in DOM
        const select = document.getElementById('languageSelect');
        if (!select) return;

        // Initialize position based on current language
        select.value = this.currentLanguage;

        select.addEventListener('change', () => {
            const lang = select.value;
            this.loadLanguage(lang);
        });
    }
    
    updateLanguageSwitcher() {
        const select = document.getElementById('languageSelect');
        if (!select) return;
        select.value = this.currentLanguage;
    }
    
    switchLanguage(lang) {
        this.loadLanguage(lang);
    }
}

// Initialize language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.languageManager = new LanguageManager();
});

// Export for global access
window.LanguageManager = LanguageManager;
