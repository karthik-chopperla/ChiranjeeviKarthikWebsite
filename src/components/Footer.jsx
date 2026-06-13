import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">

      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-3">
          {['AI / ML Developer', 'Web Developer & Builder', 'Open Source Contributor'].map((role) => (
            <div key={role} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a2a] shrink-0"></span>
              <span className="text-white text-[11px] md:text-sm font-bold tracking-wide">{role}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-1 md:items-center">
          <p>2+ years building AI/ML projects</p>
          <a href="#projects" className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-1">View Projects</a>
        </div>

        <div className="flex flex-col gap-1 md:items-end">
          <p>Based in India · Available Worldwide</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
        <h2 className="text-[18vw] md:text-[16vw] leading-none font-sans font-bold tracking-tighter lowercase select-none text-[#f4f4f4] w-full text-center">
          karthik
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <a href="#contact" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">Contact</a>
            <a href="https://www.linkedin.com/in/chiranjeevi-karthik-chopperla-176834347/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">LinkedIn</a>
            <a href="https://github.com/karthik-chopperla" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">GitHub</a>
          </div>
          <p className="text-white/60 font-mono text-[9px] md:text-[10px]">
            &copy; {new Date().getFullYear()} Karthik Chopperla | Built with React
          </p>
        </div>

        <div className="flex flex-col gap-1 md:items-center">
          <a href="mailto:internkarthikchopperla007@gmail.com" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase">
            internkarthikchopperla007@gmail.com
          </a>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
          <a href="https://www.youtube.com/@GrowWise-i1i" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">YouTube @GrowWise</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
