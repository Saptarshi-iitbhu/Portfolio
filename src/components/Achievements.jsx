import React from 'react';
import { resumeData } from '../data/resumeData';
import { Trophy, Medal, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Achievements = () => {
    return (
        <section className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">Honours & Achievements</h2>
                    <div className="w-20 h-1 bg-slate-500 mx-auto rounded"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {resumeData.achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`p-6 rounded-xl border transition-all duration-300 ${achievement.highlight
                                ? 'bg-gray-900 border-slate-500 shadow-lg shadow-slate-500/10'
                                : 'bg-gray-900 border-gray-700 hover:border-gray-600'
                                }`}
                        >
                            <div className="flex items-start gap-4">
                                <div className={`p-3 rounded-lg ${achievement.highlight ? 'bg-slate-500/20 text-slate-400' : 'bg-gray-800 text-gray-500'}`}>
                                    {achievement.highlight ? <Trophy size={24} /> : <Medal size={24} />}
                                </div>
                                <div>
                                    <h3 className={`text-lg font-bold mb-1 ${achievement.highlight ? 'text-slate-400' : 'text-gray-200'}`}>
                                        {achievement.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        {achievement.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
