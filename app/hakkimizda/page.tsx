"use client";

import React, { useState, useEffect } from "react";

const whatsappNo = "905414483069";
const whatsappMesaj = "Merhaba, Döşemealtı Yazılım hakkında daha fazla bilgi almak istiyorum.";

const istatistikler = [
  { sayi: "12+", etiket: "Yıllık Tecrübe" },
  { sayi: "50+", etiket: "Tamamlanan Proje" },
  { sayi: "100%", etiket: "Müşteri Memnuniyeti" },
  { sayi: "7/24", etiket: "Teknik Destek" },
];

export default function Hakkimizda() {
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
            <a href="/hakkimizda" className="text-cyan-400">Hakkımızda</a>
            <a href="/referanslar" className="hover:text-cyan-400 transition-all">Referanslar</a>
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
              <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[3px] italic">Hakkımızda</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] italic uppercase tracking-tighter">
              Kimler <br /><span className="text-cyan-400 underline decoration-white/10">Yazıyoruz?</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed italic font-light">
              Döşemealtı Yazılım, Antalya'nın kalbine yerleşmiş bir butik dijital ajans olarak 12 yılı aşkın süredir web tasarım, mobil uygulama geliştirme ve SEO hizmetleri sunuyoruz.
            </p>
            <div className="flex flex-wrap gap-5 pt-4">
              <a
                href={`https://wa.me/${whatsappNo}?text=${encodeURIComponent(whatsappMesaj)}`}
                className="px-10 py-5 bg-cyan-500 text-slate-900 rounded-2xl font-black uppercase tracking-widest hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all italic scale-100 hover:scale-105"
              >
                İLETİŞİME GEÇ
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
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team Working Together"
                className="rounded-[30px] w-full h-[500px] object-cover grayscale hover:grayscale-0 transition duration-700"
              />
              <div className="absolute -bottom-6 -right-6 bg-cyan-500 p-8 rounded-3xl shadow-2xl text-slate-900 animate-bounce">
                <span className="text-4xl font-black block italic">12+</span>
                <span className="text-[10px] font-black uppercase tracking-widest italic opacity-80">Yıllık Tecrübe</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter">Vizyonumuz</h2>
            <p className="text-slate-500 text-sm italic tracking-wider">Dijital dünyada sizin en güvenilir ortağınız olmak.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                baslik: "Güven",
                aciklama: "Müşterilerimizle kurduğumuz iletişim ve şeffahkik, iş ortaklığımızın temelidir.",
              },
              {
                baslik: "Kalite",
                aciklama: "Her projede en güncel teknolojileri ve en iyi uygulamaları kullanıyoruz.",
              },
              {
                baslik: "Hız",
                aciklama: "Zaman değerlidir. Söz verdiğimiz sürede projeleri teslim ediyoruz.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-900 border border-white/5 rounded-[40px] p-8 hover:border-cyan-500/50 transition duration-500">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 text-2xl mb-6 group-hover:bg-cyan-500 group-hover:text-slate-900 transition-colors">
                  🎯
                </div>
                <h3 className="text-xl font-bold text-white mb-3 italic uppercase">{item.baslik}</h3>
                <p className="text-slate-400 text-sm leading-relaxed italic">{item.aciklama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter">İstatistiklerimiz</h2>
            <p className="text-slate-500 text-sm italic tracking-wider">Sayılarla konuştuğumuzda gerçekler açıkçar çıkıyor.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {istatistikler.map((stat, idx) => (
              <div key={idx} className="p-6">
                <span className="text-5xl md:text-7xl font-black text-cyan-400 block italic">{stat.sayi}</span>
                <span className="text-slate-400 text-sm italic uppercase tracking-wider">{stat.etiket}</span>
              </div>
            ))}
            </div>
          </div>
        </section>
        <section id="iletisim" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyan-500 -z-10 skew-y-3 origin-right scale-110"></div>
        <div className="max-w-7xl mx-auto px-6 text-slate-900 text-center">
          <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-8 leading-none">Birlikte Çalışalım.</h2>
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
