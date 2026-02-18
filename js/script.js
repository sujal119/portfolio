        // =====================
        // BURGER MENU
        // =====================
        const burger = document.getElementById('burger');
        const navMenu = document.getElementById('navMenu');

        if (burger && navMenu) {
            burger.addEventListener('click', function(e) {
                e.stopPropagation();
                burger.classList.toggle('active');
                navMenu.classList.toggle('open');
                document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
            });

            // Close when nav link clicked
            var links = navMenu.getElementsByTagName('a');
            for (var i = 0; i < links.length; i++) {
                links[i].addEventListener('click', function() {
                    burger.classList.remove('active');
                    navMenu.classList.remove('open');
                    document.body.style.overflow = '';
                });
            }

            // Close when clicking outside
            document.addEventListener('click', function(e) {
                if (!burger.contains(e.target) && !navMenu.contains(e.target)) {
                    burger.classList.remove('active');
                    navMenu.classList.remove('open');
                    document.body.style.overflow = '';
                }
            });
        }

        // =====================
        // SMOOTH SCROLLING
        // =====================
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

        // =====================
        // ACTIVE NAV ON SCROLL
        // =====================
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = '';
            const navbar = document.getElementById('navbar');

            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === current) {
                    link.classList.add('active');
                }
            });
        });

        // =====================
        // FADE IN ANIMATIONS
        // =====================
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
        document.querySelectorAll('.skill-card').forEach(el => observer.observe(el));

        // =====================
        // FORM SUBMISSION
        // =====================
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Thank you for your message! I will get back to you soon.');
                e.target.reset();
            });
        }

        // =====================
        // PARALLAX PARTICLES
        // =====================
        document.addEventListener('mousemove', (e) => {
            const particles = document.querySelectorAll('.particle');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            particles.forEach((particle, index) => {
                const speed = (index + 1) * 20;
                particle.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
            });
        });
