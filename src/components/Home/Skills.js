import React from 'react';
import Skill from './Skill';

const Skills = () => {
    const skills = [
        { id: 1, name: "Frontend", skills: ["React JS", "Javascript", "Firebase", "HTML", "CSS"] },
        { id: 2, name: "Backend", skills: ["Node JS", "MongoDB", "Express JS", "Stripe", "Sendgrid"] },
        { id: 3, name: "Others", skills: ["VS Code", "Github", "Chrome Dev Tools", "Figma", "Netlify, Heroku"] },
    ]
    return (
        <div>
            <h3 className='text-primary text-2xl text-center font-bold'>Skills Overview</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:px-32 px-5'>
                {
                    skills.map(skill => <Skill
                        key={skill.id}
                        skill={skill}
                    />)
                }
            </div>
        </div>
    );
};

export default Skills;