// Sample project data - In a real application, this would come from a server/database
const projectsData = [
    {
        id: 1,
        title: "Path2Pro: Academic and Skill Development Platfor",
        category: "web",
        client: "RetailCorp Inc.",
        completionDate: "May 2025",
        mainImage: "assets/images/R2PC.png",
        //mainImage: "assets/images/Up Coming.png",
        //demoLink: "https://demo-ecommerce.example.com",
        githubLink: "https://github.com/msahid-cse/Path2Pro1.0",
        description: "The Path2Pro is a comprehensive online platform designed to revolutionize the educational experience. It serves as a centralized hub for students, faculty, and staff, offering a wide range of features to enhance learning, foster collaboration, and streamline administrative processes. The platform aims to create a dynamic and engaging learning environment that empowers students to succeed academically and professionally",
        longDescription: "-",

        features: [
           "Resource Library: Access to course materials, research papers, etc.",
            "Skill Development: Access to online courses and workshops.",
            "CVServices: Tools for creating, editing, and reviewing CVs.",
            "Feedback Portal: Submit feedback on courses and instructors.",
            "Notice Board: View and subscribe to university announcements.",
            "Course Management: Create, manage, and publish online courses.",
            "Gradebook: Manage student grades and track progress.",
            "Communication: Online forums, chat rooms, and email.",
            "User Management: Create, manage, and edit user accounts.",
            "System Administration: Monitor system performance, manage settings"
        ],
        technologies: [
            { name: "React", icon: "fab fa-react" },
            { name: "MongoDB", icon: "fas fa-database" },
            { name: "Express", icon: "fab fa-node-js" },
            { name: "Redux", icon: "fas fa-code" },
            { name: "Stripe API", icon: "fab fa-stripe" },
            { name: "PayPal API", icon: "fab fa-paypal" },
            { name: "AWS S3", icon: "fab fa-aws" }
        ],
        gallery: [
            "assets/images/portfolio/R2P-1.png",
            "assets/images/portfolio/R2P-2.png",
            "assets/images/portfolio/R2P-3.png",
            "assets/images/portfolio/R2P-4.png",
            "assets/images/portfolio/R2P-5.png",
            "assets/images/portfolio/R2P-6.png"
        ]
    },
    {
        id: 2,
        title: "Employee Managment System",
        category: "Desktop Application",
        //client: "FitLife Technologies",
        completionDate: "March 2025",
        mainImage: "assets/images/Java_EMP.png",
        //demoLink: "https://fitlife-app.example.com",
        githubLink: "https://github.com/sanjid191/Employee_Management_System_with_GUI_and_MySQL",
        description: "It's a Java project that uses a graphical user interface (GUI) to allow users to manage employee data stored in a MySQL database. The system allows users to add, edit, delete & view employee information, as well as view the login information for both admins and employees and also there are many more features.",
        longDescription: "-",
        features: [
            "Graphical User Interface (GUI) for intuitive user interaction",
            "Secure MySQL database integration for data storage",
            "Add, edit, and delete employee records seamlessly",
            "View comprehensive employee information and profiles",
            "Dual-view login information for both admins and employees",
            "Role-based access control for administrative functions",
            "Data validation to ensure information accuracy",
            "Search and filter capabilities to quickly find employees"
        ],
        technologies: [
            { name: "Java", icon: "fab fa-java" },
            { name: "Java Swing", icon: "fas fa-fire" },
            { name: "MySQL", icon: "fas fa-database" },
            
        ],
        gallery: [
            "assets/images/portfolio/CGPAC-01.png",
            "assets/images/portfolio/CGPAC-02.png",
            "assets/images/portfolio/CGPAC-03.png",
            "assets/images/portfolio/FP-01.png",
            "assets/images/portfolio/FP-02.png",
            "assets/images/portfolio/FP-03.png"
        ]
    },
    {
        id: 3,
        title: "CryptoVisualizer",
        category: "Web",
        client: "Course Project",
        completionDate: "January 2025",
        mainImage: "assets/images/CryptoVisualizer_C.png",
        demoLink: "https://cryptovisualizer.netlify.app/",
        githubLink: "https://github.com/sanjid191/CryptoVisualizer",
        description: "Demystify the principles of cryptography by providing a visual representation.",
        longDescription: "The CryptoVisualizer is an interactive platform designed to demystify the principles of cryptography by providing a practical, visual representation of various cryptographic methods. In an era where data security is paramount, this platform seeks to enhance the understanding of encryption and decryption mechanisms, making cryptography accessible to learners, professionals, and enthusiasts alike.",

        features: [
            "Interactive visualizations of encryption and decryption processes",
            "Real-time animated demonstrations of cryptographic algorithms",
            "Hands-on exploration of various cryptographic methods (e.g., AES, RSA, DES)",
            "User-friendly interface designed for learners and professionals",
            "Side-by-side comparison of plaintext, ciphertext, and keys",
            "Step-by-step breakdown of complex cryptographic operations",
            "Cryptanalysis tools to demonstrate vulnerabilities and attacks",
            "Educational content and explanations integrated with visual tools"
        ],
        technologies: [
            { name: "HTML", icon: "fab fa-html5" },
            { name: "CSS", icon: "fab fa-css3" },
            { name: "JavaScript", icon: "fas fa-js" },
        ],
        gallery: [
            "assets/images/portfolio/1.png",
            "assets/images/portfolio/2.png",
            "assets/images/portfolio/3.png",
            "assets/images/portfolio/4.png",
            "assets/images/portfolio/5.png",
           
        ]
    },
    {
        id: 4,
        title: "Task Management System",
        category: "web",
        client: "Own Project",
        completionDate: "15 March 2024",
        mainImage: "assets/images/CGPA_C.png",
        demoLink: "https://cgpacalculationgub.netlify.app/",
        githubLink: "https://github.com/sanjid191/CGPA-calculation",
        description: "A tool to calculate CGPA scores for students.",
        longDescription: "Stuck juggling grades and semester averages? This website simplifies student life with a user-friendly CGPA calculator. Input your course credits and grades, and it will instantly calculate your semester GPA and overall CGPA. No more manual calculations - this tool keeps you informed of your academic standing and even estimates your graduation class (at some universities). Focus on your studies, let the website handle the number crunching.",
        features: [
            "User-friendly CGPA and GPA calculator interface",
            "Instant semester GPA calculation with credit input",
            "Automatic overall CGPA tracking across semesters",
            "Graduation class estimation (for applicable universities)",
            "Real-time academic standing updates",
            "Simplified grade and credit input system",
            "Eliminates manual calculation errors",
            "Helps students focus on studies by handling number crunching"
        ],
        technologies: [
            { name: "HTML", icon: "fab fa-html5" },
            { name: "CSS", icon: "fab fa-css3" },
            { name: "JavaScript", icon: "fas fa-js" },
        ],
        gallery: [
            "assets/images/portfolio/CGPAC-01.png",
            "assets/images/portfolio/CGPAC-02.png",
            "assets/images/portfolio/CGPAC-03.png",
        ]
    },
    {
        id: 5,
        title: "2D Robot Soccer Simulation (Lightweight)",
        category: "Course Project",
        client: "Own Project",
        completionDate: "15 March 2024",
        mainImage: "assets/images/2D_C.png",
        //demoLink: "https://cgpacalculationgub.netlify.app/",
        githubLink: "https://github.com/sanjid191/Simple_2D_Robot_Soccer_Simulation",
        description: "2D Robot Soccer Simulation (Lightweight)",
        longDescription: "This project presents a comprehensive Robot Soccer Simulation, where two teams of robots (Blue and Red) compete in a virtual soccer match. The simulation is designed to demonstrate the integration of artificial intelligence, real-time graphics, and multi-agent pathfinding. It features realistic ball physics, robot movement using the A* pathfinding algorithm, and interactive user controls. The simulation is both an educational tool and a platform for experimenting with robotics and AI concepts.",
        features: [
            "Two-team (Blue vs. Red) robot soccer match simulation",
            "Integration of artificial intelligence for robot decision-making",
            "Real-time 2D graphics and visualization powered by Pygame",
            "Multi-agent pathfinding using the A* algorithm",
            "Realistic ball physics and collision detection",
            "Interactive user controls to influence the match",
            "Efficient grid calculations and management using NumPy",
            "Educational tool for experimenting with robotics and AI strategies"
        ],
        technologies: [
            { name: "Python", icon: "fab fa-python" },
            { name: "Numpy", icon: "fab fa-numpy" },
            { name: "Pygame", icon: "fas fa-gamepad" },
            { name: "Matplotlib", icon: "fas fa-chart-bar" }
        ],
        gallery: [
            "assets/images/portfolio/2DSG-1.png",
            "assets/images/portfolio/2DSG-2.png",
            "assets/images/portfolio/2DSG-3.png",
            "assets/images/portfolio/2DSG-4.png",
            "assets/images/portfolio/2DSG-5.png",
            "assets/images/portfolio/2DSG-6.png"
        ]
    }
];

