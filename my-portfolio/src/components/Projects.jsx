import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import appTitle from '../assets/travelogger/travelogger-title.png';
import homePage from '../assets/travelogger/travelogger-home.png';
import startSession from '../assets/travelogger/travelogger-started-session.png';
import polylinePrototype from '../assets/travelogger/travelogger-polyline-prototype.jpg';
import polylineFinal from '../assets/travelogger/travelogger-polyline.jpg';


const projects = [
  {
    id: 'travelogger',
    title: 'TraveLogger',
    description: 'TraveLogger is a mobile app that tracks travel sessions, logs locations, counts steps, and provides hands-free operation with voice recognition.',
    github: 'https://github.com/DarianSawali/Portfolio',
    content: (
      <div className='flex flex-col gap-4'>
        <ul className='italic text-gray-300'>
          <li>Date/Timeframe : November 2023, 4 weeks</li>
          <li>Role : Android Studio Developer</li>
          <li>Project Type : Group</li>
          <li>Groupmate: Michael Tjokrowardojo</li>
          <li>Purpose - Academic Project - create an android application</li>
          <li>Tools : Android Studio using Java (Object-Oriented Programming, SQLIte Database, Fragments, Google maps API, and Voice Recognition)</li>
        </ul>
        <div className='flex justify-center py-2'>
          <img src ={appTitle} alt="TraveLogger Title" className=" sm:w-64 md:w-80 lg:w-128 h-auto rounded-md" loading='lazy'/>
        </div>

        <p className='text-gray-200 md:py-2 lg:py-4 md:text-base lg:text-lg'>To enhance the TraveLogger app's functionality, integrating a feature to visualize travel routes on a map was essential. This led to the implementation of polylines, allowing users to see their journey paths. Using the Google Maps API, I started by plotting basic routes. This involved capturing the user’s location data at intervals and rendering it as a polyline on the map. Key challenges included ensuring accuracy and updating the polyline in real-time as the user moved.
        </p>
        <div className='flex justify-center'> 
          <div className='grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-16 items-center justify-center'>
            <img src={homePage} alt="Home page of the app" className="w-56 sm:w-64 md:w-72 lg:w-96 h-auto rounded-md " loading='lazy' />
            <img src={startSession} alt="Started session page" className="w-56 sm:w-64 md:w-72 lg:w-96 h-auto rounded-md" loading='lazy'/>
          </div>
        </div>
        
        {/* <img src="https://via.placeholder.com/300" alt="Project 1" className=" w-72 h-72" /> */}
        <p className='text-gray-200 md:py-2 lg:py-4 md:text-base lg:text-lg'>Through iterative testing, I improved route accuracy and responsiveness. Early versions faced issues with lag and imprecise plotting. Refining the algorithm for location updates and optimizing data handling resolved these problems, resulting in smoother, more accurate route visualization. Iterative testing with various scenarios, including different environments and travel speeds, allowed me to fine-tune these adjustments. Feedback from these tests was crucial in making incremental improvements to the algorithm and data handling processes.</p>

        <p className='text-gray-200 md:py-2 lg:py-4 md:text-base lg:text-lg'>The final polyline feature reliably tracks and displays user routes in real-time, enhancing the app’s usability. Comprehensive testing ensured robust performance across various devices and environments. This project highlights my ability to integrate complex features, problem-solve, and deliver a polished user experience. To further visualize this the first image was one of the early prototypes and the second image below was the final result. Although the final </p>

        <div className='flex justify-center '> 
          <div className='grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-16 items-center justify-center'>
            <img src={polylinePrototype} alt="Prototype Polyline build" className="w-56 sm:w-64 md:w-72 lg:w-96 h-auto rounded-md" loading='lazy'/>
            <img src={polylineFinal} alt="Final Polyline build" className="w-56 sm:w-64 md:w-72 lg:w-96 h-auto rounded-md" loading='lazy'/>
          </div>
        </div>

        <p className='text-gray-200 md:py-2 lg:py-4 md:text-base lg:text-lg'>Despite significant improvements, the polyline accuracy still falls short compared to modern apps. Challenges like real-time data handling and precise location plotting remain. This experience underscored the need for continuous optimization and the importance of balancing feature richness with app responsiveness and user experience. Additionally given further revisions, I would have liked to implement a way to store these pathways for user recollection.</p>
      </div>
    ),
  },
  {
    id: 'project2',
    title: 'TraveLogger',
    description: 'TraveLogger is a mobile app that tracks travel sessions, logs locations, counts steps, and provides hands-free operation with voice recognition.',
    github: '',
    content: (
      <div className='flex flex-col gap-4'>
        <ul className='italic text-gray-300'>
          <li>Date/Timeframe : November 2023, 4 weeks</li>
          <li>Role : Android Studio Developer</li>
          <li>Project Type : Group</li>
          <li>Purpose - Academic Project - create an android application</li>
          <li>Tools : Android Studio using Java (Object-Oriented Programming, SQLIte Database, Fragments, Google maps API, and Voice Recognition)</li>
        </ul>
        <p className='text-gray-200 md:py-2 lg:py-4 md:text-base lg:text-lg'>The need for hands-free interaction during travel sessions led to the integration of a voice recognition function in the TraveLogger app. The goal was to enable users to start and stop sessions, log notes, and access features without manual input. Using Android's built-in SpeechRecognizer class, I began by implementing basic voice command functionality. This involved defining a set of commands and ensuring the app could accurately recognize and respond to them. Key challenges included handling various accents and minimizing background noise interference.
        </p>
        <div className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3'>
          {/* <img src="https://via.placeholder.com/300" alt="Project 1" className=" w-72 h-72" /> */}
        </div>
        
        <p className='text-gray-200 md:py-2 lg:py-4 md:text-base lg:text-lg'>Throughout the development process, iterative testing was crucial. Initial versions faced issues with command accuracy and noise interference. I refined the command set, improved noise filtering, and implemented better feedback mechanisms to inform users when commands were successfully recognized or needed repetition.</p>

        <p className='text-gray-200 md:py-2 lg:py-4 md:text-base lg:text-lg'>The final version of the voice recognition function was robust, allowing users to seamlessly interact with the app. Comprehensive testing ensured reliable performance across different environments and user accents. The successful implementation of this feature demonstrates my ability to think through a problem from start to finish, iterate based on feedback, and deliver a functional and user-friendly solution.</p>

        <p className='text-gray-200 md:py-2 lg:py-4 md:text-base lg:text-lg'>During the development process, I aimed to implement a wake word feature to further enhance the hands-free experience. However, due to limitations in the Android SpeechRecognizer and the additional processing power required, this led to significant lag in the app's performance. Continuous listening for commands proved more efficient, despite the trade-off of constant background processing. This experience underscored the importance of balancing functionality with performance and user experience, a crucial consideration in mobile app development.</p>
      </div>
    ),
  },
  {
    id: 'project3',
    title: 'Project 3',
    description: 'TraveLogger is a mobile app that tracks travel sessions, logs locations, counts steps, and provides hands-free operation with voice recognition.',
    github: '',
    content: (
      <div className='flex flex-col gap-4'>
        <ul className='italic text-gray-300'>
          <li>Date/Timeframe : November 2023, 4 weeks</li>
          <li>Role : Android Studio Developer</li>
          <li>Project Type : Group</li>
          <li>Purpose - Academic Project - create an android application</li>
          <li>Tools : Android Studio using Java (Object-Oriented Programming, SQLIte Database, Fragments, Google maps API, and Voice Recognition)</li>
        </ul>
        <div className='flex justify-center py-2'>
          <img src ={appTitle} alt="TraveLogger Title" className=" sm:w-64 md:w-80 lg:w-128 h-auto rounded-md" loading='lazy'/>
        </div>

        <p className='text-gray-200 md:py-2 lg:py-4 md:text-base lg:text-lg'>To enhance the TraveLogger app's functionality, integrating a feature to visualize travel routes on a map was essential. This led to the implementation of polylines, allowing users to see their journey paths. Using the Google Maps API, I started by plotting basic routes. This involved capturing the user’s location data at intervals and rendering it as a polyline on the map. Key challenges included ensuring accuracy and updating the polyline in real-time as the user moved.
        </p>
        <div className='flex justify-center'> 
          <div className='grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-16 items-center justify-center'>
            <img src={homePage} alt="Home page of the app" className="w-56 sm:w-64 md:w-72 lg:w-96 h-auto rounded-md" loading='lazy'/>
            <img src={startSession} alt="Started session page" className="w-56 sm:w-64 md:w-72 lg:w-96 h-auto rounded-md" loading='lazy'/>
          </div>
        </div>
        
        {/* <img src="https://via.placeholder.com/300" alt="Project 1" className=" w-72 h-72" /> */}
        <p className='text-gray-200 md:py-2 lg:py-4 md:text-base lg:text-lg'>Through iterative testing, I improved route accuracy and responsiveness. Early versions faced issues with lag and imprecise plotting. Refining the algorithm for location updates and optimizing data handling resolved these problems, resulting in smoother, more accurate route visualization.</p>

        <p className='text-gray-200 md:py-2 lg:py-4 md:text-base lg:text-lg'>The final polyline feature reliably tracks and displays user routes in real-time, enhancing the app’s usability. Comprehensive testing ensured robust performance across various devices and environments. This project highlights my ability to integrate complex features, problem-solve, and deliver a polished user experience. To further visualize this the first image was one of the early prototypes and the second image below was the final result. Although the final </p>

        <div className='flex justify-center '> 
          <div className='grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-16 items-center justify-center'>
            <img src={polylinePrototype} alt="Prototype Polyline build" className="w-56 sm:w-64 md:w-72 lg:w-96 h-auto rounded-md" loading='lazy'/>
            <img src={polylineFinal} alt="Final Polyline build" className="w-56 sm:w-64 md:w-72 lg:w-96 h-auto rounded-md" loading='lazy'/>
          </div>
        </div>

        <p className='text-gray-200 md:py-2 lg:py-4 md:text-base lg:text-lg'>Despite significant improvements, the polyline accuracy still falls short compared to modern apps. Challenges like real-time data handling and precise location plotting remain. This experience underscored the need for continuous optimization and the importance of balancing feature richness with app responsiveness and user experience. Additionally given further revisions, I would have liked to implement a way to store these pathways for user recollection.</p>
      </div>
    ),
  },
  
];

