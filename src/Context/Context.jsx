import axios from "../axios";
import { useState, useEffect, createContext } from "react";

const AppContext = createContext({
  data: [],
  isError: "",
  cart: [],
  addToCart: (product) => {},
  removeFromCart: (productId) => {},
  refreshData: () => {},
  updateStockQuantity: (productId, newQuantity) => {},
  clearCart: () => {},
});

export const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState("");
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  // Fetch token from localStorage (set it after login)
  const getToken = () => localStorage.getItem("token");

  // Fetch product data
  const refreshData = async () => {
    try {
      const token = getToken();
      const response = await axios.get("http://localhost:8080/api/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data);
      setIsError("");
    } catch (error) {
      setIsError("Failed to load products. Please try again later.");
      console.error("Error fetching products:", error);
    }
  };

  // Add product to cart
  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    let updatedCart;
    if (existingProductIndex !== -1) {
      updatedCart = cart.map((item, index) =>
        index === existingProductIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Update stock quantity in backend
  const updateStockQuantity = async (productId, newQuantity) => {
    try {
      const token = getToken();
      const response = await axios.put(
        `/products/${productId}/update-stock`,
        { quantity: newQuantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        setData((prevData) =>
          prevData.map((product) =>
            product.id === productId ? { ...product, stock: newQuantity } : product
          )
        );
        alert("Stock updated successfully!");
      } else {
        throw new Error("Failed to update stock.");
      }
    } catch (error) {
      console.error("Error updating stock:", error);
      alert("An error occurred while updating stock.");
    }
  };

  // Clear the cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  // Load data on mount
  useEffect(() => {
    refreshData();
  }, []);

  // Sync cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <AppContext.Provider
      value={{
        data,
        isError,
        cart,
        addToCart,
        removeFromCart,
        refreshData,
        updateStockQuantity,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
