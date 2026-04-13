import React, { useEffect, useState } from 'react';
import { scrollToSection } from '@/lib/utils';

const navItems = [
  { name: 'Work', id: 'projects' },
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Contact', id: 'contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handle = (id: string) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 pt-5 pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center gap-1 transition-all duration-500 ease-out ${
          scrolled
            ? 'rounded-full border border-white/10 bg-[#0C0C0B]/80 backdrop-blur-xl px-2 py-2 shadow-2xl'
            : 'w-full max-w-6xl rounded-none border-0 bg-transparent px-0 py-3'
        }`}
      >
        <button
          onClick={() => handle('hero')}
          className={`flex items-center gap-2 ${scrolled ? 'pl-3 pr-2' : 'mr-auto'}`}
        >
          <span className="relative w-2 h-2 rounded-full bg-[#FF3D00]">
            <span className="absolute inset-0 rounded-full bg-[#FF3D00] animate-ping opacity-60" />
          </span>
          <span className="font-display text-lg font-bold text-[#EDEDE8] tracking-tight">
            Ayush<span className="text-[#FF3D00]">.</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handle(item.id)}
              className="px-4 py-2 text-[13px] text-[#93938F] hover:text-[#EDEDE8] rounded-full transition-colors"
            >
              {item.name}
            </button>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handle('contact');
            }}
            className="ml-2 px-4 py-2 text-[13px] font-medium text-[#0C0C0B] bg-[#EDEDE8] hover:bg-[#FF3D00] hover:text-white rounded-full transition-colors"
          >
            Let's talk →
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2.5 rounded-full border border-white/10"
          aria-label="Toggle menu"
        >
          <div className="w-4 h-4 flex flex-col justify-center gap-[3px]">
            <span
              className={`block h-[1.5px] bg-[#EDEDE8] transition-transform ${
                open ? 'rotate-45 translate-y-[4px]' : ''
              }`}
            />
            <span
              className={`block h-[1.5px] bg-[#EDEDE8] transition-opacity ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-[1.5px] bg-[#EDEDE8] transition-transform ${
                open ? '-rotate-45 -translate-y-[5px]' : ''
              }`}
            />
          </div>
        </button>

        {open && (
          <div className="md:hidden absolute top-full right-6 mt-3 min-w-[200px] rounded-2xl bg-[#141413] border border-white/10 shadow-2xl overflow-hidden">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handle(item.id)}
                className="block w-full text-left px-5 py-3 text-sm text-[#EDEDE8] hover:bg-white/5 transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
