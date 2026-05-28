import React from "react";
import { Link } from "react-router-dom";

function Gallery(){
    return(


      
        <div>

 <div className="header">
        <Link to= "/" className="back-link-gallery">back!</Link>
    </div>
<section  className="gallery-section">

  <h2 className="gallery">Gallery</h2>
  

  <div className="gallery-container">
    
    <div className="gallery-item">
      <img src="/c2.jpeg" alt="Coffee 1"/>
    </div>

    <div className="gallery-item">
      <img src="/c3.jpeg" alt="Coffee 2"/>
    </div>

    <div className="gallery-item">
      <img src="/c5.jpeg" alt="Coffee 3"/>
    </div>

    <div className="gallery-item">
      <img src="/c7.jpeg" alt="Coffee 4"/>
    </div>

    <div className="gallery-item">
      <img src="/c13.jpeg" alt="Coffee 5"/>
    </div>

    <div className="gallery-item">
      <img src="/c123.jpeg" alt="Coffee 6"/>
    </div>

    
    <div className="gallery-item">
      <img src="/vvv.jpeg" alt="Coffee 6"/>
    </div>


       
    <div className="gallery-item">
      <img src="/nw.jpeg" alt="Coffee 6"/>
    </div>

    
     <div className="gallery-item">
      <img src="/download (23).jpg" alt="Coffee 6"/>
    </div>

     
     <div className="gallery-item">
      <img src="/c6.jpeg" alt="Coffee 6"/>
    </div>

     
     <div className="gallery-item">
      <img src="/Stunning Coffee Shop Designs For Your Next Café.jpg" alt="Coffee 6"/>
    </div>

     <div className="gallery-item">
      <img src="/c8.jpeg" alt="c"/>
    </div>
        </div>
      </section>


       <section className="about-cta">
              <h2></h2>
              <Link to="/home" className="cta-btn">Go Home!</Link>
            </section>
 
    </div> 

    
  );
}
export default Gallery;