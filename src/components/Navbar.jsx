import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaCartPlus, FaSearch, FaUserCircle, FaSignOutAlt, FaHome, FaPlus } from "react-icons/fa";

const Navbar = ({ onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
    
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/products");
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = async (value) => {
    setInput(value);
    if (value.length >= 1) {
      setShowSearchResults(true);
      try {
        const response = await axios.get(
          `http://localhost:8080/api/products/search?keyword=${value}`
        );
        setSearchResults(response.data);
        setNoResults(response.data.length === 0);
      } catch (error) {
        console.error("Error searching:", error);
      }
    } else {
      setShowSearchResults(false);
      setSearchResults([]);
      setNoResults(false);
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
    setIsMenuOpen(false); 
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const categories = [
    "Laptop",
    "Headphone",
    "Mobile",
    "Electronics",
    "Toys",
    "Fashion",
  ];

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top border-bottom shadow-sm">
        <div className="container-fluid">
          <motion.a 
            className="navbar-brand fw-bold text-primary" 
            href="/homepage"
            whileHover={{ scale: 1.05 }}
          >
            Deal Drop
          </motion.a>
          
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <motion.a 
                  className="nav-link d-flex align-items-center gap-1" 
                  href="/"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaHome /> Home
                </motion.a>
              </li>
              <li className="nav-item">
                <motion.a 
                  className="nav-link" 
                  href="/add_product"
                  whileHover={{ scale: 1.05 }}
                >
                  <button
                    style={{
                      backgroundColor: "#007bff",
                      border: "none",
                      borderRadius: "20px",
                      color: "white",
                      padding: "5px 15px",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      transition: "all 0.3s ease",
                    }}
                    className="shadow-sm"
                  >
                    <FaPlus /> Sell
                  </button>
                </motion.a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle d-flex align-items-center"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Categories
                </a>
                <ul className="dropdown-menu shadow">
                  {categories.map((category) => (
                    <motion.li 
                      key={category}
                      whileHover={{ scale: 1.02 }}
                    >
                      <button
                        className="dropdown-item"
                        onClick={() => handleCategorySelect(category)}
                      >
                        {category}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </li>
            </ul>

            <div className="d-flex align-items-center position-relative">
              <motion.a 
                href="/cart" 
                className="nav-link text-dark me-3 d-flex align-items-center gap-1"
                whileHover={{ scale: 1.05 }}
              >
                <FaCartPlus size={18} /> Cart
              </motion.a>

              <div className="position-relative">
                <div className="input-group">
                  <input
                    className="form-control border-end-0"
                    type="search"
                    placeholder="Search products..."
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                    style={{ minWidth: "250px" }}
                  />
                  <span className="input-group-text bg-white border-start-0">
                    <FaSearch />
                  </span>
                </div>

                <AnimatePresence>
                  {showSearchResults && (
                    <motion.ul
                      className="list-group position-absolute bg-white shadow-lg mt-1"
                      style={{
                        top: "100%",
                        left: 0,
                        right: 0,
                        zIndex: 999,
                        maxHeight: "300px",
                        overflowY: "auto",
                        width: "100%",
                        borderRadius: "0 0 8px 8px",
                      }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {searchResults.length > 0 ? (
                        searchResults.map((result) => (
                          <motion.li 
                            key={result.id} 
                            className="list-group-item border-0"
                            whileHover={{ backgroundColor: "#f8f9fa" }}
                          >
                            <a
                              href={`/product/${result.id}`}
                              className="text-decoration-none text-dark d-flex align-items-center gap-2"
                            >
                              <img 
                                src={result.imageUrl || "https://via.placeholder.com/40"} 
                                alt={result.name}
                                width="40"
                                height="40"
                                className="rounded"
                              />
                              <div>
                                <div className="fw-semibold">{result.name}</div>
                                <small className="text-muted">${result.price}</small>
                              </div>
                            </a>
                          </motion.li>
                        ))
                      ) : (
                        noResults && (
                          <li className="list-group-item text-muted border-0">
                            No products found
                          </li>
                        )
                      )}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              {!user ? (
                <div className="d-flex align-items-center gap-2 ms-3">
                  <motion.a 
                    href="/login" 
                    className="btn btn-outline-primary me-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    Login
                  </motion.a>
                  <motion.a 
                    href="/register" 
                    className="btn btn-primary shadow-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    Register
                  </motion.a>
                </div>
              ) : (
                <div className="dropdown ms-3">
                  <motion.button
                    className="btn btn-outline-secondary dropdown-toggle d-flex align-items-center gap-2"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FaUserCircle size={20} />
                    <span>{user.firstName || user.email.split('@')[0]}</span>
                  </motion.button>
                  <ul className="dropdown-menu dropdown-menu-end shadow">
                    <motion.li whileHover={{ scale: 1.02 }}>
                      <a className="dropdown-item d-flex align-items-center gap-2" href={`/profile`}>
                        <FaUserCircle /> Profile
                      </a>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.02 }}>
                      <button 
                        className="dropdown-item d-flex align-items-center gap-2" 
                        onClick={handleLogout}
                      >
                        <FaSignOutAlt /> Logout
                      </button>
                    </motion.li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;