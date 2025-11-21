import React from 'react';
import { resumeData } from '../data/resumeData';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">Experience</h2>
                    <div className="w-20 h-1 bg-slate-500 mx-auto rounded"></div>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {resumeData.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 border-l-2 border-slate-500"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-500 ring-4 ring-gray-800"></div>

                            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 mb-8 hover:border-slate-500 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-100 flex items-center gap-2">
                                            {exp.role}
                                            {exp.link && (
                                                <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                                    <ExternalLink size={16} />
                                                </a>
                                            )}
                                        </h3>
                                        <p className="text-slate-400 font-medium flex items-center gap-2 mt-1">
                                            <Briefcase size={16} /> {exp.company}
                                        </p>
                                    </div>
                                    <div className="mt-2 md:mt-0 text-gray-400 text-sm flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full w-fit">
                                        <Calendar size={14} /> {exp.duration}
                                    </div>
                                </div>

                                <ul className="space-y-2">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="text-gray-300 text-sm leading-relaxed flex items-start gap-2">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-500 flex-shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
