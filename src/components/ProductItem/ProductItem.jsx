import addToCartDark from "@/assets/img/add-to-cart-dark.svg";
import rizzReta from "@/assets/img/Rizz-Reta-GLP3-24mg.png";
import { formatPrice } from "../../utils/priceFormat";
const ProductItem = (props) => {
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
        <div className="add-to-cart">
            <img src={addToCartDark} alt="Add to Cart" />
        </div>
        </div>              
    </div>
  )
}

export default ProductItem