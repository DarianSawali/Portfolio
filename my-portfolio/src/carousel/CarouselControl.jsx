import React from 'react';


const CarouselControl = ({ totalSlides }) => {
  return (
    <div className="flex justify-center mt-4 space-x-2">
      {Array.from({ length: totalSlides }, (_, index) => (
        <div key={index} className="space-x-2">
          <a href={`#slide${index + 1}`} className="btn btn-circle">
            ❮
          </a>
          <a href={`#slide${(index + 2) > totalSlides ? 1 : index + 2}`} className="btn btn-circle">
            ❯
          </a>
        </div>
      ))}
    </div>
  );
};

export default CarouselControl;