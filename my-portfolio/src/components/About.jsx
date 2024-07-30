import React from 'react';
import { FaJava, FaHtml5, FaPython, FaCss3Alt, FaReact, FaNodeJs, FaUnity } from 'react-icons/fa';
import { SiCsharp, SiTypescript, SiExpress, SiTailwindcss, SiMongodb, SiSocketdotio, SiAndroidstudio, SiJavascript  } from "react-icons/si";

// import profile from "";

const About = () => {
  const skills = [
    {name: 'Java', icon: <FaJava size={50} className='text-white'/> },
    {name: 'JavaScript', icon: <SiJavascript  size={50} className='text-white'/> },
    {name: 'Python', icon: <FaPython size={50} className='text-white'/> },
    {name: 'TypeScript', icon: <SiTypescript  size={50} className='text-white'/> },
    {name: 'C#', icon: <SiCsharp  size={50} className='text-white'/> },
    {name: 'HTML', icon: <FaHtml5 size={50} className='text-white'/> },
    {name: 'CSS', icon: <FaCss3Alt size={50} className='text-white'/> },
    
  ];

  const frameworks = [
    {name: 'React', icon: <FaReact size={50} className='text-white'/> },
    {name: 'NodeJs', icon: <FaNodeJs size={50} className='text-white'/> },
    {name: 'ExpressJs', icon: <SiExpress  size={50} className='text-white'/> },
    {name: 'Tailwind', icon: <SiTailwindcss  size={50} className='text-white'/> },
    {name: 'MongoDB', icon: <SiMongodb  size={50} className='text-white'/> },
    {name: 'Socket.IO', icon: <SiSocketdotio  size={50} className='text-white'/> },
    {name: 'Unity', icon: <FaUnity  size={50} className='text-white'/> },
    {name: 'Android Studio', icon: <SiAndroidstudio  size={50} className='text-white'/> },
  ];

  return (
    <div className="container mx-auto py-8 shadow-slate-400">
      <h2 className="text-2xl font-bold mb-4 text-white">About Me</h2>
      <div className="grid grid-cols-6 gap-8">
        <div className="col-span-6 md:col-span-2">
          {/* <img src="" alt="" className="rounded-lg w-auto h-full" /> */}
          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content w-60 md:w-48 lg:w-64 xl:w-80 rounded-lg">
              <span className="text-3xl">DS</span>
            </div>
          </div>
        </div>
        <div className="col-span-6 md:col-span-4 bg-gray-600 p-6 rounded-lg shadow-md">
          {/* <h2 className="text-2xl font-bold mb-4 text-white">About Me</h2> */}
          <p className="text-gray-200 mb-4">
            I’m Darian Sawali, a student at Simon Fraser University, specializing in Interactive Systems with a focus on software development. I have a strong foundation in Object-Oriented Programming, User Interface design, and API integration. My experience includes developing various applications, such as games and mobile apps, through academic coursework.
          </p>
          <p className="text-gray-200 mb-4">
            Additionally, I independently learn to develop websites and real-time web applications, further honing my skills. This combination of structured learning and personal exploration showcases my commitment to continuously learn and innovate, seeking to expand my technical skills and knowledge. My technical skills include languages such as:
          </p>
          <div className="flex flex-wrap gap-6 pt-6">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center">
                {skill.icon}
                <span className="mt-2 text-white">{skill.name}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-6 pt-6">
            {frameworks.map((framework) => (
              <div key={framework.name} className="flex flex-col items-center">
                {framework.icon}
                <span className="mt-2 text-white">{framework.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;