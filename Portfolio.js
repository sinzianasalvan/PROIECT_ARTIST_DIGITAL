
import React, { useState, useEffect } from 'react';
import './Portfolio.css';

function Portfolio() {
    const [projects, setProjects] = useState([]);
    const [newProject, setNewProject] = useState({ title: '', link: '', image: '' });
    const [editIndex, setEditIndex] = useState(null);

   
    useEffect(() => {
        const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
        setProjects(storedProjects);
    }, []);

    
    useEffect(() => {
        localStorage.setItem('projects', JSON.stringify(projects));
    }, [projects]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (editIndex !== null) {
            const updatedProjects = [...projects];
            updatedProjects[editIndex] = newProject;
            setProjects(updatedProjects);
            setEditIndex(null);
        } else {
            setProjects([...projects, newProject]);
        }
        setNewProject({ title: '', link: '', image: '' });
    };

    const handleDelete = (index) => {
        const updatedProjects = projects.filter((_, i) => i !== index);
        setProjects(updatedProjects);
    };

    const handleEdit = (index) => {
        setNewProject(projects[index]);
        setEditIndex(index);
    };
    return (
        <div className='portfolio'>
            <h2>Portfolio Page</h2>
           

            
            <div className='wrap'>
            <div1 className="work">
                <h5> <img src="/images/branding.jpg" alt="branding" className="work-photo" /></h5>
            </div1>
            <div1 className="work">
                <h5> <img src="/images/business.jpg" alt="business" className="work-photo" /></h5>
            </div1>
            <div1 className="work">
                <h5> <img src="/images/digit.jfif" alt="digit" className="work-photo" />
                </h5>
            </div1>
            </div>
            <div className="flex-container">
    <div className="flex-item">We created a complete visual identity for our client, including logo,
    <p> color palette and typography. </p>
        <p>The goal was to reflect the essence of the brand and ensure visual </p>
        <p>consistency across all platforms.</p>
        <p>Our modern and elegant logo was developed to match the client's values ​​and goals, and branding materials </p>
        <p>(business cards, stationery, etc.) were designed to strengthen brand recognition.</p>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                        Our first project here
                    </a>
        </div>
    <div className="flex-item">Highlights of Our Recent Work:
        <p>-Crafted unique logos and brand identities that capture the essence of diverse businesses.</p>
        <p>-Designed user-friendly, visually appealing websites that enhance user experience and drive conversions.</p>
        <p>-Developed eye-catching brochures, flyers, and advertisements that effectively communicate key messages.</p>
        <p>-Created vibrant, share-worthy graphics that boost engagement and grow social media presence.</p>
    </div>
    <div className="flex-item">Why Partner with Us?
    <p>-Crafted unique logos and brand identities that capture the essence of diverse businesses.</p>
        <p>-Our team stays ahead of design trends to deliver innovative and effective visual solutions.</p>
        <p>-We focus on every element to ensure high-quality results that resonate with your target audience.</p>
        <p>- We work closely with you throughout the design process to ensure your vision is brought to life.</p>
    </div>
</div>
<form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    placeholder="Project Title"
                    value={newProject.title}
                    onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                    required
                />
                <input
                    type="url"
                    placeholder="Project Link"
                    value={newProject.link}
                    onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={newProject.image}
                    onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
                    required
                />
                <button type="submit">
                    {editIndex !== null ? 'Update Project' : 'Add Project'}
                </button>
            </form>
        </div>
    );
}

export default Portfolio;
