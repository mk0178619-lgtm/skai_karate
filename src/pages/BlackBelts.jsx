import React from "react";
import "../styles/BlackBelts.css";

const blackBelts = [
  { name: "SREE RAMAN R", year: "2023", image: "/blackbelts/SREE_RAMAN.JPG" },
  { name: "J. S. TASHWIN KAMAL", year: "2024", image: "/blackbelts/TASHWIN_KAMAL.JPG" },
  { name: "K. S. KOWSHIK VIJAY", year: "2024", image: "/blackbelts/KOWSHIK_VIJAY.JPG" },
  { name: "SARA S", year: "2025", image: "/blackbelts/SARA.JPG" },
  { name: "M. GANESH KUMAR", year: "2025", image: "/blackbelts/GANESH_KUMAR.JPG" },
  { name: "HARI RAM R", year: "2025", image: "/blackbelts/HARI_RAM.JPG" },
  { name: "SHAKSHINI SREE. H", year: "2025", image: "/blackbelts/SHAKSHINI_SREE.JPG" },
  { name: "CHRISTOPHER KEERTHIK. G", year: "2025", image: "/blackbelts/CHRISTOPHER_KEERTHIK.JPG" },
  { name: "VINCENT VIGNESH. G", year: "2025", image: "/blackbelts/VINCENT_VIGNESH.JPG" },
  { name: "CHANASYAA KRISHNAN", year: "2025", image: "/blackbelts/CHANASYAA_KRISHNAN.JPG" },
  { name: "M. D. MADHAV ABHIMANYU", year: "2025", image: "/blackbelts/MADHAV_ABHIMANYU.JPG" },
  { name: "KEERTHIAKSHARA. S", year: "2025", image: "/blackbelts/KEERTHIAKSHARA.JPG" },
  { name: "P. VIDHARTH", year: "2025", image: "/blackbelts/VIDHARTH.JPG" },
  { name: "V. H. VARSHITH", year: "2025", image: "/blackbelts/VARSHITH.JPG" },
  { name: "ELANKADIR S", year: "2025", image: "/blackbelts/ELANKADIR.JPG" },
  { name: "ARUNAN S", year: "2025", image: "/blackbelts/ARUNAN.JPG" },
  { name: "G. S. RAMCHARAN", year: "2025", image: "/blackbelts/RAMCHARAN.JPG" },
  { name: "TANISHA. N", year: "2025", image: "/blackbelts/TANISHA.JPG" },
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
