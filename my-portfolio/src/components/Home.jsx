import React from 'react';
import Carousel from '../carousel/Carousel';
import About from './About';

const Home = () => {
  return (
    <div className="container mx-auto">
      <section id="about">
        <About />
      </section>
      <section id="carousel" className="mt-8">
        <Carousel />
      </section>
    </div>
  );
};

export default Home;