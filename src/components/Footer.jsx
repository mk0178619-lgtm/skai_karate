function Footer() {
  const footerStyle = {
    textAlign: "center",
    padding: "15px 10px",
    background: "#222",
    color: "#fff",
    fontSize: "0.9rem",
    lineHeight: "1.5",
  };

  const containerStyle = {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "0 10px",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p>© 2025 Karate Academy | All Rights Reserved</p>
        <p style={{ fontSize: "0.8rem", marginTop: "5px", opacity: 0.8 }}>
          Designed & Developed with ❤️
        </p>
      </div>
    </footer>
  );
}

export default Footer;
