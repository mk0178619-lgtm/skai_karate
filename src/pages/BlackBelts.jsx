import React from "react";

const blackBelts = [
  { name: "Sensei Hiroshi Tanaka", rank: "7th Dan Black Belt", image: "/blackbelts/hiroshi.jpg" },
  { name: "Sensei Ramesh", rank: "5th Dan Black Belt", image: "/blackbelts/ramesh.jpg" },
  { name: "Sensei Arjun", rank: "4th Dan Black Belt", image: "/Preloader.png" },
  { name: "Sensei Arjun", rank: "4th Dan Black Belt", image: "/Preloader.png" },
  { name: "Sensei Arjun", rank: "4th Dan Black Belt", image: "/blackbelts/arjun.jpg" },{ name: "Sensei Hiroshi Tanaka", rank: "7th Dan Black Belt", image: "/blackbelts/hiroshi.jpg" },
  { name: "Sensei Ramesh", rank: "5th Dan Black Belt", image: "/blackbelts/ramesh.jpg" },
  { name: "Sensei Arjun", rank: "4th Dan Black Belt", image: "/Preloader.png" },
  { name: "Sensei Arjun", rank: "4th Dan Black Belt", image: "/Preloader.png" },
  { name: "Sensei Arjun", rank: "4th Dan Black Belt", image: "/blackbelts/arjun.jpg" },{ name: "Sensei Hiroshi Tanaka", rank: "7th Dan Black Belt", image: "/blackbelts/hiroshi.jpg" },
  { name: "Sensei Ramesh", rank: "5th Dan Black Belt", image: "/blackbelts/ramesh.jpg" },
  { name: "Sensei Arjun", rank: "4th Dan Black Belt", image: "/Preloader.png" },
  { name: "Sensei Arjun", rank: "4th Dan Black Belt", image: "/Preloader.png" },
  { name: "Sensei Arjun", rank: "4th Dan Black Belt", image: "/blackbelts/arjun.jpg" },{ name: "Sensei Hiroshi Tanaka", rank: "7th Dan Black Belt", image: "/blackbelts/hiroshi.jpg" },
  { name: "Sensei Ramesh", rank: "5th Dan Black Belt", image: "/blackbelts/ramesh.jpg" },
  { name: "Sensei Arjun", rank: "4th Dan Black Belt", image: "/Preloader.png" },
  { name: "Sensei Arjun", rank: "4th Dan Black Belt", image: "/Preloader.png" },
  { name: "Sensei Arjun", rank: "4th Dan Black Belt", image: "/blackbelts/arjun.jpg" },
];

function BlackBelts() {
  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px",backgroundColor:"#fff" }}>Our Black Belts</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)", 
          gap: "30px",
        }}
      >
        {blackBelts.map((belt, index) => (
          <div
            key={index}
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              textAlign: "center",
              backgroundColor: "#f5f5f5",
            }}
          >
            <img
              src={belt.image}
              alt={belt.name}
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
              
            />
            <div style={{ padding: "15px" }}>
              <h2 style={{ margin: "10px 0", fontSize: "20px" }}>{belt.name}</h2>
              <h4 style={{ margin: "5px 0", color: "#555" }}>{belt.rank}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlackBelts;
