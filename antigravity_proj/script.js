document.addEventListener('DOMContentLoaded', () => {
    // 1. Highlight current day in operating hours
    const highlightCurrentDay = () => {
        const today = new Date().getDay(); // 0 is Sunday, 1 is Monday, etc.
        const hoursItems = document.querySelectorAll('.hours-list li');
        
        hoursItems.forEach(item => {
            const itemDay = parseInt(item.getAttribute('data-day'));
            if (itemDay === today) {
                item.classList.add('today');
                
                // Also update header status based on current day
                const timeStr = item.querySelector('.time').textContent;
                const headerStatus = document.getElementById('header-status');
                if (headerStatus) {
                    headerStatus.textContent = `Open Today: ${timeStr}`;
                }
            }
        });
    };

    // 2. Set current year in footer
    const setCurrentYear = () => {
        const yearSpan = document.getElementById('year');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    };

    // 3. Smooth scrolling offset for fixed header
    const setupSmoothScrolling = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerOffset = 85; // navbar height roughly
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
                    window.scrollTo({
                         top: offsetPosition,
                         behavior: "smooth"
                    });
                }
            });
        });
    };

    // 4. Mobile Menu Toggle
    const setupMobileMenu = () => {
        const toggleBtn = document.getElementById('mobile-menu-toggle');
        const navLinks = document.getElementById('nav-links');
        
        if (toggleBtn && navLinks) {
            toggleBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                const icon = toggleBtn.querySelector('i');
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('ph-list');
                    icon.classList.add('ph-x');
                } else {
                    icon.classList.remove('ph-x');
                    icon.classList.add('ph-list');
                }
            });

            // Close menu when a link is clicked
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    const icon = toggleBtn.querySelector('i');
                    if (icon) {
                        icon.classList.remove('ph-x');
                        icon.classList.add('ph-list');
                    }
                });
            });
        }
    };

    // 5. Ads & Analytics Event Tracking (Mock Setup)
    const setupAnalyticsTracking = () => {
        // Function to simulate sending event to Google Analytics/Meta
        const trackEvent = (eventName, params) => {
            console.log(`[Analytics Event Tracked]: ${eventName}`, params);
            // In a live environment, you would call gtag() or fbq() here:
            // if (typeof gtag === 'function') { gtag('event', eventName, params); }
        };

        // Track Phone Calls
        document.querySelectorAll('a[href^="tel:"]').forEach(link => {
            link.addEventListener('click', () => {
                trackEvent('generate_lead', { method: 'phone_call' });
            });
        });

        // Track WhatsApp Clicks
        const whatsappBtn = document.querySelector('.whatsapp-float');
        if (whatsappBtn) {
            whatsappBtn.addEventListener('click', () => {
                trackEvent('generate_lead', { method: 'whatsapp_message' });
            });
        }

        // Track Map Directions
        document.querySelectorAll('a[href*="maps.google.com"]').forEach(link => {
            link.addEventListener('click', () => {
                trackEvent('get_directions', { location: 'nashik_shop' });
            });
        });
    };

    // Initialize all
    highlightCurrentDay();
    setCurrentYear();
    setupSmoothScrolling();
    setupMobileMenu();
    setupAnalyticsTracking();
});
