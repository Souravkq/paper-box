import React, { useState } from "react";
import Header from "../components/Header"; // Import Header component
import Footer from "../components/Footer"; // Import Footer component
import item1 from "../assets/sasi.jpg"
const Contact = () => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);

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
      <div
        style={{
          padding: "30px",
          fontFamily: "Arial, sans-serif",
          maxWidth: "800px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        
        {/* Feedback Section */}
        <div
          style={{
            marginTop: "40px",
            textAlign: "center",
            backgroundColor: "#f9f9f9",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2 style={{ marginBottom: "10px"}}>Feedback & Reviews</h2>
          <form onSubmit={handleFeedbackSubmit}>
            <center><textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Write your feedback here..."
              required
              style={{
                width: "100%",
                height: "100px",
                padding: "10px",
                fontSize: "14px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
            /></center>
            <center><div style={{ marginBottom: "10px" }}>
              <p style={{ marginBottom: "5px"}}>Rate Us:</p>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => setRating(star)}
                  style={{
                    cursor: "pointer",
                    fontSize: "20px",
                    color: star <= rating ? "gold" : "#ccc",
                  }}
                >
                  ★
                </span>
              ))}
            </div> </center>
            <button
              type="submit"
              style={{
                backgroundColor: "#4caf50",
                color: "white",
                padding: "3%",
                marginLeft:"39%",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
                marginBottom: "10px",
              
              }}
            >
              Submit Feedback
            </button>
          </form>
        </div>

        {/* Customer Reviews Section */}
        <div style={{ marginTop: "30px", textAlign: "center"}}>
          <h2>Customer Reviews</h2>
          {reviews.length === 0 ? (
            <p>No reviews yet. Be the first to leave feedback!</p>
          ) : (
            reviews.map((review, index) => (
              <div
          style={{
            marginTop: "30px",
            textAlign: "left",
            backgroundColor: "#f9f9f9",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
                <div>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      style={{
                        fontSize: "18px",
                        color: star <= review.rating ? "gold" : "#ccc",
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p style={{ marginTop: "5px" }}>{review.feedback}</p>
              </div>
            ))
          )}
        </div>
        {/* Contact Us Section */}
        <div
          style={{
            marginTop: "30px",
            textAlign: "center",
            backgroundColor: "#eef2f7",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
       
        <h1>Contact Info</h1><br/><br/>
        {/*contact info */}
          <div className="item">
            <img src={item1} alt="Head" width="200px" />
            <div className="details">
              <h3>Major Sujith</h3>
              <div className="item-info">
                <div className="year-badge">2023</div>
                <br/>
                <h4>Head officer</h4>
              </div>
              <p>There will be no more tolerance every one get every one needs
              </p>
            </div><br/>
          </div>
          <p style={{ fontSize: "16px", marginBottom: "15px" }}>
            <strong>Phone:</strong> +91 8848408815
          </p>
          <button
            style={{
              backgroundColor: "#d14836",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
            }}
            onClick={() => window.open("mailto:paperbox41@gmail.com")}
          >
            MAIL
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
