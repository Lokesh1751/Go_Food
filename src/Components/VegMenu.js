import React from 'react'
import { vegetarianFoodItems } from '../Data/data';
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Navbar from './Navbar';
import Footer from './Footer'
function VegMenu() {
    return (
        <div 
        // style={{
        //   background: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://i.ibb.co/rfN7MGb/bg1.webp)',
        //   backgroundSize: 'cover',
        //   backgroundColor: 'rgba(0, 0, 0, 0.2)',
        // }}
        
        >
          <Navbar/>
          <Link to="/" style={{ color: 'black' }}>
            <FaArrowLeft size={25} style={{ color: '#ed8936', position: 'absolute', left: '1rem', top: '6rem' }} />
          </Link>
          <h3 style={{
            color: '#ed8936',
            fontWeight: 'bold',
            fontSize: '3rem',
            textAlign: 'center',
            paddingTop: '2rem',
            paddingBottom: '1rem',
          }}>
            Our Veg Menu
          </h3>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: '1.5rem',
            color: 'white',
            textAlign: 'center',
          }}>
            <span style={{ paddingRight: '1rem', cursor: 'pointer' }}>
              <Link to="/vegmenu" style={{ color: '#ed8936', textDecoration: 'underline' }}>Vegetarian</Link>
            </span>{" "}
            |{" "}
            <span style={{ paddingLeft: '1rem', cursor: 'pointer' }}>
              <Link to="/nvg" style={{ color: 'black' ,textDecoration:'none'}} >Non Vegetarian</Link>
            </span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '20px' }}>
            {vegetarianFoodItems.map((item, index) => {
              return (
                <div style={{ position: 'relative', margin: '30px' }} key={index}>
                  <button style={{ backgroundColor: '#ed8936', color: 'white', borderRadius: '0.5rem', padding: '0.5rem', fontSize: '1rem', fontWeight: 'bold', position: 'absolute', zIndex: '10' }}>
                    {item.name}
                  </button>
                  <p style={{ color: 'white', bottom: '0', padding: '0.5rem', fontWeight: 'bold', position: 'absolute', zIndex: '10' }}>
                    {item.description}
                  </p>
                  <img
                    src={item.imageUrl}
                    alt=""
                    style={{ width: '300px', height: '300px', borderRadius: '0.75rem', transform: 'translateY(-10px)', cursor: 'pointer', transition: 'all 0.3s ease-in-out' }}
                  />
                </div>
              );
            })}
          </div>
          <Footer/>
        </div>
      );
}

export default VegMenu
