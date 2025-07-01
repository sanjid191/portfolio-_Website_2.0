// Sample article data - In a real application, this would come from a server/database
const articlesData = [
    {
        id: 1,
        title: "Modern Web Development Practices",
        slug: "modern-web-development-practices",
        publishDate: "June 15, 2025",
        author: "Sanjid Ahmmed",
        authorAvatar: "https://via.placeholder.com/150",
        authorBio: "Full Stack Developer & Tech Writer",
        featuredImage: "https://via.placeholder.com/1200x600?text=Modern+Web+Development",
        excerpt: "An exploration of current best practices in modern web development...",
        readTime: "8 min read",
        category: "Web Development",
        tags: ["Web Development", "Best Practices", "Frontend", "Backend"],
        content: `
            <p>Web development has evolved significantly over the past few years, with new frameworks, tools, and methodologies emerging at an unprecedented rate. As developers, it's crucial to stay updated with these best practices to create efficient, maintainable, and scalable web applications.</p>

            <h2>1. Component-Based Architecture</h2>
            <p>Modern web development has embraced component-based architecture, where UIs are broken down into reusable, self-contained pieces. Frameworks like React, Vue, and Angular have popularized this approach, making it easier to manage complex interfaces while promoting code reuse.</p>
            
            <p>Key benefits of component-based architecture include:</p>
            <ul>
                <li>Improved maintainability through isolated components</li>
                <li>Enhanced reusability across projects</li>
                <li>Better team collaboration with clear component ownership</li>
                <li>Simplified testing of individual components</li>
            </ul>

            <h2>2. Static Site Generation and Server-Side Rendering</h2>
            <p>The rise of Jamstack architecture has brought static site generation (SSG) and server-side rendering (SSR) back into the spotlight. Tools like Next.js, Nuxt, and Gatsby combine the best of both worlds: the performance benefits of static sites with the dynamic capabilities of single-page applications.</p>

            <blockquote>
                "The future of web development isn't choosing between static and dynamic—it's finding the right balance between the two for each specific use case."
            </blockquote>

            <p>By pre-rendering pages at build time or on the server, these approaches offer significant performance improvements and better SEO compared to traditional client-side rendering.</p>

            <h2>3. API-First Development</h2>
            <p>Modern web applications are increasingly adopting an API-first approach, where the backend is designed as a collection of services that the frontend consumes. This separation of concerns allows teams to work independently on different parts of the application.</p>

            <p>REST APIs have been the standard for years, but GraphQL has gained significant traction due to its ability to request exactly the data needed and its strong typing system.</p>

            <h3>Benefits of GraphQL:</h3>
            <ul>
                <li>Reduced over-fetching and under-fetching of data</li>
                <li>Strong typing and self-documenting nature</li>
                <li>Single endpoint for all data requirements</li>
                <li>Real-time updates with subscriptions</li>
            </ul>

            <h2>4. Progressive Web Apps (PWAs)</h2>
            <p>Progressive Web Apps bridge the gap between web and native applications, offering offline functionality, push notifications, and app-like experiences. By implementing service workers, manifest files, and adhering to performance best practices, developers can create web applications that provide native-like experiences across devices.</p>

            <p>Key features of PWAs include:</p>
            <ul>
                <li>Offline functionality</li>
                <li>Installation on the home screen</li>
                <li>Push notifications</li>
                <li>Fast load times</li>
                <li>Responsive design for all device sizes</li>
            </ul>

            <h2>5. Performance Optimization</h2>
            <p>Web performance has never been more critical. Users expect fast, responsive experiences, and search engines prioritize performance in their rankings. Modern development practices emphasize techniques like:</p>

            <ul>
                <li>Code splitting and lazy loading</li>
                <li>Tree shaking to eliminate unused code</li>
                <li>Image optimization and next-gen formats</li>
                <li>Efficient caching strategies</li>
                <li>Critical CSS rendering</li>
            </ul>

            <p>Tools like Lighthouse and WebPageTest help developers identify performance bottlenecks and validate improvements.</p>

            <h2>6. Automated Testing and CI/CD</h2>
            <p>Continuous Integration and Continuous Deployment (CI/CD) pipelines have become standard practice in modern web development. By automating testing and deployment processes, teams can deliver changes more frequently and with greater confidence.</p>

            <p>A comprehensive testing strategy typically includes:</p>
            <ul>
                <li>Unit tests for individual functions and components</li>
                <li>Integration tests for API and service interactions</li>
                <li>End-to-end tests for critical user flows</li>
                <li>Visual regression tests to catch UI changes</li>
                <li>Accessibility testing for inclusive experiences</li>
            </ul>

            <h2>Conclusion</h2>
            <p>Modern web development is a continuously evolving landscape. By adopting these best practices—component-based architecture, static site generation, API-first development, progressive web apps, performance optimization, and automated testing—developers can create web applications that are robust, performant, and maintainable.</p>

            <p>As we look to the future, emerging technologies like WebAssembly, Edge Computing, and AI-assisted development promise to further transform how we build for the web. Staying curious and adaptable remains the most valuable skill for any web developer.</p>
        `
    },
    {
        id: 2,
        title: "The Future of UI/UX Design",
        slug: "future-of-ui-ux-design",
        publishDate: "May 28, 2025",
        author: "Sanjid Ahmmed",
        authorAvatar: "https://via.placeholder.com/150",
        authorBio: "Full Stack Developer & UI/UX Enthusiast",
        featuredImage: "https://via.placeholder.com/1200x600?text=UI/UX+Design+Future",
        excerpt: "Examining emerging trends that will shape the future of design...",
        readTime: "10 min read",
        category: "Design",
        tags: ["UI/UX", "Design Trends", "User Experience", "Accessibility"],
        content: `
            <p>The field of UI/UX design is constantly evolving, shaped by technological advancements, changing user expectations, and new design methodologies. As we look toward the future, several emerging trends are set to redefine how we approach digital experiences.</p>

            <h2>1. Immersive Experiences with AR and VR</h2>
            <p>Augmented Reality (AR) and Virtual Reality (VR) are moving beyond gaming and entertainment into practical applications across industries. These technologies are creating new design challenges and opportunities as the line between digital and physical experiences blurs.</p>
            
            <p>Designers must now consider:</p>
            <ul>
                <li>Spatial design and 3D interfaces</li>
                <li>Natural interactions through gestures and voice</li>
                <li>Environmental context for AR overlays</li>
                <li>Preventing motion sickness and disorientation in VR</li>
            </ul>

            <blockquote>
                "The greatest UX challenges no longer live on flat screens, but in the spaces between the digital and physical worlds."
            </blockquote>

            <h2>2. Voice User Interfaces (VUIs)</h2>
            <p>Voice-controlled interfaces continue to grow in popularity through smart speakers, virtual assistants, and mobile devices. This shift from visual to voice interactions requires designers to rethink traditional UI paradigms.</p>

            <p>Effective voice UI design involves:</p>
            <ul>
                <li>Conversation design that feels natural and intuitive</li>
                <li>Accommodating different speech patterns and accents</li>
                <li>Creating memorable voice personas that align with brand identity</li>
                <li>Thoughtful error handling when voice commands are misinterpreted</li>
                <li>Multimodal experiences that combine voice with visual feedback</li>
            </ul>

            <h2>3. Accessibility as a Fundamental Principle</h2>
            <p>Accessibility is increasingly being recognized not as a checkbox item but as a fundamental design principle that improves experiences for all users. The future of UI/UX design will see accessibility considerations integrated from the earliest stages of the design process.</p>

            <p>Key accessibility trends include:</p>
            <ul>
                <li>AI-powered accessibility tools that automatically detect and fix issues</li>
                <li>Adaptive interfaces that adjust to individual user needs</li>
                <li>Greater emphasis on cognitive accessibility for users with different thinking and learning styles</li>
                <li>Inclusive design practices that consider a wider spectrum of human diversity</li>
            </ul>

            <h2>4. AI-Powered Personalization</h2>
            <p>Artificial Intelligence is enabling unprecedented levels of personalization in digital experiences. Rather than designing a single interface for all users, AI allows for dynamically generated experiences tailored to individual preferences, behavior patterns, and needs.</p>

            <p>Examples include:</p>
            <ul>
                <li>Content recommendations based on user behavior</li>
                <li>Interfaces that adapt to usage patterns over time</li>
                <li>Predictive UI elements that anticipate user needs</li>
                <li>Personalized onboarding flows based on user profiles</li>
            </ul>

            <p>However, this trend also raises important questions about data privacy, transparency, and giving users control over their personalized experiences.</p>

            <h2>5. Microinteractions and Animation with Purpose</h2>
            <p>As users become more sophisticated in their digital interactions, subtle details like microinteractions and purposeful animations will play a larger role in creating engaging experiences. These elements add personality to interfaces while providing valuable feedback to users.</p>

            <p>Effective use of motion in UI design:</p>
            <ul>
                <li>Communicates system status and provides feedback</li>
                <li>Guides attention to important elements</li>
                <li>Creates continuity between different states</li>
                <li>Adds personality and emotional connection to digital products</li>
                <li>Enhances the perceived performance of applications</li>
            </ul>

            <h2>6. Designing for Digital Wellbeing</h2>
            <p>With growing awareness of the negative impacts of excessive screen time and digital addiction, designers are increasingly taking responsibility for the psychological effects of their products. The future of UI/UX will balance business goals with genuine concern for users' mental health.</p>

            <p>Digital wellbeing design practices include:</p>
            <ul>
                <li>Usage dashboards that promote awareness of screen time</li>
                <li>Features that encourage breaks and boundaries</li>
                <li>Reduced use of manipulative design patterns that foster addiction</li>
                <li>Calm technology approaches that minimize disruption</li>
                <li>Transparent algorithms that don't exploit psychological vulnerabilities</li>
            </ul>

            <h2>Conclusion</h2>
            <p>The future of UI/UX design will be shaped by technological innovation, greater emphasis on inclusivity, and a more holistic understanding of how digital experiences affect users' lives. Designers who can balance technological capabilities with human needs will create the most meaningful and impactful experiences.</p>

            <p>As these trends develop, the fundamental goal of UI/UX design remains unchanged: to create intuitive, accessible, and delightful experiences that help users achieve their goals with minimal friction. The tools and techniques may evolve, but the human-centered approach to design will continue to be the north star for the discipline.</p>
        `
    },
    {
        id: 3,
        title: "Getting Started with JavaScript Frameworks",
        slug: "getting-started-with-javascript-frameworks",
        publishDate: "April 10, 2025",
        author: "Sanjid Ahmmed",
        authorAvatar: "https://via.placeholder.com/150",
        authorBio: "Full Stack Developer & JavaScript Expert",
        featuredImage: "https://via.placeholder.com/1200x600?text=JavaScript+Frameworks",
        excerpt: "A beginner's guide to popular JavaScript frameworks...",
        readTime: "12 min read",
        category: "JavaScript",
        tags: ["JavaScript", "Frameworks", "React", "Vue", "Angular"],
        content: `
            <p>JavaScript frameworks have revolutionized front-end development by providing organized structures, reusable components, and powerful tools that simplify the creation of dynamic web applications. For beginners, choosing and learning a framework can seem overwhelming. This guide will help you understand the landscape and get started with the most popular options.</p>

            <h2>Why Use a JavaScript Framework?</h2>
            <p>Before diving into specific frameworks, it's important to understand why you might want to use one in the first place:</p>
            
            <ul>
                <li><strong>Efficiency:</strong> Frameworks provide ready-made solutions for common development challenges</li>
                <li><strong>Structure:</strong> They offer architectural patterns that help organize code</li>
                <li><strong>Community:</strong> Popular frameworks have large communities for support and resources</li>
                <li><strong>Tooling:</strong> Frameworks typically come with powerful development tools and ecosystems</li>
                <li><strong>Maintainability:</strong> They promote best practices that make code easier to maintain</li>
            </ul>

            <blockquote>
                "Choose a framework not just for its popularity, but for how well it aligns with your project requirements and your team's expertise."
            </blockquote>

            <h2>Overview of Popular Frameworks</h2>
            <p>Let's examine the three most widely-used JavaScript frameworks in the industry today:</p>

            <h3>React</h3>
            <p>Developed by Facebook, React has become the most popular JavaScript library (often referred to as a framework) for building user interfaces. It's known for its component-based architecture and virtual DOM implementation that optimizes rendering performance.</p>

            <p><strong>Key characteristics:</strong></p>
            <ul>
                <li>Component-based architecture</li>
                <li>Virtual DOM for performance optimization</li>
                <li>JSX syntax that blends HTML and JavaScript</li>
                <li>Unidirectional data flow</li>
                <li>Large ecosystem with many third-party libraries</li>
            </ul>

            <p><strong>Ideal for:</strong> Single-page applications, projects that may scale significantly, teams that prefer flexibility over strict conventions.</p>

            <h3>Vue.js</h3>
            <p>Vue combines the best aspects of React and Angular, offering a progressive framework that can be adopted incrementally. It's praised for its gentle learning curve and excellent documentation.</p>

            <p><strong>Key characteristics:</strong></p>
            <ul>
                <li>Progressive adoption model</li>
                <li>Template-based syntax that's familiar to HTML developers</li>
                <li>Two-way data binding option</li>
                <li>Built-in state management with Vuex</li>
                <li>Clear separation of concerns</li>
            </ul>

            <p><strong>Ideal for:</strong> Teams transitioning from traditional web development, projects that want simplicity and clear conventions, applications that will grow over time.</p>

            <h3>Angular</h3>
            <p>Maintained by Google, Angular is a complete framework with everything included out of the box. It uses TypeScript by default and follows a more opinionated approach to application architecture.</p>

            <p><strong>Key characteristics:</strong></p>
            <ul>
                <li>Full-featured framework with built-in solutions</li>
                <li>TypeScript-first development</li>
                <li>Dependency injection system</li>
                <li>Two-way data binding</li>
                <li>Comprehensive CLI with powerful code generation</li>
            </ul>

            <p><strong>Ideal for:</strong> Enterprise-level applications, teams that prefer comprehensive solutions with clear guidelines, projects that benefit from TypeScript's strong typing.</p>

            <h2>Getting Started: A Step-by-Step Approach</h2>
            <p>Regardless of which framework you choose, here's a structured approach to learning it effectively:</p>

            <h3>1. Master the Fundamentals</h3>
            <p>Before diving into a framework, ensure you have a solid understanding of:</p>
            <ul>
                <li>JavaScript fundamentals (especially ES6+ features)</li>
                <li>HTML and CSS</li>
                <li>DOM manipulation</li>
                <li>Asynchronous programming with Promises and async/await</li>
                <li>Basic terminal/command line usage</li>
            </ul>

            <h3>2. Learn the Core Concepts</h3>
            <p>Each framework has key concepts that you'll need to understand:</p>
            <ul>
                <li><strong>React:</strong> Components, props, state, hooks, JSX</li>
                <li><strong>Vue:</strong> Single-file components, directives, reactivity system, composition API</li>
                <li><strong>Angular:</strong> Modules, components, services, dependency injection, templates, pipes</li>
            </ul>

            <h3>3. Build Small Projects</h3>
            <p>Theory alone isn't enough. Start building small applications to apply what you've learned:</p>
            <ul>
                <li>A to-do list application</li>
                <li>A weather app that uses an API</li>
                <li>A simple e-commerce product page</li>
                <li>A form with validation</li>
            </ul>

            <h3>4. Learn the Ecosystem</h3>
            <p>Once you're comfortable with the core concepts, expand your knowledge to include:</p>
            <ul>
                <li><strong>State management:</strong> Redux (React), Vuex (Vue), NGRX (Angular)</li>
                <li><strong>Routing:</strong> React Router, Vue Router, Angular Router</li>
                <li><strong>Testing:</strong> Jest, React Testing Library, Vue Test Utils, Angular Testing</li>
                <li><strong>Build tools:</strong> Webpack, Vite, Create React App, Vue CLI, Angular CLI</li>
            </ul>

            <h3>5. Join the Community</h3>
            <p>Connect with other developers using the same framework:</p>
            <ul>
                <li>Join framework-specific subreddits and Discord servers</li>
                <li>Attend virtual or local meetups</li>
                <li>Contribute to open-source projects</li>
                <li>Share your learning journey on social media or blogs</li>
            </ul>

            <h2>Conclusion</h2>
            <p>JavaScript frameworks make it easier to build complex web applications, but they come with a learning curve. By understanding the strengths of each framework and following a structured learning approach, you can become proficient in your chosen technology.</p>

            <p>Remember that no framework is objectively "best" – each has its own philosophy and trade-offs. The most important factors in your choice should be your specific project requirements, your team's expertise, and your personal learning preferences.</p>

            <p>As you progress in your journey with JavaScript frameworks, focus on understanding the underlying principles rather than just the syntax. This knowledge will serve you well as frameworks evolve and new ones emerge in this constantly changing landscape.</p>
        `
    }
];

document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme toggle
    initThemeToggle();
    
    // Initialize navigation menu
    initNavigation();
    
    // Get article ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = parseInt(urlParams.get('id'));
    
    if (articleId) {
        // Find the article data
        const article = articlesData.find(a => a.id === articleId);
        
        if (article) {
            displayArticleDetails(article);
            displayRelatedArticles(article);
        } else {
            showArticleNotFound();
        }
    } else {
        showArticleNotFound();
    }
});

function displayArticleDetails(article) {
    // Format the publish date
    const publishDate = article.publishDate;
    
    // Create the HTML content for article details
    const articleContent = `
        <img src="${article.featuredImage}" alt="${article.title}" class="article-banner">
        <div class="article-info-container">
            <div class="article-header">
                <h1 class="article-title">${article.title}</h1>
                
                <div class="article-meta">
                    <div class="meta-item">
                        <i class="fas fa-calendar-alt"></i>
                        <span>${publishDate}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-folder"></i>
                        <span>${article.category}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-clock"></i>
                        <span>${article.readTime}</span>
                    </div>
                </div>
            </div>
            
            <div class="article-body">
                ${article.content}
            </div>
            
            <div class="article-tags">
                ${article.tags.map(tag => `<a href="#" class="article-tag">${tag}</a>`).join('')}
            </div>
            
            <div class="article-share">
                <h4 class="share-title">Share this article</h4>
                <div class="share-buttons">
                    <a href="#" class="share-button facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="share-button twitter"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="share-button linkedin"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#" class="share-button pinterest"><i class="fab fa-pinterest-p"></i></a>
                </div>
            </div>
            
            <div class="article-author">
                <img src="${article.authorAvatar}" alt="${article.author}" class="author-avatar">
                <div class="author-info">
                    <h4>${article.author}</h4>
                    <p>${article.authorBio}</p>
                </div>
            </div>
        </div>
    `;
    
    // Update the page content
    document.getElementById('article-content').innerHTML = articleContent;
    
    // Update the page title
    document.title = `${article.title} | Sanjid Ahmmed Portfolio`;
}

