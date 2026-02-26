import React from 'react';

const persyaratanData = [
  { icon: '👤', title: 'Warga Negara Indonesia (WNI)', desc: 'Program ini terbuka untuk seluruh warga negara Indonesia yang tertarik untuk belajar di bidang IT (Mahasiswa/lulusan baru, Profesional, Akademisi, Peneliti, dan Tech leaders).' },
  { icon: '💡', title: 'Minat & Motivasi', desc: 'Memiliki ketertarikan kuat dan motivasi tinggi untuk mengembangkan keahlian di bidang Artificial Intelligence (AI).' },
  { icon: '💻', title: 'Perangkat Pendukung', desc: 'Memiliki akses ke laptop/komputer yang dapat digunakan untuk proses pembelajaran dan praktik.' },
  { icon: '🌐', title: 'Akses Internet', desc: 'Memiliki koneksi internet yang stabil untuk mengakses materi pembelajaran online secara konsisten.' },
];

function Persyaratan() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto flex gap-16 items-start">
        <div className="w-72 shrink-0 sticky top-24">
          <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full">Persyaratan</span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-4 leading-snug">Persyaratan Pendaftaran</h2>
          <p className="text-gray-500 mt-4 leading-relaxed">Pastikan kamu memenuhi semua persyaratan berikut sebelum mendaftar program.</p>
          <button className="mt-8 bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300">Daftar Sekarang →</button>
        </div>
        <div className="flex-1 flex flex-col gap-6">
          {persyaratanData.map((item, index) => (
            <div key={index} className="flex gap-5 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300">
              <div className="text-3xl shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Persyaratan;