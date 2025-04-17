import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Footer from './Footer';
import "./About.css"

const About = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
     
      <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
      <div className="about-header" style={{ position: 'relative', textAlign: 'center' }}>
        <img
          src="https://i.pinimg.com/474x/ce/4f/df/ce4fdfbbdf933b0a98f801b3bfc37d30.jpg"
          alt="About Us Banner"
          style={{ width: '50%', height: 'auto' }}
        />
        <div
          className="about-header-text"
          data-aos="fade-up"
          data-aos-duration="2000"
          style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'red' }}
        >
          <h1>Welcome to Our Story</h1>
          <p style={{color:"red"}}>Fashion that Speaks, Trends that Inspire.</p>
        </div>
        </div>
        </div>

      {/* About Content */}
      <section className="about-content" data-aos="fade-up" data-aos-duration="1500" style={{ padding: '50px' }}>
        <div className="about-text" style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2>Who We Are</h2>
          <p>
            At <span style={{color:"red"}}>[H&M],</span> we believe fashion is more than just clothing—it's an expression of individuality and culture.
            Since our inception, we've been committed to bringing you the finest designs, blending modern trends with timeless elegance.
          </p>
        </div>

        <div className="about-highlights" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px' }}>
          <div className="highlight-item" data-aos="zoom-in" style={{ width: '300px', textAlign: 'center' }}>
            <div className="icon1">🌍</div>
            <h3>Global Presence</h3>
            <p>Delivering style across borders, connecting cultures through fashion.</p>
          </div>
          <div className="highlight-item" data-aos="zoom-in" style={{ width: '300px', textAlign: 'center' }}>
            <div className="icon1">✨</div>
            <h3>Quality Assurance</h3>
            <p>Every piece is crafted with care, ensuring the best for our customers.</p>
          </div>
          <div className="highlight-item" data-aos="zoom-in" style={{ width: '300px', textAlign: 'center' }}>
            <div className="icon1">🤝</div>
            <h3>Customer Commitment</h3>
            <p>Your satisfaction is our priority, and we go the extra mile to deliver it.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section" data-aos="fade-left" data-aos-duration="2000" style={{ padding: '50px', backgroundColor: '#f9f9f9' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Meet Our Team</h2>
        <div className="team" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div className="team-member" style={{ textAlign: 'center' }}>
            <img
              src="https://career.hm.com/app/uploads/2024/08/stores_single-image_vm.png"
              alt="Team Member"
              style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover' }}
            />
            <h3>Jane Doe</h3>
            <p>Creative Director</p>
          </div>
          <div className="team-member" style={{ textAlign: 'center' }}>
            <img
              src="https://career.hm.com/app/uploads/2024/08/stores_carousel-1_sales-advisor-768x768.jpg"
              alt="Team Member"
              style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover' }}
            />
            <h3>John Smith</h3>
            <p>Marketing Head</p>
          </div>
          <div className="team-member" style={{ textAlign: 'center' }}>
            <img
              src="https://career.hm.com/app/uploads/2024/08/work-areas_sustainability.png"
              alt="Team Member"
              style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover' }}
            />
            <h3>Emily Johnson</h3>
            <p>Fashion Designer</p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section" data-aos="fade-up" data-aos-duration="1500" style={{ padding: '50px' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2>Our Vision</h2>
          <p>
            To redefine the fashion industry by promoting sustainability, diversity, and innovation. We envision a world where everyone can express themselves freely through our designs.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="about-gallery" data-aos="fade-up" data-aos-duration="3000" style={{ padding: '50px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Our Journey in Pictures</h2>
        <div className="gallery" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <img src="https://career.hm.com/app/uploads/2024/08/early-careers_trainee.jpg" alt="Gallery 1" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
          <img src="https://career.hm.com/app/uploads/2024/08/sustainability_card_garment-collection.png" alt="Gallery 2" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
          <img src="https://career.hm.com/app/uploads/2024/08/id_card_pride.png" alt="Gallery 3" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
          <img src="https://career.hm.com/app/uploads/2024/09/id_single-image.jpg" alt="Gallery 4" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
        </div>
        </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default About;
