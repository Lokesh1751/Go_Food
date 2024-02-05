import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReviewForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    rating: "",
    comment: "",
  });

  // Handle form input changes
  let navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  console.log(formData);
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/addreview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        rating: formData.rating,
        review: formData.comment,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter Valid Credentials");
    }
    if (json.success) {
      navigate("/reviews");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Write a Review</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Your Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Rating Input */}
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">
            Rating
          </label>
          <select
            className="form-select"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Rating</option>
            <option value="5">5 stars</option>
            <option value="4">4 stars</option>
            <option value="3">3 stars</option>
            <option value="2">2 stars</option>
            <option value="1">1 star</option>
          </select>
        </div>

        {/* Comment Input */}
        <div className="mb-3">
          <label htmlFor="comment" className="form-label">
            Your Review
          </label>
          <textarea
            className="form-control"
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleInputChange}
            rows="4"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{ backgroundColor: "#ed8936", border: "none" }}
          className="btn btn-primary"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
