import React from "react";
import Header from "../components/Header"; // Import Header component
import Footer from "../components/Footer"; // Import Footer component
import '../index.css'; // Import the CSS

const About = () => {
  return (
    <>
      {/* Header Section */}
      <Header selectedPage="about" />
      

      {/* Content Section */}
      <div className="content">
        <div className="container">
          {/* Profile Image */}

          <div className="about">
            <h2>Overview of Paper Box</h2><br/>
            <p>
              Paper Box is designed as a comprehensive platform to simplify access to government subsidies.
              By integrating technology with localized human support, it empowers communities to take full
              advantage of government programs. The platform bridges gaps in awareness, accessibility, and
              understanding, ensuring that everyone, regardless of their digital literacy or resources, can
              easily access the benefits they are entitled to.
            </p><br />
            <h3>Key Features</h3><br />
              <ul>
                <li>
                  <strong>Centralized Subsidy Information:</strong> A well-organized repository of all available
                  government subsidies, categorized by sectors like education, agriculture, housing, and business.
                </li>
                <li>
                  <strong>User Registration and Personalized Dashboard:</strong> Simple registration process to
                  create a personalized profile. A dashboard offering tailored updates based on user preferences
                  and location.
                </li>
                <li>
                  <strong>Notification System:</strong> Automated notifications via SMS and email inform users about
                  new subsidies, deadlines, and updates.
                </li>
                <li>
                  <strong>Local Representative Support:</strong> A unique feature connecting users with trained local
                  representatives for one-on-one assistance.
                </li>
                <li>
                  <strong>Mobile Compatibility:</strong> Fully optimized for mobile devices, allowing users to access
                  the platform anytime, anywhere.
                </li>
                <li>
                  <strong>Secure and Scalable:</strong> Encrypted communications and secure databases ensure user privacy
                  and data protection.
                </li>
              </ul>
            <br />
            
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default About;
