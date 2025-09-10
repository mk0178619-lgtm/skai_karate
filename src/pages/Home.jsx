import InstructorCarousel from "../components/Instructor";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Our Karate Academy</h1>
        <p>
          Discipline, strength, and respect are the pillars of our training. Join
          us to master the art of Karate and build a strong mind and body.
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
