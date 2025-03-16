
const SupportItem = ({ title, icon }) => {
    return (
        <div className="support-item">
            <div className="support-icon">
                <img src={icon} alt="Secure Payment" />
            </div>
            <div className="support-text">
                <h4>{title}</h4>
            </div>
        </div>
    );
}

export default SupportItem