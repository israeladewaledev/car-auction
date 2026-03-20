"use client";

import { useParams } from "next/navigation";
import NavbarV1 from "@/components/v1/Navbar";
import FooterV1 from "@/components/v1/Footer";
import { useState } from "react";

const carsData = {
  "1": {
    name: "2016 Toyota Highlander XLE",
    price: "$6,495",
    mileage: "173,434 mi",
    engine: "3.5L V6",
    trans: "Automatic",
    drivetrain: "AWD",
    exterior: "White",
    interior: "Tan Leather",
    location: "Miami, FL",
    highlights: [
      "Well-maintained XLE trim with premium leather interior",
      "Reliable 3.5-liter V6 engine producing 270 horsepower",
      "Comprehensive All-Wheel Drive system for all-weather capability",
      "Spacious 7-passenger seating configuration with heated front seats"
    ],
    galleryPath: "/images/cars/highlander/gallery/",
    imageCount: 15
  },
  "2": {
    name: "2017 Mercedes-Benz GLE 350",
    price: "$7,900",
    mileage: "157,045 mi",
    engine: "3.5L V6",
    trans: "7-Speed Automatic",
    drivetrain: "4MATIC AWD",
    exterior: "Gray Metalic",
    interior: "Black Premium Leather",
    location: "Los Angeles, CA",
    highlights: [
      "Elegant Mercedes-Benz engineering with 4MATIC performance",
      "Advanced safety features including Blind Spot Assist",
      "Premium Harman Kardon Logic7 Surround Sound system",
      "Full service history with recent brake and fluid maintenance"
    ],
    galleryPath: "/images/cars/benz/gallery/",
    imageCount: 15
  },
  "3": {
    name: "2018 Ford F-150 XLT",
    price: "$5,695",
    mileage: "243,925 mi",
    engine: "2.7L V6 EcoBoost",
    trans: "10-Speed Automatic",
    drivetrain: "4WD",
    exterior: "Agate Black",
    interior: "Gray Cloth",
    location: "Austin, TX",
    highlights: [
      "Capable 4x4 drivetrain with Electronic Locking Rear Axle",
      "EcoBoost technology for optimized towing and fuel efficiency",
      "SuperCrew configuration with extensive cabin storage",
      "SYNC 3 infotainment system with Apple CarPlay & Android Auto"
    ],
    galleryPath: "/images/cars/ford/gallery/",
    imageCount: 15
  },
  "4": {
    name: "2017 Land Rover Discovery Sport HSE",
    price: "$2,800",
    mileage: "178,096 mi",
    engine: "2.0L Turbocharged I4",
    trans: "9-Speed Automatic",
    drivetrain: "AWD",
    exterior: "Firenze Red",
    interior: "Ebony Leather",
    location: "London, UK",
    highlights: [
      "Stunning Firenze Red metallic finish with HSE luxury trim",
      "Panoramic moonroof and premium Meridian audio system",
      "Terrain Response system for ultimate off-road confidence",
      "Exceptional value for a modern luxury SUV"
    ],
    galleryPath: "/images/cars/landrover/gallery/",
    imageCount: 15
  }
};

