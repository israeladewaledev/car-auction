"use client";
import { useEffect, useState } from 'react';
import './theme.css';
import NavbarV2 from "@/components/v2/Navbar";
import FooterV2 from "@/components/v2/Footer";
import Link from "next/link";

export default function V2Page() {
  useEffect(() => {

    // COUNTDOWN TIMER
    let target = new Date();
    target.setDate(target.getDate() + 2);
    target.setHours(target.getHours() + 14);
    target.setMinutes(target.getMinutes() + 32);

    function updateCountdown() {
      const now = new Date();
      const diff = target.getTime() - now.getTime();
      if (diff <= 0) return;
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      
      const cdD = document.getElementById('cd-d');
      const cdH = document.getElementById('cd-h');
      const cdM = document.getElementById('cd-m');
      const cdS = document.getElementById('cd-s');
      if (cdD) cdD.textContent = String(d).padStart(2,'0');
      if (cdH) cdH.textContent = String(h).padStart(2,'0');
      if (cdM) cdM.textContent = String(m).padStart(2,'0');
      if (cdS) cdS.textContent = String(s).padStart(2,'0');
    }
    const timerInterval = setInterval(updateCountdown, 1000);
    updateCountdown();

    // SCROLL REVEAL
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));

    // COUNT-UP
    const countUps = document.querySelectorAll('.count-up');
    const countObserver = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement;
          const targetNum = +(el.dataset.target || 0);
          const duration = 1800;
          const step = targetNum / (duration / 16);
          let current = 0;
          const t = setInterval(() => {
            current += step;
            if (current >= targetNum) {
              current = targetNum;
              clearInterval(t);
            }
            el.textContent = Math.floor(current).toLocaleString() + '+';
          }, 16);
          countObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    countUps.forEach(el => countObserver.observe(el));

    // CURRENCY TOGGLE (Delegation)
    const handleCurrency = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('currency-btn')) {
         document.querySelectorAll('.currency-btn').forEach(b => b.classList.remove('active'));
         target.classList.add('active');
         const isGbp = target.textContent?.includes('GBP');
         const dataAttr = isGbp ? 'gbp' : 'usd';
         document.querySelectorAll('.price').forEach(el => {
            const hEl = el as HTMLElement;
            hEl.textContent = hEl.dataset[dataAttr] || hEl.textContent;
         });
      }
    };
    document.addEventListener('click', handleCurrency);

    // FAQ TOGGLE
    const handleFaq = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('faq-q')) {
        const item = target.closest('.faq-item');
        if (item) {
           const isOpen = item.classList.contains('open');
           document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
           if (!isOpen) item.classList.add('open');
        }
      }
    };
    document.addEventListener('click', handleFaq);

    // TABS TOGGLE
    const handleTabs = (e: MouseEvent) => {
       const target = e.target as HTMLElement;
       if (target.classList.contains('how-tab')) {
          document.querySelectorAll('.how-tab').forEach(b => b.classList.remove('active'));
          target.classList.add('active');
          const isSeller = target.textContent?.includes('Seller');
          document.getElementById('buyer-steps')?.classList.toggle('active', !isSeller);
          document.getElementById('seller-steps')?.classList.toggle('active', !!isSeller);
       }
    };
    document.addEventListener('click', handleTabs);

    return () => {
      clearInterval(timerInterval);
      observer.disconnect();
      countObserver.disconnect();
      document.removeEventListener('click', handleCurrency);
      document.removeEventListener('click', handleFaq);
      document.removeEventListener('click', handleTabs);
    };
  }, []);

  return (
    <>
      


<nav id="navbar">
  <a href="#" className="nav-logo">Motor<span>Lot</span></a>
  <ul className="nav-links">
    <li><a href="#auctions">Live Auctions</a></li>
    <li><a href="#how">How It Works</a></li>
    <li><a href="#markets">US &amp; UK</a></li>
    <li><a href="#faq">FAQ</a></li>
  </ul>
  <div className="nav-actions">
    <a href="#sell" className="btn btn-outline">List a Car</a>
    <a href="#" className="btn btn-solid">Register to Bid</a>
  </div>
</nav>


<section className="hero" style={{ padding: "0" }}>
  <div className="hero-left">
    <p className="hero-eyebrow">Est. 2009 &nbsp;·&nbsp; US &amp; UK Licensed</p>
    <h1 className="hero-headline">
      <span className="line">Where Great</span>
      <span className="line"><em>Cars Find</em></span>
      <span className="line">New Owners.</span>
    </h1>
    <p className="hero-sub">The premier auction platform for serious buyers and sellers across the United States and United Kingdom. No hidden fees. No compromises.</p>
    <div className="hero-actions">
      <a href="#auctions" className="btn btn-solid" style={{ fontSize: "0.85rem", padding: "14px 28px" }}>Browse Live Auctions</a>
      <a href="#sell" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "14px 28px" }}>Sell Your Car</a>
    </div>
    <p className="hero-trust">No reserve fees &nbsp;·&nbsp; No hidden costs &nbsp;·&nbsp; Secure escrow</p>

    <div className="countdown-widget">
      <p className="countdown-label">Next Auction Closes In</p>
      <div className="countdown-timer">
        <div className="time-unit"><span className="num" id="cd-d">02</span><span className="lbl">Days</span></div>
        <span className="time-sep">:</span>
        <div className="time-unit"><span className="num" id="cd-h">14</span><span className="lbl">Hrs</span></div>
        <span className="time-sep">:</span>
        <div className="time-unit"><span className="num" id="cd-m">32</span><span className="lbl">Min</span></div>
        <span className="time-sep">:</span>
        <div className="time-unit"><span className="num" id="cd-s">08</span><span className="lbl">Sec</span></div>
      </div>
    </div>
  </div>

  <div className="hero-right">
    <Link href="/v2/auctions/2">
      <img className="hero-img" src="/images/cars/benz/hero.jpg" alt="2017 Mercedes-Benz GLE 350" loading="eager" />
      <div className="hero-right-overlay">
        <p className="hero-badge-label">Current Top Bid</p>
        <p className="hero-badge-val" id="hero-bid">$7,900</p>
        <p className="hero-badge-sub">2017 Mercedes-Benz GLE 350</p>
      </div>
    </Link>
  </div>
