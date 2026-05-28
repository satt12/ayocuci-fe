"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Efek untuk mendeteksi pergerakan scroll halaman
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Fitur", href: "/fitur" },
    { label: "Harga", href: "#harga" },
    { label: "Artikel", href: "/artikel" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="fixed top-0 inset-x-0 z-50 px-6 md:px-8 pt-4 transition-all duration-300">
      <nav 
        className={`max-w-6xl mx-auto bg-white/90 backdrop-blur-md border border-zinc-100 rounded-[2rem] transition-all duration-300 ${
          isScrolled 
            ? "h-16 px-6 shadow-xl shadow-zinc-200/30" 
            : "h-20 px-8 shadow-md shadow-zinc-100/10"
        }`}
      >
        <div className="w-full h-full flex items-center justify-between">
          
          {/* 1. SISI KIRI: LOGO AYOCUCI (MINIMALIS SESUAI FIGMA) */}
          <Link href="/" className="flex items-center gap-1 group cursor-pointer">
            <span className="font-title font-black text-xl tracking-tight text-zinc-950 group-hover:opacity-85 transition-all">
              ayo<span className="text-[#e76f51]">cuci</span>
            </span>
          </Link>

          {/* 2. SISI TENGAH: MENU UTAMA NAVIGASI (MINIMALIS TANPA KAPSUL) */}
          <div className="hidden md:flex items-center gap-10">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? "text-[#e76f51] font-bold"
                      : "text-zinc-400 hover:text-zinc-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* 3. SISI KANAN: TOMBOL COBA GRATIS DENGAN EMPOK GLOWING SHADOW */}
          <div className="flex items-center">
            <Link
              href="/fitur"
              className={`bg-[#e76f51] text-white font-medium rounded-full shadow-xl shadow-[#e76f51]/25 hover:opacity-95 hover:scale-[1.02] transition-all duration-200 text-center tracking-wide ${
                isScrolled ? "text-xs px-5 py-2.5" : "text-sm px-6 py-3"
              }`}
            >
              Coba Gratis
            </Link>
          </div>

        </div>
      </nav>
    </div>
  );
}