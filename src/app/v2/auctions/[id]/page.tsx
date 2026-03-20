"use client";

import { useParams } from "next/navigation";
import NavbarV2 from "@/components/v2/Navbar";
import FooterV2 from "@/components/v2/Footer";
import { useState } from "react";

const carsData = {
  "1": {
    name: "2016 Toyota Highlander XLE",
    priceUSD: 6495,
    priceGBP: 5150,
    mileage: "173,434 mi",
    engine: "3.5L V6",
    trans: "Automatic",
    drivetrain: "AWD",
    exterior: "White",
    interior: "Tan Leather",
    location: "Miami, FL",
    description: "This 2016 Toyota Highlander XLE is a prime example of the brand's commitment to reliability and family comfort. Featuring a 3.5L V6 and AWD, it's ready for any journey.",
    overview: "This 2016 Toyota Highlander XLE is a versatile three-row SUV known for its reliability and composed ride. Finished in Blizzard White Pearl, it features a spacious cabin with seating for eight, a user-friendly infotainment system, and a suite of safety features. This AWD model is powered by the dependable 3.5L V6, making it an ideal companion for both daily commutes and long-distance family travel.",
    mechanicalSpecs: [
      "3.5-liter V6 engine producing 270 horsepower and 248 lb-ft of torque",
      "6-speed automatic transmission with sequential shift mode",
      "All-Wheel Drive with Intelligent Control and Dynamic Torque Control",
      "Independent MacPherson strut front suspension / Double-wishbone rear",
      "18-inch alloy wheels with 245/60R18 tires",
      "Power-assisted ventilated front disc / solid rear disc brakes"
    ],
    galleryPath: "/images/cars/highlander/gallery/",
    imageCount: 15
  },
  "2": {
    name: "2017 Mercedes-Benz GLE 350",
    priceUSD: 7900,
    priceGBP: 6250,
    mileage: "157,045 mi",
    engine: "3.5L V6",
    trans: "7-Speed Automatic",
    drivetrain: "4MATIC AWD",
    exterior: "Gray Metalic",
    interior: "Black Premium Leather",
    location: "Los Angeles, CA",
    description: "The Mercedes-Benz GLE 350 offers a perfect balance of luxury and utility. This unit comes with the 4MATIC system and a well-appointed interior.",
    overview: "The 2017 Mercedes-Benz GLE 350 epitomizes luxury and engineering excellence. Dressed in Selenite Grey, this midsize SUV offers a serene driving experience with its meticulous interior craftsmanship and quiet cabin. Equipped with the P1 Premium package, it includes advanced navigation, Blind Spot Assist, and a high-end Harman/Kardon audio system.",
    mechanicalSpecs: [
      "3.5-liter V6 engine with 302 horsepower and 273 lb-ft of torque",
      "7G-TRONIC 7-speed automatic transmission with paddle shifters",
      "4MATIC Permanent All-Wheel Drive with 4-Wheel Electronic Traction System",
      "AGILITY CONTROL suspension with selective damping system",
      "Direct-steer power steering with variable ratio and weight",
      "Ventilated 4-wheel disc brakes with ABS and Brake Assist (BAS)"
    ],
    galleryPath: "/images/cars/benz/gallery/",
    imageCount: 15
  },
  "3": {
    name: "2018 Ford F-150 XLT",
    priceUSD: 5695,
    priceGBP: 4500,
    mileage: "243,925 mi",
    engine: "2.7L V6 EcoBoost",
    trans: "10-Speed Automatic",
    drivetrain: "4WD",
    exterior: "Agate Black",
    interior: "Gray Cloth",
    location: "Austin, TX",
    description: "A powerhouse on and off the road. This F-150 SuperCrew features the efficient yet powerful 2.7L EcoBoost engine and advanced 4WD capability.",
    overview: "This 2018 Ford F-150 XLT is the definition of a modern workhorse. With the SuperCrew cab configuration, it provides ample room for both passengers and gear. The 2.7L EcoBoost engine delivers surprising fuel efficiency without sacrificing towing capability. Featuring the FX4 Off-Road package, this truck is ready for challenging terrain.",
    mechanicalSpecs: [
      "2.7-liter EcoBoost V6 with 325 horsepower and 400 lb-ft of torque",
      "10-speed SelectShift automatic transmission with progressive range select",
      "Electronic-shift-on-the-fly (ESOF) 4WD with neutral towing capability",
      "Electronic-locking rear differential and heavy-duty gas shocks",
      "Fully boxed high-strength steel frame for maximum durability",
      "Auto Start-Stop Technology for enhanced fuel economy"
    ],
    galleryPath: "/images/cars/ford/gallery/",
    imageCount: 15
  },
  "4": {
    name: "2017 Land Rover Discovery Sport HSE",
    priceUSD: 2800,
    priceGBP: 2200,
    mileage: "178,096 mi",
    engine: "2.0L Turbocharged I4",
    trans: "9-Speed Automatic",
    drivetrain: "AWD",
    exterior: "Firenze Red",
    interior: "Ebony Leather",
    location: "London, UK",
    description: "Combining British heritage with modern performance, this Discovery Sport HSE is a versatile luxury SUV with unmatched style in Firenze Red.",
    overview: "The 2017 Land Rover Discovery Sport HSE combines legendary off-road capability with sharp, contemporary design. Finished in Firenze Red, this HSE trim model features premium Windsor leather, a panoramic glass roof, and Land Rover's Terrain Response system. It's as comfortable on city streets as it is on rocky trails.",
    mechanicalSpecs: [
      "2.0-liter Turbocharged I4 producing 240 horsepower and 250 lb-ft of torque",
      "9-speed automatic transmission with Terrain Response",
      "Terrain Response system (General, Grass/Gravel/Snow, Mud/Ruts, Sand)",
      "Hill Descent Control (HDC) and Progressive Hill Release",
      "Electronic Traction Control (ETC) and Dynamic Stability Control (DSC)",
      "Trailer Stability Assist (TSA) and integrated tow hitch receiver"
    ],
    galleryPath: "/images/cars/landrover/gallery/",
    imageCount: 15
  }
};

