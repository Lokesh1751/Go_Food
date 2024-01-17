import "./App.css";
import Home from "./Screens/Home";
import Signup from "./Screens/Signup.js";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Screens/Login";
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { CartProvider } from "./Components/ContextReducer.js";
import MyOrder from "./Screens/MyOrder.js";
import VegMenu from "./Components/VegMenu.js";
import NonVeg from "./Components/NonVeg.js";
import Reviews from "./Components/Reviews.js";
import { FaUtensils } from 'react-icons/fa';

function App() {
  const [load, setLoad] = useState(true);
  setTimeout(() => {
    setLoad(false);
  }, 3500);

  return (
    <>
      {load ? (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          <img
            src="https://cdn140.picsart.com/301568770156201.gif?to=min&r=640"
            alt="Loading..."
            style={{ width: "600px", marginBottom: "70px" }}
          />
          <h1
            style={{
              fontFamily: "sans-serif",
              
              letterSpacing: "2px",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              color: "black",
              fontSize: "50px",
              fontWeight: 600,
            }}
          >
            Grab<span style={{ color: "#ed8936" }}>Food <FaUtensils size={35}/></span>
          </h1>
        </div>
      ) : (
        <CartProvider>
          <Router>
            <div>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/createuser" element={<Signup />} />
                <Route exact path="/myorder" element={<MyOrder />} />
                <Route exact path="/vegmenu" element={<VegMenu />} />
                <Route exact path="/nvg" element={<NonVeg />} />
                <Route exact path="/reviews" element={<Reviews />} />
              </Routes>
            </div>
          </Router>
        </CartProvider>
      )}
    </>
  );
}

export default App;
