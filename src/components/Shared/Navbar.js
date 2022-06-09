import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { ImLinkedin2 } from 'react-icons/im';
import { BsStackOverflow } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="navbar bg-gradient-to-r from-secondary to-primary text-white font-bold uppercase border-0">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to="/">About</NavLink></li>
                        <li><NavLink to="/allproject">Projects</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
                <div className='flex justify-around items-center'>
                    <a className='mx-3' target="_blank" rel="noreferrer" href="https://github.com/arifmia1129">
                        <FiGithub />
                    </a>
                    <a className='mx-3' target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/arifmia">
                        <ImLinkedin2 />
                    </a>
                    <a className='mx-3' target="_blank" rel="noreferrer" href="https://stackoverflow.com/users/18394074/arif">
                        <BsStackOverflow />
                    </a>
                </div>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><NavLink to="/">About</NavLink></li>
                    <li><NavLink to="/allproject">Projects</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
            <div class="navbar-end">
                <a target="_blank" rel="noreferrer" href='https://drive.google.com/file/d/1CkdgzTrUd-Du7yCGDF9Ed_rlNLmud9N1/view?usp=sharing' className="border-white border-2 p-1 rounded-lg">Resume</a>
            </div>
        </div>
    );
};

export default Navbar;