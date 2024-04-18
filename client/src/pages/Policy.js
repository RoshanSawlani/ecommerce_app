import React from "react";
import Layout from "./../components/Layout/Layout";
const Policy = () => {
  return (
    <Layout title={"Privacy Policy - TRENDYTREKS"}>
      <div className="container">
        <div className="row">
          <div className=" mt-2 p-2 col-md-6">
            <img alt="" src="https://gantblog.com/wp-content/uploads/2023/06/Privacy-Policy-768x384.jpg" style={{ width: "95%",height: "90%" }}
            />
          </div>
          <div className=" col-md-6">
            <h2>Privacy Policy</h2>
            <p>
              At TrendyTreks, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our website or services.
            </p>
            <h3>Information We Collect</h3>
            <p>
              We may collect various types of information from you when you visit our website or interact with our services, including:
            </p>
            <ul>
              <li>Personal information such as your name, email address, and contact details, which you provide voluntarily when registering an account or making a purchase.</li>
              <li>Non-personal information such as your IP address, browser type, and device information, collected automatically through cookies and similar technologies.</li>
            </ul>
            <h3>How We Use Your Information</h3>
            <p>
              We use the information we collect for various purposes, including:
            </p>
            <ul>
              <li>Providing and improving our products and services.</li>
              <li>Personalizing your experience and delivering targeted content and advertisements.</li>
              <li>Communicating with you about your orders, promotions, and updates.</li>
              <li>Protecting our rights and interests, and complying with legal obligations.</li>
            </ul>
            <h3>Information Sharing and Disclosure</h3>
            <p>
              We may share your information with third-party service providers, business partners, or law enforcement agencies in limited circumstances as required by law or to protect our rights and interests.
            </p>
            <h3>Security Measures</h3>
            <p>
              We implement various security measures to protect your personal information against unauthorized access, disclosure, alteration, or destruction.
            </p>
            <h3>Updates to This Policy</h3>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We encourage you to review this page periodically for the latest information.
            </p>
            <h3>Contact Us</h3>
            <p>
              If you have any questions or concerns about our Privacy Policy or data practices, please contact us at [contact email].
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
