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
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div>
                <img src={contact} alt="" />
            </div>
            <div className='flex justify-center items-center'>
                <form onSubmit={handleSubmit}>
                    <h3 className='text-primary text-2xl text-center font-bold mb-5'>Contact With Me</h3>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Full Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Enter your full name" class="input input-bordered w-96" required />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="email" name='user_email' placeholder="Enter your valid email" class="input input-bordered w-96" required />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Your Message</span>
                        </label>
                        <textarea name="msg" class="textarea textarea-bordered h-24 w-96" placeholder="Enter your message" required></textarea>
                    </div>
                    <div className='flex justify-center items-center'>
                        <input className="btn bg-gradient-to-r from-secondary to-primary text-white font-bold uppercase border-0 mt-5 mx-auto w-full" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Contact;