import React, { useState } from 'react';
import { useProjects } from '../context/ProjectContext';
import { useNavigate } from 'react-router-dom';
import { Lock, Plus, Trash2, Save, ArrowLeft } from 'lucide-react';

const Admin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const { addProject } = useProjects();
    const navigate = useNavigate();

    // Form State
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        tech: '', // Comma separated
        details: '', // New line separated
        link: '',
        date: new Date().toLocaleString('default', { month: 'long', year: 'numeric' })
    });

    const handleLogin = (e) => {
        e.preventDefault();
        // Simple hardcoded password for demonstration
        if (password === 'admin123') {
            setIsAuthenticated(true);
        } else {
            alert('Invalid Password');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProject = {
            ...formData,
            tech: formData.tech.split(',').map(t => t.trim()),
            details: formData.details.split('\n').filter(d => d.trim() !== '')
        };
        addProject(newProject);
        alert('Project Added!');
        setFormData({
            title: '',
            description: '',
            tech: '',
            details: '',
            link: '',
            date: new Date().toLocaleString('default', { month: 'long', year: 'numeric' })
        });
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
                <form onSubmit={handleLogin} className="bg-gray-800 p-8 rounded-xl border border-gray-700 shadow-2xl w-full max-w-md">
                    <div className="flex justify-center mb-6">
                        <div className="p-3 bg-slate-500/10 rounded-full">
                            <Lock className="text-slate-400" size={32} />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-white text-center mb-6">Admin Access</h2>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-slate-500 mb-4"
                    />
                    <button type="submit" className="w-full bg-slate-500 hover:bg-slate-600 text-white font-bold py-3 rounded-lg transition-colors">
                        Login
                    </button>
                    <button onClick={() => navigate('/')} className="w-full mt-4 text-gray-400 hover:text-white text-sm">
                        Back to Portfolio
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-white">Add New Project</h1>
                    <button onClick={() => navigate('/')} className="flex items-center gap-2 text-gray-400 hover:text-white">
                        <ArrowLeft size={20} /> Back to Home
                    </button>
                </div>

                <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-gray-400 mb-2">Project Title</label>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={e => setFormData({ ...formData, title: e.target.value })}
                                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-slate-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-400 mb-2">Description</label>
                            <textarea
                                value={formData.description}
                                onChange={e => setFormData({ ...formData, description: e.target.value })}
                                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-slate-500 h-24"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-400 mb-2">Technologies (comma separated)</label>
                                <input
                                    type="text"
                                    value={formData.tech}
                                    onChange={e => setFormData({ ...formData, tech: e.target.value })}
                                    placeholder="React, Node.js, MongoDB"
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-slate-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 mb-2">Link (GitHub/Live)</label>
                                <input
                                    type="text"
                                    value={formData.link}
                                    onChange={e => setFormData({ ...formData, link: e.target.value })}
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-slate-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-400 mb-2">Details (one per line)</label>
                            <textarea
                                value={formData.details}
                                onChange={e => setFormData({ ...formData, details: e.target.value })}
                                placeholder="- Feature 1&#10;- Feature 2"
                                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-slate-500 h-32"
                                required
                            />
                        </div>

                        <button type="submit" className="w-full bg-slate-500 hover:bg-slate-600 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                            <Plus size={20} /> Add Project
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Admin;
