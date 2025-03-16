
import securePayment from "@/assets/img/secure-payment.svg";
import onlineSupport from "@/assets/img/online-support.svg";
import freeShipping from "@/assets/img/free-shipping.svg";
import bestValue from "@/assets/img/best-value.svg";
import "./support.scss";
import SupportItem from "./SupportItem";

const supportItems = [
    { title: "Secure Payment", icon: securePayment },
    { title: "Online Support", icon: onlineSupport },
    { title: "Free Shipping", icon: freeShipping },
    { title: "Best Value", icon: bestValue },
];
const Support = () => {
  return (
    <div className="support-section">
        <div className="support-grid">
            {supportItems.map((item, index) => (
                <SupportItem key={index} title={item.title} icon={item.icon} />
            ))}
        </div>
    </div>
  )
}

export default Support