

//geting form data and sending to google sheet from COntuct form
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    fetch("https://script.google.com/macros/s/AKfycbw6sklcSSDWKkCJmS6lg9G0v0KFnPWDFFb76jRb7UQ76jyBQ1S2JdDSNc_jApFNJDw0/exec", {
        method: "POST",
        body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
        alert("✅ Message sent successfully!");
        document.getElementById("contactForm").reset();
    })
    .catch(err => {
        console.error(err);
        alert("❌ Error sending message.");
    });
});


// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    initThemeToggle();
    
    // Changing profession text with typewriter effect
    initChangingText();
    
    // Mouse cursor effect
    initMouseEffect();
    
    // Navigation menu functionality
    initNavigation();
    
    // Skills progress bars - IMMEDIATE INITIALIZATION (most important for fixing the bars)
    initSkillsAnimation();
    
    // Double-check that skill bars are properly initialized with direct setting
    setTimeout(() => {
        document.querySelectorAll('.progress-bar').forEach(bar => {
            bar.style.width = bar.getAttribute('data-width');
        });
    }, 100);
    
    // Projects filter functionality
    initProjectsFilter();
    
    // Form submission handling
    initContactForm();
});

// Theme Toggle
function initThemeToggle() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle');
    const sunIcon = document.querySelector('.theme-toggle .fa-sun');
    const moonIcon = document.querySelector('.theme-toggle .fa-moon');
    
    // Check for saved user preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        sunIcon.classList.add('active');
        moonIcon.classList.remove('active');
    }
    
    // Theme toggle click event
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            sunIcon.classList.add('active');
            moonIcon.classList.remove('active');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            moonIcon.classList.add('active');
            sunIcon.classList.remove('active');
            localStorage.setItem('theme', 'dark');
        }
    });
}

// Changing profession text with typewriter effect
function initChangingText() {
    const professions = ['Developer', 'Photographer', 'Leader', 'Designer', 'Innovator'];
    const changingTextElement = document.getElementById('changing-profession');
    let currentIndex = 0;
    let isDeleting = false;
    let text = '';
    let delta = 100; // typing speed
    let typingDelay = 50; // delay between typing and erasing
    let erasingDelay = 100; // delay between erasing and typing
    
    // Add blinking cursor CSS
    const style = document.createElement('style');
    style.innerHTML = `
        #changing-profession {
            position: relative;
            display: inline-block;
        }
        #changing-profession::after {
            content: '|';
            position: absolute;
            right: -8px;
            color: var(--primary-color-dark);
            animation: blink-caret 0.75s step-end infinite;
        }
        @keyframes blink-caret {
            from, to { opacity: 1; }
            50% { opacity: 0; }
        }
        .light-mode #changing-profession::after {
            color: var(--primary-color-light);
        }
    `;
    document.head.appendChild(style);
    
    // Initial text
    changingTextElement.textContent = '';
    
    function typeEffect() {
        const fullText = professions[currentIndex];
        
        if (isDeleting) {
            // Remove a character
            text = fullText.substring(0, text.length - 1);
        } else {
            // Add a character
            text = fullText.substring(0, text.length + 1);
        }
        
        // Set the text with color gradient
        changingTextElement.textContent = text;
        
        // Calculate typing speed
        delta = isDeleting ? erasingDelay : typingDelay;
        
        // If word is complete
        if (!isDeleting && text === fullText) {
            // Set delay before starting to delete
            delta = 1500;
            isDeleting = true;
        } else if (isDeleting && text === '') {
            // Move to next word when deleted
            isDeleting = false;
            currentIndex = (currentIndex + 1) % professions.length;
            delta = 500; // Pause before typing next word
        }
        
        // Apply slight randomness to typing speed for realistic effect
        delta = Math.max(delta, parseInt(Math.random() * 100) + 100);
        
        setTimeout(typeEffect, delta);
    }
    
    // Start the typing effect
    typeEffect();
}

// Navigation functionality
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');
    const nav = document.querySelector('.main-nav');
    
    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            
            // Update active link
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
    
    // Navigation background on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    
    // Set active link based on scroll position
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Skills progress bars animation
function initSkillsAnimation() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    // SOLUTION: Immediately set the width for all progress bars and position the percentage text
    // This ensures they display correctly with their percentages
    progressBars.forEach(bar => {
        // Get the width from data-width attribute (e.g., "95%")
        const width = bar.getAttribute('data-width');
        // Set the width directly - this is the most reliable way
        bar.style.width = width;
        
        // Get the percentage text element that's a sibling to this progress bar
        const percentageText = bar.parentElement.querySelector('.progress-text');
        if (percentageText) {
            // Convert percentage width (e.g., "95%") to a number
            const percentValue = parseInt(width);
            // Set the left position of the percentage text to match the end of the progress bar
            percentageText.style.left = percentValue + '%';
        }
    });
}

// Projects filter functionality
function initProjectsFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Contact form submission
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to your server
            // For this example, we'll just log the values
            console.log('Form submitted with values:', {
                name,
                email,
                subject,
                message
            });
            
            // Show success message (in a real app, do this after successful API call)
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
}

// Window onload handler - last resort fallback for skill bars
window.onload = function() {
    // Force all progress bars to show after everything is loaded
    document.querySelectorAll('.progress-bar').forEach(bar => {
        const width = bar.getAttribute('data-width');
        // Set important flag to override any other styles
        bar.style.setProperty('width', width, 'important');
        
        // Also update the position of percentage text
        const percentageText = bar.parentElement.querySelector('.progress-text');
        if (percentageText) {
            const percentValue = parseInt(width);
            percentageText.style.left = percentValue + '%';
        }
        
        console.log('Setting bar width to:', width); // Debug info
    });
};

// Floating scroll arrow logic
    (function() {
      const arrow = document.getElementById('scrollArrow');
      const arrowIcon = arrow.querySelector('i');
      function checkFooter() {
        const footer = document.querySelector('footer');
        const rect = footer.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          arrowIcon.classList.remove('fa-arrow-down');
          arrowIcon.classList.add('fa-arrow-up');
          arrow.setAttribute('data-direction', 'up');
        } else {
          arrowIcon.classList.remove('fa-arrow-up');
          arrowIcon.classList.add('fa-arrow-down');
          arrow.setAttribute('data-direction', 'down');
        }
      }
      window.addEventListener('scroll', checkFooter);
      window.addEventListener('resize', checkFooter);
      arrow.addEventListener('click', function() {
        if (arrow.getAttribute('data-direction') === 'down') {
          window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
      checkFooter();
    })();
