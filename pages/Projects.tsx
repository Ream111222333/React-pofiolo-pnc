
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ProjectCategory } from '../types';
import { generateProjectIdea } from '../services/geminiService';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All Projects');
  const [aiIdea, setAiIdea] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const filters: ProjectCategory[] = ['All Projects', 'Frontend', 'Backend', 'Full-stack'];

  const filteredProjects = activeFilter === 'All Projects' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  const handleAiIdea = async () => {
    setIsGenerating(true);
    try {
      const idea = await generateProjectIdea("React, Tailwind, and Google Gemini API");
      setAiIdea(idea);
    } catch (err) {
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center gap-12 bg-white dark:bg-slate-900/50 p-12 rounded-3xl border border-slate-200 dark:border-slate-800">
        <div className="relative w-48 h-48 flex-shrink-0">
          <img 
            alt="Portrait" 
            className="rounded-2xl object-cover w-full h-full shadow-2xl border-4 border-white dark:border-slate-800" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkacSkwmK7MJZ6D69oHZoGPwXR_xan3m7zdZtJp6EZO9KUWwsmWU8sVtmg2JbrhAH63TUjiQzcBMPogx2mxdqMPmPmyX6ZETiRU2b9pmYXRAOr3fqgV1Xq8MkM5Gmwn5G0pWPqWZXw4ncXQSRpw4EeOZI9n_Ke8RzzYOP5T11hMJq7EXatjM8pyNU5bmvNVjy248Z2QgjvQUfHfTdRI1Inqxmxr5HNCzN5DNunQaa8j7f6MV5kDzmy-jfvCnXBLifVqR7RDuOmnjU"
          />
          <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white dark:border-slate-900"></div>
        </div>
        <div className="text-center md:text-left">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Project Gallery
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            A collection of web development projects created during my 2nd year at PNC. 
            Focused on building scalable, user-centric applications using modern frameworks.
          </p>
        </div>
      </header>

      {/* Filters Sticky Bar */}
      <section className="sticky top-20 z-40 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-md py-4 rounded-full px-4 border border-slate-200 dark:border-slate-800 shadow-lg">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-sm ${
                activeFilter === f 
                  ? 'bg-primary text-white shadow-primary/20' 
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Project Grid */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <article key={project.id} className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="relative overflow-hidden aspect-video">
              <img 
                src={project.image} 
                alt={project.title} 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-4 left-4">
                <span className={`text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full ${
                  project.category === 'Frontend' ? 'bg-blue-600' : 
                  project.category === 'Backend' ? 'bg-indigo-600' : 'bg-violet-600'
                }`}>
                  {project.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[11px] px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4">
                {project.links.demo && (
                  <a className="flex items-center gap-1 text-sm font-semibold text-primary dark:text-blue-400 hover:underline" href={project.links.demo}>
                    <span className="material-icons-outlined text-[18px]">launch</span> Live Demo
                  </a>
                )}
                {project.links.docs && (
                  <a className="flex items-center gap-1 text-sm font-semibold text-primary dark:text-blue-400 hover:underline" href={project.links.docs}>
                    <span className="material-icons-outlined text-[18px]">description</span> Docs
                  </a>
                )}
                {project.links.source && (
                  <a className="flex items-center gap-1 text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" href={project.links.source}>
                    <span className="material-icons-outlined text-[18px]">code</span> Source
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </main>

      {/* AI Brainstorming Section */}
      <section className="bg-gradient-to-br from-primary to-indigo-800 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
        <div className="relative z-10 space-y-8">
          <div className="space-y-4">
            <h2 className="font-display text-3xl font-bold">Need a Project Idea?</h2>
            <p className="text-white/80 max-w-xl">
              Let my built-in AI assistant brainstorm a unique project for you based on the tech stack I use.
            </p>
          </div>
          
          <button
            onClick={handleAiIdea}
            disabled={isGenerating}
            className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all flex items-center gap-3 disabled:opacity-50"
          >
            {isGenerating ? (
              <span className="animate-spin material-icons-outlined">sync</span>
            ) : (
              <span className="material-icons-outlined">psychology</span>
            )}
            {isGenerating ? 'Brainstorming...' : 'Generate AI Project Idea'}
          </button>

          {aiIdea && (
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl animate-fade-in">
              <h3 className="text-2xl font-bold mb-2">{aiIdea.title}</h3>
              <p className="text-white/90 mb-6">{aiIdea.description}</p>
              <ul className="space-y-2">
                {aiIdea.features.map((f: string, i: number) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-white/80">
                    <span className="material-icons text-[14px]">stars</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        {/* Background Decor */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-white/10 rounded-full blur-[100px]"></div>
      </section>
    </div>
  );
};

export default Projects;
