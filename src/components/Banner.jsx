import "../styles/Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-wrapper">
        {/* Left logos */}
        <div className="banner-logos-left">
          <img src="/Preloader.png" alt="Logo 1" className="banner-img" />
          <img src="/Preloader.png" alt="Logo 2" className="banner-img" />
        </div>

        {/* Center content */}
        <div className="banner-content">
          <h1 className="banner-title">SKAI KARATE KOLATHUR</h1>
          <p className="banner-subtitle"><strong>SKAI KARATE</strong></p>

          <p className="banner-section">
            Registered by Govt of India Reg.No: 119/2007 <br />
            Recognized by: Karate India Organisation (KIO) <br />
            Member of: Asian Karate Federation (AKF) & World Karate Federation (WKF) <br />
            Affiliated to: GOJU RYU SEIGOKAN KARATE DO KYOKAI (GSKK) BRAZIL <br />
            HQ: SEIGOKAN GOJU-RYU KARATE DO - JAPAN</p>
        </div>

        {/* Right logos */}
        <div className="banner-logos-right">
          <img src="/Preloader.png" alt="Logo 3" className="banner-img" />
          <img src="/Preloader.png" alt="Olympic Logo" className="banner-img" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
