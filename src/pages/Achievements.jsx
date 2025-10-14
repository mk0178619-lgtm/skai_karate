import React, { useState, useEffect, useMemo } from "react";
import "../styles/Achievements.css";

const achievements = [
  {
    title: "National Karate Championship",
    year: "2024",
    image: ["/achievements/1.JPG", "/achievements/1A.JPG"],
  },
  {
    title: "International Karate Meet",
    year: "2023",
    image: "/achievements/2.JPG",
  },
  {
    title: "State Level Tournament",
    year: "2022",
    image: ["/achievements/3.JPG", "/achievements/3A.JPG"],
  },
  {
    title: "Dojo Excellence Award",
    year: "2021",
    image: ["/achievements/4.JPG", "/achievements/4A.JPG"],
  },
  {
    title: "National Karate Championship",
    year: "2024",
    image: ["/achievements/5.JPG", "/achievements/5A.JPG"],
  },
  {
    title: "International Karate Meet",
    year: "2023",
    image: ["/achievements/6.JPG", "/achievements/6A.JPG"],
  },
  {
    title: "State Level Tournament",
    year: "2022",
    image: "/achievements/7.JPG",
  },
  {
    title: "Dojo Excellence Award",
    year: "2021",
    image: "/achievements/8.JPG",
  },
  {
    title: "National Karate Championship",
    year: "2024",
    image: ["/achievements/9.JPG", "/achievements/9A.JPG"],
  },
  {
    title: "International Karate Meet",
    year: "2023",
    image: ["/achievements/10.JPG", "/achievements/10A.JPG"],
  },
  {
    title: "State Level Tournament",
    year: "2022",
    image: "/achievements/11.JPG",
  },
  {
    title: "Dojo Excellence Award",
    year: "2021",
    image: "/achievements/12.JPG",
  },
  {
    title: "National Karate Championship",
    year: "2024",
    image: ["/achievements/13.JPG", "/achievements/13A.JPG"],
  },
  {
    title: "International Karate Meet",
    year: "2023",
    image: "/achievements/14.JPG",
  },
  {
    title: "State Level Tournament",
    year: "2022",
    image: ["/achievements/15.JPG", "/achievements/15A.JPG"],
  },
  {
    title: "Dojo Excellence Award",
    year: "2021",
    image: "/achievements/16.JPG",
  },
  {
    title: "National Karate Championship",
    year: "2024",
    image: "/achievements/17.JPG"
  },
  {
    title: "International Karate Meet",
    year: "2023",
    image: "/achievements/18.JPG",
  },
  {
    title: "State Level Tournament",
    year: "2022",
    image: "/achievements/19.JPG"
  },
  {
    title: "Dojo Excellence Award",
    year: "2021",
    image: "/achievements/20.JPG",
  },
  {
    title: "National Karate Championship",
    year: "2024",
    image: "/achievements/21.JPG"
  },
  {
    title: "International Karate Meet",
    year: "2023",
    image: "/achievements/22.JPG",
  },
  {
    title: "State Level Tournament",
    year: "2022",
    image: "/achievements/23.JPG"
  },
  {
    title: "Dojo Excellence Award",
    year: "2021",
    image: "/achievements/24.JPG",
  },
  {
    title: "National Karate Championship",
    year: "2024",
    image: ["/achievements/25.JPG", "/achievements/25A.JPG"],
  },
  {
    title: "International Karate Meet",
    year: "2023",
    image: "/achievements/26.JPG",
  },
  {
    title: "State Level Tournament",
    year: "2022",
    image: ["/achievements/27.JPG", "/achievements/27A.JPG"],
  },
  {
    title: "Dojo Excellence Award",
    year: "2021",
    image: "/achievements/28.JPG",
  },
];

function Achievements() {
  return (
    <div className="achievements-container">
      <h1 className="achievements-title">Achievements</h1>
      <div className="achievements-list">
        {achievements.map((item, index) => (
          <AchievementCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

function AchievementCard({ item }) {
  // Normalize images array and memoize it to avoid unnecessary re-renders
  const images = useMemo(
    () => (Array.isArray(item.image) ? item.image : [item.image]),
    [item.image]
  );

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [images]);

  return (
    <div className="achievement-card">
      <div className="achievement-image-container">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={item.title}
            className="achievement-img"
            style={{
              opacity: idx === current ? 1 : 0,
              position: "absolute",
              top: 0,
              left: 0,
            }}
            onError={(e) => (e.target.style.display = "none")}
          />
        ))}
      </div>

      <div className="achievement-info">
        <h2>{item.title}</h2>
        <h4>{item.year}</h4>
      </div>
    </div>
  );
}

export default Achievements;
