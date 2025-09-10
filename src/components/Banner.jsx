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
          <h1 className="banner-title">KARATE INDIA ORGANISATION</h1>
          <p className="banner-subtitle">
            WKF & AKF AFFILIATED NATIONAL FEDERATION FOR THE SPORTS OF KARATE IN INDIA
          </p>

          <p className="banner-section">AFFILIATED WITH</p>
          <p>
            WORLD KARATE FEDERATION <br />
            ASIAN KARATE FEDERATION <br />
            COMMONWEALTH KARATE FEDERATION <br />
            SOUTH ASIAN KARATE DO FEDERATION
          </p>

          <p className="banner-section">WKF RECOGNISED BY</p>
          <p>INTERNATIONAL OLYMPIC COMMITTEE</p>
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
