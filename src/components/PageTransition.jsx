import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-teal-500"
      initial={{ y: "100%" }} // Mulai dari bawah layar
      animate={{ y: ["100%", "0%", "-100%"] }} // Naik ke atas, tutup layar, lalu lanjut ke atas luar layar
      transition={{ 
        duration: 1.5, 
        times: [0, 0.5, 1], // Mengatur waktu animasi agar berhenti sejenak di tengah
        ease: "easeInOut" 
      }}
    >
      {/* Logo Danau Toba di tengah tirai */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
        transition={{ duration: 1.5, times: [0, 0.5, 1] }}
        className="flex flex-col items-center"
      >
        <span className="text-6xl mb-4">🏝️</span> {/* Ganti dengan tag <img> logo kamu */}
        <h2 className="text-white text-3xl font-black tracking-tighter">TobaTrip</h2>
      </motion.div>
    </motion.div>
  );
};

export default PageTransition;