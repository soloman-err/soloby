import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const ToyCard = ({ toy }) => {
  const { _id, productsTitle, desc, photoURL, price, rating } = toy;
  // console.log(_id);
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={photoURL} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productsTitle}</h2>
        <p>{desc}</p>
        <div className="flex items-center">
          <p className="font-bold text-lg">${price}</p>
          <Rating
            className="text-sm"
            readonly
            fullSymbol={<FaStar />}
            placeholderRating={rating}
            emptySymbol={<FaRegStar />}
            placeholderSymbol={<FaStar />}
          />
        </div>
        <div className="card-actions">
          <button className="w-full btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
