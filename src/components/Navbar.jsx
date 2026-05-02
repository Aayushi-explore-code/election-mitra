import React, { useState } from 'react';
import { Menu, User, Languages } from 'lucide-react';

const Navbar = () => {
  const [lang, setLang] = useState('en');

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'hi' : 'en');
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-saffron border-b-4 border-black mb-8 shadow-brutal">
      <div className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
        {lang === 'en' ? 'Election Mitra' : 'चुनाव मित्र'}
      </div>
      <div className="flex gap-3 md:gap-4">
        <button 
          onClick={toggleLanguage}
          aria-label="Toggle Language"
          className="flex items-center gap-2 px-3 py-2 bg-white border-2 border-black shadow-brutal hover:shadow-brutal-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-bold"
        >
          <Languages size={20} />
          <span className="hidden sm:inline">{lang === 'en' ? 'HI' : 'EN'}</span>
        </button>
        <button className="p-2 bg-white border-2 border-black shadow-brutal hover:shadow-brutal-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-bold">
          <User size={20} />
        </button>
        <button className="p-2 bg-white border-2 border-black shadow-brutal hover:shadow-brutal-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-bold md:hidden">
          <Menu size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
