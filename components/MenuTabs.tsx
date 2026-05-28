"use client";
import { useState } from "react";

interface MenuTabsProps {
  onTabClick: (targetId: string) => void;
}

export default function MenuTabs({ onTabClick }: MenuTabsProps) {
  // State untuk mengontrol tombol mana yang sedang aktif (berwarna orange)
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Kasir POS", target: "section-kasir" },
    { label: "Tracking Status", target: "section-tracking" },
    { label: "WhatsApp Bot", target: "section-wa" },
    { label: "Smart Analytics", target: "section-analytics" }
  ];

  return (
    <div className="mt-4 flex bg-zinc-50 dark:bg-zinc-900 p-2 rounded-2xl border border-zinc-200/40 dark:border-zinc-800/80 max-w-2xl w-full justify-between items-center shadow-xs mx-auto">
      {tabs.map((item, index) => (
        <button
          key={index}
          onClick={() => {
            setActiveTab(index);
            onTabClick(item.target); // Memicu fungsi scroll di page utama
          }}
          className={`flex-1 py-3 px-2 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer ${
            activeTab === index
              ? "bg-white dark:bg-zinc-800 text-primary shadow-sm border border-black/5"
              : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}