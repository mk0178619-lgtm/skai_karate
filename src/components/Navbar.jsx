import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/blackbelts", label: "Our Black Belts" },
    { to: "/achievements", label: "Achievements" },
    { to: "/branches", label: "Our Branches" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="navbar-logo">MENU</h2>

        {/* Hamburger / 3 dots */}
        <div
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          &#x22EE; {/* vertical 3 dots */}
        </div>

        {/* Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={location.pathname === link.to ? "active" : ""}
                onClick={() => setIsOpen(false)} 
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
