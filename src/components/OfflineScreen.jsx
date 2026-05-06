import React from 'react';
import { WifiOff, RefreshCw, Map } from 'lucide-react';
import { motion } from 'framer-motion';

const OfflineScreen = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-inter">
      <div className="max-w-md w-full text-center space-y-8">
        
        {/* ILUSTRASI ANIMASI */}
        <div className="relative flex justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 bg-white p-10 rounded-[40px] shadow-2xl shadow-teal-500/10 border border-slate-100"
          >
            <div className="relative">
              <WifiOff size={80} className="text-slate-300 mx-auto" />
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3] 
                }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute inset-0 bg-teal-400 rounded-full blur-3xl -z-10"
              />
            </div>
          </motion.div>
          
          {/* Dekorasi Peta Melayang */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute -top-6 -right-4 bg-teal-500 text-white p-4 rounded-2xl shadow-xl"
          >
            <Map size={24} />
          </motion.div>
        </div>

        {/* TEKS PESAN */}
        <div className="space-y-3">
          <h1 className="text-3xl font-black text-slate-900 tracking-tighter">Koneksi Terputus!</h1>
          <p className="text-slate-500 leading-relaxed">
            Sepertinya sinyalnya lagi nyangkut di bukit Samosir nih. Cek kuota atau Wi-Fi kamu dulu ya Ketua!
          </p>
        </div>

        {/* TOMBOL REFRESH */}
        <button
          onClick={handleRefresh}
          className="group flex items-center gap-3 bg-slate-900 hover:bg-teal-500 text-white px-8 py-4 rounded-2xl font-bold mx-auto transition-all active:scale-95 shadow-xl hover:shadow-teal-500/20"
        >
          <RefreshCw size={20} className="group-hover:rotate-180 transition-transform duration-700" />
          Coba Lagi
        </button>

        <p className="text-xs text-slate-400 font-medium uppercase tracking-widest italic">
          TobaTrip — Jelajahi Danau Toba
        </p>
      </div>
    </div>
  );
};

export default OfflineScreen;