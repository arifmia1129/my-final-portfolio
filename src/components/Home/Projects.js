import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("projects.json")
            .then(res => res.json())
            .then(data => setProjects(data));
    }, [])
    return (
        <div className='my-10'>
            <h3 className='text-primary text-2xl text-center font-bold mb-5'>Featured Projects</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    projects?.slice(0, 3)?.map(project => <Project
                        key={project.id}
                        project={project}
                    />)
                }
            </div>
            <div className='flex justify-center items-center my-10'>
                <Link className="btn bg-gradient-to-r from-secondary to-primary text-white font-bold uppercase border-0" to="/allproject">See All Project</Link>
            </div>
        </div>
    );
};

export default Projects;