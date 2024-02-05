import React, { useState } from "react";
import { IoMdTrash } from "react-icons/io";
import { useCart, useDispatchCart } from "../Components/ContextReducer";
import "../App.css";
import axios from "axios";
export default function Cart() {
  const [showAlert, setShowAlert] = useState(false);
  const alertStyles = {
    color: "white",
    padding: "15px",
    borderRadius: "5px",
    display: showAlert ? "block" : "none",
    marginBottom: "20px",
    textAlign: "center",
  };
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <div>
        {showAlert ? (
          <div style={alertStyles}>
            <div class="payment-success">
              <svg
                class="checkmark"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
              >
                <circle
                  class="checkmark-circle"
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                />
                <path
                  class="checkmark-check"
                  fill="none"
                  d="M14 27l7 7 16-16"
                />
              </svg>
              <p
                style={{
                  marginTop: "15px",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
              DONE!!
              </p>
            </div>
          </div>
        ) : (
          <div className="m-5 w-100 text-white text-center fs-3">
            The Cart is Empty!
          </div>
        )}
      </div>
    );
  }
  // const handleRemove = (index)=>{
  //   console.log(index)
  //   dispatch({type:"REMOVE",index:index})
  // }
  const handleCheckOut = () => {
    dispatch({ type: "DROP" }); // Clear the cart locally
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  let totalPrice = data.reduce((total, food) => total + food.price, 0);
  let userEmail = localStorage.getItem("userEmail");
  const initPayment = (data) => {
    const options = {
      key: "rzp_test_gxH0ExovkFEVmM",
      amount: data.amount,
      currency: data.currency,
      name: userEmail,
      description: "Test Transaction",
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = "http://localhost:4000/api/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);
          console.log("hurehhhhhhhhh");
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#ed8936",
      },
      method: {
        upi: true, // Enable UPI as a payment option
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  const handlepayment = async () => {
    try {
      const orderurl = "http://localhost:4000/api/orders";
      const { data } = await axios.post(orderurl, { amount: totalPrice });
      initPayment(data.data);
    } catch (error) {
      console.groupEnd(error);
    }
  };
  const handlePlaceOrder = async () => {
    try {
      const userEmail = localStorage.getItem("userEmail");
      const orderResponse = await fetch("http://localhost:4000/api/orderData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          order_data: data,
          email: userEmail,
          order_date: new Date().toDateString(),
        }),
      });

      if (orderResponse.status === 200) {
        dispatch({ type: "DROP" }); // Clear the cart locally after placing the order
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {console.log(data)}
      <div className="container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md">
        <table className="table table-hover ">
          <thead className=" text-success fs-4">
            <tr>
              <th scope="col" style={{ color: "#ed8936" }}>
                #
              </th>
              <th scope="col" style={{ color: "#ed8936" }}>
                Name
              </th>
              <th scope="col" style={{ color: "#ed8936" }}>
                Quantity
              </th>
              <th scope="col" style={{ color: "#ed8936" }}>
                Option
              </th>
              <th scope="col" style={{ color: "#ed8936" }}>
                Amount
              </th>
              <th scope="col" style={{ color: "#ed8936" }}></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr>
                <th scope="row" className="text-white">
                  {index + 1}
                </th>
                <td className="text-white">{food.name}</td>
                <td className="text-white">{food.qty}</td>
                <td className="text-white">{food.size}</td>
                <td className="text-white">{food.price}</td>
                <td>
                  <button type="button" className="btn p-0">
                    <IoMdTrash
                      onClick={() => {
                        dispatch({ type: "REMOVE", index: index });
                      }}
                      className="text-white"
                    />
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h1 className="fs-2 text-white">Total Price: {totalPrice}/-</h1>
        </div>
        <div>
          <button
            className="btn  mt-5 text-white"
            style={{ backgroundColor: "#ed8936" }}
            onClick={() => {
              setShowAlert(true);
              setTimeout(() => {
                setShowAlert(false);
              }, 3000);
              handleCheckOut(); // Call the original function
            }}
          >
            {" "}
            Clear Cart{" "}
          </button>
          <button
            className="btn  mt-5 text-white"
            style={{ backgroundColor: "#ed8936", marginLeft: "30px" }}
            onClick={() => {
              handlepayment();
              handlePlaceOrder() // Call the original function
            }}
          >
            {" "}
            Place Order{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
