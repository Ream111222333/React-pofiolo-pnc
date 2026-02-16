
import React, { useState } from 'react';

const ContactItem = ({ icon, label, value }: { icon: string; label: string; value: string }) => (
  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-3xl flex items-center gap-6 shadow-sm hover:shadow-md transition-all">
    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
      <span className="material-icons-outlined">{icon}</span>
    </div>
    <div>
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{label}</p>
      <p className="text-sm font-semibold text-slate-900 dark:text-white">{value}</p>
    </div>
  </div>
);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-20">
      <div className="space-y-12">
        <div className="space-y-6">
          <h1 className="font-display text-6xl font-extrabold leading-tight">
            Let's Build <br />
            <span className="text-primary italic">Something</span> <br />
            Together
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
            I am currently a 2nd-year Web Development student at PNC, actively seeking internship opportunities for 2024/2025.
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Connect with me</p>
          <div className="space-y-4">
            <ContactItem icon="email" label="Email Address" value="contact@pnc-student.dev" />
            <ContactItem icon="link" label="LinkedIn" value="linkedin.com/in/pnc-web-student" />
            <ContactItem icon="code" label="GitHub Profile" value="github.com/pnc-web-student" />
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="relative h-48 bg-slate-100 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 flex items-center justify-center grayscale opacity-60">
           <div className="text-center space-y-2">
             <span className="material-icons-outlined text-4xl text-slate-400">place</span>
             <p className="text-xs font-bold text-slate-400">Based in PNC Campus Area</p>
           </div>
           {/* Decorative grid */}
           <div className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-20" style={{ backgroundImage: 'radial-gradient(#135bec 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-violet-500/20 rounded-[40px] blur-3xl opacity-50"></div>
        <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-10 rounded-[40px] shadow-2xl space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold font-display">Send a Message</h2>
            <p className="text-sm text-slate-500">I usually respond within 24 hours to professional inquiries.</p>
          </div>

          {submitted ? (
            <div className="bg-green-500/10 border border-green-500/20 p-8 rounded-3xl text-center space-y-4 animate-fade-in">
              <span className="material-icons-outlined text-4xl text-green-500">check_circle</span>
              <p className="font-bold text-green-600">Message Sent Successfully!</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Thank you for reaching out. I'll get back to you shortly.</p>
              <button onClick={() => setSubmitted(false)} className="text-primary font-bold text-sm">Send another message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Jane Doe"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-800 rounded-2xl py-4 px-6 text-sm focus:ring-primary focus:border-primary transition-all"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="jane@company.com"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-800 rounded-2xl py-4 px-6 text-sm focus:ring-primary focus:border-primary transition-all"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Subject</label>
                <input 
                  required
                  type="text" 
                  placeholder="Internship Inquiry"
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-800 rounded-2xl py-4 px-6 text-sm focus:ring-primary focus:border-primary transition-all"
                  value={formData.subject}
                  onChange={e => setFormData({...formData, subject: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Message</label>
                <textarea 
                  required
                  rows={6}
                  placeholder="Tell me about your project or internship opportunity..."
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-800 rounded-2xl py-4 px-6 text-sm focus:ring-primary focus:border-primary transition-all resize-none"
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-5 rounded-2xl shadow-xl shadow-primary/20 flex items-center justify-center gap-3 transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="animate-spin material-icons-outlined">sync</span>
                ) : (
                  <span className="material-icons-outlined text-sm">send</span>
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
          
          <p className="text-center text-[10px] text-slate-400 italic">
            * Your data will only be used to contact you regarding this inquiry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
