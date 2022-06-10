import React from 'react';
import img from "../images/arif.jpg";

const About = () => {
    return (
        <div className='my-10'>
            <div>
                <p className='font-bold'>Me:</p>
                <div className='flex items-center'>
                    <img width={60} height={60} src={img} alt="" />
                    <p className='ml-3'>
                        I am Arif. I am a MERN Stack developer. I have been working on the web for about 1 year. I have already done many projects. I enjoy working with the web. I want to be more proficient at it and work on it for a long time.
                    </p>
                </div>
            </div>
            <p className='text-xl font-bold my-3 text-center'>"I don't have all the skills but I'm ready to learn any skill I need."</p>
            <div className='my-3'>
                <p className='font-bold'>Interested Technology:</p>
                <p>
                    React JS, Javascript, Node JS, Express JS, MongoDB, HTML, CSS, Firebase etc.
                </p>
            </div>
            <div className='my-3'>
                <p className='font-bold'>Company of Choice:</p>
                <p>
                    I want to work in companies where I can apply my skills to the maximum and at the same time improve my skills constantly.
                </p>
            </div>
            <div className='my-3'>
                <p className='font-bold'>Hobby:</p>
                <p>
                    Reading books | Learning something new | Organizing something
                </p>
            </div>
        </div>
    );
};

export default About;