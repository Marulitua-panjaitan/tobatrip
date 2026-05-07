import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Menu, X, Palmtree, Compass, Map, Home, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  // Fungsi handle scroll untuk section di halaman Home (Budaya & Testimoni)
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToTop = (e) => {
    if (e) e.preventDefault();
    setIsMenuOpen(false);
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <nav className={`fixed w-full transition-all duration-500 z-[999] ${
        isScrolled 
        ? 'bg-white/90 backdrop-blur-xl shadow-xl py-3 border-b border-slate-100' 
        : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* LOGO */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={goToTop}>
            <div className="bg-teal-500 p-2.5 rounded-2xl shadow-lg shadow-teal-500/30 group-hover:rotate-12 transition-transform">
              <Palmtree className="text-white" size={26} />
            </div>
            <span className={`text-2xl font-black tracking-tighter transition-colors ${
              isScrolled ? 'text-slate-900' : 'text-slate-800 md:text-teal-400'
            }`}>
              Toba<span className="text-teal-500">Trip</span>
            </span>
          </div>

          {/* MENU DESKTOP (PC) */}
          <div className={`hidden md:flex items-center gap-8 font-bold text-xs uppercase tracking-[0.15em] transition-colors ${
            isScrolled ? 'text-slate-600' : 'text-slate-800 md:text-white'
          }`}>
            <Link to="/" onClick={goToTop} className="flex items-center gap-2 hover:text-teal-500 transition-all group">
              <Home size={18} className="group-hover:-translate-y-1 transition-transform" /> 
              <span>Home</span>
            </Link>

            {/* NAVIGASI KE HALAMAN EXPLORE (SOLUSI FIX 404) */}
            <Link to="/destinasi" className="flex items-center gap-2 hover:text-teal-500 transition-all group">
              <Map size={18} className="group-hover:-translate-y-1 transition-transform" /> 
              <span>Destinasi</span>
            </Link>

            <a href="#budaya" onClick={(e) => handleNavClick(e, 'budaya')} className="flex items-center gap-2 hover:text-teal-500 transition-all group">
              <Compass size={18} className="group-hover:-translate-y-1 transition-transform" /> 
              <span>Budaya</span>
            </a>
            <a href="#testimoni" onClick={(e) => handleNavClick(e, 'testimoni')} className="flex items-center gap-2 hover:text-teal-500 transition-all group">
              <MessageSquare size={18} className="group-hover:-translate-y-1 transition-transform" /> 
              <span>Testimoni</span>
            </a>
          </div>

          {/* TOGGLE MOBILE */}
          <div className="md:hidden">
            <button 
              className={`p-2.5 rounded-2xl transition-all ${
                isScrolled ? 'text-slate-900 bg-slate-100' : 'text-white bg-white/20 backdrop-blur-md border border-white/30'
              }`} 
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1000] md:hidden"
            />
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-white/70 backdrop-blur-3xl z-[1001] shadow-2xl border-l border-white/40 md:hidden p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-12 border-b border-black/5 pb-6">
                <span className="text-xl font-black text-slate-900 italic tracking-tighter">MENU</span>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-slate-900 text-white rounded-xl">
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-6 font-poppins">
                <Link to="/" onClick={goToTop} className="flex items-center gap-6 text-xl font-bold text-slate-800 p-4 rounded-2xl hover:bg-teal-50 transition-colors">
                  <Home className="text-teal-500" size={26}/> Home
                </Link>
                <Link to="/destinasi" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-6 text-xl font-bold text-slate-800 p-4 rounded-2xl hover:bg-teal-50 transition-colors">
                  <Map className="text-teal-500" size={26}/> Destinasi
                </Link>
                <a href="#budaya" onClick={(e) => handleNavClick(e, 'budaya')} className="flex items-center gap-6 text-xl font-bold text-slate-800 p-4 rounded-2xl hover:bg-teal-50 transition-colors">
                  <Compass className="text-teal-500" size={26}/> Budaya
                </a>
                <a href="#testimoni" onClick={(e) => handleNavClick(e, 'testimoni')} className="flex items-center gap-6 text-xl font-bold text-slate-800 p-4 rounded-2xl hover:bg-teal-50 transition-colors">
                  <MessageSquare className="text-teal-500" size={26}/> Testimoni
                </a>
              </div>

              <div className="mt-auto pt-8 border-t border-black/5">
                <button className="w-full bg-slate-900 text-white py-5 rounded-3xl font-black text-lg shadow-xl">
                  Masuk Sekarang
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;