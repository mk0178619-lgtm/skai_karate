import InstructorCarousel from "../components/Instructor";
import ProgramsSection from "../components/Programs"; 
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to TEAM SKAI_KOLATHUR </h1>
        <p>
          where discipline, confidence, and strength are built through Karate training. Headed by Sensei K. Manikandan (4th Dan, KIO – National Judge) under the mentorship of Shihan B. Duraivelu (6th Dan, AKF & WKF – Judge)
        </p>
      </section>

      {/* Instructors Section */}
      <section className="instructors">
        <InstructorCarousel />
      </section>
    </div>
  );
}

export default Home;
