import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Kurikulum from './components/Kurikulum';
import Timeline from './components/Timeline';
import Persyaratan from './components/Persyaratan';
import HowToJoin from './components/HowToJoin';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 flex items-center justify-between px-20 pt-10 pb-20 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-96 h-96 bg-blue-300 opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-200 opacity-20 rounded-full blur-3xl" />

        <div className="z-10 max-w-lg">
          <span className="bg-white bg-opacity-20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 inline-block">
            🚀 Microsoft x Dicoding
          </span>
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mt-4 mb-6">
            Microsoft Elevate <br />
            <span className="text-white">Training Center</span>
          </h1>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed">
            Program pelatihan eksklusif untuk para developer Indonesia yang ingin menguasai AI tingkat lanjut bersama Microsoft & Dicoding.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Daftar Sekarang
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300">
              Pelajari Lebih
            </button>
          </div>
          <div className="flex gap-8 mt-12">
            <div>
              <p className="text-white text-2xl font-extrabold">50.000+</p>
              <p className="text-blue-100 text-sm">Peserta</p>
            </div>
            <div className="border-l border-blue-300 pl-8">
              <p className="text-white text-2xl font-extrabold">100%</p>
              <p className="text-blue-100 text-sm">Gratis</p>
            </div>
            <div className="border-l border-blue-300 pl-8">
              <p className="text-white text-2xl font-extrabold">7</p>
              <p className="text-blue-100 text-sm">Tahapan</p>
            </div>
          </div>
        </div>

        <div className="z-10 relative w-96 h-96">
          <div className="absolute top-0 right-0 w-64 h-72 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400" alt="team" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-0 left-0 w-48 h-52 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" alt="person" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-4 left-0 bg-white rounded-xl px-4 py-2 shadow-lg">
            <p className="text-blue-600 font-bold text-sm">✅ Bersertifikat</p>
          </div>
          <div className="absolute bottom-4 right-0 bg-white rounded-xl px-4 py-2 shadow-lg">
            <p className="text-blue-600 font-bold text-sm">🏆 Microsoft Official</p>
          </div>
        </div>
      </section>

      <Kurikulum />
      <Persyaratan />
      <HowToJoin />
      <Timeline />
      <FAQ />

    </div>
  );
}

export default App;