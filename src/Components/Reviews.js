import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Addreviews from "./Addreviews";
import Footer from "./Footer";

const Reviews = () => {
  const [orderData, setOrderData] = useState([]);

  const fetchReviews = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/reviews", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // You may include other headers if needed
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch reviews: ${response.statusText}`);
      }

      const data = await response.json();
      setOrderData(data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div>
      <Navbar />
      <Link to="/">
        <FaArrowLeft
          size={25}
          style={{
            color: "#ed8936",
            position: "relative",
            left: "15px",
            top: "15px",
          }}
        />
      </Link>
      <h2 style={{ fontSize: "2.5rem", textAlign: "center", color: "black" }}>
        People's <span></span>
        <span style={{ fontWeight: "bold", color: "#ed8936" }}>Feedbacks</span>
      </h2>
      {orderData.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "2rem", marginTop: "30px" }}>
          No Reviews!!
        </p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {orderData.map((item) => (
            <div
              key={item._id} // Use a unique key for each element in the array
              style={{
                width: "45%",
                backgroundColor: "black",
                color: "white",
                borderRadius: "0.5rem",
                marginLeft: "1rem",
                marginTop: "2rem",
                padding: "1rem",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
            >
              {/* Render your fetched data properties */}
              <div
                style={{
                  borderRadius: "50%",
                  width: "80px",
                  height: "80px", // Set both width and height to the same value for a perfect circle
                  borderColor: "white",
                  border: "2px solid white", // Optional border style
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1.5rem",
                  color: "white",
                  backgroundColor: "#ed8936",
                }}
              >
                {item.name.slice(0, 1).toUpperCase()}
              </div>
              <p
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#ed8936",
                }}
              >
                {item.username}
              </p>
              <p style={{ fontSize: "1.5rem" }}>{item.name}</p>
              <p style={{ fontSize: "1.5rem" }}>
                Rating:{" "}
                {Array.from({ length: item.rating }, (_, index) => (
                  <FaStar key={index} style={{ color: "#ed8936" }} />
                ))}
              </p>
              <p style={{ fontSize: "1.25rem" }}>{item.review}</p>
            </div>
          ))}
        </div>
      )}
      <br /> <br /> <br />
      <Addreviews />
      <Footer />
    </div>
  );
};

export default Reviews;
