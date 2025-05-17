import React from 'react';

const FeaturesSection = () => {
  return (
    <section style={{ padding: "3rem 0", backgroundColor: "#eff6ff" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" }}>
        <h2 style={{ fontSize: "1.875rem", fontWeight: "bold", textAlign: "center", marginBottom: "5rem" }}>
          Our Features
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
          
          <div style={{ backgroundColor: "#fff", padding: "1.5rem", borderRadius: "0.5rem", boxShadow: "0 2px 4px rgba(0,0,0,0.1)", transition: "box-shadow 0.3s" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ width: "4rem", height: "4rem", backgroundColor: "#dbeafe", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}>
                <svg style={{ width: "2rem", height: "2rem", color: "#2563eb" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem" }}>Local Deals</h3>
              <p style={{ color: "#4b5563" }}>Buy and sell items at amazing discounts.</p>
            </div>
          </div>

          <div style={{ backgroundColor: "#fff", padding: "1.5rem", borderRadius: "0.5rem", boxShadow: "0 2px 4px rgba(0,0,0,0.1)", transition: "box-shadow 0.3s" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ width: "4rem", height: "4rem", backgroundColor: "#d1fae5", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}>
                <svg style={{ width: "2rem", height: "2rem", color: "#16a34a" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem" }}>Community-Based</h3>
              <p style={{ color: "#4b5563" }}>Connect with real people in your area</p>
            </div>
          </div>

          <div style={{ backgroundColor: "#fff", padding: "1.5rem", borderRadius: "0.5rem", boxShadow: "0 2px 4px rgba(0,0,0,0.1)", transition: "box-shadow 0.3s" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ width: "4rem", height: "4rem", backgroundColor: "#ede9fe", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}>
                <svg style={{ width: "2rem", height: "2rem", color: "#7c3aed" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem" }}>Secure Transactions</h3>
              <p style={{ color: "#4b5563" }}>Verified users & safe payments</p>
            </div>
          </div>

          <div style={{ backgroundColor: "#fff", padding: "1.5rem", borderRadius: "0.5rem", boxShadow: "0 2px 4px rgba(0,0,0,0.1)", transition: "box-shadow 0.3s" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ width: "4rem", height: "4rem", backgroundColor: "#fef9c3", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}>
                <svg style={{ width: "2rem", height: "2rem", color: "#facc15" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem" }}>Advertise Your Business</h3>
              <p style={{ color: "#4b5563" }}>Reach customers near you</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
