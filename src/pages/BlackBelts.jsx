import React from "react";
import "../styles/BlackBelts.css";

const blackBelts = [
  { name: "Sensei Hiroshi Tanaka", rank: "7th Dan Black Belt", image: "/Preloader.png" },
  { name: "Sensei Ramesh", rank: "5th Dan Black Belt", image: "/blackbelts/ramesh.jpg" },
  { name: "Sensei Arjun", rank: "4th Dan Black Belt", image: "/blackbelts/arjun.jpg" },
  { name: "Sensei Priya", rank: "3rd Dan Black Belt", image: "/blackbelts/priya.jpg" },
  { name: "Sensei Kiran", rank: "2nd Dan Black Belt", image: "/blackbelts/kiran.jpg" },
  // add more as needed
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
              <h4>{belt.rank}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlackBelts;
