"use client";

import React, { useState, useEffect } from "react";

const whatsappNo = "905414483069";
const whatsappMesaj = "Merhaba, referans projeleriniz hakkında bilgi almak istiyorum.";

const referanslar = [
  {
    isim: "KamuSosyal",
    kategori: "Mobil Uygulama",
    aciklama: "Türkiye geneli kamu çalışanları için sosyal platform.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80",
  },
  {
    isim: "Ev Hizmet",
    kategori: "Rezervasyon Altyapısı",
    aciklama: "Antalya merkezli hizmet yönetim ve randevu sistemi.",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=600&q=80",
  },
  {
    isim: "Canlı Altın",
    kategori: "Finans / Dashboard",
    aciklama: "Anlık veri takibi ve alarm mekanizmalı finans uygulaması.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
  },
  {
    isim: "Mutfak Sipariş",
    kategori: "E-Ticaret",
    aciklama: "Restoran ve kafe için online sipariş altyapısı.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
  },
  {
    isim: "Akıllı Ev",
    kategori: "IoT Uygulaması",
    aciklama: "Ev aletlerini uzaktan kontrol etme ve otomatikleştirme sistemi.",
    image: "https://images.unsplash.com/photo-1535366527827-46d8c62e58a6?auto=format&fit=crop&w=600&q=80",
  },
  {
    isim: "Eğitim Portalı",
    kategori: "Eğitim Platformu",
    aciklama: "Online kurs ve sınav yönetim sistemi.",
    image: "https://images.unsplash.com/photo-1544717297-d36905676a1b?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Referanslar() {
  const [year, setYear] = useState<number>(0);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans selection:bg-cyan-500 selection:text-slate-900 overflow-x-hidden">
      <div className="bg-slate-950 text-white text-[10px] py-2 px-6 hidden md:flex justify-between border-b border-white/5 tracking-[2px] uppercase font-bold">
        <div className="flex space-x-6 italic">
          <span><i className="mr-2 text-cyan-400">📍</i> Döşemealtı, Antalya</span>
          <span><i className="mr-2 text-cyan-400">✉</i> info@dosemealtiyazilim.net</span>
        </div>
        <div className="italic text-cyan-400">
          <a href={`tel:${whatsappNo}`}>DESTEK: 0541 448 30 69</a>
        </div>
      </div>

      <nav className="bg-[#0f172a]/80 backdrop-blur-md sticky top-0 z-[100] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center text-slate-900 font-black italic shadow-[0_0_20px_rgba(34,211,238,0.3)]">DY</div>
            <div className="leading-none">
              <span className="text-xl font-black text-white block tracking-tighter italic uppercase">DÖŞEMEALTI<span className="text-cyan-400">YAZILIM</span></span>
              <span className="text-[9px] font-bold text-slate-500 tracking-[3px] uppercase italic">Butik Dijital Ajans</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-10 text-xs font-bold uppercase tracking-widest italic">
            <a href="/" className="hover:text-cyan-400 transition-all">Anasayfa</a>
            <a href="/hizmetler" className="hover:text-cyan-400 transition-all">Hizmetler</a>
            <a href="/hakkimizda" className="hover:text-cyan-400 transition-all">Hakkımızda</a>
            <a href="/referanslar" className="text-cyan-400">Referanslar</a>
            <a
              href={`https://wa.me/${whatsappNo}`}
              className="bg-cyan-500 text-slate-900 px-6 py-2.5 rounded-full hover:scale-105 transition-transform shadow-lg shadow-cyan-500/20"
            >
              TEKLİF AL
            </a>
          </div>
        </div>
      </nav>

      <section className="pt-24 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-3 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></span>
              <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[3px] italic">Referanslarımız</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] italic uppercase tracking-tighter">
              Güvenen <br /><span className="text-cyan-400 underline decoration-white/10">Müşterilerimiz</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed italic font-light">
              Mağazalarda yayında olan canlı projelerimizden bazıları. Her projede müşteri memnuniyeti ön plandadır.
            </p>
            <div className="flex flex-wrap gap-5 pt-4">
              <a
                href={`https://wa.me/${whatsappNo}?text=${encodeURIComponent(whatsappMesaj)}`}
                className="px-10 py-5 bg-cyan-500 text-slate-900 rounded-2xl font-black uppercase tracking-widest hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all italic scale-100 hover:scale-105"
              >
                REFERANS OL
              </a>
              <a href="/" className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl font-bold uppercase tracking-widest hover:bg-white/10 transition-all italic">
                ANASAYFA
              </a>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[40px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative bg-slate-900 p-4 rounded-[40px] border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                alt="Client Projects"
                className="rounded-[30px] w-full h-[500px] object-cover grayscale hover:grayscale-0 transition duration-700"
              />
              <div className="absolute -bottom-6 -right-6 bg-cyan-500 p-8 rounded-3xl shadow-2xl text-slate-900 animate-bounce">
                <span className="text-4xl font-black block italic">50+</span>
                <span className="text-[10px] font-black uppercase tracking-widest italic opacity-80">Tamamlanan Proje</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projeler" className="py-24 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter">Referanslarımız</h2>
            <p className="text-slate-500 text-sm mt-4 italic">Mağazalarda yayında olan canlı projelerimizden bazıları.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {referanslar.map((ref, idx) => (
              <div key={idx} className="bg-slate-900 border border-white/5 rounded-[40px] p-8 hover:border-cyan-500/50 transition duration-500 group">
                <div className="h-48 bg-slate-800 rounded-[30px] mb-6 overflow-hidden">
                  <img
                    src={ref.image}
                    alt={ref.isim}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700"
                  />
                </div>
                <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-[3px] mb-3 block italic">{ref.kategori}</span>
                <h5 className="text-xl font-bold text-white italic uppercase tracking-tight">{ref.isim}</h5>
                <p className="text-slate-400 text-sm leading-relaxed italic mt-3">{ref.aciklama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="iletisim" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyan-500 -z-10 skew-y-3 origin-right scale-110"></div>
        <div className="max-w-7xl mx-auto px-6 text-slate-900 text-center">
          <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-8 leading-none">Sizin Projeniz <br />Sıradaki Olsun.</h2>
          <p className="text-xl font-bold italic mb-12 opacity-80 uppercase tracking-widest tracking-wider tracking-widest leading-relaxed">
            Fikrinizi 15 dakikada dinleyelim; teknoloji önerisi ve net fiyatla dönelim.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
            <a
              href={`https://wa.me/${whatsappNo}?text=${encodeURIComponent(whatsappMesaj)}`}
              className="px-12 py-6 bg-slate-900 text-white rounded-full font-black uppercase tracking-[4px] hover:scale-105 transition shadow-2xl text-xl italic"
            >
              WHATSAPP: 0541 448 30 69
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-slate-950 text-[10px] font-black uppercase tracking-[5px] text-slate-700 text-center italic">
        <div className="max-w-7xl mx-auto px-6">
          <p>&copy; {year} DÖŞEMEALTI YAZILIM LTD. ALL RIGHTS RESERVED.</p>
          <p className="mt-2 opacity-50">Gizlilik Politikamız KVKK</p>
        </div>
      </footer>

    </div>
  );
}