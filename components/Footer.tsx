"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-200/60 dark:border-zinc-900/60 pt-20 pb-8 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 text-left">
        
        {/* 🏢 KOLOM 1: BRAND INFO & SOSMED (4 Grid) */}
        <div className="col-span-2 md:col-span-4 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-[#e76f51] flex items-center justify-center text-white font-black text-xs">
              A
            </div>
            <span className="font-title font-black text-lg tracking-tight dark:text-white">
              Ayocuci
            </span>
          </div>
          <p className="text-xs text-zinc-400 dark:text-zinc-500 leading-relaxed max-w-xs">
            Solusi ekosistem aplikasi kasir dan integrasi operasional manajemen laundry modern berskala perusahaan di Indonesia.
          </p>
          {/* Placeholder Sosmed Bulat Sesuai Pojok Kiri Bawah Mockup */}
          <div className="flex gap-2 pt-2">
            {["ig", "fb", "tw"].map((sm) => (
              <div key={sm} className="w-6 h-6 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 flex items-center justify-center text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                {sm}
              </div>
            ))}
          </div>
        </div>

        {/* 🛒 KOLOM 2: PRODUK (2 Grid) */}
        <div className="col-span-1 md:col-span-2 space-y-3 flex flex-col text-xs font-semibold text-zinc-500 dark:text-zinc-400">
          <span className="text-zinc-400 dark:text-zinc-600 font-bold uppercase tracking-wider text-[10px] mb-1">
            Produk
          </span>
          <Link href="/fitur" className="hover:text-[#e76f51] dark:hover:text-[#f4a261] transition-all">Fitur Utama</Link>
          <Link href="/#harga" className="hover:text-[#e76f51] dark:hover:text-[#f4a261] transition-all">Daftar Harga</Link>
          <Link href="/fitur" className="hover:text-[#e76f51] dark:hover:text-[#f4a261] transition-all">Pembaruan App</Link>
        </div>

        {/* 🤝 KOLOM 3: DUKUNGAN (2 Grid) */}
        <div className="col-span-1 md:col-span-2 space-y-3 flex flex-col text-xs font-semibold text-zinc-500 dark:text-zinc-400">
          <span className="text-zinc-400 dark:text-zinc-600 font-bold uppercase tracking-wider text-[10px] mb-1">
            Dukungan
          </span>
          <Link href="/" className="hover:text-[#e76f51] dark:hover:text-[#f4a261] transition-all">Pusat Bantuan</Link>
          <Link href="/" className="hover:text-[#e76f51] dark:hover:text-[#f4a261] transition-all">Tutorial POS</Link>
          <Link href="/contact" className="hover:text-[#e76f51] dark:hover:text-[#f4a261] transition-all">Hubungi Kami</Link>
        </div>

        {/* ⚖️ KOLOM 4: LEGALITAS (4 Grid) */}
        <div className="col-span-2 md:col-span-4 space-y-3 flex flex-col text-xs font-semibold text-zinc-500 dark:text-zinc-400">
          <span className="text-zinc-400 dark:text-zinc-600 font-bold uppercase tracking-wider text-[10px] mb-1">
            Legal
          </span>
          <Link href="/" className="hover:text-[#e76f51] dark:hover:text-[#f4a261] transition-all">Syarat & Ketentuan Layanan</Link>
          <Link href="/" className="hover:text-[#e76f51] dark:hover:text-[#f4a261] transition-all">Kebijakan Privasi Data Pengguna</Link>
        </div>

      </div>

      {/* 📝 BARIS HAK CIPTA PALING BAWAH */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 border-t border-zinc-100 dark:border-zinc-900/60 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-zinc-400 dark:text-zinc-500 font-medium gap-4">
        <span>© 2026 Ayocuci Inc. Hak Cipta Dilindungi Undang-Undang.</span>
        <div className="flex items-center gap-1 opacity-80">
          <span>Batam, Indonesia</span> 🇮🇩
        </div>
      </div>
    </footer>
  );
}