</section>


<div className="stats-bar">
  <div className="stat-item reveal">
    <span className="stat-icon">🏎️</span>
    <div>
      <span className="stat-num count-up" data-target="12400">0</span>
      <span className="stat-label">Vehicles Auctioned</span>
    </div>
  </div>
  <div className="stat-divider"></div>
  <div className="stat-item reveal reveal-delay-1">
    <span className="stat-icon">🌍</span>
    <div>
      <span className="stat-num">US &amp; UK</span>
      <span className="stat-label">Licensed Markets</span>
    </div>
  </div>
  <div className="stat-divider"></div>
  <div className="stat-item reveal reveal-delay-2">
    <span className="stat-icon">⭐</span>
    <div>
      <span className="stat-num">4.9/5</span>
      <span className="stat-label">Seller Rating</span>
    </div>
  </div>
  <div className="stat-divider"></div>
  <div className="stat-item reveal reveal-delay-3">
    <span className="stat-icon">💰</span>
    <div>
      <span className="stat-num">$ / £</span>
      <span className="stat-label">Dual Currency</span>
    </div>
  </div>
  <div className="stat-divider"></div>
  <div className="stat-item reveal reveal-delay-4">
    <span className="stat-icon">🔒</span>
    <div>
      <span className="stat-num">100%</span>
      <span className="stat-label">Secure Escrow</span>
    </div>
  </div>
</div>


