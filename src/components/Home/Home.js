import React from "react";
import HomeBanner from "./HomeBanner";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <div className="mx-5">
        <Skills />
        <Projects />
      </div>
    </div>
  );
};

export default Home;
