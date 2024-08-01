import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import traveloggerTitle from '../assets/travelogger/travelogger-title.png';

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























  // const events = [
  //   { year: '2022', month: 'January', description: 'Started a new project' },
  //   { year: '2022', month: 'May', description: 'Launched version 1.0' },
  //   { year: '2023', month: 'February', description: 'Reached 10,000 users' },
  //   // Add more events as needed
  // ];


  // const Timeline = () => {
  //   return (
  //     <div className="max-w-screen-lg mx-auto py-8">
  //       <div className="relative wrap overflow-hidden p-10 h-full">
  //         <div className="border-2 absolute border-opacity-20 border-gray-700 h-full left-1/2 transform -translate-x-1/2 md:border-l md:border-gray-700 md:h-auto md:w-full md:left-0 md:top-1/2 md:transform md:-translate-y-1/2"></div>
  
  //         {[...events, ...projects].map((item, index) => {
  //           const isProject = item.title !== undefined;
  //           const alignment = index % 2 === 0 ? 'left' : 'right';
  
  //           return (
  //             <div
  //               key={index}
  //               className={`mb-8 flex justify-between items-center w-full md:w-full md:mb-16 ${
  //                 alignment === 'left'
  //                   ? 'flex-row-reverse md:flex-row'
  //                   : 'flex-row md:flex-row-reverse'
  //               }`}
  //             >
  //               <div className="order-1 w-5/12 md:w-5/12"></div>
  //               <div className="order-1 w-5/12 px-1 py-4 bg-gray-800 rounded-lg shadow-xl">
  //                 {isProject && <img src={item.img} alt={item.title} className="mb-3 rounded-lg" />}
  //                 <h3 className="mb-3 font-bold text-white text-xl">
  //                   {isProject ? item.title : `${item.month} ${item.year}`}
  //                 </h3>
  //                 <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
  //                   {item.description}
  //                 </p>
  //               </div>
  //             </div>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   );
  // };
  
  // export default Timeline;


//   const Timeline = () => {
//     return (
//       <div className="max-w-screen-lg mx-auto py-8">
//         <div className="relative wrap overflow-hidden p-10 h-full">
//           <div className="absolute border-opacity-20 border-gray-700 h-full border left-1/2 transform -translate-x-1/2 md:w-full md:h-2 md:top-1/2 md:left-0 md:transform md:-translate-y-1/2"></div>
  
//           {[...events, ...projects].map((item, index) => {
//             const isProject = item.title !== undefined;
//             const alignment = index % 2 === 0 ? 'left' : 'right';
  
//             return (
//               <div
//                 key={index}
//                 className={`mb-8 flex justify-between items-center w-full ${
//                     alignment === 'left'
//                       ? 'flex-row-reverse md:flex-row'
//                       : 'flex-row md:flex-row-reverse'
//                   }`}
//               >
//                 <div className="order-1 w-5/12"></div>
//                 <div className="order-1 w-5/12 px-1 py-4 bg-gray-800 rounded-lg shadow-xl">
//                   {isProject && <img src={item.img} alt={item.title} className="mb-3 rounded-lg" />}
//                   <h3 className="mb-3 font-bold text-white text-xl">
//                     {isProject ? item.title : `${item.month} ${item.year}`}
//                   </h3>
//                   <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   };
  
//   export default Timeline;




//   const Timeline = () => {
//     return (
//       <div className="max-w-screen-md mx-auto py-8">
//         <div className="relative wrap overflow-hidden p-10 h-full">
//           <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
  
//           {events.map((event, index) => (
//             <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'left-timeline' : 'right-timeline'}`}>
//               <div className="order-1 w-5/12"></div>
//               <div className="order-1 w-5/12 px-1 py-4 bg-gray-800 rounded-lg shadow-xl">
//                 <h3 className="mb-3 font-bold text-white text-xl">{event.month} {event.year}</h3>
//                 <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">{event.description}</p>
//               </div>
//             </div>
//           ))}
  
//           {projects.map((project, index) => (
//             <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'left-timeline' : 'right-timeline'}`}>
//               <div className="order-1 w-5/12"></div>
//               <div className="order-1 w-5/12 px-1 py-4 bg-gray-800 rounded-lg shadow-xl">
//                 <img src={project.img} alt={project.title} className="mb-3 rounded-lg" />
//                 <h3 className="mb-3 font-bold text-white text-xl">{project.title}</h3>
//                 <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">{project.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };
  
//   export default Timeline;
