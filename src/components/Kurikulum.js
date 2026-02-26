import React from 'react';
import './Kurikulum.css';

const kurikulumData = [
    {
        title: 'AI Fundamentals',
        desc: 'Pelajar dasar-dasar kecerdasan buatan dan machine learning',
    },
    {
        title: 'Clouc Computing',
        desc: 'Kuasai teknologi cloud dengan Microsoft Azure',
    },
    {
        title: 'Web Devellopment',
        desc: 'Analisis data untuk pengambilan keputusan bisnis',
    },
];

function Kurikulum() {
    return (
        <section className="kurikulum">
            <h2>Kurikulum Kami</h2>
            <p className="kurikulum-subtitle">Program Pelatihan komprehensif untuk masa depan yang cerah</p>
            <div clasName="kurikulum-grid">
                {kurikulumData.map((item, index) => (
                    <div className="kurikulum-card" key={index}>
                        <div className="kurikulum-icon">{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Kurikulum;