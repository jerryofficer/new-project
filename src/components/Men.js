import React, { useContext } from 'react';
import './Men.css';
import Footer from './Footer';
import { CartContext } from './CartContext';

const Men = () => {
  const { addToCart } = useContext(CartContext);

  const cards = [
    { image: "https://levi.in/cdn/shop/files/001AC0001_1_Front_360x.jpg?v=1731410662", title: "Men's 511 Slim Fit Navy Jeans", price: 50 },
    { image: "https://i.pinimg.com/236x/9b/bb/51/9bbb5139295fc7c0bc53e71d47ae42f0.jpg", title: "Men's 511 Slim Fit Navy Jeans", price: 70 },
    { image: "https://levi.in/cdn/shop/files/360870866_01_Styleshot_360x.jpg?v=1722184747", title: "Men's 511 Slim Fit Navy Jeans", price: 40 },
    { image: "https://levi.in/cdn/shop/files/001BW0003_05_Styleshot_360x.jpg?v=1729589731", title: "Men's 511 Slim Fit Navy Jeans", price: 100 }
  ];

  const jacket = [
    { image: "https://levi.in/cdn/shop/files/A71390001_01_Styleshot_360x.jpg?v=1725607956", title: "Men's Solid Black Jacket", price: 50 },
    { image: "https://levi.in/cdn/shop/files/248690123_01_Styleshot_c6cc9d42-59cf-4618-93bd-0c5e591692a5_360x.jpg?v=1727343539", title: "Men's Solid Black Jacket", price: 70 },
    { image: "https://levi.in/cdn/shop/files/000DK0001_01_Elevated_360x.jpg?v=1723375041", title: "Men's Solid Black Jacket", price: 40 },
    { image: "https://levi.in/cdn/shop/files/000DA0000_1_Front_360x.jpg?v=1731414064", title: "Men's Solid Black Jacket", price: 100 }
  ];

  const TShirt = [
    { image: "https://levi.in/cdn/shop/files/A25650014_01_Styleshot_360x.jpg?v=1723374823", title: "Men's Slim Fit T-Shirt", price: 50 },
    { image: "https://levi.in/cdn/shop/files/A65880054_01_Elevated_360x.jpg?v=1732828635", title: "Men's Slim Fit T-Shirt", price: 70 },
    { image: "https://levi.in/cdn/shop/files/A78890003_01_Elevated_360x.jpg?v=1723375521", title: "Men's Slim Fit T-Shirt", price: 40 },
    { image: "https://levi.in/cdn/shop/files/A79700064_1_Front_360x.jpg?v=1731409183", title: "Men's Slim Fit T-Shirt", price: 100 }
  ];

  const Shirt = [
    { image: "https://levi.in/cdn/shop/files/328740603_01_Styleshot_360x.jpg?v=1723375753", title: "Men's Slim Fit Shirt", price: 50 },
    { image: "https://levi.in/cdn/shop/files/A78040017_01_Elevated_360x.jpg?v=1723375171", title: "Men's Slim Fit Shirt", price: 70 },
    { image: "https://levi.in/cdn/shop/files/176210296_1_Front_360x.jpg?v=1731423097", title: "Men's Slim Fit Shirt", price: 40 },
    { image: "https://levi.in/cdn/shop/files/176210269_01_StyleShot_360x.jpg?v=1723375830", title: "Men's Slim Fit Shirt", price: 100 }
  ];

  const boots = [
    { image: "https://levi.in/cdn/shop/files/879700123_06_Style_360x.jpg?v=1713542678", title: "Men's Casual Shoes", price: 50 },
    { image: "https://levi.in/cdn/shop/files/879700120_06_Style_360x.jpg?v=1712301301", title: "Men's Casual Shoes", price: 70 },
    { image: "https://levi.in/cdn/shop/files/879700152_06_Style_360x.jpg?v=1713512908", title: "Men's Casual Shoes", price: 40 },
    { image: "https://levi.in/cdn/shop/files/879700159_02_Side_360x.jpg?v=1713513668", title: "Men's Casual Shoes", price: 100 }
  ];

  const must = [
    { image: "https://levi.in/cdn/shop/files/A40400000_01_Style_Shot_360x.jpg?v=1712743461", title: "Men's Solid Shirt", price: 50 },
    { image: "https://levi.in/cdn/shop/files/169600124_01_Front_360x.jpg?v=1712744464", title: "Men's Solid Shirt", price: 70 },
    { image: "https://levi.in/cdn/shop/files/182981220_01_Style_Shot_360x.jpg?v=1695724483", title: "Men's Solid Shirt", price: 40 },
    { image: "https://levi.in/cdn/shop/files/182981223_01_Style_Shot_360x.jpg?v=1695724483", title: "Men's Solid Shirt", price: 100 }
  ];

  // Reusable Card Renderer (no CSS change)
  const renderCards = (items, prefix) => (
    <div className="card-men-sec" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", padding: "20px" }}>
      {items.map((card, index) => (
        <div className="card" key={index}>
          <img
            src={card.image}
            style={{ width: "22rem", height: "350px", objectFit: "cover" }}
            className="card-img-top"
            alt={card.title}
          />
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">${card.price}</p>

            <button
              className="btn btn-danger"
              onClick={() =>
                addToCart({
                  id: prefix + index,
                  title: card.title,
                  price: card.price,
                  image: card.image,
                  quantity: 1
                })
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* Jeans */}
      <div style={{ textAlign: "center" }}>
        <h1 id="jeans">Men Jeans</h1>
      </div>
      {renderCards(cards, "jeans-")}

      {/* Jacket */}
      <div style={{ textAlign: "center" }}>
        <h1 id="jacket">Men Jacket</h1>
      </div>
      {renderCards(jacket, "jacket-")}

      {/* T-Shirts */}
      <div style={{ textAlign: "center" }}>
        <h1 id="tshirts">Men T-Shirts</h1>
      </div>
      {renderCards(TShirt, "tshirt-")}

      {/* Shirts */}
      <div style={{ textAlign: "center" }}>
        <h1 id="shirts">Men Shirts</h1>
      </div>
      {renderCards(Shirt, "shirt-")}

      {/* Footwear */}
      <div style={{ textAlign: "center" }}>
        <h1 id="boots">Footwear</h1>
      </div>
      {renderCards(boots, "boots-")}

      {/* Must Have */}
      <div style={{ textAlign: "center" }}>
        <h1 id="must">Men Must Have</h1>
      </div>
      {renderCards(must, "must-")}

      <Footer />
    </>
  );
};

export default Men;