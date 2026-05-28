"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Monitor, Smartphone, ShieldCheck, Users, BarChart3, Receipt, Layers, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  // State interaktif dummy untuk tab pricing (jika nanti mau pasang toggle bulanan/tahunan)
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <main className="min-h-screen bg-[#f8f9fa] text-zinc-900 overflow-x-hidden selection:bg-[#e76f51]/30 font-sans">
      
      {/* =========================================================================
          1. HERO SECTION
          ========================================================================= */}
      <section className="relative pt-48 pb-20 max-w-7xl mx-auto px-6 md:px-8 text-center flex flex-col items-center gap-6">
        <span className="text-[#e76f51] font-bold text-xs bg-[#e76f51]/10 px-4 py-2 rounded-full tracking-widest uppercase">
          Aplikasi Kasir Laundry #1 di Indonesia
        </span>
        <h1 className="font-title text-4xl md:text-6xl font-black tracking-tight max-w-4xl leading-tight text-zinc-950">
          Aplikasi Kasir Laundry <br />
          <span className="text-[#e76f51]">Modern & Praktis</span>
        </h1>
        <p className="text-zinc-500 text-base md:text-lg max-w-2xl leading-relaxed">
          Kelola transaksi, pantau workshop, cetak nota otomatis, hingga otomatisasi pesan WhatsApp pelanggan dalam satu aplikasi SaaS terintegrasi.
        </p>

        {/* Dual Call-To-Action (CTA) Buttons */}
        <div className="flex flex-wrap gap-4 mt-2 justify-center">
          <Link href="/fitur" className="bg-[#e76f51] text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg shadow-[#e76f51]/20 hover:opacity-95 transition-all">
            Coba Gratis Sekarang
          </Link>
          <button className="bg-white border border-zinc-200 text-zinc-700 font-bold text-sm px-8 py-4 rounded-full hover:bg-zinc-50 transition-all cursor-pointer">
            Lihat Demo
          </button>
        </div>

        {/* 💻 DUMMY WEB DASHBOARD MOCKUP (CSS MURNI GRADASI) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 w-full max-w-5xl aspect-[16/10] bg-gradient-to-tr from-[#f4a261]/20 via-[#e76f51]/10 to-transparent rounded-3xl p-4 shadow-2xl border border-zinc-200/60 relative overflow-hidden"
        >
          {/* Tiruan Top Bar Aplikasi Browser */}
          <div className="w-full bg-white rounded-2xl h-full p-6 flex flex-col gap-6 text-left border border-black/5 shadow-inner">
            <div className="flex justify-between items-center pb-4 border-b border-zinc-100">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="text-xs text-zinc-400 ml-2 font-mono">dashboard.ayocuci.com</span>
              </div>
              <div className="w-24 h-6 bg-zinc-100 rounded-md" />
            </div>
            {/* Isi Grid Dashboard Dummy */}
            <div className="grid grid-cols-3 gap-4 flex-1">
              <div className="col-span-2 bg-gradient-to-br from-[#e76f51]/5 to-transparent rounded-2xl p-4 border border-[#e76f51]/10 flex flex-col justify-between">
                <div className="h-4 w-1/3 bg-zinc-200 rounded-md" />
                <div className="h-32 bg-white/40 rounded-xl border border-dashed border-zinc-300 flex items-end justify-between p-4 gap-2">
                  {[40, 70, 55, 90, 60, 80, 65, 85].map((h, i) => (
                    <div key={i} style={{ height: `${h}%` }} className="w-full bg-[#e76f51] rounded-t-md opacity-80" />
                  ))}
                </div>
              </div>
              <div className="bg-zinc-50 rounded-2xl p-4 border border-black/5 flex flex-col gap-3">
                <div className="h-4 bg-zinc-200 rounded-md w-1/2" />
                <div className="h-4 bg-zinc-100 rounded-md" />
                <div className="h-4 bg-zinc-100 rounded-md" />
                <div className="h-12 bg-[#e76f51]/10 rounded-xl mt-auto" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =========================================================================
          2. BENTO GRID FITUR UTAMA
          ========================================================================= */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-left mb-16 max-w-2xl">
          <span className="text-sm font-bold text-[#e76f51]">Fitur POS</span>
          <h2 className="font-title text-3xl md:text-4xl font-black tracking-tight mt-2 text-zinc-950">
            Semua yang Kamu Butuhkan untuk Mengelola Laundry
          </h2>
        </div>

        {/* Susunan Bento Grid Sesuai Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* KOTAK KIRI BESAR (Monitoring Real-time + Mockup HP) */}
          <div className="lg:col-span-7 bg-white rounded-[2rem] p-8 md:p-10 border border-zinc-200/60 shadow-xs flex flex-col md:flex-row gap-8 justify-between items-center overflow-hidden">
            <div className="flex flex-col gap-4 items-start max-w-xs text-left">
              <span className="text-[10px] font-bold bg-[#e76f51]/10 text-[#e76f51] px-2.5 py-1 rounded-full uppercase tracking-wider">Workshop</span>
              <h3 className="font-title text-2xl font-black tracking-tight text-zinc-950">Monitoring Real-time Status Cucian</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">Pantau ketat posisi cucian konsumen mulai dari antrean, mesin cuci, pengeringan hingga siap ambil tanpa takut tertukar.</p>
              <Link href="/fitur" className="text-xs font-bold text-[#e76f51] flex items-center gap-1 hover:gap-2 transition-all mt-2">Lihat fitur lengkapnya <ArrowRight className="w-3 h-3" /></Link>
            </div>
            {/* 📱 Tiruan HP Minimalis di Sisi Kanan Bento */}
            <div className="w-56 aspect-[9/18] bg-zinc-50 rounded-[2.5rem] p-4 border border-zinc-200 flex flex-col justify-start relative shrink-0 shadow-md">
              <div className="w-14 h-3.5 bg-black mx-auto rounded-full mb-4 shrink-0" />
              <div className="flex-1 space-y-2">
                {["Antre", "Proses Cuci", "Kering", "Siap Ambil"].map((st, i) => (
                  <div key={i} className={`p-2 rounded-xl text-[9px] font-bold flex items-center gap-2 border ${i === 1 ? "border-[#e76f51] bg-[#e76f51]/5 text-[#e76f51]" : "border-black/5 text-zinc-400"}`}>
                    <div className={`w-3 h-3 rounded-full ${i <= 1 ? "bg-[#e76f51]" : "bg-zinc-200"}`} /> {st}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* KOTAK KANAN ATAS (Laporan Keuangan Instan Orange Gelap) */}
          <div className="lg:col-span-5 bg-[#9c381f] text-white rounded-[2rem] p-8 md:p-10 flex flex-col justify-between items-start text-left shadow-lg relative overflow-hidden">
            <div className="w-10 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6"><BarChart3 className="w-5 h-5 text-white" /></div>
            <div className="space-y-2 w-full">
              <h3 className="font-title text-2xl font-black tracking-tight">Laporan Keuangan Instan</h3>
              <p className="text-sm opacity-80 leading-relaxed max-w-sm">Dapatkan rekap omzet kotor, laba bersih, pengeluaran operasional, hingga margin kas otomatis setiap hari.</p>
            </div>
            <div className="mt-8 bg-black/10 w-full p-4 rounded-2xl border border-white/5 flex justify-between items-center">
              <span className="text-[10px] uppercase font-bold tracking-wider opacity-60">Total Omzet Bulan Ini</span>
              <span className="text-lg font-black tracking-tight">Rp 12.450.000</span>
            </div>
          </div>

          {/* KOTAK BAWAH KIRI (Database Pelanggan) */}
          <div className="lg:col-span-6 bg-white rounded-[2rem] p-8 border border-zinc-200/60 shadow-xs flex items-start gap-5 text-left">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0"><Users className="w-5 h-5" /></div>
            <div className="space-y-2">
              <h4 className="font-title font-bold text-lg text-zinc-950">Database Pelanggan Terpusat</h4>
              <p className="text-sm text-zinc-500 leading-relaxed">Simpan riwayat transaksi konsumen, jumlah poin loyalitas, nomor WhatsApp aktif, hingga kebiasaan laundry mereka.</p>
            </div>
          </div>

          {/* KOTAK BAWAH KANAN (Manajemen Stok) */}
          <div className="lg:col-span-6 bg-white rounded-[2rem] p-8 border border-zinc-200/60 shadow-xs flex items-start gap-5 text-left">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center shrink-0"><Layers className="w-5 h-5" /></div>
            <div className="space-y-2">
              <h4 className="font-title font-bold text-lg text-zinc-950">Manajemen Stok & Bahan Baku</h4>
              <p className="text-sm text-zinc-500 leading-relaxed">Kontrol penggunaan sabun detergen, parfum pewangi, hingga plastik packing. Notifikasi otomatis jika stok kritis menipis.</p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. VALUE PROPOSITION (SOLUSI TERBAIK)
          ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-8 border-t border-zinc-100">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-[#e76f51] uppercase tracking-widest bg-[#e76f51]/10 px-3 py-1.5 rounded-full">Keunggulan</span>
          <h2 className="font-title text-3xl md:text-4xl font-black text-zinc-950 mt-4 tracking-tight">Solusi Terbaik Bisnis Laundry</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Monitor className="w-5 h-5" />, title: "Set-up Sangat Cepat", desc: "Daftar langsung pakai tanpa instalasi ribet. Panduan dashboard yang sangat ramah pengguna bahkan untuk pemula." },
            { icon: <ShieldCheck className="w-5 h-5" />, title: "Aman & Terpercaya", desc: "Enkripsi cloud data tingkat tinggi menjamin keamanan data pembukuan keuangan dan transaksi outlet dari fraud." },
            { icon: <MessageSquare className="w-5 h-5" />, title: "Update Gratis Selamanya", desc: "Nikmati penambahan fitur-fitur kasir otomatis baru ke depannya tanpa dipungut tambahan biaya berlangganan." }
          ].map((val, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-zinc-200/50 flex flex-col items-start gap-4 text-left shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#e76f51]/10 text-[#e76f51] flex items-center justify-center">{val.icon}</div>
              <h4 className="font-title font-bold text-lg text-zinc-950">{val.title}</h4>
              <p className="text-sm text-zinc-500 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          4. PACKET PRICING SECTION (GLOWING BUTTON HOVER ACTIONS)
          ========================================================================= */}
      <section id="harga" className="py-24 bg-zinc-50 border-t border-b border-zinc-200/50 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <span className="text-xs font-bold text-[#e76f51] uppercase tracking-widest bg-[#e76f51]/10 px-3 py-1.5 rounded-full">Daftar Harga</span>
          <h2 className="font-title text-3xl md:text-5xl font-black text-zinc-950 mt-4 tracking-tight">Pilih Paket yang Sesuai</h2>
          <p className="text-sm text-zinc-400 mt-2 max-w-md mx-auto">Harga transparan tanpa biaya tersembunyi. Pilih paket terbaik untuk akselerasi bisnis laundry kamu.</p>

          {/* Grid Susunan 3 Kartu Berjejer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 items-center max-w-6xl mx-auto">
            
            {/* PAKET 1: TRIAL */}
            <div className="bg-white border-2 border-zinc-200 rounded-[2rem] p-8 text-left shadow-xs flex flex-col gap-6 justify-between min-h-[480px] transition-all duration-300 transform origin-center hover:scale-105 hover:shadow-2xl hover:border-[#e76f51]">
              <div className="space-y-4">
                <span className="text-xs uppercase font-bold tracking-wider text-zinc-400">14 Hari</span>
                <h3 className="font-title font-black text-2xl text-zinc-950">TRIAL</h3>
                <div className="flex items-baseline text-zinc-950"><span className="text-3xl font-black tracking-tight">FREE</span><span className="text-zinc-400 text-xs font-medium ml-1">/ selamanya</span></div>
                <ul className="space-y-3 pt-4 border-t border-zinc-100 text-xs font-medium text-zinc-600">
                  {["Integrasi Kasir POS Dasar", "Maksimal 1 Manajemen Outlet", "Laporan Transaksi Harian"].map((f) => (
                    <li key={f} className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-zinc-400 shrink-0" /> {f}</li>
                  ))}
                </ul>
              </div>
              
              {/* 🖱️ BUTTON TRIAL: NETRAL ABU-ABU, NYALA ORANGE SAAT HOVER */}
              <button className="w-full py-3.5 bg-zinc-50 text-zinc-700 hover:bg-[#e76f51] hover:text-white hover:shadow-lg hover:shadow-[#e76f51]/20 rounded-xl font-bold text-xs border border-black/5 transition-all duration-300 cursor-pointer">
                Mulai Sekarang
              </button>
            </div>

            {/* PAKET 2: PRO (BEST SELLER) */}
            <div className="bg-white border-2 border-zinc-200 rounded-[2rem] p-8 text-left shadow-xs flex flex-col gap-6 justify-between min-h-[480px] relative transition-all duration-300 transform origin-center hover:scale-105 hover:shadow-2xl hover:border-[#e76f51] hover:shadow-[#e76f51]/10">
              <span className="absolute -top-3.5 right-6 bg-[#e76f51] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md z-10">Best Seller</span>
              <div className="space-y-4">
                <span className="text-xs uppercase font-bold tracking-wider text-[#e76f51]">Rekomendasi</span>
                <h3 className="font-title font-black text-2xl text-zinc-950">PRO</h3>
                <div className="flex items-baseline text-zinc-950"><span className="text-3xl font-black tracking-tight">Rp 99rb</span><span className="text-zinc-400 text-xs font-medium ml-1">/ bulan</span></div>
                <ul className="space-y-3 pt-4 border-t border-zinc-100 text-xs font-medium text-zinc-600">
                  {["Semua Fitur Manajemen Paket Trial", "WhatsApp Gateway Automations", "Laporan Arus Keuangan Lengkap", "Multi-Outlet Hak Akses Karyawan"].map((f) => (
                    <li key={f} className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#e76f51] shrink-0" /> {f}</li>
                  ))}
                </ul>
              </div>

              {/* 🖱️ BUTTON PRO: ABU-ABU NETRAL, NYALA ORANGE PAS DI-HOVER */}
              <button className="w-full py-3.5 bg-zinc-50 text-zinc-700 hover:bg-[#e76f51] hover:text-white hover:shadow-xl hover:shadow-[#e76f51]/30 rounded-xl font-bold text-xs border border-black/5 transition-all duration-300 cursor-pointer">
                Langganan Sekarang
              </button>
            </div>

            {/* PAKET 3: CUSTOM */}
            <div className="bg-white border-2 border-zinc-200 rounded-[2rem] p-8 text-left shadow-xs flex flex-col gap-6 justify-between min-h-[480px] transition-all duration-300 transform origin-center hover:scale-105 hover:shadow-2xl hover:border-[#e76f51]">
              <div className="space-y-4">
                <span className="text-xs uppercase font-bold tracking-wider text-zinc-400">Skala Besar</span>
                <h3 className="font-title font-black text-2xl text-zinc-950">CUSTOM</h3>
                <div className="flex items-baseline text-zinc-950"><span className="text-3xl font-black tracking-tight">Tanya Kami</span></div>
                <ul className="space-y-3 pt-4 border-t border-zinc-100 text-xs font-medium text-zinc-600">
                  {["Semua Fitur Premium Paket Pro", "Kustomisasi Server Cloud EAI", "Dukungan CS Prioritas 24/7", "Dedicated Database Multi-Cabang"].map((f) => (
                    <li key={f} className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-zinc-400 shrink-0" /> {f}</li>
                  ))}
                </ul>
              </div>

              {/* 🖱️ BUTTON CUSTOM: NETRAL ABU-ABU, NYALA ORANGE SAAT HOVER */}
              <button className="w-full py-3.5 bg-zinc-50 text-zinc-700 hover:bg-[#e76f51] hover:text-white hover:shadow-lg hover:shadow-[#e76f51]/20 rounded-xl font-bold text-xs border border-black/5 transition-all duration-300 cursor-pointer">
                Hubungi Kami
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          5. CLOSING CTA BANNER
          ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-8">
        <div className="w-full bg-[#9c381f] rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl flex flex-col items-center gap-6">
          {/* Aksen Garis Melengkung */}
          <div className="absolute -inset-10 opacity-10 border-[3px] border-white rounded-[4rem] pointer-events-none transform rotate-12 scale-105" />
          <div className="absolute inset-4 opacity-5 border border-white rounded-[3rem] pointer-events-none transform -rotate-6 scale-95" />
          
          <h2 className="font-title text-3xl md:text-5xl font-black max-w-2xl tracking-tight leading-tight">
            Siap Kembangkan Bisnis Laundry Anda Hari Ini?
          </h2>
          <p className="text-sm opacity-80 max-w-lg leading-relaxed">
            Bergabunglah dengan ratusan pengusaha sukses yang beralih menggunakan ekosistem digital cerdas pembukuan kasir Ayocuci.
          </p>
          <div className="flex flex-wrap gap-4 mt-2 justify-center">
            <button className="bg-white text-[#9c381f] font-black text-xs md:text-sm px-8 py-3.5 rounded-full hover:bg-zinc-50 transition-all cursor-pointer shadow-md">Mulai Sekarang — Gratis</button>
            <button className="bg-transparent border border-white/40 text-white font-bold text-xs md:text-sm px-8 py-3.5 rounded-full hover:bg-white/10 transition-all cursor-pointer">Hubungi Sales</button>
          </div>
        </div>
      </section>
    </main>
  );
}