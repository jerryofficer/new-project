import React, { useContext } from 'react';
import './Women.css';
import Footer from './Footer';
import { CartContext } from './CartContext';

const Women = () => {
  const { addToCart } = useContext(CartContext);

  // Function to handle Add to Cart
  const handleAddToCart = (card, index) => {
    const product = {
      id: card.title + index, // unique id
      title: card.title,
      price: parseInt(card.price.replace("$", "")),
      image: card.image,
    };

    addToCart(product, 1);
    alert("Item added to cart successfully!");
  };

  const cards = [
    { image: "https://levi.in/cdn/shop/files/000G90001_1_360x.jpg?v=1733743681", title: "Jeans", price: "$50" },
    { image: "https://levi.in/cdn/shop/files/000G90003_05_Styleshot_360x.jpg?v=1734075770", title: "Jeans", price: "$70" },
    { image: "https://levi.in/cdn/shop/files/A25040038_4_360x.jpg?v=1734018374", title: "Jeans", price: "$40" },
    { image: "https://levi.in/cdn/shop/files/A25150000_01_Front_360x.jpg?v=1695725994", title: "Jeans", price: "$100" }
  ];

  const jacket = [
    { image: "https://levi.in/cdn/shop/files/002V90001_1_360x.jpg?v=1734021643", title: "Jacket", price: "$50" },
    { image: "https://levi.in/cdn/shop/files/548880029_01_Styleshot_360x.jpg?v=1732618105", title: "Jacket", price: "$70" },
    { image: "https://levi.in/cdn/shop/files/A65780000_01_Style_Shot_360x.jpg?v=1712742962", title: "Jacket", price: "$40" },
    { image: "https://levi.in/cdn/shop/files/002V90000_1_360x.jpg?v=1734021526", title: "Jacket", price: "$100" }
  ];

  const TShirt = [
    { image: "https://levi.in/cdn/shop/files/000EV0001_1_Front_360x.jpg?v=1731473790", title: "Top", price: "$50" },
    { image: "https://levi.in/cdn/shop/files/A92090004_01_Elevated_360x.jpg?v=1726117600", title: "Top", price: "$70" },
    { image: "https://levi.in/cdn/shop/files/A92030003_1_360x.jpg?v=1734020455", title: "Top", price: "$40" },
    { image: "https://levi.in/cdn/shop/files/000EV0002_1_Front_360x.jpg?v=1731473899", title: "Top", price: "$100" }
  ];

  // Reusable card section
  const renderSection = (data, heading, id) => (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 id={id}>{heading}</h1>
      </div>

      <div
        className="card-men-sec"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          padding: "20px"
        }}
      >
        {data.map((card, index) => (
          <div className="card" key={index}>
            <img
              src={card.image}
              style={{ width: "18rem", height: "300px", objectFit: "cover" }}
              className="card-img-top"
              alt={card.title}
            />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.price}</p>

              <button
                className="btn btn-danger"
                onClick={() => handleAddToCart(card, index)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <>
      {renderSection(cards, "Women Jeans", "jeans")}
      {renderSection(jacket, "Women Jacket", "jacket")}
      {renderSection(TShirt, "Women Top", "tops")}

      <Footer />
    </>
  );
};

export default Women;