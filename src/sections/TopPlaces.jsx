import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Compass, ArrowRight } from 'lucide-react'; // Tambah ArrowRight
import { useNavigate } from 'react-router-dom'; // Tambah useNavigate
import Card from '../components/Card';

// IMPORT DATA PUSAT (Agar sinkron dengan ExplorePage)
import { destinations } from '../data/destinations';

const categories = ["Semua", "Alam", "Budaya", "Petualangan"];

const TopPlaces = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  // LOGIKA FILTER: Kita gunakan data dari 'destinations' (15 tempat)
  const filteredPlaces = destinations.filter((place) => {
    const matchesSearch = 
      place.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      activeCategory === "Semua" || place.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  // KITA AMBIL HANYA TOP 4 UNTUK HALAMAN DEPAN
  const top4Places = filteredPlaces.slice(0, 4);

  return (
    <section id="destinasi" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-teal-600 font-bold text-sm uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-lg">
            Eksplorasi
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-poppins text-slate-900 mt-3 tracking-tight">
            Rekomendasi Utama
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto font-inter">
            Temukan tempat-tempat magis terbaik di sekitar Danau Toba yang wajib Anda kunjungi.
          </p>
        </div>

        {/* Search & Filter Bar Container */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12 bg-white p-6 rounded-[28px] shadow-sm border border-slate-100">
          <div className="relative w-full md:w-96">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
              <Search size={20} />
            </span>
            <input
              type="text"
              placeholder="Cari destinasi atau lokasi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all font-inter text-sm"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto w-full md:w-auto no-scrollbar py-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold font-inter transition-all whitespace-nowrap active:scale-95 ${
                  activeCategory === category
                    ? "bg-teal-500 text-white shadow-lg shadow-teal-500/20"
                    : "bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Cards - Menampilkan TOP 4 Saja */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {top4Places.map((place) => (
              <motion.div
                key={place.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card {...place} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* TOMBOL SELENGKAPNYA (Sama dengan Explore Now) */}
        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/destinasi')}
            className="inline-flex items-center gap-3 bg-teal-500 text-white px-10 py-4 rounded-2xl font-black text-lg shadow-xl shadow-teal-500/20 hover:bg-teal-600 transition-all group"
          >
            Lihat Selengkapnya 
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </div>

        {/* State jika hasil pencarian kosong */}
        {filteredPlaces.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white rounded-[32px] border border-dashed border-slate-200"
          >
            <Compass className="mx-auto text-slate-300 mb-4 animate-spin-slow" size={48} />
            <h3 className="text-xl font-bold text-slate-700 font-poppins">Destinasi tidak ditemukan</h3>
            <p className="text-slate-400 mt-2 text-sm font-inter">Coba masukkan kata kunci lain, Ketua.</p>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default TopPlaces;