import React from 'react';
import { resumeData } from '../data/resumeData';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-slate-500 mx-auto rounded"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-100 mb-6">Let's Connect</h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                            I'll try my best to get back to you!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="p-3 bg-gray-800 rounded-lg text-slate-400">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <a href={`mailto:${resumeData.personalInfo.email}`} className="hover:text-slate-400 transition-colors">
                                        {resumeData.personalInfo.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="p-3 bg-gray-800 rounded-lg text-slate-400">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Phone</p>
                                    <p>{resumeData.personalInfo.phone}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="p-3 bg-gray-800 rounded-lg text-slate-400">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Address</p>
                                    <p>{resumeData.personalInfo.address}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm text-gray-400">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:border-slate-500 transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm text-gray-400">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:border-slate-500 transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm text-gray-400">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:border-slate-500 transition-colors"
                                placeholder="Project Inquiry"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm text-gray-400">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:border-slate-500 transition-colors resize-none"
                                placeholder="Your message here..."
                            ></textarea>
                        </div>

                        <button
                            type="button"
                            className="w-full bg-slate-500 hover:bg-slate-600 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                            <Send size={18} />
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
