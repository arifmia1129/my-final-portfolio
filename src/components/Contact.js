import React from 'react';
import contact from "../images/contact.jpg";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_yrg1mqo", "template_7yedum9", e.target, "NxGgDvRjRoTbpZsFb").then(res => {
            if (res.text === "OK") {
                toast.success("Your information received!");
                e.target.reset();
            }
        });
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 my-10 '>
            <div>
                <img src={contact} alt="" />
            </div>
            <div className='flex justify-center items-center'>
                <form onSubmit={handleSubmit}>
                    <h3 className='text-primary text-2xl text-center font-bold mb-5'>Contact With Me</h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Enter your full name" className="input input-bordered w-72 md:w-96" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='user_email' placeholder="Enter your valid email" className="input input-bordered w-72 md:w-96" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Message</span>
                        </label>
                        <textarea name="msg" className="textarea textarea-bordered h-24 w-72  md:w-96" placeholder="Enter your message" required></textarea>
                    </div>
                    <div className='flex justify-center items-center'>
                        <input className="btn bg-gradient-to-r from-secondary to-primary text-white font-bold uppercase border-0 mt-5 mx-auto w-72 md:w-96" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Contact;