import React from "react";
import "../styles/Achievements.css";

const achievements = [
  {
    title: "National Karate Championship",
    year: "2024",
    image: "/achievements/IMG_0647.JPG",
  },
  {
    title: "International Karate Meet",
    year: "2023",
    image: "/achievements/international.jpg",
  },
  {
    title: "State Level Tournament",
    year: "2022",
    image: "/achievements/state.jpg",
  },
  {
    title: "Dojo Excellence Award",
    year: "2021",
    image: "/achievements/excellence.jpg",
  },
];

function Achievements() {
  return (
    <div className="achievements-container">
      <h1 className="achievements-title">Achievements</h1>
      <div className="achievements-list">
        {achievements.map((item, index) => (
          <div className="achievement-card" key={index}>
            <img
              src={item.image}
              alt={item.title}
              className="achievement-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = "none";
              }}
            />
            <div className="achievement-info">
              <h2>{item.title}</h2>
              <h4>{item.year}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
