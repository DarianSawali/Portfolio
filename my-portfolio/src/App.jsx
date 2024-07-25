import { useState } from 'react'
import { Home, User, Bell, StickyNote, } from 'lucide-react';
import './index.css';
import './App.css';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Carousel from './carousel/Carousel';
import CarouselControl from './carousel/CarouselControl';
import Sidebar, { SidebarItem } from './components/Sidebar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-zinc-800 min-h-screen flex">
      <Sidebar>
        <SidebarItem icon={<Home size={20} />} text="Home" active />
        <SidebarItem icon={<User size={20} />} text="About" />
        <SidebarItem icon={<StickyNote size={20} />} text="Projects" />
      </Sidebar>
      <div className="flex-1 ">
        <header className="bg-zinc-900 text-4xl p-4 text-white text-right">
          <h1 className="text-xl md:text-2xl lg:text-4xl">Darian Sawali</h1>
        </header>

        <main className="container mx-auto p-4">
          <section id="projects">
            <Carousel />
            <Projects />
          </section>
        </main>
      </div>
       
    </div>

    </>
  )
}

export default App


{/* <Sidebar>
        <SidebarItem icon={<Home size={20} />} text="Home" active />
        <SidebarItem icon={<User size={20} />} text="Profile" />
        <SidebarItem icon={<Bell size={20} />} text="Notifications" alert />
      </Sidebar> */}