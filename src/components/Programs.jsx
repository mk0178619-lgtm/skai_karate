import "../styles/Programs.css";

function ProgramsSection() {
  const programs = [
    {
      title: "Traditional & Sports Karate",
      desc: "Balanced training in both disciplines.",
      image: "/programs/Traditional-and-sports-karate.JPG",
    },
    {
      title: "Tournament Preparation",
      desc: "Coaching for State & National level championships.",
      image: "/programs/Tournament-training.JPG",
    },
    {
      title: "Self-Defense Training",
      desc: "Practical skills for safety and confidence.",
      image: "/programs/Self-defence.JPG",
    },
    {
      title: "Kids, Teens & Adults",
      desc: "Programs designed for all age groups.",
      image: "/programs/Teen-karate.JPG",
    },
  ];

  return (
    <div className="programs-container">
      <h2 className="programs-title">Our Programs</h2>
      <p className="programs-intro">
        We offer comprehensive training programs that focus on discipline, fitness, self-defence, and character building. 
      </p>

      <div className="programs-grid">
        {programs.map((program, index) => (
          <div
            key={index}
            className="program-card"
            style={{ backgroundImage: `url(${program.image})` }}
          >
            <div className="overlay">
              <h3>{program.title}</h3>
              <p>{program.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgramsSection;
