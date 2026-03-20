"use client";
import { useEffect } from 'react';
import Link from 'next/link';

export default function NavbarV2() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('navbar');
      if (nav) {
        if (window.scrollY > 50) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="navbar">
      <Link href="/v2" className="nav-logo">Motor<span>Lot</span></Link>
      <ul className="nav-links">
        <li><Link href="/v2/auctions">Live Auctions</Link></li>
        <li><Link href="/v2/#how">How It Works</Link></li>
        <li><Link href="/v2/#markets">US &amp; UK</Link></li>
        <li><Link href="/v2/#faq">FAQ</Link></li>
      </ul>
      <div className="nav-actions">
        <Link href="/v2/sell" className="btn btn-outline">List a Car</Link>
        <Link href="/v2" className="btn btn-solid">Register to Bid</Link>
      </div>
    </nav>
  );
}
