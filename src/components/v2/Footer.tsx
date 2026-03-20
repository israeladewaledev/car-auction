import Link from 'next/link';

export default function FooterV2() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <div className="footer-logo">Motor<span>Lot</span></div>
          <p className="footer-tagline">"Where Great Cars Find New Owners."</p>
          <div className="footer-contacts">
            <div className="footer-contact-item"><span className="flag">🇺🇸</span> +1 (800) 468-6565 · US</div>
            <div className="footer-contact-item"><span className="flag">🇬🇧</span> +44 20 7946 0101 · UK</div>
            <div className="footer-contact-item">✉️ support@motorlot.com</div>
          </div>
          <div className="footer-socials">
            <a className="social-btn" href="#">𝕏</a>
            <a className="social-btn" href="#">in</a>
            <a className="social-btn" href="#">f</a>
            <a className="social-btn" href="#">▶</a>
          </div>
        </div>
        <div>
          <p className="footer-col-title">For Buyers</p>
          <ul className="footer-links">
            <li><Link href="/v2/auctions">Browse Auctions</Link></li>
            <li><Link href="/v2">Register to Bid</Link></li>
            <li><Link href="/v2/#how">How Bidding Works</Link></li>
            <li><Link href="/v2">Buyer Fees</Link></li>
            <li><Link href="/v2">Shipping &amp; Collection</Link></li>
          </ul>
        </div>
        <div>
          <p className="footer-col-title">For Sellers</p>
          <ul className="footer-links">
            <li><Link href="/v2/sell">List Your Car</Link></li>
            <li><Link href="/v2/sell">Free Valuation</Link></li>
            <li><Link href="/v2">Seller Fees</Link></li>
            <li><Link href="/v2">Inspection Service</Link></li>
            <li><Link href="/v2">Seller Dashboard</Link></li>
          </ul>
        </div>
        <div>
          <p className="footer-col-title">Company</p>
          <ul className="footer-links">
            <li><Link href="/v2">About MotorLot</Link></li>
            <li><Link href="/v2">Press</Link></li>
            <li><Link href="/v2">Careers</Link></li>
            <li><Link href="/v2">Privacy Policy</Link></li>
            <li><Link href="/v2">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copy">© 2025 MotorLot Ltd. All rights reserved. FCA Registered (UK) · NAAA Member (US)</p>
        <div className="footer-legal">
          <Link href="/v2">Privacy</Link>
          <Link href="/v2">Terms</Link>
          <Link href="/v2">Cookies</Link>
          <Link href="/v2">Accessibility</Link>
        </div>
      </div>
    </footer>
  );
}