export default function V2LotDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const car = carsData[id as keyof typeof carsData];
  const [activeImg, setActiveImg] = useState(1);
  const [currency, setCurrency] = useState<"USD" | "GBP">("USD");
  const [activeTab, setActiveTab] = useState<"overview" | "specs" | "history">("overview");

  if (!car) return <div className="min-h-screen pt-40 text-center">Lot not found</div>;

  const currentPrice = currency === "USD" ? `$${car.priceUSD.toLocaleString()}` : `£${car.priceGBP.toLocaleString()}`;

  return (
    <>
      <NavbarV2 />
      <main className="v2-lot-page pt-32 pb-20 bg-white">
        <style dangerouslySetInnerHTML={{ __html: `
          .v2-lot-page { font-family: 'Inter', sans-serif; color: #1a1a1a; }
          .v2-gallery-main { width: 100%; height: 600px; border-radius: 12px; overflow: hidden; background: #f5f5f5; margin-bottom: 20px; }
          .v2-gallery-main img { width: 100%; height: 100%; object-fit: cover; }
          .v2-thumb-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 12px; margin-bottom: 40px; }
          .v2-thumb { aspect-ratio: 16/10; border-radius: 6px; overflow: hidden; cursor: pointer; border: 2px solid transparent; transition: all 0.2s; }
          .v2-thumb.active { border-color: #ef4444; }
          .v2-thumb img { width: 100%; height: 100%; object-fit: cover; }
          
          .v2-lot-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 40px; border-bottom: 1px solid #eee; padding-bottom: 30px; }
          .v2-lot-title h1 { font-size: 3rem; font-weight: 800; letter-spacing: -0.02em; margin-bottom: 10px; }
          .v2-lot-meta { display: flex; gap: 20px; color: #666; font-size: 0.9rem; }
          
          .v2-bid-box { background: #000; color: #fff; padding: 40px; border-radius: 16px; position: sticky; top: 120px; }
          .v2-bid-price { font-size: 3.5rem; font-weight: 800; margin-bottom: 5px; color: #fff; }
          .v2-bid-label { text-transform: uppercase; font-size: 0.75rem; letter-spacing: 0.1em; color: #888; margin-bottom: 30px; display: block; }
          
          .v2-tabs { display: flex; gap: 40px; border-bottom: 1px solid #eee; margin-bottom: 30px; }
          .v2-tab { padding: 15px 0; font-weight: 600; cursor: pointer; color: #888; border-bottom: 2px solid transparent; transition: all 0.2s; }
          .v2-tab.active { color: #1a1a1a; border-color: #ef4444; }
          
          .v2-specs-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
          .v2-spec-item { padding: 20px; background: #f9f9f9; border-radius: 12px; }
          .v2-spec-label { display: block; font-size: 0.75rem; color: #888; text-transform: uppercase; margin-bottom: 5px; }
          .v2-spec-val { font-weight: 600; font-size: 1.1rem; }
          
          .v2-bid-btn { width: 100%; padding: 18px; background: #ef4444; color: white; border: none; border-radius: 8px; font-weight: 700; font-size: 1rem; cursor: pointer; transition: background 0.2s; }
          .v2-bid-btn:hover { background: #dc2626; }
          
          .currency-select { display: flex; gap: 8px; background: #222; padding: 4px; border-radius: 6px; margin-bottom: 20px; width: fit-content; }
          .curr-btn { padding: 6px 12px; font-size: 0.75rem; font-weight: 700; border-radius: 4px; cursor: pointer; border: none; background: transparent; color: #888; }
          .curr-btn.active { background: #444; color: white; }
          
          .v2-mechanical-list li { padding: 12px 0; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; font-size: 0.95rem; }
          .v2-mechanical-list li:last-child { border-bottom: none; }

          @media (max-width: 1024px) {
            .v2-lot-header { flex-direction: column; gap: 20px; }
            .v2-lot-title h1 { font-size: 2.2rem; }
            .v2-thumb-grid { grid-template-columns: repeat(4, 1fr); }
            .v2-bid-box { position: relative; top: 0; margin-top: 40px; }
          }
        ` }} />

        <div className="container mx-auto px-6">
          <div className="v2-lot-header">
            <div className="v2-lot-title">
              <p style={{ color: "#ef4444", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", marginBottom: "8px" }}>Live Auction • Lot #45144</p>
              <h1>{car.name}</h1>
              <div className="v2-lot-meta">
                <span>📍 {car.location}</span>
                <span>🛣️ {car.mileage}</span>
                <span>⚙️ {car.trans}</span>
                <span>🛠️ Clean Title</span>
              </div>
            </div>
            <div style={{ textAlign: "right", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
               <div className="v2-timer" style={{ background: "#fff1f2", color: "#e11d48", padding: "10px 20px", borderRadius: "8px", fontWeight: 700, fontSize: "1.2rem", border: "1px solid #fecdd3" }}>
                  02 : 04 : 32 : 11
               </div>
               <p style={{ fontSize: "0.7rem", color: "#888", marginTop: "8px", textTransform: "uppercase" }}>Days : Hrs : Min : Sec</p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: "60px" }} className="mobile-stack">
            <div className="v2-content-main">
              <div className="v2-gallery-main">
                <img src={`${car.galleryPath}${activeImg}.jpg`} alt={car.name} />
              </div>
              <div className="v2-thumb-grid">
                {Array.from({ length: Math.min(car.imageCount, 12) }).map((_, i) => (
                  <div 
                    key={i} 
                    className={`v2-thumb ${activeImg === i + 1 ? 'active' : ''}`}
                    onClick={() => setActiveImg(i + 1)}
                  >
                    <img src={`${car.galleryPath}${i + 1}.jpg`} alt="thumbnail" />
                  </div>
                ))}
              </div>

              <div className="v2-tabs">
                <div className={`v2-tab ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>Overview</div>
                <div className={`v2-tab ${activeTab === 'specs' ? 'active' : ''}`} onClick={() => setActiveTab('specs')}>Mechanical Specs</div>
                <div className={`v2-tab ${activeTab === 'history' ? 'active' : ''}`} onClick={() => setActiveTab('history')}>Bidding History</div>
              </div>

              <div className="v2-tab-content">
                {activeTab === 'overview' && (
                  <div className="reveal">
                    <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#444", marginBottom: "30px", textAlign: "justify" }}>{car.overview}</p>
                    <div className="v2-specs-grid">
                      <div className="v2-spec-item">
                        <span className="v2-spec-label">Engine</span>
                        <span className="v2-spec-val">{car.engine}</span>
                      </div>
                      <div className="v2-spec-item">
                        <span className="v2-spec-label">Drivetrain</span>
                        <span className="v2-spec-val">{car.drivetrain}</span>
                      </div>
                      <div className="v2-spec-item">
                        <span className="v2-spec-label">Exterior Color</span>
                        <span className="v2-spec-val">{car.exterior}</span>
                      </div>
                      <div className="v2-spec-item">
                        <span className="v2-spec-label">Interior Material</span>
                        <span className="v2-spec-val">{car.interior}</span>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 'specs' && (
                  <div className="reveal">
                    <h3 style={{ marginBottom: "20px", fontWeight: 800 }}>Technical Assembly</h3>
                    <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "25px", lineHeight: "1.6" }}>
                      This vehicle has undergone a rigorous inspection of its core mechanical components. Below is the technical breakdown of its factory-spec assembly and standard performance equipment.
                    </p>
                    <ul className="v2-mechanical-list" style={{ listStyle: "none", padding: 0 }}>
                      {car.mechanicalSpecs.map((spec, i) => (
                        <li key={i}>
                          <span style={{ color: "#444", fontWeight: 500 }}>{spec}</span>
                          <span className="material-symbols-outlined text-green-500" style={{ fontSize: "1.2rem" }}>check_circle</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="v2-sidebar">
              <div className="v2-bid-box">
                <div className="currency-select">
                  <button className={`curr-btn ${currency === 'USD' ? 'active' : ''}`} onClick={() => setCurrency('USD')}>$ USD</button>
                  <button className={`curr-btn ${currency === 'GBP' ? 'active' : ''}`} onClick={() => setCurrency('GBP')}>£ GBP</button>
                </div>
                <span className="v2-bid-label">Current Bid</span>
                <div className="v2-bid-price">{currentPrice}</div>
                <p style={{ color: "#888", fontSize: "0.8rem", marginBottom: "40px" }}>Excluding buyer's premium</p>
                
                <div style={{ marginBottom: "30px" }}>
                  <label style={{ display: "block", fontSize: "0.7rem", textTransform: "uppercase", color: "#eee", marginBottom: "10px", letterSpacing: "0.05em" }}>Quick Bid</label>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
                    <button style={{ background: "#222", border: "1px solid #333", color: "white", padding: "10px", borderRadius: "6px", fontSize: "0.8rem" }}>+ $500</button>
                    <button style={{ background: "#222", border: "1px solid #333", color: "white", padding: "10px", borderRadius: "6px", fontSize: "0.8rem" }}>+ $1k</button>
                    <button style={{ background: "#222", border: "1px solid #333", color: "white", padding: "10px", borderRadius: "6px", fontSize: "0.8rem" }}>+ $5k</button>
                  </div>
                </div>

                <button className="v2-bid-btn">Place Bid Now</button>
                <p style={{ fontSize: "0.7rem", color: "#666", textAlign: "center", marginTop: "20px" }}>By bidding, you agree to our Terms & Conditions.</p>
              </div>

              <div style={{ marginTop: "30px", padding: "30px", border: "1px solid #eee", borderRadius: "16px" }}>
                <h4 style={{ fontSize: "0.9rem", fontWeight: 700, marginBottom: "20px" }}>Seller Information</h4>
                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <div style={{ width: "50px", height: "50px", borderRadius: "50%", background: "#eee" }}></div>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: "0.9rem" }}>Private Seller</p>
                    <p style={{ color: "#888", fontSize: "0.8rem" }}>Miami, FL</p>
                  </div>
                </div>
                <button style={{ width: "100%", marginTop: "20px", padding: "12px", background: "white", border: "1px solid #eee", borderRadius: "6px", fontSize: "0.8rem", fontWeight: 600 }}>Contact Seller</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterV2 />
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          .mobile-stack { display: flex !important; flex-direction: column !important; }
        }
      `}} />
    </>
  );
}
