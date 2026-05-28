import React from "react";
 import { Link } from "react-router-dom";

      function Navbar() {
  const scrollToContact = () => {
    if (window.location.pathname === "/") {
      const section = document.getElementById("contact");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact";
    }
    
  };
  return(
 <header> 
   <Link to="/" className="nav-logo"> 
 <i className="fa-solid fa-mug-hot logo-icon"></i>
  <h2 className="logo-text">Cozy<span>Cup</span></h2>
   </Link> <nav className="navbar"><ul className="nav-menu"> 

    <li className="nav-item">
         < Link to= "/home" className="nav-link">Home</Link>
          </li> 

          
          <li className="nav-item"> 
           <Link to="/about" className="nav-link">About Us</Link> 
            </li> 
            <li className="nav-item">
                 <Link to="/gallery" className="nav-link">Gallery</Link>
                  </li>
                   <li className="nav-item"> 
                    <Link to="/order" className="nav-link">order Now</Link> 
                    </li> 
          <li className="nav-item">
            <span className="nav-link" onClick={scrollToContact} style={{cursor:"pointer"}}>
              Contact
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;