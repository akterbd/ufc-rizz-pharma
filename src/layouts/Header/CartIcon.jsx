import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cartIcon from "./../../assets/img/cart-white.svg";
import { showSidebar } from '../../store/slices/sidebarSlice';

const CartIcon = () => {
  const dispatch = useDispatch();
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
    <span className={`cart-icon-container ${animate ? 'cart-icon-bounce' : ''}`}  onClick={() => dispatch(showSidebar())}>
      <img src={cartIcon} alt="Cart"/>
      {items.length > 0 && <span className="item-count">{items.length}</span>}
    </span>
  );
};

export default CartIcon;
