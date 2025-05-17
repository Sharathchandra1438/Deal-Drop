import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FiUpload, FiCheckCircle, FiXCircle } from "react-icons/fi";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    description: "",
    price: "",
    category: "",
    stockQuantity: "",
    releaseDate: "",
    productAvailable: false,
    ownerNumber: ""
  });
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData();
    formData.append("imageFile", image);
    formData.append(
      "product",
      new Blob([JSON.stringify(product)], { type: "application/json" })
    );

    try {
      await axios.post("http://localhost:8080/api/product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSubmitStatus("success");
      
      setProduct({
        name: "",
        brand: "",
        description: "",
        price: "",
        category: "",
        stockQuantity: "",
        releaseDate: "",
        productAvailable: false,
        ownerNumber: ""
      });
      setImage(null);
      setPreviewImage(null);
    } catch (error) {
      console.error("Error adding product:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      padding: "2rem",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "white",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          padding: "2.5rem",
          position: "relative",
          overflow: "hidden"
        }}
      >
        
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "6px",
          background: "linear-gradient(to right, #4f46e5, #7c3aed, #a78bfa)"
        }} />

        <h2 style={{
          color: "#2d3748",
          marginBottom: "2rem",
          fontWeight: "600",
          fontSize: "1.8rem",
          textAlign: "center"
        }}>Add New Product</h2>

        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              background: "rgba(16, 185, 129, 0.1)",
              borderLeft: "4px solid #10b981",
              padding: "1rem",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              borderRadius: "8px"
            }}
          >
            <FiCheckCircle style={{ color: "#10b981", fontSize: "1.25rem" }} />
            <div>
              <h4 style={{ margin: 0, color: "#10b981" }}>Success!</h4>
              <p style={{ margin: 0, color: "#065f46" }}>Product added successfully.</p>
            </div>
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              background: "rgba(239, 68, 68, 0.1)",
              borderLeft: "4px solid #ef4444",
              padding: "1rem",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              borderRadius: "8px"
            }}
          >
            <FiXCircle style={{ color: "#ef4444", fontSize: "1.25rem" }} />
            <div>
              <h4 style={{ margin: 0, color: "#ef4444" }}>Error!</h4>
              <p style={{ margin: 0, color: "#991b1b" }}>Failed to add product. Please try again.</p>
            </div>
          </motion.div>
        )}

        <form onSubmit={submitHandler} style={{ display: "grid", gap: "1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            <div>
              <label style={{
                display: "block",
                marginBottom: "0.5rem",
                color: "#4a5568",
                fontWeight: "500"
              }}>
                Product Name
              </label>
              <input
                type="text"
                style={{
                  width: "100%",
                  padding: "0.75rem 1rem",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                  ":focus": {
                    outline: "none",
                    borderColor: "#4f46e5",
                    boxShadow: "0 0 0 3px rgba(79, 70, 229, 0.2)"
                  }
                }}
                placeholder="Product Name"
                onChange={handleInputChange}
                value={product.name}
                name="name"
                required
              />
            </div>

            <div>
              <label style={{
                display: "block",
                marginBottom: "0.5rem",
                color: "#4a5568",
                fontWeight: "500"
              }}>
                Brand
              </label>
              <input
                type="text"
                name="brand"
                style={{
                  width: "100%",
                  padding: "0.75rem 1rem",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                  ":focus": {
                    outline: "none",
                    borderColor: "#4f46e5",
                    boxShadow: "0 0 0 3px rgba(79, 70, 229, 0.2)"
                  }
                }}
                placeholder="Enter brand name"
                value={product.brand}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div>
            <label style={{
              display: "block",
              marginBottom: "0.5rem",
              color: "#4a5568",
              fontWeight: "500"
            }}>
              Description
            </label>
            <textarea
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                borderRadius: "8px",
                border: "1px solid #e2e8f0",
                fontSize: "1rem",
                minHeight: "100px",
                resize: "vertical",
                transition: "all 0.3s ease",
                ":focus": {
                  outline: "none",
                  borderColor: "#4f46e5",
                  boxShadow: "0 0 0 3px rgba(79, 70, 229, 0.2)"
                }
              }}
              placeholder="Add product description"
              value={product.description}
              name="description"
              onChange={handleInputChange}
              required
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5rem" }}>
            <div>
              <label style={{
                display: "block",
                marginBottom: "0.5rem",
                color: "#4a5568",
                fontWeight: "500"
              }}>
                Price
              </label>
              <div style={{ position: "relative" }}>
                <span style={{
                  position: "absolute",
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#4a5568"
                }}>₹</span>
                <input
                  type="number"
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem 0.75rem 2rem",
                    borderRadius: "8px",
                    border: "1px solid #e2e8f0",
                    fontSize: "1rem",
                    transition: "all 0.3s ease",
                    ":focus": {
                      outline: "none",
                      borderColor: "#4f46e5",
                      boxShadow: "0 0 0 3px rgba(79, 70, 229, 0.2)"
                    }
                  }}
                  placeholder="0.00"
                  onChange={handleInputChange}
                  value={product.price}
                  name="price"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
            </div>

            <div>
              <label style={{
                display: "block",
                marginBottom: "0.5rem",
                color: "#4a5568",
                fontWeight: "500"
              }}>
                Category
              </label>
              <select
                style={{
                  width: "100%",
                  padding: "0.75rem 1rem",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                  fontSize: "1rem",
                  appearance: "none",
                  background: "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\") no-repeat right 1rem center/1rem",
                  transition: "all 0.3s ease",
                  ":focus": {
                    outline: "none",
                    borderColor: "#4f46e5",
                    boxShadow: "0 0 0 3px rgba(79, 70, 229, 0.2)"
                  }
                }}
                value={product.category}
                onChange={handleInputChange}
                name="category"
                required
              >
                <option value="">Select category</option>
                <option value="Laptop">Laptop</option>
                <option value="Headphone">Headphone</option>
                <option value="Mobile">Mobile</option>
                <option value="Electronics">Electronics</option>
                <option value="Toys">Toys</option>
                <option value="Fashion">Fashion</option>
              </select>
            </div>

            <div>
              <label style={{
                display: "block",
                marginBottom: "0.5rem",
                color: "#4a5568",
                fontWeight: "500"
              }}>
                Stock Quantity
              </label>
              <input
                type="number"
                style={{
                  width: "100%",
                  padding: "0.75rem 1rem",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                  ":focus": {
                    outline: "none",
                    borderColor: "#4f46e5",
                    boxShadow: "0 0 0 3px rgba(79, 70, 229, 0.2)"
                  }
                }}
                placeholder="Available quantity"
                onChange={handleInputChange}
                value={product.stockQuantity}
                name="stockQuantity"
                min="0"
                required
              />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            <div>
              <label style={{
                display: "block",
                marginBottom: "0.5rem",
                color: "#4a5568",
                fontWeight: "500"
              }}>
                Release Date
              </label>
              <input
                type="date"
                style={{
                  width: "100%",
                  padding: "0.75rem 1rem",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                  ":focus": {
                    outline: "none",
                    borderColor: "#4f46e5",
                    boxShadow: "0 0 0 3px rgba(79, 70, 229, 0.2)"
                  }
                }}
                value={product.releaseDate}
                name="releaseDate"
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label style={{
                display: "block",
                marginBottom: "0.5rem",
                color: "#4a5568",
                fontWeight: "500"
              }}>
                Owner Phone Number
              </label>
              <input
                type="tel"
                style={{
                  width: "100%",
                  padding: "0.75rem 1rem",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                  ":focus": {
                    outline: "none",
                    borderColor: "#4f46e5",
                    boxShadow: "0 0 0 3px rgba(79, 70, 229, 0.2)"
                  }
                }}
                placeholder="Owner's phone number"
                value={product.ownerNumber}
                name="ownerNumber"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div>
            <label style={{
              display: "block",
              marginBottom: "0.5rem",
              color: "#4a5568",
              fontWeight: "500"
            }}>
              Product Image
            </label>
            <div style={{
              border: "2px dashed #cbd5e0",
              borderRadius: "8px",
              padding: "1.5rem",
              textAlign: "center",
              transition: "all 0.3s ease",
              ":hover": {
                borderColor: "#4f46e5",
                backgroundColor: "rgba(79, 70, 229, 0.05)"
              }
            }}>
              {previewImage ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <img 
                    src={previewImage} 
                    alt="Preview" 
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      marginBottom: "1rem",
                      boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                    }} 
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setImage(null);
                      setPreviewImage(null);
                    }}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#ef4444",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontWeight: "500"
                    }}
                  >
                    <FiXCircle /> Remove Image
                  </button>
                </div>
              ) : (
                <label style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer"
                }}>
                  <div style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "#f1f5f9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem"
                  }}>
                    <FiUpload style={{ fontSize: "1.5rem", color: "#64748b" }} />
                  </div>
                  <div>
                    <p style={{ margin: 0, color: "#4f46e5", fontWeight: "500" }}>
                      Click to upload
                    </p>
                    <p style={{ margin: 0, color: "#64748b", fontSize: "0.875rem" }}>
                      PNG, JPG, JPEG up to 5MB
                    </p>
                  </div>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                    accept="image/*"
                    required={!previewImage}
                  />
                </label>
              )}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              name="productAvailable"
              id="productAvailable"
              checked={product.productAvailable}
              onChange={(e) =>
                setProduct({ ...product, productAvailable: e.target.checked })
              }
              style={{
                width: "20px",
                height: "20px",
                marginRight: "0.75rem",
                accentColor: "#4f46e5",
                cursor: "pointer"
              }}
            />
            <label htmlFor="productAvailable" style={{
              color: "#4a5568",
              cursor: "pointer"
            }}>
              Product Available for Purchase
            </label>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            style={{
              padding: "0.875rem 1.5rem",
              backgroundColor: "#4f46e5",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "500",
              cursor: "pointer",
              boxShadow: "0 4px 6px rgba(79, 70, 229, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              ":disabled": {
                opacity: "0.7",
                cursor: "not-allowed"
              }
            }}
          >
            {isSubmitting ? (
              <>
                <svg style={{ animation: "spin 1s linear infinite" }} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Adding Product...
              </>
            ) : (
              "Add Product"
            )}
          </motion.button>
        </form>

        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </motion.div>
    </div>
  );
};

export default AddProduct;