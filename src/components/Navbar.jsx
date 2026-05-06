import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Menu, X, Palmtree, Compass, Map, PhoneCall, Home } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // FUNGSI SAKTI: Handle navigasi antar halaman & smooth scroll
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setIsMenuOpen(false); // Tutup menu mobile jika terbuka
    
    if (location.pathname !== '/') {
      // Jika di halaman detail, lari ke home dulu
      navigate('/');
      // Tunggu render halaman home selesai, baru scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      // Jika sudah di home, langsung scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Navigasi khusus ke paling atas Home
  const goToTop = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 py-5 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" onClick={goToTop} className="flex items-center gap-2 group">
          <div className="bg-teal-500 p-2 rounded-xl shadow-lg shadow-teal-500/30 group-hover:rotate-12 transition-transform">
            <Palmtree size={24} className="text-white" />
          </div>
          <h1 className={`text-2xl font-bold tracking-tighter transition-colors font-poppins ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            Toba<span className="text-teal-400">Trip</span>
          </h1>
        </Link>

        {/* MENU DESKTOP */}
        <div className={`hidden md:flex space-x-8 font-semibold text-sm font-inter ${isScrolled ? 'text-slate-700' : 'text-white'}`}>
          <a href="/" onClick={goToTop} className="flex items-center gap-2 hover:text-teal-500 transition-colors">
            <Home size={16} /> Home
          </a>
          <a href="#destinasi" onClick={(e) => handleNavClick(e, 'destinasi')} className="flex items-center gap-2 hover:text-teal-500 transition-colors">
            <Map size={16} /> Destinasi
          </a>
          <a href="#budaya" onClick={(e) => handleNavClick(e, 'budaya')} className="flex items-center gap-2 hover:text-teal-500 transition-colors">
            <Compass size={16} /> Budaya
          </a>
          <a href="#testimoni" onClick={(e) => handleNavClick(e, 'testimoni')} className="flex items-center gap-2 hover:text-teal-500 transition-colors">
            <PhoneCall size={16} /> Testimoni
          </a>
        </div>

        {/* AKSI & TOGGLE MOBILE */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-teal-500 text-white px-7 py-2.5 rounded-full font-bold hover:bg-teal-600 transition shadow-lg shadow-teal-500/30 font-inter text-sm active:scale-95">
            Masuk
          </button>
          
          <button className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-slate-900' : 'text-white'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-white z-[90] p-6 flex flex-col gap-6 animate-in slide-in-from-right duration-300">
          <div className="flex flex-col gap-4 font-bold text-lg text-slate-800 font-poppins">
            <a href="/" onClick={goToTop} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl"><Home className="text-teal-500"/> Home</a>
            <a href="#destinasi" onClick={(e) => handleNavClick(e, 'destinasi')} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl"><Map className="text-teal-500"/> Destinasi</a>
            <a href="#budaya" onClick={(e) => handleNavClick(e, 'budaya')} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl"><Compass className="text-teal-500"/> Budaya</a>
            <a href="#testimoni" onClick={(e) => handleNavClick(e, 'testimoni')} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl"><PhoneCall className="text-teal-500"/> Testimoni</a>
          </div>
          <button className="mt-auto w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-slate-200">
            Masuk Sekarang
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;