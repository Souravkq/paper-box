import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../index.css";

const Services = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    alert(`You searched for: ${searchQuery}`);
  };

  return (
    <>
      {/* Header Section */}
      <Header selectedPage="services" />

      {/* Page Title */}
      <div className="page-title-container">
        <h1 className="page-title">Services</h1>
      </div>

      {/* Fixed Search Bar */}
      <div className="fixed-search-bar">
        <form onSubmit={handleSearch} className="search-bar-form">
          <input
            type="text"
            name="search"
            placeholder="Search..."
            className="search-bar-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-bar-icon">
            🔍
          </button>
        </form>
      </div>

      {/* Content Section */}
      <div className="content">
        <div className="post-list">
          {/* Service 1 */}
          <div className="post-item">
            <h3>E-Grantz 2.0: A Web-Based Grant Distribution System</h3>
            <div className="info">
              <h5>08 Jan 2025</h5>
              <h5>|</h5>
              <h5>Education, Technology</h5>
            </div>
            <p>
              E-Grantz 2.0 serves as an efficient, web-based solution for the
              timely disbursement of educational assistance to post-matric
              students from the fishing community. This platform streamlines
              the process of application, verification, and sanctioning of
              grants, ensuring accessibility and transparency. Its intuitive
              design simplifies the online application process while catering
              to the specific needs of beneficiaries, making it a pivotal tool
              for empowering education.
            </p>
            <div className="buttons">
              <br />
              <button
                onClick={() =>
                  window.open(
                    "https://scholarship.fisheries.kerala.gov.in/Settings/index",
                    "_blank"
                  )
                }
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Services;
