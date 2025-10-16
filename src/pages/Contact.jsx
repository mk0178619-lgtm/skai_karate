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
        "service_ioboez6",
        "template_mzu35zl",
        form.current,
        "Bo9O2h_vJ9lwUH_Tl"
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
          <h2>SKAI Karate Kolathur </h2>
          <p>
            No: 48/53, Rajarajeswari Nagar,
            <br />
            Kolathur, Chennai - 600099.
          </p>
          <p>
            <strong>Email:</strong> skaikolathur.2011@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> 96000 41923
          </p>
        </div>

        <div className="contact-form-wrapper">
          {status === "success" && (
            <div className="status success">Your message has been sent successfully!</div>
          )}
          {status === "error" && (
            <div className="status error">Failed to send. Please try again later.</div>
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
