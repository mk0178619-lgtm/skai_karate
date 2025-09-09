import React, { useState, useEffect } from "react";

const branches = [
  {
    name: "Chennai",
    images: ["/Preloader.png", "/branches/chennai2.jpg"],
    address: "123, Mount Road, Chennai, Tamil Nadu",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.9826030112145!2d80.1877974749207!3d13.100288587227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264015acf98cb%3A0xf816b8fcbc7b4c1c!2sSaravana%20Store!5e0!3m2!1sen!2sin!4v1757425867225!5m2!1sen!2sin",
  },
  {
    name: "Bangalore",
    images: ["/branches/bangalore1.jpg", "/branches/bangalore2.jpg"],
    address: "456, MG Road, Bangalore, Karnataka",
    map: "https://www.google.com/maps/embed?pb=YOUR_BANGALORE_EMBED_CODE",
  },
   {
    name: "Chennai",
    images: ["/Preloader.png", "/branches/chennai2.jpg"],
    address: "123, Mount Road, Chennai, Tamil Nadu",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.9826030112145!2d80.1877974749207!3d13.100288587227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264015acf98cb%3A0xf816b8fcbc7b4c1c!2sSaravana%20Store!5e0!3m2!1sen!2sin!4v1757425867225!5m2!1sen!2sin",
  },
  {
    name: "Bangalore",
    images: ["/branches/bangalore1.jpg", "/branches/bangalore2.jpg"],
    address: "456, MG Road, Bangalore, Karnataka",
    map: "https://www.google.com/maps/embed?pb=YOUR_BANGALORE_EMBED_CODE",
  },
   {
    name: "Chennai",
    images: ["/Preloader.png", "/branches/chennai2.jpg"],
    address: "123, Mount Road, Chennai, Tamil Nadu",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.9826030112145!2d80.1877974749207!3d13.100288587227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264015acf98cb%3A0xf816b8fcbc7b4c1c!2sSaravana%20Store!5e0!3m2!1sen!2sin!4v1757425867225!5m2!1sen!2sin",
  },
  {
    name: "Bangalore",
    images: ["/branches/bangalore1.jpg", "/branches/bangalore2.jpg"],
    address: "456, MG Road, Bangalore, Karnataka",
    map: "https://www.google.com/maps/embed?pb=YOUR_BANGALORE_EMBED_CODE",
  },
   {
    name: "Chennai",
    images: ["/Preloader.png", "/branches/chennai2.jpg"],
    address: "123, Mount Road, Chennai, Tamil Nadu",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.9826030112145!2d80.1877974749207!3d13.100288587227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264015acf98cb%3A0xf816b8fcbc7b4c1c!2sSaravana%20Store!5e0!3m2!1sen!2sin!4v1757425867225!5m2!1sen!2sin",
  },
  {
    name: "Bangalore",
    images: ["/branches/bangalore1.jpg", "/branches/bangalore2.jpg"],
    address: "456, MG Road, Bangalore, Karnataka",
    map: "https://www.google.com/maps/embed?pb=YOUR_BANGALORE_EMBED_CODE",
  },
];

function Branches() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) =>
        prevIndex === branches[0].images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px",backgroundColor:"#fff" }}>Our Branches</h1>

      {branches.map((branch, index) => (
        <div
          key={index}
          style={{
            background: "#f5f5f5", 
            padding: "30px",
            marginBottom: "40px",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        >
          {/* Branch name */}
          <h2 style={{ color: "#ff0000ff", textAlign: "center", marginBottom: "20px" }}>
            {branch.name}
          </h2>

          {/* Grid Layout */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              alignItems: "center",
            }}
          >
            {/* Slideshow */}
            <div>
              <img
                src={branch.images[imageIndex]}
                alt={branch.name}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                }}
              />
            </div>

            {/* Address + Map */}
            <div style={{ textAlign: "left" }}>
              <p style={{ fontSize: "18px", marginBottom: "10px" }}>
                {branch.address}
              </p>
              <iframe
                src={branch.map}
                width="100%"
                height="250"
                style={{ border: "0", borderRadius: "10px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={branch.name}
              ></iframe>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Branches;
