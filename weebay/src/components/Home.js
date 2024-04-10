import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import '../css/Home.css';

function Home() {
    const [products, setProducts] = useState([]);
    const { addToCart } = useContext(CartContext);

    useEffect(()=> {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products: ', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Fake Store</h1>
            <h2>Products</h2>
            <div className="product-container">
                {products.map(product => (
                    <div key={product.id}>
                        <h3>{product.title}</h3>
                        <img src={product.image} alt={product.title} style={{width: '100px', height:'100px'}} />
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <p>rating: {product.rating.rate}</p>
                        <p>count: {product.rating.count}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}   
            </div>
        </div>
    );
}

export default Home;
