import React from 'react';
import { resumeData } from '../data/resumeData';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-slate-500 mx-auto rounded"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {resumeData.projects.map((project, index) => (
                        <div key={index} className="group bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-slate-500 transition-all duration-300 hover:shadow-xl hover:shadow-slate-500/10">
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-gray-900 rounded-lg group-hover:bg-slate-500/10 transition-colors">
                                        <FolderGit2 className="text-slate-400 group-hover:text-slate-300" size={24} />
                                    </div>
                                    <div className="flex gap-3">
                                        {project.link && (
                                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                                <Github size={20} />
                                            </a>
                                        )}
                                        {/* Placeholder for live demo link if available */}
                                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-slate-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
