import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TiTick } from "react-icons/ti";
const Detail = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("../projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  const { id } = useParams();
  const project = projects.find((p) => parseInt(p.id) === parseInt(id));
  const { name, description, technology, img, link } = project || {};

  return (
    <div className="my-10 px-2 md:px-5">
      <h2 className="text-2xl font-bold text-primary text-center">
        Project: {name}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-5">
        {img?.map((image, index) => (
          <div key={index} className="h-44 overflow-y-scroll">
            <img className="w-full" src={image} alt="project" />
          </div>
        ))}
      </div>
      <div className="mb-3">
        <h2 className="text-xl font-bold text-primary">Description:</h2>
        <div className="px-2">
          {description?.map((s, index) => (
            <p key={index} className="flex items-center">
              <TiTick className="text-secondary" /> {s}
            </p>
          ))}
        </div>
      </div>
      <div className="mb-3">
        <h2 className="text-xl font-bold text-primary">Technology:</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1">
          {technology?.map((s, index) => (
            <p key={index} className="flex items-center">
              <TiTick className="text-secondary" /> {s}
            </p>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold text-primary">Links:</h2>
        {link?.map((l, i) => (
          <a
            key={i}
            target="_blank"
            rel="noreferrer"
            href={l?.link}
            className="btn bg-gradient-to-r from-secondary to-primary text-white font-bold uppercase border-0 m-1"
          >
            {l?.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Detail;
