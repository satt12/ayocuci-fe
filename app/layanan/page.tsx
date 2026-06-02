"use client";
import Link from "next/link";

export default function LayananMarketingPage() {
  return (
    <main className="min-h-screen text-zinc-900 overflow-x-hidden selection:bg-[#e76f51]/30 font-sans">
      
      {/* =========================================================================
          1. HERO SECTION (BANNER UTAMA)
          ========================================================================= */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 md:px-8">
        {/* Banner Card Krem Melengkung Lembut */}
        <div className="w-full bg-[#fdf2e9] rounded-[2.5rem] p-8 md:p-14 border border-[#e76f51]/5 flex flex-col gap-8 relative overflow-hidden">
          
          {/* Teks Atas Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-left items-start">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[#e76f51] font-bold text-[11px] bg-[#e76f51]/10 px-3 py-1.5 rounded-full tracking-widest uppercase">
                Layanan
              </span>
              <h1 className="font-title text-3xl md:text-5xl font-black tracking-tight leading-tight text-zinc-950">
                Atur Paket Cuci, Parfum, dan <br />
                Diskon Dalam Sekali Klik!
              </h1>
            </div>
            <div className="lg:col-span-5 lg:pt-10">
              <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-medium">
                Sajikan menu laundry teratur tanpa takut kasir salah hitung. Bebas kustomisasi jenis pakaian, aroma parfum, dan promo khusus untuk memanjakan pelanggan sekaligus dongkrak omzet Anda.
              </p>
            </div>
          </div>

          {/* 🔘 Placeholder Gambar / Mockup Utama Abu-Abu Ringkas */}
          <div className="w-full aspect-[16/8] md:aspect-[16/7] bg-[#d9d9d9] rounded-[2rem] border border-black/5 flex items-center justify-center text-sm font-semibold text-zinc-400">
            [ Area Mockup Visual Utama Layanan ]
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. BENEFIT SECTION (3 KARTU BERJEJER)
          ========================================================================= */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-8 text-center space-y-12">
        <div className="space-y-2">
          <span className="text-[#e76f51] font-bold text-xs bg-[#e76f51]/10 px-3 py-1.5 rounded-full tracking-widest uppercase">
            Benefit
          </span>
          <h2 className="font-title text-2xl md:text-3xl font-black text-zinc-950 tracking-tight pt-2">
            Satu Aplikasi untuk Semua <br /> Kebutuhan Laundry
          </h2>
        </div>

        {/* Grid 3 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kartu 1 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-zinc-100 flex flex-col items-start text-left gap-4 shadow-sm shadow-zinc-200/20">
            <h4 className="font-title font-bold text-base text-zinc-950 leading-snug">
              Operasional Laundry Lebih Teratur
            </h4>
            <p className="text-xs text-zinc-500 leading-relaxed font-medium">
              Kelola transaksi, layanan, paket laundry, hingga kebutuhan operasional harian dalam satu sistem yang praktis dan mudah digunakan.
            </p>
          </div>

          {/* Kartu 2 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-zinc-100 flex flex-col items-start text-left gap-4 shadow-sm shadow-zinc-200/20">
            <h4 className="font-title font-bold text-base text-zinc-950 leading-snug">
              Proses Kerja Lebih Cepat & Efisien
            </h4>
            <p className="text-xs text-zinc-500 leading-relaxed font-medium">
              Bantu percepat aktivitas bisnis dengan fitur otomatis yang meminimalkan kesalahan dan membuat pekerjaan lebih hemat waktu.
            </p>
          </div>

          {/* Kartu 3 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-zinc-100 flex flex-col items-start text-left gap-4 shadow-sm shadow-zinc-200/20">
            <h4 className="font-title font-bold text-base text-zinc-950 leading-snug">
              Mendukung Perkembangan Bisnis Laundry
            </h4>
            <p className="text-xs text-zinc-500 leading-relaxed font-medium">
              Dirancang untuk membantu meningkatkan pelayanan pelanggan sekaligus membuat bisnis laundry bekerja jauh lebih rapi, modern, dan profesional.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. FEATURES SECTION (MOCKUP KIRI + DAFTAR FITUR KANAN)
          ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-8 space-y-12">
        <div className="text-left space-y-2 max-w-xl">
          <span className="text-[#e76f51] font-bold text-xs bg-[#e76f51]/10 px-3 py-1.5 rounded-full tracking-widest uppercase">
            Features
          </span>
          <h2 className="font-title text-2xl md:text-4xl font-black text-zinc-950 tracking-tight pt-2 leading-tight">
            Sajikan Pilihan Layanan <br /> Terlengkap di Outlet Anda!
          </h2>
        </div>

        {/* Tata Letak Dua Belah Sisi */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Sisi Kiri: Placeholder Gambar Mockup Vertikal */}
          <div className="lg:col-span-6 w-full aspect-[4/5] bg-[#d9d9d9] rounded-[2rem] border border-black/5 flex items-center justify-center text-sm font-semibold text-zinc-400">
            [ Area Gambar Fitur Vertikal ]
          </div>

          {/* Sisi Kanan: List Deskripsi Poin */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Poin 1 */}
            <div className="bg-transparent rounded-2xl p-4 flex gap-4 text-left items-start">
              <div className="w-4 h-4 rounded-xs bg-[#e76f51] shrink-0 mt-1" />
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-zinc-950">Kustomisasi Menu Praktis</h4>
                <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                  Atur paket kiloan, satuan, koin, hingga pilihan parfum premium dengan mudah.
                </p>
              </div>
            </div>

            {/* Poin 2 (Kotak Highlight Terang Sesuai Gambar) */}
            <div className="bg-zinc-100/60 border border-zinc-200/30 rounded-2xl p-6 flex gap-4 text-left items-start">
              <div className="w-4 h-4 rounded-xs bg-[#e76f51] shrink-0 mt-1" />
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-zinc-950">Diskon Otomatis Akurat</h4>
                <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                  Pasang potongan harga member, atau promo musiman yang langsung memotong nota.
                </p>
              </div>
            </div>

            {/* Poin 3 */}
            <div className="bg-transparent rounded-2xl p-4 flex gap-4 text-left items-start">
              <div className="w-4 h-4 rounded-xs bg-[#e76f51] shrink-0 mt-1" />
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-zinc-950">Pencatatan Item Instan</h4>
                <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                  Kasir tinggal memilih daftar pakaian atau jenis cucian pelanggan yang sudah dikostumisasi, meminimalkan waktu antrean di meja kasir.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}