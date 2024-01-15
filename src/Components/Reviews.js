import React from "react";
import { Review } from "../Data/data";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from './Footer'

const Reviews = () => {
  return (
    <div
      // style={{
      //   backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://i.ibb.co/QML2CWm/veg-burger.jpg)',
      //   backgroundSize: 'cover',
      // }}
    >
      <Navbar/>
      <Link to="/">
        <FaArrowLeft size={25} style={{ color: '#ed8936', position: 'relative', left: '15px', top: '15px' }} />
      </Link>
      <h2 style={{ fontSize: '2.5rem', textAlign: 'center', color: 'black' }}>
        People's <span></span>
        <span style={{ fontWeight: 'bold', color: '#ed8936' }}>Feedbacks</span>
      </h2>
      <div style={{display:'flex',flexWrap:'wrap'}}>
        {Review.map((item) => {
          return (
            <div
              style={{
             width:'40%',
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '0.5rem',
                marginLeft: '5rem',
                marginTop: '2rem',
                padding: '1rem',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                
                

              }}
            >
              <img
                src={item.userpic}
                style={{ width: '100px', height: '100px', borderRadius: '50%', border: '1px solid rgba(0, 0, 0, 0.2)' }}
                alt=""
              />
              <p style={{ fontSize: '2rem', fontWeight: 'bold' ,color:'#ed8936'}}>{item.username}</p>
              <p style={{ fontSize: '1.5rem' }}>{item.dishname}</p>
              <p style={{ fontSize: '1.25rem' }}>{item.feedback}</p>
            </div>
          );
        })}
      </div>
      <Footer/>
    </div>
  );
};

export default Reviews;
