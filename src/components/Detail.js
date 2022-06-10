import React from 'react';
import { useParams } from 'react-router-dom';
import { TiTick } from 'react-icons/ti';
const Detail = () => {
    const projects = [
        {
            id: 1,
            name: "A&B-Group",
            description: [
                "Display navbar, banner, products, review, footer on home page",
                "Click purchase button for confirm order",
                "Go to my orders page under dashboard route you can see your all orders and also payment via card",
                "Receive email when you confirm order and complete payment",
                "use firebase for authentication"
            ],
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
            description: [
                "Home route display banner, all products details, show 6 items with details, use pie chart so that its display product stock.",
                "nventory/:id route work with single product. If you click delivered btn quantity decrement and use input field for added quantity",
                "blog route display four question answer.",
                "manage-items route display all product and you can do delete operation in products.",
                "add-item route give you a form so that you can insert your data to database"
            ],
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
            description: [
                "Used three hero cards draggable and rearrangeable.",
                "[ Crypto / Stock Details Table] Retrieve and show details - Company/Crypto Name, Stock/Crypto Symbol, Market Cap / Current Price of the stocks/crypto in a 5-row table with pagination.",
                "[ Crypto / Stock Details Table] Search using Company/Crypto Name and display result stocks in the table, Save Data.Saved Data Table] Delete & Retrieve Data using MongoDB and Node-Express API endpoints.",
                "Navigation between Stock/Crypto Details Table page (/home) and Saved Data Tables Page(/view)."
            ],
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
            description: [
                "You can added your task with description.",
                "Display your task that you added.",
                "After complete your task you can pressed complete button.",
                "Also you can delete your task.",
                "See toast for delete, complete and new added task."
            ],
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
            description: [
                "Added banner in Home page",
                "Use React Route",
                "Display Service Card in Home page",
                "Also added blogs and about route",
                "use firebase for authentication"
            ],
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
            description: [
                "Home page banner.",
                "Display 3 customer review in Home page",
                "Use React Recharts for show chart in Dashboard Route",
                "Also added Reviews, Blogs and About Route",
                "Use active Route with React Router"
            ],
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
            description: [
                "Display 12 courses",
                "You can chose 4 course",
                "After clicked Perfect Course for You Button you can see a course from selected 4 course",
                "Randomly course select.",
                "Use chose again button and answer for three questions."
            ],
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
            description: [
                "Use 5 input filed and two button",
                "You can added income, expenses",
                "Expenses for food, rent and clothes",
                "After clicked calculate button you can see total expenses and available balance",
                "After clicked save button you can see saving amount and remaining balance."
            ],
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
                <div className='px-2'>
                    {
                        description.map((s, index) => <p
                            key={index}
                            className='flex items-center'>
                            <TiTick className='text-secondary' /> {s}
                        </p>)
                    }
                </div>
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