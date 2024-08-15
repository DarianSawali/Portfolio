import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import chatHome0 from '../assets/chatapp/home0.png';
import chatLogin from '../assets/chatapp/login.png';
import chatSignup from '../assets/chatapp/signup.png';
import chat from '../assets/chatapp/chat.png';

import gameMenu from '../assets/spiritmaes/game-menu.png';
import loseMenu from '../assets/spiritmaes/game-lose-menu.png';
import pauseMenu from '../assets/spiritmaes/game-pause-menu.png';
import pigeonDance from '../assets/spiritmaes/pigeon-dance.gif';
import pigeonMove from '../assets/spiritmaes/pigeon-move.gif';
import level from '../assets/spiritmaes/level.png';
import level1 from '../assets/spiritmaes/level1.png';
import level7 from '../assets/spiritmaes/level7.png';
import level9 from '../assets/spiritmaes/level9.png';

import appTitle from '../assets/travelogger/travelogger-title.png';
import homePage from '../assets/travelogger/travelogger-home.png';
import startSession from '../assets/travelogger/travelogger-started-session.png';
import polylinePrototype from '../assets/travelogger/travelogger-polyline-prototype.jpg';
import polylineFinal from '../assets/travelogger/travelogger-polyline.jpg';


const projects = [
  {
    id: 'chatapp',
    title: 'Chat-App',
    description: 'The Chat-App is a real-time messaging application built with a modern web stack. It features user authentication, real-time communication, and a responsive user interface.',
    github: 'https://github.com/DarianSawali/Chat-App',
    content: (
      <div className='flex flex-col gap-4'>
        <ul className='italic text-gray-300'>
          <li>Date/Timeframe : June - July 2024, 3 weeks</li>
          <li>Role : Full-Stack Developer</li>
          <li>Project Type : Solo</li>
          <li>Purpose - Personal Project</li>
          <li className='mt-4'>Front-End: HTML, CSS, React, Tailwind</li>
          <li>Back-End: Node.js, Express.js, Socket.IO</li>
          <li>Database: MongoDB for user data storage</li>
        </ul>
        <p className='text-gray-200 md:py-2 lg:py-4 md:text-base lg:text-lg'>The Chat-App is a real-time messaging application built with a modern web stack. It features user authentication, real-time communication, and a responsive user interface. The front-end is developed using React, while the back-end leverages Node.js with Express, and real-time messaging is powered by Socket.IO.
        </p>
        <div className='flex justify-center'> 
          <div className='grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-16 items-center justify-center'>
            <img src={chatLogin} alt="chat Login page" className="w-56 sm:w-64 md:w-72 lg:w-96 h-auto rounded-md" />
            <img src={chatSignup} alt="chat Signup page" className="w-56 sm:w-64 md:w-72 lg:w-96 h-auto rounded-md" />
          </div>
        </div>
        
        <h3 className='text-gray-200 md:text-lg lg:text-xl'>Process and Development</h3>
        <ul className='pl-6 list-disc list-outside text-gray-200 md:pb-2 lg:pb-4 md:text-base lg:text-lg'>
          <li className=''>Architecture Design: Developed a scalable architecture separating concerns between the front-end and back-end.</li>
          <li>Real-Time Communication: Implemented Socket.IO to handle real-time messaging, ensuring low latency and high responsiveness.</li>
          <li>User Authentication: Integrated secure authentication mechanisms, allowing users to sign up, log in, and maintain sessions.</li>
          <li>Responsive UI: Focused on creating a user-friendly interface that adapts seamlessly across devices, enhancing user experience.</li>
          <li>Testing and Deployment: Conducted extensive testing to ensure reliability and deployed the application for public use.</li>
        </ul>

        <p className='text-gray-200 md:py-2 lg:py-4 md:text-base lg:text-lg'>During the development of the Chat-App, I focused on creating a separation between the front-end and the back-end in order to ensure future maintainability which allowed to manage each component independently. Part of the challenge of this project was determining real-time chat updates for better user experience which is why implementing Socket.IO was a crucial step in enabling real-time messaging. By handling bi-directional communication efficiently, the app ensures low latency, providing users with instant feedback.</p>

        <div className='flex justify-center'> 
          <div className='grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-16 items-center justify-center'>
            <img src={chatHome0} alt="chat initial Home page" className="w-56 sm:w-64 md:w-72 lg:w-96 h-auto rounded-md" />
            <img src={chat} alt="chosen chat page" className="w-56 sm:w-64 md:w-72 lg:w-96 h-auto rounded-md" />
          </div>
        </div>

        <p className='text-gray-200 md:py-2 lg:py-4 md:text-base lg:text-lg'> The authentication system was meticulously integrated to protect user data, enabling secure sign-ups and login sessions, vital for any user-centric application. Additionally, I prioritized creating a responsive user interface for desktop users which adapts seamlessly across different screen sizes. Extensive testing was carried out to identify and resolve potential issues, ensuring the app's reliability. Finally, the deployment process was carefully managed to make the application publicly accessible.</p>

        <p className='text-gray-200 md:py-2 lg:py-4 md:text-base lg:text-lg'>Working on the Chat-App deepened my understanding of full-stack development, especially in real-time communication and state management. Implementing Socket.IO was particularly challenging but rewarding, as it provided a smooth user experience. The project also reinforced the importance of secure authentication practices and responsive design in web applications.
        This project showcases my ability to build complex, interactive web applications from scratch, highlighting skills in both front-end and back-end development.</p>
      </div>
    ),
  },
  {
    id: 'spiritmaes',
    title: 'Spirit Maes',
    description: 'Spirit Maes is a 3D physics game with a top-down 2D POV puzzle game focusing on game mechanic and appealing visual pixel art.',
    github: 'https://github.com/DarianSawali/Spirit-Maes-Game',
    content: (
      <div className='flex flex-col gap-4'>
        <ul className='italic text-gray-300'>
          <li>Date/Timeframe : January - April 2024, 3.5 months</li>
          <li>Role : Unity Developer</li>
          <li>Project Type : Group</li>
          <li>Groupmate: Michael Tjokrowardojo, Erika Hance</li>
          <li>Purpose - Academic Project - create a game with a unique mechanic</li>
          <li>Tools : Unity using C# (Object-Oriented Programming)</li>
        </ul>

        <div className='flex justify-center py-2'>
          <img src ={gameMenu} alt="Spirit Maes Menu" className=" sm:w-72 md:w-96 lg:w-160 h-auto rounded-md" />
        </div>

        <p className='text-gray-200 md:pt-2 lg:pt-4 md:text-base lg:text-lg'>The purpose of this project was to create a game with unique mechanics that would entice potential players to play the game. The main focus of the game was to create something fun focused around creating puzzles as well as a mechanic we call ‘Soul Possession’. In this game, the player plays as a soul that recently dies in order to find treasure. The player is then able to possess different animals in order to interact with certain objects as well as reach the end goal. These animals consists of a Skunk, a Pigeon, and a Fish that each have unique abilities in order to solve the puzzles. 
        </p>

        <div className='flex justify-center '> 
          <div className='grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-16 items-center justify-center'>
            <img src={pigeonDance} alt="Pigeon dance gif" className="w-56 sm:w-64 md:w-72 lg:w-96 h-auto rounded-md" />
            <img src={pigeonMove} alt="Pigeon movement gif" className="w-64 sm:w-72 md:w-96 lg:w-128 h-auto rounded-md" />
          </div>
        </div>

        <div className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3'>
          {/* <img src="https://via.placeholder.com/300" alt="Project 1" className=" w-72 h-72" /> */}
        </div>
        
        <h3 className='text-gray-200 md:text-lg lg:text-xl'>Process and Development</h3>
        <ul className='pl-6 list-disc list-outside text-gray-200 md:pb-2 lg:pb-4 md:text-base lg:text-lg'>
          <li className=''>Designed and implemented gameplay mechanics ranging from player movement, object interaction, as well as soul possession mechanic using C# scripting in Unity.</li>
          <li>Integrated physics system for realistic interactions and environmental behaviors.</li>
          <li>Developed cross platform compatibility, including WebGL builds for accessibility, allowing the game to be played on the Itch page.</li>
          <li>Optimized input systems to ensure high responsiveness and precision in player controls.</li>
          <li>Implemented user interface (UI) elementes for enhanced user experience and visual appeal including the menu screen, pause menu, as well as the lose screen.</li>
          <li>Created and iterated on level designs to deliver engaging and immersive gameplay experiences.</li>
        </ul>

        <div className='flex justify-center '> 
          <div className='grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-16 items-center justify-center'>
            <img src={loseMenu} alt="lose screen UI" className="w-64 sm:w-72 md:w-96 lg:w-128 h-auto rounded-md" />
            <img src={pauseMenu} alt="pause screen UI" className="w-64 sm:w-72 md:w-96 lg:w-128 h-auto rounded-md" />
          </div>
        </div>

        <p className='text-gray-200 md:py-2 lg:py-4 md:text-base lg:text-lg'>The development process involved designing game mechanics from the ground up, ensuring that player interactions were smooth and responsive. My teammate Erika created custom sprites which allowed me to work on the keyframes in-game for smooth animations, enhancing the visual appeal of the game. Implementing collision detection and platforms varying in difficulty enhanced player gameplay, providing challenges that keep players engaged.</p>

        <div className='flex justify-center '> 
          <div className='grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-16 items-center justify-center'>
            <img src={level} alt="Early level design" className="w-56 sm:w-64 md:w-72 lg:w-96 h-auto rounded-md" />
            <img src={level1} alt="figma concept level design" className="w-56 sm:w-64 md:w-72 lg:w-96 h-auto rounded-md" />
          </div>
        </div>

        <div className='flex justify-center '> 
          <div className='grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-16 items-center justify-center'>
            <img src={level9} alt="finished level design - difficulty hard" className="w-56 sm:w-64 md:w-72 lg:w-96 h-auto rounded-md" />
            <img src={level7} alt="finished level design - difficulty hard" className="w-56 sm:w-64 md:w-72 lg:w-96 h-auto rounded-md" />
          </div>
        </div>

        <p className='text-gray-200 md:py-2 lg:py-4 md:text-base lg:text-lg'>The project itself was fun and challenging, it gave me quite the insight in what might be and what is not possible to implement into the game given my current skillset. Going into this project I had some experience with Unity as well as C# scripting, but after this project I gained more knowledge than I could expect. Through development we had encountered a few issues, such as difficulties in properly controlling the player movement. It would somehow stop after jumping or result in other objects to slide of the platforms when a collision happens. Though thankfully I was able to overcome by creating a script that would negate this issue, by triggering the collision on and off this woud allow the player to not collide with other objects and vice versa. </p>
      </div>
    ),
  },
  {
    id: 'travelogger',
    title: 'TraveLogger',
    description: 'TraveLogger is a mobile app that tracks travel sessions, logs locations, counts steps, and provides hands-free operation with voice recognition.',
    github: 'https://github.com/MichaelTj02/TraveLogger',
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
  
  // {
  //   id: 'project3',
  //   title: 'Project 3',
  //   description: 'TraveLogger is a mobile app that tracks travel sessions, logs locations, counts steps, and provides hands-free operation with voice recognition.',
  //   github: '',
  //   content: (
  //     <div className='flex flex-col gap-4'>
  //       <ul className='italic text-gray-300'>
  //         <li>Date/Timeframe : November 2023, 4 weeks</li>
  //         <li>Role : Android Studio Developer</li>
  //         <li>Project Type : Group</li>
  //         <li>Purpose - Academic Project - create an android application</li>
  //         <li>Tools : Android Studio using Java (Object-Oriented Programming, SQLIte Database, Fragments, Google maps API, and Voice Recognition)</li>
  //       </ul>
  //       <div className='flex justify-center py-2'>
  //         <img src ={appTitle} alt="TraveLogger Title" className=" sm:w-64 md:w-80 lg:w-128 h-auto rounded-md" />
  //       </div>

  //       <p className='text-gray-200 md:py-2 lg:py-4 md:text-base lg:text-lg'>To enhance the TraveLogger app's functionality, integrating a feature to visualize travel routes on a map was essential. This led to the implementation of polylines, allowing users to see their journey paths. Using the Google Maps API, I started by plotting basic routes. This involved capturing the user’s location data at intervals and rendering it as a polyline on the map. Key challenges included ensuring accuracy and updating the polyline in real-time as the user moved.
  //       </p>
  //       <div className='flex justify-center'> 
  //         <div className='grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-16 items-center justify-center'>
  //           <img src={homePage} alt="Home page of the app" className="w-56 sm:w-64 md:w-72 lg:w-96 h-auto rounded-md" />
  //           <img src={startSession} alt="Started session page" className="w-56 sm:w-64 md:w-72 lg:w-96 h-auto rounded-md" />
  //         </div>
  //       </div>
        
  //       {/* <img src="https://via.placeholder.com/300" alt="Project 1" className=" w-72 h-72" /> */}
  //       <p className='text-gray-200 md:py-2 lg:py-4 md:text-base lg:text-lg'>Through iterative testing, I improved route accuracy and responsiveness. Early versions faced issues with lag and imprecise plotting. Refining the algorithm for location updates and optimizing data handling resolved these problems, resulting in smoother, more accurate route visualization.</p>

  //       <p className='text-gray-200 md:py-2 lg:py-4 md:text-base lg:text-lg'>The final polyline feature reliably tracks and displays user routes in real-time, enhancing the app’s usability. Comprehensive testing ensured robust performance across various devices and environments. This project highlights my ability to integrate complex features, problem-solve, and deliver a polished user experience. To further visualize this the first image was one of the early prototypes and the second image below was the final result. Although the final </p>


  //       <p className='text-gray-200 md:py-2 lg:py-4 md:text-base lg:text-lg'>During the development process, I aimed to implement a wake word feature to further enhance the hands-free experience. However, due to limitations in the Android SpeechRecognizer and the additional processing power required, this led to significant lag in the app's performance. Continuous listening for commands proved more efficient, despite the trade-off of constant background processing. This experience underscored the importance of balancing functionality with performance and user experience, a crucial consideration in mobile app development.</p>
  //     </div>
  //   ),
  // },
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

  //       <div className='flex justify-center '> 
  //         <div className='grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-16 items-center justify-center'>
  //           <img src={polylinePrototype} alt="Prototype Polyline build" className="w-56 sm:w-64 md:w-72 lg:w-96 h-auto rounded-md" />
  //           <img src={polylineFinal} alt="Final Polyline build" className="w-56 sm:w-64 md:w-72 lg:w-96 h-auto rounded-md" />
  //         </div>
  //       </div>

  //       <p className='text-gray-200 md:py-2 lg:py-4 md:text-base lg:text-lg'>Despite significant improvements, the polyline accuracy still falls short compared to modern apps. Challenges like real-time data handling and precise location plotting remain. This experience underscored the need for continuous optimization and the importance of balancing feature richness with app responsiveness and user experience. Additionally given further revisions, I would have liked to implement a way to store these pathways for user recollection.</p>
  //     </div>
  //   ),
  // },

  
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