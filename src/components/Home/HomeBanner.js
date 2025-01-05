import React from "react";
import image from "../../images/arif.png";
import { FaExternalLinkAlt } from "react-icons/fa";

const HomeBanner = () => {
  return (
    <div className="hero bg-primary mb-10 p-5">
      <div className="hero-content flex-col lg:flex-row">
        <img
          width={240}
          height={240}
          src={image}
          className="max-w-sm"
          alt="Md. Arif Mia"
        />
        <div className="text-white">
          <h1 className="text-4xl font-bold">Md. Arif Mia</h1>
          <p className="pb-3 font-bold text-xl">Software Developer</p>
          <p className="pb-6 text-lg">
            I'm passionate about creating web and mobile applications using
            technologies like{" "}
            <span className="font-bold">
              Javascript, Typescript, React.js, React Native, Expo, Next.js,
              Redux, Node.js,Express.js, MongoDB, Mongoose, PostgreSQL, Prisma,
              Drizzle, PHP, Laravel, MySQL
            </span>
            . I've developed mobile apps and websites for various projects. With
            strong educational and professional backgrounds, I'm dedicated to
            delivering innovative solutions. Let's connect to discuss web
            development or explore my work on GitHub and LinkedIn.
          </p>

          <div>
            <p className="font-bold text-xl">Work Experience:</p>
            <p className="font-bold text-md">1. Software Developer at</p>
            <div className="flex items-center">
              <p className="font-bold text-xl pr-2">
                Supreme Supports Pty Ltd,{" "}
                <small>Penrith, NSW,Australia (Remote)</small>
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.supremesupports.com.au"
              >
                <FaExternalLinkAlt size={12} />
              </a>
            </div>
            <p>
              <small className="font-bold">December 2023 to Present</small>
            </p>
          </div>
          <div className="mt-10">
            <p className="font-bold text-md">React Developer at</p>
            <div className="flex items-center">
              <p className="font-bold text-xl pr-2">Seba Automation</p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://sebaautomation.com/"
              >
                <FaExternalLinkAlt size={12} />
              </a>
            </div>
            <p>
              <small className="font-bold">
                July 2022 to October 2023 | Develop 6 mobile applications & 2
                website
              </small>
            </p>
          </div>
          <br />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/108UxhkwdJVqY5b9iQ_1J5Yfn6ffktRVl/view?usp=drive_link"
            className="border-white border-2 px-5 py-2 rounded-lg font-bold bg-primary text-white"
          >
            Hire Me!
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
