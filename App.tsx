
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Experience', path: '/resume' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">P</div>
            <span className="font-display font-bold text-xl tracking-tight text-primary dark:text-blue-400">PNC DEV</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `transition-colors hover:text-primary dark:hover:text-blue-400 ${
                    isActive ? 'text-primary dark:text-blue-400 font-bold underline underline-offset-8' : 'text-slate-600 dark:text-slate-400'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <span className="material-icons-outlined text-[20px] block dark:hidden">dark_mode</span>
              <span className="material-icons-outlined text-[20px] hidden dark:block">light_mode</span>
            </button>
            
            {location.pathname === '/resume' && (
              <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all shadow-lg shadow-primary/20">
                <span className="material-icons text-sm">download</span>
                Resume
              </button>
            )}
          </div>
          
          {/* Mobile menu toggle would go here */}
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">P</div>
            <span className="font-display font-bold text-xl tracking-tight text-primary dark:text-blue-400">PNC DEV</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs">
            Passionate student developer building the next generation of web experiences.
          </p>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-slate-400 hover:text-primary dark:hover:text-white transition-colors">
            <span className="material-icons-outlined">alternate_email</span>
          </a>
          <a href="#" className="text-slate-400 hover:text-primary dark:hover:text-white transition-colors">
            <span className="material-icons-outlined">code</span>
          </a>
          <a href="#" className="text-slate-400 hover:text-primary dark:hover:text-white transition-colors">
            <span className="material-icons-outlined">person_pin</span>
          </a>
        </div>
      </div>
      
      <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
        <p className="text-slate-500 dark:text-slate-400 text-xs">
          © {new Date().getFullYear()} Alex Rivera | PNC Portfolio Gallery. Built with React & Tailwind.
        </p>
      </div>
    </div>
  </footer>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
