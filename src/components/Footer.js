import React from 'react'
import { NavLink } from 'react-bootstrap'
import './Footer.css'
const Footer = () => {
    return (
      
        <>
            <div className="redirect" style={{ textAlign: "center" }}>
                <NavLink to="#">
                    <img
                        className="animated-icon"
                        onClick={() => window.scrollTo(0, 0)}
                        src="https://cdn-icons-png.flaticon.com/128/5436/5436332.png"
                        alt="Redirect"
                    />
                </NavLink>
            </div>

          {/* <footer class="footer1">
             
              <div class="container3">
                  <div class="footer-section about">
                      <h3>About Us</h3>
                      <p1>We are committed to delivering the best services for our customers with quality and integrity.</p1>
                  </div>
                  <div class="footer-section links">
                      <h3>Quick Links</h3>
                        <ul className="nav-menu">
                            <li><NavLink to="/Login">Log-in</NavLink></li>
                            <li><NavLink to="/About">About</NavLink></li>
                            <li><NavLink to="/Context">Contact</NavLink></li>
                        </ul>

                  </div>
                  <div class="footer-section social">
                      <h3>Follow Us</h3>
                      <div class="social-links">
                          <a href="#"><img src="https://cdn-icons-png.flaticon.com/128/733/733547.png" alt="Facebook" /></a>
                          <a href="#"><img src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png" alt="Twitter" /></a>
                          <a href="#"><img src="https://cdn-icons-png.flaticon.com/128/174/174855.png" alt="Instagram" /></a>
                          <a href="#"><img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="LinkedIn" /></a>
                      </div>
                  </div>
              </div>
              <div class="footer-bottom">
                  <p1>&copy; 2024 Your Company Divya😎. All Rights Reserved.</p1>
              </div>
          </footer> */}
          

            <footer data-aos="fade-up" data-aos-duration="2000">
                <div className="footer-container">
                    <div className="footer-section">
                        <h3>About Us</h3>
                        <p>
                            Discover the latest trends and timeless pieces with us. Your journey
                            to elevate your wardrobe starts here.
                        </p>
                    </div>
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><NavLink to="/Products">Products</NavLink></li>
                            <li><NavLink to="/Men">Men</NavLink></li>
                            <li><NavLink to="/Women">Women</NavLink></li>
                            <li><NavLink to="/SignIn">Sign In</NavLink></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Contact Us</h3>
                        <p>Email: support@fashionhub.com</p>
                        <p>Phone: +123 456 789</p>
                        <p>Address: 123 Fashion St, New York, NY</p>
                    </div>
                    <div className="footer-section social-media">
                        <h3>Follow Us</h3>
                        <div className="icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">📘</a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📷</a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦</a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">▶️</a>
                        </div>
                    </div>

                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 H&M ProvideByDivya. All Rights Reserved.</p>
                </div>
            </footer>



      </>
  )
}

export default Footer
