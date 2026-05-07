// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion'; // Tambah motion

// Import Components & Sections
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import TopPlaces from './sections/TopPlaces';
import Culture from './sections/Culture';
import Testimonials from './sections/Testimonials';
import PlaceDetail from './pages/PlaceDetail';
import LoadingScreen from './components/LoadingScreen';
import OfflineScreen from './components/OfflineScreen';
import ExplorePage from './pages/ExplorePage'; 

// --- KOMPONEN TRANSISI LOGO (STINGER) ---
const PageStinger = () => (
  <motion.div
    className="fixed inset-0 z-[9999] flex items-center justify-center bg-teal-500"
    initial={{ y: "100%" }}
    animate={{ y: ["100%", "0%", "-100%"] }}
    transition={{ 
      duration: 1.5, 
      times: [0, 0.5, 1], 
      ease: "easeInOut" 
    }}
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
      transition={{ duration: 1.5, times: [0, 0.5, 1] }}
      className="flex flex-col items-center text-white"
    >
      {/* Kamu bisa ganti 🏝️ dengan <img> logo danau kamu nanti */}
      <span className="text-7xl mb-4">🏝️</span>
      <h2 className="text-3xl font-black tracking-tighter uppercase">TobaTrip</h2>
    </motion.div>
  </motion.div>
);

function AppContent() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Trigger animasi logo setiap kali path berubah
  useEffect(() => {
    // Abaikan transisi saat pertama kali load (biar tidak bentrok dengan loading screen)
    if (!isLoading) {
      setIsTransitioning(true);
      const timer = setTimeout(() => setIsTransitioning(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, isLoading]);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    const timer = setTimeout(() => setIsLoading(false), 2000);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearTimeout(timer);
    };
  }, []);

  if (!isOnline) {
    return <OfflineScreen />;
  }

  return (
    <>
      {/* Layar Loading Awal */}
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {/* Animasi Logo saat Pindah Halaman */}
      <AnimatePresence>
        {isTransitioning && <PageStinger key="stinger" />}
      </AnimatePresence>

      <div className="min-h-screen bg-slate-50 overflow-x-hidden font-inter">
        <Navbar />
        <main>
          {/* AnimatePresence untuk transisi konten yang halus */}
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }}
                >
                  <Hero />
                  <TopPlaces />
                  <Culture />
                  <Testimonials />
                </motion.div>
              } />
              
              <Route path="/destinasi" element={
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }}
                >
                  <ExplorePage />
                </motion.div>
              } />

              <Route path="/place/:id" element={
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }}
                >
                  <PlaceDetail />
                </motion.div>
              } />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;