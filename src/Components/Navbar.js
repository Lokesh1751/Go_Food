import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Badge } from "react-bootstrap";
import Modal from "../Modal.js";
import Cart from "../Screens/Cart";
import { useCart } from "./ContextReducer.js";
import { FaBars } from "react-icons/fa";
import { FaUtensils } from 'react-icons/fa';

function NavigationBar() {
  let data = useCart();
  let userEmail = localStorage.getItem("userEmail");
  const [cartView, setCartView] = useState(false);
  const navigate = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const toggleCartView = () => {
    setCartView((prevCartView) => !prevCartView);
  };

  return (
    <>
      <style>
        {`
          .text-white {
            color: white;
          }
        `}
      </style>
      <Navbar bg="" expand="lg" style={{backgroundColor:'#ed8936'}}>
        <Navbar.Brand
          className="fs-1 fst-italic text-white"
          style={{ fontWeight: "bold", }}
          to="/"
        >
          GrabFood <FaUtensils size={30}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <FaBars className="text-white" />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mb-2">
            <hr />
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Link className="nav-link active fs-5 mt-2 text-white " to="/">
                <span style={{ marginLeft: "10px" }}> Home</span>
              </Link>
              <Link
                className="nav-link active fs-5 mt-2 text-white"
                to="/vegmenu"
              >
                <span style={{ marginLeft: "10px" }}>Menu</span>
              </Link>
              {localStorage.getItem("authToken") && (
                <>
                  <Link
                    className="nav-link active fs-5 mt-2 text-white"
                    to="/myorder"
                  >
                    <span style={{ marginLeft: "10px" }}>My Orders</span>
                  </Link>
                  <Link
                    className="nav-link active fs-5 mt-2 text-white"
                    to="/reviews"
                  >
                    <span style={{ marginLeft: "10px" }}>Reviews</span>
                  </Link>
                </>
              )}
            </div>
          </Nav>
          {!localStorage.getItem("authToken") ? (
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Link
                className="btn bg-white  mx-1"
                to="/login"
                style={{ fontWeight: "bold",color:'#ed8936' }}
               
              >
                Login
              </Link>
              <Link
                className="btn bg-white  mx-1"
                to="/createuser"
                style={{ fontWeight: "bold",color:'#ed8936' }}
              >
                SignUp
              </Link>
            </div>
          ) : (
            <div style={{ justifyContent: "space-around" }}>
              <div className="btn  text-white mx-2">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "24px",
                    fontWeight: "bold",
                  }}
                >
                  <span
                    style={{
                      backgroundColor: "#dc3545",
                      color: "white",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      
                    }}
                  >
                    {userEmail.slice(0, 1).toUpperCase()}
                  </span>
                </div>
              </div>
              <div
                className="btn bg-white  mx-2"
                onClick={toggleCartView} style={{ fontWeight: "bold",color:'#ed8936' }}
              >
                My Cart{" "}
                <Badge pill bg="danger">
                  {data.length}
                </Badge>
              </div>
              {cartView && (
                <Modal onClose={toggleCartView}>
                  <Cart />
                </Modal>
              )}
              <div
                className="btn bg-white text-danger mx-2"
                onClick={handlelogout}
                style={{ fontWeight: "bold" }}
              >
                Logout
              </div>
            </div>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavigationBar;
