
import Heading from '../Heading/Heading';
import CategorySlider from './CategoryNav/CategorySlider';
import './product-section.scss';
import ProductSlider from './ProductSlider/ProductSlider';

const ProductSection = () => {
  return (
    <section className="product-section">
        <div className="container">
            <Heading>Solutions for Your <span>Unique</span> Health Goals</Heading>
            <CategorySlider />
            <ProductSlider />
        </div>
    </section>
  )
}

export default ProductSection