import React, { useState, useEffect, useMemo } from "react";
import "../styles/Achievements.css";

const achievements = [
  {
    title: "TamilNadu State Sub - Junior Karate Championship at Trichy.",
    year: "2025",
    image: ["/achievements/1.JPG", "/achievements/1A.JPG"],
  },
  {
    title: "Thiruvallur District Sub - Junior Karate Championship.",
    year: "2025",
    image: "/achievements/2.JPG",
  },
  {
    title: "Chennai District Sub - Junior Karate Championship.",
    year: "2025",
    image: ["/achievements/3.JPG", "/achievements/3A.JPG"],
  },
  {
    title: "Thiruvallur District Cadets, Junior, Senior & U18 Karate Championship.",
    year: "2025",
    image: ["/achievements/4.JPG", "/achievements/4A.JPG"],
  },
  {
    title: "2nd State Open Karate Championship.",
    year: "2025",
    image: ["/achievements/5.JPG", "/achievements/5A.JPG"],
  },
  {
    title: "KIO All India Sub - Junior Championship at Delhi.",
    year: "2024",
    image: ["/achievements/6.JPG", "/achievements/6A.JPG"],
  },
  {
    title: "Our Team SKAI_Kolathur at 68th National School Games TN State Karate Selection at Karaikudi.",
    year: "2024",
    image: "/achievements/7.JPG",
  },
  {
    title: "Our Sensei K.MANIKANDAN has been officially appointed as OBSERVER of 68th National School Games TN State Karate Selection at Karaikudi.",
    year: "2024",
    image: ["/achievements/8.JPG", "/achievements/8A.JPG"],
  },
  {
    title: "KIO All India Sub - Junior Championship at Delhi.",
    year: "2023",
    image: "/achievements/9.JPG",
  },
  {
    title: "South India Zonal Karate Championship at Chennai.",
    year: "2024",
    image: ["/achievements/10.JPG", "/achievements/10A.JPG"],
  },
  {
    title: "TamilNadu State Sub - Junior Karate Championship at Chennai.",
    year: "2024",
    image: ["/achievements/11.JPG", "/achievements/11A.JPG"],
  },
  {
    title: "Our State Medalist met R.TIRUPPATI VENKATASWAMY IAAS sir.",
    year: "2024",
    image: "/achievements/12.JPG",
  },
  {
    title: "SHOBUKAI South India Level Open Championship.",
    year: "2024",
    image: "/achievements/13.JPG",
  },
  {
    title: "21st OKGKS National Karate Invitational Championship.",
    year: "2024",
    image: ["/achievements/14.JPG", "/achievements/14A.JPG"],
  },
  {
    title: "Overall Trophy at SHOBUKAI South India Level Open Championship.",
    year: "2024",
    image: "/achievements/15.JPG",
  },
  {
    title: "15th SHOBUKAI All India Level Open Championship.",
    year: "2024",
    image: ["/achievements/16.JPG", "/achievements/16A.JPG"],
  },
  {
    title: "Overall Trophy at 2nd South India Level Open Championship at Erode.",
    year: "2024",
    image: "/achievements/17.JPG",
  },
  {
    title: "2nd South India Level Open Championship at Erode.",
    year: "2024",
    image: "/achievements/18.JPG",
  },
  {
    title: "TN State Karate Championship at Trichy.",
    year: "2023",
    image: "/achievements/19.JPG",
  },
  {
    title: "3rd Open Karate Championship.",
    year: "2023",
    image: "/achievements/20.JPG",
  },
  {
    title: "Overall Trophy at KEMPO Invitational Open Karate Championship.",
    year: "2023",
    image: "/achievements/21.JPG",
  },
  {
    title: "Elite Open Karate Championship.",
    year: "2022",
    image: "/achievements/22.JPG",
  },
  {
    title: "Overall Trophy at 2nd State Level Invitational Karate Championship.",
    year: "2022",
    image: "/achievements/23.JPG",
  },
  {
    title: "2nd State Level Invitational Karate Championship.",
    year: "2022",
    image: "/achievements/24.JPG",
  },
  {
    title: "Overall Trophy at MBSK Invitation Karate Championship.",
    year: "2022",
    image: "/achievements/25.JPG",
  },
  {
    title: "MBSK Invitation Karate Championship.",
    year: "2022",
    image: ["/achievements/26.JPG", "/achievements/26A.JPG"],
  },
  {
    title: "Chennai Open Karate (COK) Championship & League.",
    year: "2022",
    image: "/achievements/27.JPG",
  },
  {
    title: "TamilNadu State Sub-Junior Karate Championship.",
    year: "2022",
    image: ["/achievements/28.JPG", "/achievements/28A.JPG"],
  },
  {
    title: "Thiruvallur District Sub - Junior Karate Championship.",
    year: "2022",
    image: "/achievements/29.JPG",
  },
  {
    title: "1st All India Goju-Ryu Karate Championship.",
    year: "2017",
    image: "/achievements/30.JPG",
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
