import React, { useEffect, useState } from "react";
import Project from "../Home/Project";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("../projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="my-10">
      <h3 className="text-primary text-4xl text-center font-bold mb-10 mt-10">
        Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 px-2 md:px-5">
        {projects?.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
