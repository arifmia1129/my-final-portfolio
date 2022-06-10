import React from 'react';
import { useParams } from 'react-router-dom';
import { TiTick } from 'react-icons/ti';
const Detail = () => {
    const projects = [
        {
            id: 1,
            name: "A&B-Group",
            description: "This is full stack website that for manufacturer company.",
            technology: [
                "react.js",
                "firebase",
                "node.js",
                "express.js",
                "mongodb",
                "tailwind",
                "daisyui",
                "sendgrid",
                "stripe"
            ],
            img: [
                "https://i.ibb.co/kXsjgnX/ab-1.jpg",
                "https://i.ibb.co/QjrzV8Y/ab-2.jpg",
                "https://i.ibb.co/zQyM0jF/ab-3.jpg"
            ],
            link: [
                "https://a-b-group.web.app",
                "https://github.com/arifmia1129/a-b-group-full-stack-manufacturer-website-client-side",
                "https://github.com/arifmia1129/a-b-group-full-stack-manufacturer-website-server-side"
            ]
        },
        {
            id: 2,
            name: "Laptop-City",
            description: "This is full stack website that for management warehouse.",
            technology: [
                "react.js",
                "firebase",
                "node.js",
                "express.js",
                "mongodb"
            ],
            img: [
                "https://i.ibb.co/VmGG1t8/laptop-1.jpg",
                "https://i.ibb.co/nQ8mS3C/laptop-2.jpg",
                "https://i.ibb.co/K5Z8MFR/laptop-3.jpg"
            ],
            link: [
                "https://laptop-city-inventory.web.app",
                "https://github.com/arifmia1129/laptop-city-client",
                "https://github.com/arifmia1129/laptop-city-server"
            ]
        },
        {
            id: 3,
            name: "Quikie App",
            description: "This is full stack website that for manage public crypto api and saved data to own database.",
            technology: [
                "react.js",
                "tailwind",
                "node.js",
                "express.js",
                "mongodb"
            ],
            img: [
                "https://i.ibb.co/XbPV6fy/quikie-1.jpg",
                "https://i.ibb.co/zm6ymMB/quikie-2.jpg",
                "https://i.ibb.co/dkSM3Fp/quikie-3.jpg"
            ],
            link: [
                "https://quikie-app.netlify.app",
                "https://github.com/arifmia1129/quikie-app-client",
                "https://github.com/arifmia1129/quikie-app-server"
            ]
        },
        {
            id: 4,
            name: "Master To Do",
            description: "This is full stack website that for manage to do list.",
            technology: [
                "react.js",
                "firebase",
                "node.js",
                "express.js",
                "mongodb"
            ],
            img: [
                "https://i.ibb.co/XzrcFYF/todo-1.jpg",
                "https://i.ibb.co/b2KyT3M/todo-2.jpg",
                "https://i.ibb.co/yP7Vs7B/todo-3.jpg"
            ],
            link: [
                "https://master-to-do.web.app",
                "https://github.com/arifmia1129/master-to-do-client",
                "https://github.com/arifmia1129/master-to-do-server"
            ]
        },
        {
            id: 5,
            description: "This is front end website that make sure authentication with use google firebase.",
            name: "Doctor Khana",
            technology: [
                "react.js",
                "firebase",
                "react bootstrap",
                "react route",
                "react toastify"
            ],
            img: [
                "https://i.ibb.co/njnsK7F/doctorkhana-1.jpg",
                "https://i.ibb.co/Y0bjDZ5/doctorkhana-2.jpg",
                "https://i.ibb.co/SrDGmsL/doctorkhana-3.jpg"
            ],
            link: [
                "https://doctor-khana.web.app",
                "https://github.com/arifmia1129/doctor-khana"
            ]
        },
        {
            id: 6,
            name: "Product Analyst",
            description: "This is front end website that for analysis the product and display user review. Make sure route with use react route.",
            technology: [
                "react.js",
                "react route",
                "rechart",
                "tailwind"
            ],
            img: [
                "https://i.ibb.co/6NXTKsp/productanalyst-1.jpg",
                "https://i.ibb.co/HPPmP4f/productanalyst-2.jpg",
                "https://i.ibb.co/QKMcHby/productanalyst-3.jpg"
            ],
            link: [
                "https://project-analyst-react-project.netlify.app",
                "https://github.com/arifmia1129/project-analysis",
            ]
        },
        {
            id: 7,
            name: "Perfect Course Selector",
            description: "This is front end website for select the randomly from selected four course.",
            technology: [
                "react.js",
                "react route",
                "bootstrap"
            ],
            img: [
                "https://i.ibb.co/6smWFzR/courseselector-1.jpg",
                "https://i.ibb.co/Nt7NBZG/courseselector-2.jpg",
                "https://i.ibb.co/p2vq0Sb/courseselector-3.jpg"
            ],
            link: [
                "https://perfect-course-selector-react-project-assignment-8.netlify.app",
                "https://github.com/arifmia1129/perfect-course-selector",
            ]
        },
        {
            id: 8,
            description: "This is front end website for manage income, saving and expense",
            name: "Money Master",
            technology: [
                "Javascript",
                "HTML",
                "CSS",
                "bootstrap"
            ],
            img: [
                "https://i.ibb.co/hVDkCDN/manager-1.jpg",
                "https://i.ibb.co/YhGrXLg/manager-2.jpg",
                "https://i.ibb.co/kgYG2JT/manager-3.jpg"
            ],
            link: [
                "https://money-master-js-project.netlify.app",
                "https://github.com/arifmia1129/money-master"
            ]
        }
    ]
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));
    const { name, description, technology, img, link } = project;
    return (
        <div className='my-10'>
            <h2 className='text-2xl font-bold text-primary text-center'>Project: {name}</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 my-5'>
                <img className='w-full h-56' src={img[0]} alt="" />
                <img className='w-full h-56' src={img[1]} alt="" />
                <img className='w-full h-56' src={img[2]} alt="" />
            </div>
            <div className='mb-3'>
                <h2 className='text-xl font-bold text-primary'>Description:</h2>
                <p>{description}</p>
            </div>
            <div className='mb-3'>
                <h2 className='text-xl font-bold text-primary'>Technology:</h2>
                <div className='grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1'>
                    {
                        technology.map((s, index) => <p
                            key={index}
                            className='flex items-center'>
                            <TiTick className='text-secondary' /> {s}
                        </p>)
                    }
                </div>
            </div>
            <div>
                <h2 className='text-xl font-bold text-primary'>Links:</h2>
                <a target="_blank" rel="noreferrer" href={link[0]} className="btn bg-gradient-to-r from-secondary to-primary text-white font-bold uppercase border-0 m-1">Live Side
                </a>
                <a target="_blank" rel="noreferrer" href={link[1]} className="btn bg-gradient-to-r from-secondary to-primary text-white font-bold uppercase border-0 m-1">Github Client
                </a>
                {
                    link[2] && <a target="_blank" rel="noreferrer" href={link[2]} className="btn bg-gradient-to-r from-secondary to-primary text-white font-bold uppercase border-0 m-1">Github Server
                    </a>
                }
            </div>
        </div>
    );
};

export default Detail;