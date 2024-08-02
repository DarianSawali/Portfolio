import React from 'react'

const Footer = () => {
    return (
      <footer className="bg-slate-900 text-white py-6 pb-16 mt-6">
        <div className="container mx-auto flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center sm:text-left pt-4">
            <div className="flex flex-col items-center sm:items-center">
              <a href="https://www.linkedin.com/in/dariansawali" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all">
                LinkedIn
              </a>
              <a href="https://github.com/DarianSawali" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all">
                GitHub
              </a>
            </div>
            <div className="flex flex-col items-center sm:items-center">
              <a href="mailto:das14@sfu.ca" className="hover:underline transition-all">das14@sfu.ca</a>
              <a href="tel:+17782233448" className="hover:underline transition-all">(778)-223-3448</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
