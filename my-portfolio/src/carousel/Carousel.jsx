import React, { useState } from 'react';

const projects = [
    { title: 'Project 1', description: 'Description of Project 1' },
    { title: 'Project 2', description: 'Description of Project 2' },
    { title: 'Project 3', description: 'Description of Project 3' },
    { title: 'Project 4', description: 'Description of Project 4' },
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
        <div className="relative w-full flex justify-center items-center">
        <div className="carousel relative w-full flex justify-center items-center">
            {projects.map((project, index) => {
            const isActive = index === currentIndex;
            const isPrev = index === (currentIndex - 1 + projects.length) % projects.length;
            const isNext = index === (currentIndex + 1) % projects.length;

            let className = 'carousel-item absolute transition-opacity duration-500 ease-in-out';
            if (isActive) {
                className += ' opacity-100 scale-100 z-10';
            } else if (isPrev || isNext) {
                className += ' opacity-50 scale-75';
            } else {
                className += ' opacity-0';
            }

            return (
                <div key={index} className={className}>
                <div className="bg-white p-4 shadow-md flex items-center justify-center w-64 h-64 mx-2">
                    <div>
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="mt-2">{project.description}</p>
                    </div>
                </div>
                </div>
            );
            })}
        </div>
            <button onClick={prevSlide} className="absolute left-0 btn btn-circle">❮</button>
            <button onClick={nextSlide} className="absolute right-0 btn btn-circle">❯</button>
        </div>
    );
};


export default Carousel




//     return (
//         <div className="carousel w-full">
//           {projects.map((project, index) => (
//             <div id={`slide${index + 1}`} className="carousel-item relative w-full" key={index}>
//               <div className="bg-white p-4 shadow-md flex items-center justify-center w-full h-64 rounded-xl">
//                 <div>
//                   <h3 className="text-lg font-bold">{project.title}</h3>
//                   <p className="mt-2">{project.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//     );
// };