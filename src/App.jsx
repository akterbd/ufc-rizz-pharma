
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
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="home-page" style={{backgroundImage:`url(${BodyBg})`}}>
          <header className="main-header">
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="#">
                  <img src={logo} alt="Logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse flex-column align-items-end" id="navbarSupportedContent">
                  <div className="main-na d-flex">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                          Category
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">Action</a>
                          <a className="dropdown-item" href="#">Another action</a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                          Top Products
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">Action</a>
                          <a className="dropdown-item" href="#">Another action</a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link">Contact Us</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link">FAQs</a>
                      </li>
                    </ul>
                    <ul className="social d-flex m-0 pl-3">
                      <li><a href="#"><img src={instagram} alt="Instagram" /></a></li>
                      <li><a href="#"><img src={facebook} alt="Facebook" /></a></li>
                    </ul>
                  </div>
                  <div className="auth-area d-flex align-items-center">
                    <Link to="/sign-up">Sign Up</Link>
                    <Link to="/sign-up">Log In</Link>
                    <button className="btn btn-link"><img src={cartIcon} alt="Cart"/></button>
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
                <span className="input-group-text bg-white border-right-0">
                  <img src={searchIcon} alt="Search" />
                </span>
              </div>
              <input type="text" className="form-control border-left-0" placeholder="Search..." />
            </div>
          </div>

          <section className="shop-by-category">
            <div className="container">
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
      </div>

    </>
  )
}

export default App
