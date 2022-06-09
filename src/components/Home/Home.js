import React from 'react';
import HomeBanner from './HomeBanner';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <Skills />
            <Projects />
        </div>
    );
};

export default Home;