<section className="auctions-section" id="auctions">
  <div className="auctions-header reveal">
    <div>
      <p className="section-eyebrow">Bidding Now</p>
      <h2 className="section-title">Live <em>Auctions</em></h2>
    </div>
    <div className="currency-toggle">
      <button className="currency-btn active" >$ USD</button>
      <button className="currency-btn" >£ GBP</button>
    </div>
  </div>

  <div className="cars-grid">
    
    <div className="car-card reveal">
      <Link href="/v2/auctions/2" className="car-img-wrap block">
        <img className="car-img" src="/images/cars/benz/hero.jpg" alt="Mercedes-Benz GLE 350" loading="lazy" />
        <span className="car-badge" style={{ background: "#b45309" }}>⭐ Premium</span>
        <span className="car-location-badge">📍 Los Angeles, CA</span>
      </Link>
      <div className="car-info">
        <p className="car-year">2017</p>
        <Link href="/v2/auctions/2"><h3 className="car-name">Mercedes-Benz GLE 350</h3></Link>
        <div className="car-meta">
          <span>🛣️ 157,045 mi</span>
          <span>⚙️ 4MATIC</span>
          <span>🎨 Gray Leather</span>
        </div>
        <div className="car-bid-row">
          <div className="bid-info">
            <span className="bid-label">Current Bid</span>
            <span className="bid-amount price" data-usd="$7,900" data-gbp="£6,250">$7,900</span>
          </div>
          <span className="bid-timer">Ends in 3h 12m</span>
          <Link href="/v2/auctions/2" className="bid-btn text-center">Place Bid →</Link>
        </div>
      </div>
    </div>
    
    <div className="car-card reveal reveal-delay-1">
      <Link href="/v2/auctions/1" className="car-img-wrap block">
        <img className="car-img" src="/images/cars/highlander/hero.jpg" alt="Toyota Highlander" loading="lazy" />
        <span className="car-badge">⚡ Featured</span>
        <span className="car-location-badge">📍 Miami, FL</span>
      </Link>
      <div className="car-info">
        <p className="car-year">2016</p>
        <Link href="/v2/auctions/1"><h3 className="car-name">Toyota Highlander XLE</h3></Link>
        <div className="car-meta">
          <span>🛣️ 173,434 mi</span>
          <span>⚙️ Auto</span>
          <span>🎨 White/Tan</span>
        </div>
        <div className="car-bid-row">
          <div className="bid-info">
            <span className="bid-label">Current Bid</span>
            <span className="bid-amount price" data-usd="$6,495" data-gbp="£5,150">$6,495</span>
          </div>
          <span className="bid-timer">Ends in 2d 4h</span>
          <Link href="/v2/auctions/1" className="bid-btn text-center">Place Bid →</Link>
        </div>
      </div>
    </div>

    
    {/* Land Rover Restored */}
    <div className="car-card reveal reveal-delay-2">
      <Link href="/v2/auctions/4" className="car-img-wrap block">
        <img className="car-img" src="/images/cars/landrover/hero.jpg" alt="Land Rover Discovery" loading="lazy" />
        <span className="car-badge" style={{ background: "#1d4ed8" }}>🇬🇧 UK Listing</span>
        <span className="car-location-badge">📍 London, UK</span>
      </Link>
      <div className="car-info">
        <p className="car-year">2017</p>
        <Link href="/v2/auctions/4"><h3 className="car-name">Land Rover Discovery Sport</h3></Link>
        <div className="car-meta">
          <span>🛣️ 178,096 mi</span>
          <span>⚙️ HSE Edition</span>
          <span>🎨 Red</span>
        </div>
        <div className="car-bid-row">
          <div className="bid-info">
            <span className="bid-label">Current Bid</span>
            <span className="bid-amount price" data-usd="$2,800" data-gbp="£2,200">$2,800</span>
          </div>
          <span className="bid-timer">Ends in 4d 2h</span>
          <Link href="/v2/auctions/4" className="bid-btn text-center">Place Bid →</Link>
        </div>
      </div>
    </div>

    
    <div className="car-card reveal reveal-delay-3">
      <Link href="/v2/auctions/3" className="car-img-wrap block">
        <img className="car-img" src="/images/cars/ford/hero.jpg" alt="Ford F-150" loading="lazy" />
        <span className="car-badge" style={{ background: "#166534" }}>🏁 No Reserve</span>
        <span className="car-location-badge">📍 Austin, TX</span>
      </Link>
      <div className="car-info">
        <p className="car-year">2018</p>
        <Link href="/v2/auctions/3"><h3 className="car-name">Ford F-150 XLT</h3></Link>
        <div className="car-meta">
          <span>🛣️ 243,925 mi</span>
          <span>⚙️ Crew Cab</span>
          <span>🎨 Black</span>
        </div>
        <div className="car-bid-row">
          <div className="bid-info">
            <span className="bid-label">Current Bid</span>
            <span className="bid-amount price" data-usd="$5,695" data-gbp="£4,500">$5,695</span>
          </div>
          <span className="bid-timer">Ends in 1d 18h</span>
          <Link href="/v2/auctions/3" className="bid-btn text-center">Place Bid →</Link>
        </div>
      </div>
    </div>
  </div>
</section>


