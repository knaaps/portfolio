import React from 'react';

export default function Header({ activeSection, setActiveSection }) {
  const NavButton = ({ section, label }) => (
    <button 
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
        // Using config colors: primary, foreground, muted, background
        activeSection === section 
          ? 'bg-primary text-background shadow-lg shadow-primary/20' 
          : 'text-muted hover:text-foreground hover:bg-border/50'
      }`}
      onClick={() => setActiveSection(section)}
    >
      {label}
    </button>
  );

  return (
    <header className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50 animate-fade-in">
      <div className="max-w-5xl mx-auto px-6 py-5">
        <nav className="flex justify-between items-center">
          <h1 className="text-xl font-semibold text-primary">
            VINAYAK SANTHOSH
          </h1>
          <div className="flex gap-2">
            <NavButton section="about" label="About" />
            <NavButton section="projects" label="Projects" />
            <NavButton section="contact" label="Contact" />
          </div>
        </nav>
      </div>
    </header>
  );
}
