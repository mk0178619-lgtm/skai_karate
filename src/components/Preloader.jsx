import { useEffect, useState } from "react";

function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f20606ff"
      }}>
        <img 
          src="/Preloader.png"  // put your image in public folder (public/logo.png)
          alt="Loading..."
          style={{ width: "300px", height: "300px" }}
        />
      </div>
    );
  }

  return null;
}

export default Preloader;
