import React, { createContext, useState, useEffect, useContext } from 'react';
import { resumeData } from '../data/resumeData';

const ProjectContext = createContext();

export const useProjects = () => useContext(ProjectContext);

export const ProjectProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Load projects from local storage or use initial data
        const savedProjects = localStorage.getItem('portfolio_projects');
        if (savedProjects) {
            // Merge initial projects with saved ones if needed, or just use saved
            // For this implementation, we'll assume savedProjects contains EVERYTHING
            // If it's the first run, we initialize with resumeData.projects
            setProjects(JSON.parse(savedProjects));
        } else {
            setProjects(resumeData.projects);
        }
    }, []);

    const addProject = (newProject) => {
        const updatedProjects = [newProject, ...projects];
        setProjects(updatedProjects);
        localStorage.setItem('portfolio_projects', JSON.stringify(updatedProjects));
    };

    // Function to reset to default data (useful for testing)
    const resetProjects = () => {
        setProjects(resumeData.projects);
        localStorage.removeItem('portfolio_projects');
    };

    return (
        <ProjectContext.Provider value={{ projects, addProject, resetProjects }}>
            {children}
        </ProjectContext.Provider>
    );
};
