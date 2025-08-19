// Sample project data - In a real application, this would come from a server/database
const projectsData = [
    {
        id: 1,
        title: "Path2Pro: Academic and Skill Development Platfor",
        category: "web",
        client: "RetailCorp Inc.",
        completionDate: "May 2025",
        //mainImage: "https://via.placeholder.com/1200x600",
        mainImage: "assets/images/Up Coming.png",
        demoLink: "https://demo-ecommerce.example.com",
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
            { name: "Node.js", icon: "fab fa-node-js" },
            { name: "MongoDB", icon: "fas fa-database" },
            { name: "Express", icon: "fab fa-node-js" },
            { name: "Redux", icon: "fas fa-code" },
            { name: "Stripe API", icon: "fab fa-stripe" },
            { name: "PayPal API", icon: "fab fa-paypal" },
            { name: "AWS S3", icon: "fab fa-aws" }
        ],
        gallery: [
            "assets/images/portfolio/EMS-C01.png",
            "assets/images/portfolio/EMS-C02.png",
            "assets/images/portfolio/EMS-C03.png",
            "assets/images/portfolio/EMS-CDS01.png",
            "assets/images/portfolio/EMS-CDS02.png",
            "assets/images/portfolio/EMS-CDS03.png"
        ]
    },
    {
        id: 2,
        title: "Employee Managment System",
        category: "Desktop Application",
        //client: "FitLife Technologies",
        completionDate: "March 2025",
        mainImage: "https://via.placeholder.com/1200x600",
        //demoLink: "https://fitlife-app.example.com",
        githubLink: "https://github.com/sanjid191/Employee_Management_System_with_GUI_and_MySQL",
        description: "It's a Java project that uses a graphical user interface (GUI) to allow users to manage employee data stored in a MySQL database. The system allows users to add, edit, delete & view employee information, as well as view the login information for both admins and employees and also there are many more features.",
        longDescription: "-",
        features: [
            "Personalized workout plans",
            "Progress tracking with visual charts",
            "Calorie and nutrition tracking",
            "Integration with fitness wearables",
            "Social features and challenges",
            "Offline mode for workouts without internet",
            "Video tutorials for exercises",
            "Reminder and notification system"
        ],
        technologies: [
            { name: "React Native", icon: "fab fa-react" },
            { name: "Firebase", icon: "fas fa-fire" },
            { name: "Redux", icon: "fas fa-code" },
            { name: "Google Fit API", icon: "fab fa-google" },
            { name: "Apple HealthKit", icon: "fab fa-apple" },
            { name: "Cloud Functions", icon: "fas fa-cloud" }
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
        title: "Brand Identity Design",
        category: "design",
        client: "GreenEco Solutions",
        completionDate: "January 2025",
        mainImage: "https://via.placeholder.com/1200x600",
        demoLink: "https://behance.net/username/greenecoproject",
        githubLink: null,
        description: "Complete brand identity design including logo, color palette, and guidelines.",
        longDescription: "This comprehensive brand identity project was created for GreenEco Solutions, a sustainable energy startup looking to establish a strong and recognizable presence in the renewable energy market. The project began with extensive market research and competitor analysis to identify opportunities for differentiation.\n\nThe design process included developing multiple concepts that reflected the client's core values of sustainability, innovation, and accessibility. After client consultations and refinements, the final brand identity was developed with a modern, clean aesthetic that incorporated natural elements and a vibrant yet professional color palette.\n\nThe deliverables included a versatile primary logo with variations for different applications, a comprehensive color palette with primary and secondary colors, custom typography guidelines, iconography, and a detailed brand usage guide to ensure consistency across all marketing materials and digital platforms.",
        features: [
            "Logo design with multiple variations",
            "Comprehensive color palette",
            "Typography selection and guidelines",
            "Brand pattern and texture design",
            "Stationery design (business cards, letterheads)",
            "Social media templates",
            "Brand usage guidelines document",
            "Digital and print application mockups"
        ],
        technologies: [
            { name: "Adobe Illustrator", icon: "fab fa-adobe" },
            { name: "Adobe Photoshop", icon: "fab fa-adobe" },
            { name: "Figma", icon: "fab fa-figma" },
            { name: "InDesign", icon: "fab fa-adobe" },
            { name: "After Effects", icon: "fab fa-adobe" }
        ],
        gallery: [
            "assets/images/portfolio/Screenshot 2023-06-20 212553.png",
            "assets/images/portfolio/Screenshot 2023-06-20 212624.png",
            "assets/images/portfolio/Screenshot 2023-06-20 212651.png",
            "assets/images/portfolio/Screenshot 2023-06-20 213219.png",
            "assets/images/portfolio/Screenshot 2023-06-20 213541.png",
            "assets/images/portfolio/Screenshot 2023-06-20 213609.png"
        ]
    },
    {
        id: 4,
        title: "Task Management System",
        category: "web",
        client: "WorkSmart Inc.",
        completionDate: "April 2025",
        mainImage: "https://via.placeholder.com/1200x600",
        demoLink: "https://task-system.example.com",
        githubLink: "https://github.com/username/task-management",
        description: "A collaborative task management platform for teams with real-time updates.",
        longDescription: "The Task Management System was designed to streamline workflow and enhance collaboration among distributed teams. Built with Vue.js on the frontend and Express on the backend, this application provides real-time task updates and communication features to ensure team members stay synchronized.\n\nThe platform includes project management tools with customizable workflows, task assignment and tracking, time tracking, file sharing capabilities, and reporting features for project progress analysis. Socket.io was implemented to enable real-time notifications and updates without requiring page refreshes, creating a seamless collaborative environment.\n\nOne significant challenge was designing a flexible permission system that could accommodate various team structures and hierarchies. This was resolved by implementing a role-based access control system with customizable permission sets that could be assigned to different team members based on their responsibilities.",
        features: [
            "Customizable project workflows and boards",
            "Real-time task updates and notifications",
            "Time tracking with reporting",
            "File sharing and document management",
            "Team chat and collaboration tools",
            "Calendar integration and deadline reminders",
            "Advanced filtering and search capabilities",
            "Performance and progress analytics"
        ],
        technologies: [
            { name: "Vue.js", icon: "fab fa-vuejs" },
            { name: "Express", icon: "fab fa-node-js" },
            { name: "Socket.io", icon: "fas fa-plug" },
            { name: "PostgreSQL", icon: "fas fa-database" },
            { name: "Redis", icon: "fas fa-database" },
            { name: "Docker", icon: "fab fa-docker" },
            { name: "AWS", icon: "fab fa-aws" }
        ],
        gallery: [
            "assets/images/portfolio/web-02.png",
            "assets/images/portfolio/web-03.png",
            "assets/images/portfolio/Pro-Web-Dep-01.png",
            "assets/images/portfolio/portfolio-1.jpg",
            "assets/images/portfolio/portfolio-details-1.jpg",
            "assets/images/portfolio/EMS-CDS04.png"
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
