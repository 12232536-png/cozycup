import React from "react";
import { Link } from "react-router-dom";

function Home() {

  function ContactSection() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name.trim()) return alert("Please enter your name!");
    if (!formData.email.trim()) return alert("Please enter your email!");
    if (!formData.message.trim()) return alert("Please enter a message!");
    
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    
    setTimeout(() => setSubmitted(false), 4000);
  };

 return(
          <>
            { submitted &&(
                <div className="contact-success"> Thank you! we received your message and will get back to you soon!</div>

            )}
        <div  className="contact-container">
          <div className="contact-info">
            <h2>Visit Us</h2>
            <p className="intro-text">Stop by Bliss Coffee shop in Hamra and enjoy your cozy moment with CozyCup.</p>
            
               <div className="info-details">
            <div className="info-item">
              <strong> Address:</strong> Cozy Cup Coffee Hamra, Beirut, Lebanon
            </div>
            <div className="info-item">
              <strong> Email:</strong> hello@cozycup.com
            </div>
            <div className="info-item">
              <strong> Hours:</strong> Mon-Sun 10 AM - 10 PM
            </div>
          </div>
        </div>

         <div className="contact-form-wrapper">
            <h3>Contact Form</h3>
            <form className="actual-form" onSubmit={handleSubmit}> 
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
              <input type="text" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
             <textarea name="message" placeholder="How can we help you?" rows="5" value={formData.message} onChange={handleChange}></textarea>
              <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}
  return (
    <div>

      <section className="hero-section" id="home">
<div className="hero-content">
    <div className="hero-details">
        <h2 className="hero-title">Welcome to CozyCup</h2>
        <h3 className="hero-subtitle">Sip the moment Feel the magic!</h3>
        <p className="description">Take a break,Feel the warmth and Taste the diffrence.</p>
        <div className="buttons">
            <Link to="/menu" className="button view-menu"><button> View Menu</button></Link>
        </div>
    </div>
</div>

  </section>

      <section id="about" className="about-section">
        <div className="container about-content">
          <div className="about-text">
            <h2>Our Story</h2>
            <p className="about-paragraph">
              CozyCup was born from a simple idea — to create a place where every cup feels like home.
              We believe coffee is more than just a drink; it’s a moment of comfort, a pause in a busy day, and a way to connect with others. From carefully selected beans to the warmth of every smile, we put heart into every detail.
              Whether you’re starting your morning or taking a quiet break, CozyCup is here to make every moment a little more special.
            </p>
          </div>
          <div className="about-image">
            <img src="/Coffee Art Wallpaper.jpg" alt="Coffee cup" />
          </div>
        </div>
      </section>
   
      <section className=" why-choose-us">
    <div className="container">
    <h2 className="section-title">Why choose us?</h2>
    <div className="feature-grid">
        <div className="feature-item">
        <div className="icon-box"><i className="fa-solid fa-mug-saucer"></i>
        </div>
        <div className="feature-text"><h3>High Qualtiy ingredients </h3>
        <p>We use only the finest, carefully selected beans and
             fresh ingredients to deliver 
            rich and authentic flavors in every sip.</p>
    </div>
    </div>
    <div className="feature-item">
        <div className="icon-box"><i className="fa-solid fa-people-robbery"></i></div>
         <div className="feature-text"><h3>Professional  Baritas</h3>
        <p> Our skilled baritas turn coffee into an art,
            ensuring every drink is perfectly brewed just for you.
        </p>
    </div>
    </div>
    <div className="feature-item">
        <div className="icon-box"><i className="fa-solid fa-heart-circle-plus"></i></div>
        <div className="feature-text"><h3>Friendly atmosphere</h3>
        <p> Step into a warm and welcoming space where comfort,
            smiles, and good vibes make you feel right at home.
        </p>
    </div>
    </div>
        </div>
    </div>
  </section>

    <section className="top-categories">
  <div className="container">

    <div className="section-header">
      <h2 className="cat-title">TOP CATEGORIES</h2>
      <p className="cat-subtitle">
        The Recent Most Bought Drinks This Week
      </p>
    </div>

    <div className="cat-grid">

      <div className="category-card">
        <img src="/hot chocolate.jpg" alt="Hot Chocolate" />
        <div className="card-overlay">
          <span>Hot Chocolate</span>
        </div>
      </div>

      <div className="category-card">
        <img src="/ess coffee.jpg" alt="Espresso Coffee" />
        <div className="card-overlay">
          <span>Espresso Coffee</span>
        </div>
      </div>

      <div className="category-card">
        <img src="/Mocha recipe.jpg" alt="Mocha Coffee" />
        <div className="card-overlay">
          <span>Mocha Coffee</span>
        </div>
      </div>

      <div className="category-card">
        <img src="/italian coffee.jpg" alt="Italian Coffee" />
        <div className="card-overlay">
          <span>Italian Coffee</span>
        </div>
      </div>

    </div>
  </div>
</section>
    
      <section className="top-shakes">
        <div className="container">

          <div className="section-header">
            <h2 className="shake-title">TOP MILK SHAKES</h2>
            <p className="shakes-subtitle">
              The recent most bought shakes this week
            </p>
          </div>

          <div className="shakes-grid">

            <div className="shake-card">
              <div className="likes-most">
                <i className="fa-solid fa-thumbs-up"></i> 50
              </div>
              <img src="/milkshakes choco.jpg" alt="Chocolate Milkshake" />
              <div className="milk-details">
                <span>Chocolate Shake</span>
                <div className="shaker-name">
                  <span className="price">15$</span>
                </div>
              </div>
            </div>

            <div className="shake-card">
              <div className="likes-most">
                <i className="fa-solid fa-thumbs-up"></i> 200
              </div>
              <img src="/matcha.jpg" alt="Matcha Shake" />
              <div className="milk-details">
                <span>Matcha Shake</span>
                <div className="shaker-name">
                  <span className="price">20$</span>
                </div>
              </div>
            </div>

            <div className="shake-card">
              <div className="likes-most">
                <i className="fa-solid fa-thumbs-up"></i> 100
              </div>
              <img src="/blueBerry.jpg" alt="Blueberry Shake" />
              <div className="milk-details">
                <span>Blueberry Shake</span>
                <div className="shaker-name">
                  <span className="price">15$</span>
                </div>
              </div>
            </div>

            <div className="shake-card">
              <div className="likes-most">
                <i className="fa-solid fa-thumbs-up"></i> 70
              </div>
              <img src="/banana shake.jpg" alt="Banana Shake" />
              <div className="milk-details">
                <span>Banana Shake</span>
                <div className="shaker-name">
                  <span className="price">13$</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    
      <div className="contact-line"></div>
      <div className="line-between"><hr /></div>

      
<section className="contact-section" id="contact">
  <ContactSection />
</section>
    </div>
  );
}

export default Home;