import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
 function StripeTest() {
  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);

  return (
    <form action="/api/checkout_sessions" method="POST">
      <section>
      <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                Comprar Aquí
              </button>
      </section>
    </form>
  );
}

import { useState, useEffect } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Product } from '../models';

const Cart = () => {
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const products = await DataStore.query(Product);
      setProducts(products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addToCart = (product) => {
    console.log(items)
    const existingItem = items.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedItems = items.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setItems(updatedItems);
    } else {
      setItems([...items, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const existingItem = items.find((item) => item.id === product.id);

    if (existingItem) {
      if (existingItem.quantity === 1) {
        const updatedItems = items.filter((item) => item.id !== product.id);
        setItems(updatedItems);
      } else {
        const updatedItems = items.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
        setItems(updatedItems);
      }
    }
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const checkout = async () => {
    {console.log(items)}
    const lineItems = items.map((item) => ({
      price_data: {
        currency: 'mxn',
        product_data: {
          name: item.name,
          // description: item.description,
          images: [
            item.cover
          ],
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));
    console.log(lineItems)
    

    // Call your backend API to create a Stripe Checkout Session
    const response = await fetch('/api/checkout_sessions', {
      method: 'POST',
      body: JSON.stringify({ lineItems }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const body = await response.json()
    window.location.href = body.url
    // Rest of the code remains the same
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}

      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>
            ${item.price} x {item.quantity}
          </p>
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))}

      <h2>Total: ${getTotalPrice()}</h2>

      <button onClick={checkout}>Checkout</button>
    </div>
  );
};

export default Cart;