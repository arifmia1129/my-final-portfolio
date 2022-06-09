import React from 'react';
import { TiTick } from 'react-icons/ti';
const SingleProject = ({ project }) => {
    const { name, technology, link } = project;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className='w-full px-3'>
                <iframe title='my' src={link} className='w-full'></iframe>
            </div>
            <div className="card-body">
                <h2 className="text-2xl font-bold text-center mb-5">{name}</h2>
                <div className='grid grid-cols-3'>
                    {
                        technology.map((s, index) => <p
                            key={index}
                            className='flex items-center'>
                            <TiTick className='text-secondary' /> {s}
                        </p>)
                    }
                </div>
            </div>
            <a className="btn bg-gradient-to-r from-secondary to-primary text-white font-bold uppercase border-0" target="_blank" rel="noreferrer" href={link}>Live Side</a>
        </div>
    );
};

export default SingleProject;