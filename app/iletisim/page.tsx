"use client";

import React, { useState, useEffect } from "react";

const whatsappNo = "905414483069";
const whatsappMesaj = "Merhaba, iletişime geçmek istiyorum. Hizmetleriniz hakkında bilgi almak istiyorum.";

export default function Iletisim() {
  const [formDurum, setFormDurum] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [year, setYear] = useState<number>(0);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormDurum("sending");
    setTimeout(() => {
      setFormDurum("success");
    }, 1500);
  };

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

      <section className="pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-3 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></span>
              <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[3px] italic">Bize Ulaşın</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] italic uppercase tracking-tighter">
              Bir Mesajla <br /><span className="text-cyan-400 underline decoration-white/10">Her Şey Başlasın</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed italic font-light">
              İhtiyacınız olan çözüm sadece birkaç adım uzağınızda. Formu doldurun veya doğrudan WhatsApp’tan yazın.
            </p>

            <div className="space-y-6 mt-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 mt-1">
                  📍
                </div>
                <div>
                  <p className="font-bold text-white italic uppercase text-sm">Adres</p>
                  <p className="text-slate-400 text-sm italic">Bahçeyaka mah. 901. sok. No:11/3<br/>Döşemealtı / Antalya</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 mt-1">
                  ☎️
                </div>
                <div>
                  <p className="font-bold text-white italic uppercase text-sm">Telefon</p>
                  <p className="text-slate-400 text-sm italic"><a href={`tel:${whatsappNo}`} className="text-cyan-400 hover:underline">+90 541 448 30 69</a></p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 mt-1">
                  ✉️
                </div>
                <div>
                  <p className="font-bold text-white italic uppercase text-sm">E-posta</p>
                  <p className="text-slate-400 text-sm italic"><a href="mailto:info@dosemealtiyazilim.net" className="text-cyan-400 hover:underline">info@dosemealtiyazilim.net</a></p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${whatsappNo}?text=${encodeURIComponent(whatsappMesaj)}`}
                className="px-8 py-4 bg-cyan-500 text-slate-900 rounded-xl font-black uppercase tracking-widest hover:scale-105 transition-transform italic"
              >
              </a>
              <div className="bg-slate-900/50 border border-white/5 rounded-[40px] p-8">
            <h2 className="text-3xl font-black text-white mb-8 italic uppercase tracking-tighter">İletişim Formu</h2>
            <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-cyan-400 uppercase tracking-[3px] italic">Adınız Soyadınız</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-slate-200 italic focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Ad Soyad"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-cyan-400 uppercase tracking-[3px] italic">Telefon</label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-slate-200 italic focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="+90 5XX XXX XX XX"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-cyan-400 uppercase tracking-[3px] italic">E-posta Adresiniz</label>
                <input
                  type="email"
                  required
                  className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-slate-200 italic focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="email@ornek.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-cyan-400 uppercase tracking-[3px] italic">Mesajınız</label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-slate-200 italic focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Ne hakkında konuşmak istersiniz?"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={formDurum === "sending"}
                className={`w-full py-5 rounded-xl font-black uppercase tracking-widest italic transition-all ${formDurum === "sending" ? "bg-slate-500 text-slate-200 cursor-not-allowed" : "bg-cyan-500 text-slate-900 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:scale-105"}`}
              >
                {formDurum === "sending" ? "Gönderiliyor..." : formDurum === "success" ? "Gönderildi ✓" : "GÖNDER"}
              </button>
              {formDurum === "success" && (
                <p className="text-cyan-400 text-sm italic font-bold text-center">Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.</p>
              )}
              {formDurum === "error" && (
                <p className="text-red-400 text-sm italic font-bold text-center">Bir hata oluştu. Lütfen tekrar deneyiniz.</p>
              )}
             </form>
           </div>
         </div>
       </div>
     </div>
   </section>

      <section id="harita" className="py-24 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter">Bize Nasıl Gelirsiniz?</h2>
            <p className="text-slate-500 text-sm italic tracking-wider mt-4">Döşemealtı / Antalya merkezinde sizi bekliyoruz.</p>
          </div>
          <div className="bg-slate-900 border border-white/5 rounded-[40px] p-1 aspect-square md:aspect-auto md:h-[400px]">
            <iframe
              title="Harita"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.522807507272!2d30.5926!3d37.0238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb6e0e5c6d4e5d%3A0x8f4e5f6a7b8c9d0e!2sD%C3%B6%C5%9Femealt%C4%B1%2C%20Antalya!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
              className="w-full h-full rounded-[30px] border-0"
              allowFullScreen
              aria-hidden={false}
              tabIndex={0}
            />
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