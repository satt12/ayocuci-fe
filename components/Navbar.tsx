"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ChevronDown, 
  Shirt, 
  Users, 
  Store, 
  LayoutDashboard, 
  Wallet, 
  UserCheck, 
  Coins, 
  BarChart3, 
  Clock, 
  Printer 
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 
  const dropdownRef = useRef<HTMLDivElement>(null); 

  // 1. Deteksi scroll untuk memperkecil dimensi navbar secara halus
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

  // 2. Klik di luar area navbar/dropdown untuk menutup megamenu otomatis
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 3. Menutup dropdown secara otomatis saat mendeteksi perpindahan halaman
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const fiturItems = [
    { icon: <Shirt className="w-5 h-5 text-zinc-400 group-hover/item:text-white transition-all" />, title: "Layanan", href: "/layanan", desc: "Kelola jasa laundry & paket" },
    { icon: <UserCheck className="w-5 h-5 text-zinc-400 group-hover/item:text-white transition-all" />, title: "Karyawan", href: "/karyawan", desc: "Delegasi dan list Staf" },
    { icon: <Store className="w-5 h-5 text-zinc-400 group-hover/item:text-white transition-all" />, title: "Outlet", href: "/outlet", desc: "Multi-cabang satu dasbor" },
    { icon: <LayoutDashboard className="w-5 h-5 text-zinc-400 group-hover/item:text-white transition-all" />, title: "Ringkasan", href: "/", desc: "Statistik cepat harian" },
    { icon: <Wallet className="w-5 h-5 text-zinc-400 group-hover/item:text-white transition-all" />, title: "Dompet", href: "/dompet", desc: "Saldo & mutasi kas" },
    { icon: <Users className="w-5 h-5 text-zinc-400 group-hover/item:text-white transition-all" />, title: "Pelanggan", href: "/pelanggan", desc: "Manajemen database pelanggan" },
    { icon: <Coins className="w-5 h-5 text-zinc-400 group-hover/item:text-white transition-all" />, title: "Pengeluaran", href: "/pengeluaran", desc: "Catat biaya operasional" }, 
    { icon: <BarChart3 className="w-5 h-5 text-zinc-400 group-hover/item:text-white transition-all" />, title: "Laporan", href: "/laporan", desc: "Analisis bisnis mendalam" },
    { icon: <Clock className="w-5 h-5 text-zinc-400 group-hover/item:text-white transition-all" />, title: "Status", href: "/status", desc: "Pantau proses pengerjaan" },
    { icon: <Printer className="w-5 h-5 text-zinc-400 group-hover/item:text-white transition-all" />, title: "Printer", href: "/printer", desc: "Koneksi thermal Bluetooth" },
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
          
          {/* 1. SISI KIRI: SEKARANG MEMANGGIL PATH JALUR FOLDER YANG BENAR */}
          <Link href="/" className="flex items-center cursor-pointer hover:opacity-90 transition-all">
            <img 
              src="/gallery/Logo_3.webp" 
              style={{ 
                height: isScrolled ? '28px' : '36px', 
                width: 'auto',
                display: 'block',
                objectFit: 'contain'
              }} 
              className="transition-all duration-300"
            />
          </Link>

          {/* 2. SISI TENGAH: MENU NAVIGATION */}
          <div className="hidden md:flex items-center gap-10">
            <div className="relative py-4" ref={dropdownRef}>
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className={`flex items-center gap-1 text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isOpen ? "text-[#e76f51]" : "text-zinc-400 hover:text-[#e76f51]"
                }`}
              >
                Fitur
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#e76f51]" : "text-zinc-400"}`} />
              </button>

              <div 
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[640px] bg-white rounded-3xl p-8 shadow-2xl border border-zinc-100/80 transition-all duration-300 z-50 transform origin-top ${
                  isOpen 
                    ? "opacity-100 pointer-events-auto scale-100" 
                    : "opacity-0 pointer-events-none scale-95"
                }`}
              >
                <div className="flex items-center justify-between mb-6 border-b border-zinc-100/50 pb-3">
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Fitur</span>
                  <Link href="/fitur" className="text-xs font-bold text-[#e76f51] hover:opacity-80 flex items-center gap-0.5 transition-all">
                    Lihat semua <span className="text-[10px]">❯</span>
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {fiturItems.map((item, index) => (
                    <Link 
                      key={index} 
                      href={item.href} 
                      className="flex items-start gap-4 p-3 rounded-2xl border-2 border-transparent hover:border-[#e76f51] hover:bg-[#e76f51]/5 hover:shadow-lg hover:shadow-[#e76f51]/5 transition-all duration-200 group/item"
                    >
                      <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center border border-black/5 shrink-0 group-hover/item:bg-[#e76f51] group-hover/item:border-transparent transition-all duration-200">
                        {item.icon}
                      </div>
                      <div className="space-y-0.5 text-left">
                        <h4 className="text-sm font-bold text-zinc-800 group-hover/item:text-[#e76f51] transition-all duration-200">
                          {item.title}
                        </h4>
                        <p className="text-xs text-zinc-400 font-medium leading-relaxed group-hover/item:text-[#e76f51]/80 transition-all duration-200">
                          {item.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link 
              href="#harga" 
              className={`text-sm font-medium transition-all duration-200 ${
                pathname === "#harga" ? "text-[#e76f51] font-bold" : "text-zinc-400 hover:text-[#e76f51]"
              }`}
            >
              Harga
            </Link>
            <Link 
              href="/artikel" 
              className={`text-sm font-medium transition-all duration-200 ${
                pathname === "/artikel" ? "text-[#e76f51] font-bold" : "text-zinc-400 hover:text-[#e76f51]"
              }`}
            >
              Artikel
            </Link>
            <Link 
              href="/contact" 
              className={`text-sm font-medium transition-all duration-200 ${
                pathname === "/contact" ? "text-[#e76f51] font-bold" : "text-zinc-400 hover:text-[#e76f51]"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* 3. SISI KANAN: CTA BUTTON */}
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