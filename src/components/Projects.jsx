import React from 'react';
import { useProjects } from '../context/ProjectContext';
import { Github, ExternalLink, FolderGit2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Projects = () => {
    const { projects } = useProjects();
    const navigate = useNavigate();

    // Filter featured projects
    const featuredProjects = projects.filter(p => p.featured);

    return (
        <section id="projects" className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-slate-500 mx-auto rounded"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-slate-500 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-500/20 hover:-translate-y-2 flex flex-col"
                        >
                            <div className="p-6 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-gray-900 rounded-lg group-hover:bg-slate-500/10 transition-colors">
                                        <FolderGit2 className="text-slate-400 group-hover:text-slate-300" size={24} />
                                    </div>
                                    <div className="flex gap-3">
                                        {project.link && (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                                <Github size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-slate-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                                    {project.description}
                                </p>

                                <div className="space-y-2 mb-6">
                                    {project.details.map((detail, i) => (
                                        <p key={i} className="text-gray-500 text-xs flex items-start gap-2">
                                            <span className="mt-1 w-1 h-1 rounded-full bg-slate-500 flex-shrink-0"></span>
                                            {detail}
                                        </p>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="text-xs font-medium text-slate-400 bg-gray-900 px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex justify-center"
                >
                    <button
                        onClick={() => navigate('/projects')}
                        className="px-8 py-3 bg-slate-600 hover:bg-slate-500 text-white rounded-full font-medium transition-all flex items-center gap-2 group"
                    >
                        View All Projects
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
