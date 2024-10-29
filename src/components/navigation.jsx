import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        {/* Align the brand to the left */}
        <div className="navbar-header navbar-left">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          {/* Updated: Changed anchor tag to align left */}
          <a className="navbar-brand page-scroll" href="#page-top">
          TiruSera
          </a>
        </div>

        {/* Menu Items */}
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/#features" className="page-scroll">
                Home
              </a>
            </li>
            <li>
              <a href="/#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="/#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="/#portfolio" className="page-scroll">
                Projects
              </a>
            </li>
            <li>
              <a href="/#contact" className="page-scroll">
                Contact
              </a>
            </li>
            <li>
              <Link to="/caddrafting" className="page-scroll">
                Order Page
              </Link>
            </li>
            <li>
              <Link to="/AutoCADDraftingServices" className="page-scroll">
                CAD Drafting
              </Link>
            </li>
            <li>
              <a href="/3dmodeling" className="page-scroll">
                3D Modeling
              </a>
            </li>
            <li>
              <Link to="/workprocess" className="page-scroll">
              HOW WE WORK
              </Link>
            </li>
     
            <li>
      {/* Other Links */}
      <Link to="/packages">Packages</Link>
      {/* Other Links */}
    </li>



            {/* Move the login and signup buttons to the end */}
            <li>
              <Link to="/login" className="btn-mycustom">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="btn-mycustom">
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
