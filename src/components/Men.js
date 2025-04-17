import React, { useEffect, useState } from 'react';
import './Men.css'
import Footer from './Footer';






const Men = () => {


  const cards = [
    { image: "https://levi.in/cdn/shop/files/001AC0001_1_Front_360x.jpg?v=1731410662", title: "Men's 511 Slim Fit Navy Jeans", price: "$50" },
    { image: "https://i.pinimg.com/236x/9b/bb/51/9bbb5139295fc7c0bc53e71d47ae42f0.jpg", title: "Men's 511 Slim Fit Navy Jeans", price: "$70" },
    { image: "https://levi.in/cdn/shop/files/360870866_01_Styleshot_360x.jpg?v=1722184747", title: "Men's 511 Slim Fit Navy Jeans", price: "$40" },
    { image: "https://levi.in/cdn/shop/files/001BW0003_05_Styleshot_360x.jpg?v=1729589731", title: "Men's 511 Slim Fit Navy Jeans", price: "$100" }


  ];


  const jacket = [
    { image: "https://levi.in/cdn/shop/files/A71390001_01_Styleshot_360x.jpg?v=1725607956", title: "Men's Solid Black Jacket ", price: "$50" },
    { image: "https://levi.in/cdn/shop/files/248690123_01_Styleshot_c6cc9d42-59cf-4618-93bd-0c5e591692a5_360x.jpg?v=1727343539", title: "Men's Solid Black Jacket", price: "$70" },
    { image: "https://levi.in/cdn/shop/files/000DK0001_01_Elevated_360x.jpg?v=1723375041", title: "Men's Solid Black Jacket", price: "$40" },
    { image: "https://levi.in/cdn/shop/files/000DA0000_1_Front_360x.jpg?v=1731414064", title: "Men's Solid Black Jacket", price: "$100" }


  ];

  const TShirt = [
    { image: "https://levi.in/cdn/shop/files/A25650014_01_Styleshot_360x.jpg?v=1723374823", title: "Men's Plaid Slim  Fit TShirt", price: "$50" },
    { image: "https://levi.in/cdn/shop/files/A65880054_01_Elevated_4e34740e-0d19-4eb9-ae7e-c09286b0ca41_360x.jpg?v=1732828635", title: "Men's Plaid Slim  Fit TShirt", price: "$70" },
    { image: "https://levi.in/cdn/shop/files/A78890003_01_Elevated_360x.jpg?v=1723375521", title: "Men's Plaid Slim  Fit TShirt", price: "$40" },
    { image: "https://levi.in/cdn/shop/files/A79700064_1_Front_360x.jpg?v=1731409183", title: "Men's Plaid Slim  Fit TShirt", price: "$100" }


  ];

  const Shirt = [
    { image: "https://levi.in/cdn/shop/files/328740603_01_Styleshot_360x.jpg?v=1723375753", title: "Men's Plaid Slim  Fit Shirt", price: "$50" },
    { image: "https://levi.in/cdn/shop/files/A78040017_01_Elevated_360x.jpg?v=1723375171", title: "Men's Plaid Slim  Fit Shirt", price: "$70" },
    { image: "https://levi.in/cdn/shop/files/176210296_1_Front_360x.jpg?v=1731423097", title: "Men's Plaid Slim  Fit Shirt", price: "$40" },
    { image: "https://levi.in/cdn/shop/files/176210269_01_StyleShot_360x.jpg?v=1723375830", title: "Men's Plaid Slim  Fit Shirt", price: "$100" }


  ];




  const boots = [
    { image: "https://levi.in/cdn/shop/files/879700123_06_Style_f56b89bf-51bb-4688-9915-426573bd338e_360x.jpg?v=1713542678", title: "Men's Suede Casual Shoes", price: "$50" },
    { image: "https://levi.in/cdn/shop/files/879700120_06_Style_563bb20e-971e-4d43-9e89-2f4e9f32819a_360x.jpg?v=1712301301", title: "Men's Suede Casual Shoes", price: "$70" },
    { image: "https://levi.in/cdn/shop/files/879700152_06_Style_360x.jpg?v=1713512908", title: "Men's Suede Casual Shoes", price: "$40" },
    { image: "https://levi.in/cdn/shop/files/879700159_02_Side_360x.jpg?v=1713513668", title: "Men's Suede Casual Shoes", price: "$100" }


  ]
  const must = [
    { image: "https://levi.in/cdn/shop/files/A40400000_01_Style_Shot_a26661d7-aa1a-4de1-a02f-f202c8bfc60b_360x.jpg?v=1712743461", title: "Men's Solid Slim Fit Shirt", price: "$50" },
    { image: "https://levi.in/cdn/shop/files/169600124_01_Front_53c5c268-6cc2-456d-961d-8ce71b5351df_360x.jpg?v=1712744464", title: "Men's Solid Slim Fit Shirt", price: "$70" },
    { image: "https://levi.in/cdn/shop/files/182981220_01_Style_Shot_b2845fbe-1044-429e-a60b-1907f8083390_360x.jpg?v=1695724483", title: "Men's Solid Slim Fit Shirt", price: "$40" },
    { image: "https://levi.in/cdn/shop/files/182981223_01_Style_Shot_522ee0a6-9b27-42e3-b4ac-9c511a745c79_360x.jpg?v=1695724483", title: "Men's Solid Slim Fit Shirt", price: "$100" }


  ]





  const categories = [
    { label: 'Jeans', image: 'https://i.pinimg.com/236x/42/79/f1/4279f18509cb452609aeb9ed1290e279.jpg' },
    { label: 'Jackets', image: 'https://i.pinimg.com/236x/26/5a/7a/265a7add90f5682fc56ad7ccb656fd01.jpg' },
    { label: 'T-Shirts', image: 'https://i.pinimg.com/236x/5c/70/a4/5c70a4926f0ea515a78b0c76639f91bc.jpg' },
    { label: 'Shirts', image: 'https://i.pinimg.com/236x/73/04/2d/73042de63f8b034dd254edfe9a62ab88.jpg' },
    { label: 'Footwear', image: 'https://i.pinimg.com/236x/0e/be/b3/0ebeb3a6b859819e23a92a5f54c9f3b2.jpg' },
    { label: 'Must Haves', image: 'https://i.pinimg.com/474x/d3/db/81/d3db8159e6405c0d75aed0c334787dfe.jpg' },
  ];

  return (
    <>
      


     
      <div data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
     
      <div style={{ padding: '20px' }}>
        {/* Hero Section */}
       

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
              }} src='https://i.pinimg.com/236x/42/79/f1/4279f18509cb452609aeb9ed1290e279.jpg'></img>
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
              }} src='https://i.pinimg.com/236x/26/5a/7a/265a7add90f5682fc56ad7ccb656fd01.jpg'></img>
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
              }} src='https://i.pinimg.com/236x/5c/70/a4/5c70a4926f0ea515a78b0c76639f91bc.jpg'></img>
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
              }} src='https://i.pinimg.com/236x/73/04/2d/73042de63f8b034dd254edfe9a62ab88.jpg'></img>
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
              }} src='https://i.pinimg.com/236x/0e/be/b3/0ebeb3a6b859819e23a92a5f54c9f3b2.jpg'></img>
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
              }} src='https://i.pinimg.com/474x/d3/db/81/d3db8159e6405c0d75aed0c334787dfe.jpg'></img>
            <label style={{ padding: '10px', fontWeight: 'bold' }}>Must have</label>
          </a>
        </div>
      </div>
      </div>
      <div data-aos="fade-up"
        data-aos-anchor-placement="center-bottom">
      
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: 'url("https://i.pinimg.com/736x/59/d3/25/59d3256f96d86022c542d053faa8740d.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
        }}
      />
      </div>

