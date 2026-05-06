import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Compass } from 'lucide-react';
import Card from '../components/Card';

// Import gambar sesuai dengan asset yang Ketua gunakan
import imgSamosir from '../assets/images/samosir.jpg';
import imgHolbung from '../assets/images/bukitHolbung.jpg';
import imgSipisopiso from '../assets/images/piso.jpg';
import imgParapat2 from '../assets/images/parapat2.jpg';

// 1. Data Destinasi Terpusat agar Sinkron dengan Card & PlaceDetail
const placesData = [
  {
    id: "pulau-samosir",
    title: "Pulau Samosir",
    location: "Kabupaten Samosir",
    rating: "4.9",
    price: "Rp 1.250.000",
    image: imgSamosir,
    category: "Budaya"
  },
  {
    id: "bukit-holbung",
    title: "Bukit Holbung",
    location: "Samosir",
    rating: "4.8",
    price: "Rp 850.000",
    image: imgHolbung,
    category: "Alam"
  },
  {
    id: "air-terjun-sipiso-piso",
    title: "Air Terjun Sipiso-piso",
    location: "Merek, Karo",
    rating: "4.7",
    price: "Rp 950.000",
    image: imgSipisopiso,
    category: "Alam"
  },
  {
    id: "parapat",
    title: "Huta Ginjang",
    location: "Muara, Taput",
    rating: "4.6",
    price: "Rp 750.000",
    image: imgParapat2,
    category: "Petualangan"
  }
];

const categories = ["Semua", "Alam", "Budaya", "Petualangan"];

const TopPlaces = () => {
  // 2. Deklarasi State untuk Input Search & Kategori
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  // 3. Logika Filter Utama (Kombinasi Search & Category)
  const filteredPlaces = placesData.filter((place) => {
    const matchesSearch = 
      place.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      activeCategory === "Semua" || place.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

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
          
          {/* Kolom Search Input */}
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

          {/* Tombol Kategori (Pills) */}
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

        {/* Grid Cards dengan Animasi Transisi Halus (Framer Motion) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPlaces.map((place) => (
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

        {/* State jika hasil pencarian kosong */}
        {filteredPlaces.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white rounded-[32px] border border-dashed border-slate-200"
          >
            <Compass className="mx-auto text-slate-300 mb-4 animate-spin-slow" size={48} />
            <h3 className="text-xl font-bold text-slate-700 font-poppins">Destinasi tidak ditemukan</h3>
            <p className="text-slate-400 mt-2 text-sm font-inter">Coba masukkan kata kunci lain atau ganti kategori, Ketua.</p>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default TopPlaces;