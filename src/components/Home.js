import React from 'react'
import { Carousel, Button } from "react-bootstrap"
import { useState , useRef } from 'react'
import { color, motion } from "framer-motion"
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
import './Navbar.css'



const Home = () => {

  const images = [
    'https://i.pinimg.com/236x/45/0b/69/450b69fd771ab767abfa33348f89a4bb.jpg',
    'https://i.pinimg.com/236x/aa/fb/2d/aafb2d61742d510941a15621b13da33d.jpg',
    'https://i.pinimg.com/236x/e2/19/ea/e219ea1143d2717771002bbef71875c8.jpg',
    'https://i.pinimg.com/236x/7c/d1/cb/7cd1cb29ac323beeede3a92208957a0a.jpg',
    'https://i.pinimg.com/236x/69/4c/3f/694c3f9dcb75e5d1ba5c165ea7fc24c2.jpg',
    'https://i.pinimg.com/236x/cf/28/fe/cf28feeddd1396940c578c04e909fddc.jpg',
    'https://i.pinimg.com/474x/b8/5b/91/b85b91082faae097cfcb84b444fd0163.jpg',
    'https://i.pinimg.com/236x/f8/5b/1c/f85b1c877ba389a80ad15312e4dd856c.jpg',
  ];
  

  useEffect(() => {

    AOS.init();

  }, [])

 

 
 
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoSlideRef = useRef(null);
  const transitionTimeoutRef = useRef(null);

  const items = [
    {
      img:"https://shop.mango.com/cms-assets/v3/assets/blt351b9b24ac05a648/bltef23207a17c7b49c/6756b33dcc45a5eaf21370ca/LANDING_CHOCOLATE.jpg?imdensity=1&im=RegionOfInterestCrop,width=1920,height=823,regionOfInterest=(2332.5,1000)",
      author: "H&M",
      title: "Women",
      topic: "New Now",
      description: "Latest fashion trends for women.Discover our designs: dresses ...",
    },
    {
      img: "https://shop.mango.com/cms-assets/v3/assets/blt351b9b24ac05a648/blt2df14999c7ba2968/6757f861ae82332b3ed14030/LANDING-COAT_EDIT.jpg?imdensity=1&im=RegionOfInterestCrop,width=1920,height=823,regionOfInterest=(2332.5,1000)",
      author: "H&M",
      title: "Men",
      topic: "New Now",
      description: "Latest trends in men's fashion: suits, shirts, trousers, jackets ...",
    },
    {
      img: "https://shop.mango.com/cms-assets/v3/assets/blt351b9b24ac05a648/blt535b9106570e50eb/6756b4ae424b7da183b054b2/ALTA_LANDING_KB.jpg?imdensity=1&im=RegionOfInterestCrop,width=1920,height=823,regionOfInterest=(2332.5,1000)",
      author: "H&M",
      title: "Kids",
      topic: "New Now",
      description: "Latest trends in Kids fashion: suits, shirts, trousers, jackets ...",
     
    },
    {
      img: "https://shop.mango.com/cms-assets/v3/assets/blt351b9b24ac05a648/blt181c0bd1694c7ae0/674ed29c343ec22e88e58c83/ALTA_LANDING_(4).jpg?imdensity=1&im=RegionOfInterestCrop,width=1920,height=823,regionOfInterest=(1024,263.4)",
      author: "H&M",
      title: "Teen",
      topic: "New Now",
      description: "Latest trends in Teen fashion: suits, shirts, trousers, jackets ...",
   
    },
  ];

  const timeRunning = 3000;
  const timeAutoNext = 7000;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    resetAutoSlide();
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    resetAutoSlide();
  };

  const resetAutoSlide = () => {
    clearTimeout(autoSlideRef.current);
    autoSlideRef.current = setTimeout(nextSlide, timeAutoNext);
  };

  useEffect(() => {
    autoSlideRef.current = setTimeout(nextSlide, timeAutoNext);
    return () => clearTimeout(autoSlideRef.current);
  }, []);





  return (

    <>
    
      <div data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="600"
        data-aos-duration="600">
      
      <div className="carousel">
        <div className="list">
          {items.map((item, index) => (
            <div
              key={index}
              className={`item ${index === currentIndex ? "active" : ""}`}
              style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
            >
              <img src={item.img} alt={item.title} />
              <div className="content">
                <div className="author">{item.author}</div>
                <div className="title">{item.title}</div>
                <div className="topic">{item.topic}</div>
                <div className="des">{item.description}</div>
                <div className="buttons1">
                  <button><NavLink to="/Products">SEE MORE</NavLink></button>
                  <button><NavLink to="/SignIn">SUBSCRIBE</NavLink></button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="arrows">
          <button onClick={prevSlide} id="prev">
            &lt;
          </button>
          <button onClick={nextSlide} id="next">
            &gt;
          </button>
        </div>
        <div className="thumbnail">
          {items.map((item, index) => (
            <div
              key={index}
              className={`item ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            >
              <img src={item.img} alt={item.title} />
              <div className="content">
                <div className="title">Name Slider</div>
                <div className="description">Description</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
<br></br>
      
      {/* heading */}
  
      <div data-aos="fade-up"
        data-aos-duration="3000">
      
      <div className='conten1'>
          <h1>Make Your Fashion Look More Charming</h1>
          <h1>Summer Collection</h1>
        <p className="description">TRANDY AND CLUSSI FOR NEW SEASSON</p>
        </div>
      </div>
      
       
       
      {/* imag big */}
      <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
      
          <div className='hero' style={{ textAlign: 'center', position: 'relative'}}>
            <img
              src='video/main.gif'
              alt='Animation'
          style={{ position: 'relative', zIndex: 1 }}></img>
        
        </div>
      </div>
    
      
{/* 
      icon */}
      <div data-aos="zoom-out-up">
      <div className='hero2' 
        >
        <div class="features-section">
          <div class="feature">
            <div class="icon1">📅</div>
            <h3>Book An Appointment</h3>
            <p>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
          </div>
          <div class="feature">
            <div class="icon1">🛍️</div>
            <h3>Pick Up In Store</h3>
            <p>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
          </div>
          <div class="feature">
            <div class="icon1">🎁</div>
            <h3>Special Packaging</h3>
            <p>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
          </div>
          <div class="feature">
            <div class="icon1">🔄</div>
            <h3>Free Global Returns</h3>
            <p>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
          </div>
        </div>
        </div>
      </div>
      <center>
        <div data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
       
        <h1>Kids Section</h1>
        <div className="box">
         
        {images.map((image, index) => (
          <span
            key={index}
            style={{ '--i': index }}
          >
            <img src={image} alt={`Image ${index + 1}`} />
          </span>
        ))}
          </div>
        </div>
      </center>
      <center>
        
        <NavLink to="/Kids">
        <button class="button" data-text="Awesome">
          <span class="actual-text">&nbsp;See more&nbsp;</span>
          <span aria-hidden="true" class="hover-text">&nbsp;SeeMore&nbsp;</span>
          </button>
        </NavLink>
               </center>
      


      






      <div className='levis'>
        <img src='https://levi.in/cdn/shop/files/Desktop__1440_x_550_px_New_Arrivals_Refresh.jpg?v=1731387519'></img>
      </div>

      {/* men women Acc */}
      <div data-aos="fade-left">
        <center><div className='shop'><h1>Check Out </h1></div></center>  
      </div>

      <div data-aos="fade-up-right">
      <div class="sec-banner bg0 p-t-80 p-b-50">
        <div class="container">
          <div class="row">
           
            <div class="col-md-6 col-xl-4 p-b-30 m-lr-auto">
             
              <div class="block1 wrap-pic-w">
                <img src="https://levi.in/cdn/shop/files/2_DoorShop_Women.jpg?v=1728464830" alt="IMG-BANNER"/>

                <NavLink to="/Women" class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3" style={{ textDecoration: 'none' }}>
                    <div class="block1-txt-child1 flex-col-l">
                      <span class="block1-name ltext-102 trans-04 p-b-8" style={{color:"gray", }}>
                        Women
                      </span>

        
                    </div>

                    <div class="block1-txt-child2 p-b-4 trans-05">
                      <div class="block1-link stext-101 cl0 trans-09 " style={{marginLeft:"150px",marginRight:"150px",borderRadius:"25px"}}>
                       Watch Now
                      </div>
                    </div>
                  </NavLink>
              </div>
            </div>


            <div class="col-md-6 col-xl-4 p-b-30 m-lr-auto">

              <div class="block1 wrap-pic-w">
                <img style={{ height: "410" }} src="/video/img1.jpg" alt="IMG-BANNER" />

                <NavLink to="/Products" class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3" style={{ textDecoration: 'none' }}>
                  <div class="block1-txt-child1 flex-col-l">
                    <span class="block1-name ltext-102 trans-04 p-b-8" style={{ color: "gray", }}>
                      SEE All Product
                    </span>


                  </div>

                  <div class="block1-txt-child2 p-b-4 trans-05">
                    <div class="block1-link stext-101 cl0 trans-09" style={{ marginLeft: "150px", marginRight: "150px", borderRadius: "25px" }}>
                      Watch Now
                    </div>

                  </div>
                </NavLink>

              </div>
            </div>



            <div class="col-md-6 col-xl-4 p-b-30 m-lr-auto">
             
              <div class="block1 wrap-pic-w">
                <img src="https://levi.in/cdn/shop/files/2_DoorShop_Men.jpg?v=1728464830" alt="IMG-BANNER"/>

                <NavLink to="/Men" class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3" style={{ textDecoration: 'none' }}>
                    <div class="block1-txt-child1 flex-col-l">
                    <span class="block1-name ltext-102 trans-04 p-b-8" style={{ color: "gray", }}>
                        Men
                      </span>

                    
                    </div>

                    <div class="block1-txt-child2 p-b-4 trans-05">
                    <div class="block1-link stext-101 cl0 trans-09" style={{ marginLeft: "150px", marginRight: "150px", borderRadius: "25px" }}>
                        Watch Now
                      </div>
                    </div>
                  </NavLink>
              </div>
            </div>

        
        

            
          </div>
        </div>
        </div>
      </div>

       
      <div className="markup">
        <marquee style={{ fontSize: "60px", color: "red" }} >Shop the sale online at H&M and stock up on lots of great deals! Discover latest styles for less from all our departments. </marquee>
      </div>
      <br></br>
      <br></br>
      
      <center><h1>traditional</h1></center>
      <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
   
      <div className='Indain' style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
        padding: "20px"
      }}>
        <div className="card" style={{ width: "300px", height: "450px" }}>
          <img src="https://i.pinimg.com/736x/85/cf/d9/85cfd96db6c90de3fe7f236796f60e31.jpg" className="card-img-top" alt="..." style={{ height: "300px", objectFit: "cover" }} />
          <div className="card-body">
            <h5 className="card-title">Couple Wedding Dress</h5>
            <p className="card-text">
            90,000
            </p>
            <a href="#" className="btn btn-danger">
             Add to card
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "300px", height: "450px" }}>
          <img src="https://i.pinimg.com/474x/3c/8b/f4/3c8bf4279b4cec5d4c683deccb3dc1dc.jpg" className="card-img-top" alt="..." style={{ height: "300px", objectFit: "cover" }} />
          <div className="card-body">
            <h5 className="card-title">indain Sare</h5>
            <p className="card-text">
              10,000
            </p>
            <a href="#" className="btn btn-danger">
              Add to card
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "300px", height: "450px" }}>
          <img src="https://i.pinimg.com/474x/4d/24/f6/4d24f6265d8b4af0d3b1ffe6ef20555d.jpg" className="card-img-top" alt="..."
            style={{
              height: "300px", objectFit: "cover"
            }}/>
          <div className="card-body">
            <h5 className="card-title">Men indain Kurta Set</h5>
            <p className="card-text">
             10.00
            </p>
            <a href="#" className="btn btn-danger">
              Add to card
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "300px", height: "450px" }}>
          <img src="https://i.pinimg.com/474x/e7/1e/52/e71e523d2df58c9c184636370486973e.jpg" className="card-img-top" alt="..." style={{  height: "300px", objectFit: "cover"}} />
          <div className="card-body">
            <h5 className="card-title">Couple Combo</h5>
            <p className="card-text">
              50%off 10.000
            </p>
            <a href="#" className="btn btn-danger">
              Add to card
            </a>
          </div>
        </div>
        </div>
      </div>
      
   
    

      {/* gif */}
    
     
      <div data-aos="fade-up"
        data-aos-duration="3000">
 
      <section className="gallery1">
        <div className="image">
          <img src="https://i.pinimg.com/474x/55/cb/cf/55cbcf9367b37ddad9b2a68ea3b01759.jpg" alt="Style 1" />
        </div>
        <div className="image">
          <img src="https://i.pinimg.com/originals/10/a8/38/10a838a416331d2aa0fb1e16d2e74571.gif" alt="Style 2" />
        </div>
        {/* <div className="image main">
          <img src="https://i.pinimg.com/originals/0f/04/3a/0f043a33d327b0f1536cc17036a59d5b.gif" alt="Style 3" />
        </div> */}
        <div className="image">
          <img src="https://i.pinimg.com/originals/81/05/2a/81052a8fd7555ce2e95f9b09a5e0ea0f.gif" alt="Style 4" />
        </div>
        <div className="image">
          <img src="https://i.pinimg.com/originals/55/f3/68/55f3687a804c9c2c41d4ef6379b52602.gif" alt="Style 5" />
        </div>
        <div className="image">
          <img src="https://i.pinimg.com/236x/cb/9b/aa/cb9baa797e7b724f079f4c10ea5b8e19.jpg" alt="Style 6" />
        </div>
        </section>
      </div>
      
      <br>
      </br>
      <br></br>

    





    

     
     
      <Footer></Footer>



      
    </>
  )
}

export default Home
