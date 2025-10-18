import "../styles/Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-wrapper">
        {/* Left logos: SKAI (Top), KIO (Bottom) for desktop */}
        <div className="banner-logos-left">
          <img src="/logos/SKAI-LOGO.PNG" alt="Logo 1" className="banner-img" />
          <img src="/logos/GOJU-RYU-LOGO.PNG" alt="Logo 2" className="banner-img" />
        </div>

        {/* Center content */}
        <div className="banner-content">
          <h1 className="banner-title">SKAI KARATE KOLATHUR</h1>
          <p className="banner-subtitle"><strong>SKAI KARATE</strong></p>

          <p className="banner-section">
            Registered by Govt of India Reg.No: 199/2007 <br />
            Recognized by: Karate India Organisation (KIO) <br />
            Member of: Asian Karate Federation (AKF) & World Karate Federation (WKF) <br />
            Affiliated to: GOJU RYU SEIGOKAN KARATE DO KYOKAI (GSKK) BRAZIL <br />
            HQ: SEIGOKAN GOJU-RYU KARATE DO - JAPAN</p>
        </div>

        {/* Right logos: GOJU-RYU (Top) as requested, WKF (Bottom) for desktop */}
        <div className="banner-logos-right">
          <img src="/logos/KIO-LOGO.PNG" alt="Logo 3" className="banner-img" />
          <img src="/logos/WKF-LOGO.PNG" alt="Olympic Logo" className="banner-img" />
        </div>
      </div>
    </div>
  );
}

export default Banner;