document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme toggle
    initThemeToggle();
    
    // Initialize navigation menu
    initNavigation();
    
    // Get project ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = parseInt(urlParams.get('id'));
    
    if (projectId) {
        // Find the project data
        const project = projectsData.find(p => p.id === projectId);
        
        if (project) {
            displayProjectDetails(project);
            displayRelatedProjects(project);
        } else {
            showProjectNotFound();
        }
    } else {
        showProjectNotFound();
    }
});

function displayProjectDetails(project) {
    // Create the HTML content for project details
    const projectContent = `
        <img src="${project.mainImage}" alt="${project.title}" class="project-banner">
        <div class="project-info-container">
            <h1 class="project-title">${project.title}</h1>
            
            <div class="project-meta">
                <div class="meta-item">
                    <i class="fas fa-folder"></i>
                    <span>Category: ${capitalizeFirstLetter(project.category)}</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-user"></i>
                    <span>Client: ${project.client}</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-calendar-check"></i>
                    <span>Completed: ${project.completionDate}</span>
                </div>
            </div>
            
            <div class="project-description">
                <p>${project.longDescription.split('\n\n').join('</p><p>')}</p>
            </div>
            
            <div class="project-features">
                <h3 class="features-title">Key Features</h3>
                <div class="feature-list">
                    ${project.features.map(feature => `
                        <div class="feature-item">
                            <i class="fas fa-check-circle"></i>
                            <span>${feature}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="technologies-used">
                <h3 class="tech-title">Technologies Used</h3>
                <div class="tech-list">
                    ${project.technologies.map(tech => `
                        <div class="tech-item">
                            <i class="${tech.icon}"></i>
                            <span>${tech.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="project-gallery">
                <h3 class="gallery-title">Project Gallery</h3>
                <div class="gallery-grid">
                    ${project.gallery.map((image, index) => `
                        <div class="gallery-item" data-image-index="${index}">
                            <img src="${image}" alt="Project Screenshot ${index + 1}" class="gallery-image">
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="project-action-buttons">
                ${project.demoLink ? `
                    <a href="${project.demoLink}" class="project-button primary" target="_blank">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                ` : ''}
                ${project.githubLink ? `
                    <a href="${project.githubLink}" class="project-button secondary" target="_blank">
                        <i class="fab fa-github"></i> View Source
                    </a>
                ` : ''}
            </div>
        </div>
    `;
    
    // Update the page content
    document.getElementById('project-content').innerHTML = projectContent;
    
    // Initialize the lightbox for this project
    initLightbox(project.gallery);
    
    // Update the page title
    document.title = `${project.title} | Sanjid Ahmmed Portfolio`;
}

function displayRelatedProjects(currentProject) {
    // Find related projects (same category, excluding current project)
    const relatedProjects = projectsData
        .filter(p => p.category === currentProject.category && p.id !== currentProject.id)
        .slice(0, 3); // Limit to 3 related projects
    
    // If no related projects with same category, get any other projects
    if (relatedProjects.length === 0) {
        projectsData
            .filter(p => p.id !== currentProject.id)
            .slice(0, 3)
            .forEach(p => relatedProjects.push(p));
    }
    
    // Create HTML for related projects
    const relatedProjectsHTML = relatedProjects.map(project => `
        <div class="project-card" data-category="${project.category}">
            <div class="project-img">
                <img src="https://via.placeholder.com/600x400" alt="${project.title}">
                <div class="project-overlay">
                    <a href="project-detail.html?id=${project.id}" class="project-link"><i class="fas fa-link"></i></a>
                    ${project.githubLink ? `<a href="${project.githubLink}" class="project-github"><i class="fab fa-github"></i></a>` : ''}
                </div>
            </div>
            <div class="project-info">
                <h4>${project.title}</h4>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.technologies.slice(0, 3).map(tech => `<span>${tech.name}</span>`).join('')}
                </div>
                <a href="project-detail.html?id=${project.id}" class="view-details-btn">View Details</a>
            </div>
        </div>
    `).join('');
    
    // Update the related projects section
    const relatedProjectsSection = document.getElementById('related-projects');
    
    if (relatedProjects.length > 0) {
        relatedProjectsSection.innerHTML = relatedProjectsHTML;
        document.querySelector('.related-projects').style.display = 'block';
    } else {
        document.querySelector('.related-projects').style.display = 'none';
    }
}

function showProjectNotFound() {
    const projectContent = `
        <div class="project-not-found">
            <i class="fas fa-exclamation-circle" style="font-size: 5rem; color: var(--primary-color-dark); margin-bottom: 20px;"></i>
            <h2>Project Not Found</h2>
            <p>Sorry, the project you're looking for doesn't exist or has been removed.</p>
            <a href="index.html#projects" class="project-button primary">
                <i class="fas fa-arrow-left"></i> Back to All Projects
            </a>
        </div>
    `;
    
    document.getElementById('project-content').innerHTML = projectContent;
    document.querySelector('.related-projects').style.display = 'none';
    document.title = "Project Not Found | Sanjid Ahmmed Portfolio";
}

// Utility functions
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Theme Toggle functionality (simplified version from main script)
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

// Navigation functionality (simplified version from main script)
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close menu when a link is clicked
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Lightbox functionality
let currentImageIndex = 0;
let galleryImages = [];

function initLightbox(images) {
    galleryImages = images;
    
    // Add click event listeners to gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imageIndex = parseInt(this.dataset.imageIndex);
            openLightbox(imageIndex);
        });
    });
    
    // Add event listeners to lightbox controls
    document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
    document.getElementById('lightbox-prev').addEventListener('click', showPrevImage);
    document.getElementById('lightbox-next').addEventListener('click', showNextImage);
    
    // Close lightbox when clicking outside the image
    document.getElementById('lightbox').addEventListener('click', function(e) {
        if (e.target === this) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        const lightbox = document.getElementById('lightbox');
        if (lightbox.classList.contains('active')) {
            switch(e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    showPrevImage();
                    break;
                case 'ArrowRight':
                    showNextImage();
                    break;
            }
        }
    });
}

function openLightbox(imageIndex) {
    currentImageIndex = imageIndex;
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const currentCounter = document.getElementById('lightbox-current');
    const totalCounter = document.getElementById('lightbox-total');
    
    // Set the image source
    lightboxImage.src = galleryImages[currentImageIndex];
    
    // Update counter
    currentCounter.textContent = currentImageIndex + 1;
    totalCounter.textContent = galleryImages.length;
    
    // Show/hide navigation buttons
    updateNavigationButtons();
    
    // Show lightbox
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

function showPrevImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        updateLightboxImage();
    }
}

function showNextImage() {
    if (currentImageIndex < galleryImages.length - 1) {
        currentImageIndex++;
        updateLightboxImage();
    }
}

function updateLightboxImage() {
    const lightboxImage = document.getElementById('lightbox-image');
    const currentCounter = document.getElementById('lightbox-current');
    
    // Add fade effect
    lightboxImage.style.opacity = '0';
    
    setTimeout(() => {
        lightboxImage.src = galleryImages[currentImageIndex];
        lightboxImage.style.opacity = '1';
        currentCounter.textContent = currentImageIndex + 1;
        updateNavigationButtons();
    }, 150);
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');
    
    // Hide previous button if at first image
    if (currentImageIndex === 0) {
        prevBtn.style.opacity = '0.3';
        prevBtn.style.cursor = 'not-allowed';
    } else {
        prevBtn.style.opacity = '1';
        prevBtn.style.cursor = 'pointer';
    }
    
    // Hide next button if at last image
    if (currentImageIndex === galleryImages.length - 1) {
        nextBtn.style.opacity = '0.3';
        nextBtn.style.cursor = 'not-allowed';
    } else {
        nextBtn.style.opacity = '1';
        nextBtn.style.cursor = 'pointer';
    }
}

// Touch/swipe support for mobile devices
let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swiped left - show next image
            showNextImage();
        } else {
            // Swiped right - show previous image
            showPrevImage();
        }
    }
}

// Add touch event listeners to lightbox image
document.addEventListener('DOMContentLoaded', function() {
    const lightboxImage = document.getElementById('lightbox-image');
    if (lightboxImage) {
        lightboxImage.addEventListener('touchstart', handleTouchStart, { passive: true });
        lightboxImage.addEventListener('touchend', handleTouchEnd, { passive: true });
    }
});
