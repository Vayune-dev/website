import { Link } from "react-router-dom";

export default function Navbar() {
  const navStyle = {
    display: "flex",
    gap: "20px",
    padding: "15px 30px",
    background: "#1a1a1a",
    color: "#fff",
    listStyle: "none"
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "500"
  };

  return (
    <nav>
      <ul style={navStyle}>
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li><Link to="/products" style={linkStyle}>Products</Link></li>
        <li><Link to="/technology" style={linkStyle}>Technology</Link></li>
        <li><Link to="/about" style={linkStyle}>About</Link></li>
        <li><Link to="/portfolio" style={linkStyle}>Portfolio</Link></li>
        <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
        <li><Link to="/consultation" style={linkStyle}>Consultation</Link></li>
      </ul>
    </nav>
  );
}