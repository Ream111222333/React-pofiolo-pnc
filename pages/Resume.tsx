
import React from 'react';
import { EXPERIENCES, EDUCATION, IMAGES } from '../constants';

const Resume: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Sidebar */}
      <aside className="lg:col-span-4 space-y-8">
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sticky top-24">
          <div className="relative w-32 h-32 mb-6 mx-auto">
            <img 
              src={IMAGES.resumePortrait} 
              alt="ream" 
              className="rounded-2xl object-cover w-full h-full shadow-xl"
            />
            <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white dark:border-slate-900"></div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-extrabold mb-2 font-display">Alex Rivera</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">
              2nd Year Web Development Student at PNC. Passionate about building accessible, high-performance web applications.
            </p>
            
            <div className="flex justify-center gap-4 mb-8">
              <a href="#" className="p-2 bg-primary/10 hover:bg-primary/20 rounded-lg text-primary transition-colors">
                <span className="material-icons">code</span>
              </a>
              <a href="#" className="p-2 bg-primary/10 hover:bg-primary/20 rounded-lg text-primary transition-colors">
                <span className="material-icons">groups</span>
              </a>
              <a href="#" className="p-2 bg-primary/10 hover:bg-primary/20 rounded-lg text-primary transition-colors">
                <span className="material-icons">alternate_email</span>
              </a>
            </div>
          </div>
          
          <div className="space-y-4 border-t border-slate-100 dark:border-slate-800 pt-6">
            <h3 className="text-xs font-bold text-primary uppercase tracking-widest">Technical Stack</h3>
            <div className="flex flex-wrap gap-2">
              {['React.js', 'Tailwind CSS', 'JS ES6', 'Node.js', 'PostgreSQL', 'GitHub', 'Figma'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-primary/5 border border-primary/10 rounded-md text-[10px] font-semibold text-primary">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="space-y-4 border-t border-slate-100 dark:border-slate-800 pt-6 mt-6">
            <h3 className="text-xs font-bold text-primary uppercase tracking-widest">Education</h3>
            <div>
              <p className="font-bold text-sm">{EDUCATION.degree}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{EDUCATION.school}</p>
              <p className="text-xs text-primary mt-1">GPA: {EDUCATION.gpa}</p>
            </div>
            <div className="space-y-2">
              {EDUCATION.coursework.map(course => (
                <div key={course} className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="w-1 h-1 bg-primary rounded-full"></span> {course}
                </div>
              ))}
            </div>
          </div>
        </section>
      </aside>

      {/* Main Content Area */}
      <div className="lg:col-span-8 space-y-12">
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <span className="material-icons-outlined">work_outline</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight font-display">Professional Experience</h2>
          </div>

          <div className="relative ml-6 border-l-2 border-slate-200 dark:border-slate-800 pl-10 space-y-12 pb-8">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[49px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background-light dark:border-background-dark shadow-xl"></div>
                
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary transition-all p-8 rounded-2xl group-hover:shadow-xl group-hover:shadow-primary/5">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-bold font-display">{exp.title}</h3>
                      <p className="text-primary font-semibold">{exp.company}</p>
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg text-xs font-medium text-slate-500">
                      {exp.period}
                    </div>
                  </div>
                  
                  <ul className="space-y-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="material-icons text-primary text-sm mt-1">check_circle</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider w-full mb-1">Technologies:</span>
                    {exp.technologies.map(tech => (
                      <span key={tech} className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded text-[10px] font-medium border border-slate-200 dark:border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Project Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary">
              <span className="material-icons">code</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight font-display">Featured Academic Work</h2>
          </div>
          
          <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row">
            <div className="p-10 md:w-1/2 space-y-6 flex flex-col justify-center">
              <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase tracking-tighter w-fit">Academic Project</span>
              <h3 className="text-2xl font-bold font-display">HealthConnect Portal</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                A full-stack patient management system designed for clinical trials. Features include secure login, patient record CRUD operations, and automated appointment scheduling.
              </p>
              <div className="flex items-center gap-8 pt-4">
                <a href="#" className="flex items-center gap-2 text-primary font-bold text-sm hover:underline">
                  View Repository <span className="material-icons text-sm">open_in_new</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-slate-400 font-bold text-sm hover:text-white transition-colors">
                  Live Demo <span className="material-icons text-sm">visibility</span>
                </a>
              </div>
            </div>
            <div className="md:w-1/2 aspect-video md:aspect-auto overflow-hidden">
              <img 
                src={IMAGES.healthProject} 
                alt="Health Project" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* Internship CTA */}
        <section className="bg-primary rounded-3xl p-12 text-center relative overflow-hidden text-white shadow-2xl">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl font-extrabold font-display">Looking for a dedicated Intern?</h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto">
              I am currently seeking Summer 2024/2025 internship opportunities in Frontend or Full-stack development. Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#/contact" className="bg-white text-primary px-8 py-3 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-xl">
                Send an Email
              </a>
              <a href="#" className="bg-primary-dark/40 border border-white/20 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-all backdrop-blur-sm">
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
