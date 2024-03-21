import React, { useEffect, useState } from "react";

function GetProducts() {
    const [ products, setProducts ] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(response=>response.json())
            .then(data =>
                setProducts(data),
                console.log(products))
            .catch(error => console.error('Error fetching products', error));
    },[])
    
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

    return (
        <div>
            <input
            type="text"
            placeholder="search products..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            />
           <h3>Products</h3>
           <ul>
            {filteredProducts.map(product => (
                <li key={product.id} style={{marginTop:"2%"}}>
                    <div style={{fontSize:"30px"}}><strong>{product.title}</strong></div>
                    <img src={product.image} alt="product" style={{width:"150px", height:"150px"}}/>
                    <div>Price: ${product.price}</div>
                    <div>Category: {product.category}</div>
                    <div>Rating: {product.rating.rate}/5</div>
                    <div>Inventory: {product.rating.count}</div>

                </li>
            ))}
            </ul> 
        </div>
    )
}

export default GetProducts;