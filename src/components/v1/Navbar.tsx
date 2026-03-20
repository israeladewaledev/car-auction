"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function NavbarV1() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full flex justify-between items-center px-6 md:px-12 py-8 transition-all duration-500 z-50 ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="flex items-center gap-12">
        <Link href="/" className="text-3xl font-headline italic text-primary-container tracking-tight cursor-pointer">
          MotorBid
        </Link>
        <div className="hidden xl:flex items-center gap-10">
          <Link href="/auctions" className="text-on-surface/60 hover:text-primary-container transition-colors duration-300 text-[11px] uppercase tracking-[0.2em]">
            Live Auctions
          </Link>
          <Link href="/sell" className="text-on-surface/60 hover:text-primary-container transition-colors duration-300 text-[11px] uppercase tracking-[0.2em]">
            Sell Your Car
          </Link>
          <Link href="/how" className="text-on-surface/60 hover:text-primary-container transition-colors duration-300 text-[11px] uppercase tracking-[0.2em]">
            How It Works
          </Link>
          <Link href="/results" className="text-on-surface/60 hover:text-primary-container transition-colors duration-300 text-[11px] uppercase tracking-[0.2em]">
            Results
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden sm:flex items-center gap-2 mr-6 opacity-60">
          <span className="material-symbols-outlined text-sm">language</span>
          <span className="text-[10px] font-bold tracking-widest uppercase">Global / USD</span>
        </div>
        <button className="bg-primary-container text-white px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-black transition-all">
          Register to Bid
        </button>
      </div>
    </nav>
  );
}
