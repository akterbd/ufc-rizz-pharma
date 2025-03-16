
import BodyBg from "./assets/img/body-bg.webp";

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

import { Link } from "react-router-dom";
import ProductSlider from "./components/ProductSlider";
import CategorySlider from "./components/CategorySlider";
import ReviewSlider from "./components/ReviewSlider";
import Header from "./Layouts/Header";
import Footer from "./layouts/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="home-page" style={{backgroundImage:`url(${BodyBg})`}}>
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
      <Footer />
    </>
  )
}

export default App