{/*     
      card */}


      {/* jeaNS */}
      
      <div style={{ textAlign: "center" }}><h1 id='jeans'>Men Jeans</h1></div>
     
      <div className="card-men-sec" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", padding: "20px" }}>
        {cards.map((card, index) => (
          <div className="card"  key={index}>
            <img src={card.image} style={{ width: "22rem", height: "350px", objectFit: "cover" }} className="card-img-top" alt={card.title} />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.price}</p>
              <a href="#" className="btn btn-danger">Add to Cart</a>
            </div>
          </div>
        ))}
      </div>

   
{/* Jacket */}
      <div style={{ textAlign: "center" }}><h1 id='jacket'>Men Jacket</h1></div>

      <div className="card-men-sec" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", padding: "20px" }}>
        {jacket.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} style={{ width: "21rem", height: "350px", objectFit: "cover" }} className="card-img-top" alt={card.title} />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.price}</p>
              <a href="#" className="btn btn-danger">Add to Cart</a>
            </div>
          </div>
        ))}
      </div>
   
        
      {/* tSHIRTS */}
      <div style={{ textAlign: "center" }}><h1 id='tshirts'>Men T-Shirts</h1></div>

      <div className="card-men-sec" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", padding: "20px" }}>
        {TShirt.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} style={{ width: "22rem", height: "350px", objectFit: "cover" }} className="card-img-top" alt={card.title} />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.price}</p>
              <a href="#" className="btn btn-danger">Add to Cart</a>
            </div>
          </div>
        ))}
      </div>

{/* shirts */}
      <div style={{ textAlign: "center" }}><h1 id='shirts'>Men Shirts</h1></div>

      <div className="card-men-sec" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", padding: "20px" }}>
        {Shirt.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} style={{ width: "22rem", height: "350px", objectFit: "cover" }} className="card-img-top" alt={card.title} />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.price}</p>
              <a href="#" className="btn btn-danger">Add to Cart</a>
            </div>
          </div>
        ))}
      </div>



{/* boot */}
      <div style={{ textAlign: "center" }}><h1 id='boots'>Men Shirts</h1></div>

      <div className="card-men-sec" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", padding: "20px" }}>
        {boots.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} style={{ width: "22rem", height: "350px", objectFit: "cover" }} className="card-img-top" alt={card.title} />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.price}</p>
              <a href="#" className="btn btn-danger">Add to Cart</a>
            </div>
          </div>
        ))}
      </div>

      
{/* must have */}
      <div style={{ textAlign: "center" }}><h1 id='must'>Men Must Have</h1></div>

      <div className="card-men-sec" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", padding: "20px" }}>
        {must.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} style={{ width: "22rem", height: "350px", objectFit: "cover" }} className="card-img-top" alt={card.title} />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.price}</p>
              <a href="#" className="btn btn-danger">Add to Cart</a>
            </div>
          </div>
        ))}
      </div>



      

      <Footer></Footer>
      

      </>
  );
};

export default Men;
