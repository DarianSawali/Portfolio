import React, { useState } from 'react';

const projects = [
  {
    title: 'TraveLogger',
    description: 'Description',
    content: (
      <div className='flex flex-col gap-4'>
        <ul className='italic text-gray-300'>
          <li>Date/Timeframe : November 2023, 4 weeks</li>
          <li>Role : Android Studio Developer</li>
          <li>Project Type : Group</li>
          <li>Purpose - Academic Project - create an android application</li>
          <li>Tools : Android Studio using Java (Object-Oriented Programming, SQLIte Database, Fragments, Google maps API, and Voice Recognition)</li>
        </ul>
        <p className='text-gray-200'>The need for hands-free interaction during travel sessions led to the integration of a voice recognition function in the TraveLogger app. The goal was to enable users to start and stop sessions, log notes, and access features without manual input. Using Android's built-in SpeechRecognizer class, I began by implementing basic voice command functionality. This involved defining a set of commands and ensuring the app could accurately recognize and respond to them. Key challenges included handling various accents and minimizing background noise interference.
        </p>
        {/* <img src="https://via.placeholder.com/300" alt="Project 1" className=" w-72 h-72" /> */}
        <p className='text-gray-200'>Throughout the development process, iterative testing was crucial. Initial versions faced issues with command accuracy and noise interference. I refined the command set, improved noise filtering, and implemented better feedback mechanisms to inform users when commands were successfully recognized or needed repetition.</p>

        <p className='text-gray-200'>The final version of the voice recognition function was robust, allowing users to seamlessly interact with the app. Comprehensive testing ensured reliable performance across different environments and user accents. The successful implementation of this feature demonstrates my ability to think through a problem from start to finish, iterate based on feedback, and deliver a functional and user-friendly solution.</p>

        <p className='text-gray-200'>During the development process, I aimed to implement a wake word feature to further enhance the hands-free experience. However, due to limitations in the Android SpeechRecognizer and the additional processing power required, this led to significant lag in the app's performance. Continuous listening for commands proved more efficient, despite the trade-off of constant background processing. This experience underscored the importance of balancing functionality with performance and user experience, a crucial consideration in mobile app development.</p>
      </div>
    ),
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2',
    content: (
      <div>
        <p>This is the content of Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <img src="https://via.placeholder.com/300" alt="Project 2" className="my-4" />
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    ),
  },
  {
    title: 'Project 3',
    description: 'Description of Project 3',
    content: (
      <div >
        <p className='project-text'>This is the content of Project 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <img src="https://via.placeholder.com/300" alt="Project 3" className="my-4" />
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    ),
  },
  
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div role="tablist" className="tabs tabs-bordered">
        {projects.map((project, index) => (
          <a
            key={index}
            role="tab"
            className={`tab ${activeTab === index ? 'tab-active bg-purple-900 rounded-md' : ''} text-zinc-400`}
            onClick={() => setActiveTab(index)}
          > 
            {project.title}
          </a>
        ))}
      </div>

      <div className="mt-4">
        {projects.map((project, index) => (
          <div
            key={index}
            role="tabpanel"
            className={`tab-content ${activeTab === index ? 'block' : 'hidden'}`}
          >
            <div className="card shadow-md bg-gray-600 p-4">
              <h2 className="text-xl font-bold mb-2 text-white">{project.title}</h2>
              <p className="mb-4 text-gray-100">{project.description}</p>
              {project.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;