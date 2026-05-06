import React from 'react';
import { Palmtree, Instagram, Youtube, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* KOLOM 1: LOGO & ABOUT */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-teal-500 p-2 rounded-xl">
                <Palmtree size={24} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold tracking-tighter font-poppins">
                Toba<span className="text-teal-400">Trip</span>
              </h2>
            </div>
            <p className="text-slate-400 leading-relaxed font-inter text-sm">
              Platform perjalanan terpercaya untuk mengeksplorasi keindahan Danau Toba dan kekayaan budaya Batak yang tak ternilai.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-teal-500 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-teal-500 transition-colors">
                <Youtube size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-teal-500 transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* KOLOM 2: QUICK LINKS */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-poppins text-white">Navigasi</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-inter">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href="#destinasi" className="hover:text-teal-400 transition-colors">Destinasi</a></li>
              <li><a href="#budaya" className="hover:text-teal-400 transition-colors">Budaya</a></li>
              <li><a href="#kontak" className="hover:text-teal-400 transition-colors">Testimonial</a></li>
            </ul>
          </div>

          {/* KOLOM 3: CONTACT INFO */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-poppins text-white">Kontak Kami</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-inter">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-teal-500" />
                Batam, Kepulauan Riau
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-teal-500" />
                +62 812 3456 7890
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-teal-500" />
                hello@tobatrip.com
              </li>
            </ul>
          </div>

          {/* KOLOM 4: NEWSLETTER */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-poppins text-white">Berlangganan</h4>
            <p className="text-slate-400 text-sm mb-4 font-inter">Dapatkan update promo dan destinasi terbaru.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email anda" 
                className="bg-slate-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-teal-500 outline-none"
              />
              <button className="bg-teal-500 p-2 rounded-lg hover:bg-teal-600 transition-colors">
                <Mail size={18} />
              </button>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-xs font-inter uppercase tracking-[0.2em]">
          &copy; 2026 TobaTrip Project — Built with React & Fedora by Marulitua x Gemini AI
        </div>
      </div>
    </footer>
  );
};

export default Footer;