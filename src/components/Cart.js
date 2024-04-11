import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "../css/Cart.css"

const Cart = () => {

    const {cart, removeFromCart, incrementQuantity, decrementQuantity}= useContext(CartContext)
    
    const calculateTotal = (cart) => {
        return cart.reduce((acc, item) => acc +item.price * item.quantity, 0).toFixed(2)
    };
    
    
    return (
        <div>
            <h1>Cart</h1>
                <div className="cart-container">
                    {cart.length > 0 ? (
                        <div>
                            {cart.map((item,index) => (
                                <div key={index}>
                                    <img src={item.image} alt={item.title}  style={{width: '100px', height:'100px'}}/>
                                    <h3>{item.title}</h3>
                                    <p>${item.price}</p>
                                    <button onClick={() => decrementQuantity(item.id)}>-</button>
                                    <span>Quantity: {item.quantity}</span>
                                    <button onClick={() => incrementQuantity(item.id)}>+</button>
                                    <div><button onClick={() => removeFromCart(item.id)}>remove</button></div>
                                </div>
                                ))}
                                <h2>Total: ${calculateTotal(cart)}</h2>
                                {/* Checkout button or further navigation can go here */}
                        </div>
                        ) : (
                                <p>Your cart is empty.</p>
                            )}
                </div>
            
        </div>
    );
};
export default Cart