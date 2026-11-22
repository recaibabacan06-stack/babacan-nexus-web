"use client";

import { useState, useEffect, useRef } from "react";
import Script from "next/script";

const WHATSAPP_NO = "905414483069";
const PHONE_DISPLAY = "0541 448 30 69";
const PHONE_LINK = "+905414483069";
const EMAIL = "recep_baback@hotmail.com";
const WA_TEXT = "Merhaba Babacan Nexus Web ile ilgili bilgi almak istiyorum.";
const WA_LINK = `https://wa.me/${WHATSAPP_NO}?text=${encodeURIComponent(WA_TEXT)}`;

const navLinks = [
  { href: "#hero", label: "Anasayfa" },
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#hizmetler", label: "Hizmetlerimiz" },
  { href: "#portfolyo", label: "Portfolyo" },
  { href: "#surec", label: "Süreç" },
  { href: "#sss", label: "SSS" },
  { href: "#iletisim", label: "İletişim" },
];

const services = [
  { baslik: "Web Tasarım", aciklama: "Kurumsal kimliğinizi yansıtan, mobil uyumlu ve hızlı web tasarımları.", ozellikler: ["Kurumsal Web Sitesi", "Landing Page", "Portfolyo Sitesi"] },
  { baslik: "Kurumsal Web Sitesi", aciklama: "Şirketinizin dijital vitrini; güvenilir, erişilebilir ve Google için optimize edilmiş kurumsal kimlik.", ozellikler: ["Kurumsal Kimlik", "Hızlı Açılış", "Mobil Uyumlu"] },
  { baslik: "Kişisel Portfolyo Sitesi", aciklama: "Sanatçı, fotoğrafçı veya freelancer için modern ve şık portfolyo altyapısı.", ozellikler: ["Galeri", "Hakkımda", "İletişim Formu"] },
  { baslik: "E-Ticaret Sitesi", aciklama: "Ürünlerinizi internetten satmaya başlayın. Güvenli ödeme entegrasyonları, envanter yönetimi ve mobil mağaza.", ozellikler: ["Online Mağaza", "Ödeme Entegrasyonu", "Sipariş Takibi"] },
  { baslik: "Teknik SEO Hizmeti", aciklama: "Google’da üst sıralara çıkın. Anahtar kelime analizi, içerik optimizasyonu ve teknik SEO ile organik trafiği artıralım.", ozellikler: ["Lokal SEO", "İçerik Stratejisi", "Hız Optimizasyonu"] },
  { baslik: "Google Harita Kaydı", aciklama: "Döşemealtı / Antalya müşteriler sizi kolayca bulsun. Google İşletme Profili ve yerel arama görünürlüğü.", ozellikler: ["Google İşletme Profili", "Yerel Arama", "Harita Görünürlüğü"] },
  { baslik: "Yapay Zeka Çözümleri", aciklama: "Akıllı chatbot, otomatik randevu ve veri analitiği ile işinizi dijitalleştirin.", ozellikler: ["AI Chatbot", "Randevu Sistemi", "Veri Analitiği"] },
];

const portfolio = [
  { id: 1, isim: "Döşemealtı Kurumsal Web Tasarım", kategori: "Kurumsal", aciklama: "Döşemealtı merkezli kurumsal web sitesi. SEO uyumlu, mobil responsive ve hızlı açılış odaklı.", link: "https://ajansreklamcy.com.tr", external: true },
  { id: 2, isim: "Sağlık ve Klinik Web Sitesi", kategori: "Sağlık / Klinik", aciklama: "Klinikler ve sağlık kurumları için randevu sistemi ve hizmet sayfaları içeren web arayüzü.", link: null, external: false },
  { id: 3, isim: "İnşaat ve Emlak Portalı", kategori: "İnşaat / Emlak", aciklama: "İlan ve ilave filtreleme sistemi ile desteklenen modern emlak web sitesi altyapısı.", link: null, external: false },
  { id: 4, isim: "Moda E-Ticaret Mağazası", kategori: "E-Ticaret", aciklama: "Ürün kataloğu, sepet ve güvenli ödeme entegrasyonu ile donatlı online mağaza.", link: null, external: false },
  { id: 5, isim: "Hukuk Bürosu Kimlik Sitesi", kategori: "Kurumsal", aciklama: "Avukatlık bürosu için güven ve otoriteyi yansıtan minimal web tasarımı.", link: null, external: false },
  { id: 6, isim: "Kafe ve Restoran Sitesi", kategori: "Kurumsal", aciklama: "Menü, rezervasyon ve galeri modüllü lezzet odaklı web arayüzü.", link: null, external: false },
];

