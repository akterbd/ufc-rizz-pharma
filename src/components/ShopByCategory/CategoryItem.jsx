import { Link } from 'react-router-dom'

const CategoryItem = ({title, shape, image}) => {
  return (
    <Link className="grid-item" to="#">
        <h3>{title}</h3>
        <img className="shape" src={shape} alt="shape" />
        <img className="category-img img-fluid" src={image} alt="Weight Lose" />
    </Link>
  )
}

export default CategoryItem