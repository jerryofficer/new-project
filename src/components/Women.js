import React, { useEffect, useState } from 'react';
import './Women.css';
import Footer from './Footer';
import 'aos/dist/aos.css';
import AOS from 'aos';






const Women = () => {
  const cards = [
    { image: "https://levi.in/cdn/shop/files/000G90001_1_360x.jpg?v=1733743681", title: "Jens", price: "$50" },
    { image: "https://levi.in/cdn/shop/files/000G90003_05_Styleshot_360x.jpg?v=1734075770", title: "Jeans", price: "$70" },
    { image: "https://levi.in/cdn/shop/files/A25040038_4_360x.jpg?v=1734018374", title: "Jeans", price: "$40" },
    { image: "https://levi.in/cdn/shop/files/A25150000_01_Front_7ca17235-a77a-4dd1-bc8f-3a3eb9dc8291_360x.jpg?v=1695725994", title: "Jeans", price: "$100" }


  ];


  const jacket = [
    { image: "https://levi.in/cdn/shop/files/002V90001_1_360x.jpg?v=1734021643", title: "Jacket", price: "$50" },
    { image: "https://levi.in/cdn/shop/files/548880029_01_Styleshot_360x.jpg?v=1732618105", title: "Jacket", price: "$70" },
    { image: "https://levi.in/cdn/shop/files/A65780000_01_Style_Shot_af89cdd5-8993-4082-8c25-3006b9f615a8_360x.jpg?v=1712742962", title: "Jacket", price: "$40" },
    { image: "https://levi.in/cdn/shop/files/002V90000_1_360x.jpg?v=1734021526", title: "Jacket", price: "$100" }


  ];

  const TShirt = [
    { image: "https://levi.in/cdn/shop/files/000EV0001_1_Front_360x.jpg?v=1731473790", title: "Jens", price: "$50" },
    { image: "https://levi.in/cdn/shop/files/A92090004_01_Elevated_360x.jpg?v=1726117600", title: "Jeans", price: "$70" },
    { image: "https://levi.in/cdn/shop/files/A92030003_1_360x.jpg?v=1734020455", title: "Jeans", price: "$40" },
    { image: "https://levi.in/cdn/shop/files/000EV0002_1_Front_360x.jpg?v=1731473899", title: "Jeans", price: "$100" }


  ];

  const Shirt = [
    { image: "https://levi.in/cdn/shop/files/871770135_06_Side_bab80836-923b-49da-8252-371aea938ac3_360x.jpg?v=1725601006", title: "Jens", price: "$50" },
    { image: "https://levi.in/cdn/shop/files/871770134_01_Elevated_ef94a28a-ba80-4cd6-b8c1-9b8c9e153fb0_360x.jpg?v=1725599576", title: "Jeans", price: "$70" },
    { image: "https://levi.in/cdn/shop/files/A39070049_03_Front_360x.jpg?v=1726117586", title: "Jeans", price: "$40" },
    { image: "https://levi.in/cdn/shop/files/237710549_01_Styleshot_360x.jpg?v=1728282907", title: "Jeans", price: "$100" }


  ];




  const boots = [
    { image: "https://levi.in/cdn/shop/files/375440100_01_Front_ff5f0261-f793-4cb0-8798-0ac4a1ae0dc9_360x.jpg?v=1695736676", title: "Jens", price: "$50" },
    { image: "https://levi.in/cdn/shop/files/879700120_06_Style_563bb20e-971e-4d43-9e89-2f4e9f32819a_360x.jpg?v=1712301301", title: "Jeans", price: "$70" },
    { image: "https://levi.in/cdn/shop/files/879700152_06_Style_360x.jpg?v=1713512908", title: "Jeans", price: "$40" },
    { image: "https://levi.in/cdn/shop/files/879700159_02_Side_360x.jpg?v=1713513668", title: "Jeans", price: "$100" }


  ]
  const must = [
    { image: "https://levi.in/cdn/shop/files/244750127_01_Style_Shot_792ee7ca-30dc-4271-a075-f44bd90fc23b_360x.jpg?v=1712741829", title: "Jens", price: "$50" },
    { image: "https://levi.in/cdn/shop/files/213060550_01_Style_Shot_2e192453-cc74-4608-942c-f73a926bf043_360x.jpg?v=1695724914", title: "Jeans", price: "$70" },
    { image: "https://levi.in/cdn/shop/files/244750017_01_Style_Shot_ecad7c68-e645-4fa7-8d6a-0ee428e22198_360x.jpg?v=1695725317", title: "Jeans", price: "$40" },
    { image: "https://levi.in/cdn/shop/files/328900028_01_Style_Shot_ad3287ce-42b2-4ee5-8c28-e1a876fbc41a_360x.jpg?v=1695725426", title: "Jeans", price: "$100" }


  ]



  return (
    <>
      <div data-aos="fade-up"
        data-aos-anchor-placement="center-bottom">
    
      <div style={{ padding: '20px' }}>
        {/* Categories Section */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '20px',
            marginTop: '30px',
          }}
        >
          <a href='#jeans'>

            <img
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
              }} src='https://levi.in/cdn/shop/collections/Jeans.jpg?v=1724060472'></img>
            <label style={{ padding: '10px', fontWeight: 'bold' }}>Jeans</label>
          </a>


          <a href='#jacket'>
            <img
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
              }} src='https://levi.in/cdn/shop/collections/women_jacket.jpg?v=1724060568'></img>
            <label style={{ padding: '10px', fontWeight: 'bold' }}>Jacket</label>
          </a>


          <a href='#tshirts'>
            <img
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
              }} src='https://levi.in/cdn/shop/collections/womens_top.jpg?v=1710416531'></img>
            <label style={{ padding: '10px', fontWeight: 'bold' }}>Men t-Shirts</label>
          </a>

          <a href='#shirts'>
            <img
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
              }} src='https://levi.in/cdn/shop/collections/women_t_shirt.jpg?v=1724060619'></img>
            <label style={{ padding: '10px', fontWeight: 'bold' }}>Men Shirt</label>
          </a>

          <a href='#boots'>
            <img
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
              }} src='https://levi.in/cdn/shop/collections/footwear_2_d2837be0-07ec-4084-af41-d9a6092623a6.jpg?v=1724060538'></img>
            <label style={{ padding: '10px', fontWeight: 'bold' }}>Footwear</label>
          </a>
          <a href='#must'>
            <img
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
              }} src='https://levi.in/cdn/shop/collections/musthaves_b6a2eda7-fea1-43bd-ba45-1ea1f6db6597.jpg?v=1724060590'></img>
            <label style={{ padding: '10px', fontWeight: 'bold' }}>Must have</label>
          </a>

        </div>
      </div>
      </div>
      {/* Women Section */}
      
      <div data-aos="fade-up"
        data-aos-anchor-placement="center-bottom">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: 'url("https://i.pinimg.com/736x/ac/b7/b3/acb7b323d89bec6e18e84b68590405b6.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
        }}
        />
      </div>

      {/* card */}


      {/* jeaNS */}
    
     
    
    
      <div style={{ textAlign: "center" }}><h1 id='jeans'>Women Jeans</h1></div>
      <div className="card-men-sec" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", padding: "20px" }}>
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} style={{ width: "18rem", height: "300px", objectFit: "cover" }} className="card-img-top" alt={card.title} />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.price}</p>
              <a href="#" className="btn btn-danger">Add to Cart</a>
            </div>
          </div>
        ))}
        </div>
    
   



      {/* Jacket */}
   
   


  
     
      <div style={{ textAlign: "center" }}><h1 id='jacket'>Women Jacket</h1></div>
      <div className="card-men-sec" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", padding: "20px" }}>
        {jacket.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} style={{ width: "18rem", height: "300px", objectFit: "cover" }} className="card-img-top" alt={card.title} />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.price}</p>
              <a href="#" className="btn btn-danger">Add to Cart</a>
            </div>
          </div>
        ))}
        </div>
    


      {/* tSHIRTS */}
    
      <div style={{ textAlign: "center" }}><h1 id='tshirts'>Women Top</h1></div>

      <div className="card-men-sec" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", padding: "20px" }}>
        {TShirt.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} style={{ width: "18rem", height: "300px", objectFit: "cover" }} className="card-img-top" alt={card.title} />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.price}</p>
              <a href="#" className="btn btn-danger">Add to Cart</a>
            </div>
          </div>
        ))}
      </div>

      {/* shirts */}
     
   
      <div style={{ textAlign: "center" }}><h1 id='shirts'>Women Shirts</h1></div>

      <div className="card-men-sec" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", padding: "20px" }}>
        {Shirt.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} style={{ width: "18rem", height: "300px", objectFit: "cover" }} className="card-img-top" alt={card.title} />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.price}</p>
              <a href="#" className="btn btn-danger">Add to Cart</a>
            </div>
          </div>
        ))}
      </div>



      {/* boot */}
    
   
      <div style={{ textAlign: "center" }}><h1 id='boots'>Women Shirts</h1></div>

      <div className="card-men-sec" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", padding: "20px" }}>
        {boots.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} style={{ width: "18rem", height: "300px", objectFit: "cover" }} className="card-img-top" alt={card.title} />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.price}</p>
              <a href="#" className="btn btn-danger">Add to Cart</a>
            </div>
          </div>
        ))}
      </div>


      {/* must have */}
    

      <div style={{ textAlign: "center" }}><h1 id='must'>Women Must Have</h1></div>

      <div className="card-men-sec" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", padding: "20px" }}>
        {must.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} style={{ width: "18rem", height: "300px", objectFit: "cover" }} className="card-img-top" alt={card.title} />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.price}</p>
              <a href="#" className="btn btn-danger">Add to Cart</a>
            </div>
          </div>
        ))}
      </div>


     

      <Footer />
    </>
  );
};

export default Women;
