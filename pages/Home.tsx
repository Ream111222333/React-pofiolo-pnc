
import React from 'react';
import { NavLink } from 'react-router-dom';
import { IMAGES } from '../constants';

const TechIcon = ({ icon, label }: { icon: string; label: string }) => (
  <div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl text-center hover:border-primary transition-all hover:shadow-xl hover:-translate-y-1">
    <div className="text-primary dark:text-blue-400 mb-3 flex justify-center">
      <span className="material-icons-outlined text-3xl">{icon}</span>
    </div>
    <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 group-hover:text-primary transition-colors">{label}</span>
  </div>
);

const Home: React.FC = () => {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest animate-pulse">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Available for Internships
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-500">
                Digital Solutions
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              2nd Year Web Development Student at PNC specializing in high-performance web architectures and minimalist aesthetic design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <NavLink 
                to="/projects" 
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-xl font-bold transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
              >
                Explore Work
              </NavLink>
              <NavLink 
                to="/resume" 
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-8 py-3 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
              >
                The Journey <span className="material-icons-outlined text-sm">east</span>
              </NavLink>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] group-hover:bg-primary/30 transition-all"></div>
            <div className="relative aspect-square max-w-md mx-auto">
              <img 
                src={IMAGES.portrait} 
                alt="ream" 
                className="rounded-full border-[8px] border-white dark:border-slate-800 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack - The Ecosystem */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold mb-4">The Ecosystem</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Leveraging modern frameworks to build robust, scalable, and beautiful digital products.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <TechIcon icon="code" label="React.js" />
          <TechIcon icon="dns" label="Node.js" />
          <TechIcon icon="brush" label="Tailwind" />
          <TechIcon icon="storage" label="MongoDB" />
          <TechIcon icon="animation" label="Framer" />
          <TechIcon icon="design_services" label="Figma" />
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="bg-slate-50 dark:bg-slate-950/50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-2">Case Studies</p>
            <h2 className="font-display text-4xl font-bold">Selected Works</h2>
          </div>
          
          <div className="grid gap-12">
            {/* Case Study 1 */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col lg:flex-row hover:shadow-2xl transition-all group">
              <div className="lg:w-1/2 p-12 space-y-6 flex flex-col justify-center">
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-widest">E-commerce</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-widest">Next.js</span>
                </div>
                <h3 className="font-display text-3xl font-bold group-hover:text-primary transition-colors">Nova Storefront</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  A high-performance headless commerce engine with dynamic filtering and real-time inventory synchronization.
                </p>
                <NavLink to="/projects" className="text-primary font-bold flex items-center gap-2 hover:underline">
                  View Project <span className="material-icons-outlined text-sm">east</span>
                </NavLink>
              </div>
              <div className="lg:w-1/2 bg-slate-950/50 flex items-center justify-center p-8 overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCD9JgylhQJPXLnl_d2Yv4Nh09oz76b9vkfCfMdcmkpJnD9omXVc08jP60HKPEYEE7UMbAxciudNuI80JWCZwnTmi4Fq7XpLCcO3KeZge18dneSRtSEb0vcBewed7yVQ63wQTVTNTQCEs-rLb4bhQdxaMIs9CLXOKXSJfYuu3OQBVKj_nmA5AluWxD4UH8PpWP3BLRNkVWSjjvS-GqqmQpY3hidftn8a_bFeNB1hWnI4ZsCx9DLO-Fuw1nwUoFWXqWDnGF_BX1Twqw" 
                  alt="Nova Store" 
                  className="rounded-xl shadow-2xl group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col lg:flex-row-reverse hover:shadow-2xl transition-all group">
              <div className="lg:w-1/2 p-12 space-y-6 flex flex-col justify-center">
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-violet-500/10 text-violet-500 text-[10px] font-bold rounded-full uppercase tracking-widest">Dashboard</span>
                  <span className="px-3 py-1 bg-violet-500/10 text-violet-500 text-[10px] font-bold rounded-full uppercase tracking-widest">D3.js</span>
                </div>
                <h3 className="font-display text-3xl font-bold group-hover:text-violet-500 transition-colors">Lumina Analytics</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Real-time data visualization platform for monitoring multi-cloud infrastructure metrics and performance.
                </p>
                <NavLink to="/projects" className="text-violet-500 font-bold flex items-center gap-2 hover:underline">
                  View Project <span className="material-icons-outlined text-sm">east</span>
                </NavLink>
              </div>
              <div className="lg:w-1/2 bg-violet-950/20 flex items-center justify-center p-8 overflow-hidden">
                <img 
                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT0kOFoD64nLPJRPCzF4R-6bUYCfL_SqOqkJGPGO39btAkKVdwdx4z6NklwQmJg-6ZQ7xKKJiPbvHv9sIETz56Rnb04pKwVzC7El-Y3KzuqJZiX8byajFm8_1xZvCX2bvltJ3a6Xj2hrkXcEQwsh9tBl-3Fs2qK6EG1-d8ajM73QtzLePj9jhZ9Cj83YA-1LHh4IJRrddsxbMOX2D0bd0nk1_8ANXV92g5tRFuV0koeNSBsDm5wjSSqF4YaRW62rhOrELclNFZNSY"
                  alt="Lumina Analytics" 
                  className="rounded-xl shadow-2xl group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
