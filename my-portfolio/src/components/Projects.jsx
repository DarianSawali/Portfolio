import React, { useState } from 'react';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of Project 1',
    content: (
      <div>
        <p>This is the content of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <img src="https://via.placeholder.com/300" alt="Project 1" className="my-4" />
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
      <div>
        <p>This is the content of Project 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
      <div role="tablist" className="tabs tabs-boxed">
        {projects.map((project, index) => (
          <a
            key={index}
            role="tab"
            className={`tab ${activeTab === index ? 'tab-active' : ''}`}
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
            <div className="card shadow-md bg-white p-4">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="mb-4">{project.description}</p>
              {project.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;