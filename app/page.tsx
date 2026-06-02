"use client";
import { Check, ArrowRight, Monitor, ShieldCheck, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen text-zinc-900 overflow-x-hidden selection:bg-[#e76f51]/30 font-sans">
      
      {/* =========================================================================
          1. HERO SECTION (TRIPLE MOCKUP HP)
          ========================================================================= */}
      <section className="relative pt-44 pb-20 max-w-7xl mx-auto px-6 md:px-8 text-center flex flex-col items-center gap-6">
        <span className="text-[#e76f51] font-bold text-xs bg-[#e76f51]/10 px-4 py-2 rounded-full tracking-widest uppercase">
          Aplikasi Kasir Laundry #1 di Indonesia
        </span>
        <h1 className="font-title text-4xl md:text-6xl font-black tracking-tight max-w-4xl leading-tight text-zinc-950">
          Aplikasi Kasir Laundry <br />
          Modern & Praktis
        </h1>
        <p className="text-zinc-500 text-sm md:text-base max-w-xl leading-relaxed font-medium">
          Kelola transaksi, pantau workshop, cetak nota otomatis, hingga otomatisasi pesan WhatsApp pelanggan dalam satu aplikasi SaaS terintegrasi.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mt-2 justify-center">
          <Link href="/layanan" className="bg-[#e76f51] text-white font-bold text-xs md:text-sm px-8 py-3.5 rounded-full shadow-lg shadow-[#e76f51]/20 hover:opacity-95 transition-all">
            Coba Gratis Sekarang
          </Link>
          <button className="bg-white border border-zinc-200 text-zinc-700 font-bold text-xs md:text-sm px-8 py-3.5 rounded-full hover:bg-zinc-50 transition-all cursor-pointer">
            Lihat Demo
          </button>
        </div>

        {/* Triple HP Mockup Container */}
        <div className="mt-12 w-full max-w-4xl bg-gradient-to-t from-[#e76f51]/15 via-[#e76f51]/5 to-transparent rounded-[3rem] p-8 md:p-12 border border-[#e76f51]/5 flex justify-center items-end gap-4 overflow-hidden min-h-[340px] md:min-h-[460px]">
          <div className="w-1/4 aspect-[9/18] bg-white rounded-t-[2rem] border-t border-x border-zinc-200 shadow-xl opacity-70 translate-y-12 hidden md:block" />
          <div className="w-56 md:w-64 aspect-[9/19] bg-[#e76f51] rounded-t-[2.5rem] border-t-2 border-x-2 border-white/20 shadow-2xl p-4 flex flex-col justify-start relative text-white">
            <div className="w-16 h-4 bg-black mx-auto rounded-full mb-6" />
            <span className="text-[10px] opacity-70 uppercase font-bold tracking-wider">Total Omzet</span>
            <h4 className="text-lg font-black tracking-tight">Rp 12.450.000</h4>
            <div className="w-full h-24 bg-white/10 rounded-xl mt-4 border border-white/5" />
          </div>
          <div className="w-1/4 aspect-[9/18] bg-white rounded-t-[2rem] border-t border-x border-zinc-200 shadow-xl opacity-70 translate-y-12 hidden md:block" />
        </div>
      </section>

      {/* =========================================================================
          2. BENTO GRID SECTION (TOP FITUR - PRESISI 100% SESUAI IMAGE_AAD9FC.JPG)
          ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-8 space-y-12">
        
        {/* Header Seksi */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left border-b border-zinc-100 pb-6">
          <div className="space-y-3">
            <span className="text-xs font-bold text-zinc-900 bg-white px-5 py-2 rounded-full shadow-sm border border-zinc-100">
              Top Fitur
            </span>
            <h2 className="font-title text-2xl md:text-4xl font-black tracking-tight text-zinc-950 leading-tight">
              Semua yang Kamu Butuhkan <br /> untuk Mengelola Laundry
            </h2>
          </div>
          <div className="flex flex-col items-end gap-1 shrink-0 text-right">
            <Link href="/layanan" className="text-xs font-bold text-zinc-900 hover:text-[#e76f51] flex items-center gap-1.5 transition-all">
              Lihat Selengkapnya <span className="text-sm font-light">→</span>
            </Link>
            <span className="text-[11px] text-zinc-400 font-medium hidden sm:block">Kelola transaksi, pantau status cucian</span>
          </div>
        </div>

        {/* Susunan Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* ==================== BENTO ATAS (MEMBENTANG PENUH) ==================== */}
          <div className="lg:col-span-12 bg-[#fdf2e9] rounded-[2.5rem] p-8 md:p-12 border border-[#e76f51]/5 flex flex-col md:flex-row justify-between items-start gap-8 overflow-hidden text-left relative min-h-[460px]">
            
            {/* Konten Kiri */}
            <div className="space-y-5 max-w-xl relative z-10">
              <span className="text-[11px] font-bold bg-white text-zinc-700 px-3 py-1.5 rounded-lg border border-zinc-100 shadow-2xs">
                Tampilan Sederhana
              </span>
              <h3 className="font-title text-xl md:text-2xl font-black tracking-tight text-zinc-950 pt-1">
                Semua yang Kamu Butuhkan untuk Mengelola Laundry
              </h3>
              <p className="text-xs md:text-sm text-zinc-500 leading-relaxed font-medium">
                Kelola transaksi, pantau status cucian, dan lihat laporan bisnis laundry kamu dalam satu aplikasi yang mudah digunakan.
              </p>
              
              {/* Dua Poin Sub-Fitur Kecil di Bawahnya */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-[#e76f51]/10 flex items-center justify-center text-[#e76f51]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
                  </div>
                  <h4 className="text-sm font-black text-zinc-950 tracking-tight">Semua yang Kamu</h4>
                  <p className="text-[11px] text-zinc-400 leading-relaxed font-medium">
                    Kelola transaksi, pantau status cucian, dan lihat laporan bisnis laundry kamu dalam
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-[#e76f51]/10 flex items-center justify-center text-[#e76f51]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
                  </div>
                  <h4 className="text-sm font-black text-zinc-950 tracking-tight">Semua yang Kamu</h4>
                  <p className="text-[11px] text-zinc-400 leading-relaxed font-medium">
                    Kelola transaksi, pantau status cucian, dan lihat laporan bisnis laundry kamu dalam
                  </p>
                </div>
              </div>
            </div>

            {/* Mockup HP Sisi Kanan (Menyembul Tegak Lurus Kebawah) */}
            <div className="w-full md:w-72 aspect-[9/18] bg-[#d9d9d9] rounded-[2rem] border border-black/5 shadow-2xl shrink-0 translate-y-16 md:absolute md:right-12 md:top-4 z-0 flex items-center justify-center text-xs font-bold text-zinc-400">
              [ Mockup Layanan Utama ]
            </div>
          </div>

          {/* ==================== BENTO BAWAH KIRI ==================== */}
          <div className="lg:col-span-6 bg-[#ffb3a1]/40 rounded-[2.5rem] p-8 md:p-10 border border-[#e76f51]/5 flex flex-col justify-between gap-8 text-left overflow-hidden min-h-[480px]">
            <div className="space-y-3">
              <h3 className="font-title text-xl font-black text-zinc-950 tracking-tight">Semua yang Kamu Butuhkan</h3>
              <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                Kelola transaksi, pantau status cucian, dan lihat laporan bisnis laundry kamu dalam satu aplikasi yang mudah digunakan.
              </p>
            </div>
            {/* Mockup HP Menyembul dari Bawah */}
            <div className="w-56 aspect-[9/16] bg-[#d9d9d9] rounded-t-[1.5rem] border-t border-x border-black/5 shadow-xl mx-auto translate-y-12 shrink-0 flex items-center justify-center text-xs font-bold text-zinc-400">
              [ Mockup Status Cucian ]
            </div>
          </div>

          {/* ==================== BENTO BAWAH KANAN ==================== */}
          <div className="lg:col-span-6 bg-[#ffb3a1]/40 rounded-[2.5rem] p-8 md:p-10 border border-[#e76f51]/5 flex flex-col justify-between gap-8 text-left overflow-hidden min-h-[480px]">
            <div className="space-y-3">
              <h3 className="font-title text-xl font-black text-zinc-950 tracking-tight">Semua yang Kamu Butuhkan</h3>
              <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                Kelola transaksi, pantau status cucian, dan lihat laporan bisnis laundry kamu dalam satu aplikasi yang mudah digunakan.
              </p>
            </div>
            {/* Mockup HP Menyembul dari Bawah */}
            <div className="w-56 aspect-[9/16] bg-[#d9d9d9] rounded-t-[1.5rem] border-t border-x border-black/5 shadow-xl mx-auto translate-y-12 shrink-0 flex items-center justify-center text-xs font-bold text-zinc-400">
              [ Mockup Ringkasan Dasbor ]
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. GRID 4 CARD HALAMAN LAYANAN (PRESISI FRAME 3095)
          ========================================================================= */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-8">
        <div className="w-full bg-[#fdf0eb] rounded-[2.5rem] p-8 md:p-14 border border-[#e76f51]/5 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
            <div className="space-y-3">
              <h3 className="font-title text-2xl md:text-3xl font-black text-zinc-950 tracking-tight">
                Semua yang Kamu Butuhkan
              </h3>
              <p className="text-xs md:text-sm text-zinc-500 font-medium max-w-xl leading-relaxed">
                Ayocuci dirancang khusus untuk membantu operasional laundry jadi lebih cepat, rapi, dan mudah digunakan.
              </p>
            </div>
            <Link href="/layanan" className="text-xs font-bold text-zinc-900 hover:text-[#e76f51] flex items-center gap-1.5 transition-all shrink-0 pb-1">
              Lihat Selengkapnya <span className="text-sm font-light">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-[2rem] p-5 flex flex-col gap-5 shadow-xs border border-zinc-100/50">
                <div className="w-full aspect-[16/10] bg-[#d9d9d9] rounded-[1.5rem] border border-black/5 shrink-0" />
                <div className="space-y-2 text-left px-1 flex-1">
                  <h4 className="text-base font-black text-zinc-950 tracking-tight">Semua yang Kamu Butuhkan</h4>
                  <p className="text-xs text-zinc-400 font-medium leading-relaxed">Ayocuci dirancang khusus untuk membantu operasional laundry jadi lebih cepat, rapi, dan mudah digunakan.</p>
                </div>
                <button className="w-full py-3.5 bg-[#e76f51] text-white rounded-2xl text-xs font-bold hover:opacity-95 transition-all cursor-pointer shadow-lg shadow-[#e76f51]/25 border border-transparent">
                  Pelajari Selengkapnya
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. VALUE PROPOSITION (SOLUSI TERBAIK - PRESISI 100% SESUAI FRAME 3205)
          ========================================================================= */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-8 text-center space-y-12">
        <div className="space-y-2 text-center">
          <span className="text-xs font-bold text-[#e76f51] uppercase tracking-widest">Kenapa Pilihan</span>
          <h2 className="font-title text-2xl md:text-3xl font-black text-zinc-950 tracking-tight pt-1">Solusi Terbaik Bisnis Laundry</h2>
          <p className="text-xs text-zinc-400 max-w-md mx-auto font-medium">Didesain khusus untuk mempermudah segala jenis pembukuan keuangan dan manajemen stok gerai Anda.</p>
        </div>

        {/* Grid 3 Kolom - Menggunakan items-stretch agar tinggi semua kartu otomatis sama besar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-6xl mx-auto">
          
          {/* KARTU 1: UPDATE GRATIS SELAMANYA */}
          <div className="bg-white border border-zinc-100 border-l-[12px] border-l-[#f4a261] rounded-[2rem] p-8 flex flex-col items-start text-left gap-4 shadow-sm hover:shadow-md transition-all duration-300 h-full">
            {/* Wadah Ikon Abu-abu Bulat Lembut */}
            <div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center border border-black/5 text-zinc-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rotate-ccw"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
            </div>
            <div className="space-y-2 flex-1">
              <h4 className="font-title font-black text-lg text-zinc-950 tracking-tight leading-snug">
                Update Gratis <br /> Selamanya
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed font-medium pt-1">
                Kami terus berinovasi. Nikmati fitur-fitur baru dan pembaruan sistem tanpa dikenakan biaya tambahan sama sekali.
              </p>
            </div>
          </div>

          {/* KARTU 2: AMAN & TERPERCAYA */}
          <div className="bg-white border border-zinc-100 border-l-[12px] border-l-[#ffb3a1] rounded-[2rem] p-8 flex flex-col items-start text-left gap-4 shadow-sm hover:shadow-md transition-all duration-300 h-full">
            <div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center border border-black/5 text-[#e76f51]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1 1 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
            </div>
            <div className="space-y-2 flex-1">
              <h4 className="font-title font-black text-lg text-zinc-950 tracking-tight leading-snug">
                Aman & <br /> Terpercaya
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed font-medium pt-1">
                Data transaksi Anda tersimpan di cloud dengan enkripsi tingkat tinggi. Tidak perlu takut kehilangan data di buku manual.
              </p>
            </div>
          </div>

          {/* KARTU 3: SET-UP SANGAT CEPAT */}
          <div className="bg-white border border-zinc-100 border-l-[12px] border-l-[#ffeaa7] rounded-[2rem] p-8 flex flex-col items-start text-left gap-4 shadow-sm hover:shadow-md transition-all duration-300 h-full">
            <div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center border border-black/5 text-[#e76f51]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gauge"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
            </div>
            <div className="space-y-2 flex-1">
              <h4 className="font-title font-black text-lg text-zinc-950 tracking-tight leading-snug">
                Set-up Sangat <br /> Cepat
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed font-medium pt-1">
                Tidak perlu training berhari-hari. Download aplikasi, masukkan data layanan, dan langsung mulai jualan dalam 5 menit.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. PACKET PRICING SECTION (EFEK POP & GLOW INTERAKTIF PADA KEDUA KARTU)
          ========================================================================= */}
      <section id="harga" className="py-20 max-w-7xl mx-auto px-6 md:px-8 space-y-12">
        <div className="text-left space-y-3">
          <span className="text-sm font-bold text-zinc-900 bg-white px-5 py-2 rounded-full shadow-sm border border-zinc-100">
            Harga
          </span>
          <h2 className="font-title text-3xl md:text-4xl font-black text-zinc-950 tracking-tight pt-2">
            Semua yang Kamu Butuhkan
          </h2>
          <p className="text-xs md:text-sm text-zinc-500 font-medium max-w-xl leading-relaxed">
            Ayocuci dirancang khusus untuk membantu operasional laundry jadi lebih cepat, rapi, dan mudah digunakan.
          </p>
        </div>

        {/* Grid 2 Opsi Kartu Paket */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* KARTU 1: TRIAL (DENGAN EFEK POP GLOW) */}
          <div className="bg-white border border-zinc-100 rounded-[2.5rem] p-8 md:p-10 text-left shadow-xs flex flex-col gap-8 justify-between relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#e76f51]/15 hover:border-[#e76f51]/30">
            
            {/* 💡 POP EFFECT TRIAL: Pendaran oranye lembut di pojok kanan atas, menyala saat di-hover */}
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#e76f51]/5 rounded-full blur-[70px] pointer-events-none group-hover:bg-[#e76f51]/25 transition-colors duration-500 z-0" />
            
            <div className="space-y-6 relative z-10">
              <span className="text-sm font-bold text-zinc-950 group-hover:text-[#e76f51] transition-colors duration-300">Trial</span>
              
              <div className="space-y-1">
                <p className="text-sm text-red-400 line-through decoration-red-400/50">Rp. 1.000.000</p>
                <h3 className="font-title font-black text-4xl text-zinc-950 tracking-tight">
                  FREE <span className="text-sm text-zinc-400 font-medium tracking-normal ml-1 whitespace-nowrap">Selamanya</span>
                </h3>
                <p className="text-xs text-zinc-400 font-medium">Lorem Ipsum Dolor sir amet</p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-widest">Benefit</h4>
                <ul className="space-y-3 text-[11px] font-semibold text-zinc-500">
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border border-zinc-200 flex items-center justify-center shrink-0 group-hover:border-[#e76f51]/30 transition-colors duration-300">
                      <Check className="w-2.5 h-2.5 text-zinc-400 group-hover:text-[#e76f51] transition-colors" />
                    </div> 
                    Free 20 Koin untuk transaksi
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border border-zinc-200 flex items-center justify-center shrink-0 group-hover:border-[#e76f51]/30 transition-colors duration-300">
                      <Check className="w-2.5 h-2.5 text-zinc-400 group-hover:text-[#e76f51] transition-colors" />
                    </div> 
                    Akses Semua Fitur Aplikasi
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border border-zinc-200 flex items-center justify-center shrink-0 group-hover:border-[#e76f51]/30 transition-colors duration-300">
                      <Check className="w-2.5 h-2.5 text-zinc-400 group-hover:text-[#e76f51] transition-colors" />
                    </div> 
                    Dapatkan Akses Fitur Add On
                  </li>
                </ul>
              </div>
            </div>

            {/* Tombol berubah jadi oranye solid saat di-hover */}
            <button className="w-full py-4 bg-zinc-50/50 text-[#e76f51] font-bold text-xs rounded-3xl hover:bg-[#e76f51] hover:text-white hover:shadow-lg hover:shadow-[#e76f51]/20 transition-all duration-300 cursor-pointer relative z-10">
              Coba Sekarang
            </button>
          </div>

          {/* KARTU 2: DOMPET KOIN (DENGAN EFEK POP GLOW) */}
          <div className="bg-white border border-zinc-100 rounded-[2.5rem] p-8 md:p-10 text-left shadow-xs flex flex-col gap-8 justify-between relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#e76f51]/15 hover:border-[#e76f51]/30">
            
            {/* 💡 POP EFFECT KOIN: Pendaran oranye lembut di pojok kanan bawah, menyala saat di-hover */}
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#e76f51]/5 rounded-full blur-[70px] pointer-events-none group-hover:bg-[#e76f51]/25 transition-colors duration-500 z-0" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-4">
                {/* Koin Emas membal membesar saat di-hover */}
                <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center border border-amber-100 shrink-0 group-hover:scale-110 group-hover:bg-amber-100 transition-all duration-500 shadow-sm shadow-amber-500/10">
                   <div className="w-10 h-10 bg-amber-400 rounded-full border-4 border-amber-200 flex items-center justify-center text-white font-black group-hover:rotate-12 transition-transform duration-500">@</div>
                </div>
                <div className="space-y-0.5">
                  <h3 className="font-title text-2xl font-black text-zinc-950 tracking-tight group-hover:text-[#e76f51] transition-colors duration-300">Dompet Koin</h3>
                  <p className="text-[10px] text-zinc-400 font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-sm text-zinc-400 line-through decoration-zinc-300">Rp. 500</p>
                <h3 className="font-title font-black text-4xl text-zinc-950 tracking-tight">Rp 200<span className="text-lg font-bold text-zinc-500">/Transaksi</span></h3>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-widest">Benefit</h4>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] font-semibold text-zinc-500 whitespace-nowrap">
                      <div className="w-4 h-4 rounded-full border border-zinc-200 flex items-center justify-center shrink-0 group-hover:border-[#e76f51]/30 transition-colors duration-300">
                        <Check className="w-2.5 h-2.5 text-zinc-400 group-hover:text-[#e76f51] transition-colors" />
                      </div> 
                      {i % 3 === 1 ? "Free 20 Koin transaksi" : i % 3 === 2 ? "Akses Fitur Aplikasi" : "Akses Fitur Add On"}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tombol ikut pop menyala solid oranye pas di-hover */}
            <button className="w-full py-4 bg-zinc-50/50 text-[#e76f51] font-bold text-xs rounded-3xl hover:bg-[#e76f51] hover:text-white hover:shadow-lg hover:shadow-[#e76f51]/20 transition-all duration-300 cursor-pointer relative z-10">
              Top Up Sekarang
            </button>
          </div>

        </div>
      </section>
    </main>
  );
}