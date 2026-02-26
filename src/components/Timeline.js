import React, { useState } from 'react';

const timelineData = [
  {
    step: 1,
    title: 'Registrasi & Self Learning Course',
    date: '16 Oktober 2025 - 14 Juni 2026',
    desc: 'Daftar dan mulai belajar mandiri melalui platform Dicoding dengan kurikulum berstandar industri global.',
  },
  {
    step: 2,
    title: 'Offline Workshop Training',
    date: 'Desember 2025 - April 2026',
    desc: 'Ikuti sesi tatap muka bersama para ahli untuk memperdalam pemahaman dan memperluas jaringan profesional.',
  },
  {
    step: 3,
    title: 'Online Short Training',
    date: 'Oktober 2025 - Juni 2026',
    desc: 'Dapatkan bimbingan langsung dari instruktur berpengalaman melalui pelatihan online dengan sertifikat kompetensi.',
  },
  {
    step: 4,
    title: 'Deadline Belajar Tahap 1 & 2',
    date: '26 Maret 2026',
    desc: 'Selesaikan semua materi pembelajaran tahap 1 dan 2 untuk mengikuti seleksi level lanjutan.',
  },
  {
    step: 5,
    title: 'Pengumuman Penerima Beasiswa',
    date: '31 Maret 2026',
    desc: 'Pengumuman resmi peserta yang lolos seleksi dan berhak mendapatkan beasiswa tahap lanjutan.',
  },
  {
    step: 6,
    title: 'Hackathon & Datathon',
    date: 'Januari - April 2026',
    desc: 'Kompetisi bergengsi untuk menguji kemampuan problem-solving dengan hadiah total puluhan juta rupiah.',
  },
  {
    step: 7,
    title: 'Innovation Expo',
    date: 'Mei 2026',
    desc: 'Pameran inovasi terbaik peserta yang akan disaksikan oleh para pemimpin industri dan pemerintahan.',
  },
];

function Timeline() {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-blue-50">
      {/* Header */}
      <div className="text-center mb-20">
        <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full">
          Program Schedule
        </span>
        <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-3">Timeline Program</h2>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Ikuti setiap tahapan program Microsoft Elevate Training Center secara terstruktur
        </p>
      </div>

      {/* Timeline Snake */}
      <div className="max-w-5xl mx-auto">

        {/* Row 1 - kiri ke kanan */}
        <div className="flex items-start justify-between relative">
          <div className="absolute top-5 left-10 right-10 h-0.5 bg-blue-300 z-0" />
          {timelineData.slice(0, 3).map((item) => (
            <div
              key={item.step}
              className="flex flex-col items-center w-56 z-10 cursor-pointer"
              onClick={() => setActiveStep(activeStep === item.step ? null : item.step)}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-lg transition-all duration-300 ${activeStep === item.step ? 'bg-blue-700 scale-125' : 'bg-blue-500'} text-white`}>
                {item.step}
              </div>
              <div className="border-l-2 border-dashed border-blue-300 h-8" />
              <div className={`bg-white rounded-2xl shadow-md p-4 text-center transition-all duration-300 ${activeStep === item.step ? 'shadow-blue-200 shadow-xl border border-blue-300' : ''}`}>
                <p className="text-sm font-bold text-gray-800">{item.title}</p>
                <p className="text-xs text-blue-600 font-semibold mt-1">{item.date}</p>
                {activeStep === item.step && (
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">{item.desc}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Konektor kanan */}
        <div className="flex justify-end">
          <div className="w-28 h-16 border-r-4 border-b-4 border-blue-300 rounded-br-full mr-16" />
        </div>

        {/* Row 2 - kanan ke kiri */}
        <div className="flex items-start justify-between flex-row-reverse relative">
          <div className="absolute top-5 left-10 right-10 h-0.5 bg-blue-300 z-0" />
          {timelineData.slice(3, 5).map((item) => (
            <div
              key={item.step}
              className="flex flex-col items-center w-56 z-10 cursor-pointer"
              onClick={() => setActiveStep(activeStep === item.step ? null : item.step)}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-lg transition-all duration-300 ${activeStep === item.step ? 'bg-blue-700 scale-125' : 'bg-blue-500'} text-white`}>
                {item.step}
              </div>
              <div className="border-l-2 border-dashed border-blue-300 h-8" />
              <div className={`bg-white rounded-2xl shadow-md p-4 text-center transition-all duration-300 ${activeStep === item.step ? 'shadow-blue-200 shadow-xl border border-blue-300' : ''}`}>
                <p className="text-sm font-bold text-gray-800">{item.title}</p>
                <p className="text-xs text-blue-600 font-semibold mt-1">{item.date}</p>
                {activeStep === item.step && (
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">{item.desc}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Konektor kiri */}
        <div className="flex justify-start">
          <div className="w-28 h-16 border-l-4 border-b-4 border-blue-300 rounded-bl-full ml-16" />
        </div>

        {/* Row 3 - kiri ke kanan */}
        <div className="flex items-start justify-between relative">
          <div className="absolute top-5 left-10 right-10 h-0.5 bg-blue-300 z-0" />
          {timelineData.slice(5, 7).map((item) => (
            <div
              key={item.step}
              className="flex flex-col items-center w-56 z-10 cursor-pointer"
              onClick={() => setActiveStep(activeStep === item.step ? null : item.step)}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-lg transition-all duration-300 ${activeStep === item.step ? 'bg-blue-700 scale-125' : 'bg-blue-500'} text-white`}>
                {item.step}
              </div>
              <div className="border-l-2 border-dashed border-blue-300 h-8" />
              <div className={`bg-white rounded-2xl shadow-md p-4 text-center transition-all duration-300 ${activeStep === item.step ? 'shadow-blue-200 shadow-xl border border-blue-300' : ''}`}>
                <p className="text-sm font-bold text-gray-800">{item.title}</p>
                <p className="text-xs text-blue-600 font-semibold mt-1">{item.date}</p>
                {activeStep === item.step && (
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">{item.desc}</p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Info cards bawah */}
      <div className="max-w-5xl mx-auto mt-20 grid grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-md border border-blue-50 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">50.000+</div>
          <p className="text-gray-500 text-sm">Peserta Terdaftar</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md border border-blue-50 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">7</div>
          <p className="text-gray-500 text-sm">Tahapan Program</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md border border-blue-50 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
          <p className="text-gray-500 text-sm">Gratis & Bersertifikat</p>
        </div>
      </div>

    </section>
  );
}

export default Timeline;