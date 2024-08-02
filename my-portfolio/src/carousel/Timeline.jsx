import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import traveloggerTitle from '../assets/travelogger/travelogger-title.png';


// https://mambaui.com/components/timeline
  const projects = [
    {
      id: 'travelogger',
      title: 'TraveLogger',
      description: 'TraveLogger is a mobile app that tracks travel sessions, logs locations, counts steps, and provides hands-free operation with voice recognition.',
      date: 'November 2023',
      content: (
        <div>
          <p>The need for hands-free interaction during travel sessions led to the integration of a voice recognition function in the TraveLogger app.</p>
        </div>
      ),
    },
    {
      id: 'project2',
      title: 'Project 2',
      description: 'Description of Project 2',
      date: 'January 2024',
      content: (
        <div>
          <p>This is the content of Project 2.</p>
        </div>
      ),
    },
    {
      id: 'project3',
      title: 'Project 3',
      description: 'Description of Project 3',
      date: 'March 2024',
      content: (
        <div>
          <p>This is the content of Project 3.</p>
        </div>
      ),
    },
    
  ];

  const Timeline = () => {
    return (
      <div className="container max-w-7xl px-0 lg:px-4 py-12 md:mx-auto">
        <div className="grid gap-4 mx-4 md:grid-cols-12">
          <div className="col-span-12 md:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-purple-900">
              <h3 className="text-3xl font-semibold text-zinc-300">Project Timeline</h3>
              <span className="text-sm font-bold tracking-wider uppercase text-gray-500">Latest Projects</span>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-12">
            <div className="col-span-12 space-y-12 relative px-0 sm:px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
            {projects.map((project, index) => (
              <Link to={`/projects#${project.id}`} key={index} className="block">
                <div
                  className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-purple-900 pl-7 "
                >
                  <div className='hover:scale-105 hover:bg-purple-900 p-4 bg-black rounded-lg cursor-pointer transition-all hover:border hover:text-white'>
                    <h3 className="text-xl font-semibold tracking-wide text-white">{project.title}</h3>
                    <time className="text-xs tracking-wide uppercase text-gray-400">{project.date}</time>
                    <p className="mt-3">{project.description}</p>
                  </div>
                </div>
              </Link>
            ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Timeline;

