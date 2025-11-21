import React from 'react';
import { useProjects } from '../context/ProjectContext';
import { Github, ExternalLink, FolderGit2, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AllProjects = () => {
    const { projects } = useProjects();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </button>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">All Projects</h1>
                    <div className="w-20 h-1 bg-slate-500 rounded"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-slate-500 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-500/20 hover:-translate-y-2 flex flex-col">
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
        </div>
    );
};

export default AllProjects;
