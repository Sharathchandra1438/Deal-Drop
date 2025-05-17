import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaUserCircle,
  FaVenusMars,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHome,
  FaHashtag,
  FaPhone
} from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = () => {
      setIsLoading(true);
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const parsed = JSON.parse(storedUser);
        if (parsed.id === id || parsed._id === id) {
          setTimeout(() => {
            setUser(parsed);
            setIsLoading(false);
          }, 800);
        } else {
          console.warn("User ID mismatch. Redirect or show error.");
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  const pageStyle = {
    paddingTop: "80px",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    overflowX: "hidden",
  };

  if (isLoading) {
    return (
      <div style={{ ...pageStyle }}>
        <Navbar />
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          minHeight: "calc(100vh - 80px)"
        }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              background: "conic-gradient(#4f46e5, #7c3aed, #a78bfa, #c4b5fd, #4f46e5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 4px 30px rgba(79, 70, 229, 0.2)"
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: "#fff"
              }}
            />
          </motion.div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div style={{ ...pageStyle }}>
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            minHeight: "calc(100vh - 80px)"
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "2.5rem",
              borderRadius: "16px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              textAlign: "center",
              borderTop: "5px solid #ef4444",
              maxWidth: "500px",
              width: "90%"
            }}
          >
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: "1rem" }}>
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8V12" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 16H12.01" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 style={{ 
              color: "#2d3748", 
              marginBottom: "1rem",
              fontSize: "1.5rem",
              fontWeight: "600"
            }}>
              User Not Found
            </h3>
            <p style={{ 
              color: "#4a5568", 
              marginBottom: "1.5rem",
              lineHeight: "1.5"
            }}>
              The requested profile couldn't be found. Please check the URL or log in.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: "0.75rem 1.5rem",
                backgroundColor: "#4f46e5",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "500",
                boxShadow: "0 4px 6px rgba(79, 70, 229, 0.2)"
              }}
              onClick={() => window.location.href = "/login"}
            >
              Go to Login
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{ ...pageStyle }}>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 80px)",
          padding: "2rem",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            width: "100%",
            background: "rgba(255, 255, 255, 0.96)",
            borderRadius: "20px",
            boxShadow: "0 15px 50px rgba(0,0,0,0.1)",
            overflow: "hidden",
            position: "relative",
            border: "1px solid rgba(0,0,0,0.05)"
          }}
        >
          {/* Profile Header */}
          <div style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            padding: "2rem 2rem 4rem 2rem",
            position: "relative",
            textAlign: "center"
          }}>
            

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                border: "5px solid rgba(255,255,255,0.3)",
                margin: "0 auto",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
              }}
            >
              {user.profileImageUrl ? (
                <img
                  src={user.profileImageUrl}
                  alt="Profile"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              ) : (
                <div style={{
                  width: "100%",
                  height: "100%",
                  background: "rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <FaUserCircle style={{ 
                    fontSize: "100px", 
                    color: "rgba(255,255,255,0.7)" 
                  }} />
                </div>
              )}
            </motion.div>

            <motion.h1
              style={{
                color: "white",
                marginTop: "1.5rem",
                fontSize: "2rem",
                fontWeight: "700",
                letterSpacing: "-0.5px"
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {user.firstName} {user.lastName}
            </motion.h1>

            <motion.p
              style={{
                color: "rgba(255,255,255,0.8)",
                marginTop: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem"
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <FaEnvelope /> {user.email}
            </motion.p>
          </div>

          {/* Profile Content */}
          <div style={{
            padding: "2rem",
            marginTop: "-30px",
            position: "relative",
            zIndex: 1
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem"
            }}>
              {[
                {
                  icon: <FaVenusMars style={{ color: "#8b5cf6" }} />,
                  label: "Gender",
                  value: user.gender || "Not specified",
                  color: "#8b5cf6"
                },
                {
                  icon: <FaPhone style={{ color: "#3b82f6" }} />,
                  label: "Phone",
                  value: user.phoneNumber || "Not specified",
                  color: "#3b82f6"
                },
                {
                  icon: <FaHashtag style={{ color: "#ec4899" }} />,
                  label: "Postcode",
                  value: user.postcode || "Not specified",
                  color: "#ec4899"
                },
                {
                  icon: <FaMapMarkerAlt style={{ color: "#10b981" }} />,
                  label: "Location",
                  value: user.location || "Not specified",
                  color: "#10b981"
                },
                {
                  icon: <FaHome style={{ color: "#f59e0b" }} />,
                  label: "Address",
                  value: `${user.street || "Street not specified"}${user.houseNumber ? `, ${user.houseNumber}` : ""}`,
                  color: "#f59e0b"
                }
              ].map((field, idx) => (
                <motion.div
                  key={idx}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * idx + 0.4 }}
                  style={{
                    background: "white",
                    borderRadius: "12px",
                    padding: "1.25rem",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                    borderLeft: `4px solid ${field.color}`,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    ":hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
                    }
                  }}
                >
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "0.75rem"
                  }}>
                    <div style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: `${field.color}20`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "0.75rem"
                    }}>
                      {field.icon}
                    </div>
                    <h3 style={{
                      margin: 0,
                      color: "#2d3748",
                      fontSize: "1rem",
                      fontWeight: "600"
                    }}>
                      {field.label}
                    </h3>
                  </div>
                  <p style={{
                    margin: 0,
                    color: "#4a5568",
                    fontSize: "0.95rem",
                    paddingLeft: "42px"
                  }}>
                    {field.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;