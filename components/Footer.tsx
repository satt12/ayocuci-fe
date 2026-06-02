"use client";
import Link from "next/link";
import { Globe, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    // Warna background krem lembut sesuai gambar mockup
    <footer className="bg-[#fdfbf7] text-zinc-800 pt-16 pb-8 px-6 md:px-8 selection:bg-[#e76f51]/20 font-sans">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* =========================================================================
            1. BANNER CTA (ORANGE MELENGKUNG DENGAN TATA LETAK TEKS SEIMBANG DI TENGAH)
            ========================================================================= */}
        <div className="w-full bg-[#e76f51] rounded-[2.5rem] p-10 md:p-16 text-center text-white shadow-xl shadow-[#e76f51]/10 flex flex-col items-center gap-6">
          <h2 className="font-title text-3xl md:text-4xl font-black max-w-xl mx-auto tracking-tight leading-tight text-center">
            Siap Kembangkan Bisnis <br className="hidden sm:block" />
            Laundry Anda Hari Ini?
          </h2>
          <p className="text-sm opacity-95 max-w-xl mx-auto leading-relaxed font-medium text-center">
            Ribuan pengusaha laundry telah beralih ke Ayocuci. Jangan biarkan manajemen manual menghambat pertumbuhan bisnis Anda.
          </p>
          <div className="flex flex-wrap gap-4 mt-2 justify-center items-center">
            {/* Tombol Putih */}
            <button className="bg-white text-[#e76f51] font-bold text-xs md:text-sm px-8 py-3.5 rounded-full hover:bg-zinc-50 transition-all cursor-pointer shadow-md">
              Daftar Sekarang - Gratis
            </button>
            {/* Tombol Outline Transparan */}
            <button className="bg-transparent border-2 border-white text-white font-bold text-xs md:text-sm px-8 py-3 rounded-full hover:bg-white/10 transition-all cursor-pointer">
              Konsultasi Gratis
            </button>
          </div>
        </div>

        {/* =========================================================================
            2. LINK UTAMA FOOTER (GRID 4 KOLOM)
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
          
          {/* Kolom 1: Logo & Deskripsi Ringkas */}
          <div className="md:col-span-4 space-y-4 text-left">
            <Link href="/" className="flex items-center gap-1 group cursor-pointer">
              <span className="font-title font-black text-xl tracking-tight text-zinc-950">
                ayo<span className="text-[#e76f51]">cuci</span>
              </span>
            </Link>
            <p className="text-xs text-zinc-500 font-medium leading-relaxed max-w-xs">
              Solusi kasir laundry terpercaya yang membantu operasional bisnis jadi lebih cepat, rapi, dan mudah digunakan.
            </p>
            {/* Tombol Sosial Media / Kontak Bulat Abu-abu */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-zinc-200/60 hover:bg-[#e76f51]/10 text-zinc-600 hover:text-[#e76f51] flex items-center justify-center transition-all">
                <Globe className="w-4 h-4" />
              </a>
              <a href="mailto:info@ayocuci.com" className="w-8 h-8 rounded-full bg-zinc-200/60 hover:bg-[#e76f51]/10 text-zinc-600 hover:text-[#e76f51] flex items-center justify-center transition-all">
                <Mail className="w-4 h-4" />
              </a>
              <a href="tel:#" className="w-8 h-8 rounded-full bg-zinc-200/60 hover:bg-[#e76f51]/10 text-zinc-600 hover:text-[#e76f51] flex items-center justify-center transition-all">
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Kolom 2: Produk */}
          <div className="md:col-span-2 space-y-4 text-left">
            <h4 className="text-sm font-bold text-zinc-900 tracking-wide">Produk</h4>
            <ul className="space-y-2.5 text-xs font-medium text-zinc-500">
              <li><Link href="/layanan" className="hover:text-[#e76f51] hover:underline transition-all">Fitur Utama</Link></li>
              <li><Link href="/harga" className="hover:text-[#e76f51] hover:underline transition-all">Harga Paket</Link></li>
              <li><Link href="#" className="hover:text-[#e76f51] hover:underline transition-all">Update Terbaru</Link></li>
              <li><Link href="#" className="hover:text-[#e76f51] hover:underline transition-all">Integrasi</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Dukungan */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="text-sm font-bold text-zinc-900 tracking-wide">Dukungan</h4>
            <ul className="space-y-2.5 text-xs font-medium text-zinc-500">
              <li><Link href="#" className="hover:text-[#e76f51] hover:underline transition-all">Pusat Bantuan</Link></li>
              <li><Link href="/tutorial" className="hover:text-[#e76f51] hover:underline transition-all">Tutorial</Link></li>
              <li><Link href="/contact" className="hover:text-[#e76f51] hover:underline transition-all">Hubungi Kami</Link></li>
              <li><Link href="/artikel" className="hover:text-[#e76f51] hover:underline transition-all">Artikel</Link></li>
            </ul>
          </div>

          {/* Kolom 4: Legal */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="text-sm font-bold text-zinc-900 tracking-wide">Legal</h4>
            <ul className="space-y-2.5 text-xs font-medium text-zinc-500">
              <li><Link href="/aboutus" className="hover:text-[#e76f51] hover:underline transition-all">Tentang Kami</Link></li>
              <li><Link href="/privacy" className="hover:text-[#e76f51] hover:underline transition-all">Kebijakan Privasi</Link></li>
              <li><Link href="/term" className="hover:text-[#e76f51] hover:underline transition-all">Syarat & Ketentuan</Link></li>
            </ul>
          </div>

        </div>

        {/* =========================================================================
            3. BARIS BOTTOM COPYRIGHT (HAK CIPTA)
            ========================================================================= */}
        <div className="pt-8 border-t border-zinc-200/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-medium text-zinc-400">
          <p>© 2026 Ayocuci. Solusi Kasir Laundry Modern & Praktis.</p>
          
          {/* Selector Bahasa Bawaan Ringkas */}
          <div className="flex items-center gap-1 text-zinc-500 font-semibold bg-zinc-100/50 px-3 py-1.5 rounded-lg border border-zinc-200/30">
            <Globe className="w-3.5 h-3.5 text-zinc-400" />
            <span>Bahasa Indonesia</span>
          </div>
        </div>

      </div>
    </footer>
  );
}