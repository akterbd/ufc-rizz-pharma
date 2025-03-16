import React from 'react'
import emailIcon from "./../../assets/img/email-icon.svg";
import { Link } from 'react-router-dom'

const FooterWedget = ({title, footerNavData, icon}) => {
  return (
    <div className="footer-wedget">
        <h4>{title}</h4>
        <ul>
            {footerNavData.map((item, index) => (
                <li key={index}>
                    <Link to={item.link}>{item.icon && <img style={{marginRight:"12px", marginBottom: "2px"}} src={emailIcon} alt="Icon" />}{item.menuItem}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default FooterWedget