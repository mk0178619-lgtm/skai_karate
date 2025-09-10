import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css"; 

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
    <div className="contact-section">
      {/* Title */}
      <h1 className="contact-title">Contact Us</h1>

      {/* Wrapper */}
      <div className="contact-wrapper">
        <div className="contact-grid">
          {/* Left: Info */}
          <div className="contact-info">
            <h2>Karate India Organisation</h2>
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

          {/* Right: Form */}
          <div className="contact-form">
            {status === "success" && (
              <div className="success-msg">
                ✅ Your message has been sent successfully!
              </div>
            )}
            {status === "error" && (
              <div className="error-msg">
                ❌ Failed to send. Please try again later.
              </div>
            )}

            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" required />

              <label>Email</label>
              <input type="email" name="user_email" required />

              <label>Message</label>
              <textarea name="message" required rows="5" />

              <button type="submit" disabled={isSending}>
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
