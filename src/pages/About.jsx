import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-page">

    
      <div className="about-hero">
        <h1>About <span>CozyCup</span></h1>
        <p>Where every cup tells a story</p>
      </div>

   
      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          CozyCup was born in 2018 from a simple idea — that a great cup of coffee
          should feel like a warm hug. We started as a small corner café and grew
          into a beloved community spot where people come to relax, work, and connect.
        </p>
      </section>

    
      <section className="about-section">
        <h2>What We Stand For</h2>
        <div className="about-values">
          <div className="value-card">
            <i className="fa-solid fa-leaf"></i>
            <h3>Fresh Ingredients</h3>
            <p>We source only the finest coffee beans and freshest ingredients daily.</p>
          </div>
          <div className="value-card">
            <i className="fa-solid fa-heart"></i>
            <h3>Made with Love</h3>
            <p>Every drink is crafted with care and passion by our expert baristas.</p>
          </div>
          <div className="value-card">
            <i className="fa-solid fa-users"></i>
            <h3>Community First</h3>
            <p>We believe coffee is better when shared. You're family here.</p>
          </div>
        </div>
      </section>

   
      <section className="about-stats">
        <div className="stat">
          <h2>6+</h2>
          <p>Years of Service</p>
        </div>
        <div className="stat">
          <h2>50+</h2>
          <p>Menu Items</p>
        </div>
        <div className="stat">
          <h2>10k+</h2>
          <p>Happy Customers</p>
        </div>
        <div className="stat">
          <h2>4.9⭐</h2>
          <p>Average Rating</p>
        </div>
      </section>


      <section className="about-section">
        <h2>Meet the Team</h2>
        <div className="about-team">
          <div className="team-card">
            <div className="team-avatar">👨‍🍳</div>
            <h3>James Carter</h3>
            <p>Founder & Head Barista</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">👩‍🍳</div>
            <h3>Sarah Mills</h3>
            <p>Head Chef & Baker</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">👨‍💼</div>
            <h3>Mike Torres</h3>
            <p>Operations Manager</p>
          </div>
        </div>
      </section>

    
      <section className="about-cta">
        <h2>Ready to experience CozyCup?</h2>
        <Link to="/order" className="cta-btn">Order Now</Link>
      </section>

    </div>
  );
}

export default About;