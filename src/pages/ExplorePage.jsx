import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { destinations } from '../data/destinations';
import Card from '../components/Card';

const ExplorePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  const categories = ["Semua", "Alam", "Budaya", "Petualangan", "Kuliner"];

  // Logika Filter & Search Combined
  const filteredDestinations = destinations.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "Semua" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 pb-20 min-h-screen bg-white">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Jelajahi Danau Toba</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Temukan 15 destinasi terbaik, mulai dari perbukitan hijau hingga situs warisan budaya yang mendunia.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full md:w-1/3">
            <input 
              type="text"
              placeholder="Cari tempat wisata..."
              className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-teal-500 outline-none transition-all shadow-sm"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="absolute left-4 top-3.5 text-slate-400">
              🔍
            </span>
          </div>

          {/* Category Chips */}
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat 
                  ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/30' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Results */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredDestinations.length > 0 ? (
            filteredDestinations.map((place) => (
              <motion.div layout key={place.id}>
                <Card {...place} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-slate-400">
              Destinasi "{searchQuery}" tidak ditemukan.
            </div>
          )}
        </motion.div>

      </div>
    </div>
  );
};

export default ExplorePage;