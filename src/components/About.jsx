import React from 'react';

const skills = [
  'Python', 'Java', 'C', 'PHP', 'HTML/CSS', 'SQL',
  'LLMs', 'Prompt Engineering', 'AI Agents',
  'Supervised Learning', 'Unsupervised Learning',
  'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Streamlit', 'n8n',
  'GitHub', 'MySQL', 'Google Colab',
];

const experience = [
  {
    org: 'Suvidha Foundation',
    role: 'Machine Learning Intern',
    period: 'Mar – Apr 2026',
    points: [
      'Contributed to NLP/NLG research; built and analyzed ML models on real-world language data.',
      'Collaborated on structured research tasks under strict no-plagiarism standards.',
    ],
  },
  {
    org: 'Mirai School of Technology',
    role: 'AI Intern',
    period: 'Jan – Feb 2026',
    points: [
      'Reduced manual effort by 30% by designing scalable n8n automation workflows.',
      'Built API-integrated pipelines and deployed AI agents in production.',
    ],
  },
  {
    org: 'Ethara AI',
    role: 'LLM Post-Training Intern — Selected Candidate',
    period: 'Feb 2026',
    points: [
      'Selected through competitive screening to work on LLM post-training, evaluation, and output improvement.',
    ],
  },
];

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">

        {/* Left Side: ID Badge */}
        <div className="flex flex-col items-center w-full md:w-[300px] shrink-0 mt-12 md:mt-0">
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>

            <div className="bg-gray-900 w-full max-w-[260px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 flex flex-col items-center justify-center gap-2 px-4">
                <div className="w-20 h-20 rounded-full bg-[#ff2a2a] flex items-center justify-center shadow-lg">
                  <span className="text-xl font-black text-white tracking-tight">CK</span>
                </div>
                <span className="text-white font-black text-sm mt-2 text-center leading-tight">Chiranjeevi Karthik</span>
                <span className="text-gray-300 font-semibold text-xs text-center">Chopperla</span>
                <span className="text-[#ff2a2a] text-[10px] font-bold uppercase tracking-wider mt-0.5">AI / ML Developer</span>
                <div className="w-full h-px bg-white/10 my-1"></div>
                <span className="text-gray-400 text-xs text-center">B.Tech — AIML</span>
                <span className="text-gray-400 text-xs text-center">Ramachandra College</span>
                <span className="text-gray-500 text-xs mt-1">CGPA: 7.70 / 10</span>
                <div className="mt-2 px-3 py-1 bg-[#ff2a2a]/20 border border-[#ff2a2a]/40 rounded-full">
                  <span className="text-[#ff6060] text-[10px] font-bold">2023 – 2027</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">

          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">Hello!</h2>
          <p className="text-lg font-bold mb-8 leading-relaxed max-w-3xl text-red-50">
            I'm{' '}
            <span className="text-black text-xl font-black mx-1 tracking-wide uppercase">
              Karthik Chopperla
            </span>
            , an AI/ML developer passionate about building intelligent systems, automating workflows, and deploying real-world machine learning solutions.
          </p>

          {/* Experience */}
          <div className="mb-8">
            <h3 className="text-black font-black text-base mb-3 uppercase tracking-widest">Experience</h3>
            <div className="flex flex-col gap-3">
              {experience.map((exp, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={String(i * 100 + 200)}
                  className="bg-black/20 rounded-xl px-4 py-3 hover:bg-black/30 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <div>
                      <span className="font-black text-white text-sm">{exp.org}</span>
                      <span className="text-red-200 text-xs ml-2">— {exp.role}</span>
                    </div>
                    <span className="text-red-300 text-xs font-bold whitespace-nowrap">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5">
                    {exp.points.map((pt, j) => (
                      <li key={j} className="text-red-100 text-xs leading-relaxed">{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-black font-black text-base mb-3 uppercase tracking-widest">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  data-aos="zoom-in"
                  data-aos-delay={String(i * 30 + 400)}
                  className="px-3 py-1 bg-black/30 text-white text-xs font-bold rounded-full border border-white/20 hover:bg-black/50 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
