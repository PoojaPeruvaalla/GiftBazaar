
import  { useState } from "react";
import "./Contact.css";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [success, setSuccess] = useState(false);

  function handleChange(e) {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    setSuccess(false);

  }

  function handleSubmit(e) {

    e.preventDefault();

    console.log(formData);

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });

  }

  return (

    <div className="contact-page">

      {/* HEADER */}

      <section className="contact-hero">

        <h1>Get In Touch 💌</h1>

        <p>
          Have a question or need help finding the perfect gift?
          We'd love to hear from you!
        </p>

      </section>


      {/* CONTACT CONTENT */}

      <section className="contact-container">


        {/* CONTACT INFORMATION */}

        <div className="contact-info">

          <h2>Let's Talk!</h2>

          <p>
            We are here to help you make every occasion
            memorable. Contact us anytime.
          </p>


          <div className="contact-detail">

            <span>📍</span>

            <div>
              <h3>Our Location</h3>
              <p>Hyderabad, Telangana, India</p>
            </div>

          </div>


          <div className="contact-detail">

            <span>📧</span>

            <div>
              <h3>Email Us</h3>
              <p>support@giftbazaar.com</p>
            </div>

          </div>


          <div className="contact-detail">

            <span>📞</span>

            <div>
              <h3>Call Us</h3>
              <p>+91 98765 43210</p>
            </div>

          </div>


          <div className="contact-detail">

            <span>🕒</span>

            <div>
              <h3>Working Hours</h3>
              <p>Monday - Saturday</p>
              <p>9:00 AM - 6:00 PM</p>
            </div>

          </div>

        </div>


        {/* CONTACT FORM */}

        <div className="contact-form-container">

          <h2>Send Us a Message</h2>

          <p>Fill out the form below and we'll get back to you.</p>


          {success && (

            <div className="success-message">
              Your message has been submitted successfully! ❤️
            </div>

          )}


          <form onSubmit={handleSubmit}>

            <label>Your Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />


            <label>Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />


            <label>Subject</label>

            <input
              type="text"
              name="subject"
              placeholder="Enter subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />


            <label>Your Message</label>

            <textarea
              name="message"
              placeholder="Write your message here..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />


            <button type="submit">
              Send Message →
            </button>

          </form>

        </div>

      </section>

    </div>

  );

};

export default Contact;

