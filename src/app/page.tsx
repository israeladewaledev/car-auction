"use client";

import { useEffect, useState } from "react";

import NavbarV1 from "@/components/v1/Navbar";
import FooterV1 from "@/components/v1/Footer";
import Link from "next/link";

export default function LandingPage1() {
  return (
    <>
      <div className="fixed inset-0 grain-overlay opacity-[0.03] z-[100]"></div>
      <NavbarV1 />

      <main>
        {/* Hero Section: Editorial Asymmetric Grid */}
        <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden">
          <div className="relative h-[80vh] flex items-center overflow-hidden bg-black">
          <img src="/images/cars/landrover/hero.jpg" className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] opacity-70" alt="Discovery Sport"/>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#fcf9f8] via-[#fcf9f8]/20 to-transparent"></div>
          </div>
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="max-w-4xl">
              <span className="text-primary-container font-bold text-[11px] uppercase tracking-[0.4em] mb-8 block">Est. 1994 • Curated Collection</span>
              <h1 className="font-headline text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] text-on-surface mb-8">
                Automotive <br/>
                <span className="italic font-normal pl-20 lg:pl-40">Excellence</span> <br/>
                Redefined.
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mt-16">
                <div className="space-y-8">
                  <p className="text-xl md:text-2xl text-on-surface-variant font-light leading-relaxed max-w-md text-justify-editorial">
                    The world’s most transparent marketplace for vintage, classic, and prestige automobiles. Curated by experts, trusted by enthusiasts.
                  </p>
                  <div className="flex items-center gap-8">
                    <button className="bg-primary-container text-on-primary px-12 py-5 text-[11px] uppercase tracking-[0.3em] font-bold flex items-center gap-4 hover:translate-y-[-4px] transition-transform duration-300">
                      Explore Auctions 
                      <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
                    </button>
                    <div className="hidden sm:block">
                      <div className="flex gap-1 mb-1">
                        <span className="material-symbols-outlined text-tertiary-container text-xs" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined text-tertiary-container text-xs" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined text-tertiary-container text-xs" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined text-tertiary-container text-xs" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined text-tertiary-container text-xs" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                      </div>
                      <span className="text-[9px] uppercase tracking-[0.2em] font-bold opacity-40">Rated 4.9/5 by Collectors</span>
                    </div>
                  </div>
                </div>
                {/* Live Countdown Card */}
                <div className="bg-white/80 backdrop-blur-2xl p-10 border-l-[6px] border-primary-container shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                    <img src="/images/cars/highlander/hero.jpg" className="w-full h-full object-cover" alt="Highlander bg"/>
                  </div>
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-10">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-primary-container mb-2 block">Current Lot #45144</span>
                        <h3 className="font-headline text-3xl">2016 Toyota Highlander XLE</h3>
                      </div>
                      <div className="px-3 py-1 bg-primary-container/10 text-primary-container text-[9px] font-bold uppercase tracking-widest">Ending Soon</div>
                    </div>
                    <div className="flex gap-6 mb-12">
                      <div className="text-left">
                        <div className="text-4xl font-headline italic">02</div>
                        <div className="text-[9px] uppercase tracking-[0.1em] opacity-40 font-bold">Days</div>
                      </div>
                      <div className="text-left">
                        <div className="text-4xl font-headline italic">04</div>
                        <div className="text-[9px] uppercase tracking-[0.1em] opacity-40 font-bold">Hrs</div>
                      </div>
                      <div className="text-left">
                        <div className="text-4xl font-headline italic">32</div>
                        <div className="text-[9px] uppercase tracking-[0.1em] opacity-40 font-bold">Min</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-8">
                      <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-50">Current Bid</span>
                      <span className="text-3xl font-headline text-primary-container">$6,495</span>
                    </div>
                    <Link href="/auctions/1" className="w-full border-2 border-primary-container py-4 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-primary-container hover:text-white transition-all text-center block">Place Your Bid</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Trust Signals: Refined Horizontal Strip */}
        <section className="border-y border-outline-variant/30 py-16 bg-white overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-wrap justify-between items-center gap-12 lg:gap-4">
              <div className="flex flex-col">
                <span className="text-4xl font-headline text-primary-container mb-1 leading-none">12,400+</span>
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold opacity-40">Vehicles Sold Globally</span>
              </div>
              <div className="h-10 w-px bg-outline-variant/30 hidden lg:block"></div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary-container scale-125">verified_user</span>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest block">Licensed &amp; Bonded</span>
                  <span className="text-[9px] uppercase tracking-[0.2em] opacity-40 font-bold">US &amp; UK Operations</span>
                </div>
              </div>
              <div className="h-10 w-px bg-outline-variant/30 hidden lg:block"></div>
              <div className="flex flex-col">
                <span className="text-4xl font-headline text-primary-container mb-1 leading-none">4.9/5</span>
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold opacity-40">Trustpilot Rating</span>
              </div>
              <div className="h-10 w-px bg-outline-variant/30 hidden lg:block"></div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary-container scale-125">currency_exchange</span>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest block">Dual-Currency</span>
                  <span className="text-[9px] uppercase tracking-[0.2em] opacity-40 font-bold">Seamless USD/GBP</span>
                </div>
              </div>
              <div className="h-10 w-px bg-outline-variant/30 hidden lg:block"></div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary-container scale-125">lock</span>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest block">Secure Escrow</span>
                  <span className="text-[9px] uppercase tracking-[0.2em] opacity-40 font-bold">Protected Transacting</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Featured Auctions: Large Magazine Cards */}
        <section className="py-32 bg-[#fcf9f8]">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 border-b border-primary-container/10 pb-12">
              <div>
                <h2 className="font-headline text-6xl md:text-7xl mb-6">Live <span className="italic font-normal">Catalogue</span></h2>
                <p className="text-on-surface-variant tracking-wide max-w-lg">Hand-picked automotive investments currently accepting final bids.</p>
              </div>
              <div className="mt-8 md:mt-0 flex gap-12">
                <button className="text-[10px] uppercase font-bold tracking-[0.3em] text-primary-container border-b-2 border-primary-container pb-2">USA Market</button>
                <button className="text-[10px] uppercase font-bold tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity pb-2">UK Market</button>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">
              {/* High-end Listing 1 */}
              <div className="group relative">
                <Link href={`/auctions/${1}`} className="aspect-[16/10] overflow-hidden mb-12 bg-surface-container block">
                  <img alt="2016 Toyota Highlander" className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s]" src="/images/cars/highlander/hero.jpg"/>
                  <div className="absolute top-8 left-8 bg-primary-container text-white px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em]">02d 04h Remaining</div>
                </Link>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  <div className="md:col-span-8">
                    <Link href={`/auctions/${1}`} className="hover:underline">
                      <h3 className="font-headline text-4xl mb-6 group-hover:italic transition-all">2016 Toyota Highlander XLE</h3>
                    </Link>
                    <div className="flex flex-wrap gap-x-8 gap-y-4 opacity-50">
                      <div className="text-[10px] uppercase font-bold tracking-widest">Mileage: 173,434 mi</div>
                      <div className="text-[10px] uppercase font-bold tracking-widest">Location: Miami, FL</div>
                      <div className="text-[10px] uppercase font-bold tracking-widest">AWD | 3.5L V6</div>
                    </div>
                  </div>
                  <div className="md:col-span-4 md:text-right flex md:flex-col justify-between items-end">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40 block mb-1">Current Bid</span>
                      <span className="text-3xl font-headline text-primary-container">$6,495</span>
                    </div>
                    <button className="mt-6 w-full md:w-auto px-8 py-3 bg-black text-white text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-primary-container transition-colors">Place Bid</button>
                  </div>
                </div>
              </div>
              {/* High-end Listing 2 */}
              <div className="group relative mt-12 lg:mt-32">
                <Link href={`/auctions/${3}`} className="aspect-[16/10] overflow-hidden mb-12 bg-surface-container block">
                  <img alt="2018 Ford F-150" className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s]" src="/images/cars/ford/hero.jpg"/>
                  <div className="absolute top-8 left-8 bg-primary-container text-white px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em]">01d 18h Remaining</div>
                </Link>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  <div className="md:col-span-8">
                    <Link href={`/auctions/${3}`} className="hover:underline">
                      <h3 className="font-headline text-4xl mb-6 group-hover:italic transition-all">2018 Ford F-150 XLT</h3>
                    </Link>
                    <div className="flex flex-wrap gap-x-8 gap-y-4 opacity-50">
                      <div className="text-[10px] uppercase font-bold tracking-widest">Mileage: 243,925 mi</div>
                      <div className="text-[10px] uppercase font-bold tracking-widest">Location: Austin, TX</div>
                      <div className="text-[10px] uppercase font-bold tracking-widest">4WD | Crew Cab</div>
                    </div>
                  </div>
                  <div className="md:col-span-4 md:text-right flex md:flex-col justify-between items-end">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40 block mb-1">Current Bid</span>
                      <span className="text-3xl font-headline text-primary-container">$5,695</span>
                    </div>
                    <button className="mt-6 w-full md:w-auto px-8 py-3 bg-black text-white text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-primary-container transition-colors">Place Bid</button>
                  </div>
                </div>
              </div>
              {/* High-end Listing 3: Centered Breakout */}
              <div className="lg:col-span-2 group relative max-w-5xl mx-auto w-full">
                <Link href={`/auctions/${4}`} className="aspect-[21/9] overflow-hidden mb-12 bg-surface-container block">
                  <img alt="2017 Land Rover Discovery" className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s]" src="/images/cars/landrover/hero.jpg"/>
                  <div className="absolute top-8 left-8 bg-primary-container text-white px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em]">04d 02h Remaining</div>
                </Link>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-8">
                    <Link href={`/auctions/${4}`} className="hover:underline">
                      <h3 className="font-headline text-5xl mb-6 group-hover:italic transition-all">2017 Land Rover Discovery Sport</h3>
                    </Link>
                    <div className="flex flex-wrap gap-x-12 gap-y-4 opacity-50">
                      <div className="text-[11px] uppercase font-bold tracking-widest">London, UK</div>
                      <div className="text-[11px] uppercase font-bold tracking-widest">178,096 mi | HSE Edition</div>
                    </div>
                  </div>
                  <div className="md:col-span-4 md:text-right">
                    <span className="text-[11px] uppercase tracking-[0.3em] font-bold opacity-40 block mb-2">Current Bid</span>
                    <span className="text-5xl font-headline text-primary-container mb-6 block">$2,800</span>
                    <button className="px-12 py-4 bg-primary-container text-white text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-black transition-all">Bid Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-32 text-center">
              <button className="px-16 py-6 border border-primary-container/20 text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-primary-container hover:text-white transition-all">View All Active Auctions</button>
            </div>
          </div>
        </section>
        {/* Process: Editorial Grid with Large Numbers */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col lg:flex-row gap-20 items-start">
              <div className="lg:w-1/3 sticky top-40">
                <span className="text-primary-container font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">Our Methodology</span>
                <h2 className="font-headline text-6xl mb-8 leading-tight">The Seamless <br/><span className="italic font-normal">Process</span></h2>
                <div className="flex flex-col gap-6 border-l border-outline-variant/30 pl-8">
                  <button className="text-[11px] uppercase font-bold tracking-[0.2em] text-primary-container text-left">For Discerning Buyers</button>
                  <button className="text-[11px] uppercase font-bold tracking-[0.2em] opacity-30 hover:opacity-100 transition-opacity text-left">For Professional Sellers</button>
                </div>
              </div>
              <div className="lg:w-2/3 space-y-32">
                <div className="relative group">
                  <span className="absolute -left-16 -top-8 font-headline text-9xl text-primary-container/5 group-hover:text-primary-container/10 transition-colors">01</span>
                  <div className="max-w-xl">
                    <h4 className="text-2xl font-bold mb-6 uppercase tracking-wider">Curation &amp; Verification</h4>
                    <p className="text-xl text-on-surface-variant leading-relaxed font-light text-justify-editorial">
                      Every vehicle on MotorBid undergoes a rigorous 150-point inspection and title verification. We curate only the finest examples of automotive history, ensuring transparency at every stage of the journey.
                    </p>
                  </div>
                </div>
                <div className="relative group pl-12 md:pl-24">
                  <span className="absolute -left-4 -top-8 font-headline text-9xl text-primary-container/5 group-hover:text-primary-container/10 transition-colors">02</span>
                  <div className="max-w-xl">
                    <h4 className="text-2xl font-bold mb-6 uppercase tracking-wider">Transparent Bidding</h4>
                    <p className="text-xl text-on-surface-variant leading-relaxed font-light text-justify-editorial">
                      Real-time bidding with verified funds. Our dual-currency platform allows for seamless transcontinental transactions between the US and UK markets, supported by real-time exchange rates.
                    </p>
                  </div>
                </div>
                <div className="relative group">
                  <span className="absolute -left-16 -top-8 font-headline text-9xl text-primary-container/5 group-hover:text-primary-container/10 transition-colors">03</span>
                  <div className="max-w-xl">
                    <h4 className="text-2xl font-bold mb-6 uppercase tracking-wider">Escrow &amp; Delivery</h4>
                    <p className="text-xl text-on-surface-variant leading-relaxed font-light text-justify-editorial">
                      Secure funds handling through our premium escrow partners. White-glove logistics ensure your acquisition arrives in showroom condition, regardless of the distance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Why Choose Us / Dual Market: Split Asymmetric */}
        <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[800px] border-t border-primary-container/10">
          {/* US Side */}
          <div className="relative p-12 md:p-24 flex flex-col justify-center bg-[#fcf9f8] border-r border-primary-container/5 overflow-hidden group">
            <div className="absolute -right-20 -bottom-20 font-headline text-[30rem] leading-none opacity-[0.02] select-none group-hover:opacity-[0.04] transition-opacity duration-1000">US</div>
            <div className="relative z-10 max-w-lg">
              <div className="flex items-center gap-6 mb-12">
                <div className="w-12 h-12 flex items-center justify-center border border-blue-600/30 rounded-full">
                  <div className="w-8 h-8 rounded-full bg-blue-600 shadow-lg"></div>
                </div>
                <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-on-surface/50">United States Market</span>
              </div>
              <h3 className="font-headline text-5xl md:text-6xl mb-10 leading-tight">American Classics <br/><span className="italic font-normal">&amp; Muscle Heritage</span></h3>
              <p className="text-xl text-on-surface-variant mb-12 font-light leading-relaxed">
                Fully licensed under NAAA regulations with physical hubs in Los Angeles, Miami, and New York. Local escrow and title services guaranteed for all domestic transactions.
              </p>
              <ul className="space-y-6 mb-16">
                <li className="flex items-center gap-4 text-[11px] uppercase tracking-widest font-bold"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> NAAA Certified Inspectors</li>
                <li className="flex items-center gap-4 text-[11px] uppercase tracking-widest font-bold"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> Domestic Enclosed Shipping</li>
                <li className="flex items-center gap-4 text-[11px] uppercase tracking-widest font-bold"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> State Title Expediting</li>
              </ul>
              <a className="inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] font-bold border-b-2 border-primary-container pb-2 hover:gap-8 transition-all" href="#">Explore US Hub</a>
            </div>
          </div>
          {/* UK Side */}
          <div className="relative p-12 md:p-24 flex flex-col justify-center bg-white overflow-hidden group">
            <div className="absolute -right-20 -bottom-20 font-headline text-[30rem] leading-none opacity-[0.02] select-none group-hover:opacity-[0.04] transition-opacity duration-1000">UK</div>
            <div className="relative z-10 max-w-lg">
              <div className="flex items-center gap-6 mb-12">
                <div className="w-12 h-12 flex items-center justify-center border border-red-600/30 rounded-full">
                  <div className="w-8 h-8 rounded-full bg-red-600 shadow-lg"></div>
                </div>
                <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-on-surface/50">United Kingdom Market</span>
              </div>
              <h3 className="font-headline text-5xl md:text-6xl mb-10 leading-tight">European Prestige <br/><span className="italic font-normal">&amp; Heritage Archive</span></h3>
              <p className="text-xl text-on-surface-variant mb-12 font-light leading-relaxed">
                BCA-aligned auditing with heritage specialists based in London and Manchester. VAT-compliant transactions for professional collectors and private estates.
              </p>
              <ul className="space-y-6 mb-16">
                <li className="flex items-center gap-4 text-[11px] uppercase tracking-widest font-bold"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> Heritage Specialist Reports</li>
                <li className="flex items-center gap-4 text-[11px] uppercase tracking-widest font-bold"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> Nationwide Collection</li>
                <li className="flex items-center gap-4 text-[11px] uppercase tracking-widest font-bold"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> Export Documentation</li>
              </ul>
              <a className="inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] font-bold border-b-2 border-primary-container pb-2 hover:gap-8 transition-all" href="#">Explore UK Hub</a>
            </div>
          </div>
        </section>
        {/* Sell Your Car CTA: Bold Typography */}
        <section className="bg-primary-container py-32 px-6 md:px-12 text-on-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 flex items-center justify-center">
            <span className="material-symbols-outlined text-[30rem]">directions_car</span>
          </div>
          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.5em] opacity-50 mb-6 block">Consignment Service</span>
                <h2 className="font-headline text-6xl md:text-7xl mb-10 leading-none">Thinking of <br/><span className="italic font-normal">Selling?</span></h2>
                <p className="text-2xl text-on-primary-container max-w-md font-light">Our global audience of 50,000+ registered bidders ensures you get the true market value for your vehicle.</p>
              </div>
              <div className="space-y-8">
                <div className="relative">
                  <input className="w-full bg-transparent border-0 border-b-2 border-on-primary-container/20 text-on-primary placeholder:text-on-primary-container/40 focus:ring-0 focus:border-on-primary py-8 text-2xl font-headline tracking-wider" placeholder="Make, Model or VIN" type="text"/>
                </div>
                <button className="w-full bg-white text-primary-container px-12 py-8 text-[12px] font-bold uppercase tracking-[0.4em] hover:bg-[#fcf9f8] transition-colors shadow-2xl">Request Professional Valuation</button>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ Section: Editorial Accordion */}
        <section className="py-40 bg-[#fcf9f8]">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-24">
                <span className="text-primary-container font-bold text-[10px] uppercase tracking-[0.5em] mb-4 block">Knowledge Base</span>
                <h2 className="font-headline text-6xl">Common Enquiries</h2>
              </div>
              <div className="space-y-0">
                <div className="border-t border-primary-container/10 py-10 group cursor-pointer hover:bg-white transition-colors px-8">
                  <div className="flex justify-between items-center">
                    <h4 className="text-xl md:text-2xl font-medium tracking-tight">How do I register to bid?</h4>
                    <span className="material-symbols-outlined text-primary-container transition-transform group-hover:rotate-45">add</span>
                  </div>
                </div>
                <div className="border-t border-primary-container/10 py-10 group cursor-pointer hover:bg-white transition-colors px-8">
                  <div className="flex justify-between items-center">
                    <h4 className="text-xl md:text-2xl font-medium tracking-tight">What are the buyer fees?</h4>
                    <span className="material-symbols-outlined text-primary-container transition-transform group-hover:rotate-45">add</span>
                  </div>
                </div>
                <div className="border-t border-primary-container/10 py-10 group cursor-pointer hover:bg-white transition-colors px-8">
                  <div className="flex justify-between items-center">
                    <h4 className="text-xl md:text-2xl font-medium tracking-tight">Do you offer international shipping?</h4>
                    <span className="material-symbols-outlined text-primary-container transition-transform group-hover:rotate-45">add</span>
                  </div>
                </div>
                <div className="border-t border-b border-primary-container/10 py-10 group cursor-pointer hover:bg-white transition-colors px-8">
                  <div className="flex justify-between items-center">
                    <h4 className="text-xl md:text-2xl font-medium tracking-tight">Is the escrow service secure?</h4>
                    <span className="material-symbols-outlined text-primary-container transition-transform group-hover:rotate-45">add</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterV1 />
    </>
  );
}
