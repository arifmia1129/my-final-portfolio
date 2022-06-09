import React from 'react';
import { TiTick } from 'react-icons/ti';

const Skill = ({ skill }) => {
    const { name, skills } = skill;
    return (
        <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="text-2xl font-bold text-center mb-5">{name}</h2>
                <div>
                    {
                        skills.map((s, index) => <p
                            key={index}
                            className='flex items-center'>
                            <TiTick className='text-secondary' /> {s}
                        </p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Skill;