"use client";
import { Check, ArrowRight, Monitor, ShieldCheck, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen text-zinc-900 overflow-x-hidden selection:bg-[#e76f51]/30 font-sans">
      
      {/* =========================================================================
          1. HERO SECTION (BACKGROUND DIKUNCI LEBARNYA & PAS KE TENGAH ACCORDING TO DESIGN)
          ========================================================================= */}
      <section className="relative w-full flex flex-col items-center pt-32 md:pt-40 overflow-hidden">
        
        {/* Container Pembatas Latar Belakang - Mengunci Gambar Agar Tidak Terlalu Lebar */}
        <div className="absolute inset-1 w-full h-full max-w-8xl mx-auto px-6 md:px-8 -z-10">
          <img 
            src="/gallery/Frame 2974.webp" 
            alt="Background Hero AyoCuci" 
            className="w-full h-full object-contain object-top rounded-[0rem]"
          />
        </div>

        {/* Konten Teks & Tombol (Duduk Manis Pas di Atas Gradasi Gambar Sesuai Tangkapan Layar) */}
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center flex flex-col items-center gap-4 md:gap-6 z-10">
          <span className="text-zinc-600/80 text-[11px] md:text-sm font-medium bg-white/20 backdrop-blur-md px-6 py-2 rounded-full tracking-wide border border-white/40 shadow-[inset_0_1px_2px_rgba(255,255,255,0.4)]">
            Kelola Bisnis tanpa Ribet
          </span>
          <h1 className="font-title text-3xl md:text-6xl font-normal tracking-tight max-w-4xl leading-tight text-black drop-shadow-xs">
            Aplikasi Kasir Laundry <br />
            Modern & Praktis
          </h1>
          <p className="text-white/90 text-xs md:text-base max-w-xl md:max-w-2xl leading-relaxed font-medium drop-shadow-xs px-4">
            Kelola transaksi, pantau status cucian, dan lihat laporan bisnis <br className="hidden md:block" />
            laundry kamu dalam satu aplikasi yang mudah digunakan.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 md:gap-4 mt-1 md:mt-2 justify-center">
            <Link href="/layanan" className="bg-[#e76f51] text-white font-bold text-xs md:text-sm px-6 md:px-8 py-3 md:py-3.5 rounded-full shadow-lg shadow-[#e76f51]/30 hover:bg-[#d95d3f] transition-all">
              Coba Gratis Sekarang
            </Link>
            <button className="bg-white border border-zinc-200/50 text-zinc-700 font-bold text-xs md:text-sm px-6 md:px-8 py-3 md:py-3.5 rounded-full hover:bg-zinc-50 transition-all cursor-pointer shadow-xs">
              Lihat Demo
            </button>
          </div>
        </div>

        {/* Kunci Aspek Rasio Pembatas: Memaksa tinggi container section pas mengikuti visual HP di bawahnya */}
        <div className="w-full max-w-6xl aspect-[16/11] md:aspect-[16/10.8] pointer-events-none" />
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
                Kelola transaksi, pantau status cucian, and lihat laporan bisnis laundry kamu dalam satu aplikasi yang mudah digunakan.
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

            {/* Mockup HP Sisi Kanan (Posisi Digeser Masuk Lebih ke Kiri Agar Pas) */}
            <div className="w-full md:w-[320px] h-[520px] shrink-0 translate-y-12 md:absolute md:right-8 md:top-4 z-0 pointer-events-none">
              <img 
                src="/gallery/HP1.webp" 
                className="w-full h-full object-contain object-top" 
              />
            </div>
          </div>

          {/* ==================== BENTO BAWAH KIRI (MENGGUNAKAN HP2.WEBP - PERSISI SCREENSHOT_20260605143051.PNG) ==================== */}
          <div className="lg:col-span-6 bg-[#ffb3a1]/40 rounded-[2.5rem] p-8 md:p-12 border border-[#e76f51]/5 flex flex-col justify-between text-left overflow-hidden min-h-[520px]">
            <div className="space-y-3">
              <h3 className="font-title text-xl md:text-2xl font-normal text-zinc-950 tracking-tight">
                Kelola Status Cucian dengan Cepat
              </h3>
              <p className="text-xs md:text-sm text-zinc-500 leading-relaxed font-medium max-w-md">
                Pantau setiap pesanan dari proses masuk hingga selesai agar operasional lebih teratur dan minim kesalahan.
              </p>
            </div>
            {/* Mockup HP2 Menyembul Besar & Terpotong Rapi di Sisi Bawah Sesuai Gambar */}
            <div className="w-full max-w-[280px] md:max-w-[340px] mx-auto shrink-0 pointer-events-none translate-y-20 md:translate-y-28 -mb-0">
              <img 
                src="/gallery/HP2.webp" 
                className="w-full h-auto object-contain object-top" 
              />
            </div>
          </div>

          {/* ==================== BENTO BAWAH KANAN (MENGGUNAKAN HP3.WEBP - DIBAWAKAN SELARAS) ==================== */}
          <div className="lg:col-span-6 bg-[#ffb3a1]/40 rounded-[2.5rem] p-8 md:p-12 border border-[#e76f51]/5 flex flex-col justify-between text-left overflow-hidden min-h-[520px]">
            <div className="space-y-3">
              <h3 className="font-title text-xl md:text-2xl font-normal text-zinc-950 tracking-tight">
                Pantau Ringkasan Dasbor Bisnis
              </h3>
              <p className="text-xs md:text-sm text-zinc-500 leading-relaxed font-medium max-w-md">
                Kelola transaksi, pantau status cucian, dan lihat laporan bisnis laundry kamu dalam satu aplikasi yang mudah digunakan.
              </p>
            </div>
            {/* Mockup HP3 Menyembul Besar & Terpotong Rapi di Sisi Bawah Sesuai Gambar */}
            <div className="w-full max-w-70 md:max-w-85 mx-auto shrink-0 pointer-events-none translate-y-20 md:translate-y-28 -mb-0">
              <img 
                src="/gallery/HP3.webp" 
                className="w-full h-auto object-contain object-top" 
              />
            </div>
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

        {/* Grid 3 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-6xl mx-auto">
          
          {/* KARTU 1: UPDATE GRATIS SELAMANYA */}
          <div className="bg-white border border-zinc-100 border-l-[12px] border-l-[#f4a261] rounded-[2rem] p-8 flex flex-col items-start text-left gap-4 shadow-sm hover:shadow-md transition-all duration-300 h-full">
            <div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center border border-black/5 text-zinc-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rotate-ccw"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
            </div>
            <div className="space-y-2 flex-1">
              <h4 className="font-title font-black text-lg text-zinc-950 tracking-tight leading-snug">
                Update Gratis <br /> Selamanya
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed font-medium pt-1">
                Kami terus berinovasi. Nikmati fitur-fitur baru and pembaruan sistem tanpa dikenakan biaya tambahan sama sekali.
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
          
          {/* KARTU 1: TRIAL */}
          <div className="bg-white border border-zinc-100 rounded-[2.5rem] p-8 md:p-10 text-left shadow-xs flex flex-col gap-8 justify-between relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#e76f51]/15 hover:border-[#e76f51]/30">
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
            <button className="w-full py-4 bg-zinc-50/50 text-[#e76f51] font-bold text-xs rounded-3xl hover:bg-[#e76f51] hover:text-white hover:shadow-lg hover:shadow-[#e76f51]/20 transition-all duration-300 cursor-pointer relative z-10">
              Coba Sekarang
            </button>
          </div>

          {/* KARTU 2: DOMPET KOIN */}
          <div className="bg-white border border-zinc-100 rounded-[2.5rem] p-8 md:p-10 text-left shadow-xs flex flex-col gap-8 justify-between relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#e76f51]/15 hover:border-[#e76f51]/30">
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#e76f51]/5 rounded-full blur-[70px] pointer-events-none group-hover:bg-[#e76f51]/25 transition-colors duration-500 z-0" />
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-4">
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
            <button className="w-full py-4 bg-zinc-50/50 text-[#e76f51] font-bold text-xs rounded-3xl hover:bg-[#e76f51] hover:text-white hover:shadow-lg hover:shadow-[#e76f51]/20 transition-all duration-300 cursor-pointer relative z-10">
              Top Up Sekarang
            </button>
          </div>

        </div>
      </section>
    </main>
  );
}