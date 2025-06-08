// Custom JavaScript for Personal Website

document.addEventListener('DOMContentLoaded', function() {
    // Load markdown content
    loadMarkdownContent();
    
    function loadMarkdownContent() {
        // Load publications
        fetch('data/publications.md')
            .then(response => response.text())
            .then(markdown => {
                const publicationsContent = document.querySelector('.publications-content');
                if (publicationsContent) {
                    publicationsContent.innerHTML = parseMarkdown(markdown);
                }
            })
            .catch(error => {
                console.error('Error loading publications:', error);
                const publicationsContent = document.querySelector('.publications-content');
                if (publicationsContent) {
                    publicationsContent.innerHTML = '<p>Content loading error. Please try refreshing the page.</p>';
                }
            });
        
        // Load talks
        fetch('data/talks.md')
            .then(response => response.text())
            .then(markdown => {
                const talksContent = document.querySelector('.talks-content');
                if (talksContent) {
                    talksContent.innerHTML = parseMarkdown(markdown);
                }
            })
            .catch(error => {
                console.error('Error loading talks:', error);
                const talksContent = document.querySelector('.talks-content');
                if (talksContent) {
                    talksContent.innerHTML = '<p>Content loading error. Please try refreshing the page.</p>';
                }
            });
    }
    
    function parseMarkdown(markdown) {
        // Remove the main title (first line starting with #)
        const lines = markdown.split('\n');
        const contentLines = lines.filter((line, index) => {
            return !(index === 0 && line.startsWith('# '));
        });
        
        let html = '';
        let currentSection = '';
        
        for (let i = 0; i < contentLines.length; i++) {
            const line = contentLines[i].trim();
            
            if (line.startsWith('## ')) {
                // Handle h2 titles with potential links
                const titleText = line.substring(3);
                const linkMatch = titleText.match(/\[([^\]]+)\]\(([^)]+)\)/);
                
                if (linkMatch) {
                    const [, linkText, url] = linkMatch;
                    html += `<h2><a href="${url}" target="_blank">${linkText}</a></h2>\n`;
                } else {
                    html += `<h2>${titleText}</h2>\n`;
                }
            } else if (line.startsWith('**') && line.endsWith('**')) {
                // Handle bold text (subtitle)
                const text = line.substring(2, line.length - 2);
                html += `<strong>${text}</strong>\n`;
            } else if (line.length > 0 && !line.startsWith('#')) {
                // Handle regular paragraphs
                html += `<p>${line}</p>\n`;
            }
        }
        
        return html;
    }
    // Smooth scrolling for navigation links (only if they exist)
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 20;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Update active navigation link on scroll
        const sections = document.querySelectorAll('section[id]');
        const navbarHeight = 20;
        
        function updateActiveNavLink() {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - navbarHeight - 10;
                const sectionHeight = section.offsetHeight;
                
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        }
        
        // Throttled scroll event listener
        let ticking = false;
        
        function onScroll() {
            if (!ticking) {
                requestAnimationFrame(() => {
                    updateActiveNavLink();
                    ticking = false;
                });
                ticking = true;
            }
        }
        
        window.addEventListener('scroll', onScroll);
    }
    
    // Navbar background opacity on scroll (only if navbar exists)
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        function updateNavbarBackground() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
        
        window.addEventListener('scroll', updateNavbarBackground);
    }
    
    // Add fade-in animation to cards when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe cards and other elements for animation
    const animatedElements = document.querySelectorAll('.card, .publication-item, .talk-item');
    animatedElements.forEach(el => observer.observe(el));
    
    // External link tracking (optional - for analytics)
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    
    externalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add any analytics tracking here if needed
            console.log('External link clicked:', this.href);
        });
    });
    
    // Add hover effect to social buttons
    const socialButtons = document.querySelectorAll('.btn-social');
    
    socialButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Copy email functionality (if needed)
    function addCopyEmailFeature() {
        const emailButton = document.querySelector('[href^="mailto:"]');
        if (emailButton) {
            emailButton.addEventListener('click', function(e) {
                // Optional: Copy email to clipboard
                const email = this.href.replace('mailto:', '');
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(email).then(() => {
                        // Show a temporary notification
                        showNotification('Email copied to clipboard!');
                    });
                }
            });
        }
    }
    
    // Notification function
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--primary-color);
            color: white;
            padding: 12px 20px;
            border-radius: 6px;
            z-index: 9999;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Trigger animation
        setTimeout(() => {
            notification.style.opacity = '1';
        }, 100);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    // Initialize copy email feature
    addCopyEmailFeature();
    
    // Preload critical images (if any)
    function preloadImages() {
        const imagesToPreload = [
            // Add any critical images here
        ];
        
        imagesToPreload.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }
    
    preloadImages();
    
    // Performance monitoring
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
            }, 0);
        });
    }
});

// Add CSS for scrolled navbar state
const style = document.createElement('style');
style.textContent = `
    .navbar.scrolled {
        background-color: rgba(255, 255, 255, 0.95) !important;
        backdrop-filter: blur(10px);
    }
    
    .notification {
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
`;
document.head.appendChild(style);
