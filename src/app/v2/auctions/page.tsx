import NavbarV2 from "@/components/v2/Navbar";
import FooterV2 from "@/components/v2/Footer";
import Link from "next/link";

export default function V2AuctionsPage() {
  const cars = [
    {
      id: 1,
      model: "Toyota Highlander XLE",
      year: "2016",
      img: "/images/cars/highlander/hero.jpg",
      meta: ["🛣️ 173,434 mi", "⚙️ Auto", "🎨 White/Tan"],
      price: "$6,495",
      time: "Ends in 2d 4h",
      location: "📍 Miami, FL",
      badge: "⚡ Featured",
      badgeColor: "#ef4444"
    },
    {
      id: 2,
      model: "Mercedes-Benz GLE 350",
      year: "2017",
      img: "/images/cars/benz/hero.jpg",
      meta: ["🛣️ 157,045 mi", "⚙️ 4MATIC", "🎨 Gray Leather"],
      price: "$7,900",
      time: "Ends in 3h 12m",
      location: "📍 Los Angeles, CA",
      badge: "⭐ Premium",
      badgeColor: "#b45309"
    },
    {
      id: 3,
      model: "Ford F-150 XLT",
      year: "2018",
      img: "/images/cars/ford/hero.jpg",
      meta: ["🛣️ 243,925 mi", "⚙️ Crew Cab", "🎨 Black"],
      price: "$5,695",
      time: "Ends in 1d 18h",
      location: "📍 Austin, TX",
      badge: "🏁 No Reserve",
      badgeColor: "#166534"
    },
    {
      id: 4,
      model: "Land Rover Discovery Sport",
      year: "2017",
      img: "/images/cars/landrover/hero.jpg",
      meta: ["🛣️ 178,096 mi", "⚙️ HSE Ed.", "🎨 Red"],
      price: "$2,800",
      time: "Ends in 4d 2h",
      location: "📍 London, UK",
      badge: "🇬🇧 UK Listing",
      badgeColor: "#1d4ed8"
    }
  ];

  return (
    <>
      <NavbarV2 />
      
      <div style={{ paddingTop: "120px", paddingBottom: "60px", background: "var(--cream)" }}>
        <section className="auctions-section">
          <div className="auctions-header">
            <div>
              <p className="section-eyebrow">Inventory</p>
              <h1 className="section-title">All <em>Auctions</em></h1>
            </div>
            <div className="currency-toggle">
              <button className="currency-btn active">$ USD</button>
              <button className="currency-btn">£ GBP</button>
            </div>
          </div>

          <div className="cars-grid" style={{ marginTop: "40px" }}>
            {cars.map((car) => (
              <div className="car-card" key={car.id}>
                <Link href={`/v2/auctions/${car.id}`} className="car-img-wrap block">
                  <img className="car-img" src={car.img} alt={car.model} loading="lazy" />
                  <span className="car-badge" style={{ background: car.badgeColor || "var(--accent)" }}>{car.badge}</span>
                  <span className="car-location-badge">{car.location}</span>
                </Link>
                <div className="car-info">
                  <p className="car-year">{car.year}</p>
                  <Link href={`/v2/auctions/${car.id}`}><h3 className="car-name">{car.model}</h3></Link>
                  <div className="car-meta">
                    {car.meta.map((m, i) => (
                      <span key={i}>{m}</span>
                    ))}
                  </div>
                  <div className="car-bid-row">
                    <div className="bid-info">
                      <span className="bid-label">Current Bid</span>
                      <span className="bid-amount">{car.price}</span>
                    </div>
                    <span className="bid-timer">{car.time}</span>
                    <Link href={`/v2/auctions/${car.id}`} className="bid-btn text-center">Place Bid →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: "center", marginTop: "60px" }}>
            <button className="btn btn-outline">Load More Vehicles</button>
          </div>
        </section>
      </div>
      
      <FooterV2 />
    </>
  );
}
