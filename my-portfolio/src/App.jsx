import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Home as HomeIcon, StickyNote } from 'lucide-react';
import Sidebar, { SidebarItem, SidebarContext  } from './components/Sidebar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';


function App() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  return (
    <Router>
      <SidebarContext.Provider value={{ expanded: isSidebarExpanded, setExpanded: setIsSidebarExpanded }}>
        <div className="bg-zinc-800 min-h-screen flex">
          <Sidebar>
            <SidebarItem icon={<HomeIcon size={20} />} text="Home" path="/" />
            <SidebarItem icon={<StickyNote size={20} />} text="Projects" path="/projects" />
          </Sidebar>
          <div className={`flex-1 transition-all duration-300 ${!isSidebarExpanded ? '' : ''}`}>
            <header className="bg-zinc-900 text-4xl p-4 text-white text-right">
              <h1 className="text-xl md:text-2xl lg:text-4xl">Darian Sawali</h1>
            </header>

            <main className="container mx-auto p-4 bg-zinc-800">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
              </Routes>
            </main>
          </div>
        </div>
      </SidebarContext.Provider>
    </Router>
  );
}

export default App;






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