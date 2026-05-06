import React from 'react';
import { motion } from 'framer-motion';
// Pastikan Ketua sudah punya gambar di path ini, atau sesuaikan namanya
import imgCulture from '../assets/images/leo-sagala.jpg'; 

const Culture = () => {
  return (
    <section id="budaya" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* SISI KIRI: VISUAL GAMBAR */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Frame Putih ala Portofolio Premium */}
          <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white p-1 bg-slate-50">
            <img 
              src={imgCulture} 
              alt="Budaya Batak Danau Toba" 
              className="w-full h-full object-cover rounded-[28px]" 
            />
          </div>

          {/* Badge Melayang */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="absolute -bottom-6 -right-6 bg-teal-500 text-white p-6 rounded-[24px] shadow-2xl border-4 border-white"
          >
            <p className="text-2xl font-black font-poppins">100%</p>
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-90">Autentik</p>
          </motion.div>
        </motion.div>

        {/* SISI KANAN: KONTEN TEKS */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-teal-600 font-black text-xs uppercase tracking-[0.4em] font-inter">Heritage & History</span>
            <h2 className="text-4xl md:text-5xl font-bold font-poppins leading-tight text-slate-900 mt-4">
              Warisan Luhur <br /> <span className="text-teal-500">Suku Batak</span>
            </h2>
          </motion.div>

          <p className="text-slate-500 leading-relaxed font-inter text-lg">
            Danau Toba bukan hanya soal pemandangan. Di baliknya tersimpan kekayaan budaya yang magis, mulai dari arsitektur Rumah Bolon yang ikonik hingga kain Ulos yang ditenun dengan penuh makna.
          </p>

          <ul className="space-y-5">
            {[
              "Filosofi Dalihan Na Tolu yang harmonis",
              "Seni Tenun Ulos Tradisional",
              "Tarian Tor-tor & Musik Gondang Sabangunan"
            ].map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center gap-4 text-slate-700 font-semibold font-inter"
              >
                <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-xs">✓</div>
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Dekorasi Blur Background */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-50 rounded-full blur-[120px] opacity-60 z-0"></div>
    </section>
  );
};

export default Culture;