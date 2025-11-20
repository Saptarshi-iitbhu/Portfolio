import { Code, Database, Globe, Server, Terminal, Cpu, Layers, Brain } from 'lucide-react';

export const resumeData = {
    personalInfo: {
        name: "Saptarshi Chakraborty",
        email: "saptarshichakraborty783@gmail.com",
        phone: "6289807266",
        address: "23/1, Tarka Siddhanta Lane, Bally, Howrah - 711201",
        links: {
            leetcode: "https://leetcode.com/u/saptarshichakraborty783/", // inferred/placeholder
            codeforces: "https://codeforces.com/profile/saptarshichakraborty783", // inferred/placeholder
            github: "https://github.com/saptarshichakraborty783", // inferred/placeholder
            linkedin: "#" // Placeholder
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
        languages: ["C/C++", "Python", "JavaScript"],
        fundamentals: ["Object Oriented Programming", "Operating System", "DBMS"],
        areasOfInterest: ["Data Structure and Algorithm", "Competitive Programming", "Machine Learning", "Deep Learning"],
        techStack: ["ReactJS", "TailwindCSS", "NodeJS", "MongoDB", "ExpressJS"]
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
            ]
        }
    ],
    projects: [
        {
            title: "BlogFusion",
            date: "March 2025",
            description: "Developed a Full Stack Blog App that enables user to create and view blog posts.",
            tech: ["React JS", "Node JS", "Express", "MongoDB", "Open AI API"],
            details: [
                "Built responsive frontend with ReactJS and NodeJS, ExpressJS to make routes.",
                "Incorporated JWT for user authentication, bcryptjs for password encryption and MongoDB as a cloud Database."
            ]
        },
        {
            title: "DBMS B+Tree Implementation",
            date: "February 2025",
            description: "Implemented the B+ Tree data structure from scratch, supporting insert, delete, and search operations.",
            tech: ["C++", "DBMS"], // Inferred
            details: [
                "Enabled node splitting and merging to preserve tree balance and efficient indexing.",
                "Designed configurable tree order (degree) for flexible branching factor and performance tuning.",
                "Built search, insertion, deletion, and display modules for interactive testing of tree structure and behavior."
            ],
            link: "Github"
        },
        {
            title: "AutoComplete Engine",
            date: "January 2025",
            description: "Implemented a Trie-based data structure to store words with associated frequencies for fast prefix lookup.",
            tech: ["C++", "Trie", "Min-Heap"], // Inferred
            details: [
                "Designed a top-k suggestion system using a min-heap for efficient frequent word retrieval.",
                "Built an interactive CLI interface allowing users to input prefixes and receive real-time top-k suggestions."
            ],
            link: "Github"
        },
        {
            title: "Quora Duplication Detection",
            date: "December 2024",
            description: "Performed tokenization, stopword removal, stemming, and word embeddings for text preprocessing.",
            tech: ["Python", "Pandas", "NumPy", "NLP", "Word2Vec", "LSTMs"],
            details: [
                "Utilized Word2Vec and custom features, achieving 83.8% accuracy with Random Forest.",
                "Improved model to 94% accuracy using LSTM with embedding layers and tokenized sequences."
            ],
            link: "Github"
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
