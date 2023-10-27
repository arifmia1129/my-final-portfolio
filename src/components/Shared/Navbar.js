import React from "react";
import { FiGithub } from "react-icons/fi";
import { ImLinkedin2 } from "react-icons/im";
import { BsStackOverflow } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const menutItems = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-white text-white border-2 bg-primary"
              : "font-bold text-white"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-white text-white border-2 bg-primary"
              : "font-bold text-white"
          }
          to="/allproject"
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-white text-white border-2 bg-primary"
              : "font-bold text-white"
          }
          to="/blogs"
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-white text-white border-2 bg-primary"
              : "font-bold text-white"
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-white text-white border-2 bg-primary"
              : "font-bold text-white"
          }
          to="/about"
        >
          About
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-gradient-to-r from-secondary to-primary text-white font-bold uppercase border-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gradient-to-r from-secondary to-primary text-white font-bold uppercase border-0 rounded-box w-52"
          >
            {menutItems}
          </ul>
        </div>
        <div className="flex justify-around items-center">
          <a
            className="mx-3"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/arifmia1129"
          >
            <FiGithub size={25} />
          </a>
          <a
            className="mx-3"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/arifmia"
          >
            <ImLinkedin2 size={25} />
          </a>
          <a
            className="mx-3"
            target="_blank"
            rel="noreferrer"
            href="https://stackoverflow.com/users/18394074/arif"
          >
            <BsStackOverflow size={25} />
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menutItems}</ul>
      </div>
      <div className="navbar-end">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/11irnh5Jkc602fltInnGRIenQofZeysb0/view?usp=sharing"
          className="border-white border-2 px-5 py-2 rounded-lg"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
