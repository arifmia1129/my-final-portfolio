import React from "react";
import { TiTick } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
const Project = ({ project }) => {
  const { id, name, technology, img, shortDescription } = project;
  const navigate = useNavigate();
  return (
    <div className="card bg-base-100 shadow-xl border-2 border-primary">
      <div className="w-full px-3 h-52 mb-5 overflow-y-scroll">
        <img src={img[0]} alt="" />
      </div>
      <div className="card-body">
        <h2 className="text-2xl font-bold text-center mb-5">{name}</h2>
        <div className="h-24">
          <p>{shortDescription}</p>
        </div>
        <div className="grid grid-cols-2">
          {technology.map((s, index) => (
            <p key={index} className="flex items-center">
              <TiTick className="text-secondary" /> {s}
            </p>
          ))}
        </div>
      </div>
      <button
        onClick={() => navigate(`/detail/${id}`)}
        className="btn bg-gradient-to-r from-secondary to-primary text-white font-bold uppercase border-0"
      >
        Details
      </button>
    </div>
  );
};

export default Project;
