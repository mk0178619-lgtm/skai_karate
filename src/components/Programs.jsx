import "../styles/Programs.css";

function ProgramsSection() {
  const programs = [
    {
      title: "Traditional & Sports Karate",
      desc: "Balanced training in both disciplines."
    },
    {
      title: "Tournament Preparation",
      desc: "Coaching for State & National level championships."
    },
    {
      title: "Self-Defense Training",
      desc: "Practical skills for safety and confidence."
    }
  ];

  return (
    <div className="programs-container">
      <h2 className="programs-title">Our Programs</h2>
      <p className="programs-intro">
        Kids, Teens & Adults: Programs designed for all age groups.
      </p>

      <div className="programs-grid">
        {programs.map((program, index) => (
          <div key={index} className="program-card">
            <h3>{program.title}</h3>
            <p>{program.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgramsSection;
