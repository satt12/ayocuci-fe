"use client";
import { useState } from "react";
import { 
  MessageSquare, 
  Mail, 
  HelpCircle
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telepon: "",
    pesan: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <main className="min-h-screen text-zinc-900 overflow-x-hidden selection:bg-[#e76f51]/30 font-sans pt-44 pb-16">
      <div className="max-w-6xl mx-auto px-6 md:px-8 space-y-24">
        
        {/* =========================================================================
            1. UPPER SECTION: TENTANG AYOCUCI & FORMULIR UTAMA
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Sisi Kiri: Deskripsi Tentang Ayocuci */}
          <div className="lg:col-span-6 space-y-6 md:pr-4">
            <h1 className="font-title text-2xl md:text-3xl font-black text-zinc-950 tracking-tight">
              Tentang Ayocuci
            </h1>
            <p className="text-xs md:text-sm text-zinc-500 leading-relaxed font-medium">
              Ayocuci lahir dari semangat untuk mentransformasi bisnis laundry konvensional di Indonesia menjadi lebih modern melalui teknologi. Kami percaya bahwa dengan sistem yang tepat, setiap pemilik laundry bisa lebih fokus pada pengembangan bisnis.
            </p>
            
            {/* Informasi Email & Sosial Media */}
            <div className="space-y-4 pt-2">
              <div className="text-xs md:text-sm font-medium text-zinc-500">
                Email: <br />
                <span className="font-black text-zinc-950">support@ayocuci.id</span>
              </div>
              
              {/* Bulatan Ikon Sosial Media Riil (Menggunakan SVG Murni 100% Fix) */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                {/* 1. Email */}
                <a href="mailto:support@ayocuci.id" className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-[#e76f51]/10 border border-black/5 flex items-center justify-center text-zinc-600 hover:text-[#e76f51] transition-all shadow-2xs" title="Email">
                  <Mail className="w-4 h-4" />
                </a>

                {/* 2. WhatsApp */}
                <a href="#" className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-[#e76f51]/10 border border-black/5 flex items-center justify-center text-zinc-600 hover:text-[#e76f51] transition-all shadow-2xs" title="WhatsApp">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
                </a>

                {/* 3. Facebook */}
                <a href="#" className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-[#e76f51]/10 border border-black/5 flex items-center justify-center text-zinc-600 hover:text-[#e76f51] transition-all shadow-2xs" title="Facebook">
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z"/>
                  </svg>
                </a>

                {/* 4. Instagram (Fixed Path Blueprint) */}
                <a href="#" className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-[#e76f51]/10 border border-black/5 flex items-center justify-center text-zinc-600 hover:text-[#e76f51] transition-all shadow-2xs" title="Instagram">
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                </a>

                {/* 5. TikTok */}
                <a href="#" className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-[#e76f51]/10 border border-black/5 flex items-center justify-center text-zinc-600 hover:text-[#e76f51] transition-all shadow-2xs" title="TikTok">
                  <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.01 1.61 4.17 1.13 1.25 2.73 2.08 4.41 2.31v3.91c-1.46-.07-2.88-.56-4.13-1.34A8.7 8.7 0 0 1 16.5 6.46V15.5c0 1.25-.23 2.48-.74 3.61a7.48 7.48 0 0 1-5.63 4.67c-1.57.25-3.21.05-4.67-.58A7.51 7.51 0 0 1 1.34 18.2a7.46 7.46 0 0 1-.36-4.61 7.51 7.51 0 0 1 4.93-5.46c1.06-.34 2.19-.44 3.29-.29v4.06c-.73-.13-1.49-.03-2.17.27a3.56 3.56 0 0 0-2.09 3.59c.1 1.07.69 2.04 1.6 2.58a3.61 3.61 0 0 0 4.54-.51c.71-.72 1.06-1.74 1.02-2.75V0z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Box Card Formulir Kontak (Warna Latar Belakang Abu-abu Sesuai Image_9d3abf.png) */}
          <div className="lg:col-span-6 bg-[#f4f4f5] rounded-[2.5rem] p-8 md:p-10 border border-zinc-200/50 shadow-xs w-full">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Input Nama */}
              <div className="space-y-2">
                <label className="text-xs md:text-sm font-bold text-zinc-700 block ml-1">
                  Nama<span className="text-red-500 ml-0.5">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Masukkan Nama Lengkap" 
                  required 
                  value={formData.nama} 
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })} 
                  className="w-full px-5 py-3.5 bg-white border border-zinc-100 rounded-2xl text-xs text-zinc-700 placeholder-zinc-300 focus:outline-none focus:border-[#e76f51]/30 transition-all shadow-xs" 
                />
              </div>

              {/* Input Email */}
              <div className="space-y-2">
                <label className="text-xs md:text-sm font-bold text-zinc-700 block ml-1">
                  Email<span className="text-red-500 ml-0.5">*</span>
                </label>
                <input 
                  type="email" 
                  placeholder="Masukkan alamat email anda" 
                  required 
                  value={formData.email} 
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                  className="w-full px-5 py-3.5 bg-white border border-zinc-100 rounded-2xl text-xs text-zinc-700 placeholder-zinc-300 focus:outline-none focus:border-[#e76f51]/30 transition-all shadow-xs" 
                />
              </div>

              {/* Input Nomor Telepon */}
              <div className="space-y-2">
                <label className="text-xs md:text-sm font-bold text-zinc-700 block ml-1">
                  Nomor Telepon<span className="text-red-500 ml-0.5">*</span>
                </label>
                <input 
                  type="tel" 
                  placeholder="Masukkan nomor telepon" 
                  required 
                  value={formData.telepon} 
                  onChange={(e) => setFormData({ ...formData, telepon: e.target.value })} 
                  className="w-full px-5 py-3.5 bg-white border border-zinc-100 rounded-xl text-xs text-zinc-700 placeholder-zinc-300 focus:outline-none focus:border-[#e76f51]/30 transition-all shadow-xs" 
                />
              </div>

              {/* Input Kebutuhan */}
              <div className="space-y-2">
                <label className="text-xs md:text-sm font-bold text-zinc-700 block ml-1">
                  Apa yang Bisa Kami Bantu?
                </label>
                <textarea 
                  rows={4} 
                  placeholder="Jelaskan kebutuhan atau pertanyaan Anda..." 
                  value={formData.pesan} 
                  onChange={(e) => setFormData({ ...formData, pesan: e.target.value })} 
                  className="w-full px-5 py-4 bg-white border border-zinc-100 rounded-2xl text-xs text-zinc-700 placeholder-zinc-300 focus:outline-none focus:border-[#e76f51]/30 transition-all resize-none shadow-xs" 
                />
              </div>

              {/* Tombol Submit */}
              <div className="flex justify-end pt-3">
                <button 
                  type="submit" 
                  className="bg-[#e76f51] text-white font-bold text-xs px-8 py-3 rounded-2xl shadow-lg shadow-[#e76f51]/20 hover:opacity-95 transition-all cursor-pointer"
                >
                  Submit
                </button>
              </div>

            </form>
          </div>
        </div>

        {/* =========================================================================
            2. LOWER SECTION: CARA MENGHUBUNGI KAMI
            ========================================================================= */}
        <div className="space-y-8 text-left">
          <div className="space-y-2 max-w-xl">
            <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">Cara Menghubungi Kami</span>
            <h2 className="font-title text-xl md:text-2xl font-black text-zinc-950 tracking-tight leading-tight">
              Hubungi tim kami untuk pertanyaan, <br /> dukungan, atau kerja sama.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100 flex flex-col justify-between items-start text-left min-h-[180px]">
              <div className="w-full flex justify-between items-start">
                <h4 className="font-title font-bold text-base text-zinc-950 tracking-tight">Live Chat</h4>
                <MessageSquare className="w-4 h-4 text-zinc-700 mt-0.5" />
              </div>
              <p className="text-xs text-zinc-400 font-medium leading-relaxed pt-2 flex-1">Ngobrol langsung dengan tim kami untuk mendapatkan bantuan dan respon cepat.</p>
              <button className="mt-4 px-4 py-2 bg-white border border-zinc-100 rounded-xl text-[10px] font-bold text-zinc-600 hover:text-[#e76f51] hover:border-[#e76f51]/20 transition-all shadow-2xs cursor-pointer">Mulai Chat</button>
            </div>

            <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100 flex flex-col justify-between items-start text-left min-h-[180px]">
              <div className="w-full flex justify-between items-start">
                <h4 className="font-title font-bold text-base text-zinc-950 tracking-tight">E-mail Kami</h4>
                <Mail className="w-4 h-4 text-zinc-700 mt-0.5" />
              </div>
              <p className="text-xs text-zinc-400 font-medium leading-relaxed pt-2 flex-1">Kirimkan pertanyaan atau pesan Anda dan kami akan segera menghubungi kembali.</p>
              <button className="mt-4 px-4 py-2 bg-white border border-zinc-100 rounded-xl text-[10px] font-bold text-zinc-600 hover:text-[#e76f51] hover:border-[#e76f51]/20 transition-all shadow-2xs cursor-pointer">Kirim E-mail</button>
            </div>

            <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100 flex flex-col justify-between items-start text-left min-h-[180px]">
              <div className="w-full flex justify-between items-start">
                <h4 className="font-title font-bold text-base text-zinc-950 tracking-tight">Pusat Bantuan</h4>
                <HelpCircle className="w-4 h-4 text-zinc-700 mt-0.5" />
              </div>
              <p className="text-xs text-zinc-400 font-medium leading-relaxed pt-2 flex-1">Temukan panduan dan artikel untuk membantu Anda memahami layanan kami.</p>
              <button className="mt-4 px-4 py-2 bg-white border border-zinc-100 rounded-xl text-[10px] font-bold text-zinc-600 hover:text-[#e76f51] hover:border-[#e76f51]/20 transition-all shadow-2xs cursor-pointer">Lihat Panduan</button>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}