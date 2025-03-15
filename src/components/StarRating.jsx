import React from 'react';
import starFill from "./../assets/img/star-fill.svg";
import starOutline from "./../assets/img/star-outline.svg";
const StarRating = ({ value }) => {
  return (
    <>
      {[...Array(5)].map((_, index) => (
        <span key={index}>
          {index < value ? <img src={starFill} alt="Star" /> : <img src={starOutline} alt="Star" />}
        </span>
      ))}
    </>
  );
};

export default StarRating;
