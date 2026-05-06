// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import TopPlaces from './sections/TopPlaces';
import Culture from './sections/Culture';
import Testimonials from './sections/Testimonials';
import PlaceDetail from './pages/PlaceDetail';
import LoadingScreen from './components/LoadingScreen';
import OfflineScreen from './components/OfflineScreen'; // Import fitur baru

function AppContent() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  
  // --- FITUR DETEKSI INTERNET ---
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Timer loading screen tetap berjalan
    const timer = setTimeout(() => setIsLoading(false), 2000);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearTimeout(timer);
    };
  }, []);

  // JIKA OFFLINE: Langsung tampilkan OfflineScreen (Prioritas Utama)
  if (!isOnline) {
    return <OfflineScreen />;
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <div className="min-h-screen bg-slate-50 overflow-x-hidden font-inter">
        <Navbar />
        <main>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={
                <>
                  <Hero />
                  <TopPlaces />
                  <Culture />
                  <Testimonials />
                </>
              } />
              <Route path="/place/:id" element={<PlaceDetail />} />
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