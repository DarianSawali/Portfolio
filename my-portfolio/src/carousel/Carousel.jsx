import React, { useState } from 'react';

const projects = [
    { title: 'Project 1', description: 'Description of Project 1', img: 'https://via.placeholder.com/300' },
    { title: 'Project 2', description: 'Description of Project 2', img: 'https://via.placeholder.com/300' },
    { title: 'Project 3', description: 'Description of Project 3', img: 'https://via.placeholder.com/300' },
    { title: 'Project 4', description: 'Description of Project 4', img: 'https://via.placeholder.com/300' },
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
        <div className="relative h-64 md:h-80 lg:h-128 xl:h-160 overflow-hidden rounded-lg">
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
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <p className="mt-2">{project.description}</p>
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



// const projects = [
//     { title: 'Project 1', description: 'Description of Project 1' },
//     { title: 'Project 2', description: 'Description of Project 2' },
//     { title: 'Project 3', description: 'Description of Project 3' },
//     { title: 'Project 4', description: 'Description of Project 4' },
//   ];

// const Carousel = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const nextSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
//     };

//     const prevSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
//     };

//     return (
//         <div className="relative w-full flex justify-center items-center">
//         <div className="carousel relative w-full flex justify-center items-center">
//             {projects.map((project, index) => {
//             const isActive = index === currentIndex;
//             const isPrev = index === (currentIndex - 1 + projects.length) % projects.length;
//             const isNext = index === (currentIndex + 1) % projects.length;

//             let className = 'carousel-item absolute transition-opacity duration-500 ease-in-out';
//             if (isActive) {
//                 className += ' opacity-100 scale-100 z-10';
//             } else if (isPrev || isNext) {
//                 className += ' opacity-50 scale-75';
//             } else {
//                 className += ' opacity-0';
//             }

//             return (
//                 <div key={index} className={className}>
//                 <div className="bg-white p-4 shadow-md flex items-center justify-center w-64 h-64 mx-2">
//                     <div>
//                     <h3 className="text-lg font-bold">{project.title}</h3>
//                     <p className="mt-2">{project.description}</p>
//                     </div>
//                 </div>
//                 </div>
//             );
//             })}
//         </div>
//             <button onClick={prevSlide} className="absolute left-0 btn btn-circle">❮</button>
//             <button onClick={nextSlide} className="absolute right-0 btn btn-circle">❯</button>
//         </div>
//     );
// };


// export default Carousel




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