<div className="ticker-bar">
  <div className="ticker-track" id="ticker">
    <div className="ticker-item"><span className="ticker-car">2018 Aston Martin DB11</span><span className="ticker-dot">·</span><span className="ticker-price">$112,000</span><span className="ticker-dot">·</span><span>Nashville, TN</span></div>
    <div className="ticker-item"><span className="ticker-car">2017 Ferrari 488 GTB</span><span className="ticker-dot">·</span><span className="ticker-price">£198,500</span><span className="ticker-dot">·</span><span>Edinburgh, UK</span></div>
    <div className="ticker-item"><span className="ticker-car">2022 Lamborghini Huracán</span><span className="ticker-dot">·</span><span className="ticker-price">$241,000</span><span className="ticker-dot">·</span><span>Los Angeles, CA</span></div>
    <div className="ticker-item"><span className="ticker-car">2016 Bentley Continental GT</span><span className="ticker-dot">·</span><span className="ticker-price">£84,200</span><span className="ticker-dot">·</span><span>Manchester, UK</span></div>
    <div className="ticker-item"><span className="ticker-car">2020 Dodge Challenger SRT</span><span className="ticker-dot">·</span><span className="ticker-price">$58,400</span><span className="ticker-dot">·</span><span>Dallas, TX</span></div>
    <div className="ticker-item"><span className="ticker-car">2019 McLaren 720S</span><span className="ticker-dot">·</span><span className="ticker-price">£189,000</span><span className="ticker-dot">·</span><span>London, UK</span></div>
    
    <div className="ticker-item"><span className="ticker-car">2018 Aston Martin DB11</span><span className="ticker-dot">·</span><span className="ticker-price">$112,000</span><span className="ticker-dot">·</span><span>Nashville, TN</span></div>
    <div className="ticker-item"><span className="ticker-car">2017 Ferrari 488 GTB</span><span className="ticker-dot">·</span><span className="ticker-price">£198,500</span><span className="ticker-dot">·</span><span>Edinburgh, UK</span></div>
    <div className="ticker-item"><span className="ticker-car">2022 Lamborghini Huracán</span><span className="ticker-dot">·</span><span className="ticker-price">$241,000</span><span className="ticker-dot">·</span><span>Los Angeles, CA</span></div>
    <div className="ticker-item"><span className="ticker-car">2016 Bentley Continental GT</span><span className="ticker-dot">·</span><span className="ticker-price">£84,200</span><span className="ticker-dot">·</span><span>Manchester, UK</span></div>
    <div className="ticker-item"><span className="ticker-car">2020 Dodge Challenger SRT</span><span className="ticker-dot">·</span><span className="ticker-price">$58,400</span><span className="ticker-dot">·</span><span>Dallas, TX</span></div>
    <div className="ticker-item"><span className="ticker-car">2019 McLaren 720S</span><span className="ticker-dot">·</span><span className="ticker-price">£189,000</span><span className="ticker-dot">·</span><span>London, UK</span></div>
  </div>
</div>


<section className="how-section" id="how">
  <div className="how-header reveal">
    <p className="section-eyebrow">Simple &amp; Transparent</p>
    <h2 className="section-title">How <em>It Works</em></h2>
  </div>

  <div className="how-tabs reveal">
    <button className="how-tab active" >For Buyers</button>
    <button className="how-tab" >For Sellers</button>
  </div>

  <div className="how-steps active" id="buyer-steps">
    <div className="how-step reveal">
      <span className="step-num">01</span>
      <span className="step-icon">📋</span>
      <h3 className="step-title">Register Free</h3>
      <p className="step-desc">Create your MotorLot account in under 2 minutes. Verify your identity once and you're cleared to bid on any listing across US &amp; UK.</p>
    </div>
    <div className="how-step reveal reveal-delay-1">
      <span className="step-num">02</span>
      <span className="step-icon">🔍</span>
      <h3 className="step-title">Find Your Car</h3>
      <p className="step-desc">Browse hundreds of inspected, photographed vehicles. Filter by make, model, location, mileage, and price. Every listing includes a full condition report.</p>
    </div>
    <div className="how-step reveal reveal-delay-2">
      <span className="step-num">03</span>
      <span className="step-icon">🔨</span>
      <h3 className="step-title">Bid &amp; Win</h3>
      <p className="step-desc">Place your bid with confidence. Set a maximum bid and let our system work for you. Real-time alerts keep you in the race.</p>
    </div>
    <div className="how-step reveal reveal-delay-3">
      <span className="step-num">04</span>
      <span className="step-icon">🚗</span>
      <h3 className="step-title">Drive Away</h3>
      <p className="step-desc">Secure payment via escrow. Arrange collection or delivery across US and UK. Full title transfer handled end-to-end by our team.</p>
    </div>
  </div>

  <div className="how-steps" id="seller-steps">
    <div className="how-step reveal">
      <span className="step-num">01</span>
      <span className="step-icon">📸</span>
      <h3 className="step-title">Submit Your Car</h3>
      <p className="step-desc">Fill out our quick listing form with your car's details. Upload photos or book one of our local inspection agents — we come to you.</p>
    </div>
    <div className="how-step reveal reveal-delay-1">
      <span className="step-num">02</span>
      <span className="step-icon">✅</span>
      <h3 className="step-title">Get Approved</h3>
      <p className="step-desc">Our editorial team reviews every listing for quality and accuracy. We'll suggest the optimal reserve price and auction window based on live market data.</p>
    </div>
    <div className="how-step reveal reveal-delay-2">
      <span className="step-num">03</span>
      <span className="step-icon">📈</span>
      <h3 className="step-title">Watch Bids Rise</h3>
      <p className="step-desc">Your listing goes live to thousands of verified buyers across both markets. Track bids in real time from your dashboard.</p>
    </div>
    <div className="how-step reveal reveal-delay-3">
      <span className="step-num">04</span>
      <span className="step-icon">💷</span>
      <h3 className="step-title">Get Paid Fast</h3>
      <p className="step-desc">Funds are released from escrow to your account within 48 hours of the winning bid. No chasing. No waiting. Just money.</p>
    </div>
  </div>
