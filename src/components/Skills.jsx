import React from 'react';
import { resumeData } from '../data/resumeData';
import { motion } from 'framer-motion';

const getIconSlug = (name) => {
    const slugMap = {
        "C": "c",
        "C++": "cplusplus",
        "Java": "openjdk",
        "JavaScript": "javascript",
        "TypeScript": "typescript",
        "Python": "python",
        "HTML": "html5",
        "CSS": "css3",
        "TailwindCSS": "tailwindcss",
        "React.js": "react",
        "Node.js": "nodedotjs",
        "Express.js": "express",
        "Django": "django",
        "Flask": "flask",
        "MongoDB": "mongodb",
        "MySQL": "mysql",
        "TensorFlow": "tensorflow",
        "PyTorch": "pytorch",
        "Pandas": "pandas",
        "Seaborn": "python", // Fallback
        "OpenCV": "opencv",
        "Scikit-Learn": "scikitlearn",
        "Postman": "postman",
        "Git": "git",
        "GitHub": "github"
    };
    return slugMap[name] || name.toLowerCase().replace(/\./g, '').replace(/\s+/g, '');
};

const SkillCard = ({ name, index }) => {
    const slug = getIconSlug(name);
    const iconUrl = `https://cdn.simpleicons.org/${slug}`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all group cursor-default"
        >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-900 border border-gray-800 group-hover:border-gray-700 transition-colors">
                <img
                    src={iconUrl}
                    alt={name}
                    className="w-6 h-6 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                    onError={(e) => { e.target.style.display = 'none'; }}
                />
            </div>
            <span className="text-gray-300 font-medium text-lg group-hover:text-white transition-colors">{name}</span>
        </motion.div>
    );
};

const Skills = () => {
    const { skills } = resumeData;

    if (!skills) return null;

    const categories = [
        { title: "Programming Languages", data: skills.programmingLanguages },
        { title: "Frontend", data: skills.frontend },
        { title: "Backend", data: skills.backend },
        { title: "Databases", data: skills.databases },
        { title: "Machine Learning & Data", data: skills.machineLearning },
        { title: "Tools", data: skills.tools }
    ];

    return (
        <section id="skills" className="py-20 bg-black text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Tools</h2>
                    <div className="w-20 h-1 bg-slate-500 mx-auto rounded"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {categories.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            className="mb-8"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                        >
                            <h3 className="text-xl font-semibold text-gray-400 mb-6 pl-2 border-l-2 border-slate-600">
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {category.data.map((skill, index) => (
                                    <SkillCard key={index} name={skill} index={index} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
