import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#222", color: "#fff" }}>
      <ul style={{ listStyle: "none", display: "flex", gap: "20px" }}>
        <li><Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link></li>
        <li><Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>About Us</Link></li>
        <li><Link to="/blackbelts" style={{ color: "#fff", textDecoration: "none" }}>Our Black Belts</Link></li>
        <li><Link to="/achievements" style={{ color: "#fff", textDecoration: "none" }}>Achievements</Link></li>
        <li><Link to="/branches" style={{ color: "#fff", textDecoration: "none" }}>Our Branches</Link></li>
        <li><Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
