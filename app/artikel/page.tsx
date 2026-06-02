"use client";
import { useState } from "react";
import Link from "next/image"; // Menggunakan komponen Image standar Next.js
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ArtikelPage() {
  const [activeCategory, setActiveCategory] = useState("Lorem ipsum");

  // Menyesuaikan src dengan letak file kamu di public/gallery/ berdasarkan image_8f0c56.png
  const daftarArtikel = [
    { id: 1, image: "/gallery/Logo_2.webp", tag: "Promo", title: "Lorem ipsum dolor sir amet lorem", date: "29 Mei 2026" },
    { id: 2, image: "/gallery/Logo_1.webp", tag: "Promo", title: "Lorem ipsum dolor sir amet lorem", date: "29 Mei 2026" },
    { id: 3, image: "/gallery/Logo_2.webp", tag: "Promo", title: "Lorem ipsum dolor sir amet lorem", date: "29 Mei 2026" },
    { id: 4, image: "/gallery/Logo_1.webp", tag: "Promo", title: "Lorem ipsum dolor sir amet lorem", date: "29 Mei 2026" },
    { id: 5, image: "/gallery/Logo_2.webp", tag: "Promo", title: "Lorem ipsum dolor sir amet lorem", date: "29 Mei 2026" },
    { id: 6, image: "/gallery/Logo_1.webp", tag: "Promo", title: "Lorem ipsum dolor sir amet lorem", date: "29 Mei 2026" },
    { id: 7, image: "/gallery/Logo_2.webp", tag: "Promo", title: "Lorem ipsum dolor sir amet lorem", date: "29 Mei 2026" },
    { id: 8, image: "/gallery/Logo_1.webp", tag: "Promo", title: "Lorem ipsum dolor sir amet lorem", date: "29 Mei 2026" },
    { id: 9, image: "/gallery/Logo_2.webp", tag: "Promo", title: "Lorem ipsum dolor sir amet lorem", date: "29 Mei 2026" },
  ];

  return (
    <div className="w-full min-h-screen bg-[#fde2db]/40 pt-32 pb-16 font-sans">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        
        {/* ================= HERO HEADER ================= */}
        <div className="text-center space-y-4 mb-12">
          <span className="bg-white/80 border border-zinc-100 text-xs font-semibold px-4 py-1.5 rounded-full text-zinc-500 shadow-sm">
            Kelola Bisnis tanpa Ribet
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-zinc-900 tracking-tight max-w-2xl mx-auto leading-tight">
            Lorem ipsum dolor sir <br /> amet lorem ipsum
          </h1>
        </div>

        {/* ================= CONTAINER UTAMA PUTIH ================= */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-zinc-200/40 border border-zinc-100">
          
          {/* FEATURED POST (ARTIKEL UTAMA DI ATAS) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-zinc-100 pb-12 mb-12">
            <div className="w-full aspect-[16/10] bg-zinc-50 rounded-3xl overflow-hidden border border-zinc-100/50 relative">
              {/* Gambar Utama Mengarah Langsung ke File Kamu */}
              <img 
                src="/gallery/Logo_2.webp" 
                alt="Featured Post"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-left">
              <span className="bg-[#e76f51]/10 text-[#e76f51] text-xs font-bold px-3 py-1 rounded-md">
                Promo
              </span>
              <h2 className="text-2xl font-black text-zinc-800 leading-tight hover:text-[#e76f51] transition-colors cursor-pointer">
                Lorem ipsum dolor sir amet lorem ipsum
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut consectetur adipiscing elit.
              </p>
              <p className="text-xs text-zinc-400 font-semibold">29 Mei 2026</p>
              <button className="bg-[#e76f51]/10 text-[#e76f51] hover:bg-[#e76f51] hover:text-white font-bold text-xs px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm">
                Baca Sekarang
              </button>
            </div>
          </div>

          {/* SECTION RECENT & FILTER KATEGORI */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="text-left">
              <h3 className="text-xl font-black text-zinc-800 tracking-tight">RECENT</h3>
              <p className="text-xs text-zinc-400 font-medium mt-0.5">Lorem ipsum dolor sit amet, consectetur</p>
            </div>

            {/* Tombol Filter Kategori */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              {["Lorem ipsum", "Lorem Ipsum", "Lorem Ipsum"].map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(tab)}
                  className={`text-xs font-bold px-4 py-2 rounded-full border transition-all shrink-0 ${
                    activeCategory === tab
                      ? "bg-[#e76f51]/10 text-[#e76f51] border-[#e76f51]/20 shadow-sm"
                      : "bg-zinc-50 text-zinc-400 border-zinc-100 hover:bg-zinc-100"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* GRID SEMUA ARTIKEL RECENT (3 KOLOM) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-y-10">
            {daftarArtikel.map((artikel) => (
              <div key={artikel.id} className="group cursor-pointer flex flex-col text-left">
                {/* Thumbnail Gambar Otomatis Membaca Jalur Folder */}
                <div className="w-full aspect-[16/10] bg-zinc-50 rounded-2xl overflow-hidden border border-zinc-100/80 mb-4 relative group-hover:shadow-md transition-all">
                  <img 
                    src={artikel.image} 
                    alt={artikel.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                {/* Meta & Detail Artikel */}
                <div className="space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="inline-block bg-[#e76f51]/10 text-[#e76f51] text-[10px] font-bold px-2 py-0.5 rounded mb-2">
                      {artikel.tag}
                    </span>
                    <h4 className="text-sm font-bold text-zinc-800 leading-snug group-hover:text-[#e76f51] transition-colors line-clamp-2">
                      {artikel.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-zinc-400 font-semibold pt-1">{artikel.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ================= PAGINATION NAVIGATION ================= */}
          <div className="flex items-center justify-center gap-6 mt-16 pt-8 border-t border-zinc-100">
            <button className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-400 flex items-center justify-center transition-all cursor-pointer">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-bold text-zinc-500 tracking-wide">
              Halaman 1 dari 10
            </span>
            <button className="w-8 h-8 rounded-full bg-[#e76f51] hover:opacity-90 text-white flex items-center justify-center transition-all cursor-pointer shadow-md shadow-[#e76f51]/20">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}