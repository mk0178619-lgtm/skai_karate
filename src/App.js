import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import BlackBelts from "./pages/BlackBelts";
import Achievements from "./pages/Achievements";
import Branches from "./pages/Branches";
import Contact from "./pages/Contact";
import CertificatePage from "./pages/CertificatePage";
import PrintCertificate from "./pages/PrintCertificate";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import Banner from "./components/Banner"; 
import ScrollToTop from "./components/ScrollToTop";

// Certificate pages (QR verification + printing) are shown on their own,
// without the site banner / menu / footer, and without the splash preloader.
const CERTIFICATE_PATHS = ["/verify", "/print-certificate"];
const isCertificatePath = (pathname) =>
  CERTIFICATE_PATHS.some(
    (base) => pathname === base || pathname.startsWith(base + "/")
  );

function SiteLayout() {
  const { pathname } = useLocation();
  const standalone = isCertificatePath(pathname);

  return (
    <>
      {!standalone && <Banner />}
      {!standalone && <Navbar />}
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blackbelts" element={<BlackBelts />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/verify" element={<CertificatePage />} />
        <Route path="/verify/:id" element={<CertificatePage />} />
        <Route path="/print-certificate/:id" element={<PrintCertificate />} />
      </Routes>
      {!standalone && <Footer />}
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(
    () => !isCertificatePath(window.location.pathname)
  );

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Router>
      <SiteLayout />
    </Router>
  );
}

export default App;
