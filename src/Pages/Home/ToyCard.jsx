import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
  const { _id, productsTitle, desc, photoURL, price, rating } = toy;
  // console.log(_id);
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={photoURL} alt="Shoes" />
      </figure>
      <div className="card-body overflow-hidden">
        <h2 className="card-title">{productsTitle}</h2>
        <p className="opacity-80 text-sm">{desc && desc.slice(0, 70)}</p>
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
        <Link to={`/toyDetails/${_id}`}>
          <div className="card-actions">
            <button className="w-full btn btn-primary">View Details</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ToyCard;
