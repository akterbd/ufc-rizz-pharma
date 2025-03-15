
import BodyBg from "./assets/img/body-bg.webp";
import logo from "./assets/img/UFC_RIZZ Logo.png";
import instagram from "./assets/img/instagram-outline.svg";
import facebook from "./assets/img/facebook-outline.svg";
import cartIcon from "./assets/img/cart-white.svg";
import searchIcon from "./assets/img/search-icon.svg";
import shapeStar from "./assets/img/shape-star-icon.svg";
import shapeStar3 from "./assets/img/shape-3.svg";
import shapeStar2 from "./assets/img/shape-2.svg";
import WeightLose from "./assets/img/portrait-fitness-people 1.png";
import sexualHealth from "./assets/img/sexual-health.png";
import brainHealth from "./assets/img/brain-health.png";
import testosteroneHRT from "./assets/img/testosterone-HRT.png";
import athleticPerfomance from "./assets/img/Athletic-Perfomance.png";
import beautyHairLoss from "./assets/img/Beauty-Hair-Loss.png";
import securePayment from "./assets/img/secure-payment.svg";
import onlineSupport from "./assets/img/online-support.svg";
import freeShipping from "./assets/img/free-shipping.svg";
import bestValue from "./assets/img/best-value.svg";
import online100Convenient100 from "./assets/img/bg-100.png";
import emailIcon from "./assets/img/email-icon.svg";
import hipaa from "./assets/img/hipaa.png";
import facebookIcon from "./assets/img/facebook-icon.svg";
import instagramIcon from "./assets/img/instagram-icon.svg";
import himsCom from "./assets/img/hims-com.png";
import subscribeIcon from "./assets/img/subscribe-icon.svg";
import rizzPharma from "./assets/img/rizz-pharma.png";
import { Link } from "react-router-dom";
import ProductSlider from "./components/ProductSlider";
import CategorySlider from "./components/CategorySlider";
import ReviewSlider from "./components/ReviewSlider";

