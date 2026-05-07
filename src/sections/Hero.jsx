import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import navigasi
import Button from '../components/Button';
import heroImg from '../assets/images/danau-toba.jpg'; 

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      <img 
        src={heroImg} 
        alt="Pemandangan Danau Toba" 
        className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
      />

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

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-5"
        >
          {/* Sekarang onClick akan berfungsi karena sudah diterima oleh komponen Button */}
          <Button 
            variant="teal" 
            onClick={() => navigate('/destinasi')}
          >
            Explore Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;