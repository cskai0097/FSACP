import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (newProduct) => {
    setCart(currentCart => {
        //check if the product is already in cart
        const isProductInCart = currentCart.find(product => product.id === newProduct.id);

        //if the product is in the cart, update the quantity
        if(isProductInCart) {
            return currentCart.map(product => {
                if (product.id === newProduct.id) {
                    return { ...product, quantity: product.quantity + 1};
                } else {
                    return product;
                }
            });
        } else {
            //product is not in the cart, add it with quantity of 1
            return [...currentCart, { ...newProduct, quantity: 1}];
        }});
  };

  const removeFromCart = (id) => {
    setCart(currentCart => currentCart.filter(item => item.id !== id));
  };

  const incrementQuantity = (id) => {
    setCart(currentCart => currentCart.map(item => {
        if (item.id === id) {
            return { ...item,quantity: item.quantity + 1 };
        }
        return item;
    }));
  };
  
  const decrementQuantity = (id) => {
    setCart(currentCart => currentCart.map(item => {
        if (item.id === id && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
        }
        return item;
    }));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, incrementQuantity, decrementQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
