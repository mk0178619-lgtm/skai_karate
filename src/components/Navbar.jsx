import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation(); // to get the current path

  const navStyle = {
    padding: "20px",
    background: "#222",
    color: "#fff",
    position: "sticky",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  };

  const ulStyle = {
    listStyle: "none",
    display: "flex",
    gap: "25px",
    justifyContent: "center",
    margin: 0,
    padding: 0,
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    transition: "background 0.3s ease",
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li>
          <Link
            to="/"
            style={{
              ...linkStyle,
              background: location.pathname === "/" ? "#ff0000ff" : "transparent",
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={{
              ...linkStyle,
              background: location.pathname === "/about" ? "#ff0000ff" : "transparent",
            }}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/blackbelts"
            style={{
              ...linkStyle,
              background:
                location.pathname === "/blackbelts" ? "#ff0000ff" : "transparent",
            }}
          >
            Our Black Belts
          </Link>
        </li>
        <li>
          <Link
            to="/achievements"
            style={{
              ...linkStyle,
              background:
                location.pathname === "/achievements" ? "#ff0000ff" : "transparent",
            }}
          >
            Achievements
          </Link>
        </li>
        <li>
          <Link
            to="/branches"
            style={{
              ...linkStyle,
              background:
                location.pathname === "/branches" ? "#ff0000ff" : "transparent",
            }}
          >
            Our Branches
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            style={{
              ...linkStyle,
              background:
                location.pathname === "/contact" ? "#ff0000ff" : "transparent",
            }}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
