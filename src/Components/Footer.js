import React from "react";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="py-5">
      <hr />
      <div
        className="row"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <div className="col-2">
          <ul
            className="nav"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <li className="nav-item mb-2 m-1" style={{ fontSize: "20px" }}>
              <Link to="/" className="nav-link p-0 text-muted">
                Home
              </Link>
            </li>
            <li className="nav-item mb-2 m-1" style={{ fontSize: "20px" }}>
              <Link to="/login" className="nav-link p-0 text-muted">
                Login
              </Link>
            </li>
            <li className="nav-item mb-2 m-1" style={{ fontSize: "20px" }}>
              <Link to="/vegmenu" className="nav-link p-0 text-muted">
                Menu
              </Link>
            </li>
          </ul>
          <p className="text-center text-muted">© 2021 GRABFOOD, Inc</p>
          <p className="" style={{color:'grey',fontSize:'55px',display:'inline'}}>GrabFood   </p> 
        </div>

        <div className="col-4 offset-1">
          <form
            style={{ color: "grey" }}
            action="https://formsubmit.co/lokeshangi@gmail.com"
            method="POST"
          >
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of whats new and exciting from us.</p>
            <div className=" w-100 gap-2" style={{display:'flex',flexDirection:'column'}}>
              <label for="newsletter1" className="visually-hidden">
                Email address
              </label>
              <input
                id="newsletter1"
                type="email"
                className="form-control"
                placeholder="Email address"
              />

              <input
                id="newsletter1"
                type="text"
                className="form-control"
                placeholder="Message"
              />

              <button
                className="btn text-white"
                type="submit"
                style={{ backgroundColor: "#ed8936" }}
              >
                Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* <div className="d-flex justify-content-between py-4 my-4 border-top">
      <p>© 2021 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
      </ul>
    </div> */}
    </footer>
  );
}

export default Footer;