const Projects = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    const projectIndex = projects.findIndex((project) => project.id === hash);

    if (projectIndex !== -1) {
      setActiveTab(projectIndex);
    }
  }, [location.hash]);

  const handleTabClick = (index) => {
    setActiveTab(index);
    navigate(`#${projects[index].id}`);
  };

  return (
    <div className='mt-3'>
      <div role="tablist" className="tabs tabs-bordered flex flex-wrap sm:flex-nowrap justify-start px-4">
        {projects.map((project, index) => (
          <a
            key={index}
            role="tab"
            className={`tab ${activeTab === index ? 'tab-active bg-purple-900 rounded-md' : ''} text-zinc-400  sm:px-6 md:pb-8 md:px-8 lg:pb-8 lg:px-10 text-sm sm:text-base md:text-lg lg:text-xl truncate whitespace-nowrap overflow-hidden`}
            onClick={() => handleTabClick(index)}
            href={`#${project.id}`}
            aria-label={`View details of ${project.title}`}
          >
            {project.title}
          </a>
        ))}
      </div>

      <div className="mt-4 px-2 lg:p-4">
        {projects.map((project, index) => (
          <div
            key={index}
            role="tabpanel"
            className={`tab-content ${activeTab === index ? 'block' : 'hidden'}`}
            aria-labelledby={`tab-${project.id}`}
          >
            <div className="card shadow-md bg-slate-800 p-5 sm:p-6 md:p-7 lg:p-8 ">
              <h2 className="font-bold mb-2 text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">{project.title}</h2>
              <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-300 hover:underline transition-all block sm:text-base md:text-lg lg:text-xl xl:text-2xl"
                  aria-label={`View the GitHub repository for ${project.title}`}
                >
                  View on GitHub
              </a>
              <p className="mb-4 text-gray-100 py-2 sm:text-base md:text-lg lg:text-xl xl:text-2xl">{project.description}</p>
              {project.content}
              {/* {project.github && (
                
              )} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;