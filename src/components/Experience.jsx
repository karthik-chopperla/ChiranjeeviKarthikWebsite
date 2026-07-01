import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';

const PATH = "M 700,100 C 400,200 200,330 250,430 C 300,530 750,650 700,750 C 650,850 200,1000 250,1100 C 300,1200 750,1300 700,1400 C 650,1500 200,1600 250,1700";

const ExpCard = ({ period, role, org, text, className, aosDelay, aosType, pathLength, containerRef }) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, 'change', (latest) => {
    if (!ref.current || !containerRef.current) return;
    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    const triggerY = (cardRect.top - containerRect.top) + 50;
    const lineTipY = latest * containerRect.height;
    if (lineTipY >= triggerY && !isActive) setIsActive(true);
    else if (lineTipY < triggerY && isActive) setIsActive(false);
  });

  return (
    <div
      ref={ref}
      data-aos={aosType || 'fade-up'}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 relative flex flex-col items-center hover:scale-[1.02] transition-all duration-700 z-10 ${className} ${
        isActive
          ? 'bg-[#ff2a2a] border-red-400 shadow-[0_20px_50px_rgba(255,42,42,0.4)]'
          : 'bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]'
      }`}
    >
      {/* Hole punch */}
      <div className="w-5 h-5 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] absolute top-4 border border-gray-300 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-gray-800 rounded-full opacity-20"></div>
      </div>

      {/* Inner */}
      <div className={`w-full h-full rounded-[1.5rem] mt-8 p-8 flex flex-col min-h-[260px] transition-colors duration-700 ${
        isActive ? 'bg-red-700/50' : 'bg-[#f4f4f4]'
      }`}>
        <span className={`text-sm font-bold mb-1 font-serif italic transition-colors duration-700 ${
          isActive ? 'text-red-200' : 'text-gray-400'
        }`}>{period}</span>

        <h3 className={`text-xl font-black mb-1 tracking-tight transition-colors duration-700 ${
          isActive ? 'text-white' : 'text-gray-900'
        }`}>{role}</h3>

        <p className={`text-xs font-black uppercase tracking-wider mb-3 transition-colors duration-700 ${
          isActive ? 'text-red-300' : 'text-[#ff2a2a]'
        }`}>{org}</p>

        <p className={`text-sm leading-relaxed font-medium transition-colors duration-700 ${
          isActive ? 'text-red-100' : 'text-gray-500'
        }`}>{text}</p>
      </div>
    </div>
  );
};

const Experience = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  return (
    <section
      id="experience"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative md:h-[2100px]">

        {/* Header */}
        <div data-aos="fade-up" className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-16 md:mb-0">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-8 shadow-sm bg-white">
            Professional Experience
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Where I've worked
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-sm font-medium leading-relaxed">
            Hands-on roles in AI research, student leadership, content creation, and automation.
          </p>
        </div>

        {/* Desktop animated dashed line */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[2100px] pointer-events-none z-0"
          viewBox="0 0 1000 2100"
          preserveAspectRatio="none"
        >
          <path d={PATH} fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="8 10" />
          <mask id="exp-mask">
            <motion.path d={PATH} fill="none" stroke="white" strokeWidth="20" style={{ pathLength }} />
          </mask>
          <path d={PATH} fill="none" stroke="black" strokeWidth="2" strokeDasharray="8 10" mask="url(#exp-mask)" className="drop-shadow-sm" />
        </svg>

        {/* Mobile vertical dashed line */}
        <svg
          className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-[100%] pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
        >
          <path d="M 2,0 L 2,100" fill="none" stroke="#cbd5e1" strokeWidth="4" strokeDasharray="4 6" vectorEffect="non-scaling-stroke" />
          <mask id="exp-mask-mobile">
            <motion.path d="M 2,0 L 2,100" fill="none" stroke="white" strokeWidth="4" style={{ pathLength }} vectorEffect="non-scaling-stroke" />
          </mask>
          <path d="M 2,0 L 2,100" fill="none" stroke="black" strokeWidth="4" strokeDasharray="4 6" mask="url(#exp-mask-mobile)" vectorEffect="non-scaling-stroke" />
        </svg>

        {/* Cards */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10 w-full pt-4 md:pt-0 pb-12 md:pb-0">

          <ExpCard
            period="Jul 2026 – Present"
            role="Campus Ambassador"
            org="E-Cell, IIT Bombay"
            text="Selected as Campus Ambassador for E-Cell IIT Bombay — promoting entrepreneurship, representing one of India's premier innovation ecosystems on campus."
            className="md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6"
            aosType="fade-left"
            aosDelay="100"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <ExpCard
            period="Apr 2026 – Present"
            role="Campus Leader"
            org="Internshala"
            text="Selected as Campus Leader to represent Internshala on campus — driving internship awareness, leading outreach campaigns, and building stronger student engagement."
            className="md:absolute md:top-[380px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6"
            aosType="fade-right"
            aosDelay="200"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <ExpCard
            period="Mar – Apr 2026"
            role="Machine Learning Intern"
            org="Suvidha Foundation"
            text="Contributed to NLP/NLG research; built and analyzed ML models on real-world language data under strict research and no-plagiarism standards."
            className="md:absolute md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3"
            aosType="fade-left"
            aosDelay="300"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <ExpCard
            period="Feb 2026"
            role="LLM Post-Training Intern"
            org="Ethara AI · Selected Candidate"
            text="Selected through competitive technical screening to work on LLM post-training workflows — AI evaluation, response analysis, and output quality improvement."
            className="md:absolute md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3"
            aosType="fade-right"
            aosDelay="400"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <ExpCard
            period="Jan – Feb 2026"
            role="AI Intern"
            org="Mirai School of Technology"
            text="Reduced manual effort by 30% designing scalable n8n automation workflows. Built API-integrated pipelines and deployed reliable AI agents in production."
            className="md:absolute md:top-[1350px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-5"
            aosType="fade-left"
            aosDelay="500"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <ExpCard
            period="Oct 2024 – Present"
            role="Content Creator"
            org="Growwise"
            text="Built a YouTube channel reaching 113,700+ views — creating educational content on AI tools, geopolitics, and technology with consistent audience growth."
            className="md:absolute md:top-[1650px] md:left-[5%] lg:left-[10%] -rotate-1 md:-rotate-3"
            aosType="fade-right"
            aosDelay="600"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <div
            data-aos="fade-in"
            data-aos-delay="700"
            className="hidden md:block absolute top-[1920px] left-[45%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6"
          >
            ...and still growing!
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
