import React from 'react';
import image from "../../images/arif.png";
import { FaExternalLinkAlt } from 'react-icons/fa';
const HomeBanner = () => {
    return (
        <div className="hero bg-primary mb-10">
            <div className="hero-content flex-col lg:flex-row">
                <img width={240} heighg={240} src={image} className="max-w-sm" alt='' />
                <div className='text-white'>
                    <h3 className="text-4xl font-bold">Md. Arif Mia</h3>
                    <p className="pb-3 font-bold text-xl">Web Developer (MERN)</p>
                    <p className="pb-6">I have been working with web applications for 1+ year. I am always trying to learn something new to take a step forward. I can't do everything but I can learn anything for work.
                        <br />
                        Technologies that I like, <span className='font-bold'>#JavaScript, #React.js, #Node.js, #MongoDB, #Express.js, #Firebase, #HTML, #CSS</span>
                    </p>

                    <div>
                        <p className="font-bold text-xl">Work Experience:</p>
                        <p className="font-bold text-md">React Developer,</p>
                        <div className='flex items-center mb-5'>
                            <p className="pb-3 font-bold text-xl pr-2">Seba Automation</p>
                            <a target="_blank" rel="noreferrer" href='https://sebaautomation.com/' >
                                <FaExternalLinkAlt size={12} />
                            </a>
                        </div>
                    </div>

                    <a target="_blank" rel="noreferrer" href='https://drive.google.com/file/d/11irnh5Jkc602fltInnGRIenQofZeysb0/view?usp=sharing' className="border-white border px-5 py-2 rounded-lg font-bold bg-secondary">Hire Me!</a>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;