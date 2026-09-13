import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

function getSavedCart() {
  try {
    const savedCart = localStorage.getItem("ifeoluwa-cart");

    return savedCart ? JSON.parse(savedCart) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(getSavedCart);

  useEffect(() => {
    localStorage.setItem(
      "ifeoluwa-cart",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  const addToCart = (product, size, quantity = 1) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) =>
          item.id === product.id &&
          item.selectedSize === size
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id &&
          item.selectedSize === size
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        );
      }

      return [
        ...currentItems,
        {
          ...product,
          selectedSize: size,
          quantity,
        },
      ];
    });
  };

  const removeFromCart = (productId, size) => {
    setCartItems((currentItems) =>
      currentItems.filter(
        (item) =>
          !(
            item.id === productId &&
            item.selectedSize === size
          )
      )
    );
  };

  const increaseQuantity = (productId, size) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId &&
        item.selectedSize === size
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (productId, size) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === productId &&
          item.selectedSize === size
            ? {
                ...item,
                quantity: Math.max(0, item.quantity - 1),
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}