import React from 'react';
import useProjects from '../../hooks/useProjects';
import SingleProject from './SingleProject';

const AllProjects = () => {
    const [projects] = useProjects();
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