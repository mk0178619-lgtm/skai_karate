import React, { useRef, useState } from "react";
import "../styles/Contact.css";
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
        "service_poxq6wb",
        "template_01e2jck",
        form.current,
        "kh2Bum8xYOYKGN8OA"
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
    <div className="contact-page">
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Karate India Organisation</h2>
          <p>
            G-1, PLOT NO. 18, B-BLOCK DDA COMMUNITY CENTRE,
            <br />
            JANAK PURI, NEW DELHI-110058, INDIA
          </p>
          <p>
            <strong>Email:</strong> karateindiaorganisation@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> +91-11-49028338
          </p>
        </div>

        <div className="contact-form-wrapper">
          {status === "success" && (
            <div className="status success">✅ Your message has been sent successfully!</div>
          )}
          {status === "error" && (
            <div className="status error">❌ Failed to send. Please try again later.</div>
          )}

          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" required />

            <label>Email</label>
            <input type="email" name="user_email" required />

            <label>Message</label>
            <textarea name="message" rows="5" required />

            <button type="submit" disabled={isSending}>
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
