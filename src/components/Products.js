import React from 'react'
import { useEffect, useState } from 'react';
import './Products.css'
import Footer from './Footer';


const Products = () => {
    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://fakestoreapiserver.reactbd.com/smart")
            .then((response) => response.json())
            .then((data) => {
                setdata(data); // The response is already an array of products
                setloading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setError(error.message);
                setloading(false);
            });
    }, []);

    if (loading) {
        return <div id='loader'></div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }


  return (
      <>
          <center> <p style={{ fontSize: "50px", backgroundColor: "black" }}>#See All Products</p></center> 
          <div className='prod'>
          <div
              style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "20px",
                  padding: "20px",
              }}
          >
              {data.map((post) => (
                  <div key={post.id}>
                      <div className="card">
                          <img
                              style={{ width: "18rem", height: "300px", objectFit: "cover" }}
                              src={post.image} // Fallback for missing image
                              className="card-img-top"
                              alt={post.title || "Product Image"}
                          />
                          <div className="card-body">
                              <h5 className="card-title">{post.title || "Untitled Product"}</h5>
                              <p className="card-text">${post.price || "N/A"}</p>
                              <a href="#" className="btn btn-primary">
                                  Add to Cart
                              </a>
                          </div>
                      </div>
                  </div>
              ))}
              </div>
          </div>
          <Footer></Footer>
      </>
  )
}

export default Products