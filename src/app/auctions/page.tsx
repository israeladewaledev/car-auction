import NavbarV1 from "@/components/v1/Navbar";
import FooterV1 from "@/components/v1/Footer";
import Link from "next/link";

export default function V1AuctionsPage() {
  const cars = [
    {
      id: 1,
      name: "2016 Toyota Highlander XLE",
      img: "/images/cars/highlander/hero.jpg",
      price: "$6,495",
      meta: ["173,434 mi", "AWD", "Gasoline"],
      location: "Miami, FL",
      time: "2d 4h",
      badge: "⭐ Bestseller"
    },
    {
      id: 2,
      name: "2017 Mercedes-Benz GLE 350",
      img: "/images/cars/benz/hero.jpg",
      price: "$7,900",
      meta: ["157,045 mi", "4MATIC AWD", "Gray Leather"],
      location: "Los Angeles, CA",
      time: "3h 12m",
      badge: "⚡ Hot Deal"
    },
    {
      id: 3,
      name: "2018 Ford F-150 XLT",
      img: "/images/cars/ford/hero.jpg",
      price: "$5,695",
      meta: ["243,925 mi", "4WD", "Crew Cab"],
      location: "Austin, TX",
      time: "1d 18h",
      badge: "🛠️ Work Ready"
    },
    {
      id: 4,
      name: "2017 Land Rover Discovery Sport",
      img: "/images/cars/landrover/hero.jpg",
      price: "$2,800",
      meta: ["178,096 mi", "HSE Edition", "Turbo"],
      location: "London, UK",
      time: "4d 2h",
      badge: "🇬🇧 UK Listing"
    }
  ];

  return (
    <div className="bg-[#fcf9f8] min-h-screen pt-32 flex flex-col">
      <div className="fixed inset-0 grain-overlay opacity-[0.03] z-[100]"></div>
      <NavbarV1 />
      
      <main className="flex-grow container mx-auto px-6 md:px-12 py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-primary-container/10 pb-8 gap-8">
          <div>
            <span className="text-primary-container font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">Current Inventory</span>
            <h1 className="font-headline text-5xl md:text-7xl">Live <span className="italic font-normal">Auctions</span></h1>
          </div>
          <div className="flex gap-4 sm:gap-8 overflow-x-auto w-full md:w-auto pb-2">
            <button className="text-[10px] uppercase font-bold tracking-[0.3em] text-primary-container border-b-2 border-primary-container pb-2 whitespace-nowrap">All Vehicles</button>
            <button className="text-[10px] uppercase font-bold tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity pb-2 whitespace-nowrap">🇺🇸 US Market</button>
            <button className="text-[10px] uppercase font-bold tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity pb-2 whitespace-nowrap">🇬🇧 UK Market</button>
            <button className="text-[10px] uppercase font-bold tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity pb-2 whitespace-nowrap">No Reserve</button>
          </div>
        </div>

        {/* Filters & Grid Layout */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar / Filters */}
          <div className="lg:w-1/4 flex-shrink-0 space-y-10 border-r border-primary-container/5 lg:pr-8">
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] mb-6 text-on-surface-variant">Filter by Make</h4>
              <div className="space-y-3">
                {['Toyota', 'Mercedes-Benz', 'Ford', 'Land Rover'].map((make) => (
                  <label key={make} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded-sm border-primary-container/20 text-primary-container focus:ring-primary-container" />
                    <span className="text-sm font-light text-on-surface-variant group-hover:text-primary-container transition-colors">{make}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Cars Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
              {cars.map((car) => (
                <div key={car.id} className="group flex flex-col relative h-full">
                  <Link href={`/auctions/${car.id}`} className="aspect-[4/3] w-full overflow-hidden bg-surface-container mb-6 relative block">
                    <img 
                      alt={car.name} 
                      className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s]" 
                      src={car.img}
                    />
                    <div className="absolute top-4 left-4 bg-primary-container/90 backdrop-blur-sm text-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] shadow-lg">
                      {car.time} Left
                    </div>
                    {car.badge && (
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary-container px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] shadow-lg">
                        {car.badge}
                      </div>
                    )}
                  </Link>
                  <div className="flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2 gap-4">
                      <Link href={`/auctions/${car.id}`} className="hover:underline">
                        <h3 className="font-headline text-2xl lg:text-3xl leading-none group-hover:italic transition-all">{car.name}</h3>
                      </Link>
                    </div>
                    <div className="text-[10px] uppercase font-bold tracking-widest opacity-50 mb-6 drop-shadow-sm flex items-center gap-2 mt-auto">
                      <span className="material-symbols-outlined text-[14px]">pin_drop</span> {car.location}
                    </div>
                    <div className="flex justify-between items-end border-t border-primary-container/10 pt-4 mt-auto">
                      <div>
                        <span className="text-[9px] uppercase tracking-[0.2em] font-bold opacity-40 block mb-1">Current Bid</span>
                        <span className="text-2xl font-headline text-primary-container leading-none">{car.price}</span>
                      </div>
                      <Link href={`/auctions/${car.id}`} className="px-6 py-2 bg-on-surface text-white text-[9px] uppercase tracking-[0.2em] font-bold hover:bg-primary-container transition-colors">Place Bid</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-20 text-center border-t border-primary-container/10 pt-12">
              <button className="px-12 py-4 border border-primary-container/20 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-primary-container hover:text-white transition-all">Load More Listings</button>
            </div>
          </div>
        </div>
      </main>

      <FooterV1 />
    </div>
  );
}
