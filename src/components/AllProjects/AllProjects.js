import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleProject from './SingleProject';

const AllProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("projects.json")
            .then(res => res.json())
            .then(data => setProjects(data));
    }, [])
    return (
        <div className='my-10'>
            <h3 className='text-primary text-2xl text-center font-bold mb-5'>Featured Projects</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:px-32 px-5'>
                {
                    projects?.map(project => <SingleProject
                        key={project.id}
                        project={project}
                    />)
                }
            </div>
        </div>
    );
};

export default AllProjects;