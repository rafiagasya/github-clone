import React, { useState } from 'react';

const faqData = [
  { q: 'Apa itu program Microsoft Elevate Training Center?', a: 'Microsoft Elevate Training Center adalah program pelatihan eksklusif hasil kolaborasi Microsoft dan Dicoding yang dirancang untuk para developer Indonesia yang ingin menguasai AI tingkat lanjut.' },
  { q: 'Apa persyaratan mengikuti program Microsoft Elevate Training Center?', a: 'Peserta harus merupakan Warga Negara Indonesia, memiliki minat di bidang IT/AI, memiliki laptop/komputer, dan koneksi internet yang stabil.' },
  { q: 'Apakah program Microsoft Elevate Training Center memungut biaya dari peserta?', a: 'Tidak! Program ini 100% gratis untuk semua peserta yang mendaftar dan memenuhi persyaratan.' },
  { q: 'Apa pelatihan yang diberikan di program Microsoft Elevate Training Center?', a: 'Program ini mencakup Self Learning Course, Offline Workshop Training, Online Short Training, Hackathon & Datathon, dan Innovation Expo.' },
  { q: 'Bagaimana metode pembelajaran di Microsoft Elevate Training Center?', a: 'Pembelajaran dilakukan secara hybrid, yaitu kombinasi antara belajar mandiri online melalui platform Dicoding dan sesi offline bersama para ahli.' },
  { q: 'Apakah modul pembelajaran dapat diakses menggunakan bahasa Indonesia?', a: 'Ya, sebagian besar materi tersedia dalam Bahasa Indonesia untuk memudahkan pemahaman peserta.' },
  { q: 'Bagaimana cara mendaftar di program Microsoft Elevate Training Center?', a: 'Klik tombol "Daftar Sekarang" di halaman ini, isi formulir pendaftaran, dan konfirmasi melalui email yang akan dikirimkan ke kamu.' },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">

      {/* Dekorasi dots */}
      <div className="absolute left-10 top-20 w-48 h-96 opacity-10">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-blue-400 rounded-full inline-block m-2" />
        ))}
      </div>

      <div className="max-w-6xl mx-auto flex gap-16 items-start">

        {/* Kiri */}
        <div className="w-64 shrink-0 sticky top-24">
          <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full">
            FAQ
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-4 leading-snug">
            Frequently Asked Question
          </h2>
        </div>

        {/* Kanan - Accordion */}
        <div className="flex-1 flex flex-col divide-y divide-gray-100">
          {faqData.map((item, index) => (
            <div key={index} className="py-5">
              <button
                className="w-full flex justify-between items-center text-left gap-4"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-gray-800 font-semibold text-base">{item.q}</span>
                <span className={`text-2xl text-blue-500 font-light transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-500 leading-relaxed text-sm pr-8">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FAQ;