function displayRelatedArticles(currentArticle) {
    // Find related articles (same category, excluding current article)
    const relatedArticles = articlesData
        .filter(a => a.category === currentArticle.category && a.id !== currentArticle.id)
        .slice(0, 3); // Limit to 3 related articles
    
    // If no related articles with same category, get any other articles
    if (relatedArticles.length === 0) {
        articlesData
            .filter(a => a.id !== currentArticle.id)
            .slice(0, 3)
            .forEach(a => relatedArticles.push(a));
    }
    
    // Create HTML for related articles
    const relatedArticlesHTML = relatedArticles.map(article => `
        <div class="article-card">
            <div class="article-img">
                <img src="https://via.placeholder.com/600x350?text=${article.title.replace(/ /g, '+')}" alt="${article.title}">
                <span class="article-date">${article.publishDate}</span>
            </div>
            <div class="article-content">
                <h4 class="article-title">${article.title}</h4>
                <p class="article-excerpt">${article.excerpt}</p>
                <a href="article-detail.html?id=${article.id}" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    `).join('');
    
    // Update the related articles section
    const relatedArticlesSection = document.getElementById('related-articles');
    
    if (relatedArticles.length > 0) {
        relatedArticlesSection.innerHTML = relatedArticlesHTML;
        document.querySelector('.related-articles').style.display = 'block';
    } else {
        document.querySelector('.related-articles').style.display = 'none';
    }
}

function showArticleNotFound() {
    const articleContent = `
        <div class="article-not-found">
            <i class="fas fa-newspaper" style="font-size: 5rem; color: var(--primary-color-dark); margin-bottom: 20px;"></i>
            <h2>Article Not Found</h2>
            <p>Sorry, the article you're looking for doesn't exist or has been removed.</p>
            <a href="index.html#articles" class="project-button primary">
                <i class="fas fa-arrow-left"></i> Back to All Articles
            </a>
        </div>
    `;
    
    document.getElementById('article-content').innerHTML = articleContent;
    document.querySelector('.related-articles').style.display = 'none';
    document.title = "Article Not Found | Sanjid Ahmmed Portfolio";
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
