"use client";
import '../theme.css';
import NavbarV2 from '@/components/v2/Navbar';
import FooterV2 from '@/components/v2/Footer';

export default function V2SellPage() {
  return (
    <>
      <NavbarV2 />
      
      <div style={{ paddingTop: "140px", paddingBottom: "80px", background: "var(--white)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <p className="section-eyebrow">Consignment Request</p>
            <h1 className="section-title">Valuate &amp; <em>Sell</em></h1>
            <p style={{ maxWidth: "600px", margin: "20px auto 0", color: "var(--mid-grey)", lineHeight: "1.7" }}>
              Our editorial committee curators select only the finest representations of classic and modern performance vehicles. Submit your car today for a guaranteed 24-hour response.
            </p>
          </div>

          <div style={{ display: "flex", gap: "60px", flexWrap: "wrap" }}>
            
            {/* Form Application */}
            <div style={{ flex: "1 1 500px", background: "var(--cream)", padding: "40px", borderRadius: "16px" }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "8px", letterSpacing: "-0.5px" }}>Vehicle Details</h3>
              <p style={{ color: "var(--mid-grey)", fontSize: "0.85rem", marginBottom: "32px" }}>Please provide accurate information to expedite processing.</p>
              
              <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "flex", gap: "20px" }}>
                  <div style={{ flex: 1 }}>
                     <label style={{ display: "block", fontSize: "0.75rem", fontWeight: "600", color: "var(--dark)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>Make</label>
                     <input type="text" placeholder="e.g. BMW" style={{ width: "100%", padding: "14px", border: "1px solid #e1dcd9", borderRadius: "8px", background: "var(--white)", outline: "none" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                     <label style={{ display: "block", fontSize: "0.75rem", fontWeight: "600", color: "var(--dark)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>Model</label>
                     <input type="text" placeholder="e.g. M3 Competition" style={{ width: "100%", padding: "14px", border: "1px solid #e1dcd9", borderRadius: "8px", background: "var(--white)", outline: "none" }} />
                  </div>
                </div>
                
                <div style={{ display: "flex", gap: "20px" }}>
                  <div style={{ flex: 1 }}>
                     <label style={{ display: "block", fontSize: "0.75rem", fontWeight: "600", color: "var(--dark)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>Year</label>
                     <input type="number" placeholder="YYYY" style={{ width: "100%", padding: "14px", border: "1px solid #e1dcd9", borderRadius: "8px", background: "var(--white)", outline: "none" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                     <label style={{ display: "block", fontSize: "0.75rem", fontWeight: "600", color: "var(--dark)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>Mileage</label>
                     <input type="text" placeholder="00,000" style={{ width: "100%", padding: "14px", border: "1px solid #e1dcd9", borderRadius: "8px", background: "var(--white)", outline: "none" }} />
                  </div>
                </div>

                <div>
                   <label style={{ display: "block", fontSize: "0.75rem", fontWeight: "600", color: "var(--dark)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>Modification Highlights</label>
                   <textarea rows={5} placeholder="Describe the history, original paint, modifications..." style={{ width: "100%", padding: "14px", border: "1px solid #e1dcd9", borderRadius: "8px", background: "var(--white)", outline: "none", resize: "vertical" }}></textarea>
                </div>
                
                <button type="button" className="btn btn-solid" style={{ width: "100%", marginTop: "10px", padding: "16px" }}>Submit Application</button>
              </form>
            </div>

            {/* Sell Steps Context from mockup2 */}
            <div style={{ flex: "1 1 400px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div className="how-steps" style={{ display: "block", gridTemplateColumns: "1fr" }}>
                <div className="how-step" style={{ background: "transparent", padding: "0 0 40px 0", border: "none" }}>
                  <span className="step-icon">📸</span>
                  <h3 className="step-title">1. Curated Application</h3>
                  <p className="step-desc">Provide your vehicle specifications via our secure portal. Our committee cross-references live market data for an accurate reserve estimation.</p>
                </div>
                <div className="how-step" style={{ background: "transparent", padding: "0 0 40px 0", border: "none" }}>
                  <span className="step-icon">🌍</span>
                  <h3 className="step-title">2. Global Exposure</h3>
                  <p className="step-desc">We dispatch professional editorial photographers to you, anywhere in the US or UK, crafting a bespoke narrative that drives bidding wars.</p>
                </div>
                <div className="how-step" style={{ background: "transparent", padding: "0 0 0 0", border: "none" }}>
                  <span className="step-icon">🔒</span>
                  <h3 className="step-title">3. Escrow Security</h3>
                  <p className="step-desc">All transactions route through FDIC/Barclays protected escrow accounts ensuring full payment clearing prior to vehicle handover.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <FooterV2 />
    </>
  );
}
