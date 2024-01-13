import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import icons from react-icons

function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
          {/* Your link content */}
          {/* Example: */}
         <h1>GoFood</h1>
        </Link>
        <span className="mb-3 me-2 mb-md-0 fs-4 text-muted text-decoration-none lh-1">© 2022 GoFood, Inc</span>
      </div>

      

      <div className="col-md-4 d-flex justify-content-end align-items-center">
        {/* Social media icons */}
        <FaFacebook className="me-3" size={30} style={{ color: 'white' }} />
        <FaTwitter className="me-3" size={30} style={{ color: 'white' }} />
        <FaInstagram size={30} style={{ color: 'white' }} />
      </div>
    </footer>
  );
}

export default Footer;
