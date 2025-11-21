import { Code, Database, Globe, Server, Terminal, Cpu, Layers, Brain } from 'lucide-react';

export const resumeData = {
    personalInfo: {
        name: "Saptarshi Chakraborty",
        email: "saptarshichakraborty783@gmail.com",
        phone: "6289807266",
        address: "23/1, Tarka Siddhanta Lane, Bally, Howrah - 711201",
        links: {
            leetcode: "https://leetcode.com/u/itz_saptarshi/",
            codeforces: "https://codeforces.com/profile/sapcoder",
            github: "https://github.com/Saptarshi-iitbhu",
            linkedin: "https://www.linkedin.com/in/saptarshi-chakraborty-91a966231/",
            resume: "https://drive.google.com/file/d/1v4tApUaur26EZvSCpFnbyf76OIgIWpNR/view?usp=drive_link"
        }
    },
    education: [
        {
            degree: "IDD Ceramic Engineering",
            institution: "IIT (BHU), Varanasi",
            year: "2026",
            score: "8.32 CGPA"
        },
        {
            degree: "ISC (XII)",
            institution: "Adamas International School",
            year: "2021",
            score: "92.20%"
        },
        {
            degree: "ICSE (X)",
            institution: "Adamas International School",
            year: "2019",
            score: "95.80%"
        }
    ],
    skills: {
        programmingLanguages: ["C", "C++", "Java", "JavaScript", "TypeScript", "Python"],
        frontend: ["HTML", "CSS", "TailwindCSS", "React.js"],
        backend: ["Node.js", "Express.js", "Django", "Flask"],
        databases: ["MongoDB", "MySQL"],
        machineLearning: ["TensorFlow", "PyTorch", "Pandas", "Seaborn", "OpenCV", "Scikit-Learn"],
        tools: ["Postman", "Git", "GitHub"]
    },
    experience: [
        {
            role: "Web Development Intern",
            company: "CodSoft",
            duration: "May 2025 - July 2025",
            description: [
                "Developed a responsive front-end interface using React.js to display products and manage the shopping cart.",
                "Built RESTful APIs with Node.js and Express.js for product, order, and user management.",
                "Implemented JWT authentication and bcrypt for secure login and password encryption.",
                "Integrated MongoDB for storing user accounts, product catalog, and order history."
            ],
            link: "https://e-commerce-website-beta-lake.vercel.app/"
        },
        {
            role: "Data Science Intern",
            company: "Quora Duplication Detection",
            duration: "December 2024",
            description: [
                "Performed tokenization, stopword removal, stemming, and word embeddings for text preprocessing.",
                "Utilized Word2Vec and custom features, achieving 83.8% accuracy with Random Forest.",
                "Improved model to 94% accuracy using LSTM with embedding layers and tokenized sequences."
            ],
            link: "https://github.com/Saptarshi-iitbhu/Quora-Duplication-Detection"
        }
    ],
    projects: [
        {
            title: "Eterna (Axiom Clone)",
            date: "2025",
            description: "Frontend assignment replicating the Axiom interface.",
            tech: ["React", "TailwindCSS"],
            details: [
                "Replicated the complex UI of Axiom.",
                "Implemented responsive design and interactive elements."
            ],
            link: "https://github.com/Saptarshi-iitbhu/Eterna-Frontend-Assignment",
            featured: true
        },
        {
            title: "BlogFusion",
            date: "March 2025",
            description: "Developed a Full Stack Blog App that enables user to create and view blog posts.",
            tech: ["React JS", "Node JS", "Express", "MongoDB", "Open AI API"],
            details: [
                "Built responsive frontend with ReactJS and NodeJS, ExpressJS to make routes.",
                "Incorporated JWT for user authentication, bcryptjs for password encryption and MongoDB as a cloud Database."
            ],
            link: "https://github.com/Saptarshi-iitbhu/BlogFusion",
            featured: false
        },
        {
            title: "DBMS B+Tree Implementation",
            date: "February 2025",
            description: "Implemented the B+ Tree data structure from scratch, supporting insert, delete, and search operations.",
            tech: ["C++", "DBMS"],
            details: [
                "Enabled node splitting and merging to preserve tree balance and efficient indexing.",
                "Designed configurable tree order (degree) for flexible branching factor and performance tuning.",
                "Built search, insertion, deletion, and display modules for interactive testing of tree structure and behavior."
            ],
            link: "https://github.com/Saptarshi-iitbhu/DBMS-BPlusTree-Implementation",
            featured: true
        },
        {
            title: "Predict Closed Questions",
            date: "2025",
            description: "Predicting closed questions on StackOverflow.",
            tech: ["Python", "Machine Learning"],
            details: [
                "Analyzed StackOverflow dataset.",
                "Built predictive models to identify closed questions."
            ],
            link: "http://github.com/Saptarshi-iitbhu/Predict-Closed-Questions-on-StackOverflow",
            featured: true
        },
        {
            title: "Sentiment Analysis",
            date: "2025",
            description: "Sentiment analysis project.",
            tech: ["Python", "NLP"],
            details: [
                "Performed sentiment analysis on text data.",
                "Visualized results."
            ],
            link: "https://github.com/Saptarshi-iitbhu/Sentiment-Analysis",
            featured: true
        },
        {
            title: "AutoComplete Engine",
            date: "January 2025",
            description: "Implemented a Trie-based data structure to store words with associated frequencies for fast prefix lookup.",
            tech: ["C++", "Trie", "Min-Heap"],
            details: [
                "Designed a top-k suggestion system using a min-heap for efficient frequent word retrieval.",
                "Built an interactive CLI interface allowing users to input prefixes and receive real-time top-k suggestions."
            ],
            link: "https://github.com/Saptarshi-iitbhu/AutocompleteEngine",
            featured: false
        },
        {
            title: "Facial Expression Detection",
            date: "2024",
            description: "Detecting facial expressions using Computer Vision.",
            tech: ["Python", "OpenCV", "Deep Learning"],
            details: [
                "Implemented real-time facial expression detection.",
                "Trained models on standard datasets."
            ],
            link: "https://github.com/Saptarshi-iitbhu/Facial-Expression-Detection",
            featured: false
        },
        {
            title: "Movie Recommender Model",
            date: "2024",
            description: "Recommendation system for movies.",
            tech: ["Python", "Machine Learning"],
            details: [
                "Built a content-based recommendation system.",
                "Used cosine similarity for recommendations."
            ],
            link: "https://github.com/Saptarshi-iitbhu/movie-recommender-model",
            featured: false
        },
        {
            title: "Email Spam Classifier",
            date: "2024",
            description: "Classifying emails as spam or ham.",
            tech: ["Python", "NLP", "Scikit-learn"],
            details: [
                "Processed email text data.",
                "Trained a classifier to detect spam."
            ],
            link: "https://github.com/Saptarshi-iitbhu/Email_Spam_Classifier",
            featured: false
        }
    ],
    achievements: [
        {
            title: "Guardian on LeetCode",
            description: "Max rating of 2158, ranked in the top 1.5% globally.",
            highlight: true
        },
        {
            title: "Expert on Codeforces",
            description: "Max rating of 1756.",
            highlight: true
        },
        {
            title: "Global Rank 70",
            description: "LeetCode Weekly Contest 460."
        },
        {
            title: "Global Rank 288",
            description: "Leetcode Weekly Contest 444."
        },
        {
            title: "Global Rank 813 & 918",
            description: "Codeforces round 1016(Div. 3) and 1022(Div.2)."
        },
        {
            title: "1000+ DSA Questions",
            description: "Solved across all platforms."
        }
    ]
};
