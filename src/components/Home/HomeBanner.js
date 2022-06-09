import React from 'react';
import image from "../../images/arif.jpg";

const HomeBanner = () => {
    return (
        <div className="hero bg-primary mb-10">
            <div className="hero-content flex-col lg:flex-row">
                <img width={240} heighg={240} src={image} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div className='text-white'>
                    <h3 className="text-4xl font-bold">Md. Arif Mia</h3>
                    <p className="pt-6 pb-3 font-bold">MERN Stack Developer | Gain detailed knowledge about web applications so that I can improve myself | Senior Web Developer</p>
                    <p className="pb-6">I am a MERN Stack Developer. I've been working with a full stack website for a long time. Since I enjoy working with full stack web applications, I'm working on it.
                        <br />
                        Things I like, #JavaScript, #React.js, #Node.js, #MongoDB, #Express.js, #Firebase, #HTML, #CSS
                    </p>

                    <a target="_blank" rel="noreferrer" href='https://drive.google.com/file/d/1CkdgzTrUd-Du7yCGDF9Ed_rlNLmud9N1/view?usp=sharing' className="border-white border px-5 py-2 rounded-lg font-bold bg-secondary">Hire Me!</a>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;