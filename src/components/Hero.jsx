import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gray-900 pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-slate-400 font-semibold text-lg mb-2">Hello, I'm</h2>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mb-4">
                        {resumeData.personalInfo.name}
                    </h1>
                    <h3 className="text-xl md:text-2xl text-gray-400 mb-6">
                        Full Stack Developer & Competitive Programmer
                    </h3>
                    <p className="text-gray-400 max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
                        Passionate about building scalable web applications and solving complex algorithmic problems.
                        Guardian on LeetCode & Expert on Codeforces.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-slate-500 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors text-center"
                        >
                            Contact Me
                        </a>
                        <a
                            href="#" // Placeholder for resume download
                            className="px-8 py-3 border border-slate-500 text-slate-400 hover:bg-gray-800 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                        >
                            <FileText size={20} />
                            Download Resume
                        </a>
                    </div>

                    <div className="mt-12 flex items-center justify-center md:justify-start space-x-6">
                        <a href={resumeData.personalInfo.links.github} className="text-gray-400 hover:text-slate-400 transition-colors">
                            <Github size={24} />
                        </a>
                        <a href={resumeData.personalInfo.links.linkedin} className="text-gray-400 hover:text-slate-400 transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href={`mailto:${resumeData.personalInfo.email}`} className="text-gray-400 hover:text-slate-400 transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>

                <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        <div className="absolute inset-0 border-2 border-slate-500 rounded-full transform translate-x-4 translate-y-4"></div>
                        <div className="absolute inset-0 bg-gray-800 rounded-full overflow-hidden flex items-center justify-center shadow-2xl">
                            {/* Placeholder for profileimage */}
                            <span className="">
                                <img src="../public/img.jpeg" alt="" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
