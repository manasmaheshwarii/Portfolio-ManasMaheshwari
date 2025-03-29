
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const sections = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];
  
  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-40 transition-all duration-300",
        scrolled ? "py-3 bg-black/80 backdrop-blur-lg" : "py-6"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-gradient-cyan">👨‍💻Manas Maheshwari</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {sections.map((section, index) => (
            <a 
              key={section.name}
              href={section.href} 
              className="link-underline text-sm uppercase tracking-wider hover:text-neon-cyan transition-colors"
            >
              {section.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-4 py-2 rounded-md bg-neon-cyan/10 border border-neon-cyan text-neon-cyan button-glow"
          >
            Get in Touch
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <div className={cn(
            "w-6 h-0.5 bg-white mb-1.5 transition-all",
            menuOpen && "rotate-45 translate-y-2"
          )}></div>
          <div className={cn(
            "w-6 h-0.5 bg-white mb-1.5 transition-all",
            menuOpen && "opacity-0"
          )}></div>
          <div className={cn(
            "w-6 h-0.5 bg-white transition-all",
            menuOpen && "-rotate-45 -translate-y-2"
          )}></div>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg py-4">
          <nav className="flex flex-col space-y-4 items-center">
            {sections.map((section) => (
              <a 
                key={section.name}
                href={section.href} 
                className="text-sm uppercase tracking-wider hover:text-neon-cyan transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {section.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
