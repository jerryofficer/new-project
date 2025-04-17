import React from 'react'
import './Kids.css'
import Footer from './Footer'


const Kids = () => {


   const winter=[
       { image: "https://static.hopscotch.in/fstatic/product/202411/dd666824-9e55-4c75-8f79-a4d559abe636_full.jpg?version=1730884951950&tr=f-webp,w-480,c-at_max,dpr-2,n-medium", title: "Jacket & Coats", price: "$50" },
       { image: "https://static.hopscotch.in/fstatic/product/202411/5fb0c498-8a58-4653-8d60-b10f04dca917_full.jpg?version=1730884959407&tr=f-webp,w-480,c-at_max,dpr-2,n-medium", title: "Sweater", price: "$70" },
       { image: "https://static.hopscotch.in/fstatic/product/202411/ee791ddf-403a-4d18-ac84-a815032168de_full.jpg?version=1730953633585&tr=f-webp,w-480,c-at_max,dpr-2,n-medium", title: "BodySuit", price: "$40" },
       { image: "https://static.hopscotch.in/fstatic/product/202411/5a0024d4-79e6-49c2-9997-68c109f95f15_full.jpg?version=1730884975100&tr=f-webp,w-480,c-at_max,dpr-2,n-medium", title: "Full length suit", price: "$100" },
   ]

    
    const party = [
        { image: "https://static.hopscotch.in/fstatic/product/202409/e1f12859-af25-4aaf-b5a7-668fc7c4fd73_large.jpg?version=1725973616942&tr=f-webp,w-480,c-at_max,n-normal", title: "Jacket & Coats", price: "$50" },
        { image: "https://static.hopscotch.in/fstatic/product/202409/2d36f45a-fb47-4b0a-849e-d3c471aef343_large.jpg?version=1727239381818&tr=f-webp,w-480,c-at_max,n-normal", title: "Sweater", price: "$70" },
        { image: "https://static.hopscotch.in/fstatic/product/202412/1820609b-6843-4248-9f3b-a6f3a30b5926_large.jpg?version=1734097172972&tr=f-webp,w-480,c-at_max,n-normal", title: "BodySuit", price: "$40" },
        { image: "https://static.hopscotch.in/fstatic/product/202411/1c3d67e4-8f7b-48e4-9cd7-d3510f4d9441_large.jpg?version=1732019053707&tr=f-webp,w-480,c-at_max,n-normal", title: "Full length suit", price: "$100" },
        
    ]
    const Combo = [
        { image: "https://static.hopscotch.in/fstatic/product/202412/20080c40-11ed-47bb-9454-81d0459b4360_full.jpg?version=1733309255199&tr=f-webp,w-480,c-at_max,dpr-2,n-medium", title: "Jacket & Coats", price: "$50" },
        { image: "https://static.hopscotch.in/fstatic/product/202412/cf31bd09-1e0c-4ae8-832a-aeda3d669b82_full.jpg?version=1733132786023&tr=f-webp,w-480,c-at_max,dpr-2,n-medium", title: "Sweater", price: "$70" },
        { image: "https://static.hopscotch.in/fstatic/product/202412/5476765f-616f-48ec-a6c3-d449ea178819_full.jpg?version=1733309339349&tr=f-webp,w-480,c-at_max,dpr-2,n-medium", title: "BodySuit", price: "$40" },
        { image: "https://static.hopscotch.in/fstatic/product/202412/7155ad60-1f53-42c2-bae2-077993d9fe5c_full.jpg?version=1733215618196&tr=f-webp,w-480,c-at_max,dpr-2,n-medium", title: "Full length suit", price: "$100" },

    ]





    return (
        <>
            <div className='kids'>
            <div className='kidswintwinter'>
                    <a href='#winter'> <img src='https://static.hopscotch.in/fstatic/product/202412/e79f7b02-3f39-4899-844e-712d518b2a6a_full.jpg?version=1733911502211&tr=f-webp,w-480,c-at_max,dpr-2,n-medium'></img></a>
                </div>
                <div className='party'>
                    <a href='#party'><img src='https://static.hopscotch.in/fstatic/product/202412/85208fd1-0412-43b1-98a2-1f8f554c63c0_full.jpg?version=1734155698190&tr=f-webp,w-480,c-at_max,dpr-2,n-medium'></img></a> 
                </div>
                <div className='winter'>
                  <a href='#combo'><img src='https://static.hopscotch.in/fstatic/product/202412/8883b423-af5b-400e-b822-d6449071de77_full.gif?version=1733215324446&tr=f-webp,w-480,c-at_max,dpr-2,n-medium'></img></a>
                </div>
                <div className='chillready'>
                    <div className='chill1'>
                  
                    <img src='https://static.hopscotch.in/fstatic/product/202412/1b033769-2190-4b7b-9702-4afcc66e0821_full.jpg?version=1734004701222&tr=f-webp,w-480,c-at_max,dpr-2,n-medium'>
                        </img>
                        <h3>Chill-Ready Trends</h3>
                    </div>
                </div>
            </div>
            <div className='kidsvc'>
                <img src='https://static.hopscotch.in/fstatic/product/202412/96d1d762-b787-45ab-bfb6-c6f2083df72a_full.gif?version=1733404794872&tr=f-webp,w-480,c-at_max,dpr-2,n-medium'></img>

            </div>

            <div className='Winter-cl'>
               <h1 id="winter">Winter clothes</h1>
                <div className="card-men-sec" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", padding: "20px" }}>
                    {winter.map((card, index) => (
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
            </div>
   
            <div className='Party-cl'>
                <h1 id="party">PartyWear</h1>
                <div className="card-men-sec" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", padding: "20px" }}>
                    {party.map((card, index) => (
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


            </div>


            <div className='combo'>
                <h1 id="combo"> CuteCombo</h1>
                <div className="card-men-sec" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", padding: "20px" }}>
                    {Combo.map((card, index) => (
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

            </div>


            
            <Footer></Footer>
        </>
  )
}

export default Kids