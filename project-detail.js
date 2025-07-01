// Sample project data - In a real application, this would come from a server/database
const projectsData = [
    {
        id: 1,
        title: "E-commerce Website",
        category: "web",
        client: "RetailCorp Inc.",
        completionDate: "May 2025",
        //mainImage: "https://via.placeholder.com/1200x600",
        mainImage: "assets/images/Up Coming.png",
        demoLink: "https://demo-ecommerce.example.com",
        githubLink: "https://github.com/username/ecommerce-project",
        description: "A comprehensive e-commerce platform built with modern web technologies. This project features a responsive design, user authentication system, product catalog with advanced filtering, shopping cart functionality, payment integration, and an admin dashboard for product and order management.",
        longDescription: "This e-commerce platform was designed to provide a seamless shopping experience across all devices. The project involved extensive planning and research to meet the client's specific requirements. The frontend was developed using React.js with Redux for state management, while the backend API was built using Node.js and Express. MongoDB was chosen as the database for its flexibility in handling product data with varying attributes.\n\nThe application includes multiple user roles (customer, manager, admin) with different permission levels, real-time inventory tracking, wishlist functionality, and integration with popular payment gateways including Stripe and PayPal. A key challenge was optimizing performance for large product catalogs, which was solved by implementing lazy loading, image optimization, and server-side caching.",
        features: [
            "User authentication and profile management",
            "Product catalog with advanced filtering and search",
            "Shopping cart and checkout process",
            "Payment integration with Stripe and PayPal",
            "Order tracking and history",
            "Admin dashboard for product and order management",
            "Responsive design for all devices",
            "Performance optimization for large catalogs"
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
            "assets/images/portfolio/EMS-C04.png",
            "assets/images/portfolio/EMS-C05.png",
            "assets/images/portfolio/EMS-C06.png"
        ]
    },
    {
        id: 2,
        title: "Mobile Fitness App",
        category: "mobile",
        client: "FitLife Technologies",
        completionDate: "March 2025",
        mainImage: "https://via.placeholder.com/1200x600",
        demoLink: "https://fitlife-app.example.com",
        githubLink: "https://github.com/username/fitness-app",
        description: "A fitness tracking application with workout plans and progress monitoring.",
        longDescription: "The Mobile Fitness App was developed to help users achieve their fitness goals by providing personalized workout plans, progress tracking, and nutrition advice. The application was built using React Native to ensure a consistent user experience across both iOS and Android platforms.\n\nThe app includes features such as workout tracking with visual progress charts, custom workout plan creation, calorie counting, integration with popular fitness wearables, and social features to connect with friends for added motivation. Firebase was used for the backend to handle user authentication, real-time data synchronization, and cloud storage for user-generated content like progress photos.\n\nOne of the biggest challenges was ensuring accurate tracking of various workout metrics across different types of exercises, which was solved by developing a comprehensive exercise database with detailed movement patterns and metrics.",
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
            "https://via.placeholder.com/600x400?text=Dashboard",
            "https://via.placeholder.com/600x400?text=Workout+Plan",
            "https://via.placeholder.com/600x400?text=Progress+Charts",
            "https://via.placeholder.com/600x400?text=Nutrition+Tracker",
            "https://via.placeholder.com/600x400?text=Social+Feed",
            "https://via.placeholder.com/600x400?text=Exercise+Library"
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
            "https://via.placeholder.com/600x400?text=Logo+Design",
            "https://via.placeholder.com/600x400?text=Color+Palette",
            "https://via.placeholder.com/600x400?text=Typography",
            "https://via.placeholder.com/600x400?text=Business+Cards",
            "https://via.placeholder.com/600x400?text=Brand+Guidelines",
            "https://via.placeholder.com/600x400?text=Application+Mockups"
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
            "https://via.placeholder.com/600x400?text=Dashboard",
            "https://via.placeholder.com/600x400?text=Task+Board",
            "https://via.placeholder.com/600x400?text=Calendar+View",
            "https://via.placeholder.com/600x400?text=Reporting",
            "https://via.placeholder.com/600x400?text=Team+Chat",
            "https://via.placeholder.com/600x400?text=Mobile+Interface"
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
                    ${project.gallery.map(image => `
                        <div class="gallery-item">
                            <img src="${image}" alt="Project Screenshot" class="gallery-image">
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
