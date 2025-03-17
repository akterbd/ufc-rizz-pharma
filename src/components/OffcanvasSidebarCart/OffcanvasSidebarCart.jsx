
import { useSelector, useDispatch } from "react-redux";
import { hideSidebar } from "../../store/slices/sidebarSlice";
import { formatPrice } from "../../utils/priceFormat";
import { truncateText } from "../../utils/characterLimit";
import { decrementQuantity, incrementQuantity } from "../../store/slices/cartSlice";
import "./offcanvas-sidebar-cart.scss";
const OffcanvasCart = () => {
  const show = useSelector((state) => state.sidebar.show);
  const cartItems = useSelector(state => state.cart.items);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const dispatch = useDispatch();
  const handleIncrement = (item) => {
    dispatch(incrementQuantity(item));
  };

  const handleDecrement = (item) => {
    dispatch(decrementQuantity(item));
  };


  return (
    <>
      {show && <div className="overlay" onClick={() => dispatch(hideSidebar())}></div>}

      <div className={`offcanvas-cart ${show ? "show" : ""}`}>
        <div className="cart-header">
          <span>Shopping Cart</span>
          <button className="btn btn-light btn-sm" onClick={() => dispatch(hideSidebar())}>
            &times;
          </button>
        </div>
        <div className="cart-body">
            <ul className="list-group">
                {cartItems.length === 0 ? (
                    <li className="list-group-item text-center cart-item">Your cart is empty</li>
                ) : (
                    cartItems.map((item, index) => (
                    <li className="list-group-item cart-item" key={index}>
                        <div className="d-flex">
                        <div>
                            <img src={item.image} alt={item.title} width="50" height="50"/>
                        </div>
                        <div className="w-100 ml-3">
                            <div className="d-flex justify-content-between mb-2">
                            <p className="mb-1" title={item.title}>{truncateText(item.title, 23)}</p>
                            <p className="pl-2"><strong>{formatPrice(item.price)}</strong></p>
                            </div>
                            <div className="d-flex align-items-center">
                            <button className="btn-outline-light btn-sm" onClick={() => handleDecrement(item)}>-</button>
                            <span className="mx-2" style={{width:"30px", textAlign:"center"}}>{item.quantity}</span>
                            <button className="btn-outline-light btn-sm" onClick={() => handleIncrement(item)}>+</button>
                            </div>
                        </div>
                        </div>
                    </li>
                    ))
                )}
            </ul>
            <div className="py-2 text-right" style={{fontSize:"20px"}}>
              Total: {formatPrice(totalPrice)}
            </div>
        </div>
        <div className="cart-footer">
          <button className="btn">Checkout</button>
        </div>
      </div>
    </>
  );
};

export default OffcanvasCart;
