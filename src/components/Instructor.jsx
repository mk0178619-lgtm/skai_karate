import { useState } from "react";
import "../styles/Instructor.css"; // Import CSS

function InstructorCarousel() {
  const instructors = [
    { id: 1, name: "Sensei R. Takeshi Fukuchi", rank: "8th Dan", img: "/Preloader.png" },
    { id: 2, name: "Sensei Carlos Marcos Gigena", rank: "6th Dan", img: "/images/instructor2.jpg" },
    { id: 3, name: "Sensei Dodi Rochadi", rank: "6th Dan", img: "/images/instructor3.jpg" },
    { id: 4, name: "Sensei Júlio Almeida", rank: "5th Dan", img: "/images/instructor4.jpg" },
    { id: 5, name: "Sensei Instructor 5", rank: "4th Dan", img: "/images/instructor5.jpg" },
    { id: 6, name: "Sensei Instructor 6", rank: "3rd Dan", img: "/images/instructor6.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = window.innerWidth <= 768 ? 1 : 4; // 1 for mobile, 4 for desktop
  const totalSlides = Math.ceil(instructors.length / itemsPerPage);

  const nextSlide = () => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Our Instructors</h2>
      <div className="carousel-wrapper">
        <button className="arrow left" onClick={prevSlide} disabled={currentIndex === 0}>
          ❮
        </button>

        <div className="carousel-content">
          {instructors
            .slice(currentIndex * itemsPerPage, currentIndex * itemsPerPage + itemsPerPage)
            .map((inst) => (
              <div key={inst.id} className="card">
                <img src={inst.img} alt={inst.name} />
                <h3>{inst.name}</h3>
                <p>{inst.rank}</p>
              </div>
            ))}
        </div>

        <button
          className="arrow right"
          onClick={nextSlide}
          disabled={currentIndex === totalSlides - 1}
        >
          ❯
        </button>
      </div>
    </div>
  );
}

export default InstructorCarousel;