const surec = [
  { no: "01", baslik: "Analiz", aciklama: "İhtiyaç analizinde hedef kitle ve rekabet incelemesi." },
  { no: "02", baslik: "Tasarım", aciklama: "Kullanıcı odaklı arayüz tasarımları ve marka kimliği." },
  { no: "03", baslik: "Kodlama", aciklama: "Hızlı, güvenli ve SEO uyumlu altyapıyla geliştirme." },
  { no: "04", baslik: "Revize", aciklama: "Geri bildirimlerinizle tasarım ve içeriği güzelleştirme." },
  { no: "05", baslik: "Teslim", aciklama: "Canlı yayına alma ve eğitim destekli teslimat." },
];

const faqs = [
  { q: "Web tasarım süreci ne kadar sürer?", a: "Temel bir kurumsal web sitesi 3-7 gün içinde teslim edilir. E-ticaret gibi daha kapsamlı projelerde bu süre uzayabilir." },
  { q: "Fiyatlar neye göre değişiyor?", a: "Sayfa sayısı, özel tasarım talepleri, ek fonksiyonlar ve teknik altyapıya göre belirlenir. Her bütçeye uygun çözümler sunuyoruz." },
  { q: "Siteyi ben yönetebilir miyim?", a: "Evet, tüm web siteleri yönetim panelli olarak teslim edilir. Yazı, görsel ve ürün güncellemelerini kendiniz yapabilirsiniz." },
  { q: "SEO çalışması dahil mi?", a: "Temel düzeyde SEO çalışması dahildir. Sayfa başlıkları, meta açıklamalar, mobil uyumluluk ve site hızı gibi SEO kriterleri uygulanır." },
  { q: "Döşemealtı dışından çalışıyor musunuz?", a: "Evet. Döşemealtı, Antalya ve tüm Türkiye'den müşterilerimizle online olarak çalışıyoruz." },
];

const bolgeler = ["Yeniköy", "Yeşilbayır", "Altınkale", "Çıplaklı", "Düzlerçamı", "Bahçeyaka", "AOSB", "Kepez", "Konyaaltı", "Lara", "Muratpaşa", "Alanya"];

