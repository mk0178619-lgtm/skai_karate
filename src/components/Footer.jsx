import React from "react";
import "../styles/Footer.css";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Social Media */}
        <div className="footer-social">
          <a
            href="https://instagram.com/skaikarate_kolathur?igshid=NDk5N2NlZjQ="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com/@skaikarate_kolathur"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.facebook.com/teamskai.kolathur/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
        </div>

        {/* Center Section - Text */}
        <div className="footer-text">
          <p className="footer-anniversary">
            🎉 Celebrating 15 Years of Excellence in Karate Training 🎉
          </p>
          <p>© 2025 Karate Academy | All Rights Reserved</p>
          <p className="footer-credit">Designed & Developed with ❤️</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
