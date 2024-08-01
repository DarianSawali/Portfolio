import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Home as HomeIcon, StickyNote } from 'lucide-react';
import Sidebar, { SidebarItem, SidebarContext  } from './components/Sidebar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import { RiMenuFold2Line } from 'react-icons/ri';


function App() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <Router>
      <SidebarContext.Provider value={{ expanded: isSidebarExpanded, setExpanded: setIsSidebarExpanded }}>
        <div className="bg-zinc-800 min-h-screen flex ">
          {/* Sidebar for medium and larger screens */}
          <div className="hidden md:block ">
            <Sidebar expanded={isSidebarExpanded}>
              <SidebarItem icon={<HomeIcon size={20} />} text="Home" path="/" />
              <SidebarItem icon={<StickyNote size={20} />} text="Projects" path="/projects" />
            </Sidebar>
          </div>

          {/* Content area */}
          <div className="flex-1">
            {/* Header with toggle button for small screens */}
            <header className="bg-zinc-900 text-4xl p-4 text-white flex items-center sticky top-0 relative z-10">
            <button
                onClick={toggleSidebar}
                className="text-white md:hidden pr-4"
              >
                <RiMenuFold2Line size={24} className=''/>
              </button>
              <h1 className="text-xl md:text-2xl lg:text-4xl">Darian Sawali</h1>
              {/* Toggle button for small screens */}
              
            </header>

            <main className="container mx-auto p-4 bg-zinc-800">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
              </Routes>
            </main>
          </div>

          {/* Overlay Sidebar for small screens */}
          {isSidebarVisible && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden" onClick={toggleSidebar}>
              <div className="relative z-50 bg-zinc-900 h-full w-48">
                <Sidebar expanded={true}>
                  <SidebarItem icon={<HomeIcon size={20} />} text="Home" path="/" />
                  <SidebarItem icon={<StickyNote size={20} />} text="Projects" path="/projects" />
                </Sidebar>
              </div>
            </div>
          )}
        </div>
      </SidebarContext.Provider>
    </Router>
  );
}

export default App;

// function App() {
//   const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarExpanded(!isSidebarExpanded);
//   };

//   return (
//     <Router>
//       <SidebarContext.Provider value={{ expanded: isSidebarExpanded, setExpanded: setIsSidebarExpanded }}>
//         <div className="bg-zinc-800 min-h-screen flex">
//           {/* Sidebar only visible on md screens and above */}
//           <div className="hidden md:block">
//             <Sidebar>
//               <SidebarItem icon={<HomeIcon size={20} />} text="Home" path="/" />
//               <SidebarItem icon={<StickyNote size={20} />} text="Projects" path="/projects" />
//             </Sidebar>
//           </div>

//           {/* Content area */}
//           <div className="flex-1">
//             {/* Header with toggle button for small screens */}
//             <header className="bg-zinc-900 text-4xl p-4 text-white flex justify-between items-center">
//               <h1 className="text-xl md:text-2xl lg:text-4xl">Darian Sawali</h1>
//               {/* Toggle button only visible on small screens */}
//               <button
//                 onClick={toggleSidebar}
//                 className="text-white md:hidden"
//               >
//                 <RiMenuFold2Line size={24} />
//               </button>
//             </header>

//             <main className="container mx-auto p-4 bg-zinc-800">
//               <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/projects" element={<Projects />} />
//               </Routes>
//             </main>
//           </div>

//           {/* Sidebar overlay when expanded on small screens */}
//           {isSidebarExpanded && (
//             <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden" onClick={toggleSidebar}>
//               <Sidebar expanded={isSidebarExpanded}>
//                 <SidebarItem icon={<HomeIcon size={20} />} text="Home" path="/" />
//                 <SidebarItem icon={<StickyNote size={20} />} text="Projects" path="/projects" />
//               </Sidebar>
//             </div>
//           )}
//         </div>
//       </SidebarContext.Provider>
//     </Router>
//   );
// }

// export default App;





// function App() {

//   return (
//     <Router>
      
//       <div className="bg-zinc-800 min-h-screen flex">

//         {/* <div className='bg-slate-200 py-10'></div> */}
//         <Sidebar>
//           <SidebarItem icon={<HomeIcon size={20} />} text="Home" path="/" />
//           <SidebarItem icon={<StickyNote size={20} />} text="Projects" path="/projects" />
//         </Sidebar>
//         <div className="flex-1">
//           <header className="bg-zinc-900 text-4xl p-4 text-white text-right">
//             <h1 className="text-xl md:text-2xl lg:text-4xl">Darian Sawali</h1>
//           </header>

//           <main className="container mx-auto p-4 bg-zinc-800">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/projects" element={<Projects />} />
//             </Routes>
//           </main>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;


{/* <Sidebar>
        <SidebarItem icon={<Home size={20} />} text="Home" active />
        <SidebarItem icon={<User size={20} />} text="Profile" />
        <SidebarItem icon={<Bell size={20} />} text="Notifications" alert />
      </Sidebar> */}

      {/* <SidebarItem icon={<User size={20} />} text="About" /> */}