</section>


<div className="markets-section" id="markets">
  <div className="market-panel us reveal">
    <span className="market-flag">🇺🇸</span>
    <h2 className="market-title">United States</h2>
    <p className="market-sub">Licensed · All 50 States</p>
    <ul className="market-points">
      <li>NAAA Certified — industry's highest standards</li>
      <li>Coast-to-coast vehicle transport network</li>
      <li>Instant title transfer in all 50 states</li>
      <li>USD escrow via FDIC-insured accounts</li>
      <li>DMV coordination handled for you</li>
    </ul>
    <span className="market-stat count-up" data-target="7400">0</span>
    <span className="market-stat-label">US vehicles sold in 2024</span>
  </div>
  <div className="market-panel uk reveal">
    <span className="market-flag">🇬🇧</span>
    <h2 className="market-title">United Kingdom</h2>
    <p className="market-sub">FCA Registered · England, Scotland, Wales</p>
    <ul className="market-points">
      <li>FCA Registered — fully regulated and compliant</li>
      <li>BCA Network partner for logistics and transport</li>
      <li>DVLA &amp; V5C transfer managed end-to-end</li>
      <li>GBP escrow with Barclays Trust</li>
      <li>MOT and HPI checks included with every listing</li>
    </ul>
    <span className="market-stat count-up" data-target="5000">0</span>
    <span className="market-stat-label">UK vehicles sold in 2024</span>
  </div>
</div>


<section className="testi-section">
  <div className="testi-header reveal">
    <div>
      <p className="section-eyebrow">Real People. Real Results.</p>
      <h2 className="section-title" style={{ color: "var(--white)" }}>They Bid. They Won.<br /><em>They Drove Away Happy.</em></h2>
    </div>
  </div>
  <div className="testi-grid">
    <div className="testi-card reveal">
      <span className="testi-stars">★★★★★</span>
      <p className="testi-quote">"Bought a pristine 911 in London without leaving Dallas. The whole process took less than a week. The escrow system gave me complete peace of mind."</p>
      <div className="testi-author">
        <div className="testi-avatar">🧑</div>
        <div>
          <p className="testi-name">Marcus J.</p>
          <p className="testi-meta">🇺🇸 Dallas, Texas</p>
          <span className="testi-car">2020 Porsche 911 Carrera S</span>
        </div>
      </div>
    </div>
    <div className="testi-card reveal reveal-delay-1">
      <span className="testi-stars">★★★★★</span>
      <p className="testi-quote">"Sold my Bentley for £12,000 more than the dealer offered. The whole process was dignified — exactly what you'd want for a car like that."</p>
      <div className="testi-author">
        <div className="testi-avatar">👩</div>
        <div>
          <p className="testi-name">Claire H.</p>
          <p className="testi-meta">🇬🇧 Edinburgh, Scotland</p>
          <span className="testi-car">2016 Bentley Continental GT</span>
        </div>
      </div>
    </div>
    <div className="testi-card reveal reveal-delay-2">
      <span className="testi-stars">★★★★★</span>
      <p className="testi-quote">"I listed my Mustang on a Tuesday, had 47 bids by Thursday, and it closed at $18k above reserve. I'll never sell a car any other way."</p>
      <div className="testi-author">
        <div className="testi-avatar">🧔</div>
        <div>
          <p className="testi-name">Ray T.</p>
          <p className="testi-meta">🇺🇸 Nashville, Tennessee</p>
          <span className="testi-car">1967 Ford Mustang Fastback</span>
        </div>
      </div>
    </div>
  </div>
