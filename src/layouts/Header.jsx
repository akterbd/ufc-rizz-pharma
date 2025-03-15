import React from 'react';
import logo from "./../assets/img/UFC_RIZZ Logo.png";
import instagram from "./../assets/img/instagram-outline.svg";
import facebook from "./../assets/img/facebook-outline.svg";
import cartIcon from "./../assets/img/cart-white.svg";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="main-header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Logo"/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse flex-column align-items-end" id="navbarSupportedContent">
              <div className="main-nav d-flex">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                      Category
                    </a>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="#">Dropdone Item 1</Link>
                      <Link className="dropdown-item" to="#">Dropdone Item 2</Link>
                      <Link className="dropdown-item" to="#">Dropdone Item 3</Link>
                      <Link className="dropdown-item" to="#">Dropdone Item 4</Link>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                      Top Products
                    </a>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="#">Dropdone Item 1</Link>
                      <Link className="dropdown-item" to="#">Dropdone Item 2</Link>
                      <Link className="dropdown-item" to="#">Dropdone Item 3</Link>
                      <Link className="dropdown-item" to="#">Dropdone Item 4</Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="">Contact Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="">FAQs</Link>
                  </li>
                </ul>
                <ul className="social d-flex">
                  <li><a href="#"><img src={instagram} alt="Instagram" /></a></li>
                  <li><a href="#"><img src={facebook} alt="Facebook" /></a></li>
                </ul>
              </div>
              <div className="auth-area d-flex align-items-center">
                <Link className="sign-up" to="/sign-up">Sign Up</Link>
                <Link to="/login">Log In</Link>
                <span className="cart"><img src={cartIcon} alt="Cart"/></span>
              </div>
            </div>
          </nav>
        </div>
    </header>
  )
}

export default Header