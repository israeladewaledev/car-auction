import NavbarV1 from "@/components/v1/Navbar";
import FooterV1 from "@/components/v1/Footer";

export default function V1HowItWorksPage() {
  const steps = [
    {
      num: "01",
      title: "Consignment & Curation",
      desc: "Every journey begins with an application. Our editorial committee reviews each submission for historical significance, condition, and market provenance. Only the most exceptional examples are invited to join our curated collections.",
      img: "https://images.unsplash.com/photo-1562141989-c5c79ac8f576?w=800&q=80"
    },
    {
      num: "02",
      title: "The Editorial Suite",
      desc: "Once accepted, we dispatch a professional automotive photographer to your location. We capture 100+ high-resolution frames and draft a bespoke narrative that celebrates the specific soul of your vehicle.",
      img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80"
    },
    {
      num: "03",
      title: "Global Marketplace",
      desc: "The auction goes live to our global network of verified collectors. With real-time bidding across US and UK markets, we ensure your asset receives the international attention it deserves.",
      img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80"
    },
    {
      num: "04",
      title: "Secure Finalization",
      desc: "Upon the fall of the hammer, our secure escrow service facilitates the transaction. We handle all title transfers and coordinate white-glove logistics to deliver the vehicle to its new custodian.",
      img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80"
    }
  ];

  return (
    <div className="bg-[#fcf9f8] min-h-screen pt-32 flex flex-col">
      <div className="fixed inset-0 grain-overlay opacity-[0.03] z-[100] pointer-events-none"></div>
      <NavbarV1 />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 border-b border-primary-container/10">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl">
              <span className="text-primary-container font-bold text-[10px] uppercase tracking-[0.5em] mb-6 block">The MotorBid Methodology</span>
              <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-12">
                Authenticity <br/>
                <span className="italic font-normal">by Design.</span>
              </h1>
              <p className="text-xl md:text-2xl font-light text-on-surface-variant leading-relaxed max-w-2xl">
                We've reimagined the auction process as a digital gallery experience. Transparent, editorial, and global.
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps - Editorial Alternate Layout */}
        <section className="py-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="space-y-40 md:space-y-64">
              {steps.map((step, idx) => (
                <div key={step.num} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-32`}>
                  <div className="w-full md:w-1/2">
                    <div className="aspect-[4/5] overflow-hidden relative group">
                      <img 
                        src={step.img} 
                        alt={step.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                      />
                      <div className="absolute inset-0 bg-primary-container/10 group-hover:bg-transparent transition-colors duration-1000"></div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <span className="font-headline italic text-7xl md:text-9xl text-primary-container/10 mb-8 block select-none">
                      {step.num}
                    </span>
                    <h2 className="font-headline text-4xl md:text-6xl mb-8 leading-tight">{step.title}</h2>
                    <p className="text-lg md:text-xl font-light text-on-surface-variant leading-relaxed mb-12 text-justify-editorial">
                      {step.desc}
                    </p>
                    <div className="h-[1px] w-24 bg-primary-container"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-primary-container text-white">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <h2 className="font-headline text-5xl md:text-7xl mb-12">Ready to <span className="italic font-normal">Begin?</span></h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <button className="bg-white text-primary-container px-12 py-5 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-[#fcf9f8] transition-all w-full sm:w-auto">
                Register to Bid
              </button>
              <button className="border border-white/20 text-white px-12 py-5 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-white/10 transition-all w-full sm:w-auto">
                Consign Your Car
              </button>
            </div>
          </div>
        </section>
      </main>

      <FooterV1 />
    </div>
  );
}
