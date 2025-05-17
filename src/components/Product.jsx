import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AppContext from "../Context/Context";
import axios from "../axios";

const Product = () => {
  const { id } = useParams();
  const { addToCart, removeFromCart, refreshData } = useContext(AppContext);
  const [product, setProduct] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [isImageLoading, setIsImageLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/product/${id}`);
        setProduct(response.data);
        if (response.data.imageName) {
          fetchImage();
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    const fetchImage = async () => {
      setIsImageLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:8080/api/product/${id}/image`,
          { responseType: "blob" }
        );
        setImageUrl(URL.createObjectURL(response.data));
      } catch (error) {
        console.error("Error loading image:", error);
      } finally {
        setIsImageLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const deleteProduct = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/product/${id}`);
      removeFromCart(id);
      alert("Product deleted successfully");
      refreshData();
      navigate("/");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleEditClick = () => {
    navigate(`/product/update/${id}`);
  };

  const handleAddToCart = () => {
    addToCart(product);
    alert("Product added to cart");
  };

  if (!product) {
    return (
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "50vh",
        animation: "fadeIn 0.5s ease-in-out"
      }}>
        <h2 style={{ 
          color: "#555",
          fontSize: "1.5rem",
          fontWeight: "500"
        }}>Loading product details...</h2>
      </div>
    );
  }

  return (
    <div style={{ 
      maxWidth: "1200px", 
      margin: "2rem auto", 
      padding: "0 1rem",
      animation: "fadeIn 0.5s ease-in-out"
    }}>
      {/* Product Details */}
      <div style={{ 
        display: "flex", 
        flexDirection: { xs: "column", md: "row" },
        gap: "2rem",
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        ":hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 15px 35px rgba(0,0,0,0.12)"
        }
      }}>
        
        <div style={{ 
          flex: 1,
          padding: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f8f9fa",
          position: "relative",
          minHeight: "400px"
        }}>
          {isImageLoading ? (
            <div style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#f0f0f0",
              borderRadius: "8px",
              animation: "pulse 1.5s infinite"
            }}>
              <span style={{ color: "#aaa" }}>Loading image...</span>
            </div>
          ) : (
            <img
              src={imageUrl}
              alt={product.imageName}
              style={{ 
                width: "100%", 
                maxWidth: "500px",
                height: "auto",
                objectFit: "contain",
                borderRadius: "8px",
                transition: "transform 0.3s ease",
                ":hover": {
                  transform: "scale(1.02)"
                }
              }}
              onLoad={() => setIsImageLoading(false)}
            />
          )}
        </div>

        
        <div style={{ 
          flex: 1,
          padding: "2.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}>
          <div>
            <div style={{ 
              display: "flex", 
              justifyContent: "space-between",
              marginBottom: "1.5rem",
              alignItems: "center"
            }}>
              <span style={{ 
                color: "#6c757d",
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontSize: "0.9rem",
                fontWeight: "600",
                backgroundColor: "#f0f0f0",
                padding: "0.3rem 0.8rem",
                borderRadius: "20px"
              }}>
                {product.category}
              </span>
              <span style={{ 
                color: "#6c757d",
                fontSize: "0.9rem"
              }}>
                Listed: {new Date(product.releaseDate).toLocaleDateString()}
              </span>
            </div>

            <h1 style={{ 
              fontSize: "2.2rem", 
              margin: "0 0 0.8rem",
              fontWeight: "700",
              color: "#2c3e50",
              lineHeight: "1.2"
            }}>
              {product.name}
            </h1>
            
            <p style={{ 
              color: "#7f8c8d",
              marginBottom: "1.5rem",
              fontSize: "1.1rem",
              fontWeight: "500"
            }}>
              {product.brand}
            </p>

            <div style={{ 
              marginBottom: "2rem",
              paddingBottom: "1.5rem",
              borderBottom: "1px solid #eee"
            }}>
              <h3 style={{ 
                fontSize: "1.3rem",
                fontWeight: "600",
                marginBottom: "1rem",
                color: "#34495e"
              }}>
                Product Description
              </h3>
              <p style={{ 
                lineHeight: "1.7",
                color: "#555",
                fontSize: "1rem"
              }}>
                {product.description}
              </p>
            </div>

            
            <div style={{ 
              marginBottom: "2rem",
              paddingBottom: "1.5rem",
              borderBottom: "1px solid #eee"
            }}>
              <h3 style={{ 
                fontSize: "1.3rem",
                fontWeight: "600",
                marginBottom: "1rem",
                color: "#34495e"
              }}>
                Owner Contact
              </h3>
              <p style={{ 
                lineHeight: "1.6",
                color: "#3498db",
                fontWeight: "600",
                fontSize: "1.1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 4H19C20.1046 4 21 4.89543 21 6V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V6C3 4.89543 3.89543 4 5 4Z" stroke="#3498db" strokeWidth="2"/>
                  <path d="M21 6L12 13L3 6" stroke="#3498db" strokeWidth="2"/>
                </svg>
                {product.ownerNumber || "Contact not provided"}
              </p>
            </div>
          </div>

          <div>
            <div style={{ 
              display: "flex", 
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "2.5rem"
            }}>
              <div>
                <span style={{ 
                  fontSize: "2.5rem", 
                  fontWeight: "800",
                  color: "#2c3e50",
                  display: "block",
                  marginBottom: "0.5rem"
                }}>
                  ${product.price.toFixed(2)}
                </span>
                <div style={{
                  display: "inline-block",
                  backgroundColor: product.stockQuantity > 0 ? "#e8f5e9" : "#ffebee",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "20px",
                  animation: `${product.stockQuantity > 0 ? "pulseGreen" : "pulseRed"} 2s infinite`
                }}>
                  <span style={{ 
                    color: product.stockQuantity > 0 ? "#2e7d32" : "#c62828",
                    fontWeight: "600",
                    fontSize: "0.9rem"
                  }}>
                    {product.stockQuantity > 0 
                      ? `✓ ${product.stockQuantity} in stock` 
                      : "✗ Out of stock"}
                  </span>

                </div>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!product.productAvailable}
                style={{
                  padding: "1rem 2.5rem",
                  backgroundColor: product.productAvailable ? "#3498db" : "#95a5a6",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: product.productAvailable ? "pointer" : "not-allowed",
                  fontWeight: "600",
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                  boxShadow: product.productAvailable ? "0 4px 6px rgba(52, 152, 219, 0.3)" : "none",
                  ":hover": {
                    backgroundColor: product.productAvailable ? "#2980b9" : "#95a5a6",
                    transform: product.productAvailable ? "translateY(-2px)" : "none",
                    boxShadow: product.productAvailable ? "0 6px 12px rgba(52, 152, 219, 0.3)" : "none"
                  },
                  ":active": {
                    transform: product.productAvailable ? "translateY(0)" : "none"
                  }
                }}
              >
                {product.productAvailable ? "Add to Cart" : "Out of Stock"}
              </button>
            </div>

            {/* Action Buttons
            <div style={{ 
              display: "flex", 
              gap: "1.5rem",
              borderTop: "1px solid #eee",
              paddingTop: "1.5rem"
            }}>
              <button
                onClick={handleEditClick}
                style={{
                  flex: 1,
                  padding: "1rem",
                  backgroundColor: "#1abc9c",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 6px rgba(26, 188, 156, 0.3)",
                  ":hover": {
                    backgroundColor: "#16a085",
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 12px rgba(26, 188, 156, 0.3)"
                  },
                  ":active": {
                    transform: "translateY(0)"
                  }
                }}
              >
                Edit Product
              </button>
              <button
                onClick={deleteProduct}
                style={{
                  flex: 1,
                  padding: "1rem",
                  backgroundColor: "#e74c3c",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 6px rgba(231, 76, 60, 0.3)",
                  ":hover": {
                    backgroundColor: "#c0392b",
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 12px rgba(231, 76, 60, 0.3)"
                  },
                  ":active": {
                    transform: "translateY(0)"
                  }
                }}
              >
                Delete Product
              </button>
            </div> */}
          </div>
        </div>
      </div>

      
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes pulse {
            0% { opacity: 0.6; }
            50% { opacity: 0.8; }
            100% { opacity: 0.6; }
          }
          
          @keyframes pulseGreen {
            0% { box-shadow: 0 0 0 0 rgba(46, 125, 50, 0.4); }
            70% { box-shadow: 0 0 0 10px rgba(46, 125, 50, 0); }
            100% { box-shadow: 0 0 0 0 rgba(46, 125, 50, 0); }
          }
          
          @keyframes pulseRed {
            0% { box-shadow: 0 0 0 0 rgba(198, 40, 40, 0.4); }
            70% { box-shadow: 0 0 0 10px rgba(198, 40, 40, 0); }
            100% { box-shadow: 0 0 0 0 rgba(198, 40, 40, 0); }
          }
        `}
      </style>
    </div>
  );
};

export default Product;