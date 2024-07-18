import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css';
import './App.css';
import Navigation from './components/Navigation';
import Carousel from './carousel/Carousel';
import CarouselControl from './carousel/CarouselControl';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navigation />
        <header className="bg-blue-600 p-4 text-white text-center">
          <h1 className="text-xl md:text-2xl lg:text-4xl"></h1>
        </header>

        <main className="container mx-auto px-2 py-6">
          <section id="projects">
            <Carousel />
            <CarouselControl  />
          </section>
        </main>

        <footer className='p-4 text-white text-center'>
          &copy; 2024 Darian Sawali
        </footer>
      </div>
    </>
  )
}

export default App
