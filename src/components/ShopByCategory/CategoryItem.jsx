import React from 'react'

const CategoryItem = ({title, shape, image}) => {
  return (
    <div className="grid-item">
        <h3>{title}</h3>
        <img className="shape" src={shape} alt="shape" />
        <img className="category-img" src={image} alt="Weight Lose" />
    </div>
  )
}

export default CategoryItem