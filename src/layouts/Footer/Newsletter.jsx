import subscribeIcon from "./../../assets/img/subscribe-icon.svg";

const Newsletter = () => {
  return (
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
  )
}

export default Newsletter