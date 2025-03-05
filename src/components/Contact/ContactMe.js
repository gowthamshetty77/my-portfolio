import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactMe.css";

const ContactMe = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          setIsLoading(false);
          setIsSuccess(true);
          setTimeout(() => {
            setIsSuccess(false);
          }, 2000);
          form.current.reset();
        },
        (error) => {
          setIsLoading(false);
          setIsFailure(true);
          setTimeout(() => {
            setIsFailure(false);
          }, 2000);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div
        className={`alert alert-success alertMessage ${
          isSuccess ? "show" : ""
        }`}
        role="alert"
      >
        Message sent successfully!
      </div>
      <div
        className={`alert alert-danger alertMessage ${isFailure ? "show" : ""}`}
        role="alert"
      >
        Failed to send message. Please try again :(
      </div>
      <h2>Get in Touch</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="user_name"
            id="name"
            placeholder="Enter your Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="user_email"
            id="email"
            placeholder="Enter your mail"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            placeholder="message"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className={`submit-btn ${isLoading ? "loading" : ""}`}
          disabled={isLoading}
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactMe;
