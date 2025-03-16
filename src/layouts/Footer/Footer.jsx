
import hipaa from "@/assets/img/hipaa.png";
import facebookIcon from "@/assets/img/facebook-icon.svg";
import instagramIcon from "@/assets/img/instagram-icon.svg";
import himsCom from "@/assets/img/hims-com.png";
import rizzPharma from "@/assets/img/rizz-pharma.png";
import { Link } from "react-router-dom";
import Newsletter from "./Newsletter";
import FooterWedget from "./FooterWedget";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
          <div className="row align-items-end">
            <div className="col-md-6">
              <Newsletter />
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-between">
                <div className="footer-menu">
                  <FooterWedget 
                      title="Quick Links" 
                      footerNavData={[
                          { link: "#", menuItem: "Erectile Dysfunction" },
                          { link: "#", menuItem: "Weight Loss" },
                          { link: "#", menuItem: "Men's Hair Loss" }
                      ]} 
                  />
                  <FooterWedget 
                      title="Contact Info" 
                      footerNavData={[
                          { link: "mailto:hello@rizzpharma.com", menuItem: "hello@rizzpharma.com", icon:true }
                      ]} 
                  />
                </div>
                <div className="footer-menu">
                  <FooterWedget 
                      title="Our Company" 
                      footerNavData={[
                          { link: "#", menuItem: "HIPAA Notice" },
                          { link: "#", menuItem: "Privacy Policy" },
                          { link: "#", menuItem: "Return & Refund Policy" },
                          { link: "#", menuItem: "Terms Of Use" },
                          { link: "#", menuItem: "CCPA Opt-Out" },
                          { link: "#", menuItem: "Opt-Out Preferences" }
                      ]} />
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
  )
}

export default Footer