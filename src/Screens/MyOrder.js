import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "../Components/Footer";

export default function MyOrder() {
  const [orderData, setorderData] = useState({});

  const fetchMyOrder = async () => {
    await fetch("http://localhost:4000/api/myOrderData", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("userEmail"),
      }),
    }).then(async (res) => {
      let response = await res.json();
      await setorderData(response);
    });

    // await res.map((data)=>{
    //    console.log(data)
    // })
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <Navbar />
      <Link to="/" style={{ color: "white" }}>
        <FaArrowLeft
          size={25}
          style={{
            color: "#ed8936",
            position: "absolute",
            left: "1rem",
            top: "6rem",
          }}
        />
      </Link>
      <div className="container">
        <div className="row d-flex flex-wrap" style={{ marginLeft: "30px" }}>
          {orderData && orderData.orderData ? (
            orderData.orderData.order_data
              .slice(0)
              .reverse()
              .map((item) => {
                return item.slice(1).map((arrayData, index) => (
                  <div className="col-12 col-md-6 col-lg-3" key={index}>
                    {arrayData.order_date ? (
                      <div
                        className="m-auto mt-5 text-white d-flex"
                        key={index}
                      >
                        <hr />
                      </div>
                    ) : (
                      <div>
                        <div
                          className="col-12 col-md-6 col-lg-3"
                          cl
                          key={index}
                        >
                          <div
                            className="card mt-3 "
                            style={{
                              width: "17rem",
                              backgroundColor: "#454545",
                            }}
                          >
                            <div className="card-body">
                              <div
                                className="container w-100 p-0"
                                style={{ height: "220px" }}
                              >
                                <div
                                  className=" fs-4 m-0 fw-bold"
                                  style={{ color: "#ed8936" }}
                                >
                                  Order Details:
                                </div>
                                <div className=" text-white fs-5">
                                  Date:{" "}
                                  {orderData.orderData.order_date.slice(0, 10)}
                                </div>
                                <div className=" text-white fs-5">
                                  Quantity: {arrayData.qty}
                                </div>
                                <div className="text-white fs-5">
                                  Size: {arrayData.size}
                                </div>
                                <div className=" text-danger fw-bold fs-5">
                                  {arrayData.name}
                                </div>
                                <br />
                                <btn
                                  className="text-white  rounded p-3 fw-bold"
                                  style={{ backgroundColor: "#ed8936" }}
                                >
                                  {" "}
                                  Price: ₹{arrayData.price}/-
                                </btn>{" "}
                                {/* Assuming date property */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ));
              })
          ) : (
            <div className="fs-4">No order data available</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
