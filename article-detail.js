// Sample article data - In a real application, this would come from a server/database
const articlesData = [
    {
        id: 1,
        title: "Let's Talk About Computer Science and Engineering (CSE)",
        slug: "computer-science-and-engineering-cse-guide",
        publishDate: "September 23, 2023",
        author: "Sanjid Ahmmed",
        authorAvatar: "assets/images/SA001.jpg",
        authorBio: "Full Stack Developer & Tech Writer",
        featuredImage: "assets/images/Articles/CSE01.jpeg",
        excerpt: "A comprehensive guide for CSE students covering what to learn before admission, freelancing opportunities, the importance of skills vs CGPA, and a 4-year step-by-step roadmap...",
        readTime: "12 min read",
        category: "Computer Science",
        tags: ["CSE", "Career Guide", "Programming", "Roadmap", "Education"],
        content: `
            <p>কম্পিউটার সাইন্স এবং ইঞ্জিনিয়ারিং Computer Science and Engineering (CSE) নিয়ে কথা বলব আজকে | আজকে আলোচনা করবো CSE তে ভর্তি হওয়ার আগে কি শিখবো ? কি ধরনের ফ্রিল্যান্সিং করব ? কেন সবাই জব পাচ্ছেনা, সিজিপিএ ম্যাটার করে নাকি স্কিলস ?কিভাবে জবের জন্য নিজেকে তৈরি করব ? অনলাইন কোর্স, ফ্রী বুক সহ 4 বছরের স্টেপ বাই স্টেপ CSE ম্যাজিক Roadmap বলে দিব |</p>

                <h2>What is CSE?</h2>
    <p>CSE বা কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং এটি কম্পিউটার সাইন্সের একটি বিশেষায়িত শাখা যেখানে কম্পিউটার সায়েন্স এবং সফটওয়্যার ইঞ্জিনিয়ারিং একসাথে করা হয় | অর্থাৎ এখানে যেরকম কম্পিউটার সায়েন্স এর যে প্রিন্সিপাল গুলো সেগুলো আপনাকে শেখানো হবে তার সাথে সাথে কিভাবে সফটওয়্যার ডেভেলপমেন্ট এবং রিলেটেড কাজগুলো করতে হয় সেটা আপনাকে শেখানো হবে | আর এটা বুঝতে পারছেন যেহেতু দুইটা ফিল্ডকে একসাথে করা হচ্ছে তাহলে চাপ আপনাকে দ্বিগুণ নিতে হবে | এ ধরনের বিশেষত শাখা থেকে পড়ার একটা সুবিধা হচ্ছে যখন আপনি এখান থেকে পাস করবেন তখন যেমন কম্পিউটার সাইন্সের যেকোনো স্পেশালাইজেশন ফিল্ড মুভ করতে পারবেন আবার সফটওয়্যার রিলেটেড ডিগ্রী থাকার কারণে যারা সফটওয়্যার কাজ করে এমন কোম্পানিতে জব পাওয়া অনেক সুবিধা হবে |</p>

    <h2>The Current Challenge</h2>
    <p>এখন সমস্যা হচ্ছে যে আপনার পাবলিক, প্রাইভেট এবং বিভিন্ন জায়গার অলিতে-গলিতে এত ইউনিভার্সিটি হয়েছে সবাই CSE ডিপার্টমেন্ট খুলে বসে আছে | এবং আমাদের দেশের বেশিরভাগ ছাত্র ছাত্রী কোন ধারণা ছাড়াই , কোন ব্যাকগ্রাউন্ড ছাড়াই ডিপার্টমেন্ট গুলোতে ভর্তি হচ্ছে | তারা বেশিরভাগই কম্পিউটার সাইন্সের কোন প্যাশন রাখেনা , এখানে কেন পড়তে আসছে তারা তাও জানে না | এবং ফলাফল টা খুব মারাত্মক, কোম্পানিগুলো একদিকে যেমন অনেক বেশি গ্রাজুয়েট চাকরি পরীক্ষার্থী হওয়ার কারণে স্যালারির ব্যাপারটা খুব একটা মাথায় রাখছে না, গাধার মত করে সবাইকে খাটাচ্ছে অন্যদিকে চার বছরে নিজের একাডেমিক এবং স্কিল দুইটা ভাল করে মেন্টেন না করার কারণে স্টুডেন্টরা ভাল Job পাচ্ছেনা | সর্বশেষে সবচেয়ে বড় যে Problem সেটা হচ্ছে যে ফ্রিল্যান্সিং | কোন ছাগল একথাটা বলছে যে ফ্রিল্যান্সিং করার জন্য CSE ডিগ্রী প্রয়োজন হয় ? আপনি আপনার Skills প্র্যাকটিস করার জন্য ফ্রিল্যান্সিং করতেছেন এটা আলাদা ধরনের কথা, কিন্তু একজন ইঞ্জিনিয়ার এবং একজন ফ্রিল্যান্সারের মধ্যে অনেক পার্থক্য রয়েছে এই ব্যাপারটা আপনাদের বুঝতে হবে |</p>

    <h2>কেন CSE পড়া উচিত?</h2>
    <p>আমার মাঝে মাঝে মনে হয় যে কম্পিউটারের প্রতি প্যাশন আছে এরকম স্টুডেন্টদের অবশ্যই CSE পড়া উচিত | যারা সফটওয়্যার রিলেটেড কাজ শিখতে চান আবার কম্পিউটার সাইন্সে অন্য ফিল্ডগুলো explore করতে চান তাদের জন্য এই শাখাটি একবারে রিস্ক ফ্রী, তবে হ্যাঁ আপনাকে কাজ শিখতে হবে শুধু সার্টিফিকেট অথবা CGPA উপর ডিপেন্ড করে আপনি অনেক দূর যেতে পারবেন না |</p>

    <h2>ডিগ্রী নাকি Skills ডেভলপ করতে হবে ?</h2>
    <p>বর্তমান বাজারে ডিগ্রিধারীর কিন্তু অভাব নাই এটাই সবচেয়ে বড় অসুবিধা হয়ে গেছে | জবের জন্য বর্তমানে কোম্পানিগুলো যেমন সিজিপিএ চাচ্ছে তার সাথে সাথে তারা এটাও চাচ্ছে তারা যে Noob হায়ার করবে তার কিছুটা হলেও প্রফেশনাল স্কিল থাকে যেটা জন্য তাদের তার পিছনে বেশি সময় নষ্ট না করতে হয় ট্রেনিং জন্য | তাই ডিগ্রির সাথে সাথে স্কিল ডেভেলপ করেন না হলে পরে পস্তাতে হবে |</p>

    <h2>Top Freelancing works For Skills and Money for CSE Students</h2>
    <p>CSE শিক্ষার্থী হিসেবে কিছুতো ফ্রিল্যান্সিং কাজ আপনাদের শেখা উচিত | এর মধ্যে অনেকগুলো ফিল্ড সম্পর্কে আমি বিস্তারিত পোস্ট আমার পেজে করেছি এবং অনেকগুলো সম্পর্কে ভবিষ্যতে পোস্ট আমি আবার করব আপনারা পড়ে যেতে পারেন |</p>
    <ul>
        <li>Web Development</li>
        <li>Mobile App Development</li>
        <li>Software Development</li>
        <li>Data Analysis and Visualization</li>
        <li>Database Management</li>
        <li>Cybersecurity Consulting</li>
        <li>Cloud Computing</li>
        <li>IT Support and Troubleshooting</li>
        <li>UX/UI Design</li>
        <li>Technical Writing</li>
    </ul>

    <h2>CSE তে ভর্তি হওয়ার আগে কি শিখবো ?</h2>
    <p>সফটওয়্যার ইঞ্জিনিয়ার এবং সফটওয়্যার ডেভলপার এই দুটো শব্দ একসাথে অনেক সময় ব্যবহার করা হয় কিন্তু এগুলোর মধ্যে কিছু পার্থক্য আছে |</p>
    
    <h3>Basic Computer:</h3>
    <p>কম্পিউটার অনেকগুলো Basic রয়েছে সেগুলো শিখে নেবেন তার সাথে MS Office Apps কিভাবে কাজ করতে হয় সেটাও শিখে নেবেন |</p>
    
    <h3>Math:</h3>
    <p>Algebra, calculus, probability, and discrete mathematics শিখে নিতে পারেন ভার্সিটিতে পড়ার আগে হয়তোবা এরকম ধরনের সাবজেক্ট আপনাদের থেকে থাকতে পারে |</p>

    <h2>4 বছরের স্টেপ বাই স্টেপ CSE ম্যাজিক Roadmap</h2>
    
    <h3>⚡Year 1:</h3>
    <ol>
        <li>প্রোগ্রামিং ফান্ডামেন্টালস: ভেরিয়েবল, ডাটা টাইপ, কন্ট্রোল ফ্লো এবং ফাংশন সহ প্রোগ্রামিং এর মূল বিষয়গুলি শিখতে পাইথন বা C মত একটি প্রোগ্রামিং ভাষা দিয়ে শুরু করুন। এ বিষয় নিয়ে বিস্তারিত পোস্ট করেছি |</li>
        <li>ডেটা স্ট্রাকচার: arrays, linked lists, stacks, queues, and trees মতো মৌলিক ডেটা স্ট্রাকচার অধ্যয়ন করুন। তাদের operations, implementations, and time complexities বোঝার চেষ্টা করেন এবং প্রবলেম সলভিং এর উপর ফোকাস দিন | এ বিষয় নিয়ে বিস্তারিত পোস্ট করেছি |</li>
        <li>অ্যালগরিদম: searching, sorting, and graph traversal algorithms মতো প্রয়োজনীয় অ্যালগরিদমগুলি শিখুন ৷ এ বিষয় নিয়ে বিস্তারিত পোস্ট করেছি |</li>
        <li>Discrete Mathematics : logic, set theory, relations, and combinatorics সহ কম্পিউটার বিজ্ঞানের সাথে প্রাসঙ্গিক গাণিতিক ভিত্তিগুলি শিখুন।</li>
        <li>ওয়েব ডেভেলপমেন্ট বেসিকস: সহজ ওয়েব পেজ তৈরি করতে ফ্রন্ট এন্ড টেকনোলজি এবং Backend সম্পর্কে শিখুন আমি এ বিষয় নিয়ে বিস্তারিত পোস্ট করেছি |</li>
    </ol>

    <h3>⚡Year 2:</h3>
    <ol>
        <li>অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং: অবজেক্ট-ওরিয়েন্টেড ধারণা, encapsulation, inheritance, and polymorphism সম্পর্কে আপনার বোঝার গভীরতা বাড়ান। জাভা বা C++ এর মতো প্রোগ্রামিং ভাষায় এগুলি প্রয়োগ করুন।</li>
        <li>ডাটাবেস সিস্টেম: relational databases, SQL queries, and database design principles বিষয়গুলি শিখুন。</li>
        <li>অপারেটিং সিস্টেম:processes, threads, memory management, and file systems সহ অপারেটিং সিস্টেমের বিষয়গুলি বুঝুন。</li>
        <li>কম্পিউটার নেটওয়ার্ক: network protocols, IP addressing, routing, and network security সহ কম্পিউটার নেটওয়ার্কের বিষয়গুলি বুঝুন。</li>
        <li>Software Engineering: software development lifecycle, version control systems, software testing, বিষয়গুলি শিখুন |</li>
    </ol>

    <h3>⚡Year 3:</h3>
    <ol>
        <li>Advanced Data Structures: হ্যাশ টেবিল, গ্রাফ, হিপস এবং এভিএল এবং বি-ট্রির মতো অ্যাডভান্সড ট্রি স্ট্রাকচারের মতো ডেটা স্ট্রাকচারে বিষয়গুলি শিখুন。</li>
        <li>Algorithms and Complexity: dynamic programming, greedy algorithms, and network flow algorithms অ্যালগরিদমের মতো অ্যালগরিদমগুলি অধ্যয়ন করুন ৷ time and space complexity বিষয়গুলি শিখুন。</li>
        <li>ডেটাবেস এবং বিগ ডেটা: উন্নত ডেটাবেস ধারণা, NoSQL ডেটাবেস, ডেটা মডেলিং এবং বড় আকারের ডেটা প্রক্রিয়াকরণ সম্পর্কে জানুন。</li>
        <li>মেশিন লার্নিং এবং কৃত্রিম বুদ্ধিমত্তা: মেশিন লার্নিং অ্যালগরিদম, ডেটা প্রিপ্রসেসিং, মডেল মূল্যায়ন, এবং AI এর মূল বিষয়গুলি Research ধারণা অর্জন করুন。</li>
        <li>কম্পিউটার আর্কিটেকচার: প্রসেসর ডিজাইন, মেমরি হায়ারার্কি এবং ইনপুট/আউটপুট সিস্টেম সহ কম্পিউটারের অভ্যন্তরীণ কাজগুলি বুঝুন。</li>
    </ol>

    <h3>⚡Year 4:</h3>
    <ol>
        <li>Specialization and Electives: ইলেকটিভ বেছে নিন এবং সাইবার সিকিউরিটি, ক্লাউড কম্পিউটিং, ডেটা সায়েন্স, ন্যাচারাল ল্যাঙ্গুয়েজ প্রসেসিং বা রোবোটিক্সের মতো ক্ষেত্রগুলিতে বিশেষজ্ঞ হন。</li>
        <li>Capstone Project: আপনার জ্ঞান প্রয়োগ করতে, আপনার দক্ষতা প্রদর্শন করতে এবং বাস্তব-বিশ্বের সমস্যা সমাধানের কিছু রিয়েল লাইফ প্রজেক্ট করুন。</li>
        <li>ইন্টার্নশিপ : বাস্তব-বিশ্বের প্রকল্পগুলিতে বাস্তব এক্সপোজার এবং কাজ করার জন্য ইন্টার্নশিপ সন্ধান করুন。</li>
        <li>Research or Advanced Studies: গবেষণায় আগ্রহী হলে, গবেষণা প্রকল্পে কাজ করা, publishing papers বা কোনো বিশেষ ক্ষেত্রে স্নাতকোত্তর ডিগ্রি নেওয়ার কথা বিবেচনা করুন。</li>
        <li>Professional Development: communication, teamwork, and leadership মতো দক্ষতার বিকাশের পাশাপাশি industry trends সাথে আপডেট থাকা দিকে মনোনিবেশ করুন。</li>
    </ol>

    <h2>CSE শেখার জন্য বিনামূল্যে অনলাইন কোর্স</h2>
    <ol>
        <li>Introduction to Computer Science and Programming Using Python (MIT OpenCourseWare)</li>
        <li>CS50's Introduction to Computer Science (Harvard University)</li>
        <li>Introduction to Computer Science and Programming (Khan Academy)</li>
        <li>Algorithms, Part I (Princeton University - Coursera)</li>
        <li>Introduction to Artificial Intelligence (Stanford University - Coursera)</li>
        <li>Database Systems Concepts and Design (Stanford University - Lagunita)</li>
        <li>Introduction to Computer Networking (Stanford University - Lagunita)</li>
    </ol>

    <h2>Final Thoughts</h2>
    <p>একটা জিনিশ সবসময় মাথায় রাখবেন যে সময় ইনভেস্টমেন্ট না করলে আপনি কখনও ওই জিনিসে ভালো কিছু পাবেন না আপনি যখনি কম সময়ের মধ্যে অনেক বড় কিছু জিনিস পাবেন অথবা পেতে যাবেন সেটা আপনার কাছে থাকবে না | ভালো কিছু পেতে চাইলে আপনাকে ইনভেস্টমেন্ট করতে হবে সেটা হোক সময় অথবা টাকা |</p>

    <p><em>Post Copied from Naem Azam Chowdhury.<br>
    Original Post Link : Facebook Page</em></p> 
    
    `
    },
    {
        id: 2,
        title: "All About Software Engineering",
        slug: "software-engineering-complete-guide",
        publishDate: "September 23, 2023",
        author: "Sanjid Ahmmed",
        authorAvatar: "assets/images/SA001.jpg",
        authorBio: "Full Stack Developer & Tech Writer",
        featuredImage: "assets/images/Articles/SWE01.jpg",
        excerpt: "A comprehensive guide to software engineering covering career paths, differences between engineers and developers, required skills, and a 4-year step-by-step roadmap...",
        readTime: "15 min read",
        category: "Software Engineering",
        tags: ["Software Engineering", "Career Guide", "Programming", "Roadmap", "Development"],
        content: `

            <p>আজকে আমরা কথা বলবো সফটওয়্যার ইঞ্জিনিয়ারিং (software engineering ) নিয়ে | এই পোস্টে আপনাদের যাবতীয় প্রশ্নের উত্তর এবং চার বছরে স্টেপ বাই স্টেপ ম্যাজিক রোডম্যাপ সহ দেওয়া থাকবে |</p>

                <p>কম্পিউটার সায়েন্সে মেজর ফিল্ড গুলো নিয়ে ধারাবাহিকভাবে করা আমার প্রথম পোস্টে আমি কম্পিউটার সায়েন্স (CS) কে মেজর হিসেবে পড়াশোনা করার পুরো রোড ম্যাপ দিয়ে দিয়েছি পরের যে পোস্ট সেখানে আমি কম্পিউটার সায়েন্সের বিশেষায়িত শাখা কম্পিউটার সায়েন্স এন্ড ইঞ্জিনিয়ারিং (CSE) সেটার উপরেও আমি ডিটেইলস ভাবে রোড ম্যাপ সহ পোস্ট করেছি | আপনারা চাইলে সেগুলা page থেকে পড়ে নিতে পারেন | আজ কম্পিউটার সায়েন্সে আরেকটি বিশেষায়িত শাখা সফটওয়্যার ইঞ্জিনিয়ারিং (SWE) নিয়ে আমি কথা বলব |</p>

    <p>আজকের আলোচনায় থাকবে:</p>
    <ul>
        <li>software engineering কি</li>
        <li>সফটওয়্যার ইঞ্জিনিয়ার ফিল্ড গুলো কি কি ?</li>
        <li>সফটওয়্যার ইンジিনিয়ার নাকি সফটওয়্যার ডেভলপার পার্থক্য কি ?</li>
        <li>ম্যাথ শিখতে হবে ?</li>
        <li>রিমোট জবস or ফুল-টাইম or Freelancing ?</li>
        <li>ভালো কিছু Free কোর্স, and চার বছরে স্টেপ-বাই-স্টেপ পারফেক্ট SWE Roadmap</li>
    </ul>

    <h2>সফটওয়্যার ইঞ্জিনিয়ারিং কি?</h2>
    <p>সফটওয়্যার ইঞ্জিনিয়ারিং কম্পিউটার সায়েন্স একটি বিশেষায়িত শাখা যেখানে আসলে কম্পিউটার সফটওয়্যার কিভাবে design, development, testing, and maintenance করতে হয় সে বিষয়ে শেখানো এবং পড়ানো হয় | আমরা জানি যে প্রতিনিয়ত কম্পিউটার সফটওয়্যার পরিমাণ বাড়তেছে তো এটাই শাখাটি মূলত কম্পিউটারের সফটওয়্যার তৈরি করার উপরে যতগুলো ইঞ্জিনিয়ারিং পারপাস আছে যেমন engineering principles, techniques, and methods to analyze, design, and implement software solutions এসব শেখানো হয় | এছাড়া কিভাবে ক্লায়েন্ট, ইউজার এবং স্ট্রোক হোল্ডারদের সাথে একসাথে কাজ করতে হয় সে বিষয় নিয়েও কিন্তু সফটওয়্যার ইঞ্জিনিয়ারিং শেখানো হয় |</p>

    <h2>সফটওয়্যার ইঞ্জিনিয়ার ফিল্ড গুলো কি কি?</h2>
    <p>কম্পিউটার সায়েন্সের সফটওয়্যার ইঞ্জিনিয়ারিং এর ডিমান্ড অনেক বেশি IT Field প্রতিটিতে সফটওয়্যার ইঞ্জিনিয়ারের প্রয়োজন হয় |</p>
    
    <ul>
        <li>Information Technology (IT)</li>
        <li>Web Development</li>
        <li>Mobile App Development</li>
        <li>Data Science and Analytics</li>
        <li>Artificial Intelligence and Machine Learning</li>
        <li>Cybersecurity</li>
        <li>Game Development</li>
        <li>Embedded Systems</li>
        <li>Finance and Banking</li>
        <li>Consulting and Freelancing</li>
    </ul>

    <h2>সফটওয়্যার ইঞ্জিনিয়ার নাকি সফটওয়্যার ডেভলপার ?</h2>
    <p>সফটওয়্যার ইঞ্জিনিয়ার এবং সফটওয়্যার ডেভলপার এই দুটো শব্দ একসাথে অনেক সময় ব্যবহার করা হয় কিন্তু এগুলোর মধ্যে কিছু পার্থক্য আছে |</p>

    <h3>Scope of Work:</h3>
    <p>সফটওয়্যার ইঞ্জিনিয়াররা মূলত একটা সিস্টেম ডিজাইন আর্কিটেকচার এবং প্রজেক্ট ম্যানেজমেন্ট এর উপরে ফোকাস দেয় অন্যদিকে যারা সফটওয়্যার ডেভলপার তারা মূলত প্রোগ্রামিং এবং কোডিং এর উপরে ফোকাস দেয় | সোজা বাংলা কথায় সফটওয়্যার ইঞ্জিনিয়ার একটা সফটওয়্যার কিভাবে বানাতে হবে সেটার পুরো আর্কিটেকচার এবং সিস্টেম ডিজাইন দিয়ে দেয় কিন্তু সেটাকে বানানোর দায়িত্ব হচ্ছে সফটওয়্যার ডেভলপারদের |</p>

    <h3>Skills:</h3>
    <p>একজন সফটওয়্যার ইঞ্জিনিয়ার কে অনেক বিষয়ে পারদর্শী হতে হয় যার মধ্যে কেবল প্রোগ্রামিংই নয় বরং সফ্টওয়্যার ডিজাইনের নীতি, অ্যালগরিদম, ডেটা স্ট্রাকচার, CP এবং সফ্টওয়্যার ইঞ্জিনিয়ারিং পদ্ধতির জ্ঞানও অন্তর্ভুক্ত থাকে। অন্য থেকে একজন সফটওয়্যার ডেভেলপার প্রোগ্রামিং কোডিং এবং নতুন ফ্রেমওয়ার্ক এবং Update স্টাকের উপরে তাদের ধারণা থাকতে হয় |</p>

    <h3>Roles and Responsibilities:</h3>
    <p>একজন সফটওয়্যার ইঞ্জিনিয়ার হাই লেভেল টাস্কের সাথে জড়িত থাকে যেমন requirements analysis, system architecture, project planning, এবং স্টেকহোল্ডারদের সাথে সহযোগিতা | অন্যদিকে একজন সফটওয়্যার ডেভেলপার মূলত কোড রাইটিং ডিবাগিং এবং ফাংশনাল টির ব্যাপারগুলো নিয়ে কাজ করেন |</p>

    <p>তো পার্থক্যগুলোর মধ্যে আপনি অবশ্যই বুঝতে পেরেছেন যে এখন একজন সফটওয়্যার ইঞ্জিনিয়ার মূলত একজন ইঞ্জিনিয়ার কিন্তু তাকে অনেকগুলো বিষয়ে পারদর্শী হতে হবে অন্যদিকে একজন সফটওয়্যার ডেভলপার একজন ডেভলপার যিনি মূলত একজন সফটওয়্যার ইঞ্জিনিয়ার এর দ্বারা ডিজাইন করা কোন সফটওয়্যারের উপরে কাজ করে ওই সফটওয়্যারটা বানিয়ে দেন | তো আপনারা যারা মনে করেন যে দুই-চারটা প্রজেক্ট বানাইলে দুই লাইন কোডিং করলে আর দু চারটা প্রবলেম সলভিং করলে আপনি সফটওয়্যার ইঞ্জিনিয়ার হয়ে যাবেন এটা এমন নয় সফটওয়্যার ইঞ্জিনিয়ারিং ইজ নট এ জোক ! আপনাকে একদিকে যেমন একজন সফটওয়্যার ডেভেলপার এর পুরো স্কিল সেটটা আপনাকে শিখতে হবে অন্যদিকে আপনাকে টিমওয়ার্ক, রিসার্চ এবং CGPA বিষয় গুলোর উপরও কাজ করতে হবে |</p>

    <h2>ম্যাথ শিখতে হবে ?</h2>
    <p>অবশ্যই ম্যাথমেটিক্স লাগবে এটা কম্পিউটার সায়েন্সের প্রতিটা সেক্টরে লাগে বাট অতটা ভয় পাওয়ার কিছু নেই আপনাদের ভার্সিটিতে যে কোন ম্যাথ গুলা দিবে সেগুলো একটু ভালো করে শেখার চেষ্টা করুন ইউটিউব বা কোন সোর্স থেকে তাইলে হয়ে যাবে সমস্যা নেই এতটাও ভয় পাওয়ার কিছু নেই |</p>

    <h2>রিমোট জবস or ফুল-টাইম or Freelancing ?</h2>
    <p>আমার মত Lazy মানুষদের রিমোট জব খুবই পছন্দ | বাসায় থাকব পুরো সেটআপ করা থাকবে সেখানে কাজ করবো আমার এটা বেশি ভালো লাগে | স্বাধীনতার কথা চিন্তা করলে ফ্রিল্যান্সিং কিন্তু খারাপ না বড় কিছু কোম্পানির সাথে আছে সফটওয়্যার ইঞ্জিনিয়ার হিসেবে কাজ করতে পারেন তাহলে তারা কিন্তু একটা ভালো মাপের টাকা আপনাকে পরিশোধ করবে |</p>

    <h2>স্টেপ বাই স্টেপ সফটওয়্যার ইঞ্জিনিয়ারিং এর 4 বছরের ম্যাজিক রোড ম্যাপ</h2>
    <p>এখানে আমি যে রোড ম্যাপ টা দেবো এটা আপনার ফলো করলে মোটামুটি আপনারা ভালো সফটওয়্যার ইঞ্জিনিয়ার হতে পারবেন আমি আশা করি কিন্তু কথা হলো যে আপনাদের ইউনiversিটি কারিকুলাম কোর্স এগুলো ইম্পর্টেন্ট সো ওগুলো ফলো করলে আপনি আরো বেশি উপকৃত হবেন | তবে একটা জিনিস মনে রাখবেন ইউনিভার্সিটি আপনাকে থিওরিটিকাল জিনিসের উপর বেশি ফোকাস দেওয়া হবে কিন্তু কোম্পানি বা জব সেক্টর আপনার কাছে প্র্যাকটিক্যাল skills এবং এক্সপেরিয়েন্স জিনিসগুলো বেশি ডিমান্ড করে</p>

    <h3>⚡Year 1:</h3>
    <ol>
        <li>Learn the fundamentals of programming: C, পাইথন বা জাভার মত একটি প্রোগ্রামিং ভাষা শেখার মাধ্যমে শুরু করুন। বেসিক সিনট্যাক্স, ডাটা টাইপ, কন্ট্রোল স্ট্রাকচার এবং অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং কনসেপ্ট বুঝুন। এ ব্যাপারে ডিটেইলস পোস্ট আমার পেজে করেছি</li>
        <li>Introduction to data structures and algorithms: arrays, linked lists, stacks, queues, trees, and graphs মতো মৌলিক কনসেপ্ট বুঝুন। এ ব্যাপারে ডিটেইলস পোস্ট আমার পেজে করেছি</li>
        <li>Web development: সহজ ওয়েব অ্যাপ্লিকেশন তৈরি করতে HTML, CSS এবং JavaScript এর সাথে পরিচিতি লাভ করুন। এ ব্যাপারে ডিটেইলস পোস্ট আমার পেজে করেছি</li>
        <li>Practice coding: Problem solving দক্ষতা উন্নত করতে LeetCode বা HackerRank-এর মতো প্ল্যাটফর্মে প্রোগ্রামিং চ্যালেঞ্জগুলি সমাধান করুন। এ ব্যাপারে ডিটেইলস পোস্ট আমার পেজে করেছি</li>
        <li>Software development methodologies: agile development practices, version control systems (e.g., Git), and collaboration tools (e.g., GitHub). সম্পর্কে জানুন।</li>
    </ol>

    <h3>⚡Year 2:</h3>
    <ol>
        <li>Deepen programming knowledge: advanced data structures, memory management, and concurrency সহ আপনার নির্বাচিত প্রোগ্রামিং ভাষায় উন্নত বিষয়গুলি সম্পর্কে জানুন।</li>
        <li>Databases: রিলেশনাল ডাটাবেস এবং এসকিউএল সম্পর্কে জানুন।</li>
        <li>Software engineering principles: সফ্টওয়্যার ডিজাইনের design principles, architectural patterns, and code quality practices সম্পর্কে জানুন । software testing and debugging techniques সম্পর্কে জানুন।</li>
        <li>Build projects: small-scale software projects ডেভলপ করুন। ব্যক্তিগত projects কাজ করুন বা বাস্তব অভিজ্ঞতা অর্জনের জন্য ওপেন সোর্স projectsগুলিতে অবদান রাখুন。</li>
        <li>Networking and system administration: নেটওয়ার্কিং ধারণা, অপারেটিং সিস্টেম এবং সিস্টেম অ্যাডমিনিস্ট্রেশনের কাজগুলির সম্পর্কে জানুন।</li>
    </ol>

    <h3>⚡Year 3:</h3>
    <ol>
        <li>Advanced topics: আপনার আগ্রহের উপর ভিত্তি করে machine learning, artificial intelligence, computer graphics, or natural language processing মতো বিশেষ ক্ষেত্রগুলিতে সম্পর্কে জানুন।</li>
        <li>Backend development: সার্ভার-সাইড প্রোগ্রামিং, ওয়েব ফ্রেমওয়ার্ক (যেমন, Django, Ruby on Rails), RESTful API, এবং ক্লাউড প্ল্যাটফর্ম (যেমন, AWS, Azure) সম্পর্কে জানুন। এ ব্যাপারে ডিটেইলস পোস্ট আমার পেজে করেছি</li>
        <li>Software development lifecycle: requirements gathering, system design, project management, and software deployment সহ সম্পূর্ণ সফ্টওয়্যার development সম্পর্কে জানুন。</li>
        <li>Security: সফ্টওয়্যার নিরাপত্তা নীতি সম্পর্কে জানুন৷</li>
        <li>Internships and industry exposure: বাস্তব-বিশ্বের অভিজ্ঞতা অর্জন করতে এবং শিল্প অনুশীলনগুলি বুঝতে ইন্টার্নশিপ সন্ধান করুন।</li>
    </ol>

    <h3>⚡Year 4:</h3>
    <ol>
        <li>Specializations: আপনার আগ্রহ এবং কর্মজীবনের লক্ষ্যগুলির উপর ভিত্তি করে একটি Specializations: চয়ন করুন। এটি একটি নির্দিষ্ট technology stack উপর ফোকাস করা যেতে পারে (যেমন, মোবাইল অ্যাপ ডেভেলপমেন্ট, ডেটা ইঞ্জিনিয়ারিং) বা domain-specific knowledge (যেমন, অর্থ, স্বাস্থ্যসেবা)। এ ব্যাপারে ডিটেইলস পোস্ট আমার পেজে করেছি</li>
        <li>Large-scale systems: challenges of building and scaling large-scale distributed systems সম্পর্কে জানুন । ক্লাউড কম্পিউটিং, কন্টেইনারাইজেশন এবং মাইক্রোসার্ভিসেস আর্কিটেকচার সম্পর্কে জানুন。</li>
        <li>Professional development: আপনার সফট স্কিল বাড়ান, যেমন যোগাযোগ, টিমওয়ার্ক এবং প্রজেক্ট ম্যানেজমেন্ট। এবং সার্টিফিকেশন পাওয়ার চেষ্টা করুন।</li>
        <li>Final-year project: একটি উল্লেখযোগ্য সফ্টওয়্যার ইঞ্জিনিয়ারিং Final-year project গ্রহণ করুন যা আপনার দক্ষতা এবং জ্ঞান প্রদর্শন করে। চাকরির সুযোগ খোঁজার সময় এই প্রকল্পটি একটি পোর্টফোলিও অংশ হিসেবে কাজ করতে পারে।</li>
        <li>Job search and networking: এন্ট্রি-লেভেল সফটওয়্যার ইঞ্জিনিয়ারিং পদের জন্য আবেদন করা শুরু করুন। job fairs, network with professionals এবং কাজের সুযোগের জন্য LinkedIn-এর মতো অনলাইন প্ল্যাটফর্মের সুবিধা নিন।</li>
    </ol>

    <h2>সফটওয়্যার ইঞ্জিনিয়ারিং এর জন্য ভালো কিছু Free কোর্স</h2>
    <p>কোর্স গুলার লিংক আপনারা আমার কমিউনিটি গ্রুপে পেয়ে যাবেন |</p>
    <ol>
        <li>"Introduction to Computer Science and Programming Using Python" on edX (offered by MIT)</li>
        <li>"CS50's Introduction to Computer Science" on edX (offered by Harvard University)</li>
        <li>"The Complete Web Developer Course" on Udemy (by Codestars)</li>
        <li>"Web Development" on MDN Web Docs (Mozilla Developer Network)</li>
        <li>"Machine Learning" on Coursera (offered by Stanford University)</li>
        <li>"Introduction to Artificial Intelligence" on Udacity</li>
        <li>"Introduction to Cybersecurity" on Coursera (offered by New York University)</li>
        <li>"Introduction to Game Development" on Unity Learn</li>
        <li>"SQL for Data Science" on Khan Academy</li>
        <li>"Introduction to Embedded Systems Software and Development Environments" on edX (offered by UT Austin)</li>
    </ol>

    <h2>Final Thoughts</h2>
    <p>সফটওয়্যার ইঞ্জিনিয়ারিং এর ডিমান্ড অনেক বাড়তেছে তো আমার মনে হয় যদি আপনি এই ফিল্ডে আসতে চান, পড়াশোনা করতে চান, সার্টিফিকেট নিতে চান তাহলে Skills এবং Academic দুইটা ব্যালেন্স করে আপনাকে চলতে হবে | আমি সব সময় সময় ইনভেস্টে বিশ্বাসী যদি আপনি সময় ইনভেস্টমেন্ট না করেন তাহলে আপনি অবশ্যই ভালো কিছু করতে পারবেন না | আর একটা কথা ইঞ্জিনিয়ার স্টুডেন্ট হয়ে একজন ফ্রিল্যান্সারের মতো Mindset ডেভেলপ করবেন না | একজন ইঞ্জিনিয়ার এবং একজন ফ্রিল্যান্সারের মধ্যে অনেক পার্থক্য থাকে |</p>

    <p><em>Post Copied from Naem Azam Chowdhury.<br>
    Original Post Link : Facebook Page</em></p>

        `
    },
    {
        id: 3,
        title: "Python 🐍 - The Complete Guide for Beginners to Advanced",
        slug: "python-complete-guide-beginners-advanced",
        publishDate: "October 16, 2023",
        author: "Sanjid Ahmmed",
        authorAvatar: "assets/images/SA001.jpg",
        authorBio: "Full Stack Developer & Tech Writer",
        featuredImage: "assets/images/Articles/Python.jpg",
        excerpt: "A comprehensive guide to Python programming covering its applications, career opportunities, learning roadmap for beginners to advanced, and free resources...",
        readTime: "10 min read",
        category: "Programming",
        tags: ["Python", "Programming", "Beginner Guide", "DSA", "Web Development"],
        content: `
            <p>বর্তমানে পাইথন (Python) 🐍 সবচেয়ে জনপ্রিয় প্রোগ্রামিং ল্যাঙ্গুয়েজের কাতারে চলে এসেছে | প্রতিটা সেক্টরের ব্যবহার বাড়ার কারণে পাইথন শেখার এবং পাইথন প্রোগ্রামিং দিন দিন বাড়তেছে | আজকের এই পোস্টে পাইথন নিয়ে ডিটেইলস এ আলোচনা করা হবে</p>

                <p>পোস্ট অনেক বড় হবেই কিন্তু এখানে আপনাদের সমস্ত প্রশ্নের উত্তর থাকবে আমি বিভিন্ন বিষয় নিয়ে কথা বলবো প্রথমে হচ্ছে:</p>
    <ul>
        <li>Python ল্যাঙ্গুয়েজ কি?</li>
        <li>কেন শিখব?</li>
        <li>চাকরির কতটুকু অবস্থা আছে?</li>
        <li>Non-CS শিখতে পারবে কিনা</li>
        <li>Full Noob To Pro Roadmap, DSA, Problem-solving, Projects</li>
        <li>রিসোর্সেস, সার্টিফিকেশনস, ইউটিউব চ্যানেল, Books Etc</li>
    </ul>

    <p>পাইথন প্রোগ্রামিং ল্যাঙ্গুয়েজ সি প্রোগ্রামিং এর Base করে তৈরি করা, তো আপনারা যারা মনে করেন C/C++ শিখব কেন ? পাইথন খালি শিখলে হবে, শোনান বাপ Always বাপই হয় !</p>

    <h2>পাইথন কি ?</h2>
    <p>পাইথন একটি high-level, interpreted programming language যা প্রথম 1991 সালে প্রকাশিত হয়েছিল। এটি একটি easy to read and write, with a simple and straightforward syntax করার জন্য ডিজাইন করা হয়েছে। পাইথন web development, scientific computing, data analysis, artificial intelligence, and machine learning সহ বিস্তৃত অ্যাপ্লিকেশনের জন্য ব্যবহৃত হয়। পাইথন একটি interpreted language, যার মানে এটি চালানোর আগে কম্পাইল করার প্রয়োজন নেই।</p>
    
    <p>পাইথন তার বিস্তৃত লাইব্রেরি এবং ফ্রেমওয়ার্কের জন্য পরিচিত, যা ডেভেলপারদের তাদের অ্যাপ্লিকেশনগুলিতে ব্যবহারের জন্য বিস্তৃত কার্যকারিতা প্রদান করে। এই লাইব্রেরি এবং ফ্রেমওয়ার্কগুলি জটিল অ্যাপ্লিকেশনগুলিকে দ্রুত এবং দক্ষতার সাথে বিকাশ করা সহজ করে তোলে। পাইথনের জন্য কিছু জনপ্রিয় লাইব্রেরি এবং ফ্রেমওয়ার্কের মধ্যে রয়েছে জ্যাঙ্গো, ফ্লাস্ক, নমপি, পান্ডাস এবং টেনসরফ্লো। কাজ করে।</p>

    <h2>কেন আমাদের পাইথন শিখতে হবে ?</h2>
    <p>পাইথন একটি বহুমুখী ভাষা যা ডেভেলপার এবং গবেষকরা বিভিন্ন ক্ষেত্রে ব্যবহার করেন। এর syntax, ease of use, and extensive libraries and frameworks এটিকে web development to scientific computing to machine learning পর্যন্ত বিভিন্ন অ্যাপ্লিকেশনের জন্য একটি জনপ্রিয় । তাহলে একজন ডেটা বিজ্ঞানী হওয়া একটি ফলপ্রসূ এবং লাভজনক ক্যারিয়ার পছন্দ হতে পারে।</p>
    
    <p>নন-সিএস কি পাইথন ভাষা শিখতে পারে? একেবারেই! নন-সিএস (কম্পিউটার সায়েন্স) ব্যক্তিরা পাইথন থেকে শিখতে পারে। প্রকৃতপক্ষে, পাইথনকে প্রায়শই একটি শিক্ষানবিস-বান্ধব ভাষা হিসাবে সুপারিশ করা হয় কারণ এটির readability and simplicity.</p>

    <h2>আমরা পাইথন কোন কোন সেক্টরে ব্যবহার করি ?</h2>
    <p>পাইথন একটি বহুমুখী প্রোগ্রামিং ভাষা যা বিস্তৃত শিল্প এবং সেক্টরে ব্যবহৃত হয়। এখানে কিছু উদাহরণঃ:</p>
    <ul>
        <li>Web Development</li>
        <li>Data Science</li>
        <li>Machine Learning</li>
        <li>Artificial Intelligence</li>
        <li>Scientific Computing</li>
        <li>Natural Language Processing</li>
        <li>Robotics</li>
        <li>Automation and Scripting</li>
        <li>Finance and Trading</li>
        <li>Cybersecurity</li>
        <li>Network Programming</li>
        <li>Game Development</li>
        <li>Mobile App Development</li>
        <li>DevOps and Infrastructure Automation</li>
        <li>Cloud Computing</li>
        <li>Big Data Processing and Analytics</li>
        <li>Internet of Things (IoT)</li>
        <li>Bioinformatics and Computational Biology</li>
        <li>Image and Video Processing</li>
        <li>GIS and Geospatial Analysis</li>
        <li>Social Media Mining and Analysis</li>
        <li>E-commerce and Retail Analytics</li>
        <li>Healthcare and Medical Research</li>
        <li>Education and E-Learning</li>
        <li>Digital Marketing and Advertising</li>
        <li>Music and Audio Processing</li>
        <li>Information Retrieval and Search Engines</li>
        <li>Virtual Reality (VR) and Augmented Reality (AR)</li>
        <li>Data Visualization and Dashboards</li>
        <li>Supply Chain Management and Logistics</li>
        <li>etc</li>
    </ul>

    <h2>প্রবলেম সলভিং এর জন্য পাইথন ভালো নাকি সি ?</h2>
    <p>প্রবলেম সলভিং জন্য Python এবং C-এর মধ্যে পছন্দ সমস্যার নির্দিষ্ট প্রয়োজনীয়তার উপর নির্ভর করে। যদি সমস্যাটি ডেটা বিশ্লেষণ, মেশিন লার্নিং, বা ওয়েব ডেভেলপমেন্টের সাথে জড়িত থাকে, তাহলে পাইথন সেরা পছন্দ হতে পারে। যদি সমস্যাটি সিস্টেম প্রোগ্রামিং, অপারেটিং সিস্টেম বা এমবেডেড সিস্টেমের সাথে জড়িত থাকে, তাহলে C সবচেয়ে ভালো পছন্দ হতে পারে। যাইহোক, এটি লক্ষণীয় যে উভয় ভাষাই সমস্যা-সমাধানের জন্য ব্যবহার করা যেতে পারে। C এর দক্ষতা এবং মেমরি ব্যবস্থাপনার উপর সরাসরি নিয়ন্ত্রণের কারণে সাধারণত প্রতিযোগিতামূলক প্রোগ্রামিংয়ে ব্যবহৃত হয়।</p>

    <h2>শুধুমাত্র পাইথন ভাষা শিখলেই কি চাকরি পাওয়া সম্ভব?</h2>
    <p>হ্যাঁ, শুধুমাত্র পাইথন ভাষা শিখলেই চাকরি পাওয়া সম্ভব। পাইথন একটি খুব জনপ্রিয় প্রোগ্রামিং ভাষা যা অনেক কোম্পানি এবং সংস্থা বিভিন্ন উদ্দেশ্যে ব্যবহার করে, যেমন ওয়েব ডেভেলপমেন্ট, ডেটা বিশ্লেষণ, মেশিন লার্নিং, বৈজ্ঞানিক কম্পিউটিং এবং অটোমেশন। অনেক কোম্পানি এবং সংস্থা Freelance পাইথন ডেভেলপারদের খুঁজছে যারা তাদের প্রকল্পে তাদের সাহায্য করতে পারে।</p>

    <h2>Python language to beginners to advance the full roadmap</h2>
    
    <h3>Beginner Level:</h3>
    <ol>
        <li>পাইথন সিনট্যাক্স, ডেটার ধরন, ভেরিয়েবল এবং অপারেটরগুলির মূল বিষয়গুলি শিখুন৷</li>
        <li>control structures যেমন if-else স্টেটমেন্ট এবং লুপ ব্যবহার করে অনুশীলন করুন।</li>
        <li>পাইথনে কীভাবে ফাংশন এবং মডিউল তৈরি করতে হয় তা শিখুন।</li>
        <li>সাধারণ প্রোগ্রামিং প্রকল্পগুলিতে কাজ করুন, যেমন একটি ক্যালকুলেটর বা একটি অনুমান করার খেলা ৷ Check "The Terminal Boy " Youtube Channel</li>
        <li>ডেটা ম্যানিপুলেশন এবং ভিজ্যুয়ালাইজেশানের জন্য NumPy, Pandas এবং Matplotlib-এর মতো জনপ্রিয় পাইথন লাইব্রেরিগুলি কীভাবে ব্যবহার করবেন তা শিখুন।</li>
        <li>ফ্লাস্ক বা জ্যাঙ্গো ফ্রেমওয়ার্ক ব্যবহার করে ছোট ওয়েব ডেভেলপমেন্ট প্রকল্পে কাজ শুরু করুন।</li>
    </ol>

    <h3>Intermediate Level:</h3>
    <ol>
        <li>পাইথনে অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং ধারণা শিখুন, যেমন ক্লাস, অবজেক্ট, ইনহেরিটেন্স এবং পলিমরফিজম।</li>
        <li>ডেটা স্ট্রাকচার এবং অ্যালগরিদম, যেমন lists, dictionaries, stacks, queues, sorting, and searching বিষয়ে আপনার বোঝার গভীরতা বাড়ান।</li>
        <li>decorators, generators, and context managers মতো আরও উন্নত বিষয়গুলি অন্বেষণ করুন ৷</li>
        <li>আরও জটিল প্রোগ্রামিং প্রকল্পগুলিতে কাজ করুন যেমন building a chatbot or creating a web application with user authentication and authorization তৈরি করা। Visit My github for Free Codes.</li>
        <li>আরও উন্নত ওয়েব ডেভেলপমেন্ট ধারণা জানুন যেমন REST API এবং ডাটাবেস ইন্টিগ্রেশন।</li>
        <li>স্কিকিট-লার্ন এবং টেনসরফ্লো-এর মতো জনপ্রিয় লাইব্রেরিগুলি ব্যবহার করে মেশিন লার্নিং এবং ডেটা সায়েন্স বিষয়গুলি যেমন regression, classification, clustering, and neural networks using popular libraries such as Scikit-learn and TensorFlow ৷</li>
    </ol>

    <h3>Advanced Level:</h3>
    <ol>
        <li>জটিল সফ্টওয়্যার আর্কিটেকচার, ডিজাইন প্যাটার্ন এবং কোড অপ্টিমাইজেশান কৌশল জড়িত বৃহৎ মাপের প্রকল্পগুলিতে কাজ করুন। পাইথনে মাল্টি-থ্রেডিং, কনকারেন্সি এবং প্যারালাল কম্পিউটিং-এর মতো উন্নত বিষয়গুলি অন্বেষণ করুন।</li>
        <li>ডিপ লার্নিং, ন্যাচারাল ল্যাঙ্গুয়েজ প্রসেসিং এবং কম্পিউটার ভিশনের মতো বিষয়গুলির সাথে মেশিন লার্নিং এবং ডেটা সায়েন্সে আরও গভীরে যান৷ |</li>
        <li>পাইথনের ভিতরের কাজগুলি সম্পর্কে জানুন যেমন interpreter কীভাবে কাজ করে এবং কীভাবে মেমরি পরিচালনা করা হয়।</li>
        <li>ওপেন সোর্স প্রকল্পে অংশগ্রহণ করুন এবং পাইথন সম্প্রদায়ে অবদান রাখুন। Visit My Github</li>
    </ol>

    <h2>সার্টিফিকেট সহ পাইথন কোর্স</h2>
    <ol>
        <li>"Python for Everybody" by University of Michigan on Coursera</li>
        <li>"Python for Data Science and Machine Learning Bootcamp" by Udemy</li>
        <li>"Python Fundamentals" by Pluralsight</li>
        <li>"Complete Python Developer in 2021: Zero to Mastery" by Udemy</li>
        <li>"Python Programming Certification Course" by edX</li>
        <li>"Applied Data Science with Python" by the University of Michigan on Coursera</li>
    </ol>

    <h2>টপ ফ্রি রিসোর্সে</h2>
    
    <h3>ইউটিউব চ্যানেল</h3>
    <ul>
        <li>Corey Schafer</li>
        <li>Sentdex</li>
        <li>Tech With Tim</li>
        <li>freeCodeCamp.org</li>
        <li>CS Dojo</li>
        <li>CoreyMS</li>
        <li>Codewithharry</li>
    </ul>

    <h3>বই</h3>
    <ol>
        <li>Python Crash Course" by Eric Matthes</li>
        <li>"Automate the Boring Stuff with Python" by Al Sweigart</li>
        <li>"Fluent Python" by Luciano Ramalho</li>
        <li>"Python for Data Analysis" by Wes McKinney</li>
        <li>"Python Cookbook" by David Beazley and Brian K. Jones</li>
        <li>"Learning Python" by Mark Lutz</li>
    </ol>

    <h2>Conclusion</h2>
    <p>একজন ছাত্র হিসাবে, Python প্রোগ্রামিং শেখা একটি মূল্যবান দক্ষতা যা আপনাকে কম্পিউটার প্রোগ্রামিং এবং সমস্যা সমাধানে একটি শক্তিশালী ভিত্তি গড়ে তুলতে সাহায্য করতে পারে। Python প্রোগ্রামিং আয়ত্ত করার মাধ্যমে, শিক্ষার্থীরা AI, Blockchain, Cybersecurity, সফ্টওয়্যার ডেভেলপমেন্ট, এবং Problem Solving সহ 30+ ক্ষেত্রে ক্যারিয়ারের জন্য ভালভাবে প্রস্তুত হতে পারে |</p>

    <p><em>Post Copied from Naem Azam Chowdhury.<br>
    Original Post Link : Facebook Page</em></p>
`

    },
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
                
                <div class="article-author">
                <img src="${article.authorAvatar}" alt="${article.author}" class="author-avatar">
                <div class="author-info">
                    <h4>${article.author}</h4>
                    <p>${article.authorBio}</p>
                </div>
            </div>
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