</section>


<div className="sell-band" id="sell">
  <div>
    <h2 className="sell-band-title">Got a Car<br />Worth <em>Auctioning?</em></h2>
    <p className="sell-band-sub">Get a free valuation in 60 seconds. No obligation, no commitment. We'll tell you exactly what your car is worth in today's market.</p>
  </div>
  <div>
    <div className="sell-form">
      <div className="sell-input-row">
        <input className="sell-input" type="text" placeholder="Year · Make · Model (e.g. 2019 BMW M3)" />
        <button className="sell-btn">Get Valuation →</button>
      </div>
      <p className="sell-trust">Free valuation &nbsp;·&nbsp; No obligation &nbsp;·&nbsp; 5,000+ sellers trust us</p>
    </div>
  </div>
</div>


<section className="faq-section" id="faq">
  <div className="faq-layout">
    <div>
      <p className="section-eyebrow reveal">Questions</p>
      <h2 className="section-title reveal">Everything<br />You Need<br />to <em>Know</em></h2>
      <p style={{ marginTop: "24px", fontSize: "0.88rem", color: "var(--mid-grey)", fontWeight: "300", lineHeight: "1.7" }} className="reveal">Can't find your answer? Our team is available 7 days a week via live chat and email.</p>
      <a href="mailto:support@motorlot.com" className="btn btn-outline reveal" style={{ marginTop: "28px", display: "inline-block" }}>Contact Support</a>
    </div>
    <div className="faq-list reveal">
      <div className="faq-item">
        <button className="faq-q" >How do I register to bid?<span className="faq-icon">+</span></button>
        <p className="faq-a">Registration is free and takes under 2 minutes. Create an account, verify your email, and upload a government-issued ID. Once approved — usually within the hour — you're cleared to bid on any listing across both US and UK markets.</p>
      </div>
      <div className="faq-item">
        <button className="faq-q" >Are there buyer's fees?<span className="faq-icon">+</span></button>
        <p className="faq-a">Yes, a buyer's premium of 4.5% applies to the final hammer price, capped at $4,500 / £3,500. This is the only fee. No surprises at checkout. Sellers pay a flat 2% success fee — zero upfront listing costs.</p>
      </div>
      <div className="faq-item">
        <button className="faq-q" >How does shipping and collection work?<span className="faq-icon">+</span></button>
        <p className="faq-a">For US buyers, we work with Montway and uShip for nationwide delivery. For UK buyers, we use our BCA logistics network. International shipping between US and UK is available via our approved freight partners. All arrangements are coordinated through your MotorLot dashboard.</p>
      </div>
      <div className="faq-item">
        <button className="faq-q" >When do I receive my car after winning?<span className="faq-icon">+</span></button>
        <p className="faq-a">Payment is processed through our secure escrow within 48 hours of the auction closing. Domestic delivery typically takes 3–7 days. Transatlantic shipping is 3–5 weeks. You'll receive live tracking updates throughout.</p>
      </div>
      <div className="faq-item">
        <button className="faq-q" >Can I list classic and modern cars?<span className="faq-icon">+</span></button>
        <p className="faq-a">Absolutely. We auction everything from pre-war classics and muscle cars to modern sports cars and luxury saloons. Our only requirement is that the vehicle is legally titled, roadworthy (or disclosed as a project), and passes our editorial review.</p>
      </div>
      <div className="faq-item">
        <button className="faq-q" >What if I'm not happy with the final bid?<span className="faq-icon">+</span></button>
        <p className="faq-a">As a seller, you can set a reserve price. If bidding doesn't reach your reserve, you're under no obligation to sell. You can relist for free within 30 days. Our team will advise on the optimal reserve based on live market comparables.</p>
      </div>
    </div>
  </div>
</section>


<FooterV2 />


    </>
  );
}
