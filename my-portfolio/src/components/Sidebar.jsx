import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import { createContext, useContext, useState } from "react";
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RiMenuFold2Line } from "react-icons/ri";

const SidebarContext = createContext();

// https://medium.com/@constgenius/build-a-retractable-sidebar-component-purely-in-reactjs-and-tailwind-css-react-sidebar-navigation-94c3704e3e51

export default function Sidebar({ children, expanded }) {
  const { setExpanded } = useContext(SidebarContext);

  return (
    <aside className={`h-screen sticky top-0 ${expanded ? 'fixed' : 'sticky'} ${expanded ? 'w-48 md:w-64' : 'w-16 md:w-16'} transition-all duration-300 bg-zinc-900 shadow-sm relative z-50`}>
      <nav className="h-full flex flex-col">
        <div className="p-4 pb-2 flex justify-between items-center">
          <span className={`overflow-hidden transition-all text-gray-300 ${expanded ? "w-16" : "w-0"}`}>DS</span>
          <button 
            onClick={() => setExpanded(!expanded)} 
            className="p-1 rounded-lg text-white bg-transparent"
            aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="flex p-3">
          <div className={`flex justify-between items-center overflow-hidden gap-2 transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
            <div className="leading-4">
              <h4 className="font-semibold py-1 text-white">Darian Sawali</h4>
              <span className="text-xs text-white">das14@sfu.ca</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export { SidebarContext };

export function SidebarItem({ icon, text, path, alert }) {
  const { expanded } = useContext(SidebarContext);
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <Link 
      to={path} 
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${isActive ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-black" : "hover:bg-purple-900 text-gray-400 hover:text-white"}`}
      aria-label={text}
    >
      {icon}
      <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
      {alert && (
        <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-200 ${expanded ? "" : "top-2"}`}></div>
      )}
      {!expanded && (
        <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-950 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
          {text}
        </div>
      )}
    </Link>
  );
}


