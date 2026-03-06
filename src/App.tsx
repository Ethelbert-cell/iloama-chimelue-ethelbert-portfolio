import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Github, Linkedin, Download, Layers, Home, Folder, Briefcase, Wrench, PenTool } from 'lucide-react';

// --- Constants & Data ---
const NAV_LINKS = [
  { name: 'Home', icon: Home, id: 'home' },
  { name: 'Projects', icon: Folder, id: 'projects' },
  { name: 'Experience', icon: Briefcase, id: 'experience' },
  { name: 'Skills', icon: Wrench, id: 'tools' },
  { name: 'Education', icon: PenTool, id: 'thoughts' },
];

const STATS = [
  { value: '+2', label: 'YEARS OF EXPERIENCE' },
  { value: '+8', label: 'PROJECTS COMPLETED' },
  { value: '+10', label: 'TECHNOLOGIES MASTERED' },
];

const PROJECTS = [
  { title: 'Pulse-Mate 🩺', subtitle: 'Health monitoring and medical management platform', image: '/PULSE.png', href: 'https://github.com/Ethelbert-cell/Pulse' },
  { title: 'LibraLink 📚', subtitle: 'Smart library support and service management platform', image: '/LLE.png', href: 'https://github.com/Ethelbert-cell/LLE' },
  { title: 'TULOS 🛍️', subtitle: 'High-fashion clothing and lifestyle e-commerce platform design', image: '/TULOS.png', href: 'https://www.figma.com/design/jGvAT5tcMBjRCbfkKghQ0S/TULOS--E-com-?node-id=0-1&t=X1VJrkjHtufUp1dE-1' },
];

const EXPERIENCES = [
  { company: 'Freelancer', role: 'Collaborate with clients to understand project requirements and deliver tailored digital solutions, including web development, UI/UX design, and creative media production, while managing multiple projects simultaneously.', period: 'Mar 2026 – Present' },
  { company: 'Media Team Member (Photography & Videography)', role: 'Collaborated with the church media team to produce high-quality visual content, capturing and editing photography and videography for events, assisting in live-stream productions, and creating promotional media using tools such as Adobe After Effects and Figma.', period: 'Jun 2023 - Aug 2025' },
  { company: 'NIIT Abuja – Student', role: 'Completed hands-on academic projects focused on solving real-world problems using structured problem-solving methodologies, while applying object-oriented programming principles and software development practices.', period: 'Sep 2023 – Jun 2025' },
];

