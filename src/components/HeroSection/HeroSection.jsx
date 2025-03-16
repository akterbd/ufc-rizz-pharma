import { Link } from "react-router-dom";
import "./hero-section.scss";
const HeroSection = () => {
  return (
    <section className="hero">
        <div className="container">
            <div className="banner-content">
            <h1>Prescription treatments for your <span>health goals</span></h1>
            <Link className="button-gradient-border" to="/">Find my Treatment</Link>
            </div>
        </div>
    </section>
  )
}

export default HeroSection