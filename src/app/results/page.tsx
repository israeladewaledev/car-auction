import NavbarV1 from "@/components/v1/Navbar";
import FooterV1 from "@/components/v1/Footer";

export default function V1ResultsPage() {
  const results = [
    {
      id: 1,
      name: "2016 Toyota Highlander XLE",
      img: "/images/cars/highlander/hero.jpg",
      soldPrice: "$6,250",
      date: "Feb 2024",
      location: "Miami, FL"
    },
    {
      id: 2,
      name: "2018 Ford F-150 XLT",
      img: "/images/cars/ford/hero.jpg",
      soldPrice: "$5,400",
      date: "Jan 2024",
      location: "Austin, TX"
    },
    {
      id: 3,
      name: "2017 Mercedes-Benz GLE 350",
      img: "/images/cars/benz/hero.jpg",
      soldPrice: "$7,600",
      date: "Dec 2023",
      location: "Los Angeles, CA"
    },
    {
      id: 4,
      name: "1970 Plymouth Superbird",
      img: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=800&q=80",
      soldPrice: "$520,000",
      date: "Sept 2023",
      location: "Scottsdale, AZ"
    },
    {
      id: 5,
      name: "1985 Audi Sport Quattro",
      img: "https://images.unsplash.com/photo-1621359953476-b3337f7a288c?w=800&q=80",
      soldPrice: "$680,000",
      date: "Aug 2023",
      location: "Berlin, DE"
    },
    {
      id: 6,
      name: "2020 Ford GT Heritage Edition",
      img: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=800&q=80",
      soldPrice: "$1,250,000",
      date: "July 2023",
      location: "Austin, TX"
    }
  ];

  return (
    <div className="bg-[#fcf9f8] min-h-screen pt-32 flex flex-col">
      <div className="fixed inset-0 grain-overlay opacity-[0.03] z-[100] pointer-events-none"></div>
      <NavbarV1 />
      
      <main className="flex-grow container mx-auto px-6 md:px-12 py-12">
        {/* Header */}
        <div className="max-w-4xl mb-24">
          <span className="text-primary-container font-bold text-[10px] uppercase tracking-[0.5em] mb-6 block">Historical Archives</span>
          <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl mb-12 leading-[0.9]">
            Auction <br/><span className="italic font-normal">Results.</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-on-surface-variant leading-relaxed">
            A record of excellence. Explore the realized values of the world's most significant automotive assets sold through our platform.
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 border-t border-primary-container/10 pt-24">
          {results.map((item) => (
            <div key={item.id} className="group cursor-default">
              <div className="aspect-[16/10] overflow-hidden bg-surface-container mb-8">
                <img 
                  src={item.img} 
                  alt={item.name}
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest opacity-40">
                  <span>{item.date}</span>
                  <span>{item.location}</span>
                </div>
                <h3 className="font-headline text-3xl leading-none group-hover:italic transition-all duration-300">{item.name}</h3>
                <div className="pt-4 flex justify-between items-end border-t border-primary-container/5">
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold opacity-30">Sold For</span>
                  <span className="text-3xl font-headline text-primary-container leading-none">{item.soldPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination/Load More */}
        <div className="mt-40 text-center pb-24">
          <button className="px-16 py-5 border border-primary-container/20 text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-primary-container hover:text-white transition-all">
            Load More Archives
          </button>
        </div>
      </main>

      <FooterV1 />
    </div>
  );
}
