import React, { useState } from 'react';
import traveloggerTitle from '../assets/travelogger/travelogger-title.png';

const projects = [
    { 
      title: 'TraveLogger', 
      description: 'TraveLogger is a mobile app that tracks travel sessions, logs locations, counts steps, and provides voice recognition for hands-free operation.', 
      img: traveloggerTitle
    },
    { 
      title: 'Project 2', 
      description: 'Description of Project 2', 
      img: 'https://via.placeholder.com/300' 
    },
    { 
      title: 'Project 3', 
      description: 'Description of Project 3', 
      img: 'https://via.placeholder.com/300' 
    },
  ];
  
  const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };
  
    return (
      <div className="relative w-full mx-auto">
        <div className="relative h-64 md:h-80 lg:h-128 xl:h-160 overflow-hidden rounded-xl">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform transform ${
                index === currentIndex ? 'translate-x-0' : 'translate-x-full'
              }`}
              style={{ transitionDuration: '350ms' }}
            >
              <div className="flex h-full bg-purple-900 shadow-md">
                <div className="w-1/3 p-4 ml-7 my-auto">
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <p className="mt-2 text-gray-200 pt-2">{project.description}</p>
                </div>
                <div className="w-2/3">
                  <img src={project.img} className="w-full h-full object-cover" alt={project.title} />
                </div>
              </div>
              
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full"
        >
          ❯
        </button>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 p-4">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
            ></button>
          ))}
        </div>
      </div>
    );
  };
  
  export default Carousel;


