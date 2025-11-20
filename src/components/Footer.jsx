import React from 'react';
import { resumeData } from '../data/resumeData';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <span className="text-2xl font-bold text-gray-100">Saptarshi.Dev</span>
                        <p className="text-gray-500 text-sm mt-2">
                            Building digital experiences with code and creativity.
                        </p>
                    </div>

                    <div className="flex space-x-6 mb-6 md:mb-0">
                        <a href={resumeData.personalInfo.links.github} className="text-gray-400 hover:text-slate-400 transition-colors">
                            <Github size={20} />
                        </a>
                        <a href={resumeData.personalInfo.links.linkedin} className="text-gray-400 hover:text-slate-400 transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href={`mailto:${resumeData.personalInfo.email}`} className="text-gray-400 hover:text-slate-400 transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Saptarshi Chakraborty. All rights reserved.</p>
                    <p className="flex items-center gap-1 mt-2 md:mt-0">
                        Made with <Heart size={14} className="text-red-500 fill-current" /> using React & Tailwind
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
