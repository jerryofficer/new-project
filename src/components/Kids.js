import React, { useContext } from 'react';
import './Kids.css';
import Footer from './Footer';
import { CartContext } from './CartContext';

const Kids = () => {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = (card, index) => {
        const product = {
            id: card.title + index,
            title: card.title,
            price: parseInt(card.price.replace("$", "")),
            image: card.image,
        };

        addToCart(product, 1);
        alert("Item added to cart successfully!");
    };

    const winter = [
        { image: "https://static.hopscotch.in/fstatic/product/202411/dd666824-9e55-4c75-8f79-a4d559abe636_full.jpg", title: "Jacket & Coats", price: "$50" },
        { image: "https://static.hopscotch.in/fstatic/product/202411/5fb0c498-8a58-4653-8d60-b10f04dca917_full.jpg", title: "Sweater", price: "$70" },
        { image: "https://static.hopscotch.in/fstatic/product/202411/ee791ddf-403a-4d18-ac84-a815032168de_full.jpg", title: "BodySuit", price: "$40" },
        { image: "https://static.hopscotch.in/fstatic/product/202411/5a0024d4-79e6-49c2-9997-68c109f95f15_full.jpg", title: "Full length suit", price: "$100" },
    ];

    const party = [
        { image: "https://static.hopscotch.in/fstatic/product/202409/e1f12859-af25-4aaf-b5a7-668fc7c4fd73_large.jpg", title: "Party Dress", price: "$50" },
        { image: "https://static.hopscotch.in/fstatic/product/202409/2d36f45a-fb47-4b0a-849e-d3c471aef343_large.jpg", title: "Party Wear", price: "$70" },
        { image: "https://static.hopscotch.in/fstatic/product/202412/1820609b-6843-4248-9f3b-a6f3a30b5926_large.jpg", title: "BodySuit", price: "$40" },
        { image: "https://static.hopscotch.in/fstatic/product/202411/1c3d67e4-8f7b-48e4-9cd7-d3510f4d9441_large.jpg", title: "Suit", price: "$100" },
    ];

    const renderSection = (data, title) => (
        <>
            <h1 style={{ textAlign: "center" }}>{title}</h1>

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
            {renderSection(winter, "Kids Winter")}
            {renderSection(party, "Kids Party")}
            <Footer />
        </>
    );
};

export default Kids;