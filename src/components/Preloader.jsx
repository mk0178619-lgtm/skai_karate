import { useEffect, useState } from "react";
import "../styles/Preloader.css";

function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 1000); 
    };

    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (!loading) return null;

  return (
    <div className={`preloader ${fadeOut ? "fade-out" : ""}`}>
      <div className="preloader-content">
        <img
          src="/logos/SKAI-LOGO.PNG"
          alt="Loading..."
          className="preloader-logo"
        />
        <h1 className="preloader-title">SKAI KARATE KOLATHUR</h1>
        <p className="preloader-anniversary">
          Marking 15 Years of Outstanding Contribution to Karate
        </p>
      </div>
    </div>
  );
}

export default Preloader;
