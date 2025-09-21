import React from "react";
import "../styles/BlackBelts.css";

const blackBelts = [
  { name: "SREE RAMAN R", year: "2023", image: "/Preloader.png" },
  { name: "J. S. TASHWIN KAMAL", year: "2024", image: "/Preloader.png" },
  { name: "K. S. KOWSHIK VIJAY", year: "2024", image: "/Preloader.png" },
  { name: "SARA S", year: "2025", image: "/Preloader.png" },
  { name: "M. GANESH KUMAR", year: "2025", image: "/Preloader.png" },
  { name: "HARI RAM R", year: "2025", image: "/Preloader.png" },
  { name: "SHAKSHINI SREE. H", year: "2025", image: "/Preloader.png" },
  { name: "CHRISTOPHER KEERTHIK. G", year: "2025", image: "/Preloader.png" },
  { name: "VINCENT VIGNESH. G", year: "2025", image: "/Preloader.png" },
  { name: "CHANASYAA KRISHNAN", year: "2025", image: "/Preloader.png" },
  { name: "M. D. MADHAV ABHIMANYU", year: "2025", image: "/Preloader.png" },
  { name: "KEERTHIAKSHARA. S", year: "2025", image: "/Preloader.png" },
  { name: "P. VIDHARTH", year: "2025", image: "/Preloader.png" },
  { name: "V. H. VARSHITH", year: "2025", image: "/Preloader.png" },
  { name: "ELANKADIR S", year: "2025", image: "/Preloader.png" },
  { name: "ARUNAN S", year: "2025", image: "/Preloader.png" },
  { name: "G. S. RAMCHARAN", year: "2025", image: "/Preloader.png" },
  { name: "TANISHA. N", year: "2025", image: "/Preloader.png" },
];

function BlackBelts() {
  return (
    <div className="blackbelts-container">
      <h1 className="blackbelts-title">Our Black Belts</h1>
      <div className="blackbelts-grid">
        {blackBelts.map((belt, index) => (
          <div key={index} className="blackbelt-card">
            <img src={belt.image} alt={belt.name} className="blackbelt-img" />
            <div className="blackbelt-info">
              <h2>{belt.name}</h2>
              <h4>{belt.year}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlackBelts;
