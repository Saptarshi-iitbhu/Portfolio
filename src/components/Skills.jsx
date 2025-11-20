import React from 'react';
import { resumeData } from '../data/resumeData';
import { Code, Database, Terminal, Layout } from 'lucide-react';

const Skills = () => {
    const getIcon = (category) => {
        switch (category) {
            case 'languages': return <Code className="text-slate-400" />;
            case 'fundamentals': return <Terminal className="text-slate-400" />;
            case 'techStack': return <Layout className="text-slate-400" />;
            default: return <Database className="text-slate-400" />;
        }
    };

    const getTitle = (key) => {
        switch (key) {
            case 'languages': return 'Languages';
            case 'fundamentals': return 'CS Fundamentals';
            case 'areasOfInterest': return 'Areas of Interest';
            case 'techStack': return 'Tech Stack';
            default: return key;
        }
    };

    return (
        <section id="skills" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-slate-500 mx-auto rounded"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Object.entries(resumeData.skills).map(([key, skills]) => (
                        <div key={key} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-slate-500 transition-colors duration-300">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-gray-900 rounded-lg">
                                    {getIcon(key)}
                                </div>
                                <h3 className="text-xl font-bold text-gray-100">{getTitle(key)}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-gray-900 text-gray-300 text-sm rounded-full border border-gray-700"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
