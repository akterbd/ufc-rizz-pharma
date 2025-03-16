
import { useDispatch } from 'react-redux';
import Heading from '../Heading/Heading';
import CategorySlider from './CategoryNav/CategorySlider';
import './product-section.scss';
import ProductSlider from './ProductSlider/ProductSlider';
import { getAllCategories } from '../../store/slices/categories/categoryThunk';
import { useEffect } from 'react';

const ProductSection = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

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