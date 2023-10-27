import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Project from "./Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("../projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="my-20">
      <h3 className="text-primary text-4xl text-center font-bold mb-10 mt-10">
        FEATURED PROJECTS
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {projects?.slice(0, 4)?.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
      <div className="flex justify-center items-center my-10">
        <Link
          className="btn bg-gradient-to-r from-secondary to-primary text-white font-bold uppercase border-0"
          to="/allproject"
        >
          See All Project
        </Link>
      </div>
    </div>
  );
};

export default Projects;
