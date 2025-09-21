import ImageSlider from "../components/ImageSlider";
import InstructorCarousel from "../components/Instructor";
import ProgramsSection from "../components/Programs";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Top Image Slider */}
      <section className="slider-section">
        <ImageSlider />
      </section>

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to TEAM SKAI_KOLATHUR</h1>
        <p>
          Where discipline, confidence, and strength are built through Karate
          training. Headed by <b>Sensei K. Manikandan</b> (4th Dan, KIO –
          National Judge) under the mentorship of <b>Shihan B. Duraivelu</b>{" "}
          (6th Dan, AKF & WKF – Judge).With years of experience and a strong foundation in traditional & Sports karate, our team is dedicated to spreading the true spirit of martial arts.

        </p>
      </section>

      {/* Instructors Section */}
      <section className="instructors-section">
        <InstructorCarousel />
      </section>

      {/* Programs Section */}
      <section className="programs-section">
        <ProgramsSection />
      </section>

      {/* Outro Text */}
      <section className="hero outro">
        <p>
          Over the years, TEAM SKAI_KOLATHUR has built a proven track record of
          success, producing champions who have excelled at State and National
          levels.
        </p>
      </section>
    </div>
  );
}

export default Home;