function App() {
  return (
    <>
      <div className="home-page" style={{backgroundImage:`url(${BodyBg})`}}>
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

          <section className="hero">
            <div className="container">
              <div className="banner-content">
                <h1>Prescription treatments for your <span>health goals</span></h1>
                <Link className="button-gradient-border" to="/">Find my Treatment</Link>
              </div>
            </div>
          </section>

          <div className="seach-area">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <img src={searchIcon} alt="Search" />
                </span>
              </div>
              <input type="text" className="form-control border-left-0" placeholder="Search by product/treatment" />
            </div>
          </div>

          <section className="shop-by-category">
            <div className="container">
              <h2>Shop by <span>Category</span></h2>
              <div className="grid-container">
                <div className="grid-item">
                  <h3>Weight<br/> Loss</h3>
                  <img className="shape" src={shapeStar} alt="shape" />
                  <img className="category-img" src={WeightLose} alt="Weight Lose" />
                </div>
                <div className="grid-item">
                  <h3>Sexual<br/> Health</h3>
                  <img className="shape" src={shapeStar3} alt="shape" />
                  <img className="category-img" src={sexualHealth} alt="Weight Lose" />
                </div>
                <div className="grid-item">
                  <h3>Brain<br/> Health</h3>
                  <img className="shape" src={shapeStar} alt="shape" />
                  <img className="category-img" src={brainHealth} alt="Weight Lose" />
                </div>
                <div className="grid-item">
                  <h3>Testosterone<br/> HRT</h3>
                  <img className="shape" src={shapeStar2} alt="shape" />
                  <img className="category-img" src={testosteroneHRT} alt="Weight Lose" />
                </div>
                <div className="grid-item">
                  <h3>Athletic<br/> Perfomance</h3>
                  <img className="shape" src={shapeStar} alt="shape" />
                  <img className="category-img" src={athleticPerfomance} alt="Weight Lose" />
                </div>
                <div className="grid-item">
                  <h3>Beauty and<br/> Hair Loss</h3>
                  <img className="shape" src={shapeStar2} alt="shape" />
                  <img className="category-img" src={beautyHairLoss} alt="Weight Lose" />
                </div>
              </div>
            </div>
          </section>
          <div className="support-section">
            <div className="support-grid">
              <div className="support-item">
                <div className="support-icon">
                  <img src={securePayment} alt="Secure Payment" />
                </div>
                <div className="support-text">
                  <h4>Secure Payment</h4>
                </div>
              </div>

              <div className="support-item">
                <div className="support-icon">
                  <img src={onlineSupport} alt="Online Support" />
                </div>
                <div className="support-text">
                  <h4>Online Support</h4>
                </div>
              </div>

              <div className="support-item">
                <div className="support-icon">
                  <img src={freeShipping} alt="Free Shipping" />
                </div>
                <div className="support-text">
                  <h4>Free Shipping</h4>
                </div>
              </div>

              <div className="support-item">
                <div className="support-icon">
                  <img src={bestValue} alt="Best Value" />
                </div>
                <div className="support-text">
                  <h4>Best Value</h4>
                </div>
              </div>
            </div>
          </div>

          <section className="product-section">
            <div className="container">
              <h2>Solutions for Your <span>Unique</span> Health Goals</h2>
              <CategorySlider />
              <ProductSlider />
            </div>
          </section>

          <section className="online100">
            <img className="w-100" src={online100Convenient100} alt="online 100%" />
            <div className="overlay">
              <div className="container">
                <div className="row g-0">
                  <div className="col-md-6">
                    <h3>100% Online,<br/> 100% Convenient</h3>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-item-support">
                      <li>Chat with a provider 24/7</li>
                      <li>Fast, discreet shipping</li>
                      <li>Clinically proven ingredients and FDA-approved treatments.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="reviews">
            <ReviewSlider />
          </section>
          
      </div>
      <footer>
        <div className="container">
            <div className="row align-items-end">
              <div className="col-md-6">
                <div className="newsletter">
                  <div className="newsletter-content">
                    <h3>Let’s Stay In Touch</h3>
                    <p>Keep up to date with our latest news & special offers.</p>
                  </div>
                  <div className="input-group">
                    <input type="text" className="form-control border-left-0" placeholder="enter your email" />
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <img src={subscribeIcon} alt="Search" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex justify-content-between">
                  <div className="footer-menu">
                    <div className="footer-wedget">
                      <h4>Quick Links</h4>
                      <ul>
                        <li>
                          <Link to="#">Erectile Dysfunction</Link>
                        </li>
                        <li>
                          <Link to="#">Weight Loss</Link>
                        </li>
                        <li>
                          <Link to="#">Men’s Hair Loss</Link>
                        </li>
                      </ul>
                    </div>

                    <div className="footer-wedget">
                      <h4>Contact Info</h4>
                      <div className="email d-flex align-items-center">
                        <span className="icon"><img src={emailIcon} alt="Email: " /></span>
                        <Link to="mailto:hello@rizzpharma.com">hello@rizzpharma.com</Link>
                      </div>
                    </div>
                  </div>
                  <div className="footer-menu">
                    <div className="footer-wedget">
                      <h4>Our Company</h4>
                      <ul>
                        <li>
                          <Link to="#">HIPAA Notice</Link>
                        </li>
                        <li>
                          <Link to="#">Privacy Policy</Link>
                        </li>
                        <li>
                          <Link to="#">Return & Refund Policy</Link>
                        </li>
                        <li>
                          <Link to="#">Terms Of Use</Link>
                        </li>
                        <li>
                          <Link to="#">CCPA Opt-Out</Link>
                        </li>
                        <li>
                          <Link to="#">Opt-Out Preferences</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center footer-middle">
              <div className="col-md-6">
                  <div className="hippa-logo">
                    <img src={hipaa} alt="hipaa" />
                  </div>
              </div>
              <div className="col-md-6">
                <div className="social-icons">
                  <div className="social-item"><Link><img src={facebookIcon} alt="Facebook" /></Link></div>
                  <div className="social-item"><Link><img src={instagramIcon} alt="Instagram" /></Link></div>
                </div>
                <div className="copy-right">
                  <div className="hims-logo">
                    <img src={himsCom} alt="Hims Com" />
                  </div>
                  <div className="hims-logo">
                    Copyright &copy; {new Date().getFullYear()} Rizz Pharma All Right Reserved - Built by Business Web Social
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <img className="branding-logo" src={rizzPharma} alt="Rizz Pharma" />
              </div>
            </div>
        </div>
      </footer>

    </>
  )
}

export default App
