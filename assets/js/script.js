// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    try {
        if (lucide) {
            lucide.createIcons();
        } else {
            console.error('Lucide icons is not loaded.');
        }
    } catch (error) {
        console.error('Error creating lucide icons:', error);
    }

    // Mobile menu functionality
    const menuBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            mobileMenu.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });

        // Close menu with close button
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                mobileMenu.classList.add('hidden');
                document.body.style.overflow = ''; // Restore scrolling
            });
        }

        // Close mobile menu when a link is clicked
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                document.body.style.overflow = ''; // Restore scrolling
            });
        });
    }

    // Handle smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            if (this.getAttribute('href') === '#') return; // Skip empty hash links
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = entry.target.dataset.delay || '0ms';
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    // Apply animations to sections
    document.querySelectorAll('.animated-section').forEach((section, index) => {
        section.dataset.delay = `${index * 150}ms`;
        observer.observe(section);
    });
});