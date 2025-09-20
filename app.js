// Application data
const appData = {
    destinations: [
        {
            id: 1,
            name: "Hundru Falls",
            location: "Ranchi",
            category: "Waterfall",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            description: "A spectacular 320-foot waterfall, one of the highest in Jharkhand. Perfect for nature lovers and photographers.",
            highlights: ["320 feet high", "Photography spot", "Trekking trails"],
            difficulty: "Easy",
            rating: 4.5
        },
        {
            id: 2,
            name: "Netarhat",
            location: "Latehar",
            category: "Hill Station",
            image: "know-famous-hill-stations-in-jharkhand.jpg",
            description: "Known as the 'Queen of Chotanagpur', this hill station offers breathtaking sunrise and sunset views.",
            highlights: ["Sunrise point", "Cool climate", "Dense forests"],
            difficulty: "Moderate",
            rating: 4.3
        },
        {
            id: 3,
            name: "Betla National Park",
            location: "Latehar",
            category: "Wildlife",
            image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2016&q=80",
            description: "Home to elephants, tigers, and diverse wildlife. A paradise for wildlife enthusiasts and nature photographers.",
            highlights: ["Wild elephants", "Tiger safari", "Bird watching"],
            difficulty: "Easy",
            rating: 4.2
        },
        {
            id: 4,
            name: "Baidyanath Dham",
            location: "Deoghar",
            category: "Religious",
            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            description: "One of the twelve Jyotirlingas, this sacred temple attracts millions of devotees annually.",
            highlights: ["Jyotirlinga", "Ancient temple", "Pilgrimage site"],
            difficulty: "Easy",
            rating: 4.7
        },
        {
            id: 5,
            name: "Dassam Falls",
            location: "Ranchi",
            category: "Waterfall",
            image: "eb94f520-bf6e-47bc-a02b-5e358aac2084.jpg",
            description: "A stunning waterfall created by the Kanchi River, perfect for picnics and photography.",
            highlights: ["144 feet high", "Swimming pools", "Rock climbing"],
            difficulty: "Easy",
            rating: 4.1
        },
        {
            id: 6,
            name: "Parasnath Hill",
            location: "Giridih",
            category: "Hill Station",
            image: "360_F_644904289_NbXKTKISNlcpn6ttB2P3upo1IIPqpeKE.jpg",
            description: "The highest peak in Jharkhand and a sacred Jain pilgrimage site with ancient temples.",
            highlights: ["Highest peak", "Jain temples", "Trekking trails"],
            difficulty: "Hard",
            rating: 4.4
        }
    ],
    tribalCommunities: [
        {
            name: "Santhal",
            population: "2.4 million",
            festivals: [
                { name: "Sarhul", date: "Spring (March/April)", description: "Celebrates the new year and the worship of the village deity." },
                { name: "Karam", date: "August/September", description: "Harvest festival dedicated to the Karam tree, symbolizing fertility and prosperity." },
                { name: "Tusu Parab", date: "January", description: "Harvest festival of the tribal communities, marked by singing and dancing." }
            ],
            arts: [
                { name: "Jadur Painting", description: "Traditional scroll painting depicting social and religious themes." },
                { name: "Folk Dance", description: "Various energetic group dances performed during festivals." }
            ],
            crafts: [
                { name: "Bamboo Crafts", description: "Utilitarian and decorative items made from bamboo." },
                { name: "Terracotta", description: "Pottery and figurines made from baked clay." }
            ],
            tours: [
                { id: 1, name: "Santhal Village Immersion", duration: "2 days", price: "₹4,000", highlights: ["Homestay", "Folk Dance Workshop", "Local Cuisine"], image: "santhal_village.jpg" }
            ]
        },
        {
            name: "Oraon",
            population: "1.8 million",
            festivals: [
                { name: "Sarhul", date: "Spring (March/April)", description: "Similar to Santhal, celebrating nature and fertility." },
                { name: "Karma", date: "August/September", description: "Worship of the Karma tree for good harvest and prosperity." }
            ],
            arts: [
                { name: "Chhau Dance", description: "Semi-classical Indian dance with martial and folk traditions." },
                { name: "Traditional Music", description: "Performed with various indigenous instruments like Nagara and Mandar." }
            ],
            crafts: [
                { name: "Metal Crafts", description: "Dokra art, lost-wax casting of brass and bronze items." },
                { name: "Wood Carving", description: "Decorative and functional items carved from wood." }
            ],
            tours: [
                { id: 2, name: "Oraon Cultural Trail", duration: "1 day", price: "₹2,500", highlights: ["Chhau Dance Performance", "Dokra Art Demo"], image: "oraon_culture.jpg" }
            ]
        },
        {
            name: "Munda",
            population: "1.2 million",
            festivals: [
                { name: "Sarhul", date: "Spring (March/April)", description: "Spring festival, worship of the village deity." },
                { name: "Karma", date: "August/September", description: "Harvest festival, seeking blessings for a good crop." },
                { name: "Janni Shikar", date: "Once every 12 years", description: "Traditional hunting festival by women." }
            ],
            arts: [
                { name: "Folk Songs", description: "Narrative songs about history, myths, and daily life." },
                { name: "Traditional Crafts", description: "Basketry, weaving, and pottery." }
            ],
            crafts: [
                { name: "Basketry", description: "Intricate baskets and mats woven from natural fibers." },
                { name: "Weaving", description: "Traditional textiles with unique patterns." }
            ],
            tours: [
                { id: 3, name: "Munda Heritage Walk", duration: "Half day", price: "₹1,800", highlights: ["Folk Song Session", "Craft Demonstration"], image: "munda_heritage.jpg" }
            ]
        }
    ],
    guides: [
        {
            id: 1,
            name: "Priya Sharma",
            location: "Ranchi",
            languages: ["Hindi", "English"],
            price: "₹1,500/day",
            rating: 4.8,
            availability: "2024-08-01 to 2024-12-31",
            tourCategories: ["Adventure", "Culture"],
            groupSize: "1-5",
            isFemale: true,
            isVerified: true,
            yearsExperience: 7,
            specialties: ["Trekking", "Photography", "Local History"],
            responseRate: "95%",
            reviews: "https://example.com/priya-reviews",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        {
            id: 2,
            name: "Amit Kumar",
            location: "Latehar",
            languages: ["Hindi", "English", "Oraon"],
            price: "₹1,800/day",
            rating: 4.7,
            availability: "2024-09-01 to 2025-01-31",
            tourCategories: ["Wildlife", "Culture"],
            groupSize: "1-8",
            isFemale: false,
            isVerified: true,
            yearsExperience: 10,
            specialties: ["Wildlife Tracking", "Tribal Culture", "Bird Watching"],
            responseRate: "90%",
            reviews: "https://example.com/amit-reviews",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        {
            id: 3,
            name: "Sunita Devi",
            location: "Deoghar",
            languages: ["Hindi", "Santhali"],
            price: "₹1,200/day",
            rating: 4.9,
            availability: "2024-07-15 to 2024-11-30",
            tourCategories: ["Religious", "Culture"],
            groupSize: "1-4",
            isFemale: true,
            isVerified: true,
            yearsExperience: 5,
            specialties: ["Temple Tours", "Pilgrimage Guidance", "Local Festivals"],
            responseRate: "98%",
            reviews: "https://example.com/sunita-reviews",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        {
            id: 4,
            name: "Rajesh Singh",
            location: "Giridih",
            languages: ["Hindi", "English"],
            price: "₹1,600/day",
            rating: 4.6,
            availability: "2024-08-10 to 2025-02-28",
            tourCategories: ["Trekking", "Nature"],
            groupSize: "1-6",
            isFemale: false,
            isVerified: false,
            yearsExperience: 8,
            specialties: ["Parasnath Hill", "Nature Walks", "Camping"],
            responseRate: "88%",
            reviews: "https://example.com/rajesh-reviews",
            image: "https://images.unsplash.com/photo-1507003211169-e695c31a6179?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        }
    ],
    transportation: [
        {
            id: 1,
            name: "Intercity Taxi (Sedan)",
            type: "Taxi",
            category: "Intercity",
            vehicleType: "Sedan",
            capacity: 4,
            price: "₹12/km",
            luggage: "2 large, 2 small",
            ac: true,
            safetyFeatures: ["GPS Tracking", "First Aid Kit"],
            image: "Scooter-ride.jpg"
        },
        {
            id: 2,
            name: "Local Cab (Hatchback)",
            type: "Taxi",
            category: "Local",
            vehicleType: "Hatchback",
            capacity: 3,
            price: "₹10/km",
            luggage: "1 large, 1 small",
            ac: true,
            safetyFeatures: ["GPS Tracking"],
            image: "carleft.png"
        },
        {
            id: 3,
            name: "Bike Rental (Scooter)",
            type: "Rental",
            category: "Bike/Scooter",
            vehicleType: "Scooter",
            capacity: 2,
            price: "₹500/day",
            luggage: "Small backpack",
            ac: false,
            safetyFeatures: ["Helmets Provided"],
            image: "https://images.unsplash.com/photo-1580482555555-555555555555?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        {
            id: 4,
            name: "Airport Transfer (SUV)",
            type: "Transfer",
            category: "Airport",
            vehicleType: "SUV",
            capacity: 6,
            price: "₹2,500/trip",
            luggage: "4 large, 4 small",
            ac: true,
            safetyFeatures: ["GPS Tracking", "Professional Driver"],
            image: "(SUV).jpg"
            
        },
        {
            id: 5,
            name: "Tour Shuttle (Tempo Traveller)",
            type: "Shuttle",
            category: "Tour",
            vehicleType: "Tempo Traveller",
            capacity: 12,
            price: "₹4,000/day",
            luggage: "Large",
            ac: true,
            safetyFeatures: ["First Aid Kit", "Experienced Driver"],
            image: "https://images.unsplash.com/photo-1580482555555-555555555555?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        }
    ],
    aiResponses: [
        "Based on your preferences for a 3-day adventure trip with a budget of ₹15,000, I recommend visiting Hundru Falls, Netarhat Hill Station, and Betla National Park. This itinerary includes trekking, wildlife safari, and cultural experiences.",
        "For a spiritual journey, I suggest a 2-day trip to Baidyanath Dham with accommodation at a heritage hotel and guided temple tours. Total estimated cost: ₹8,000 per person.",
        "Adventure seekers should definitely explore our tribal heritage tours combined with waterfall trekking. This 4-day package includes stays in eco-resorts and authentic cultural experiences."
    ]
};

class JharkhandExplorer {
    constructor() {
        this.currentTheme = this.getStoredTheme();
        this.currentDestinationFilter = 'all';
        this.currentMarketplaceFilter = 'all'; // This will be deprecated or repurposed
        this.currentGuideFilters = {
            location: 'all',
            language: 'all',
            price: 'all',
            rating: 0,
            femaleFriendly: false,
            tourCategory: 'all'
        };
        this.currentTransportFilters = {
            category: 'all',
            vehicleType: 'all',
            ac: 'all',
            capacity: 0
        };
        this.selectedInterests = [];
        this.init();
    }

    getStoredTheme() {
        const stored = localStorage.getItem('theme');
        if (stored && (stored === 'light' || stored === 'dark')) {
            return stored;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    init() {
        this.setupTheme();
        this.setupNavigation();
        this.setupScrollAnimations();
        this.setupAIPlanner();
        this.setupFilters();
        this.setupEventListeners();
        this.handleVideoPlayback();
        this.setupSearch();
        this.setupSOSButton();

        // Load content based on the current page
        setTimeout(() => {
            this.loadContent();
        }, 100);
    }

    setupTheme() {
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        const themeToggle = document.getElementById('themeToggle');
        if (!themeToggle) return;

        const icon = themeToggle.querySelector('i');

        if (this.currentTheme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }

        themeToggle.addEventListener('click', (e) => {
            e.preventDefault();
            this.toggleTheme();
        });
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);

        const icon = document.querySelector('#themeToggle i');
        if (icon) {
            if (this.currentTheme === 'dark') {
                icon.className = 'fas fa-sun';
            } else {
                icon.className = 'fas fa-moon';
            }
        }
    }

    setupNavigation() {
        const navbar = document.getElementById('navbar');
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const navLinks = document.getElementById('navLinks');
        const navLinksAll = document.querySelectorAll('.nav-link');

        if (mobileMenuToggle && navLinks) {
            mobileMenuToggle.addEventListener('click', (e) => {
                e.preventDefault();
                navLinks.classList.toggle('active');
                mobileMenuToggle.classList.toggle('active');
            });

            navLinksAll.forEach(link => {
                link.addEventListener('click', () => {
                    if (link.getAttribute('href').startsWith('#')) {
                        navLinks.classList.remove('active');
                        mobileMenuToggle.classList.remove('active');
                    }
                });
            });
        }

        navLinksAll.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const targetSection = document.getElementById(targetId);

                    if (targetSection) {
                        const offsetTop = targetSection.offsetTop - (navbar ? navbar.offsetHeight : 0);
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });

        window.addEventListener('scroll', () => {
            if (!navbar) return;

            if (window.scrollY > 100) {
                navbar.style.background = this.currentTheme === 'dark'
                    ? 'rgba(38, 40, 40, 0.98)'
                    : 'rgba(255, 255, 255, 0.98)';
                navbar.style.backdropFilter = 'blur(20px)';
                navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            } else {
                navbar.style.background = this.currentTheme === 'dark'
                    ? 'rgba(38, 40, 40, 0.95)'
                    : 'rgba(255, 255, 255, 0.95)';
                navbar.style.backdropFilter = 'blur(20px)';
                navbar.style.boxShadow = 'none';
            }

            this.updateActiveNavLink();
        });

        const planTripBtn = document.getElementById('planTripBtn');
        const exploreBtn = document.getElementById('exploreBtn');

        if (planTripBtn) {
            planTripBtn.addEventListener('click', () => {
                const target = document.getElementById('ai-planner');
                if (target) {
                    const offsetTop = target.offsetTop - (navbar ? navbar.offsetHeight : 0);
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                }
            });
        }

        if (exploreBtn) {
            exploreBtn.addEventListener('click', () => {
                const target = document.getElementById('destinations');
                if (target) {
                    const offsetTop = target.offsetTop - (navbar ? navbar.offsetHeight : 0);
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                }
            });
        }
    }

    updateActiveNavLink() {
        const sections = ['home', 'ai-planner', 'destinations', 'marketplace', 'culture', 'accommodation'];
        const navLinks = document.querySelectorAll('.nav-links .nav-link');
        const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;

        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                const rect = section.getBoundingClientRect();
                const link = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

                if (rect.top <= navbarHeight + 10 && rect.bottom >= navbarHeight + 10) {
                    navLinks.forEach(nl => nl.classList.remove('active'));
                    if (link) link.classList.add('active');
                }
            }
        });
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    // entry.target.classList.remove('visible');
                }
            });
        }, observerOptions);

        setTimeout(() => {
            const animatedElements = document.querySelectorAll('.section-header, .destination-card, .marketplace-card, .accommodation-card, .timeline-item, .guide-card, .transport-card, .heritage-card');
            animatedElements.forEach(el => {
                el.classList.add('fade-in');
                observer.observe(el);
            });
        }, 500);
    }

    setupAIPlanner() {
        const budgetSlider = document.getElementById('budget');
        const budgetValue = document.getElementById('budgetValue');
        const interestTags = document.querySelectorAll('.interest-tag');
        const generateBtn = document.getElementById('generatePlan');

        if (budgetSlider && budgetValue) {
            budgetValue.textContent = parseInt(budgetSlider.value).toLocaleString('en-IN');
            budgetSlider.addEventListener('input', (e) => {
                const value = parseInt(e.target.value);
                budgetValue.textContent = value.toLocaleString('en-IN');
            });
        }

        if (interestTags) {
            interestTags.forEach(tag => {
                tag.addEventListener('click', (e) => {
                    e.preventDefault();
                    tag.classList.toggle('active');
                    const interest = tag.dataset.interest;

                    if (this.selectedInterests.includes(interest)) {
                        this.selectedInterests = this.selectedInterests.filter(i => i !== interest);
                    } else {
                        this.selectedInterests.push(interest);
                    }
                });
            });
        }


        if (generateBtn) {
            generateBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.generateAIPlan();
            });
        }
    }

    generateAIPlan() {
        const duration = document.getElementById('duration')?.value;
        const budget = document.getElementById('budget')?.value;
        const typingIndicator = document.getElementById('typingIndicator');
        const aiResponse = document.getElementById('aiResponse');

        if (!duration || duration === "") {
            alert('Please select a trip duration');
            return;
        }

        if (!typingIndicator || !aiResponse) return;

        typingIndicator.classList.add('active');
        aiResponse.innerHTML = '';

        setTimeout(() => {
            typingIndicator.classList.remove('active');
            let response = this.getAIResponse(duration, budget, this.selectedInterests);
            this.typeWriterEffect(aiResponse, response);
        }, 2000);
    }

    getAIResponse(duration, budget, interests) {
        const budgetNum = parseInt(budget) || 15000;
        let response = "";

        if (interests.includes('spiritual')) {
            response = `Perfect! For a ${duration} spiritual journey with a budget of ₹${budgetNum.toLocaleString('en-IN')}, I recommend visiting Baidyanath Dham, one of the twelve sacred Jyotirlingas. `;
            response += `Your itinerary includes guided temple tours, meditation sessions, and stays at heritage hotels. `;
            response += `This spiritual retreat will rejuvenate your soul while exploring Jharkhand's religious heritage.`;
        } else if (interests.includes('adventure')) {
            response = `Exciting! For your ${duration} adventure trip with ₹${budgetNum.toLocaleString('en-IN')}, I suggest Hundru Falls for trekking, `;
            response += `Betla National Park for wildlife safari, and Netarhat for mountain climbing. `;
            response += `This action-packed itinerary includes eco-resort stays and experienced guides for all activities.`;
        } else if (interests.includes('culture')) {
            response = `Wonderful choice! Your ${duration} cultural immersion with ₹${budgetNum.toLocaleString('en-IN')} includes tribal village visits, `;
            response += `traditional dance performances, and authentic homestay experiences with Santhal, Oraon, and Munda communities. `;
            response += `You'll learn traditional crafts and participate in local festivals.`;
        } else {
            response = appData.aiResponses[Math.floor(Math.random() * appData.aiResponses.length)];
        }

        return response;
    }

    typeWriterEffect(element, text, speed = 50) {
        let i = 0;
        element.innerHTML = '';

        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    setupFilters() {
        // Destination filters (for index.html)
        const destinationFilters = document.querySelectorAll('.destination-filters .filter-btn');
        if (destinationFilters) {
            destinationFilters.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    destinationFilters.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    this.currentDestinationFilter = btn.dataset.filter;
                    this.filterDestinations();
                });
            });
        }

        // Guide filters (for guides/index.html and transport/index.html)
        const guideLocationFilter = document.getElementById('guideLocationFilter');
        const guideLanguageFilter = document.getElementById('guideLanguageFilter');
        const guidePriceFilter = document.getElementById('guidePriceFilter');
        const guideRatingFilter = document.getElementById('guideRatingFilter');
        const guideFemaleFriendlyFilter = document.getElementById('guideFemaleFriendlyFilter');
        const guideTourCategoryFilter = document.getElementById('guideTourCategoryFilter');

        if (guideLocationFilter) guideLocationFilter.addEventListener('change', (e) => { this.currentGuideFilters.location = e.target.value; this.filterGuides(); });
        if (guideLanguageFilter) guideLanguageFilter.addEventListener('change', (e) => { this.currentGuideFilters.language = e.target.value; this.filterGuides(); });
        if (guidePriceFilter) guidePriceFilter.addEventListener('change', (e) => { this.currentGuideFilters.price = e.target.value; this.filterGuides(); });
        if (guideRatingFilter) guideRatingFilter.addEventListener('change', (e) => { this.currentGuideFilters.rating = parseFloat(e.target.value); this.filterGuides(); });
        if (guideFemaleFriendlyFilter) guideFemaleFriendlyFilter.addEventListener('change', (e) => { this.currentGuideFilters.femaleFriendly = e.target.checked; this.filterGuides(); });
        if (guideTourCategoryFilter) guideTourCategoryFilter.addEventListener('change', (e) => { this.currentGuideFilters.tourCategory = e.target.value; this.filterGuides(); });

        // Transportation filters (for transport/index.html)
        const transportCategoryFilter = document.getElementById('transportCategoryFilter');
        const transportVehicleTypeFilter = document.getElementById('transportVehicleTypeFilter');
        const transportACFilter = document.getElementById('transportACFilter');
        const transportCapacityFilter = document.getElementById('transportCapacityFilter');

        if (transportCategoryFilter) transportCategoryFilter.addEventListener('change', (e) => { this.currentTransportFilters.category = e.target.value; this.filterTransportation(); });
        if (transportVehicleTypeFilter) transportVehicleTypeFilter.addEventListener('change', (e) => { this.currentTransportFilters.vehicleType = e.target.value; this.filterTransportation(); });
        if (transportACFilter) transportACFilter.addEventListener('change', (e) => { this.currentTransportFilters.ac = e.target.value; this.filterTransportation(); });
        if (transportCapacityFilter) transportCapacityFilter.addEventListener('change', (e) => { this.currentTransportFilters.capacity = parseInt(e.target.value); this.filterTransportation(); });

        // Cultural Heritage filters (for heritage/index.html)
        const festivalDateFilter = document.getElementById('festivalDateFilter');
        const festivalLocationFilter = document.getElementById('festivalLocationFilter');
        const festivalTypeFilter = document.getElementById('festivalTypeFilter');
        const festivalFamilyFriendlyFilter = document.getElementById('festivalFamilyFriendlyFilter');
        const craftRegionFilter = document.getElementById('craftRegionFilter');
        const craftTypeFilter = document.getElementById('craftTypeFilter');
        const tourDurationFilter = document.getElementById('tourDurationFilter');

        if (festivalDateFilter) festivalDateFilter.addEventListener('change', () => this.filterCulturalHeritage());
        if (festivalLocationFilter) festivalLocationFilter.addEventListener('change', () => this.filterCulturalHeritage());
        if (festivalTypeFilter) festivalTypeFilter.addEventListener('change', () => this.filterCulturalHeritage());
        if (festivalFamilyFriendlyFilter) festivalFamilyFriendlyFilter.addEventListener('change', () => this.filterCulturalHeritage());
        if (craftRegionFilter) craftRegionFilter.addEventListener('change', () => this.filterCulturalHeritage());
        if (craftTypeFilter) craftTypeFilter.addEventListener('change', () => this.filterCulturalHeritage());
        if (tourDurationFilter) tourDurationFilter.addEventListener('change', () => this.filterCulturalHeritage());
    }

    loadContent() {
        try {
            const path = window.location.pathname;

            if (path.includes('heritage')) {
                this.loadCulturalHeritage();
            } else if (path.includes('guides')) {
                this.loadGuides();
            } else if (path.includes('transport')) {
                this.loadTransportation();
                this.loadGuidesForTransportPage(); // Load guides on transport page too
            } else if (path.includes('contact')) {
                this.setupContactForm();
            } else if (path.includes('payment')) {
                // FIX: Removed the conflicting call. The script in payment.html will handle it.
                // this.setupPaymentPage(); 
            }
            else {
                this.loadDestinations();
                // this.loadMarketplace(); // Deprecated or moved
                this.loadCulture(); // Tribal communities on homepage
            }
            console.log('Content loaded successfully for:', path);
        } catch (error) {
            console.error('Error loading content:', error);
        }
    }

    // --- Destination Loading (for index.html) ---
    loadDestinations() {
        const grid = document.getElementById('destinationsGrid');
        if (!grid) return;

        grid.innerHTML = '';
        appData.destinations.forEach(destination => {
            const card = this.createDestinationCard(destination);
            grid.appendChild(card);
        });
        this.filterDestinations();
    }

    createDestinationCard(destination) {
        const card = document.createElement('div');
        card.className = 'destination-card fade-in';
        card.dataset.category = destination.category;

        const stars = '★'.repeat(Math.floor(destination.rating));
        const halfStar = destination.rating % 1 >= 0.5 ? '☆' : '';

        card.innerHTML = `
            <div class="destination-image">
                <img src="${destination.image}" alt="${destination.name}" loading="lazy">
                <div class="destination-overlay">${destination.category}</div>
            </div>
            <div class="destination-content">
                <h3 class="destination-title">${destination.name}</h3>
                <div class="destination-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${destination.location}
                </div>
                <p class="destination-description">${destination.description}</p>
                <div class="destination-highlights">
                    ${destination.highlights.map(highlight =>
                        `<span class="highlight-tag">${highlight}</span>`
                    ).join('')}
                </div>
                <div class="destination-footer">
                    <div class="destination-rating">
                        <span class="rating-stars">${stars}${halfStar}</span>
                        <span class="rating-value">${destination.rating}</span>
                    </div>
                    <div class="difficulty-badge difficulty-${destination.difficulty}">
                        ${destination.difficulty}
                    </div>
                </div>
            </div>
        `;
        return card;
    }

    filterDestinations() {
        const cards = document.querySelectorAll('.destination-card');
        cards.forEach(card => {
            const category = card.dataset.category;
            const shouldShow = this.currentDestinationFilter === 'all' ||
                             category === this.currentDestinationFilter;

            if (shouldShow) {
                card.style.display = 'block';
                if (!card.classList.contains('visible')) {
                    setTimeout(() => card.classList.add('visible'), 10);
                }
            } else {
                card.style.display = 'none';
                card.classList.remove('visible');
            }
        });
    }

    // --- Cultural Heritage Loading (for heritage/index.html) ---
    loadCulturalHeritage() {
        const festivalsGrid = document.getElementById('festivalsGrid');
        const artsCraftsGrid = document.getElementById('artsCraftsGrid');
        const tribalToursGrid = document.getElementById('tribalToursGrid');

        if (festivalsGrid) festivalsGrid.innerHTML = '';
        if (artsCraftsGrid) artsCraftsGrid.innerHTML = '';
        if (tribalToursGrid) tribalToursGrid.innerHTML = '';

        appData.tribalCommunities.forEach(tribe => {
            // Festivals
            tribe.festivals.forEach(festival => {
                if (festivalsGrid) festivalsGrid.appendChild(this.createFestivalCard(festival, tribe.name));
            });
            // Arts & Crafts
            tribe.arts.forEach(art => {
                if (artsCraftsGrid) artsCraftsGrid.appendChild(this.createArtCraftCard(art, tribe.name));
            });
            tribe.crafts.forEach(craft => {
                if (artsCraftsGrid) artsCraftsGrid.appendChild(this.createArtCraftCard(craft, tribe.name));
            });
            // Tribal Tours
            tribe.tours.forEach(tour => {
                if (tribalToursGrid) tribalToursGrid.appendChild(this.createTribalTourCard(tour, tribe.name));
            });
        });

        this.filterCulturalHeritage();
    }

    createFestivalCard(festival, tribeName) {
        const card = document.createElement('div');
        card.className = 'heritage-card fade-in';
        card.dataset.type = 'festival';
        card.dataset.location = tribeName; // Using tribe name as location for now
        card.dataset.familyFriendly = 'yes'; // Assuming all are family friendly for demo
        card.innerHTML = `
            <div class="heritage-content">
                <h3 class="heritage-title">${festival.name} (${tribeName})</h3>
                <p class="heritage-meta"><i class="fas fa-calendar-alt"></i> ${festival.date}</p>
                <p class="heritage-description">${festival.description}</p>
                <button class="btn btn--primary btn--sm book-now-btn" data-item-type="festival" data-item-name="${festival.name}" data-item-price="0">View Details</button>
            </div>
        `;
        return card;
    }

    createArtCraftCard(item, tribeName) {
        const card = document.createElement('div');
        card.className = 'heritage-card fade-in';
        card.dataset.type = 'artcraft';
        card.dataset.region = tribeName;
        card.dataset.craftType = item.name;
        card.innerHTML = `
            <div class="heritage-content">
                <h3 class="heritage-title">${item.name} (${tribeName})</h3>
                <p class="heritage-description">${item.description}</p>
                <button class="btn btn--primary btn--sm book-now-btn" data-item-type="artcraft" data-item-name="${item.name}" data-item-price="0">Learn More</button>
            </div>
        `;
        return card;
    }

    createTribalTourCard(tour, tribeName) {
        const card = document.createElement('div');
        card.className = 'heritage-card fade-in';
        card.dataset.type = 'tour';
        card.dataset.duration = tour.duration;
        card.dataset.location = tribeName;
        card.innerHTML = `
            <div class="heritage-image">
                <img src="/assets/images/${tour.image}" alt="${tour.name}" loading="lazy">
            </div>
            <div class="heritage-content">
                <h3 class="heritage-title">${tour.name} (${tribeName})</h3>
                <p class="heritage-meta"><i class="fas fa-clock"></i> ${tour.duration} | <i class="fas fa-rupee-sign"></i> ${tour.price}</p>
                <p class="heritage-description">${tour.highlights.join(', ')}</p>
                <button class="btn btn--primary btn--sm book-now-btn" data-item-type="tour" data-item-name="${tour.name}" data-item-price="${tour.price.replace('₹', '').replace(',', '')}">Book Tour</button>
            </div>
        `;
        return card;
    }

    filterCulturalHeritage() {
        const festivalDate = document.getElementById('festivalDateFilter')?.value;
        const festivalLocation = document.getElementById('festivalLocationFilter')?.value;
        const festivalType = document.getElementById('festivalTypeFilter')?.value;
        const festivalFamilyFriendly = document.getElementById('festivalFamilyFriendlyFilter')?.checked;

        const craftRegion = document.getElementById('craftRegionFilter')?.value;
        const craftType = document.getElementById('craftTypeFilter')?.value;

        const tourDuration = document.getElementById('tourDurationFilter')?.value;

        document.querySelectorAll('.heritage-card').forEach(card => {
            let show = true;
            const cardType = card.dataset.type;

            if (cardType === 'festival') {
                if (festivalLocation !== 'all' && card.dataset.location !== festivalLocation) show = false;
                // Add more festival filters here based on actual data attributes
            } else if (cardType === 'artcraft') {
                if (craftRegion !== 'all' && card.dataset.region !== craftRegion) show = false;
                if (craftType !== 'all' && card.dataset.craftType !== craftType) show = false;
            } else if (cardType === 'tour') {
                if (tourDuration !== 'all' && card.dataset.duration !== tourDuration) show = false;
                // Add more tour filters here
            }

            card.style.display = show ? 'block' : 'none';
        });
    }

    // --- Guides Loading (for guides/index.html and transport/index.html) ---
    loadGuides() {
        const guidesGrid = document.getElementById('guidesGrid');
        if (!guidesGrid) return;

        guidesGrid.innerHTML = '';
        appData.guides.forEach(guide => {
            guidesGrid.appendChild(this.createGuideCard(guide));
        });
        this.filterGuides();
    }

    loadGuidesForTransportPage() {
        const guidesGrid = document.getElementById('transportGuidesGrid'); // Assuming a different ID for guides on transport page
        if (!guidesGrid) return;

        guidesGrid.innerHTML = '';
        appData.guides.forEach(guide => {
            guidesGrid.appendChild(this.createGuideCard(guide, true)); // Pass true to indicate it's for transport page
        });
        this.filterGuides();
    }

    createGuideCard(guide, isForTransport = false) {
        const card = document.createElement('div');
        card.className = 'guide-card fade-in';
        card.dataset.location = guide.location;
        card.dataset.language = guide.languages.join(',');
        card.dataset.price = guide.price.split('/')[0].replace('₹', '').trim(); // Extract numeric price
        card.dataset.rating = guide.rating;
        card.dataset.femaleFriendly = guide.isFemale ? 'true' : 'false';
        card.dataset.tourCategory = guide.tourCategories.join(',');

        const stars = '★'.repeat(Math.floor(guide.rating));
        const halfStar = guide.rating % 1 >= 0.5 ? '☆' : '';

        card.innerHTML = `
            <div class="guide-image">
                <img src="${guide.image}" alt="${guide.name}" loading="lazy">
            </div>
            <div class="guide-content">
                <h3 class="guide-name">${guide.name}</h3>
                <p class="guide-meta">
                    <i class="fas fa-map-marker-alt"></i> ${guide.location} |
                    <i class="fas fa-language"></i> ${guide.languages.join(', ')}
                </p>
                <div class="guide-rating">
                    <span class="rating-stars">${stars}${halfStar}</span>
                    <span class="rating-value">${guide.rating}</span>
                    ${guide.isVerified ? '<span class="verified-badge"><i class="fas fa-check-circle"></i> Verified</span>' : ''}
                </div>
                <p class="guide-specialties">Specialties: ${guide.specialties.join(', ')}</p>
                <p class="guide-experience">Experience: ${guide.yearsExperience} years</p>
                <p class="guide-price">${guide.price}</p>
                ${guide.isFemale ? '<p class="guide-safety"><i class="fas fa-venus"></i> Female Guide Available</p>' : ''}
                <div class="guide-actions">
                    <button class="btn btn--primary btn--sm book-now-btn"
                            data-item-type="guide"
                            data-item-id="${guide.id}"
                            data-item-name="${guide.name}"
                            data-item-price="${guide.price.split('/')[0].replace('₹', '').trim()}">
                        <i class="fas fa-calendar-check"></i> Book Now
                    </button>
                    <a href="${guide.reviews}" target="_blank" class="btn btn--outline btn--sm">
                        <i class="fas fa-star"></i> Reviews
                    </a>
                </div>
            </div>
        `;
        return card;
    }

    filterGuides() {
        const cards = document.querySelectorAll('.guide-card');
        cards.forEach(card => {
            const { location, language, price, rating, femaleFriendly, tourCategory } = this.currentGuideFilters;
            let show = true;

            if (location !== 'all' && card.dataset.location !== location) show = false;
            if (language !== 'all' && !card.dataset.language.includes(language)) show = false;
            if (price !== 'all') {
                const cardPrice = parseInt(card.dataset.price);
                if (price === '1000-') { if (cardPrice >= 1000) show = false; }
                else if (price === '1000-2000') { if (cardPrice < 1000 || cardPrice > 2000) show = false; }
                else if (price === '2000+') { if (cardPrice <= 2000) show = false; }
            }
            if (rating > 0 && parseFloat(card.dataset.rating) < rating) show = false;
            if (femaleFriendly && card.dataset.femaleFriendly !== 'true') show = false;
            if (tourCategory !== 'all' && !card.dataset.tourCategory.includes(tourCategory)) show = false;

            card.style.display = show ? 'block' : 'none';
        });
    }

    // --- Transportation Loading (for transport/index.html) ---
    loadTransportation() {
        const transportGrid = document.getElementById('transportGrid');
        if (!transportGrid) return;

        transportGrid.innerHTML = '';
        appData.transportation.forEach(item => {
            transportGrid.appendChild(this.createTransportCard(item));
        });
        this.filterTransportation();
    }

    createTransportCard(item) {
        const card = document.createElement('div');
        card.className = 'transport-card fade-in';
        card.dataset.category = item.category;
        card.dataset.vehicleType = item.vehicleType;
        card.dataset.ac = item.ac ? 'true' : 'false';
        card.dataset.capacity = item.capacity;

        card.innerHTML = `
            <div class="transport-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            <div class="transport-content">
                <h3 class="transport-name">${item.name}</h3>
                <p class="transport-meta">
                    <i class="fas fa-car"></i> ${item.vehicleType} |
                    <i class="fas fa-users"></i> ${item.capacity} persons
                </p>
                <p class="transport-features">
                    ${item.ac ? '<span class="feature-tag"><i class="fas fa-snowflake"></i> AC</span>' : ''}
                    ${item.safetyFeatures.map(sf => `<span class="feature-tag"><i class="fas fa-shield-alt"></i> ${sf}</span>`).join('')}
                </p>
                <p class="transport-price">${item.price}</p>
                <div class="transport-actions">
                    <button class="btn btn--primary btn--sm book-now-btn"
                            data-item-type="transport"
                            data-item-id="${item.id}"
                            data-item-name="${item.name}"
                            data-item-price="${item.price.split('/')[0].replace('₹', '').trim()}">
                        <i class="fas fa-road"></i> Book Now
                    </button>
                    <button class="btn btn--outline btn--sm">
                        <i class="fas fa-info-circle"></i> Details
                    </button>
                </div>
            </div>
        `;
        return card;
    }

    filterTransportation() {
        const cards = document.querySelectorAll('.transport-card');
        cards.forEach(card => {
            const { category, vehicleType, ac, capacity } = this.currentTransportFilters;
            let show = true;

            if (category !== 'all' && card.dataset.category !== category) show = false;
            if (vehicleType !== 'all' && card.dataset.vehicleType !== vehicleType) show = false;
            if (ac !== 'all' && card.dataset.ac !== ac) show = false;
            if (capacity > 0 && parseInt(card.dataset.capacity) < capacity) show = false;

            card.style.display = show ? 'block' : 'none';
        });
    }

    // --- Contact Form (for contact/index.html) ---
    setupContactForm() {
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const name = document.getElementById('contactName').value;
                const email = document.getElementById('contactEmail').value;
                const message = document.getElementById('contactMessage').value;

                if (!name || !email || !message) {
                    alert('Please fill in all required fields.');
                    return;
                }

                // Simulate form submission
                console.log('Contact Form Submitted:', { name, email, message });
                alert('Thank you for your message! We will get back to you shortly.');
                contactForm.reset();
            });
        }
    }

    // --- Payment Gateway Prototype (for payment.html) ---
    // FIX: Removed this entire function as it was conflicting with the inline script
    // setupPaymentPage() { ... }


    setupSearch() {
        const searchForm = document.getElementById('searchForm');
        const searchInput = document.getElementById('searchInput');

        if (searchForm && searchInput) {
            searchForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const query = searchInput.value.toLowerCase();
                this.performSearch(query);
            });
        }
    }

    performSearch(query) {
        let resultsFound = false;
        let targetSectionId = '';

        // Search Destinations (index.html)
        const destinationCards = document.querySelectorAll('.destination-card');
        if (destinationCards.length > 0) {
            destinationCards.forEach(card => {
                const name = card.querySelector('.destination-title').textContent.toLowerCase();
                const description = card.querySelector('.destination-description').textContent.toLowerCase();
                const location = card.querySelector('.destination-location').textContent.toLowerCase();
                const category = card.dataset.category.toLowerCase();

                if (name.includes(query) || description.includes(query) || location.includes(query) || category.includes(query)) {
                    card.style.display = 'block';
                    resultsFound = true;
                    targetSectionId = 'destinations';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        // Search Cultural Heritage (heritage/index.html)
        const heritageCards = document.querySelectorAll('.heritage-card');
        if (heritageCards.length > 0) {
            heritageCards.forEach(card => {
                const title = card.querySelector('.heritage-title')?.textContent.toLowerCase() || '';
                const description = card.querySelector('.heritage-description')?.textContent.toLowerCase() || '';
                const meta = card.querySelector('.heritage-meta')?.textContent.toLowerCase() || '';

                if (title.includes(query) || description.includes(query) || meta.includes(query)) {
                    card.style.display = 'block';
                    resultsFound = true;
                    targetSectionId = 'cultural-heritage';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        // Search Guides (guides/index.html and transport/index.html)
        const guideCards = document.querySelectorAll('.guide-card');
        if (guideCards.length > 0) {
            guideCards.forEach(card => {
                const name = card.querySelector('.guide-name').textContent.toLowerCase();
                const specialties = card.querySelector('.guide-specialties').textContent.toLowerCase();
                const location = card.dataset.location.toLowerCase();
                const language = card.dataset.language.toLowerCase();
                const tourCategory = card.dataset.tourCategory.toLowerCase();

                if (name.includes(query) || specialties.includes(query) || location.includes(query) || language.includes(query) || tourCategory.includes(query)) {
                    card.style.display = 'block';
                    resultsFound = true;
                    if (!targetSectionId) targetSectionId = 'guides'; // Prioritize if not already set
                } else {
                    card.style.display = 'none';
                }
            });
        }

        // Search Transportation (transport/index.html)
        const transportCards = document.querySelectorAll('.transport-card');
        if (transportCards.length > 0) {
            transportCards.forEach(card => {
                const name = card.querySelector('.transport-name').textContent.toLowerCase();
                const features = card.querySelector('.transport-features').textContent.toLowerCase();
                const vehicleType = card.dataset.vehicleType.toLowerCase();
                const category = card.dataset.category.toLowerCase();

                if (name.includes(query) || features.includes(query) || vehicleType.includes(query) || category.includes(query)) {
                    card.style.display = 'block';
                    resultsFound = true;
                    if (!targetSectionId) targetSectionId = 'transportation'; // Prioritize if not already set
                } else {
                    card.style.display = 'none';
                }
            });
        }


        if (!resultsFound) {
            alert(`No results found for "${query}" across available sections.`);
        } else {
            // Scroll to the first visible section if results are found
            const firstVisibleSection = document.getElementById(targetSectionId);
            if (firstVisibleSection) {
                const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;
                window.scrollTo({
                    top: firstVisibleSection.offsetTop - navbarHeight,
                    behavior: 'smooth'
                });
            }
        }
    }

    setupSOSButton() {
        const sosButton = document.getElementById('sosButton');
        if (sosButton) {
            sosButton.addEventListener('click', () => {
                alert('Emergency! Please contact local authorities or your travel guide. Emergency contact: +91 98765 43210');
            });
        }
    }

    setupEventListeners() {
        document.addEventListener('click', (e) => {
            if (e.target.matches('a[href^="#"]')) {
                e.preventDefault();
                const target = document.querySelector(e.target.getAttribute('href'));
                if (target) {
                    const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;
                    window.scrollTo({
                        top: target.offsetTop - navbarHeight,
                        behavior: 'smooth'
                    });
                }
            }
        });

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            const heroContent = document.querySelector('.hero-content');

            if (hero && heroContent && scrolled < window.innerHeight) {
                heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
        });

        document.addEventListener('click', (e) => {
            if (e.target.matches('.btn')) {
                e.target.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    e.target.style.transform = '';
                }, 150);
            }
        });

        document.addEventListener('click', (e) => {
            if (e.target.matches('.book-now-btn')) {
                e.preventDefault();
                const itemType = e.target.dataset.itemType;
                const itemId = e.target.dataset.itemId;
                const itemName = e.target.dataset.itemName;
                const itemPrice = e.target.dataset.itemPrice;
                this.initiateBooking(itemType, itemId, itemName, itemPrice);
            }

            if (e.target.matches('.btn--outline') && e.target.textContent.includes('View Details')) {
                e.preventDefault();
                alert('Detailed view will show more information and reviews. Demo version.');
            }
        });
    }

    initiateBooking(type, id, name, price) {
        // Store booking details in session storage or local storage
        sessionStorage.setItem('bookingItem', JSON.stringify({ type, id, name, price }));
        // Redirect to the payment page
        window.location.href = '/payment.html';
    }

    handleVideoPlayback() {
        const video = document.getElementById('heroVideo');

        if (video) {
            video.addEventListener('loadeddata', () => {
                video.play().catch(e => {
                    console.log('Auto-play was prevented:', e);
                });
            });

            video.addEventListener('error', (e) => {
                console.log('Video error:', e);
                const hero = document.querySelector('.hero');
                if (hero) {
                    hero.style.background = 'linear-gradient(135deg, #1f2937 0%, #374151 100%)';
                }
            });

            const videoObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        video.play().catch(e => console.log('Play prevented:', e));
                    } else {
                        video.pause();
                    }
                });
            }, { threshold: 0.5 });

            videoObserver.observe(video);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing Jharkhand Explorer...');
    try {
        new JharkhandExplorer();
        console.log('Jharkhand Explorer initialized successfully');

        // Initialize VanillaTilt for cards if available
        if (typeof VanillaTilt !== 'undefined') {
            VanillaTilt.init(document.querySelectorAll(".destination-card, .marketplace-card, .accommodation-card, .guide-card, .transport-card, .heritage-card"), {
                max: 15,
                speed: 400,
                glare: true,
                "max-glare": 0.5
            });
        }

    } catch (error) {
        console.error('Error initializing application:', error);
    }
});

window.addEventListener('resize', () => {
    const navLinks = document.getElementById('navLinks');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');

    if (window.innerWidth > 768 && navLinks && mobileMenuToggle) {
        navLinks.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    }
});

window.addEventListener('beforeunload', () => {
    document.body.style.opacity = '0.8';
    document.body.style.transition = 'opacity 0.3s ease-out';
});

if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
        console.log('Loading non-critical resources...');
    });
}