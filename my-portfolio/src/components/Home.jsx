import React from 'react';
import Carousel from '../carousel/Carousel';
import Timeline from '../carousel/Timeline';
import About from './About';

const Home = () => {
  return (
    <div className="container mx-auto">
      <section id="about">
        <About />
      </section>
      <section id="carousel" className="p-4">
        <Timeline />
      </section>
    </div>
  );
};

export default Home;