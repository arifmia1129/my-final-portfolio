import React from "react";
import { TiTick } from "react-icons/ti";

const Skill = ({ skill }) => {
  const { name, skills } = skill;
  return (
    <div className="card bg-base-100 shadow-xl border-primary border-2">
      <div className="card-body">
        <h2 className="text-3xl text-primary font-bold text-center mb-5">
          {name}
        </h2>
        <div>
          {skills.map((s, index) => (
            <p key={index} className="flex items-center">
              <TiTick className="text-secondary" /> {s}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
