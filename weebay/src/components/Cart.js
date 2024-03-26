import React, { useState } from "react";
import { AuthContext } from "./AuthContext";

function Cart() {
    const [carts, setCarts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchCarts();
    },[]);

    const fetchCarts = () => {
        fetch('https://fakestoreapi.com/carts')
        .then(res => res.json())
        .then(data => {
            setCarts(data);
        })
        .catch(error=>{
            console.error('Error fetching carts:', error);
            setError('Failed to fetch carts. Please try again later.');
        });
    }
}