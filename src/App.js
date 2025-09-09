import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import BlackBelts from "./pages/BlackBelts";
import Achievements from "./pages/Achievements";
import Branches from "./pages/Branches";
import Contact from "./pages/Contact";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import Banner from "./components/Banner"; // ✅ import Banner

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake loading for 2 seconds
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Router>
      <Banner />   {/* ✅ Banner on top */}
      <Navbar />   {/* ✅ Navbar below it */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blackbelts" element={<BlackBelts />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
