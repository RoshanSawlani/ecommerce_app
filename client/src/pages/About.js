import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - TRENDYTREKS"}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src="/images/about.jpeg"
              alt="About TrendyTreks"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-6">
            <h2 className="mb-4">Welcome to TrendyTreks!</h2>
            <p className="text-justify">
              TrendyTreks is your ultimate destination for all things trendy in the world of outdoor gear and adventure!
            </p>
            <p className="text-justify">
              Our journey began with a simple idea: to provide adventurers with access to the latest trends in outdoor gear, without compromising on quality or performance.
            </p>
            <p className="text-justify">
              What sets TrendyTreks apart is our curated selection of products from leading brands around the globe. We handpick each item, ensuring that it meets our strict standards for quality, innovation, and style.
            </p>
            <p className="text-justify">
              TrendyTreks is more than just a place to shop. It's a community where like-minded individuals come together to share stories, exchange tips, and celebrate the spirit of adventure.
            </p>
            <p className="text-justify">
              Our commitment to sustainability and responsible outdoor practices is at the heart of everything we do.
            </p>
            <p className="text-justify">
              Thank you for joining us on this incredible journey. Let's make every journey a memorable one!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
