import React, { useState } from 'react';

const steps = [
  {
    number: '1/4',
    title: 'Daftar dan Konfirmasi Pendaftaran',
    items: [
      {
        subtitle: 'Isi Formulir Pendaftaran',
        desc: 'Daftarkan dirimu melalui halaman ini dan lengkapi data diri dengan benar.',
      },
      {
        subtitle: 'Konfirmasi Via Email',
        desc: 'Setelah pendaftaran berhasil, cek emailmu untuk mendapatkan konfirmasi penerimaan dan akses ke kelas-kelas awal.',
      },
    ],
  },
  {
    number: '2/4',
    title: 'Mulai Proses Belajar',
    items: [
      {
        subtitle: 'Belajar Mandiri',
        desc: 'Selesaikan semua kelas di tahap 1 dan 2 maksimal tanggal 26 Maret 2026 untuk ikut seleksi tahap 3 (lanjutan).',
      },
    ],
  },
  {
    number: '3/4',
    title: 'Ikuti Seleksi Lanjutan',
    items: [
      {
        subtitle: 'Seleksi Tahap Lanjutan',
        desc: 'Peserta terbaik akan diundang untuk mengikuti seleksi lanjutan berupa tes kompetensi dan wawancara.',
      },
    ],
  },
  {
    number: '4/4',
    title: 'Raih Sertifikat & Beasiswa',
    items: [
      {
        subtitle: 'Sertifikat Microsoft Resmi',
        desc: 'Peserta yang lulus akan mendapatkan sertifikat resmi dari Microsoft dan kesempatan beasiswa eksklusif.',
      },
    ],
  },
];

function HowToJoin() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full">
            Cara Daftar
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-4 max-w-2xl mx-auto leading-snug">
            Ikuti langkah-langkah mudah di bawah ini untuk memulai perjalanan belajarmu bersama Microsoft Elevate Training Center.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl border cursor-pointer transition-all duration-300 ${active === index ? 'bg-white border-blue-300 shadow-xl' : 'bg-white border-gray-100 hover:border-blue-200 hover:shadow-md'}`}
              onClick={() => setActive(index)}
            >
              <p className="text-blue-600 font-bold text-sm mb-3">LANGKAH {step.number}</p>
              <h3 className="text-xl font-extrabold text-gray-800 mb-4">{step.title}</h3>
              {step.items.map((item, i) => (
                <div key={i} className="mb-4">
                  <p className="font-bold text-gray-700 mb-1">{item.subtitle}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
              {active === index && (
                <div className="mt-4 flex justify-end">
                  <div className="w-10 h-10 rounded-full border-2 border-blue-500 flex items-center justify-center text-blue-500 font-bold">
                    →
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowToJoin;