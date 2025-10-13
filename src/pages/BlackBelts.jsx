import React from "react";
import "../styles/BlackBelts.css";

const blackBelts = [
  { name: "SREE RAMAN R", year: "2023", image: "/blackbelts/SREE RAMAN.jpg" },
  { name: "J. S. TASHWIN KAMAL", year: "2024", image: "/blackbelts/TASHWIN KAMAL.jpg" },
  { name: "K. S. KOWSHIK VIJAY", year: "2024", image: "/blackbelts/KOWSHIK VIJAY.jpg" },
  { name: "SARA S", year: "2025", image: "/blackbelts/SARA.jpg" },
  { name: "M. GANESH KUMAR", year: "2025", image: "/blackbelts/GANESH KUMAR.jpg" },
  { name: "HARI RAM R", year: "2025", image: "/blackbelts/HARI RAM.jpg" },
  { name: "SHAKSHINI SREE. H", year: "2025", image: "/blackbelts/SHAKSHINI SREE.jpg" },
  { name: "CHRISTOPHER KEERTHIK. G", year: "2025", image: "/blackbelts/CHRISTOPHER KEERTHIK.jpg" },
  { name: "VINCENT VIGNESH. G", year: "2025", image: "/blackbelts/VINCENT VIGNESH.jpg" },
  { name: "CHANASYAA KRISHNAN", year: "2025", image: "/blackbelts/CHANASYAA KRISHNAN.jpg" },
  { name: "M. D. MADHAV ABHIMANYU", year: "2025", image: "/blackbelts/MADHAV ABHIMANYU.jpg" },
  { name: "KEERTHIAKSHARA. S", year: "2025", image: "/blackbelts/KEERTHIAKSHARA.jpg" },
  { name: "P. VIDHARTH", year: "2025", image: "/blackbelts/VIDHARTH.jpg" },
  { name: "V. H. VARSHITH", year: "2025", image: "/blackbelts/VARSHITH.jpg" },
  { name: "ELANKADIR S", year: "2025", image: "/blackbelts/ELANKADIR.jpg" },
  { name: "ARUNAN S", year: "2025", image: "/blackbelts/ARUNAN.jpg" },
  { name: "G. S. RAMCHARAN", year: "2025", image: "/blackbelts/RAMCHARAN.jpg" },
  { name: "TANISHA. N", year: "2025", image: "/blackbelts/TANISHA.jpg" },
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
