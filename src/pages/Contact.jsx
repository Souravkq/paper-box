import React, { useState } from "react";
import Header from "../components/Header"; // Import Header component
import Footer from "../components/Footer"; // Import Footer component

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    file: null,
  });
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert("Your inquiry has been submitted!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      file: null,
    });
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Please select a star rating!");
      return;
    }
    const newReview = { feedback, rating };
    setReviews([newReview, ...reviews]); // Add the new review to the list
    setFeedback("");
    setRating(0);
  };

  return (
    <>
      <Header selectedPage="contact" />
      <div style={{ padding: "30px", fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "auto" }}>
        <h1>Contact Us</h1>

        {/* Contact Information */}
        <div style={{ marginBottom: "30px" }}>
          <h2>Contact Information</h2>
          <p><strong>Business Name:</strong> Your Business Name</p>
          <p><strong>Phone:</strong> +1 234 567 890</p>
          <p><strong>Email:</strong> contact@yourbusiness.com</p>
        </div>

        {/* Contact Form */}
        <div style={{ marginBottom: "30px", backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "10px" }}>
          <h2>Contact Form</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              required
              style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px" }}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              required
              style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px" }}
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Your Phone (Optional)"
              style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px" }}
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Subject"
              required
              style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px" }}
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              required
              style={{ width: "100%", height: "100px", padding: "10px", marginBottom: "10px", borderRadius: "5px" }}
            />
            <input
              type="file"
              onChange={handleFileChange}
              style={{ marginBottom: "10px" }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#4caf50",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </form>
        </div>

        {/* FAQ Section */}
        <div style={{ marginBottom: "30px" }}>
          <h2>FAQ</h2>
          <p><strong>Q: How can I contact you?</strong></p>
          <p>A: You can reach us via phone or email, or use the contact form above.</p>
        </div>

        {/* Feedback Mechanism */}
        <div style={{ marginBottom: "30px", backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "10px" }}>
          <h2>Feedback</h2>
          <form onSubmit={handleFeedbackSubmit}>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Write your feedback here..."
              required
              style={{ width: "100%", height: "100px", padding: "10px", marginBottom: "10px", borderRadius: "5px" }}
            />
            <div style={{ marginBottom: "10px" }}>
              <p>Rate Us:</p>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => setRating(star)}
                  style={{ cursor: "pointer", fontSize: "20px", color: star <= rating ? "gold" : "#ccc" }}
                >
                  ★
                </span>
              ))}
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: "#4caf50",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Submit Feedback
            </button>
          </form>
        </div>

        {/* Privacy Notice */}
        <div>
          <h2>Privacy Notice</h2>
          <p>
            We value your privacy and ensure that your information is handled securely.
            We do not share your information with third parties.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
