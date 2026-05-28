import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Providers } from "./providers"; 

// Font untuk Deskripsi
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-jakarta',
});

// Font untuk Title/Judul
const manrope = Manrope({ 
  subsets: ["latin"],
  variable: '--font-manrope',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // ✅ Properti suppressHydrationWarning di sini sudah benar menjaga ThemeProvider agar tidak error
    <html lang="id" suppressHydrationWarning>
      <body className={`${jakarta.variable} ${manrope.variable} ${jakarta.className} antialiased`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}