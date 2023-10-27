import React from "react";
import img from "../images/arif.png";

const About = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-4">About Me</h2>
      <div className="flex flex-col sm:flex-row justify-center items-center mb-6">
        <img
          className="w-40 h-40 rounded-full object-cover mx-auto sm:mr-6"
          src={img}
          alt="Arif"
        />
        <p className="text-center sm:text-left mt-4 sm:mt-0">
          Hi, I'm Arif. I work with websites and apps. I've been doing this for
          about a year and have completed various projects. I find joy in
          creating things on the web, and I aspire to keep growing in this
          field.
        </p>
      </div>

      <h3 className="text-xl font-bold mt-4">Skills & Interests</h3>
      <ul className="list-disc ml-6">
        <li>
          Frontend: I'm skilled in React, JavaScript, HTML, CSS, and making
          websites look nice.
        </li>
        <li>
          Backend: I work with Node.js, databases like MongoDB, and server-side
          technologies.
        </li>
        <li>
          Learning: I'm always eager to learn new technologies and improve my
          skills.
        </li>
      </ul>

      <h3 className="text-xl font-bold mt-4">Career Goals</h3>
      <p>
        I'm looking for opportunities to work in companies where I can
        contribute my skills and, at the same time, continue learning and
        growing.
      </p>

      <h3 className="text-xl font-bold mt-4">Hobbies</h3>
      <p>
        Outside of work, I enjoy reading books, learning new things, and
        organizing activities.
      </p>
    </div>
  );
};

export default About;
