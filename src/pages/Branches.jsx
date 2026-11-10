import React, { useState, useEffect } from "react";
import "../styles/Branches.css"; 

const branches = [
  {
    name: "Kolathur, Chennai",
    images: ["/branches/1.JPG", "/branches/1A.JPG"],
    contact: "Contact Number: 96000 41923",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.703668962185!2d80.20956337454881!3d13.117949611653811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265e1c3a45015%3A0x99172a802290971d!2sSKAI%20karate_kolathur!5e0!3m2!1sen!2sin!4v1760604418501!5m2!1sen!2sin",
  },
  {
    name: "Periyar Nagar, Chennai",
    images: ["/branches/2.JPG", "/branches/2A.JPG"],
    contact: "Contact Number: 63792 04857",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.700511256201!2d80.21640787454879!3d13.118149411649416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265a63e729d8b%3A0xfb7eb1d077bbf0be!2sSKAI%20Karate%20Periyar%20Nagar!5e0!3m2!1sen!2sin!4v1760604581385!5m2!1sen!2sin",
  },
  {
    name: "Kallikuppam, Chennai",
    images: ["/branches/3.JPG", "/branches/3A.JPG"],
    contact: "Contact Number: 93601 54261",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.4337850122124!2d80.17389407454907!3d13.135015411275527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52630cd170c1c9%3A0xf0de3fb0cfb4fd03!2sSKAI%20karate%20%40Chuttie%20kutties!5e0!3m2!1sen!2sin!4v1760604662267!5m2!1sen!2sin",
  },
  {
    name: "AnnaNagar, Chennai",
    images: ["/branches/4.JPG", "/branches/4A.JPG"],
    contact: "Contact Number: 63792 04857",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.236743366301!2d80.20254937454828!3d13.084177012401163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526587ca2864ed%3A0x1909b40a239a21ca!2sSKAI%20Karate%20%40Kangaroo%20kids!5e0!3m2!1sen!2sin!4v1760604739906!5m2!1sen!2sin",
  },
  {
    name: "Thirumullaivoyal, Chennai",
    images: ["/branches/5.JPG", "/branches/5A.JPG"],
    contact: "Contact Number: 93601 54261",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124337.33083023323!2d79.98342519726563!3d13.128201200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263a3ee3ca7f3%3A0xd0a2518169fd538e!2sATTITUDE%20KIDS%20CBSE%20Concept%20Play%20school%20Thirumullaivoyal!5e0!3m2!1sen!2sin!4v1760678642728!5m2!1sen!2sin",
  },
  {
    name: "Villivakkam, Chennai",
    images: ["/branches/6.JPG", "/branches/6A.JPG"],
    contact: "Contact Number: 91508 64749",
    map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3885.6938294139973!2d80.20355607507894!3d13.118572187210495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDA3JzA2LjkiTiA4MMKwMTInMjIuMSJF!5e0!3m2!1sen!2sin!4v1760605804715!5m2!1sen!2sin",
  },
  {
    name: "Ambattur, Chennai",
    images: ["/branches/7.JPG", "/branches/7A.JPG"],
    contact: "Contact Number: 93601 54261",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.7200622231753!2d80.1517413!3d13.1169123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263bba15a46d3%3A0x465bd18306225f74!2sKavin's%20Sports%20Academy%20-%20Ambattur%20OT!5e0!3m2!1sen!2sin!4v1728858612345!5m2!1sen!2sin",
  },
  {
    name: "BanuNagar, Ambattur, Chennai",
    images: ["/branches/8.JPG", "/branches/8A.JPG"],
    contact: "Contact Number: 82208 17755, 90877 82501",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.434812192723!2d80.16060290000001!3d13.134950499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526365cd22f035%3A0x207317999fe4193a!2sRus%20Kendra%20Sports%20and%20Cultural%20Hub!5e0!3m2!1sen!2sin!4v1760604765468!5m2!1sen!2sin",
  },
  
];

function Branches() {
  const [imageIndexes, setImageIndexes] = useState(branches.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndexes((prevIndexes) =>
        prevIndexes.map((idx, branchIdx) => {
          const images = branches[branchIdx].images;
          return idx === images.length - 1 ? 0 : idx + 1;
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="branches-section">
      <h1 className="branches-title">Our Branches</h1>

      {branches.map((branch, index) => (
        <div className="branch-card" key={index}>
          <h2 className="branch-name">{branch.name}</h2>

          <div className="branch-grid">
            {/* Slideshow */}
            <div className="branch-images">
              {branch.images.map((img, imgIndex) => (
                <img
                  key={imgIndex}
                  src={img}
                  alt={branch.name}
                  className={imgIndex === imageIndexes[index] ? "active" : ""}
                />
              ))}
            </div>

            {/* Contact + Map */}
            <div className="branch-info">
              <p>{branch.contact}</p>
              <iframe
                src={branch.map}
                title={branch.name}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Branches;