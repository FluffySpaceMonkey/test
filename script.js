function toggleMenu() {
            document.querySelector('.mobile-menu').classList.toggle('active');
            document.querySelector('.menu-overlay').classList.toggle('active');
        }

        const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
        }, observerOptions);
        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });

        function handleSubmit(e) {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);
            alert(`Thanks for reaching out, ${data.name}! I'll get back to you soon at ${data.email}.`);
            e.target.reset();
        }

        document.addEventListener('mousemove', (e) => {
            requestAnimationFrame(() => {
                const orbs = document.querySelectorAll('.orb');
                const x = (e.clientX / window.innerWidth - 0.5) * 2;
                const y = (e.clientY / window.innerHeight - 0.5) * 2;
                orbs.forEach((orb, i) => {
                    const s = (i + 1) * 15;
                    orb.style.transform = `translate(${x * s}px, ${y * s}px)`;
                });
            });
        });