import NavbarV1 from "@/components/v1/Navbar";
import FooterV1 from "@/components/v1/Footer";

export default function V1SellPage() {
  return (
    <div className="bg-[#fcf9f8] min-h-screen pt-32 flex flex-col">
      <div className="fixed inset-0 grain-overlay opacity-[0.03] z-[100]"></div>
      <NavbarV1 />
      
      <main className="flex-grow">
        {/* Sell Hero */}
        <section className="relative pt-20 pb-32 overflow-hidden bg-primary-container text-white">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 flex items-center justify-center pointer-events-none">
            <span className="material-symbols-outlined text-[40rem]">directions_car</span>
          </div>
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="max-w-3xl">
              <span className="text-[11px] font-bold uppercase tracking-[0.5em] opacity-50 mb-6 block drop-shadow-md">Consignment Application</span>
              <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl mb-8 leading-none">
                Unlock the <br/><span className="italic font-normal">True Value</span><br/>of your Asset.
              </h1>
              <p className="text-xl md:text-2xl text-on-primary-container font-light leading-relaxed max-w-2xl mb-12">
                Submit your vehicle to MotorBid's editorial committee. We curate collections for a global audience of over 50,000 verified buyers across the US and UK.
              </p>
            </div>
          </div>
        </section>

        {/* Application Form & Benefits */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col lg:flex-row gap-20">
              
              {/* Form Side */}
              <div className="lg:w-1/2">
                <div className="bg-surface-container p-8 md:p-12 border border-primary-container/10">
                  <h3 className="font-headline text-3xl mb-2">Request Valuation</h3>
                  <p className="text-sm text-on-surface-variant mb-8 font-light">Enter your vehicle details. Our specialists will review and respond within 24 hours.</p>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-[10px] font-bold uppercase tracking-widest text-primary-container">Make *</label>
                         <input type="text" className="w-full bg-white border border-primary-container/20 px-4 py-3 text-sm focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all" placeholder="e.g. Porsche" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] font-bold uppercase tracking-widest text-primary-container">Model *</label>
                         <input type="text" className="w-full bg-white border border-primary-container/20 px-4 py-3 text-sm focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all" placeholder="e.g. 911 Carrera S" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-[10px] font-bold uppercase tracking-widest text-primary-container">Year *</label>
                         <input type="number" className="w-full bg-white border border-primary-container/20 px-4 py-3 text-sm focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all" placeholder="YYYY" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] font-bold uppercase tracking-widest text-primary-container">Mileage *</label>
                         <input type="text" className="w-full bg-white border border-primary-container/20 px-4 py-3 text-sm focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all" placeholder="Miles or KM" />
                      </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-primary-container">VIN (Optional)</label>
                       <input type="text" className="w-full bg-white border border-primary-container/20 px-4 py-3 text-sm focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all" placeholder="17-character VIN" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-primary-container">Key Details / Modifications</label>
                       <textarea rows={4} className="w-full bg-white border border-primary-container/20 px-4 py-3 text-sm focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all" placeholder="Tell us about the history, condition, and any special features..."></textarea>
                    </div>
                    
                    <button type="button" className="w-full bg-primary-container text-white py-4 mt-4 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-black transition-colors">
                      Submit for Review
                    </button>
                    <p className="text-[10px] text-center text-on-surface-variant/70 uppercase tracking-widest mt-4">
                      Secure Form • No Obligation
                    </p>
                  </form>
                </div>
              </div>

              {/* Benefits Side */}
              <div className="lg:w-1/2 flex flex-col justify-center">
                <span className="text-primary-container font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">The Advantage</span>
                <h2 className="font-headline text-5xl mb-12">Why Sell with MotorBid?</h2>
                
                <div className="space-y-12">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 shrink-0 rounded-full border border-primary-container/20 flex items-center justify-center text-primary-container">
                      <span className="material-symbols-outlined max-w-[24px]">public</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 uppercase tracking-wide">Global Exposure</h4>
                      <p className="text-on-surface-variant font-light text-sm leading-relaxed text-justify-editorial">
                        Your vehicle is presented not just locally, but to heavily-vetted collectors in both the United States and the United Kingdom via our direct marketing channels.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 shrink-0 rounded-full border border-primary-container/20 flex items-center justify-center text-primary-container">
                      <span className="material-symbols-outlined max-w-[24px]">verified</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 uppercase tracking-wide">Editorial Curation</h4>
                      <p className="text-on-surface-variant font-light text-sm leading-relaxed text-justify-editorial">
                        We send a professional photographer to your location. Our bespoke editorial write-up maximizes the narrative and historical provenance of your specific chassis.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 shrink-0 rounded-full border border-primary-container/20 flex items-center justify-center text-primary-container">
                      <span className="material-symbols-outlined max-w-[24px]">shield</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 uppercase tracking-wide">Secure Escrow</h4>
                      <p className="text-on-surface-variant font-light text-sm leading-relaxed text-justify-editorial">
                        Never worry about fund collection. The buyer wires funds into our secure escrow vault before the vehicle is even loaded onto the transport truck.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
      </main>

      <FooterV1 />
    </div>
  );
}
