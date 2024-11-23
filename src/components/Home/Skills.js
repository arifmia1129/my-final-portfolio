import React from "react";
import Skill from "./Skill";

const Skills = () => {
  const skills = [
    {
      id: 1,
      name: "Frontend",
      skills: [
        "Javascript",
        "React",
        "React Native",
        "Redux",
        "Next JS",
        "Bootstrap & Tailwind",
      ],
    },
    {
      id: 2,
      name: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "Typescript",
        "Mongoose",
        "Prisma",
        "Redis",
      ],
    },
    {
      id: 3,
      name: "Database",
      skills: ["MongoDB", "PostgreSQL", "MySQL"],
    },
    {
      id: 4,
      name: "Deployment",
      skills: ["CPanel", "Webuzo", "Netlify", "Vercel", "Firebase", "Heroku"],
    },
    {
      id: 5,
      name: "Tools",
      skills: [
        "Github",
        "VS Code",
        "Chrome DevTools",
        "Photoshop",
        "Figma",
        "Jira",
      ],
    },
    {
      id: 6,
      name: "Other",
      skills: ["Dart", "Flutter", "C Programming"],
    },
  ];
  return (
    <div>
      <h3 className="text-primary text-4xl text-center font-bold mb-5 mt-10">
        SKILLS OVERVIEW
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {skills.map((skill) => (
          <Skill key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
