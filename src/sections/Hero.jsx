import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
// 1. Impor gambar lokal Ketua di sini
import heroImg from '../assets/images/danau-toba.jpg'; 

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* 2. Tag untuk menampilkan gambar background */}
      <img 
        src={heroImg} 
        alt="Pemandangan Danau Toba" 
        className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
      />

      {/* Overlay Gelap agar teks terbaca */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      <div className="relative z-20 text-center text-white px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-extrabold mb-6 font-poppins tracking-tighter"
        >
          Discover The Beauty <br /> of <span className="text-teal-400 italic">Danau Toba</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90 font-inter"
        >
          Jelajahi kaldera vulkanik terbesar di dunia dan rasakan keajaiban budaya Batak.
        </motion.p>

        <div className="flex justify-center gap-5">
          <Button variant="primary">Explore Now</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;