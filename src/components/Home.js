import React, { useState, useEffect } from "react";
import "./home-styles.css";
import { Link } from "react-router-dom";
import Sustainability from "./Sustainability";

const facts = [
  "Fact 1: Carbon emissions contribute to climate change.",
  "Fact 2: Transportation is a major source of carbon emissions.",
  "Fact 3: Renewable energy reduces carbon emissions.",
  "Fact 4: Deforestation increases carbon emissions.",
  "Fact 5: Carbon capture technologies can help reduce emissions.",
  "Fact 6: Small lifestyle changes can make a big impact on carbon emissions.",
];

const Home = () => {
  const [factIndex, setFactIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFactIndex((prevIndex) => (prevIndex + 1) % facts.length);
    }, 5000); // Change the fact every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-scroll-container">
      <div className="home-container">
        <div className="banner">
          <p className="fact">{facts[factIndex]}</p>
        </div>
        <header className="home-header">
          <h1>Welcome to Eton College Meal Services</h1>
          <p>Your Source for Delicious and Sustainable Meals</p>
          <a
            href="https://www.etoncollege.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="home-header-link"
          >
            Learn More about Eton College
          </a>
        </header>

        <section className="home-features">
          <div className="feature-card">
            <h2>Delicious Meals</h2>
            <p>Enjoy a variety of mouthwatering dishes.</p>
          </div>
          <div className="feature-card">
            <h2>Sustainability</h2>
            <p>
              We prioritize eco-friendly and sustainable practices.
              <Link to="/sustainability">Learn More</Link>
            </p>
          </div>
          <div className="feature-card">
            <h2>Custom Menus</h2>
            <p>Create your ideal meal routine with our flexible menus.</p>
          </div>
        </section>

        <section className="home-news">
          <div className="news-card">
            <h3>Exciting Menu Updates</h3>
            <p>Discover our latest menu additions and special offers.</p>
          </div>
          <div className="news-card">
            <h3>Community Events</h3>
            <p>Join us for community meals and get involved.</p>
          </div>
        </section>

        <section className="home-leadership">
          <h2>Meet Our Leadership Team</h2>
          <div className="leadership-member">
            <img src="leader1.jpg" alt="Leader 1" className="leader-image" />
            <div className="leader-details">
              <h3>John Doe</h3>
              <p>CEO &amp; Founder</p>
            </div>
          </div>
          <div className="leadership-member">
            <img src="leader2.jpg" alt="Leader 2" className="leader-image" />
            <div className="leader-details">
              <h3>Jane Smith</h3>
              <p>Chief Nutritionist</p>
            </div>
          </div>
          <div className="leadership-member">
            <img src="leader3.jpg" alt="Leader 3" className="leader-image" />
            <div className="leader-details">
              <h3>Michael Johnson</h3>
              <p>Head Chef</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
