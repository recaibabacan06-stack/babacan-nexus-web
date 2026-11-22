"use client";

import { useState, useEffect, useRef } from "react";
import {
  Phone,
  Mail,
  Globe,
  Check,
  Star,
  Play,
  Code,
  MapPin,
  User,
  Link,
  ArrowRight,
} from "lucide-react";

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#16A34A" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M17 1.41C11.26 1.41 6.69 5.06 5.12 9.46c-1.13 3.26-.11 7.09 2.61 9.36l2.68 2.22c2.37 1.97 6.14 1.25 8.68-.78l2.75-2.16c2.15-1.69 2.65-4.76 1.32-7.48C21.23 4.13 18.81 1.41 17 1.41zM8.79 15.28l-2.73-2.26c-.93-.77-1.4-1.79-1.4-2.84 0-1.18.77-2.22 2.04-2.68l.04-.02c1.11-.42 2.12-.18 2.72.46l2.45 2.6c.38.41.55.99.37 1.55l-.28.89c-.18.56-.83 1.19-1.58 1.49l-.73.28c-.75.3-1.46.42-2.19.31l-2.09-.29c-.58-.08-1.12-.22-1.63-.47l-.02-.01c-1.1-.55-1.74-1.52-1.74-2.72 0-1.14.94-2.07 2.1-2.07h.01c.79 0 1.54.42 1.94 1.14l2.81 5.06c.23.41.33.87.23 1.32l-.17.77c-.09.45-.54.78-1.01.83l-.84.09c-.47.05-.91.03-1.33-.08z" /></svg>
);

const WHATSAPP_NO = "905414483069";
const PHONE_DISPLAY = "0541 448 30 69";
const PHONE_LINK = "+905414483069";
const EMAIL = "recep_baback@hotmail.com";
const WA_TEXT = "Merhaba Babacan Nexus Web ile ilgili bilgi almak istiyorum.";
const WA_LINK = `https://wa.me/${WHATSAPP_NO}?text=${encodeURIComponent(WA_TEXT)}`;
const WA_LINK_DIRECT = `https://wa.me/${WHATSAPP_NO}`;

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

