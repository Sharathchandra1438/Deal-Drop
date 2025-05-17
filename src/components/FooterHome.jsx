import React from 'react';

const FooterHome = () => {
  const linkStyle = {
    color: "#d1d5db",
    textDecoration: "none",
    marginRight: "0.5rem",
    marginLeft: "0.5rem",
  };

  const hoverStyle = {
    color: "#ffffff",
    textDecoration: "underline",
  };

  return (
    <footer style={{ backgroundColor: "#0369a1", color: "white", padding: "3rem 0" }}>
      <div style={{ maxWidth: "96rem", margin: "0 auto", padding: "0 1rem" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2rem",
        }}>
          <div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "1rem" }}>DEAL DROP</h3>
            <p style={{ color: "#d1d5db", marginBottom: "1rem" }}>
              Your local marketplace for great deals and community connections.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a href="#" style={{ color: "#d1d5db", textDecoration: "none" }}>Facebook</a>
              <a href="#" style={{ color: "#d1d5db", textDecoration: "none" }}>Twitter</a>
              <a href="#" style={{ color: "#d1d5db", textDecoration: "none" }}>Instagram</a>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "1rem" }}>Quick Links</h3>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li style={{ marginBottom: "0.5rem" }}><a href="#" style={{ color: "#d1d5db", textDecoration: "none" }}>Home</a></li>
              <li style={{ marginBottom: "0.5rem" }}><a href="#" style={{ color: "#d1d5db", textDecoration: "none" }}>Deals</a></li>
              <li style={{ marginBottom: "0.5rem" }}><a href="#" style={{ color: "#d1d5db", textDecoration: "none" }}>Categories</a></li>
              <li style={{ marginBottom: "0.5rem" }}><a href="#" style={{ color: "#d1d5db", textDecoration: "none" }}>How It Works</a></li>
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "1rem" }}>Help</h3>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li style={{ marginBottom: "0.5rem" }}><a href="#" style={{ color: "#d1d5db", textDecoration: "none" }}>What can I share?</a></li>
              <li style={{ marginBottom: "0.5rem" }}><a href="#" style={{ color: "#d1d5db", textDecoration: "none" }}>Why real names?</a></li>
              <li style={{ marginBottom: "0.5rem" }}><a href="#" style={{ color: "#d1d5db", textDecoration: "none" }}>Neighbor interactions</a></li>
              <li style={{ marginBottom: "0.5rem" }}><a href="#" style={{ color: "#d1d5db", textDecoration: "none" }}>Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "1rem" }}>Contact</h3>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li style={{ marginBottom: "0.5rem", color: "#d1d5db" }}>support@dealdrop.com</li>
              <li style={{ marginBottom: "0.5rem", color: "#d1d5db" }}>(555) 123-4567</li>
              <li style={{ marginBottom: "0.5rem", color: "#d1d5db" }}>123 Main St, City</li>
            </ul>
          </div>
        </div>

        <div style={{
          borderTop: "1px solid #374151",
          marginTop: "2rem",
          paddingTop: "2rem",
          textAlign: "center",
          color: "#9ca3af",
        }}>
          <p>© {new Date().getFullYear()} DEAL DROP. All rights reserved.</p>
          <div style={{ marginTop: "0.5rem" }}>
            <a href="#" style={linkStyle}>Privacy</a>
            <a href="#" style={linkStyle}>Terms</a>
            <a href="#" style={linkStyle}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterHome;
