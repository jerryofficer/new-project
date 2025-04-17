import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer';
import './Contacts.css';

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="contact-page">
        {/* Header Section with Background Image */}
        <div
          className="contact-header"
          style={{
            backgroundImage: "url('https://i.pinimg.com/236x/b4/b6/77/b4b6775808fe266b5d09f5e7aee8b935.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#fff',
            padding: '50px 20px',
          }}
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Please fill out the form below to get in touch.</p>
        </div>

        {/* Contact Form Section */}
        <div className='feedback' data-aos="zoom-in-up">
          <h1>GAVE YOUR FEEDBACK</h1>
        </div>
        <div className="contact-form-section" data-aos="fade-up" data-aos-duration="2000">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>

        

        <div className='conatact-img' data-aos="fade-up" data-aos-duration="2000">
          <h1>Empieza a vivir la experiencia completa</h1>
        </div>

        <div data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
          <div className='img-class'>
            <div className='con1'>
              <img src='https://shop.mango.com/images/mangoLikesYou/benefit-1.jpg?imwidth=280&imdensity=1&ts=1'></img>
              <p>Recibe una sorpresa por tu cumpleaños</p>
              <p></p>
            </div>
            <div className='con2'>
              <img src='https://shop.mango.com/images/mangoLikesYou/benefit-2.jpg?imwidth=280&imdensity=1&ts=1'></img>
              <p>Accede a lanzamientos exclusivos y Ventas Privadas antes que nadie</p>
            </div>
            <div className='con3'>
              <img src='https://shop.mango.com/images/mangoLikesYou/benefit-3.jpg?imwidth=280&imdensity=1&ts=1'></img>
              <p>Consigue Likes con compras y acciones

                ¿Qué son los Likes?</p>
            </div>
          </div>
        </div>












        {/* Contact Info Section */}
        <div className="contact-info" data-aos="fade-up" data-aos-duration="2000">
          <h2>Get In Touch</h2>
          <div className="info-item">
            <span>📍</span>
            <p>123 Fashion Street, New York, NY 10001</p>
          </div>
          <div className="info-item">
            <span>📞</span>
            <p>+1 234 567 890</p>
          </div>
          <div className="info-item">
            <span>📧</span>
            <p>support@H&M.com</p>
          </div>
        </div>

        {/* Video Section */}
        <div className="contact-video" data-aos="fade-up" data-aos-duration="2000" style={{ margin: '20px 0', textAlign: 'center' }}>
          <h2>Watch Our Story</h2>
          <video controls width="80%" style={{ maxWidth: '800px', borderRadius: '10px' }}>
            <source src="https://youtu.be/V-f5zscEvtk?si=mfKuojWXLqnmbAq4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
