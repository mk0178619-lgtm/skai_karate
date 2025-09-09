function Banner() {
  const bannerStyle = {
    textAlign: "center",
    background: "#fff",
    padding: "20px",
    marginBottom: "10px",
  };

  const titleStyle = {
    color: "#c00",
    fontSize: "2em",
    margin: "10px 0",
    textShadow: "1px 1px #aaa",
  };

  const subtitleStyle = {
    margin: "5px 0",
    fontSize: "1.1em",
  };

  const affiliatedStyle = {
    color: "#c00",
    fontWeight: "bold",
    marginTop: "10px",
  };

  const imgStyle = {
    height: "70px",
    margin: "0 10px",
    verticalAlign: "middle",
  };

  return (
    <div style={bannerStyle}>
      <div>
        <img src="/logo1.png" alt="Logo 1" style={imgStyle} />
        <img src="/logo2.png" alt="Logo 2" style={imgStyle} />
        <img src="/logo3.png" alt="Logo 3" style={imgStyle} />
        <img src="/olympic.png" alt="Olympic Logo" style={imgStyle} />
      </div>

      <h1 style={titleStyle}>KARATE INDIA ORGANISATION</h1>
      <p style={subtitleStyle}>
        WKF & AKF AFFILIATED NATIONAL FEDERATION FOR THE SPORTS OF KARATE IN INDIA
      </p>

      <p style={affiliatedStyle}>AFFILIATED WITH</p>
      <p>
        WORLD KARATE FEDERATION <br />
        ASIAN KARATE FEDERATION <br />
        COMMONWEALTH KARATE FEDERATION <br />
        SOUTH ASIAN KARATE DO FEDERATION
      </p>

      <p style={affiliatedStyle}>WKF RECOGNISED BY</p>
      <p>INTERNATIONAL OLYMPIC COMMITTEE</p>
    </div>
  );
}

export default Banner;
