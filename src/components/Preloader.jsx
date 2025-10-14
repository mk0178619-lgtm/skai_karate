import { useEffect, useState } from "react";
import "../styles/Preloader.css";

function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      // Trigger fade-out animation before removing completely
      setFadeOut(true);
      setTimeout(() => setLoading(false), 1000); // matches CSS animation time
    };

    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (!loading) return null;

  return (
    <div className={`preloader ${fadeOut ? "fade-out" : ""}`}>
      <img 
        src="/logos/SKAI-LOGO.PNG"  
        alt="Loading..."
        className="preloader-logo"
      />
    </div>
  );
}

export default Preloader;
