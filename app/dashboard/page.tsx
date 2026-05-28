"use client";
import { motion } from "framer-motion";
import Link from "next/link"; // ✅ Wajib diimpor

export default function Dashboard() {
  // --- ANIMASI ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen bg-secondary dark:bg-zinc-950 p-6 md:p-10 selection:bg-primary/30">
      <div className="max-w-7xl mx-auto mt-20">
        
        {/* --- HEADER DASHBOARD --- */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-black dark:text-white tracking-tighter">
              Ringkasan Bisnis
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base mt-1">
              Pantau performa laundry kamu hari ini.
            </p>
          </div>

          {/* TOMBOL TRANSAKSI BARU */}
          <Link 
            href="/dashboard/transaksi"
            className="group flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-primary/20 hover:opacity-90 active:scale-95 transition-all w-full md:w-auto"
          >
            <span className="text-xl group-hover:rotate-90 transition-transform duration-300">+</span>
            Transaksi Baru
          </Link>
        </div>

        {/* --- STATS GRID --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10"
        >
          {/* Stat 1: Pendapatan */}
          <motion.div variants={itemVariants} className="bento-card bento-card-hover p-7! flex flex-col justify-between h-44">
            <div className="flex justify-between items-start">
              <span className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">Pendapatan Hari Ini</span>
              <span className="text-xl">💰</span>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-black dark:text-white tracking-tighter">Rp 450k</h2>
              <p className="text-emerald-500 text-xs font-bold mt-1">↑ 12% dari kemarin</p>
            </div>
          </motion.div>

          {/* Stat 2: Pesanan Aktif */}
          <motion.div variants={itemVariants} className="bento-card bento-card-hover p-7! flex flex-col justify-between h-44">
            <div className="flex justify-between items-start">
              <span className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">Pesanan Aktif</span>
              <span className="text-xl">🧺</span>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-black dark:text-white tracking-tighter">24</h2>
              <p className="text-zinc-400 text-xs font-bold mt-1">8 cuci, 16 setrika</p>
            </div>
          </motion.div>

          {/* Stat 3: Siap Diambil */}
          <motion.div variants={itemVariants} className="bento-card bento-card-hover p-7! flex flex-col justify-between h-44">
            <div className="flex justify-between items-start">
              <span className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">Siap Diambil</span>
              <span className="text-xl">✅</span>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-black dark:text-white tracking-tighter">12</h2>
              <p className="text-primary text-xs font-bold mt-1">Menunggu pelanggan</p>
            </div>
          </motion.div>
        </motion.div>

        {/* --- RECENT ORDERS TABLE --- */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-black/5 dark:border-white/5 overflow-hidden shadow-2xl shadow-black/5"
        >
          <div className="p-8 border-b border-black/5 dark:border-white/5 flex items-center justify-between">
            <h3 className="text-xl font-bold dark:text-white tracking-tight">Pesanan Terkini</h3>
            <button className="bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded-xl text-primary text-xs font-bold hover:bg-primary hover:text-white transition-all cursor-pointer">
              Lihat Semua
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-50/50 dark:bg-zinc-800/30 text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-black">
                  <th className="px-8 py-5">Pelanggan</th>
                  <th className="px-8 py-5">Layanan</th>
                  <th className="px-8 py-5">Status</th>
                  <th className="px-8 py-5 text-right">Total</th>
                </tr>
              </thead>
              <tbody className="text-sm dark:text-zinc-300">
                {[
                  { id: 1, name: "Budi Santoso", service: "Cuci Setrika", status: "Proses", total: "Rp 35.000" },
                  { id: 2, name: "Siti Aminah", service: "Cuci Kering", status: "Selesai", total: "Rp 20.000" },
                  { id: 3, name: "Andi Wijaya", service: "Setrika Saja", status: "Proses", total: "Rp 15.000" },
                ].map((order) => (
                  <tr key={order.id} className="border-b border-black/5 dark:border-white/5 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all group">
                    <td className="px-8 py-5 font-bold dark:text-white group-hover:text-primary transition-colors">{order.name}</td>
                    <td className="px-8 py-5 text-zinc-500 font-medium">{order.service}</td>
                    <td className="px-8 py-5">
                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-wider uppercase ${
                        order.status === "Selesai" ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400" : "bg-orange-100 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400"
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right font-black dark:text-white">{order.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

      </div>
    </main>
  );
}