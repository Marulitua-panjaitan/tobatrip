import React from 'react';
import { motion } from 'framer-motion';
import { Waves } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-slate-900 flex flex-col items-center justify-center text-white"
    >
      {/* Icon Ombak/Danau */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0] 
        }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mb-6 text-teal-400"
      >
        <Waves size={80} strokeWidth={1.5} />
      </motion.div>

      {/* Teks Loading */}
      <div className="overflow-hidden">
        <motion.h2 
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          className="text-2xl font-poppins font-bold tracking-[0.2em] uppercase"
        >
          Toba<span className="text-teal-400">Trip</span>
        </motion.h2>
      </div>

      {/* Progress Bar Tipis */}
      <div className="w-48 h-[2px] bg-slate-800 mt-4 overflow-hidden rounded-full relative">
        <motion.div 
          initial={{ left: "-100%" }}
          animate={{ left: "100%" }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="absolute inset-0 w-full h-full bg-teal-400"
        />
      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-slate-500 text-[10px] font-bold tracking-widest italic uppercase"
      >
        Menyiapkan Keajaiban Danau Toba...
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;