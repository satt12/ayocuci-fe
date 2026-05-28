"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Check, Receipt, Smartphone, ArrowRight, Plus, BarChart3, ShieldCheck } from "lucide-react";

export default function FiturPage() {
  // --- STATE INTERAKTIF UNTUK SUB-BUTTON DI TIAP BARIS ---
  const [subKasir, setSubKasir] = useState("overview");
  const [subTracking, setSubTracking] = useState("overview");
  const [subWa, setSubWa] = useState("overview");
  const [subAnalytics, setSubAnalytics] = useState("overview");

  const [activeGlobalTab, setActiveGlobalTab] = useState(0);

  // State manipulasi dummy visual di dalam smartphone mockup
  const [kasirItems, setKasirItems] = useState([
    { name: "Laundry Kiloan (3kg)", price: 21000 },
    { name: "Cuci Selimut Besar", price: 25000 },
  ]);
  const [trackingStep, setTrackingStep] = useState(1);
  const [waTemplate, setWaTemplate] = useState("selesai");

  const globalTabs = [
    { label: "Kasir POS", target: "section-kasir" },
    { label: "Tracking Status", target: "section-tracking" },
    { label: "WhatsApp Bot", target: "section-wa" },
    { label: "Smart Analytics", target: "section-analytics" }
  ];

  const handleScrollToSection = (id: string, index: number) => {
    setActiveGlobalTab(index);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const tambahItemKasir = () => {
    if (kasirItems.length < 4) {
      setKasirItems([...kasirItems, { name: "Express Jasa Setrika", price: 15000 }]);
    } else {
      setKasirItems([
        { name: "Laundry Kiloan (3kg)", price: 21000 },
        { name: "Cuci Selimut Besar", price: 25000 },
      ]);
    }
  };

  return (
    <nav className="min-h-screen bg-white dark:bg-zinc-950 pt-44 pb-24 font-sans selection:bg-[#e76f51]/30">
      
      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-8 mb-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-left flex flex-col items-start gap-4">
            <span className="text-[#e76f51] font-bold text-xs bg-[#e76f51]/10 px-3 py-1.5 rounded-full tracking-widest uppercase">
              Eksplorasi Modul
            </span>
            <h1 className="font-title text-4xl md:text-6xl font-black dark:text-white tracking-tight leading-tight">
              Satu Ekosistem Cerdas <br />
              <span className="text-[#e76f51]">Manajemen Laundry Modern</span>
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl">
              Gali lebih dalam performa modul Ayocuci. Kami mendesain antarmuka point-of-sales yang tangguh untuk mempermudah operasional kasir harian hingga otomatisasi reporting owner.
            </p>
          </div>

          {/* Mockup HP Atas */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-72 aspect-[9/19] bg-zinc-100 dark:bg-zinc-900 rounded-[3rem] p-4 shadow-xl border border-zinc-200/50 dark:border-zinc-800 flex items-center justify-center relative overflow-hidden">
              <div className="w-full h-full bg-white dark:bg-zinc-950 rounded-[2.5rem] p-4 flex flex-col justify-between border border-black/5">
                <div className="w-16 h-4 bg-black mx-auto rounded-full mb-4" />
                <div className="flex-1 space-y-3">
                  <div className="w-1/2 h-4 bg-zinc-200 dark:bg-zinc-800 rounded-md" />
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-16 bg-[#e76f51]/20 rounded-xl" />
                    <div className="h-16 bg-amber-500/10 rounded-xl" />
                  </div>
                  <div className="h-24 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-black/5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- LIST HEADER & NAVIGASI GLOBAL --- */}
      <section className="text-center mb-32 max-w-3xl mx-auto px-8 flex flex-col items-center gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#e76f51] bg-[#e76f51]/10 px-3 py-1 rounded-full">Spesifikasi</span>
          <h2 className="font-title text-3xl md:text-5xl font-black dark:text-white mt-4 tracking-tight leading-tight">
            Detail Alur Kerja & <br /> Integrasi Setiap Modul
          </h2>
        </div>

        <div className="mt-4 flex bg-zinc-50 dark:bg-zinc-900 p-2 rounded-2xl border border-zinc-200/40 dark:border-zinc-800/80 max-w-2xl w-full justify-between items-center shadow-xs">
          {globalTabs.map((item, index) => (
            <button
              key={index}
              onClick={() => handleScrollToSection(item.target, index)}
              className={`flex-1 py-3 px-2 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                activeGlobalTab === index 
                  ? "bg-white dark:bg-zinc-800 text-[#e76f51] shadow-sm border border-black/5" 
                  : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </section>

      {/* --- DEEP DIVE FEATURES SECTION (ZIG-ZAG) --- */}
      <section className="max-w-7xl mx-auto px-8 space-y-44 mb-32">

        {/* MODUL 01: KASIR PINTAR */}
        <div id="section-kasir" className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 scroll-mt-28">
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-72 aspect-[9/19] bg-[#fdf6f0] dark:bg-zinc-900 rounded-[3rem] p-7 shadow-2xl relative border border-zinc-200/40 flex flex-col justify-between overflow-hidden">
              <div className="w-full h-full flex flex-col justify-between">
                <div className="w-20 h-4 bg-black mx-auto rounded-full mb-4 shrink-0" />
                <div className="flex-1 bg-white dark:bg-zinc-950 rounded-2xl p-4 shadow-sm border border-black/5 flex flex-col justify-between text-[10px]">
                  <div>
                    <div className="flex justify-between items-center pb-2 border-b border-zinc-100 dark:border-zinc-800">
                      <span className="font-bold dark:text-white flex items-center gap-1"><Receipt className="w-3 h-3 text-[#e76f51]" /> Transaksi #782</span>
                      <span className="bg-emerald-500/10 text-emerald-600 px-1.5 py-0.5 rounded-full font-bold text-[8px]">Lunas</span>
                    </div>
                    <div className="mt-3 space-y-2 text-zinc-500 max-h-30 overflow-y-auto">
                      {kasirItems.map((item, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span>{item.name}</span>
                          <span className="font-semibold text-zinc-800 dark:text-white">Rp {item.price.toLocaleString("id-ID")}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-2 border-t border-dashed border-zinc-200 dark:border-zinc-800 flex justify-between font-bold text-zinc-800 dark:text-white text-xs shrink-0">
                    <span>Total</span>
                    <span className="text-[#e76f51] font-black">Rp {kasirItems.reduce((sum, item) => sum + item.price, 0).toLocaleString("id-ID")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-5 text-left items-start">
            <div className="flex flex-wrap gap-2 bg-zinc-50 dark:bg-zinc-900/60 p-1.5 rounded-2xl border border-black/5">
              {["Overview", "Detail Fitur", "Mutasi Kasir", "Lainnya"].map((btn) => {
                const btnId = btn.toLowerCase().replace(" ", "-");
                return (
                  <button key={btn} onClick={() => setSubKasir(btnId)} className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${subKasir === btnId ? "bg-white dark:bg-zinc-800 shadow-xs text-[#e76f51]" : "text-zinc-400 hover:text-zinc-600"}`}>
                    {btn}
                  </button>
                );
              })}
            </div>

            <span className="text-sm font-bold text-zinc-400 mt-2">01 / Operational</span>
            
            <AnimatePresence mode="wait">
              <motion.div key={subKasir} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="space-y-4">
                <h3 className="font-title text-3xl md:text-4xl font-black dark:text-white tracking-tight">
                  {subKasir === "overview" && "Kasir POS Cepat & Akurat"}
                  {subKasir === "detail-fitur" && "Metode Pembayaran QRIS Terpadu"}
                  {subKasir === "mutasi-kasir" && "Pencatatan Arus Kas Shift"}
                  {subKasir === "lainnya" && "Kustomisasi Nota Struk Berlogo"}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed">
                  {subKasir === "overview" && "Catat transaksi kiloan maupun satuan kurang dari 30 detik. Sistem otomatis menghitung harga total, manajemen uang muka (DP), diskon promo, hingga mencetak struk fisik via printer thermal."}
                  {subKasir === "detail-fitur" && "Mendukung pembayaran split payment antara tunai dan non-tunai (QRIS, transfer bank). Semua data otomatis tercatat tanpa perlu kalkulasi manual terpisah."}
                  {subKasir === "mutasi-kasir" && "Kelola manajemen laci kasir (cash drawer) tiap pergantian shift karyawan. Pantau modal awal dan total setoran kas riil secara akurat."}
                  {subKasir === "lainnya" && "Tambahkan logo usaha, pesan kustom di kaki nota, atau barcode khusus untuk mempermudah pencarian pakaian saat diambil pelanggan."}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="space-y-3 w-full mt-4">
              {["Kalkulasi harga otomatis bebas salah hitung", "Metode Split Payment tunai & e-wallet"].map((text, i) => (
                <div key={i} className="flex justify-between items-center p-4 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-black/5 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  <span>{text}</span>
                  <span className="text-zinc-400">✦</span>
                </div>
              ))}
            </div>
            <button onClick={tambahItemKasir} className="mt-2 flex items-center gap-2 bg-[#e76f51] text-white px-6 py-3 rounded-xl font-bold text-xs hover:opacity-90 transition-all cursor-pointer shadow-md shadow-[#e76f51]/10">
              <Plus className="w-3.5 h-3.5" /> Simulasi Tambah Item
            </button>
          </div>
        </div>

        {/* MODUL 02: TRACKING SYSTEM */}
        <div id="section-tracking" className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24 scroll-mt-28">
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-72 aspect-[9/19] bg-[#f4f7f4] dark:bg-zinc-900 rounded-[3rem] p-7 shadow-2xl relative border border-zinc-200/40 flex flex-col justify-between overflow-hidden">
              <div className="w-full h-full flex flex-col justify-between">
                <div className="w-20 h-4 bg-black mx-auto rounded-full mb-4 shrink-0" />
                <div className="flex-1 bg-white dark:bg-zinc-950 rounded-2xl p-4 shadow-sm border border-black/5 flex flex-col gap-2.5 justify-center">
                  {["Antre", "Cuci", "Kering", "Siap"].map((step, i) => {
                    const isDone = i < trackingStep;
                    const isActive = i === trackingStep;
                    return (
                      <div key={i} className={`flex items-center gap-3 p-2.5 rounded-xl border ${isActive ? "border-[#e76f51] bg-[#e76f51]/5" : "border-black/5"}`}>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[10px] ${isDone ? "bg-emerald-500 text-white" : isActive ? "bg-[#e76f51] text-white animate-pulse" : "bg-zinc-100 dark:bg-zinc-800 text-zinc-400"}`}>
                          {isDone ? "✓" : i + 1}
                        </div>
                        <div>
                          <div className="text-[11px] font-bold dark:text-white leading-none">{step}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-5 text-left items-start">
            <div className="flex flex-wrap gap-2 bg-zinc-50 dark:bg-zinc-900/60 p-1.5 rounded-2xl border border-black/5">
              {["Overview", "Detail Fitur", "Mutasi Terakhir"].map((btn) => {
                const btnId = btn.toLowerCase().replace(" ", "-");
                return (
                  <button key={btn} onClick={() => setSubTracking(btnId)} className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${subTracking === btnId ? "bg-white dark:bg-zinc-800 shadow-xs text-[#e76f51]" : "text-zinc-400 hover:text-zinc-600"}`}>
                    {btn}
                  </button>
                );
              })}
            </div>

            <span className="text-sm font-bold text-zinc-400 mt-2">02 / Workflow</span>
            
            <AnimatePresence mode="wait">
              <motion.div key={subTracking} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="space-y-4">
                <h3 className="font-title text-3xl md:text-4xl font-black dark:text-white tracking-tight">
                  {subTracking === "overview" && "Real-Time Laundry Tracking"}
                  {subTracking === "detail-fitur" && "Manajemen Antrean per Mesin"}
                  {subTracking === "mutasi-terakhir" && "Log Akuntabilitas Karyawan"}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed">
                  {subTracking === "overview" && "Pantau posisi pakaian pelanggan secara presisi. Kasir atau petugas workshop cukup memperbarui status pengerjaan lewat satu ketukan dashboard, mencegah baju tertukar atau terselip."}
                  {subTracking === "detail-fitur" && "Distribusikan beban cucian secara adil ke tiap mesin cuci atau mesin pengering yang kosong. Maksimalkan kapasitas kapasitas produksi harian usaha."}
                  {subTracking === "mutasi-terakhir" && "Lacak siapa petugas yang mencuci, mengeringkan, hingga melipat pakaian pada nota tertentu untuk menjaga kualitas kontrol layanan laundry."}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="space-y-3 w-full mt-4">
              {["Sistem pelacakan linier langkah-demi-langkah", "Notifikasi internal antrean menumpuk"].map((text, i) => (
                <div key={i} className="flex justify-between items-center p-4 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-black/5 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  <span>{text}</span>
                  <span className="text-zinc-400">✦</span>
                </div>
              ))}
            </div>
            <button onClick={() => setTrackingStep((prev) => (prev + 1) % 4)} className="mt-2 flex items-center gap-2 bg-[#e76f51] text-white px-6 py-3 rounded-xl font-bold text-xs hover:opacity-90 transition-all cursor-pointer shadow-md shadow-[#e76f51]/10">
              <ArrowRight className="w-3.5 h-3.5" /> Simulasi Progres Cuci
            </button>
          </div>
        </div>

        {/* MODUL 03: WHATSAPP GATEWAY */}
        <div id="section-wa" className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 scroll-mt-28">
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-72 aspect-[9/19] bg-[#fff5f5] dark:bg-zinc-900 rounded-[3rem] p-7 shadow-2xl relative border border-zinc-200/40 flex flex-col justify-between overflow-hidden">
              <div className="w-full h-full flex flex-col justify-between">
                <div className="w-20 h-4 bg-black mx-auto rounded-full mb-4 shrink-0" />
                <div className="flex-1 bg-[#e5ddd5] dark:bg-zinc-950 rounded-2xl p-2.5 shadow-sm border border-black/5 flex flex-col justify-start">
                  <div className="bg-[#075e54] text-white p-2 rounded-t-lg -mx-2.5 -mt-2.5 flex items-center gap-1.5 shrink-0">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[8px]"><Smartphone className="w-2.5 h-2.5" /></div>
                    <div className="text-[9px] font-bold">Ayocuci WhatsApp Bot</div>
                  </div>
                  <div className="flex gap-1 mt-2 mb-1 justify-center shrink-0">
                    {["baru", "proses", "selesai"].map((t) => (
                      <button key={t} onClick={() => setWaTemplate(t)} className={`px-2 py-1 rounded-md text-[7px] font-bold uppercase ${waTemplate === t ? "bg-[#e76f51] text-white" : "bg-white text-zinc-500"}`}>
                        {t}
                      </button>
                    ))}
                  </div>
                  <motion.div key={waTemplate} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white dark:bg-zinc-900 p-2.5 rounded-xl text-[9px] text-zinc-800 dark:text-zinc-200 text-left leading-relaxed shadow-sm">
                    {waTemplate === "baru" && <>Halo Kak Satria, nota <span className="text-[#e76f51] font-bold">#782</span> telah diterima di workshop.</>}
                    {waTemplate === "proses" && <>Pakaian nota <span className="text-[#e76f51] font-bold">#782</span> sedang dalam tahap pencucian.</>}
                    {waTemplate === "selesai" && <>Cucian nota <span className="text-[#e76f51] font-bold">#782</span> telah **SIAP DIAMBIL** 🎉.</>}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-5 text-left items-start">
            <div className="flex flex-wrap gap-2 bg-zinc-50 dark:bg-zinc-900/60 p-1.5 rounded-2xl border border-black/5">
              {["Overview", "Detail Fitur", "Mutasi Terakhir"].map((btn) => {
                const btnId = btn.toLowerCase().replace(" ", "-");
                return (
                  <button key={btn} onClick={() => setSubWa(btnId)} className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${subWa === btnId ? "bg-white dark:bg-zinc-800 shadow-xs text-[#e76f51]" : "text-zinc-400 hover:text-zinc-600"}`}>
                    {btn}
                  </button>
                );
              })}
            </div>

            <span className="text-sm font-bold text-zinc-400 mt-2">03 / Communication</span>
            
            <AnimatePresence mode="wait">
              <motion.div key={subWa} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="space-y-4">
                <h3 className="font-title text-3xl md:text-4xl font-black dark:text-white tracking-tight">
                  {subWa === "overview" && "WhatsApp Gateway Otomatis"}
                  {subWa === "detail-fitur" && "Template Struk Pesan Digital"}
                  {subWa === "mutasi-terakhir" && "Log Riwayat Pengiriman Bot"}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed">
                  {subWa === "overview" && "Tingkatkan retensi kepuasan pelanggan secara instan. Sistem otomatis mengirim pesan resmi ke WhatsApp kostumer saat transaksi baru masuk dan ketika pakaian selesai dipak rapi."}
                  {subWa === "detail-fitur" && "Kirimkan link nota digital interaktif langsung ke chat pelanggan. Hemat biaya operasional pembelian kertas struk fisik secara drastis."}
                  {subWa === "mutasi-terakhir" && "Pantau status pengiriman pesan (Terkirim, Gagal, Menunggu) untuk memastikan semua kostumer menerima pengingat pengambilan dengan aman."}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="space-y-3 w-full mt-4">
              {["Tanpa ketik chat manual satu-per-satu", "Link struk digital langsung sekali klik"].map((text, i) => (
                <div key={i} className="flex justify-between items-center p-4 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-black/5 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  <span>{text}</span>
                  <span className="text-zinc-400">✦</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MODUL 04: SMART ANALYTICS */}
        <div id="section-analytics" className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24 scroll-mt-28">
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-72 aspect-[9/19] bg-orange-500/10 dark:bg-zinc-900 rounded-[3rem] p-7 shadow-2xl relative border border-zinc-200/40 flex flex-col justify-start overflow-hidden">
              <div className="w-20 h-4 bg-black mx-auto rounded-full mb-12 shrink-0" />
              <div className="w-full bg-white dark:bg-zinc-900 rounded-2xl p-4 shadow-xl border border-black/5 font-sans text-[10px] flex flex-col justify-between">
                <div className="flex justify-between items-end mb-3">
                  <div>
                    <div className="text-zinc-400 text-[8px] font-bold uppercase tracking-wider">Omzet Minggu Ini</div>
                    <div className="text-sm font-black text-zinc-800 dark:text-white tracking-tighter">Rp 8.420.000</div>
                  </div>
                  <div className="text-emerald-500 font-bold text-[9px] flex items-center">+12.5%</div>
                </div>
                <div className="flex items-end justify-between gap-1 h-14">
                  {[35, 65, 45, 95, 60, 85, 50].map((h, i) => (
                    <div key={i} style={{ height: `${h}%` }} className={`w-full rounded-t-xs ${i === 3 ? "bg-[#e76f51]" : "bg-zinc-100 dark:bg-zinc-800"}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-5 text-left items-start">
            <div className="flex flex-wrap gap-2 bg-zinc-50 dark:bg-zinc-900/60 p-1.5 rounded-2xl border border-black/5">
              {["Overview", "Detail Fitur", "Mutasi Terakhir"].map((btn) => {
                const btnId = btn.toLowerCase().replace(" ", "-");
                return (
                  <button key={btn} onClick={() => setSubAnalytics(btnId)} className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${subAnalytics === btnId ? "bg-white dark:bg-zinc-800 shadow-xs text-[#e76f51]" : "text-zinc-400 hover:text-zinc-600"}`}>
                    {btn}
                  </button>
                );
              })}
            </div>

            <span className="text-sm font-bold text-zinc-400 mt-2">04 / Intelligence</span>
            
            <AnimatePresence mode="wait">
              <motion.div key={subAnalytics} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="space-y-4">
                <h3 className="font-title text-3xl md:text-4xl font-black dark:text-white tracking-tight">
                  {subAnalytics === "overview" && "Smart Analytics & Forecast"}
                  {subAnalytics === "detail-fitur" && "Laporan Pendapatan Laba Rugi"}
                  {subAnalytics === "mutasi-terakhir" && "Analisis Retensi Loyalitas"}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed">
                  {subAnalytics === "overview" && "Ambil keputusan bisnis berbasis data ril. Pantau grafik fluktuasi laba rugi bulanan, ketahui layanan paling laris, dan petakan performa efisiensi produksi tiap cabang lewat satu dasbor pusat."}
                  {subAnalytics === "detail-fitur" && "Dapatkan kalkulasi otomatis bersih otomatis setelah dikurangi biaya operasional detergen, gaji kasir, dan pengeluaran harian outlet."}
                  {subAnalytics === "mutasi-terakhir" && "Ketahui berapa persen pelanggan lama yang kembali mencuci pakaian mereka dalam kurun waktu 30 hari terakhir secara visual."}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="space-y-3 w-full mt-4">
              {["Visualisasi kurva grafik batang interaktif", "Statistik rasio repeat-order pelanggan"].map((text, i) => (
                <div key={i} className="flex justify-between items-center p-4 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-black/5 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  <span>{text}</span>
                  <span className="text-zinc-400">✦</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* --- ARSITEKTUR SECTION (EAI) --- */}
      <section className="max-w-7xl mx-auto px-8 border-t border-zinc-100 dark:border-zinc-900 pt-24">
        <div className="text-center mb-16">
          <h2 className="font-title text-3xl font-black dark:text-white">Arsitektur Skala Perusahaan (EAI)</h2>
          <p className="text-sm text-zinc-500 mt-2">Didesain kokoh untuk integrasi data yang andal.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-3">
            <div className="w-12 h-12 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-[#e76f51]"><BarChart3 className="w-5 h-5" /></div>
            <h4 className="font-title font-bold text-lg dark:text-white mt-2">Manajemen Multi-Outlet</h4>
            <p className="text-sm text-zinc-500 leading-relaxed">Konsolidasi laporan keuangan, kontrol stok bahan baku, dan performa karyawan lintas cabang dalam satu hak akses admin pusat.</p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="w-12 h-12 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-[#e76f51]"><ShieldCheck className="w-5 h-5" /></div>
            <h4 className="font-title font-bold text-lg dark:text-white mt-2">Keamanan & Hak Akses</h4>
            <p className="text-sm text-zinc-500 leading-relaxed">Batasi tindakan fraud kasir dengan enkripsi data transaksi dan kustomisasi penuh hak akses (Owner, Manajer, Kasir).</p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="w-12 h-12 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-[#e76f51]"><Check className="w-5 h-5" /></div>
            <h4 className="font-title font-bold text-lg dark:text-white mt-2">Sinkronisasi Otomatis</h4>
            <p className="text-sm text-zinc-500 leading-relaxed">Seluruh data kasir offline/online langsung tersinkronisasi otomatis dengan arsitektur cloud server tanpa jeda tunda data.</p>
          </div>
        </div>
      </section>

    </nav>
  );
}