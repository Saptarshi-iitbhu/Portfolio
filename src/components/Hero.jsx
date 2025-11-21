import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-black pt-16 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-slate-500/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center text-center relative z-10">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                    className="text-slate-400 font-semibold text-lg mb-4 tracking-wide uppercase"
                >
                    Hello, I'm
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                >
                    {resumeData.personalInfo.name}
                </motion.h1>

                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl md:text-3xl text-slate-300 mb-8 font-light"
                >
                    Full Stack Developer & Competitive Programmer
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed text-lg"
                >
                    Passionate about building scalable web applications and solving complex algorithmic problems.
                    <span className="text-slate-400 font-semibold block mt-2">Guardian on LeetCode & Expert on Codeforces.</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto"
                >
                    <a
                        href="#contact"
                        className="px-8 py-4 bg-slate-600 hover:bg-slate-500 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-slate-500/25"
                    >
                        Contact Me
                    </a>

                    <a
                        href={resumeData.personalInfo.links.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 border border-slate-600 text-slate-300 hover:bg-slate-600/20 hover:text-white rounded-full font-medium transition-all flex items-center justify-center gap-2"
                    >
                        <FileText size={20} />
                        Download Resume
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-12 flex items-center justify-center space-x-8"
                >
                    <a href={resumeData.personalInfo.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110" title="GitHub">
                        <Github size={28} />
                    </a>

                    <a href={resumeData.personalInfo.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110" title="LinkedIn">
                        <Linkedin size={28} />
                    </a>

                    <a href={resumeData.personalInfo.links.leetcode} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition-colors transform hover:scale-110" title="LeetCode">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 fill-current"><title>LeetCode</title><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.843 5.843 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" /></svg>
                    </a>

                    <a href={resumeData.personalInfo.links.codeforces} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors transform hover:scale-110" title="Codeforces">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 fill-current"><title>Codeforces</title><path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-7.5c0-.828.672-1.5 1.5-1.5h3z" /></svg>
                    </a>

                    <a href={`mailto:${resumeData.personalInfo.email}`} className="text-gray-400 hover:text-red-400 transition-colors transform hover:scale-110" title="Email">
                        <Mail size={28} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