const TOOLS = [
  { name: 'React', desc: 'Frontend Library', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Node.js', desc: 'Runtime Environment', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'MongoDB', desc: 'NoSQL Database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'Docker', desc: 'Containerization', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'Express', desc: 'Backend Framework', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
  { name: 'Figma', desc: 'Design Tool', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
  { name: 'Next.js', desc: 'React Framework', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
  { name: 'After Effects', desc: 'Motion Graphics', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-original.svg' },
];

const THOUGHTS = [
  { title: 'BSc (Hons) Information Technology', institution: 'Middlesex University Mauritius', date: 'Expected Jul 2026' },
  { title: 'Honors Diploma in Information Technology (Software Engineering)', institution: 'NIIT Abuja', date: 'Jun 2025' },
];

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// --- Components ---

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (id: string) => {
    setIsOpen(false);
    const isMobile = window.innerWidth < 1024;

    // Small delay so mobile menu closes before scroll fires
    setTimeout(() => {
      if (id === 'home') {
        if (isMobile) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          document.getElementById('right-column')?.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return;
      }

      const el = document.getElementById(id);
      if (!el) return;

      if (isMobile) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        const rightCol = document.getElementById('right-column');
        if (rightCol) {
          const offset = el.offsetTop - rightCol.offsetTop;
          rightCol.scrollTo({ top: offset, behavior: 'smooth' });
        }
      }
    }, 150);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter text-[#F5F5F5]"
        >
          ICE
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <motion.button
              key={i}
              onClick={() => handleNav(link.id)}
              whileHover={{ y: -2, color: '#FFFFFF' }}
              className="text-sm font-medium text-gray-400 transition-colors flex items-center gap-2 bg-transparent border-none cursor-pointer"
            >
              <link.icon className="w-4 h-4" />
              {link.name}
            </motion.button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#0A0A0A] border-b border-[#1F1F1F] overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {NAV_LINKS.map((link, i) => (
                <button key={i} onClick={() => handleNav(link.id)} className="text-gray-400 hover:text-white font-medium flex items-center gap-3 bg-transparent border-none cursor-pointer text-left">
                  <link.icon className="w-5 h-5" />
                  {link.name}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

const Marquee = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-[#1A1A1A] border border-[#2A2A2A] rounded-3xl py-4 flex items-center">
      <motion.div
        className="flex gap-8 px-4"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {[...Array(2)].map((_, i) => (
          <React.Fragment key={i}>
            <span className="text-[#F5F5F5] font-bold text-sm tracking-widest">REACT</span>
            <span className="text-[#F5F5F5] font-bold text-sm tracking-widest">NODE.JS</span>
            <span className="text-[#F5F5F5] font-bold text-sm tracking-widest">MONGODB</span>
            <span className="text-[#F5F5F5] font-bold text-sm tracking-widest">DOCKER</span>
            <span className="text-[#F5F5F5] font-bold text-sm tracking-widest">EXPRESS</span>
            <span className="text-[#F5F5F5] font-bold text-sm tracking-widest">FIGMA</span>
            <span className="text-[#F5F5F5] font-bold text-sm tracking-widest">NEXT.JS</span>
            <span className="text-[#F5F5F5] font-bold text-sm tracking-widest">ADOBE AFTER EFFECTS</span>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

const LeftPanel = () => {
  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-6 pb-10"
    >
      {/* Intro Card */}
      <motion.div variants={fadeInUp} className="bg-transparent rounded-[40px] p-0 flex flex-col items-center text-center shadow-2xl relative group">
        
        <div className="w-full h-[350px] md:h-[420px] rounded-[40px] overflow-hidden relative z-10 bg-black mt-4">
          <img 
            src="/mypicture.jpg" 
            alt="Iloama Chimelue Ethelbert" 
            className="w-full h-full object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Overlay Layer */}
          <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-4 pb-6">
            
            <div className="relative z-20 flex flex-col items-center">
              <h1 className="text-2xl lg:text-3xl font-extrabold text-[#F5F5F5] drop-shadow-lg tracking-tight mb-4 text-center">Iloama Chimelue Ethelbert</h1>
              
              <div className="flex items-center gap-4 text-white drop-shadow-lg">
                <motion.a whileHover={{ scale: 1.1 }} href="https://github.com/Ethelbert-cell" target="_blank" rel="noopener noreferrer" className="p-2.5 border border-white/30 bg-black/20 backdrop-blur-md rounded-full hover:bg-white/10 transition-colors"><Github className="w-5 h-5" /></motion.a>
                <motion.a whileHover={{ scale: 1.1 }} href="https://www.linkedin.com/in/chimelue-iloama-324401391" target="_blank" rel="noopener noreferrer" className="p-2.5 border border-white/30 bg-black/20 backdrop-blur-md rounded-full hover:bg-white/10 transition-colors"><Linkedin className="w-5 h-5" /></motion.a>
                <motion.a whileHover={{ scale: 1.1 }} href="#" className="p-2.5 border border-white/30 bg-black/20 backdrop-blur-md rounded-full hover:bg-white/10 transition-colors" title="Download CV"><Download className="w-5 h-5" /></motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4">
        {STATS.map((stat, i) => (
          <div key={i} className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-3xl p-6 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-white mb-2">{stat.value}</h2>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Marquee */}
      <motion.div variants={fadeInUp}>
        <Marquee />
      </motion.div>
    </motion.div>
  );
};

const RightPanel = () => {
  return (
    <div className="flex flex-col gap-24 pb-24 lg:pt-28">
      
      {/* Hero Text */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-10 lg:pt-0"
      >
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
          SOFTWARE<br/>
          <span className="text-[#1F1F1F]">ENGINEER</span>
        </h1>
        <p className="mt-8 text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed">
          Passionate about building practical digital solutions through both coding and design. I specialize in full-stack web development, creating scalable web applications while crafting intuitive and engaging user interfaces. My focus is on transforming innovative ideas into well designed, functional digital products that deliver great user experiences.
        </p>
      </motion.div>

      {/* Recent Projects */}
      <motion.section 
        id="projects"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-12">
          RECENT<br/>
          <span className="text-[#1F1F1F]">PROJECTS</span>
        </motion.h2>
        
        <div className="flex flex-col gap-6">
          {PROJECTS.map((project, i) => (
            <motion.a
              key={i} 
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              whileHover={{ scale: 1.02, borderColor: '#3A3A3A' }}
              className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-[40px] p-6 flex flex-col md:flex-row gap-8 items-center group cursor-pointer transition-colors"
            >
              <div className="w-full md:w-1/2 aspect-video rounded-3xl overflow-hidden bg-[#2A2A2A]">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="w-full md:w-1/2 flex justify-between items-center pr-4">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400">{project.subtitle}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-[#2A2A2A] flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-[#2A2A2A] transition-all shrink-0">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section 
        id="experience"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-12">
          WORK<br/>
          <span className="text-[#1F1F1F]">EXPERIENCE</span>
        </motion.h2>
        
        <div className="flex flex-col gap-12 border-l border-[#2A2A2A] ml-4 pl-8 relative">
          {EXPERIENCES.map((exp, i) => (
            <motion.div key={i} variants={fadeInUp} className="relative group">
              <div className="absolute -left-[37px] top-2 w-4 h-4 rounded-full bg-[#1A1A1A] border-2 border-[#2A2A2A] group-hover:border-purple-600 transition-colors"></div>
              <h3 className="text-2xl font-bold text-white mb-4">{exp.company}</h3>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-xl">{exp.role}</p>
              <p className="text-sm text-gray-500 font-medium">{exp.period}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Premium Tools */}
      <motion.section 
        id="tools"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-12">
          TECHNICAL<br/>
          <span className="text-[#1F1F1F]">SKILLS</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TOOLS.map((tool, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp}
              whileHover={{ scale: 1.02, borderColor: '#3A3A3A' }}
              className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-3xl p-6 flex items-center gap-6 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white p-2">
                <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain rounded-xl" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{tool.name}</h3>
                <p className="text-gray-400 text-sm">{tool.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Design Thoughts */}
      <motion.section 
        id="thoughts"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-12">
          ACADEMIC<br/>
          <span className="text-[#1F1F1F]">EDUCATION</span>
        </motion.h2>
        
        <div className="flex flex-col gap-4">
          {THOUGHTS.map((thought, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp}
              whileHover={{ scale: 1.02, borderColor: '#3A3A3A' }}
              className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-3xl p-8 flex justify-between items-center group cursor-default"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{thought.title}</h3>
                <p className="text-gray-500 text-sm">{thought.institution}</p>
              </div>
              <div className="text-right shrink-0 ml-4">
                <span className="text-xs text-gray-400 font-medium bg-[#2A2A2A] px-3 py-1.5 rounded-full whitespace-nowrap">{thought.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* WhatsApp CTA */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-12">
          LET'S WORK<br/>
          <span className="text-[#1F1F1F]">TOGETHER</span>
        </motion.h2>

        <motion.a
          variants={fadeInUp}
          href="https://wa.me/2348147346845?text=Hello%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you."
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02, borderColor: '#3A3A3A' }}
          className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-3xl p-8 flex justify-between items-center group cursor-pointer block"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Ready to start a project or work with me?</h3>
            <p className="text-gray-500 text-sm">Send me a message on WhatsApp.</p>
          </div>
          <div className="w-12 h-12 rounded-full border border-[#2A2A2A] flex items-center justify-center text-gray-400 group-hover:text-[#25D366] group-hover:bg-[#2A2A2A] transition-all shrink-0 ml-4">
            {/* WhatsApp SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21C17.5 21.83 22 17.38 22 11.91 22 6.45 17.5 2 12.04 2zm.01 17.94c-1.52 0-3-.4-4.28-1.16l-.31-.18-3.12.82.83-3.04-.2-.32A9.77 9.77 0 0 1 2.9 11.91c0-5.04 4.1-9.14 9.15-9.14 5.04 0 9.14 4.1 9.14 9.14 0 5.05-4.1 9.03-9.14 9.03zm5.01-6.76c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.02-.22-.53-.44-.46-.61-.47h-.52c-.18 0-.47.07-.71.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.1 2.82.14.18 1.91 2.92 4.63 4.1.65.28 1.15.45 1.55.57.65.2 1.24.17 1.71.1.52-.08 1.6-.65 1.82-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z"/>
            </svg>
          </div>
        </motion.a>
      </motion.section>

    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] font-sans selection:bg-purple-800 selection:text-white overflow-x-hidden">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 pt-28 lg:pt-0 lg:mt-20 lg:h-[calc(100vh-5rem)]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 lg:h-full">
          {/* Left Column — Fixed on Desktop */}
          <div className="w-full lg:w-[400px] shrink-0 lg:h-full">
            <LeftPanel />
          </div>
          
          {/* Right Column — Scrollable on Desktop */}
          <div id="right-column" className="w-full flex-1 min-w-0 lg:h-full lg:overflow-y-auto no-scrollbar">
            <RightPanel />
          </div>
        </div>
      </main>
    </div>
  );
}
