import Link from "next/link";

export default function FooterV1() {
  return (
    <footer className="bg-[#1c1b1b] text-[#fcf9f8] w-full pt-32 pb-12 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-20 lg:gap-12 mb-32">
          <div className="lg:col-span-2">
            <Link href="/" className="text-5xl font-headline italic mb-10 text-white block">MotorBid</Link>
            <p className="text-lg font-light text-white/50 mb-12 max-w-sm leading-relaxed">
              The Digital Curator for Automotive Excellence. Redefining the high-end auction experience through transparency and editorial precision.
            </p>
            <div className="flex gap-8">
              <a className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full hover:border-white transition-colors" href="#"><span className="material-symbols-outlined text-sm">share</span></a>
              <a className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full hover:border-white transition-colors" href="#"><span className="material-symbols-outlined text-sm">public</span></a>
            </div>
          </div>
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.4em] font-bold text-white mb-10">Buyers</h5>
            <ul className="space-y-6">
              <li><Link className="text-[13px] text-white/40 hover:text-white transition-colors" href="/auctions">How to Bid</Link></li>
              <li><Link className="text-[13px] text-white/40 hover:text-white transition-colors" href="#">Shipping & Logistics</Link></li>
              <li><Link className="text-[13px] text-white/40 hover:text-white transition-colors" href="#">Buyer Protection</Link></li>
              <li><Link className="text-[13px] text-white/40 hover:text-white transition-colors" href="#">Financing</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.4em] font-bold text-white mb-10">Sellers</h5>
            <ul className="space-y-6">
              <li><Link className="text-[13px] text-white/40 hover:text-white transition-colors" href="/sell">Sell a Car</Link></li>
              <li><Link className="text-[13px] text-white/40 hover:text-white transition-colors" href="/sell">Consignment Fees</Link></li>
              <li><Link className="text-[13px] text-white/40 hover:text-white transition-colors" href="/sell">Valuation Service</Link></li>
              <li><Link className="text-[13px] text-white/40 hover:text-white transition-colors" href="#">Marketing Reach</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.4em] font-bold text-white mb-10">Regional Offices</h5>
            <div className="space-y-8">
              <div>
                <span className="text-[9px] uppercase font-bold text-white/30 block mb-2">North America</span>
                <p className="text-[13px] text-white/60">Beverly Hills, Los Angeles</p>
              </div>
              <div>
                <span className="text-[9px] uppercase font-bold text-white/30 block mb-2">United Kingdom</span>
                <p className="text-[13px] text-white/60">Mayfair, London</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">© 2024 MotorBid Archive. All Rights Reserved.</p>
          <div className="flex gap-10 border-t border-transparent md:border-none pt-4 md:pt-0 line-clamp-2 md:line-clamp-none flex-wrap">
            <Link className="text-[10px] uppercase tracking-[0.2em] text-white/30 hover:text-white transition-colors" href="#">Privacy Policy</Link>
            <Link className="text-[10px] uppercase tracking-[0.2em] text-white/30 hover:text-white transition-colors" href="#">Terms & Conditions</Link>
            <Link className="text-[10px] uppercase tracking-[0.2em] text-white/30 hover:text-white transition-colors" href="#">Cookies</Link>
          </div>
          <div className="flex items-center gap-3 px-5 py-2 border border-white/10 rounded-full shrink-0">
            <span className="material-symbols-outlined text-[10px]">public</span>
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold">Global / USD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
