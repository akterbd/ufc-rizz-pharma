
import { useSelector, useDispatch } from "react-redux";
import { hideSidebar } from "../../store/slices/sidebarSlice";
import { formatPrice } from "../../utils/priceFormat";
import { truncateText } from "../../utils/characterLimit";
import { decrementQuantity, incrementQuantity } from "../../store/slices/cartSlice";

const OffcanvasCart = () => {
  const show = useSelector((state) => state.sidebar.show);
  const cartItems = useSelector(state => state.cart.items);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const dispatch = useDispatch();
  const handleIncrement = (item) => {
    dispatch(incrementQuantity(item));
  };

  const handleDecrement = (item) => {
    console.log(item);
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
                            <p><strong>{formatPrice(item.price)}</strong></p>
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
        </div>
        <div className="cart-footer">
          <button className="btn">Checkout</button>
        </div>
      </div>
      <style>{`
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1049;
          transition: opacity 0.3s ease-in-out;
        }
        .offcanvas-cart {
          position: fixed;
          top: 0;
          right: -350px;
          width: 350px;
          height: 100%;
          background: #1d1d1d;
          box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
          transition: right 0.3s ease-in-out;
          z-index: 1050;
        }
        .offcanvas-cart.show {
          right: 0;
        }
        .cart-header {
          padding: 15px;
          background: #003c7c;
          color: white;
          font-size: 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .cart-body {
          padding: 15px;
          height: calc(100% - 138px);
          overflow-y: auto;
        }
        .list-group-item{
            background-color: #272727;
        }
        .cart-footer {
          padding: 15px;
          background: #2e2f2f;
        }
        .cart-footer .btn{
            padding: 10px;
            background: linear-gradient(180deg, #C1842D 0%, #ECC974 100%);
            width: 100%;
            height: 50px;
            display: block;
        }
        .cart-item .btn-outline-light{
            border-color: #ffffff;
            background: transparent;
            width: 30px;
            height: 30px;
            border: 1px solid;
            border-radius: 50% !important;
        }
        .cart-item .btn-outline-light:hover{
            background-color: #ffffff;
        }
      `}</style>
    </>
  );
};

export default OffcanvasCart;
