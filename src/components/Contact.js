import React from 'react';
import contact from "../images/contact.jpg";
const Contact = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div>
                <img src={contact} alt="" />
            </div>
            <div className='flex justify-center items-center'>

                <form action="">
                    <h3 className='text-primary text-2xl text-center font-bold mb-5'>Contact With Me</h3>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Full Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Enter your full name" class="input input-bordered w-96" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="text" name='name' placeholder="Enter your valid email" class="input input-bordered w-96" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Your Message</span>
                        </label>
                        <textarea class="textarea textarea-bordered h-24 w-96" placeholder="Enter your message"></textarea>
                    </div>
                    <div className='flex justify-center items-center'>
                        <input className="btn bg-gradient-to-r from-secondary to-primary text-white font-bold uppercase border-0 mt-5 mx-auto w-full" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;