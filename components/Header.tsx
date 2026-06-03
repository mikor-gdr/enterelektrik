"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { colors } from "@/lib/Warna";
import { LOGO_PATH, ENTER_INFO, INFONE } from "@/lib/File";
import { cn } from "@/lib/lain"; 
 
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "", label: "Home" },
    { href: "/#about", label: "Tentang" },
    { href: "/#layanan", label: "Layanan" },
    { href: "/#Produk", label: "Produk" },
    { href: "/#blog", label: "Blog" },
    { href: "/#kontak", label: "Kontak" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#006644] backdrop-blur-md shadow-lg border-b-2 border-[#009966]/30">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative h-14 w-14 flex-shrink-0 rounded-xl bg-[#009966]/20 p-2 group-hover:bg-[#009966] transition-colors border border-[#009966]/30">
              <Image
                src={LOGO_PATH}
                alt={`Logo ${INFONE.shortName}`}
                // fill
                width={500}
                height={500}
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-black text-white group-hover:text-[#009966] transition-colors">
                {INFONE.shortName}
              </h1>
              <p className="text-xs text-white/70 font-medium">
                {INFONE.location}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-black font-semibold hover:text-[#009966] transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all"></span>
              </Link>
            ))}
            <Link
              href="https://play.google.com/store/apps/details?id=com.enterelektrik&hl=id" target="_blank"
              className="px-6 py-2.5 rounded-lg bg-[#009966] text-white font-bold hover:bg-[#006644] transition-all transform hover:scale-105 shadow-lg"
            >
              Download Aplikasi
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-[#009966] transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 bg-black/95 rounded-lg border-2 border-[#009966]/30 p-4 backdrop-blur-md">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 px-4 text-white font-semibold hover:text-[#009966] hover:bg-[#009966]/10 rounded-lg transition-all"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="daftar"
              onClick={() => setIsMenuOpen(false)}
              className="block px-6 py-3 rounded-lg bg-[#009966] text-white font-bold hover:bg-[#006644] transition-colors text-center mt-4"
            >
              Daftar
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};
export default Header;
