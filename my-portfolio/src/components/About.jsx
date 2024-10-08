import React from 'react';
import { FaJava, FaHtml5, FaPython, FaCss3Alt, FaReact, FaNodeJs, FaUnity } from 'react-icons/fa';
import { SiCsharp, SiTypescript, SiExpress, SiTailwindcss, SiMongodb, SiSocketdotio, SiAndroidstudio, SiJavascript  } from "react-icons/si";
// import profilePic from "https://avatar.iran.liara.run/public/4";

import profilePic from '../assets/profile/profile-pic.jpg';

const About = () => {
  const skills = [
    {name: 'Java', icon: <FaJava size={50} className='text-gray-200'/> },
    {name: 'JavaScript', icon: <SiJavascript  size={50} className='text-gray-200'/> },
    {name: 'Python', icon: <FaPython size={50} className='text-gray-200'/> },
    {name: 'TypeScript', icon: <SiTypescript  size={50} className='text-gray-200'/> },
    {name: 'C#', icon: <SiCsharp  size={50} className='text-gray-200'/> },
    {name: 'HTML', icon: <FaHtml5 size={50} className='text-gray-200'/> },
    {name: 'CSS', icon: <FaCss3Alt size={50} className='text-gray-200'/> },
    
  ];

  const frameworks = [
    {name: 'React', icon: <FaReact size={50} className='text-gray-200'/> },
    {name: 'NodeJs', icon: <FaNodeJs size={50} className='text-gray-200'/> },
    {name: 'ExpressJs', icon: <SiExpress  size={50} className='text-gray-200'/> },
    {name: 'Tailwind', icon: <SiTailwindcss  size={50} className='text-gray-200'/> },
    {name: 'MongoDB', icon: <SiMongodb  size={50} className='text-gray-200'/> },
    {name: 'Socket.IO', icon: <SiSocketdotio  size={50} className='text-gray-200'/> },
    {name: 'Unity', icon: <FaUnity  size={50} className='text-gray-200'/> },
    {name: 'Android Studio', icon: <SiAndroidstudio  size={50} className='text-gray-200'/> },
  ];

  return (
    <div className="container mx-auto px-2 pt-4 pb-8 shadow-slate-400">
      <h2 className="text-2xl font-bold mb-4 text-white md:text-3xl lg:text-4xl xl:text-5xl pb-8">About Me</h2>
      <div className="grid grid-cols-6 gap-8">
        <div className="col-span-6 md:col-span-2">
          <img src={profilePic} alt="avatar placeholder" className="rounded-lg w-full h-auto" loading="lazy" width={700} height={700}/>
        </div>
        <div className="col-span-6 md:col-span-4 bg-slate-900 p-6 rounded-lg shadow-md">
          <p className="text-gray-300 mb-4 sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            I’m Darian Sawali, a student at Simon Fraser University, specializing in Interactive Systems with a focus on software development. I have a strong foundation in Object-Oriented Programming, User Interface design, and API integration. My experience includes developing various applications, such as games and mobile apps, through academic coursework.
          </p>
          <p className="text-gray-300 sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Additionally, I independently learn to develop websites and real-time web applications, further honing my skills. This combination of structured learning and personal exploration showcases my commitment to continuously learn and innovate, seeking to expand my technical skills and knowledge. My technical skills include languages such as:
          </p>
          <h3 className='text-gray-50 font-semibold md:text-lg pt-4'>Languages:</h3>
          <div className="flex flex-wrap gap-6 pt-6">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center">
                {skill.icon}
                <span className="mt-2 text-gray-100 md:text-lg">{skill.name}</span>
              </div>
            ))}
          </div>
          <h3 className='text-gray-50 pt-6 font-semibold md:text-lg'>Frameworks/Libraries:</h3>
          <div className="flex flex-wrap gap-6 pt-6">
            {frameworks.map((framework) => (
              <div key={framework.name} className="flex flex-col items-center">
                {framework.icon}
                <span className="mt-2 text-gray-100 md:text-lg">{framework.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;