function Icon({ name, className }: { name: string; className?: string }) {
  const icons: Record<string, React.JSX.Element> = {
    phone: (<svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 0 7H4.11a2 2 0 0 1-2 1.72" /></svg>),
    mail: (<svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>),
    whatsapp: (<svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M8.35 1.47A10 10 0 0 0 1.5 7.33c0 .16.01.31.02.47a10 10 0 0 0 10.7 10.7c.16.01.31.02.47.02a10 10 0 0 0 5.86-2.15l2.26-2.26a2 2 0 0 1 2.83 0c.51.52.51 1.37 0 1.9l-6.15 6.15a2 2 0 0 1-2.83 0l-2.26-2.26a2 2 0 0 1 0-2.83l6.15-6.15a10 10 0 0 0-2.15-5.86" /></svg>),
    globe: (<svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>),
    check: (<svg width="16" height="16" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><polyline points="20 6 9 17 4 12" /></svg>),
    star: (<svg width="16" height="16" fill="#F59E0B" stroke="none" viewBox="0 0 24 24" className="shrink-0"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>),
    play: (<svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><polygon points="5 3 19 12 5 21 5 3" /></svg>),
    code: (<svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><polyline points="10 20 15 12 10 4" /><polyline points="21 12 16 12 21 4" /></svg>),
    map: (<svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0" /><circle cx="12" cy="10" r="3" /></svg>),
    logo: (<svg width="36" height="36" fill="none" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="shrink-0"><rect x="2" y="2" width="20" height="20" rx="4" ry="4" /><line x1="16" y1="16" x2="12" y2="20" /><line x1="8" y1="8" x2="12" y2="12" /></svg>),
  };
  return <span className={className}>{icons[name]}</span>;
}

const hamburgerTransform = (menuOpen: boolean, i: number) =>
  menuOpen
    ? `translateY(${i === 2 ? 0 : i === 1 ? -6 : 6}px) rotate${i === 2 ? "45deg" : i === 1 ? "0deg" : "-45deg"}`
    : "";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [modalProject, setModalProject] = useState<typeof portfolio[number] | null>(null);
  const [currentYear, setCurrentYear] = useState<number>(0);
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  const matterRef = useRef<HTMLDivElement>(null);
  const waMsg = (extra: string) => `https://wa.me/${WHATSAPP_NO}?text=${encodeURIComponent(extra)}`;

  const initMatter = (Matter: any) => {
    const { Engine, Bodies, Composite, Mouse, MouseConstraint } = Matter;
    const el = matterRef.current;
    if (!el) return;
    const width = el.clientWidth || 550;
    const height = el.clientHeight || 300;
    const engine = Engine.create();
    const ground = Bodies.rectangle(width / 2, height + 40, width, 80, { isStatic: true });
    Composite.add(engine.world, ground);
    const labels = ["HTML5", "CSS3", "JS", "React", "Next.js", "Tailwind", "Node.js", "SEO"];
    const items: Array<{ el: HTMLDivElement; body: any; size: number }> = [];
    labels.forEach((text, i) => {
      const d = document.createElement("div");
      d.className = "matter-item";
      d.title = text;
      d.textContent = text;
      el.appendChild(d);
      const x = 30 + ((i * 73) % Math.max(width - 60, 60));
      const body = Bodies.circle(x, 20 + i * 22, 18, { restitution: 0.5, friction: 0.01, frictionAir: 0.02, label: text });
      Composite.add(engine.world, body);
      items.push({ el: d, body, size: 36 });
    });
    const mouse = Mouse.create(el);
    const mc = MouseConstraint.create(engine, { mouse, constraint: { stiffness: 0.15, damping: 0.1, render: { visible: false } } });
    Composite.add(engine.world, mc);
    let running = true;
    const loop = () => {
      if (!running) return;
      Engine.update(engine, 1000 / 60);
      items.forEach(({ el: d, body, size }) => {
        const p = body.position;
        d.style.left = `${p.x - size / 2}px`;
        d.style.top = `${p.y - size / 2}px`;
        d.style.transform = `rotate(${body.angle}rad)`;
        if (p.y > height + 120) { Matter.Body.setPosition(body, { x: Math.random() * width, y: -60 }); Matter.Body.setVelocity(body, { x: (Math.random() - 0.5) * 2, y: 0 }); }
      });
      requestAnimationFrame(loop);
    };
    loop();
    return () => { running = false; Composite.clear(engine.world); };
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const start = () => {
      if ((window as any).Matter) { initMatter((window as any).Matter); } else {
        const s = document.createElement("script");
        s.src = "https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js";
        s.onload = () => initMatter((window as any).Matter);
        document.head.appendChild(s);
      }
    };
    start();
    return () => {};
  }, []);

  return (
    <div className="bg-[#FFFFFF] text-[#475569] font-sans antialiased selection:bg-[#1D4ED8] selection:text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://babacanwebtasarim.com/#business", name: "Babacan Nexus Web", legalName: "Babacan Digital Tasarım", alternateName: ["Babacan Nexus", "Babacan Web Tasarım"], founder: { "@type": "Person", name: "Recep Babacık" }, image: "/og-image.jpg", url: "https://babacanwebtasarim.com", telephone: PHONE_LINK, email: EMAIL, address: { "@type": "PostalAddress", streetAddress: "Yeniköy Mah.", addressLocality: "Döşemealtı", addressRegion: "Antalya", postalCode: "07190", addressCountry: "TR" }, geo: { "@type": "GeoCoordinates", latitude: 37.0191, longitude: 30.6125 }, areaServed: { "@type": "Country", name: "Türkiye" }, openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" }], priceRange: "₺₺", hasContactPoint: [{ "@type": "ContactPoint", telephone: PHONE_LINK, contactType: "customer service", availableLanguage: "Turkish" }, { "@type": "ContactPoint", email: EMAIL, contactType: "sales", availableLanguage: "Turkish" }], sameAs: ["https://wa.me/905414483069"], aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "12" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <div className="bg-[#0F172A] text-white text-[12px] py-2 px-5 hidden md:flex justify-between border-b border-white/5 tracking-[2px] uppercase">
        <div className="flex items-center space-x-6"><span className="flex items-center gap-2"><Icon name="phone" /> <span>0541 448 30 69</span> | Döşemealtı Web Tasarım</span></div>
        <div className="flex items-center space-x-4"><a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-[#1D4ED8] transition"><Icon name="mail" /> {EMAIL}</a></div>
      </div>

      <nav className="sticky top-0 z-50 bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#E2E8F0]">
        <div className="container-max h-16 flex justify-between items-center">
          <div onClick={() => setMenuOpen(false)} className="flex items-center gap-2.5 group cursor-pointer">
            <div className="w-10 h-10 bg-[#1D4ED8] rounded-[8px] flex items-center justify-center text-[#0F172A] font-black shadow-lg shadow-[#1D4ED8]/30"><Icon name="logo" /></div>
            <div className="leading-none"><span className="text-[#0F172A] font-bold text-[18px] tracking-tight italic">Babacan Nexus<span className="text-[#1D4ED8]">Web</span></span><span className="text-[10px] font-bold text-[#475569] tracking-[3px] uppercase block mt-0.5">Dijital Tasarım</span></div>
          </div>
          <div className="hidden md:flex items-center space-x-7 text-[14px] font-medium text-[#0F172A]">{navLinks.map((link) => (<a key={link.href} href={link.href} className="hover:text-[#1D4ED8] transition" onClick={() => setMenuOpen(false)}>{link.label}</a>))}<a href={WA_LINK} className="btn-accent whitespace-nowrap shadow-lg shadow-[#1D4ED8]/30">Teklif Al</a></div>
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={() => setMenuOpen((p) => !p)}
              className="w-8 h-8 flex flex-col justify-center gap-1.5 rounded-lg hover:bg-[#F8FAFC] p-1"
            >
              {[1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="w-full h-0.5 bg-[#0F172A] rounded transition"
                  style={{ transform: hamburgerTransform(menuOpen, i) }}
                />
              ))}
            </button>
            <a href={WA_LINK} className="hidden md:inline-block btn-accent whitespace-nowrap shadow-lg shadow-[#1D4ED8]/30">
              Teklif Al
            </a>
          </div>
        </div>
        {menuOpen && (<div className="md:hidden bg-[#FFFFFF] border-b border-[#E2E8F0]"><div className="container-max py-6 space-y-4">{navLinks.map((link) => (<a key={link.href} href={link.href} className="block text-[15px] font-medium text-[#0F172A] py-3 hover:bg-[#F8FAFC] hover:text-[#1D4ED8] rounded-lg transition" onClick={() => setMenuOpen(false)}>{link.label}</a>))}<a href={WA_LINK} className="btn-accent block text-center whitespace-nowrap shadow-lg shadow-[#1D4ED8]/30">Teklif Al</a></div></div>)}
      </nav>

      <section id="hero" className="relative section-padding overflow-hidden">
        <div className="container-max grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F8FAFC] text-[#1D4ED8] text-[11px] font-bold rounded-full uppercase tracking-wider border border-[#E2E8F0]"><Icon name="globe" className="w-3 h-3" /> Döşemealtı / Antalya &amp; Tüm Türkiye</span>
            <h1 className="text-[#0F172A] text-[32px] md:text-[46px] font-bold leading-[1.15] mb-0 tracking-tight">Antalya Döşemealtı Web Tasarım<br /><span className="text-[#1D4ED8]">Çözümleri</span></h1>
            <p className="text-[#475569] text-[16px] leading-1.6 max-w-lg">Babacan Nexus Web olarak modern, mobil uyumlu ve Google SEO dostu web siteleri hazırlıyoruz. Döşemealtı, Antalya ve tüm Türkiye'deki işletmelere Recep Babacık liderliğinde dijital kimlik kazandırıyoruz.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${PHONE_LINK}`} className="btn-primary whitespace-nowrap flex items-center justify-center gap-2 shadow-lg"><Icon name="phone" className="w-5 h-5" /> Hemen Ara {PHONE_DISPLAY}</a>
              <a href={WA_LINK} className="btn-whatsapp whitespace-nowrap flex items-center justify-center gap-2 shadow-lg shadow-[#16A34A]/30"><Icon name="whatsapp" className="w-5 h-5" /> WhatsApp Teklif Al</a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="w-full aspect-[550/420] bg-[#F8FAFC] border border-[#E2E8F0] rounded-[12px] shadow-2xl overflow-hidden relative flex flex-col" style={{ minHeight: "420px", minWidth: "550px" }}>
              <div className="bg-[#0F172A] px-5 py-3 flex items-center gap-2 border-b border-[#E2E8F0]"><div className="w-2.5 h-2.5 rounded-full bg-red-500" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-500" /><div className="w-2.5 h-2.5 rounded-full bg-green-500" /><span className="ml-3 text-[10px] text-[#94A3B8] font-medium">babacanwebtasarim.com</span></div>
              <div className="flex-1 p-6 relative"><div className="h-1 bg-[#E2E8F0] rounded-full w-3/4 mb-4" /><div className="h-1 bg-[#E2E8F0] rounded-full w-1/2 mb-6" /><div className="grid md:grid-cols-2 gap-4"><div className="space-y-3"><div className="h-3 bg-[#E2E8F0] rounded w-full" /><div className="h-3 bg-[#E2E8F0] rounded w-3/4" /><div className="h-32 bg-[#E2E8F0] rounded-[8px] mt-2" /></div><div className="space-y-3"><div className="h-3 bg-[#E2E8F0] rounded w-full" /><div className="h-3 bg-[#E2E8F0] rounded w-2/3" /><div className="h-32 bg-[#E2E8F0] rounded-[8px] mt-2" /></div></div><div className="absolute bottom-6 left-6 right-6 bg-white rounded-[12px] p-4 shadow-lg border border-[#E2E8F0] flex items-center gap-3"><div className="w-10 h-10 bg-[#1D4ED8] rounded-[8px] flex items-center justify-center text-white font-bold text-xs">BN</div><div className="flex-1"><div className="text-[#0F172A] font-bold text-sm">Teklif Al - 2 Dakika</div><div className="text-[#475569] text-[11px]">0541 448 30 69 &bull; recep_baback@hotmail.com</div></div><button className="btn-whatsapp text-[11px] px-3 py-1.5 whitespace-nowrap shadow-md shadow-[#16A34A]/30">WhatsApp</button></div></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#1D4ED8]/10 rounded-full blur-[60px] pointer-events-none" />
          </div>
        </div>
        </div>
      </section>

      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-[#0F172A] text-[26px] md:text-[34px] font-bold mb-3">İnteraktif Teknoloji</h2>
            <p className="text-[#475569] text-[16px] leading-1.6 max-w-2xl mx-auto">Babacan Nexus altyapısındaki teknoloji öğeleri yer çekimine göre hareket ediyor. Mouse ile etkileşime girin, logolara dokunun!</p>
          </div>
          <div ref={matterRef} className="w-full h-[320px] bg-[#FFFFFF] rounded-[12px] border border-[#E2E8F0] relative overflow-hidden" />
        </div>
      </section>

      <section className="section-padding bg-[#FFFFFF]">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-[#0F172A] text-[26px] md:text-[34px] font-bold mb-3">Müşteri Geri Bildirimleri</h2>
            <p className="text-[#475569] text-[16px] leading-1.6 max-w-2xl mx-auto">Google’da 5 yıldızla değerlendirilen hizmet anlayışımız, refesanslarımızla güçlendirilmiş.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { ad: "Ahmet Yılmaz", rol: "Döşemealtı, Antalya", puan: 5, metin: "Babacan Nexus Web ile kurumsal sitemizi çok kısa sürede canlandırdık. Google’da ilk sayfadayız, teşekkürler Recep Babacık!", tarih: "15 Nisan 2026" },
              { ad: "Elif Demir", rol: "Konyaaltı, Antalya", puan: 5, metin: "E-ticaret sitemiz kusursuz çalışıyor. WhatsApp desteği ve teknik ekipa özel teşekkürler.", tarih: "02 Mayıs 2026" },
              { ad: "Murat Kaya", rol: "Kepez, Antalya", puan: 5, metin: "SEO çalışması sayesinde yerel aramalarda üst sıralara çıktık. Kesinlikle tavsiye ederim.", tarih: "20 Haziran 2026" },
            ].map((r, i) => (
              <div key={i} className="card-base flex flex-col">
                <div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-full bg-[#E2E8F0] flex items-center justify-center text-[#0F172A] font-bold text-sm">{r.ad.charAt(0)}</div><div><div className="text-[#0F172A] font-bold text-sm">{r.ad}</div><div className="text-[#475569] text-[12px]">{r.rol}</div></div></div>
                <div className="flex gap-1 mb-4 text-yellow-500">{[1, 2, 3, 4, 5].map((s) => (<Icon key={s} name="star" />))}</div>
                <p className="text-[#475569] text-[15px] leading-1.6 mb-4 flex-1">{r.metin}</p>
                <div className="flex items-center gap-2 text-[12px] text-[#94A3B8] font-medium mt-auto"><span>Google Yorumu &bull;</span> <span>{r.tarih}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="hakkimizda" className="section-padding bg-[#FFFFFF]">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-[#0F172A] text-[26px] md:text-[34px] font-bold">Hakkımızda</h2>
              <p className="text-[#475569] text-[16px] leading-1.6">Recep Babacık liderliğinde {currentYear - 2012} yıldır <strong>Döşemealtı / Antalya</strong> ve tüm Türkiye'de dijital çözümler sunuyoruz. Babacan Nexus Web olarak kurumsal web tasarım, e-ticaret, teknik SEO ve yapay zeka destekli projelerimizle işletmenizin dijital dönüşümünü hızlandırıyoruz.</p>
              <p className="text-[#475569] text-[16px] leading-1.6">Modern altyapı, Google SEO odaklı çalışma anlayışı ve kesintisiz teknik destekle her bütçeye uygun çözümler üretmekteyiz.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={WA_LINK} className="btn-whatsapp flex items-center justify-center gap-2 shadow-lg shadow-[#16A34A]/30"><Icon name="whatsapp" className="w-5 h-5" /> Hemen WhatsApp'ta Konuş</a>
                <a href={`mailto:${EMAIL}`} className="btn-primary flex items-center justify-center gap-2 shadow-lg"><Icon name="mail" className="w-5 h-5" /> E-Posta Gönder</a>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { baslik: "%100 Mobil Uyum", metin: "Tüm cihazlarda kusursuz görünen tasarım." },
                { baslik: "Google Algoritma & SEO Dostu", metin: "Yerel arama sonuçlarında üst sıralar için optimize." },
                { baslik: "100/100 Açılış Hızı", metin: "Next.js altyapısıyla öne çıkan performans." },
                { baslik: "Kesintisiz Teknik Destek", metin: "7/24 yanınızda olan destek ekibi." },
              ].map((g, i) => (
                <div key={i} className="card-base flex flex-col"><Icon name="check" className="w-5 h-5 mb-3 shrink-0" /><h3 className="text-[#0F172A] text-[20px] font-bold mb-2">{g.baslik}</h3><p className="text-[#475569] text-[15px] leading-1.6">{g.metin}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="hizmetler" className="section-padding bg-[#F8FAFC]">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-[#0F172A] text-[26px] md:text-[34px] font-bold mb-3">Hizmetlerimiz</h2>
            <p className="text-[#475569] text-[16px] leading-1.6 max-w-2xl mx-auto">Döşemealtı, Antalya ve tüm Türkiye'deki müşterilerimiz için özel üretilmiş dijital çözümler.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((hizmet, i) => (
              <div key={i} className="card-base flex flex-col h-full"><div className="w-12 h-12 bg-[#F8FAFC] rounded-[10px] flex items-center justify-center text-[#1D4ED8] mb-4 shrink-0"><Icon name="code" className="w-6 h-6" /></div><h3 className="text-[#0F172A] text-[20px] font-bold mb-2">{hizmet.baslik}</h3><p className="text-[#475569] text-[15px] leading-1.6 mb-4 flex-1">{hizmet.aciklama}</p><div className="mt-auto pt-4 border-t border-[#E2E8F0] space-y-2">{hizmet.ozellikler.map((oz, j) => (<div key={j} className="flex items-center gap-2 text-[14px] text-[#475569]"><Icon name="check" className="w-3.5 h-3.5 shrink-0" /><span>{oz}</span></div>))}<a href={waMsg(`Merhaba, "${hizmet.baslik}" hizmeti hakkında bilgi almak istiyorum.`)} className="mt-4 btn-accent text-center text-[14px] px-5 py-2.5 shadow-sm shadow-[#1D4ED8]/20"><Icon name="whatsapp" className="w-4 h-4 shrink-0" /> Hemen Ara / Teklif Al</a></div></div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolyo" className="section-padding bg-[#FFFFFF]">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-[#0F172A] text-[26px] md:text-[34px] font-bold mb-3">Portfolyo</h2>
            <p className="text-[#475569] text-[16px] leading-1.6 max-w-2xl mx-auto">16:10 oranında şık arayüz önizlemelere sahip örnek projelerimizden bazıları.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((p) => (
              <div key={p.id} className="card-base flex flex-col h-full group cursor-pointer" onClick={() => setModalProject(p)}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-[10px] bg-[#E2E8F0] mb-4"><svg viewBox="0 0 160 100" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="160" height="100" fill="#F8FAFC" /><rect x="6" y="6" width="148" height="22" rx="4" fill="#0F172A" /><circle cx="12" cy="17" r="1.8" fill="#EF4444" /><circle cx="18" cy="17" r="1.8" fill="#F59E0B" /><circle cx="24" cy="17" r="1.8" fill="#10B981" /><rect x="40" y="42" width="80" height="26" fill="#E2E8F0" rx="4" /><rect x="40" y="76" width="56" height="10" fill="#E2E8F0" rx="2" /><rect x="40" y="90" width="40" height="6" fill="#E2E8F0" rx="2" /></svg>{p.external && (<a href={p.link!} target="_blank" rel="noreferrer" className="absolute top-3 right-3 z-10 flex items-center gap-1.5 btn-accent text-[11px] px-3 py-1.5 shadow-lg shadow-[#1D4ED8]/40 whitespace-nowrap"><Icon name="play" className="w-3 h-3 shrink-0" /> Projeyi İncele</a>)}</div><span className="text-[11px] font-bold text-[#1D4ED8] uppercase tracking-wider mb-1 block">{p.kategori}</span><h3 className="text-[#0F172A] text-[20px] font-bold mb-2 group-hover:text-[#1D4ED8] transition">{p.isim}</h3><p className="text-[#475569] text-[15px] leading-1.6 mb-4 flex-1">{p.aciklama}</p><button onClick={(e) => { e.stopPropagation(); setModalProject(p); }} className="w-full btn-primary text-[13px] px-5 py-2.5">Detay Görüntüle</button></div>
            ))}
          </div>
        </div>
      </section>

      <section id="surec" className="section-padding bg-[#F8FAFC]">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-[#0F172A] text-[26px] md:text-[34px] font-bold mb-3">Nasıl Çalışırız?</h2>
            <p className="text-[#475569] text-[16px] leading-1.6 max-w-2xl mx-auto">01 - 05 arasında yatay çalışma sürecimizle projelerinize değer katıyoruz.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-14 items-start">
            {surec.map((s, i) => (
              <>
                <div key={i} className="flex flex-col items-center gap-3 w-full md:w-auto"><div className="w-12 h-12 rounded-full bg-[#1D4ED8] text-white flex items-center justify-center font-bold text-[20px] shadow-lg shadow-[#1D4ED8]/40">{s.no}</div><h3 className="text-[#0F172A] text-[20px] font-bold">{s.baslik}</h3><p className="text-[#475569] text-[14px] leading-1.6 text-center">{s.aciklama}</p></div>
                {i < surec.length - 1 && (<div className="hidden md:block w-0.5 h-40 bg-[#E2E8F0] self-center mt-10" />)}
              </>
            ))}
          </div>
        </div>
      </section>

      <section id="sss" className="section-padding bg-[#F8FAFC]">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-[#0F172A] text-[26px] md:text-[34px] font-bold mb-3">Sıkça Sorulan Sorular</h2>
            <p className="text-[#475569] text-[16px] leading-1.6 max-w-2xl mx-auto">Babacan Nexus Web ile ilgili en çok sorulan sorular ve yanıtları.</p>
          </div>
          <div className="space-y-3 max-w-3xl mx-auto">
            {faqs.map((f, i) => (
              <div key={i} className="card-base overflow-hidden">
                <button onClick={() => setFaqOpen((p) => (p === i ? null : i))} className="w-full flex justify-between items-center p-6 text-left"><span className="text-[#0F172A] font-bold text-[16px]">{f.q}</span><Icon name="play" className={`w-4 h-4 shrink-0 transition-transform duration-300 ${faqOpen === i ? "rotate-90" : ""}`} /></button>
                {faqOpen === i && (<div className="px-6 pb-6 text-[#475569] text-[15px] leading-1.6 border-t border-[#E2E8F0]">{f.a}</div>)}
              </div>
            ))}
          </div>

      <footer className="bg-[#0F172A] text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1D4ED8]/5 -z-10" />
        <div className="container-max grid md:grid-cols-4 gap-10 lg:gap-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-2.5 group cursor-pointer"><div className="w-10 h-10 bg-[#1D4ED8] rounded-[8px] flex items-center justify-center text-[#0F172A] font-black shadow-lg shadow-[#1D4ED8]/30"><Icon name="logo" /></div><div className="leading-none"><span className="text-[#FFFFFF] font-bold text-[18px] tracking-tight italic">Babacan Nexus<span className="text-[#1D4ED8]">Web</span></span><span className="text-[10px] font-bold text-[#94A3B8] tracking-[3px] uppercase block mt-0.5">Babacan Digital Tasarım</span></div></div>
            <p className="text-[#CBD5E1] text-[15px] leading-1.6 max-w-lg">Döşemealtı / Antalya merkezinde modern, mobil uyumlu ve Google SEO dostu web sitesi tasarımı sunuyoruz. Recep Babacık liderliğinde kurumsal kimliğinizi dijital dünyaya taşıyın.</p>
            <div className="flex gap-4 mt-2"><a href={`tel:${PHONE_LINK}`} className="flex items-center gap-2 text-[#1D4ED8] font-medium text-[14px] hover:text-[#1538A8] transition"><Icon name="phone" className="w-4 h-4" /> {PHONE_DISPLAY}</a><a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-[#1D4ED8] font-medium text-[14px] hover:text-[#1538A8] transition"><Icon name="mail" className="w-4 h-4" /> {EMAIL}</a></div>
          </div>
          <div><h4 className="text-[#FFFFFF] font-bold text-[16px] mb-6 uppercase tracking-wider">Hızlı Menü</h4><ul className="space-y-3">{navLinks.map((link) => (<li key={link.href}><a href={link.href} className="text-[#CBD5E1] text-[14px] hover:text-[#FFFFFF] transition">{link.label}</a></li>))}</ul></div>
          <div><h4 className="text-[#FFFFFF] font-bold text-[16px] mb-6 uppercase tracking-wider">Hizmet Bölgesi</h4><div className="flex flex-wrap gap-2">{bolgeler.map((b, i) => (<span key={i} className="px-3 py-1.5 bg-[#1E293B] text-[#CBD5E1] text-[12px] rounded-full border border-[#334155] hover:border-[#1D4ED8] hover:text-[#FFFFFF] transition">{b}</span>))}</div></div>
          <div><h4 className="text-[#FFFFFF] font-bold text-[16px] mb-6 uppercase tracking-wider">Akıllı İletişim</h4><form onSubmit={(e) => { e.preventDefault(); const formData = new FormData(e.currentTarget); const ad = formData.get("ad") as string; const email = formData.get("email") as string; const mesaj = formData.get("mesaj") as string; const text = `Babacan Nexus Web İletişim Formu%n%nAd: ${ad}%nE-posta: ${email}%nMesaj: ${mesaj}`; window.open(`https://wa.me/${WHATSAPP_NO}?text=${encodeURIComponent(text)}`, "_blank"); }} className="space-y-3"><div className="relative"><input type="text" name="ad" required placeholder="Adınız" className="w-full bg-[#1E293B] border border-[#334155] rounded-xl px-4 py-3 text-[#FFFFFF] placeholder-[#64748B] focus:outline-none focus:border-[#1D4ED8] transition text-[14px]" /></div><div className="relative"><input type="email" name="email" required placeholder="E-posta Adresiniz" className="w-full bg-[#1E293B] border border-[#334155] rounded-xl px-4 py-3 text-[#FFFFFF] placeholder-[#64748B] focus:outline-none focus:border-[#1D4ED8] transition text-[14px]" /></div><div className="relative"><textarea name="mesaj" required rows={3} placeholder="Mesajınız" className="w-full bg-[#1E293B] border border-[#334155] rounded-xl px-4 py-3 text-[#FFFFFF] placeholder-[#64748B] focus:outline-none focus:border-[#1D4ED8] transition text-[14px]" /></div><button type="submit" className="w-full btn-whatsapp text-center text-[13px] font-bold py-3 shadow-lg shadow-[#16A34A]/30"><Icon name="whatsapp" className="w-4 h-4 shrink-0 mr-2" /> Mesajı Gönder</button></form></div>
        </div>
        <div className="container-max mt-12 pt-8 border-t border-[#334155] flex flex-col md:flex-row justify-between items-center gap-4 text-[#94A3B8] text-[11px] uppercase tracking-widest"><p>© {currentYear} Babacan Nexus Web - Recep Babacık. Tüm Hakları Saklıdır.</p><div className="flex gap-6"><a href={`https://wa.me/${WHATSAPP_NO}`} className="flex items-center gap-1.5 hover:text-[#FFFFFF] transition"><Icon name="whatsapp" className="w-3 h-3" /> WhatsApp</a><a href={`mailto:${EMAIL}`} className="hover:text-[#FFFFFF] transition">E-Posta</a><a href={`tel:${PHONE_LINK}`} className="hover:text-[#FFFFFF] transition">Arayın</a></div></div>
      </footer>

      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3"><a href={`tel:${PHONE_LINK}`} className="w-14 h-14 bg-[#0F172A] text-white rounded-full flex items-center justify-center text-2xl shadow-2xl hover:scale-110 transition z-50" title="Bizi Arayın"><Icon name="phone" className="w-6 h-6" /></a><a href={WA_LINK} className="w-14 h-14 bg-[#16A34A] text-white rounded-full flex items-center justify-center text-2xl shadow-2xl hover:scale-110 transition z-50" title="WhatsApp'ta Mesajlaşın"><Icon name="whatsapp" className="w-6 h-6" /></a></div>
        </div>
      </section>

      {modalProject && (
        <div className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setModalProject(null)} role="dialog" aria-modal="true">
          <div className="bg-[#FFFFFF] rounded-[12px] max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setModalProject(null)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#F8FAFC] text-[#0F172A] flex items-center justify-center hover:bg-[#1D4ED8] hover:text-white transition"><Icon name="play" className="w-4 h-4" /></button>
            <div className="p-8">
              {modalProject.external && (<a href={modalProject.link!} target="_blank" rel="noreferrer" className="inline-block btn-accent mb-4 text-[13px] px-5 py-2 shadow-lg shadow-[#1D4ED8]/30"><Icon name="play" className="w-4 h-4 shrink-0 mr-2" /> Projeyi İncele</a>)}
              <div className="w-full h-48 bg-[#F8FAFC] rounded-[10px] mb-6 flex items-center justify-center border border-[#E2E8F0]"><svg viewBox="0 0 160 100" className="w-full h-full" preserveAspectRatio="xMidYMid slice"><rect width="160" height="100" fill="#F8FAFC" /><rect x="6" y="6" width="148" height="22" rx="4" fill="#0F172A" /><circle cx="12" cy="17" r="1.8" fill="#EF4444" /><circle cx="18" cy="17" r="1.8" fill="#F59E0B" /><circle cx="24" cy="17" r="1.8" fill="#10B981" /><rect x="40" y="42" width="80" height="26" fill="#E2E8F0" rx="4" /><rect x="40" y="76" width="56" height="10" fill="#E2E8F0" rx="2" /><rect x="40" y="90" width="40" height="6" fill="#E2E8F0" rx="2" /></svg></div>
              <span className="text-[11px] font-bold text-[#1D4ED8] uppercase tracking-wider mb-1 block">{modalProject.kategori}</span>
              <h3 className="text-[#0F172A] text-[24px] font-bold mb-4">{modalProject.isim}</h3>
              <p className="text-[#475569] text-[15px] leading-1.6 mb-6">{modalProject.aciklama}</p>
              <div className="flex gap-3">
                {modalProject.external && (<a href={modalProject.link!} target="_blank" rel="noreferrer" className="flex-1 btn-primary text-center text-[13px] px-5 py-3">Canlı Sitede Görüntüle</a>)}
                <a href={waMsg(`Merhaba, "${modalProject.isim}" projesini incelemek istiyorum.`)} className="flex-1 btn-whatsapp text-center text-[13px] px-5 py-3 shadow-sm shadow-[#16A34A]/20"><Icon name="whatsapp" className="w-4 h-4 shrink-0 mr-2" /> WhatsApp'ta Sor</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}