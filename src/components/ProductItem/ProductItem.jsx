import addToCartDark from "@/assets/img/add-to-cart-dark.svg";
import { formatPrice } from "../../utils/priceFormat";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/slices/cartSlice";
const ProductItem = (props) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    const product = {
      id: props.id,
      title: props.title,
      price: props.price,
      image: props.thumbnail,
      quantity: 1,
    }
    dispatch(addItem(product));
  }
  return (
    <div className="product-item">
        <div className="badge-product">Research use only</div>
        <div className="product-info">
        <div className="product-thumb">
            <img className="img-fluid" src={props.thumbnail} alt="Product" />
        </div>
        <div className="product-title">{props.title}</div>
        </div>
        <div className="price-area">
        <div className="price">{formatPrice(props.price)}</div>
        <div className="add-to-cart" onClick={handleClick}>
            <img src={addToCartDark} alt="Add to Cart" />
        </div>
        </div>              
    </div>
  )
}

export default ProductItem