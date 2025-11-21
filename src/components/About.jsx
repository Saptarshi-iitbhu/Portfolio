import React from 'react';
import { resumeData } from '../data/resumeData';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-slate-500 mx-auto rounded"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-semibold text-slate-400 mb-6 flex items-center gap-2">
                            <GraduationCap /> Education
                        </h3>
                        <div className="space-y-8">
                            {resumeData.education.map((edu, index) => (
                                <div key={index} className="relative pl-8 border-l-2 border-slate-500/30">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-500"></div>
                                    <h4 className="text-xl font-bold text-gray-100">{edu.institution}</h4>
                                    <p className="text-slate-400 font-medium">{edu.degree}</p>
                                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                                        <span className="flex items-center gap-1"><Calendar size={14} /> {edu.year}</span>
                                        <span className="flex items-center gap-1"><Award size={14} /> {edu.score}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-semibold text-slate-400 mb-6">Personal Profile</h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            I am a final year student at IIT (BHU), Varanasi, pursuing a degree in IDD Ceramic Engineering.
                            My passion lies in Computer Science, specifically in Data Structures, Algorithms, and Full Stack Development.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            With a strong foundation in C++, Python, and JavaScript, I enjoy solving challenging problems on platforms like LeetCode and Codeforces.
                            I am also deeply interested in Machine Learning and Deep Learning, constantly exploring new technologies to build impactful solutions.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="p-4 bg-gray-900 rounded-lg border border-gray-700">
                                <span className="block text-3xl font-bold text-slate-400 mb-1">1000+</span>
                                <span className="text-sm text-gray-400">DSA Problems Solved</span>
                            </div>
                            <div className="p-4 bg-gray-900 rounded-lg border border-gray-700">
                                <span className="block text-3xl font-bold text-slate-400 mb-1">Top 1.5%</span>
                                <span className="text-sm text-gray-400">Global Rank on LeetCode</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