const teknolojiKartlari = [
  { baslik: "Next.js", aciklama: "Hızlı ve SEO uyumlu React tabanlı altyapı", icon: Code },
  { baslik: "React", aciklama: "Modern arayüz geliştirme kütüphanesi", icon: User },
  { baslik: "TypeScript", aciklama: "Tip güvenli ve sürdürülebilir kod yapısı", icon: Link },
  { baslik: "Tailwind CSS", aciklama: "Utility-first modern stil çerçevesi", icon: ArrowRight },
  { baslik: "Node.js", aciklama: "Sunucu tarafı JavaScript çalışma ortamı", icon: Code },
  { baslik: "Yapay Zeka Çözümleri", aciklama: "Akıllı chatbot ve veri analitiği entegrasyonu", icon: Star },
  { baslik: "Google SEO", aciklama: "Yerel arama sonuçlarında üst sıralar", icon: Globe },
  { baslik: "Google Harita", aciklama: "Döşemealtı / Antalya yerel görünürlük", icon: MapPin },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [modalProject, setModalProject] = useState<typeof portfolio[number] | null>(null);
  const [currentYear, setCurrentYear] = useState<number>(0);
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  const waMsg = (extra: string) => `https://wa.me/${WHATSAPP_NO}?text=${encodeURIComponent(extra)}`;

  const scrollToSection = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#FFFFFF] text-[#475569] font-sans antialiased selection:bg-[#1D4ED8] selection:text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://babacanwebtasarim.com/#business", name: "Babacan Nexus Web", legalName: "Babacan Digital Tasarım", alternateName: ["Babacan Nexus", "Babacan Web Tasarım"], founder: { "@type": "Person", name: "Recep Babacık" }, image: "/og-image.jpg", url: "https://babacanwebtasarim.com", telephone: PHONE_LINK, email: EMAIL, address: { "@type": "PostalAddress", streetAddress: "Yeniköy Mah.", addressLocality: "Döşemealtı", addressRegion: "Antalya", postalCode: "07190", addressCountry: "TR" }, geo: { "@type": "GeoCoordinates", latitude: 37.0191, longitude: 30.6125 }, areaServed: { "@type": "Country", name: "Türkiye" }, openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" }], priceRange: "₺₺", hasContactPoint: [{ "@type": "ContactPoint", telephone: PHONE_LINK, contactType: "customer service", availableLanguage: "Turkish" }, { "@type": "ContactPoint", email: EMAIL, contactType: "sales", availableLanguage: "Turkish" }], sameAs: ["https://wa.me/905414483069"], aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "12" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <div className="bg-[#0F172A] text-white text-[12px] py-2 px-5 hidden md:flex justify-between border-b border-white/5 tracking-[2px] uppercase">
        <div className="flex items-center space-x-6"><span className="flex items-center gap-2"><Phone className="w-4 h-4" /> <span>0541 448 30 69</span> | Döşemealtı Web Tasarım</span></div>
        <div className="flex items-center space-x-4"><a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-[#1D4ED8] transition"><Mail className="w-4 h-4" /> {EMAIL}</a></div>
      </div>

      <nav className="sticky top-0 z-50 bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#E2E8F0]">
        <div className="container-max h-16 flex justify-between items-center">
          <div onClick={() => scrollToSection("#hero")} className="flex items-center gap-2.5 group cursor-pointer">
            <div className="w-10 h-10 bg-[#1D4ED8] rounded-[8px] flex items-center justify-center text-[#0F172A] font-black shadow-lg shadow-[#1D4ED8]/30"><Play className="w-5 h-5" /></div>
            <div className="leading-none"><span className="text-[#0F172A] font-bold text-[18px] tracking-tight italic">Babacan Nexus<span className="text-[#1D4ED8]">Web</span></span><span className="text-[10px] font-bold text-[#475569] tracking-[3px] uppercase block mt-0.5">Dijital Tasarım</span></div>
          </div>
          <div className="hidden md:flex items-center space-x-7 text-[14px] font-medium text-[#0F172A]">{navLinks.map((link) => (<a key={link.href} href={link.href} className="hover:text-[#1D4ED8] transition" onClick={() => scrollToSection(link.href)}>{link.label}</a>))}<a href="#iletisim" className="btn-accent whitespace-nowrap shadow-lg shadow-[#1D4ED8]/30" onClick={(e) => { e.preventDefault(); scrollToSection("#iletisim"); }}>Teklif Al</a></div>
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={() => setMenuOpen((p) => !p)}
              className="w-8 h-8 flex flex-col justify-center gap-1.5 rounded-lg hover:bg-[#F8FAFC] p-1"
            >
              {[1, 2, 3].map((i) => (
                <span key={i} className="w-full h-0.5 bg-[#0F172A] rounded transition" style={{ transform: i === 0 ? (menuOpen ? "translateY(-6px)" : "") : i === 1 ? (menuOpen ? "rotate(0deg)" : "") : (menuOpen ? "translateY(6px) rotate(-45deg)" : "") }} />
              ))}
            </button>
            <a href={WA_LINK_DIRECT} className="hidden md:inline-block btn-accent whitespace-nowrap shadow-lg shadow-[#1D4ED8]/30" target="_blank" rel="noreferrer">
              Teklif Al
            </a>
          </div>
        </div>
        {menuOpen && (<div className="md:hidden bg-[#FFFFFF] border-b border-[#E2E8F0]"><div className="container-max py-6 space-y-4">{navLinks.map((link) => (<a key={link.href} href={link.href} className="block text-[15px] font-medium text-[#0F172A] py-3 hover:bg-[#F8FAFC] hover:text-[#1D4ED8] rounded-lg transition" onClick={() => scrollToSection(link.href)}>{link.label}</a>))}<a href="#iletisim" className="btn-accent block text-center whitespace-nowrap shadow-lg shadow-[#1D4ED8]/30" onClick={(e) => { e.preventDefault(); scrollToSection("#iletisim"); }}>Teklif Al</a></div></div>)}
      </nav>

      <section id="hero" className="relative section-padding overflow-hidden scroll-mt-24">
        <div className="container-max grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F8FAFC] text-[#1D4ED8] text-[11px] font-bold rounded-full uppercase tracking-wider border border-[#E2E8F0]"><Globe className="w-3 h-3" /> Döşemealtı / Antalya &amp; Tüm Türkiye</span>
            <h1 className="text-[#0F172A] text-[32px] md:text-[46px] font-bold leading-[1.15] mb-0 tracking-tight">Antalya Döşemealtı Web Tasarım<br /><span className="text-[#1D4ED8]">Çözümleri</span></h1>
            <p className="text-[#475569] text-[16px] leading-1.6 max-w-lg">Babacan Nexus Web olarak modern, mobil uyumlu ve Google SEO dostu web siteleri hazırlıyoruz. Döşemealtı, Antalya ve tüm Türkiye'deki işletmelere Recep Babacık liderliğinde dijital kimlik kazandırıyoruz.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${PHONE_LINK}`} className="btn-primary whitespace-nowrap flex items-center justify-center gap-2 shadow-lg"><Phone className="w-5 h-5" /> Hemen Ara {PHONE_DISPLAY}</a>
              <a href={WA_LINK} className="btn-whatsapp whitespace-nowrap flex items-center justify-center gap-2 shadow-lg shadow-[#16A34A]/30" target="_blank" rel="noreferrer"><WhatsappIcon className="w-5 h-5" /> Hemen WhatsApp'ta Konuş</a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="w-full aspect-[550/420] bg-[#F8FAFC] border border-[#E2E8F0] rounded-[12px] shadow-2xl overflow-hidden relative flex flex-col" style={{ minHeight: "420px", minWidth: "550px" }}>
              <div className="bg-[#0F172A] px-5 py-3 flex items-center gap-2 border-b border-[#E2E8F0]"><div className="w-2.5 h-2.5 rounded-full bg-red-500" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-500" /><div className="w-2.5 h-2.5 rounded-full bg-green-500" /><span className="ml-3 text-[10px] text-[#94A3B8] font-medium">babacanwebtasarim.com</span></div>
              <div className="flex-1 p-6 relative"><div className="h-1 bg-[#E2E8F0] rounded-full w-3/4 mb-4" /><div className="h-1 bg-[#E2E8F0] rounded-full w-1/2 mb-6" /><div className="grid md:grid-cols-2 gap-4"><div className="space-y-3"><div className="h-3 bg-[#E2E8F0] rounded w-full" /><div className="h-3 bg-[#E2E8F0] rounded w-3/4" /><div className="h-32 bg-[#E2E8F0] rounded-[8px] mt-2" /></div><div className="space-y-3"><div className="h-3 bg-[#E2E8F0] rounded w-full" /><div className="h-3 bg-[#E2E8F0] rounded w-2/3" /><div className="h-32 bg-[#E2E8F0] rounded-[8px] mt-2" /></div></div><div className="absolute bottom-6 left-6 right-6 bg-white rounded-[12px] p-4 shadow-lg border border-[#E2E8F0] flex items-center gap-3"><div className="w-10 h-10 bg-[#1D4ED8] rounded-[8px] flex items-center justify-center text-white font-bold text-xs">BN</div><div className="flex-1"><div className="text-[#0F172A] font-bold text-sm">Teklif Al - 2 Dakika</div><div className="text-[#475569] text-[11px]">0541 448 30 69 &bull; recep_baback@hotmail.com</div></div><button className="btn-whatsapp text-[11px] px-3 py-1.5 whitespace-nowrap shadow-md shadow-[#16A34A]/30">WhatsApp</button></div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="teknoloji" className="section-padding bg-[#F8FAFC] scroll-mt-24">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-[#0F172A] text-[26px] md:text-[34px] font-bold mb-3">Teknoloji Altyapımız</h2>
            <p className="text-[#475569] text-[16px] leading-1.6 max-w-2xl mx-auto">Next.js, React, TypeScript, Tailwind CSS, Node.js, Yapay Zeka ve Google SEO teknolojileri ile kurumsal altyapınızı güçlendiriyoruz.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {teknolojiKartlari.map((t, i) => (
              <div key={i} className="card-base flex flex-col items-center text-center p-6"><t.icon className="w-8 h-8 mb-3 text-[#1D4ED8]" /><h3 className="text-[#0F172A] font-bold text-[15px] mb-2">{t.baslik}</h3><p className="text-[#475569] text-[13px] leading-1.5">{t.aciklama}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#FFFFFF] scroll-mt-24">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-[#0F172A] text-[26px] md:text-[34px] font-bold mb-3">Müşteri Geri Bildirimleri</h2>
            <p className="text-[#475569] text-[16px] leading-1.6 max-w-2xl mx-auto">Google’da 5 yıldızla değerlendirilen hizmet anlayışımız, referanslarımızla güçlendirilmiş.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { ad: "Ahmet Yılmaz", rol: "Döşemealtı, Antalya", puan: 5, metin: "Babacan Nexus Web ile kurumsal sitemizi çok kısa sürede canlandırdık. Google’da ilk sayfadayız, teşekkürler Recep Babacık!", tarih: "15 Nisan 2026" },
              { ad: "Elif Demir", rol: "Konyaaltı, Antalya", puan: 5, metin: "E-ticaret sitemiz kusursuz çalışıyor. WhatsApp desteği ve teknik ekibe özel teşekkürler.", tarih: "02 Mayıs 2026" },
              { ad: "Murat Kaya", rol: "Kepez, Antalya", puan: 5, metin: "SEO çalışması sayesinde yerel aramalarda üst sıralara çıktık. Kesinlikle tavsiye ederim.", tarih: "20 Haziran 2026" },
            ].map((r, i) => (
              <div key={i} className="card-base flex flex-col">
                <div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-full bg-[#E2E8F0] flex items-center justify-center text-[#0F172A] font-bold text-sm">{r.ad.charAt(0)}</div><div><div className="text-[#0F172A] font-bold text-sm">{r.ad}</div><div className="text-[#475569] text-[12px]">{r.rol}</div></div></div>
                <div className="flex gap-1 mb-4 text-yellow-500">{[1, 2, 3, 4, 5].map((s) => (<Star key={s} className="w-4 h-4" />))}</div>
                <p className="text-[#475569] text-[15px] leading-1.6 mb-4 flex-1">{r.metin}</p>
                <div className="flex items-center gap-2 text-[12px] text-[#94A3B8] font-medium mt-auto"><span>Google Yorumu &bull;</span> <span>{r.tarih}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="hakkimizda" className="section-padding bg-[#FFFFFF] scroll-mt-24">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-[#0F172A] text-[26px] md:text-[34px] font-bold">Hakkımızda</h2>
              <p className="text-[#475569] text-[16px] leading-1.6">Recep Babacık liderliğinde {currentYear - 2012} yıldır <strong>Döşemealtı / Antalya</strong> ve tüm Türkiye'de dijital çözümler sunuyoruz. Babacan Nexus Web olarak kurumsal web tasarım, e-ticaret, teknik SEO ve yapay zeka destekli projelerimizle işletmenizin dijital dönüşümünü hızlandırıyoruz.</p>
              <p className="text-[#475569] text-[16px] leading-1.6">Modern altyapı, Google SEO odaklı çalışma anlayışı ve kesintisiz teknik destekle her bütçeye uygun çözümler üretmekteyiz.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={WA_LINK} className="btn-whatsapp flex items-center justify-center gap-2 shadow-lg shadow-[#16A34A]/30" target="_blank" rel="noreferrer"><WhatsappIcon className="w-5 h-5" /> Hemen WhatsApp'ta Konuş</a>
                <a href={`mailto:${EMAIL}`} className="btn-primary flex items-center justify-center gap-2 shadow-lg"><Mail className="w-5 h-5" /> E-Posta Gönder</a>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { baslik: "%100 Mobil Uyum", metin: "Tüm cihazlarda kusursuz görünen tasarım." },
                { baslik: "Google Algoritma & SEO Dostu", metin: "Yerel arama sonuçlarında üst sıralar için optimize." },
                { baslik: "100/100 Açılış Hızı", metin: "Next.js altyapısıyla öne çıkan performans." },
                { baslik: "Kesintisiz Teknik Destek", metin: "7/24 yanınızda olan destek ekibi." },
              ].map((g, i) => (
                <div key={i} className="card-base flex flex-col"><Check className="w-5 h-5 mb-3 text-[#16A34A] shrink-0" /><h3 className="text-[#0F172A] text-[20px] font-bold mb-2">{g.baslik}</h3><p className="text-[#475569] text-[15px] leading-1.6">{g.metin}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="hizmetler" className="section-padding bg-[#F8FAFC] scroll-mt-24">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-[#0F172A] text-[26px] md:text-[34px] font-bold mb-3">Hizmetlerimiz</h2>
            <p className="text-[#475569] text-[16px] leading-1.6 max-w-2xl mx-auto">Döşemealtı, Antalya ve tüm Türkiye'deki müşterilerimiz için özel üretilmiş dijital çözümler.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((hizmet, i) => (
              <div key={i} className="card-base flex flex-col h-full"><div className="w-12 h-12 bg-[#F8FAFC] rounded-[10px] flex items-center justify-center text-[#1D4ED8] mb-4 shrink-0"><Code className="w-6 h-6" /></div><h3 className="text-[#0F172A] text-[20px] font-bold mb-2">{hizmet.baslik}</h3><p className="text-[#475569] text-[15px] leading-1.6 mb-4 flex-1">{hizmet.aciklama}</p><div className="mt-auto pt-4 border-t border-[#E2E8F0] space-y-2">{hizmet.ozellikler.map((oz, j) => (<div key={j} className="flex items-center gap-2 text-[14px] text-[#475569]"><Check className="w-3.5 h-3.5 shrink-0" /><span>{oz}</span></div>))}<a href={waMsg(`Merhaba, "${hizmet.baslik}" hizmeti hakkında bilgi almak istiyorum.`)} className="mt-4 btn-accent text-center text-[14px] px-5 py-2.5 shadow-sm shadow-[#1D4ED8]/20" target="_blank" rel="noreferrer"><WhatsappIcon className="w-4 h-4 shrink-0" /> Hemen Ara / Teklif Al</a></div></div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolyo" className="section-padding bg-[#FFFFFF] scroll-mt-24">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-[#0F172A] text-[26px] md:text-[34px] font-bold mb-3">Portfolyo</h2>
            <p className="text-[#475569] text-[16px] leading-1.6 max-w-2xl mx-auto">16:10 oranında şık arayüz önizlemelere sahip örnek projelerimizden bazıları.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((p) => (
              <div key={p.id} className="card-base flex flex-col h-full group cursor-pointer" onClick={() => setModalProject(p)}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-[10px] bg-[#E2E8F0] mb-4"><div className="w-full h-full bg-[#E2E8F0] flex items-center justify-center"><Play className="w-8 h-8 text-[#1D4ED8]" /></div>{p.external && (<a href={p.link!} target="_blank" rel="noreferrer" className="absolute top-3 right-3 z-10 flex items-center gap-1.5 btn-accent text-[11px] px-3 py-1.5 shadow-lg shadow-[#1D4ED8]/40 whitespace-nowrap"><Play className="w-3 h-3 shrink-0" /> Projeyi İncele</a>)}</div><span className="text-[11px] font-bold text-[#1D4ED8] uppercase tracking-wider mb-1 block">{p.kategori}</span><h3 className="text-[#0F172A] text-[20px] font-bold mb-2 group-hover:text-[#1D4ED8] transition">{p.isim}</h3><p className="text-[#475569] text-[15px] leading-1.6 mb-4 flex-1">{p.aciklama}</p><button onClick={(e) => { e.stopPropagation(); setModalProject(p); }} className="w-full btn-primary text-[13px] px-5 py-2.5">Detay Görüntüle</button></div>
            ))}
          </div>
        </div>
      </section>

      <section id="surec" className="section-padding bg-[#F8FAFC] scroll-mt-24">
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

      <section id="sss" className="section-padding bg-[#F8FAFC] scroll-mt-24">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-[#0F172A] text-[26px] md:text-[34px] font-bold mb-3">Sıkça Sorulan Sorular</h2>
            <p className="text-[#475569] text-[16px] leading-1.6 max-w-2xl mx-auto">Babacan Nexus Web ile ilgili en çok sorulan sorular ve yanıtları.</p>
          </div>
          <div className="space-y-3 max-w-3xl mx-auto">
            {faqs.map((f, i) => (
              <div key={i} className="card-base overflow-hidden">
                <button onClick={() => setFaqOpen((p) => (p === i ? null : i))} className="w-full flex justify-between items-center p-6 text-left"><span className="text-[#0F172A] font-bold text-[16px]">{f.q}</span><Play className={`w-4 h-4 shrink-0 transition-transform duration-300 ${faqOpen === i ? "rotate-90" : ""}`} /></button>
                {faqOpen === i && (<div className="px-6 pb-6 text-[#475569] text-[15px] leading-1.6 border-t border-[#E2E8F0]">{f.a}</div>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="iletisim" className="section-padding bg-[#FFFFFF] scroll-mt-24">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-[#0F172A] text-[26px] md:text-[34px] font-bold mb-3">İletişime Geçin</h2>
            <p className="text-[#475569] text-[16px] leading-1.6 max-w-2xl mx-auto">Projeniz hakkında konuşmak için formu doldurun veya doğrudan bize ulaşın.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#1D4ED8]/10 rounded-xl flex items-center justify-center text-[#1D4ED8] mt-1"><Phone className="w-5 h-5" /></div>
                <div>
                  <p className="font-bold text-[#0F172A] uppercase text-sm">Telefon</p>
                  <p className="text-[#475569] text-sm italic"><a href={`tel:${PHONE_LINK}`} className="text-[#1D4ED8] hover:underline">{PHONE_DISPLAY}</a></p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#1D4ED8]/10 rounded-xl flex items-center justify-center text-[#1D4ED8] mt-1"><Mail className="w-5 h-5" /></div>
                <div>
                  <p className="font-bold text-[#0F172A] uppercase text-sm">E-posta</p>
                  <p className="text-[#475569] text-sm italic"><a href={`mailto:${EMAIL}`} className="text-[#1D4ED8] hover:underline">{EMAIL}</a></p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#1D4ED8]/10 rounded-xl flex items-center justify-center text-[#1D4ED8] mt-1"><MapPin className="w-5 h-5" /></div>
                <div>
                  <p className="font-bold text-[#0F172A] uppercase text-sm">Adres</p>
                  <p className="text-[#475569] text-sm italic">Yeniköy Mah., Döşemealtı / Antalya</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#1D4ED8]/10 rounded-xl flex items-center justify-center text-[#16A34A] mt-1"><WhatsappIcon className="w-5 h-5" /></div>
                <div>
                  <p className="font-bold text-[#0F172A] uppercase text-sm">WhatsApp</p>
                  <p className="text-[#475569] text-sm italic"><a href={WA_LINK_DIRECT} className="text-[#16A34A] hover:underline" target="_blank" rel="noreferrer">Hemen mesajlaşın</a></p>
                </div>
              </div>
            </div>
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[12px] p-8">
              <h3 className="text-[#0F172A] font-bold text-[18px] mb-6">İletişim Formu</h3>
              <form onSubmit={(e) => { e.preventDefault(); const formData = new FormData(e.currentTarget); const ad = formData.get("ad") as string; const email = formData.get("email") as string; const mesaj = formData.get("mesaj") as string; const text = `Babacan Nexus Web İletişim Formu%n%nAd: ${ad}%nE-posta: ${email}%nMesaj: ${mesaj}`; window.open(`https://wa.me/${WHATSAPP_NO}?text=${encodeURIComponent(text)}`, "_blank"); }} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold text-[#1D4ED8] uppercase tracking-[2px] mb-2">Adınız</label>
                  <input type="text" name="ad" required placeholder="Adınızı girin" className="w-full bg-white border border-[#E2E8F0] rounded-xl px-4 py-3 text-[#475569] placeholder-[#64748B] focus:outline-none focus:border-[#1D4ED8] transition text-[14px]" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-[#1D4ED8] uppercase tracking-[2px] mb-2">E-posta Adresiniz</label>
                  <input type="email" name="email" required placeholder="email@ornek.com" className="w-full bg-white border border-[#E2E8F0] rounded-xl px-4 py-3 text-[#475569] placeholder-[#64748B] focus:outline-none focus:border-[#1D4ED8] transition text-[14px]" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-[#1D4ED8] uppercase tracking-[2px] mb-2">Mesajınız</label>
                  <textarea name="mesaj" required rows={4} placeholder="Ne hakkında konuşmak istersiniz?" className="w-full bg-white border border-[#E2E8F0] rounded-xl px-4 py-3 text-[#475569] placeholder-[#64748B] focus:outline-none focus:border-[#1D4ED8] transition text-[14px]" />
                </div>
<button type="submit" className="w-full btn-whatsapp text-center text-[13px] font-bold py-3 shadow-lg shadow-[#16A34A]/30"><WhatsappIcon className="w-4 h-4 shrink-0 mr-2" /> Mesajı Gönder</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0F172A] text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1D4ED8]/5 -z-10" />
        <div className="container-max grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-2.5 group cursor-pointer"><div className="w-10 h-10 bg-[#1D4ED8] rounded-[8px] flex items-center justify-center text-[#0F172A] font-black shadow-lg shadow-[#1D4ED8]/30"><Play className="w-5 h-5" /></div><div className="leading-none"><span className="text-[#FFFFFF] font-bold text-[18px] tracking-tight italic">Babacan Nexus<span className="text-[#1D4ED8]">Web</span></span><span className="text-[10px] font-bold text-[#94A3B8] tracking-[3px] uppercase block mt-0.5">Dijital Tasarım</span></div></div>
            <p className="text-[#CBD5E1] text-[15px] leading-1.6 max-w-lg">Döşemealtı / Antalya merkezinde modern, mobil uyumlu ve Google SEO dostu web sitesi tasarımı sunuyoruz. Recep Babacık liderliğinde kurumsal kimliğinizi dijital dünyaya taşıyın.</p>
            <div className="flex gap-4 mt-2"><a href={`tel:${PHONE_LINK}`} className="flex items-center gap-2 text-[#1D4ED8] font-medium text-[14px] hover:text-[#1538A8] transition"><Phone className="w-4 h-4" /> {PHONE_DISPLAY}</a><a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-[#1D4ED8] font-medium text-[14px] hover:text-[#1538A8] transition"><Mail className="w-4 h-4" /> {EMAIL}</a></div>
          </div>
          <div><h4 className="text-[#FFFFFF] font-bold text-[16px] mb-6 uppercase tracking-wider">Hızlı Menü</h4><ul className="space-y-3">{navLinks.map((link) => (<li key={link.href}><a href={link.href} className="text-[#CBD5E1] text-[14px] hover:text-[#FFFFFF] transition">{link.label}</a></li>))}</ul></div>
          <div><h4 className="text-[#FFFFFF] font-bold text-[16px] mb-6 uppercase tracking-wider">Hizmet Bölgelerimiz</h4><div className="flex flex-wrap gap-2">{bolgeler.map((b, i) => (<span key={i} className="px-3 py-1.5 bg-[#1E293B] text-[#CBD5E1] text-[12px] rounded-full border border-[#334155] hover:border-[#1D4ED8] hover:text-[#FFFFFF] transition">{b}</span>))}</div></div>
          <div><h4 className="text-[#FFFFFF] font-bold text-[16px] mb-6 uppercase tracking-wider">İletişim Formu</h4><form onSubmit={(e) => { e.preventDefault(); const formData = new FormData(e.currentTarget); const ad = formData.get("ad") as string; const email = formData.get("email") as string; const mesaj = formData.get("mesaj") as string; const text = `Babacan Nexus Web İletişim Formu%n%nAd: ${ad}%nE-posta: ${email}%nMesaj: ${mesaj}`; window.open(`https://wa.me/${WHATSAPP_NO}?text=${encodeURIComponent(text)}`, "_blank"); }} className="space-y-3"><div className="relative"><input type="text" name="ad" required placeholder="Adınız" className="w-full bg-[#1E293B] border border-[#334155] rounded-xl px-4 py-3 text-[#FFFFFF] placeholder-[#64748B] focus:outline-none focus:border-[#1D4ED8] transition text-[14px]" /></div><div className="relative"><input type="email" name="email" required placeholder="E-posta Adresiniz" className="w-full bg-[#1E293B] border border-[#334155] rounded-xl px-4 py-3 text-[#FFFFFF] placeholder-[#64748B] focus:outline-none focus:border-[#1D4ED8] transition text-[14px]" /></div><div className="relative"><textarea name="mesaj" required rows={3} placeholder="Mesajınız" className="w-full bg-[#1E293B] border border-[#334155] rounded-xl px-4 py-3 text-[#FFFFFF] placeholder-[#64748B] focus:outline-none focus:border-[#1D4ED8] transition text-[14px]" /></div><button type="submit" className="w-full btn-whatsapp text-center text-[13px] font-bold py-3 shadow-lg shadow-[#16A34A]/30"><WhatsappIcon className="w-4 h-4 shrink-0 mr-2" /> Mesajı Gönder</button></form></div>
        </div>
        <div className="container-max mt-12 pt-8 border-t border-[#334155] flex flex-col md:flex-row justify-between items-center gap-4 text-[#94A3B8] text-[11px] uppercase tracking-widest"><p>© {currentYear} Babacan Nexus Web - Recep Babacık. Tüm Hakları Saklıdır.</p><div className="flex gap-6"><a href={`https://wa.me/${WHATSAPP_NO}`} className="flex items-center gap-1.5 hover:text-[#FFFFFF] transition"><WhatsappIcon className="w-3 h-3" /> WhatsApp</a><a href={`mailto:${EMAIL}`} className="hover:text-[#FFFFFF] transition">E-Posta</a><a href={`tel:${PHONE_LINK}`} className="hover:text-[#FFFFFF] transition">Arayın</a></div></div>
      </footer>

      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3"><a href={`tel:${PHONE_LINK}`} className="w-14 h-14 bg-[#0F172A] text-white rounded-full flex items-center justify-center text-2xl shadow-2xl hover:scale-110 transition z-50" title="Bizi Arayın"><Phone className="w-6 h-6" /></a><a href={WA_LINK_DIRECT} className="w-14 h-14 bg-[#16A34A] text-white rounded-full flex items-center justify-center text-2xl shadow-2xl hover:scale-110 transition z-50" title="WhatsApp'ta Mesajlaşın" target="_blank" rel="noreferrer"><WhatsappIcon className="w-6 h-6" /></a></div>

      {modalProject && (
        <div className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setModalProject(null)} role="dialog" aria-modal="true">
          <div className="bg-[#FFFFFF] rounded-[12px] max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setModalProject(null)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#F8FAFC] text-[#0F172A] flex items-center justify-center hover:bg-[#1D4ED8] hover:text-white transition"><Play className="w-4 h-4" /></button>
            <div className="p-8">
              {modalProject.external && (<a href={modalProject.link!} target="_blank" rel="noreferrer" className="inline-block btn-accent mb-4 text-[13px] px-5 py-2 shadow-lg shadow-[#1D4ED8]/30"><Play className="w-4 h-4 shrink-0 mr-2" /> Projeyi İncele</a>)}
              <div className="w-full h-48 bg-[#F8FAFC] rounded-[10px] mb-6 flex items-center justify-center border border-[#E2E8F0]"><div className="w-full h-full bg-[#E2E8F0] flex items-center justify-center"><Play className="w-8 h-8 text-[#1D4ED8]" /></div></div>
              <span className="text-[11px] font-bold text-[#1D4ED8] uppercase tracking-wider mb-1 block">{modalProject.kategori}</span>
              <h3 className="text-[#0F172A] text-[24px] font-bold mb-4">{modalProject.isim}</h3>
              <p className="text-[#475569] text-[15px] leading-1.6 mb-6">{modalProject.aciklama}</p>
              <div className="flex gap-3">
                {modalProject.external && (<a href={modalProject.link!} target="_blank" rel="noreferrer" className="flex-1 btn-primary text-center text-[13px] px-5 py-3">Canlı Sitede Görüntüle</a>)}
                <a href={waMsg(`Merhaba, "${modalProject.isim}" projesini incelemek istiyorum.`)} className="flex-1 btn-whatsapp text-center text-[13px] px-5 py-3 shadow-sm shadow-[#16A34A]/20" target="_blank" rel="noreferrer"><WhatsappIcon className="w-4 h-4 shrink-0 mr-2" /> WhatsApp'ta Sor</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
