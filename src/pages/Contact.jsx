import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_poxq6wb", // replace with your service ID
        "template_01e2jck", // replace with your template ID
        form.current,
        "kh2Bum8xYOYKGN8OA" // replace with your public key
      )
      .then(
        () => {
          setStatus("success");
          setIsSending(false);
          e.target.reset();
          setTimeout(() => setStatus(""), 2500);
        },
        () => {
          setStatus("error");
          setIsSending(false);
          setTimeout(() => setStatus(""), 2500);
        }
      );
  };

  return (
   <div style={{ background: "#fff", padding: "50px 20px" }}>
  {/* Title above the box */}
  <h1
    style={{
      textAlign: "center",
      marginBottom: "30px",
      color: "#222",
    }}
  >Contact Us</h1>
      {/* Wrapper with white background */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",  
          background: "#f5f5f5",
          padding: "40px",
          alignment: "center",
          margin: "0 auto",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          maxWidth: "1100px",
          width: "100%",
          overflow: "hidden",
        }}
      >
        

        {/* Two columns below the title */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "40px",
          }}
        >
          {/* Left side: Contact Info */}
          <div style={{ flex: 1 }}>
            <h2 style={{ color: "#c00", marginBottom: "15px" }}>
              Karate India Organisation
            </h2>
            <p>
              G-1, PLOT NO. 18, B-BLOCK DDA COMMUNITY CENTRE, <br />
              JANAK PURI, NEW DELHI-110058, INDIA
            </p>
            <p>
              <strong>Email:</strong> karateindiaorganisation@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> +91-11-49028338
            </p>
          </div>

          {/* Right side: Contact Form */}
          <div style={{ flex: 1 }}>
            {/* Success/Error Messages */}
            {status === "success" && (
              <div style={{ marginBottom: "20px", color: "green", fontSize: "20px" }}>
                ✅ Your message has been sent successfully!
              </div>
            )}
            {status === "error" && (
              <div style={{ marginBottom: "20px", color: "red", fontSize: "20px" }}>
                ❌ Failed to send. Please try again later.
              </div>
            )}

            <form ref={form} onSubmit={sendEmail}>
              <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
                Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "15px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                }}
              />

              <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
                Email
              </label>
              <input
                type="email"
                name="user_email"
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "15px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                }}
              />

              <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
                Message
              </label>
              <textarea
                name="message"
                required
                rows="5"
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "15px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                }}
              />

              <button
                type="submit"
                disabled={isSending}
                style={{
                  padding: "10px 25px",
                  border: "none",
                  borderRadius: "6px",
                  backgroundColor: isSending ? "#999" : "#ff0000ff",
                  color: "#fff",
                  fontSize: "16px",
                  cursor: isSending ? "not-allowed" : "pointer",
                }}
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
