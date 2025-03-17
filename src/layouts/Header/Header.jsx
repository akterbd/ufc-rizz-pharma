import React, { useEffect, useState } from 'react';
import logo from "@/assets/img/UFC_RIZZ Logo.png";
import instagram from "@/assets/img/instagram-outline.svg";
import facebook from "@/assets/img/facebook-outline.svg";
import { Link, useLocation } from 'react-router-dom';
import "./header.scss";
import CartIcon from './CartIcon';
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const location = useLocation();
  return (
    <header className={`main-header ${location.pathname !== "/" ? "otherpage" : ""}  ${scrolled ? "scrolled" : ""}`}>
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
                  <li className="nav-item">
                    <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                      Category
                    </a>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="#">Weight Loss</Link>
                      <Link className="dropdown-item" to="#">Beauty And Hair Loss</Link>
                      <Link className="dropdown-item" to="#">Testosterone/HRT</Link>
                      <Link className="dropdown-item" to="#">Sexual Health</Link>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                      Top Products
                    </a>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="#">Retarutide</Link>
                      <Link className="dropdown-item" to="#">Lyopholized Oxytocin</Link>
                      <Link className="dropdown-item" to="#">Compounded NAD+ 1000 mg</Link>
                      <Link className="dropdown-item" to="#">2X CJC / Ipamorelin</Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${location.pathname === "/contact-us" ? "active" : ""}`} to="/contact-us">Contact Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${location.pathname === "/faq" ? "active" : ""}`} to="/faq">FAQs</Link>
                  </li>
                </ul>
                <ul className="social d-flex">
                  <li><a href="#"><img src={instagram} alt="Instagram" /></a></li>
                  <li><a href="#"><img src={facebook} alt="Facebook" /></a></li>
                </ul>
              </div>
            </div>
            <div className="auth-area d-flex align-items-center">
              <Link className="sign-up" to="/sign-up">Sign Up</Link>
              <Link to="/login">Log In</Link>
              <CartIcon />
            </div>
          </nav>
        </div>
    </header>
  )
}

export default Header