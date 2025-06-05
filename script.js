document.addEventListener('DOMContentLoaded', function() {
    // Active Navigation Link
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    function setActiveLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    }

    // Update active link on scroll
    window.addEventListener('scroll', setActiveLink);

    // Smooth Scroll with offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                navLinks.forEach(link => link.classList.remove('active'));
                hamburger.classList.remove('active');
                document.querySelector('.nav-links').classList.remove('active');
            }
        });
    });

    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Typing Animation
    const typingText = document.querySelector('.typing-text');
    const roles = ['Android Developer', 'Problem Solver', 'Data Analyst'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 200;
    let erasingDelay = 100;
    let newTextDelay = 2000;

    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = erasingDelay;
        } else {
            typingText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingDelay = 200;
        }
        
        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingDelay = newTextDelay;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingDelay = 500;
        }
        
        setTimeout(type, typingDelay);
    }

    // Start typing animation when page loads
    window.onload = () => {
        if (document.querySelector('.typing-text')) {
            setTimeout(type, newTextDelay);
        }
    };
    
    // Sticky header on scroll
    const header = document.querySelector('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            // Scroll down
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // Scroll up
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        
        lastScroll = currentScroll;
    });
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Form is now handled by FormSubmit service
            // Keep the default form submission behavior
        });
    }
    
    // Timeline animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    function animateTimeline() {
        timelineItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (itemTop < windowHeight * 0.8) {
                item.classList.add('animate');
            }
        });
    }
    
    // Skill progress bars animation
    const skillBars = document.querySelectorAll('.skill-progress-bar');
    let skillBarsAnimated = false;
    
    function resetSkillBars() {
        skillBars.forEach(bar => {
            const originalWidth = bar.getAttribute('data-width') || bar.style.width;
            
            // Save the original width as data attribute
            if (!bar.getAttribute('data-width')) {
                bar.setAttribute('data-width', originalWidth);
            }
            
            // Reset to 0 initially
            bar.style.width = '0%';
        });
    }
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const barTop = bar.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (barTop < windowHeight * 0.8 && bar.style.width === '0%') {
                const originalWidth = bar.getAttribute('data-width');
                
                setTimeout(() => {
                    bar.style.width = originalWidth;
                }, 100);
            }
        });
    }
    
    // Reset skill bars initially
    resetSkillBars();
    
    // Project cards animation
    const projectCards = document.querySelectorAll('.project-card');
    
    function animateProjectCards() {
        if (projectCards.length > 0) {
            projectCards.forEach((card, index) => {
                const cardTop = card.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (cardTop < windowHeight * 0.8) {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 200);
                }
            });
        }
    }
    
    // Contact items animation
    const contactItems = document.querySelectorAll('.contact-item, .social-link-item');
    
    function animateContactItems() {
        contactItems.forEach((item, index) => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (itemTop < windowHeight * 0.8) {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }
    
    // Set initial styles for animations
    if (projectCards.length > 0) {
        projectCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease-out';
        });
    }
    
    contactItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.4s ease-out';
    });
    
    // Project showcase animation
    const projectShowcase = document.querySelector('.project-showcase');
    if (projectShowcase) {
        projectShowcase.style.opacity = '0';
        projectShowcase.style.transform = 'translateY(30px)';
        projectShowcase.style.transition = 'all 0.8s ease-out';
    }
    
    function animateProjectShowcase() {
        if (projectShowcase) {
            const showcaseTop = projectShowcase.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (showcaseTop < windowHeight * 0.9) {
                projectShowcase.style.opacity = '1';
                projectShowcase.style.transform = 'translateY(0)';
            }
        }
    }
    
    // Initialize Swiper for project screenshots
    function initProjectSwipers() {
        const swiperConfigs = {
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: true,
            loop: true,
            autoHeight: true,
            speed: 1600,
            preloadImages: true,
            lazy: {
                loadPrevNext: true,
                loadPrevNextAmount: 2
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            on: {
                init: function () {
                    setTimeout(() => {
                        this.update();
                    }, 50);
                },
                slideChange: function () {
                    setTimeout(() => {
                        this.update();
                    }, 50);
                }
            }
        };

        // Initialize User App Swiper
        const userSwiper = new Swiper('.project-screenshots', swiperConfigs);
        
        // Initialize Admin App Swiper
        const adminSwiper = new Swiper('.admin-screenshots', swiperConfigs);

        return { userSwiper, adminSwiper };
    }

    // Project Tabs Functionality
    function initProjectTabs() {
    const tabs = document.querySelectorAll('.tab');
        const contents = document.querySelectorAll('.project-content');
        let swipers = null;

        // Initialize swipers after a small delay to ensure DOM is ready
        setTimeout(() => {
            swipers = initProjectSwipers();
        }, 50);
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
                const targetId = tab.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
                contents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
                const targetContent = document.getElementById(`${targetId}-content`);
                targetContent.classList.add('active');
                
                // Update Swiper instances
                if (swipers) {
                    setTimeout(() => {
                        if (targetId === 'user-app') {
                            swipers.userSwiper.update();
                            swipers.userSwiper.slideToLoop(0);
                        } else if (targetId === 'admin-app') {
                            swipers.adminSwiper.update();
                            swipers.adminSwiper.slideToLoop(0);
                        }
                    }, 50);
                }
            });
        });

        // Set initial active state
        const initialTab = document.querySelector('.tab.active');
        if (initialTab) {
            initialTab.click();
        }
    }
    
    // Run animations on scroll
    function checkAnimations() {
        animateTimeline();
        animateSkillBars();
        animateProjectCards();
        animateContactItems();
        animateProjectShowcase();
    }
    
    // Check animations on load and scroll
    checkAnimations();
    window.addEventListener('scroll', checkAnimations);
    
    // Initialize Swiper for project screenshots
    initProjectSwipers();
    
    // Initialize project tabs
    initProjectTabs();
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add fade-in class to elements
    document.querySelectorAll('.section-title, .skill-card, .project-showcase, .about-content, .timeline-item').forEach(el => {
        el.classList.add('fade-in-element');
        observer.observe(el);
    });

    // Add CSS classes for animations
    const style = document.createElement('style');
    style.textContent = `
        .fade-in-element {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-in {
            opacity: 1;
            transform: translateY(0);
        }

        .nav-links.active {
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 80px;
            left: 0;
            right: 0;
            background: var(--glass-bg);
            backdrop-filter: blur(10px);
            padding: 2rem;
            border-radius: 0 0 var(--border-radius) var(--border-radius);
            box-shadow: var(--shadow);
            border: 1px solid var(--glass-border);
            animation: slideDown 0.3s ease-out forwards;
        }

        .hamburger.active span:nth-child(1) {
            transform: translateY(7px) rotate(45deg);
        }

        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
            transform: translateY(-7px) rotate(-45deg);
        }

        header.scroll-down {
            transform: translateY(-100%);
        }

        header.scroll-up {
            transform: translateY(0);
            background: var(--glass-bg);
            backdrop-filter: blur(10px);
            box-shadow: var(--shadow);
        }

        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;

    document.head.appendChild(style);

    // Initialize Swiper for project images if it exists
    if (typeof Swiper !== 'undefined') {
        new Swiper('.swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            }
        });
    }

    // Typing animation for hero section
    function setupTypingAnimation() {
        const words = document.querySelectorAll('.words span');
        words.forEach((word, index) => {
            word.style.animationDelay = `${index * 2}s`;
        });
    }

    // Initialize animations when DOM is loaded
    document.addEventListener('DOMContentLoaded', () => {
        setupTypingAnimation();
        initProjectTabs();
    });

    // Initialize EmailJS
    (function() {
        emailjs.init("9InHMbMXWm7JBJQTb"); // Replace with your EmailJS public key
    })();

    // Contact form handling
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const successMessage = document.getElementById('success-message');
        const errorMessage = document.getElementById('error-message');
        const submitButton = this.querySelector('button[type="submit"]');
        
        // Disable the submit button and show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        
        // Hide any previous messages
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';

        // Get form data
        const templateParams = {
            from_name: document.getElementById('name').value,
            from_email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // Send the email using EmailJS
        emailjs.send('service_1pt79rr', 'template_5l6p27w', templateParams)
            .then(function() {
                // Show success message
                successMessage.style.display = 'block';
                // Reset form
                document.getElementById('contact-form').reset();
            }, function(error) {
                // Show error message
                errorMessage.style.display = 'block';
                console.log('Failed to send message:', error);
            })
            .finally(function() {
                // Re-enable the submit button and restore original text
                submitButton.disabled = false;
                submitButton.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
            });
    });
}); 