export default function LotDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const car = carsData[id as keyof typeof carsData];
  const [activeImg, setActiveImg] = useState(1);

  if (!car) return <div className="min-h-screen pt-40 text-center">Lot not found</div>;

  return (
    <>
      <NavbarV1 />
      <main className="bg-[#fcf9f8] min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="max-w-7xl mx-auto mb-16">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
              <div>
                <span className="text-primary-container font-bold text-[11px] uppercase tracking-[0.4em] mb-4 block">Lot #45144 • Active Auction</span>
                <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl">{car.name}</h1>
              </div>
              <div className="flex gap-12 border-l border-outline-variant/30 pl-8 pb-3">
                <div>
                  <span className="text-[10px] uppercase font-bold opacity-40 block mb-1">Time Left</span>
                  <span className="text-2xl font-headline italic">2d 04h</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold opacity-40 block mb-1">Current Bid</span>
                  <span className="text-2xl font-headline text-primary-container">{car.price}</span>
                </div>
              </div>
            </div>

            {/* Main Hero Mosaic */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[500px] md:h-[700px]">
              <div className="lg:col-span-8 overflow-hidden bg-surface-container relative group">
                <img 
                  src={`${car.galleryPath}${activeImg}.jpg`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt={car.name} 
                />
                <div className="absolute bottom-10 left-10 bg-black/50 backdrop-blur-xl text-white px-6 py-3 text-[10px] font-bold uppercase tracking-widest">
                   Photo {activeImg} of {car.imageCount}
                </div>
              </div>
              <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-6">
                <div className="overflow-hidden bg-surface-container cursor-pointer" onClick={() => setActiveImg(2)}>
                  <img src={`${car.galleryPath}2.jpg`} className="w-full h-full object-cover hover:opacity-80 transition-opacity" alt="Interior Detail" />
                </div>
                <div className="overflow-hidden bg-surface-container cursor-pointer relative" onClick={() => setActiveImg(3)}>
                  <img src={`${car.galleryPath}3.jpg`} className="w-full h-full object-cover hover:opacity-80 transition-opacity" alt="Engine Detail" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-[10px] font-bold uppercase tracking-widest pointer-events-none">
                    View More +12
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Left Content */}
            <div className="lg:col-span-8">
              {/* Highlights Section */}
              <section className="mb-20">
                <h2 className="font-headline text-4xl mb-12 border-b border-primary-container/10 pb-6">The Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <ul className="space-y-6">
                    {car.highlights.map((h, i) => (
                      <li key={i} className="flex gap-4 text-on-surface-variant leading-relaxed">
                        <span className="material-symbols-outlined text-primary-container text-sm mt-1">check_circle</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-black/5">
                     <table className="w-full text-sm">
                        <tbody className="divide-y divide-black/5">
                           <tr><td className="py-3 font-bold uppercase tracking-widest text-[9px] opacity-40">Millage</td><td className="py-3 text-right">{car.mileage}</td></tr>
                           <tr><td className="py-3 font-bold uppercase tracking-widest text-[9px] opacity-40">Engine</td><td className="py-3 text-right">{car.engine}</td></tr>
                           <tr><td className="py-3 font-bold uppercase tracking-widest text-[9px] opacity-40">Exterior</td><td className="py-3 text-right">{car.exterior}</td></tr>
                           <tr><td className="py-3 font-bold uppercase tracking-widest text-[9px] opacity-40">Interior</td><td className="py-3 text-right">{car.interior}</td></tr>
                        </tbody>
                     </table>
                  </div>
                </div>
              </section>

              {/* Full Gallery Masonry */}
              <section className="mb-20">
                <h2 className="font-headline text-4xl mb-12 border-b border-primary-container/10 pb-6">Image Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {Array.from({ length: car.imageCount }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`overflow-hidden bg-surface-container cursor-pointer transition-transform hover:scale-[1.02] ${i % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                      onClick={() => {
                        setActiveImg(i + 1);
                        window.scrollTo({ top: 300, behavior: 'smooth' });
                      }}
                    >
                      <img 
                        src={`${car.galleryPath}${i + 1}.jpg`} 
                        className="w-full h-full object-cover" 
                        alt={`${car.name} View ${i + 1}`} 
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Sidebar: Sticky Bidding */}
            <div className="lg:col-span-4">
              <div className="sticky top-40 space-y-8">
                <div className="bg-primary-container p-10 text-on-primary rounded-2xl shadow-2xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-8 opacity-10">
                      <span className="material-symbols-outlined text-[10rem]">gavel</span>
                   </div>
                   <div className="relative z-10">
                      <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-60 mb-4 block">Bid On This Lot</span>
                      <div className="flex justify-between items-baseline mb-10">
                         <span className="text-5xl font-headline">{car.price}</span>
                         <span className="text-[11px] font-bold uppercase tracking-widest opacity-60 mt-1">Current High Bid</span>
                      </div>
                      <div className="space-y-4 mb-8">
                         <input 
                           type="text" 
                           placeholder="Enter your bid..." 
                           className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/30 focus:ring-0 focus:border-white py-5 px-6 font-headline tracking-widest text-2xl"
                         />
                         <p className="text-[10px] text-center opacity-40 italic">Minimum bid increment: $500</p>
                      </div>
                      <button className="w-full bg-white text-primary-container py-5 text-[11px] font-bold uppercase tracking-[0.4em] hover:scale-105 transition-transform shadow-xl">Place Your Bid Now</button>
                   </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm">
                  <h4 className="font-headline text-xl mb-6">Recent Bidding History</h4>
                  <div className="space-y-6">
                    {[1, 2, 3].map((b) => (
                      <div key={b} className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-[10px] font-bold">JD</div>
                           <div>
                              <p className="font-bold">Collector_92</p>
                              <p className="text-[10px] opacity-40 uppercase tracking-widest">2h 15m ago</p>
                           </div>
                        </div>
                        <span className="font-headline text-lg">$6,400</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-8 text-[10px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">View All 14 Bids</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterV1 />
    </>
  );
}
