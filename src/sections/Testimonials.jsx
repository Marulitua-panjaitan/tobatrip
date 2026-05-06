import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  // SEKARANG ADA 3 DATA REVIEW KETUA
  const reviews = [
    {
      name: "Hendri Panjaitan",
      origin: "Batam",
      text: "Pengalaman tak terlupakan di Samosir. Alamnya luar biasa tenang dan penduduknya sangat ramah. TobaTrip mempermudah semua perjalanan saya.",
      rating: 5
    },
    {
      name: "Capello Sidabutar",
      origin: "Siantar",
      text: "Sipiso-piso benar-benar megah! Booking lewat TobaTrip sangat cepat dan tidak ribet. Sangat direkomendasikan untuk solo traveler.",
      rating: 5
    },
    {
      name: "Siti Rahma",
      origin: "Medan",
      text: "Family trip jadi seru banget! Anak-anak senang belajar manortor dan keliling Toba. Guide dari TobaTrip sangat profesional dan paham sejarah.",
      rating: 5
    }
  ];

  return (
    <section id="testimoni" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* HEADER SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Quote className="mx-auto text-blue-200 mb-6" size={60} />
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-slate-900 tracking-tight">
            Apa Kata <span className="text-blue-600">Wisatawan?</span>
          </h2>
        </motion.div>

        {/* GRID TESTIMONIALS (Update Grid jadi 3 Kolom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {reviews.map((rev, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              // Class hover ditambahkan agar lebih interaktif
              className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div>
                {/* RATING BINTANG */}
                <div className="flex gap-1 mb-6 text-yellow-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                {/* TEKS REVIEW */}
                <p className="text-slate-600 font-inter text-lg italic leading-relaxed">
                  "{rev.text}"
                </p>
              </div>

              {/* INFO PENGGUNA */}
              <div className="mt-10 border-t border-slate-50 pt-6 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">— {rev.name}</h4>
                  <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] mt-1 font-black">
                    {rev.origin}
                  </p>
                </div>
                {/* Inisial Avatar */}
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold shrink-0">
                  {rev.name.charAt(0)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;