import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; 
import { MapPin, Star, Clock, ShieldCheck, Camera, X } from 'lucide-react'; 
import Swal from 'sweetalert2';

// Import gambar
import imgSamosir from '../assets/images/samosir.jpg';
import imgHolbung from '../assets/images/bukitHolbung.jpg';
import imgSipisopiso from '../assets/images/piso.jpg';
import imgParapat2 from '../assets/images/parapat2.jpg';

const PlaceDetail = () => {
  const { id } = useParams();
  const [selectedImg, setSelectedImg] = useState(null); 
  const [formData, setFormData] = useState({ name: '', email: '', date: '' }); 
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const destinations = {
    "pulau-samosir": {
      title: "Pulau Samosir",
      location: "Kabupaten Samosir",
      rating: "4.9",
      price: "Rp 1.250.000",
      desc: "Jantung kebudayaan Batak yang terletak tepat di tengah Danau Toba. Menawarkan perpaduan sempurna antara wisata sejarah dan keindahan alam.",
      image: imgSamosir,
      feature: "Budaya & Sejarah"
    },
    "bukit-holbung": {
      title: "Bukit Holbung",
      location: "Samosir",
      rating: "4.8",
      price: "Rp 850.000",
      desc: "Dikenal sebagai 'Bukit Teletubbies', tempat ini adalah spot camping terbaik dengan panorama 360 derajat Danau Toba.",
      image: imgHolbung,
      feature: "Panorama & Camping"
    },
    "air-terjun-sipiso-piso": {
      title: "Air Terjun Sipiso-piso",
      location: "Merek, Karo",
      rating: "4.7",
      price: "Rp 950.000",
      desc: "Air terjun setinggi 120 meter yang jatuh langsung menuju bibir Danau Toba, menciptakan pemandangan ikonik.",
      image: imgSipisopiso,
      feature: "Wisata Alam"
    },
    "parapat": {
      title: "Huta Ginjang",
      location: "Muara, Taput",
      rating: "4.6",
      price: "Rp 750.000",
      desc: "Spot terbaik untuk melihat luasnya Danau Toba dari ketinggian, populer untuk gantole dan paralayang.",
      image: imgParapat2,
      feature: "Olahraga Ekstrim"
    }
  };

  const data = destinations[id] || destinations["pulau-samosir"];

  const handleBooking = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    let newErrors = {};

    const nameRegex = /^[a-zA-Z\s]{3,30}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(formData.name)) newErrors.name = "Nama wajib diisi (3-30 huruf)";
    if (!emailRegex.test(formData.email)) newErrors.email = "Email tidak valid";
    if (!formData.date) newErrors.date = "Pilih tanggal perjalanan";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    setErrors({});

    Swal.fire({
      title: 'Konfirmasi Pesanan',
      text: `Horas ${formData.name}! Konfirmasi pesanan ke ${data.title}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#14b8a6',
      confirmButtonText: 'Ya, Pesan Sekarang!',
      background: '#0f172a',
      color: '#ffffff',
      borderRadius: '24px',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Berhasil!',
          text: `Pesanan diterima. Cek email ${formData.email} ya Ketua!`,
          icon: 'success',
          confirmButtonColor: '#14b8a6',
          background: '#0f172a',
          color: '#ffffff',
        });
      }
      setIsSubmitting(false);
    });
  };

  return (
    <div className="bg-white min-h-screen font-inter text-slate-900">
      {/* 1. HEADER IMAGE (Bersih Tanpa Icon Apapun) */}
      <div 
        className="relative h-[55vh] w-full overflow-hidden cursor-zoom-in group"
        onClick={() => setSelectedImg(data.image)}
      >
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          src={data.image} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
          alt={data.title} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 -mt-20 relative z-10 pb-20">
        <div className="bg-white rounded-[50px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] p-8 md:p-14 border border-slate-50">
          <div className="flex flex-col lg:flex-row justify-between gap-16">
            
            {/* KIRI: INFO DESTINASI */}
            <div className="lg:w-2/3 space-y-10">
              <div className="flex items-center gap-3 text-teal-600 font-bold text-sm uppercase tracking-widest">
                <span className="bg-teal-50 px-4 py-1.5 rounded-xl italic">{data.feature}</span>
                <span className="flex items-center gap-2"><MapPin size={18} /> {data.location}</span>
              </div>
              <h1 className="text-5xl md:text-5xl font-black tracking-tighter leading-[0.9] font-poppins">{data.title}</h1>
              
              <div className="flex items-center gap-10 py-8 border-y border-slate-100">
                <div className="flex items-center gap-3">
                  <Star className="text-yellow-400" fill="currentColor" size={32} />
                  <span className="font-black text-4xl">{data.rating}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500">
                  <Camera size={28} className="text-blue-500" />
                  <span className="text-sm font-bold uppercase tracking-tighter leading-none italic">Instagrammable<br/>Spot</span>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-3xl font-black font-poppins tracking-tight">Tentang Destinasi</h3>
                <p className="text-slate-500 leading-relaxed text-2xl font-light">{data.desc}</p>
              </div>
            </div>

            {/* KANAN: BOOKING CARD (Fitur Pembayaran) */}
            <div className="lg:w-1/3">
              <div className="bg-slate-950 text-white p-10 rounded-[45px] sticky top-28 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-800">
                <div className="mb-10">
                  <p className="text-slate-500 text-xs mb-1 uppercase tracking-[0.3em] font-black">Harga Per Orang</p>
                  <h2 className="text-4xl font-black font-poppins text-teal-400 tracking-tighter">{data.price}</h2>
                </div>

                <form onSubmit={handleBooking} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase ml-2 tracking-widest">Nama Pelanggan</label>
                    <motion.input 
                      animate={errors.name ? { x: [-5, 5, -5, 5, 0] } : {}}
                      type="text" 
                      placeholder="Masukkan nama..."
                      className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-slate-800'} p-5 rounded-2xl focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all text-white placeholder:text-slate-600`}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase ml-2 tracking-widest">Alamat Email</label>
                    <motion.input 
                      animate={errors.email ? { x: [-5, 5, -5, 5, 0] } : {}}
                      type="email" 
                      placeholder="Ketua@email.com"
                      className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-slate-800'} p-5 rounded-2xl focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all text-white placeholder:text-slate-600`}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase ml-2 tracking-widest">Pilih Tanggal</label>
                    <input 
                      type="date" 
                      className="w-full bg-white/5 border border-slate-800 p-5 rounded-2xl focus:border-teal-500 outline-none transition-all text-slate-400"
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-teal-500 hover:bg-teal-400 text-slate-950 py-6 rounded-3xl font-black text-xl shadow-2xl shadow-teal-500/20 active:scale-[0.98] transition-all mt-4 uppercase tracking-tighter"
                  >
                    {isSubmitting ? "Processing..." : "Pesan Sekarang"}
                  </button>
                </form>

                <div className="mt-10 pt-8 border-t border-white/5 space-y-4 opacity-40">
                  <div className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase"><ShieldCheck size={20} className="text-teal-500" /> Secure Payment</div>
                  <div className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase"><Clock size={20} className="text-teal-500" /> Instant Confirm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6 cursor-zoom-out"
          >
            <motion.button whileHover={{ rotate: 90 }} className="absolute top-10 right-10 text-white bg-white/10 p-4 rounded-full">
              <X size={32} />
            </motion.button>
            <motion.img 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              src={selectedImg} 
              className="max-w-full max-h-[85vh] rounded-[40px] shadow-2xl border border-white/10"
              alt="Fullscreen"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PlaceDetail;