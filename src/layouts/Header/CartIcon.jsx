import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import cartIcon from "./../../assets/img/cart-white.svg";

const CartIcon = () => {
  const items = useSelector((state) => state.cart.items);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (items.length > 0) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 300);
      return () => clearTimeout(timer);
    }
  }, [items]);

  return (
    <span className={`cart-icon-container ${animate ? 'cart-icon-bounce' : ''}`}>
      <img src={cartIcon} alt="Cart"/>
      {items.length > 0 && <span className="item-count">{items.length}</span>}
    </span>
  );
};

export default CartIcon;
