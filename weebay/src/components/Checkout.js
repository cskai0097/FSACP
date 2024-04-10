import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import "../css/Checkout.css"

function Checkout() {
    const [formData, setFormData] = useState({
        name:'',
        lastname:'',
        address:'',
        city:'',
        postalCode: '',
        nameOnCard:'',
        cardNumber:'',
        date:'',
        cvv:''
    });

    const { cart, setCart } = useContext(CartContext);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(preFormData => ({
            ...preFormData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('checkout data: ', formData);
    }

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity,0)
    }

    return (
        <div>
            <div className="checkout-container">
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <h1>Checkout</h1>
                        <h3 style={{marginLeft:'1%' , width:'fit-content'}}>Shipping Details</h3>
                        <div className="shipping-details">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="First Name"
                                    required
                                />
                                <input
                                    type="text"
                                    name="lastname"
                                    value={formData.lastname}
                                    onChange={handleInputChange}
                                    placeholder="Last Name"
                                    required
                                />
                            </div>
                            <div>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                placeholder="City"
                                required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    placeholder="Address"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                type="text"
                                name="postalCode"
                                value={formData.postalCode}
                                onChange={handleInputChange}
                                placeholder="Postal Code"
                                required
                                />
                            </div>
                        </div>
                        <div className="bar"> </div>
                        <h3 style={{marginLeft:'1%', width:'fit-content'}}>Payment Details</h3>

                    <div className="payment-details">
                        <div>
                        <input
                            type="text"
                            name="nameOnCard"
                            value={formData.nameOnCard}
                            onChange={handleInputChange}
                            placeholder="Name on Card"
                            required
                        />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="cardNumber"
                                value={formData.cardNumber}
                                onChange={handleInputChange}
                                placeholder="Card Number"
                                required
                            />
                        </div>
                    <div>
                        <input
                                type="text"
                                name="date"
                                value={formData.date}
                                onChange={handleInputChange}
                                placeholder="Expiration Date (MM/YY)"
                                required
                            />
                            <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            placeholder="CVV"
                            required
                        />
                    </div>
                    </div>
                        <div className="cart-summary">
                            <h2>Cart Items</h2>
                            {cart.map((item, index) => (
                            <div key={index}>
                                <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px'}}/>
                                <div>
                                <p className="cart-item-title">{item.title}</p>
                                <p className="cart-item-price">${item.price}</p>
                                <p>Qty:{item.quantity}</p>
                                </div>

                            </div>
                            ))}
                            <p className="cart-total">Total: ${calculateTotal()}</p>
                            <button type="submit">Checkout</button>
                        </div>
                    </form>
                </div>
                    
            </div>
            
            
        </div>
        
    );
}

export default Checkout;