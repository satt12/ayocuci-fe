"use client";
import { ChevronDown } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen text-zinc-900 overflow-x-hidden selection:bg-[#e76f51]/30 font-sans pt-44 pb-24">
      <div className="max-w-3xl mx-auto px-6 md:px-0 space-y-10 text-left">
        
        {/* =========================================================================
            HEADER HALAMAN (JUDUL & TANGGAL PEMBARUAN)
            ========================================================================= */}
        <div className="space-y-3 border-b border-zinc-100 pb-8 relative">
          {/* Pemilih Bahasa Mini di Pojok Kanan Atas */}
          <div className="absolute right-0 top-1 flex items-center gap-1.5 border border-zinc-200 bg-white rounded-lg px-2.5 py-1 text-[11px] font-bold text-zinc-600 shadow-3xs cursor-pointer hover:bg-zinc-50 transition-all">
            ID <ChevronDown className="w-3 h-3 text-zinc-400" />
          </div>

          <h1 className="font-title text-3xl md:text-4xl font-black text-zinc-950 tracking-tight leading-tight">
            Kebijakan Privasi <br />
            <span className="text-[#e76f51]">Ayo Cuci</span>
          </h1>
          <p className="text-[11px] font-bold text-zinc-400 tracking-wide uppercase">
            Pembaruan Terakhir: 24 Mei 2026
          </p>
        </div>

        {/* Paragraf Komitmen Awal */}
        <p className="text-xs md:text-sm text-zinc-600 leading-relaxed font-medium">
          Komitmen Ayocuci dalam melindungi data pribadi Anda dan memastikan pengalaman manajemen laundry yang aman serta transparan.
        </p>

        {/* =========================================================================
            ISI DOKUMEN REGULASI (PASAL 1 - 6)
            ========================================================================= */}
        <div className="space-y-8 pt-2">
          
          {/* PASAL 1 */}
          <div className="space-y-3">
            <h3 className="font-title text-base font-black text-zinc-950 tracking-tight">
              1. Pendahuluan
            </h3>
            <p className="text-xs md:text-sm text-zinc-500 leading-relaxed font-medium">
              Selamat datang di Ayocuci. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda saat menggunakan aplikasi dan layanan kami.
            </p>
            <p className="text-xs md:text-sm text-zinc-500 leading-relaxed font-medium">
              Dengan menggunakan layanan Ayocuci, Anda setuju dengan pengumpulan dan penggunaan informasi sesuai dengan kebijakan ini. Kami menyarankan Anda untuk membaca dokumen ini secara menyeluruh untuk memahami praktik privasi kami.
            </p>
          </div>

          {/* PASAL 2 */}
          <div className="space-y-4">
            <h3 className="font-title text-base font-black text-zinc-950 tracking-tight">
              2. Informasi yang Kami Kumpulkan
            </h3>
            
            {/* Sub-Poin Identitas */}
            <div className="space-y-1.5 pl-1">
              <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider">
                Informasi Identitas
              </h4>
              <ul className="list-disc pl-5 text-xs md:text-sm text-zinc-500 space-y-1 font-medium">
                <li>Nama Lengkap</li>
                <li>Alamat Email</li>
                <li>Nomor Telepon (WhatsApp)</li>
              </ul>
            </div>

            {/* Sub-Poin Bisnis */}
            <div className="space-y-1.5 pl-1">
              <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider">
                Informasi Bisnis
              </h4>
              <ul className="list-disc pl-5 text-xs md:text-sm text-zinc-500 space-y-1 font-medium">
                <li>Nama Outlet Laundry</li>
                <li>Riwayat Transaksi</li>
                <li>Data Pelanggan Laundry</li>
              </ul>
            </div>
          </div>

          {/* PASAL 3 */}
          <div className="space-y-3">
            <h3 className="font-title text-base font-black text-zinc-950 tracking-tight">
              3. Penggunaan Informasi
            </h3>
            <p className="text-xs md:text-sm text-zinc-500 leading-relaxed font-medium">
              Informasi yang kami kumpulkan digunakan untuk berbagai tujuan operasional dan pengembangan layanan:
            </p>
            <ul className="list-disc pl-5 text-xs md:text-sm text-zinc-500 space-y-1.5 font-medium">
              <li>Menyediakan dan mengelola fitur aplikasi kasir laundry Anda.</li>
              <li>Mengirimkan notifikasi status cucian kepada pelanggan Anda.</li>
              <li>Menghasilkan laporan bisnis dan analisis performa outlet.</li>
              <li>Memberikan dukungan teknis dan bantuan pelanggan.</li>
            </ul>
          </div>

          {/* PASAL 4 */}
          <div className="space-y-4">
            <h3 className="font-title text-base font-black text-zinc-950 tracking-tight">
              4. Keamanan Data
            </h3>
            <p className="text-xs md:text-sm text-zinc-500 leading-relaxed font-medium">
              Kami menerapkan standar keamanan enkripsi SSL tingkat tinggi untuk melindungi data Anda dari akses yang tidak sah. Penyimpanan data dilakukan pada server cloud terpercaya dengan cadangan otomatis berkala.
            </p>

            {/* Kotak Highlight Banner Enkripsi Samping Oranye */}
            <div className="bg-zinc-50 border border-zinc-200/50 border-l-4 border-l-[#e76f51] rounded-xl p-5 text-left space-y-1">
              <h5 className="text-xs font-black text-zinc-950 tracking-tight">
                Enkripsi End-to-End
              </h5>
              <p className="text-xs text-zinc-400 font-medium leading-relaxed">
                Seluruh transaksi keuangan dan data para pelanggan Anda dienkripsi untuk memastikan tidak ada pihak ketiga yang dapat mengakses data sensitif bisnis Anda.
              </p>
            </div>
          </div>

          {/* PASAL 5 */}
          <div className="space-y-4">
            <h3 className="font-title text-base font-black text-zinc-950 tracking-tight">
              5. Hak Pengguna
            </h3>

            <div className="space-y-1">
              <h5 className="text-xs font-black text-zinc-950 tracking-tight">Hak Akses</h5>
              <p className="text-xs text-zinc-500 font-medium leading-relaxed">
                Anda memiliki hak untuk meminta salinan data pribadi yang kami simpan.
              </p>
            </div>

            <div className="space-y-1">
              <h5 className="text-xs font-black text-zinc-950 tracking-tight">Hak Koreksi</h5>
              <p className="text-xs text-zinc-500 font-medium leading-relaxed">
                Anda dapat memperbarui atau memperbaiki informasi akun Anda kapan saja melalui pengaturan profil.
              </p>
            </div>

            <div className="space-y-1">
              <h5 className="text-xs font-black text-zinc-950 tracking-tight">Hak Penghapusan</h5>
              <p className="text-xs text-zinc-500 font-medium leading-relaxed">
                Anda dapat meminta penghapusan akun dan data terkait, sesuai dengan ketentuan hukum yang berlaku.
              </p>
            </div>
          </div>

          {/* PASAL 6 */}
          <div className="space-y-3">
            <h3 className="font-title text-base font-black text-zinc-950 tracking-tight">
              6. Perubahan Kebijakan
            </h3>
            <p className="text-xs md:text-sm text-zinc-500 leading-relaxed font-medium">
              Ayocuci dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Kami akan memberitahu Anda tentang perubahan apa pun dengan memposting kebijakan baru di halaman ini dan mengirimkan notifikasi melalui aplikasi atau email jika perubahan tersebut signifikan.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}