import React from "react";
import HomeBanner from "./HomeBanner";
import Projects from "./Projects";
import Skills from "./Skills";
import Achivement from "./Achivement";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <div className="mx-5">
        <Skills />
        <Projects />
        <Achivement />
      </div>
    </div>
  );
};

export default Home;
