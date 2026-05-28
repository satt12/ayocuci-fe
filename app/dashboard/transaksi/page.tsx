"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TransaksiBaru() {
  // --- STATE UNTUK FORM ---
  const [nama, setNama] = useState("");
  const [berat, setBerat] = useState(0);
  const [layanan, setLayanan] = useState("reguler"); 
  const [total, setTotal] = useState(0);

  // --- HARGA LAYANAN ---
  const HARGA_REGULER = 7000;
  const HARGA_EXPRESS = 12000;

  // --- LOGIKA HITUNG OTOMATIS ---
  useEffect(() => {
    const hargaPerKg = layanan === "reguler" ? HARGA_REGULER : HARGA_EXPRESS;
    setTotal(berat * hargaPerKg);
  }, [berat, layanan]);

  return (
    <main className="min-h-screen bg-secondary dark:bg-zinc-950 p-6 md:p-10 selection:bg-primary/30">
      <div className="max-w-3xl mx-auto mt-24 md:mt-28">
        
        {/* --- HEADER --- */}
        <div className="flex items-center gap-4 mb-8">
          <Link 
            href="/dashboard" 
            className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 flex items-center justify-center border border-black/5 dark:border-white/5 hover:bg-primary hover:text-white transition-all shadow-sm"
          >
            ←
          </Link>
          <h1 className="text-2xl md:text-3xl font-black dark:text-white tracking-tighter">
            Input Transaksi Baru
          </h1>
        </div>

        {/* --- FORM INPUT --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-2xl shadow-black/5"
        >
          <div className="space-y-6">
            
            {/* Input Nama */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2 ml-1">
                Nama Pelanggan
              </label>
              <input
                type="text"
                placeholder="Contoh: Satria Ramadhan"
                className="w-full h-14 px-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 focus:outline-none focus:border-primary transition-all dark:text-white"
                onChange={(e) => setNama(e.target.value)}
              />
            </div>

            {/* Pilih Layanan */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2 ml-1">
                Pilih Layanan
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setLayanan("reguler")}
                  className={`h-14 rounded-2xl font-bold transition-all border ${
                    layanan === "reguler" 
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" 
                    : "bg-zinc-50 dark:bg-zinc-800 dark:text-zinc-400 border-zinc-100 dark:border-zinc-700"
                  }`}
                >
                  Reguler (7k/kg)
                </button>
                <button
                  onClick={() => setLayanan("express")}
                  className={`h-14 rounded-2xl font-bold transition-all border ${
                    layanan === "express" 
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" 
                    : "bg-zinc-50 dark:bg-zinc-800 dark:text-zinc-400 border-zinc-100 dark:border-zinc-700"
                  }`}
                >
                  Express (12k/kg)
                </button>
              </div>
            </div>

            {/* Input Berat */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2 ml-1">
                Berat Cucian (Kg)
              </label>
              <input
                type="number"
                placeholder="0"
                className="w-full h-14 px-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 focus:outline-none focus:border-primary transition-all dark:text-white font-bold text-xl"
                onChange={(e) => setBerat(Number(e.target.value))}
              />
            </div>

            {/* Ringkasan Harga */}
            <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800 flex justify-between items-center">
              <div>
                <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest">Total Bayar</p>
                <h2 className="text-3xl font-black text-primary tracking-tighter">
                  Rp {total.toLocaleString("id-ID")}
                </h2>
              </div>
              <button className="bg-zinc-900 dark:bg-white dark:text-zinc-950 text-white px-8 py-4 rounded-2xl font-black text-sm hover:opacity-90 active:scale-95 transition-all">
                Simpan Pesanan
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </main>
  );
}