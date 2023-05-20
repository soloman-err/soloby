import React, { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const ToyDetails = () => {
  const toy = useLoaderData();
  console.log(toy);
  const {
    photoURL,
    productsTitle,
    quantity,
    sellerName,
    sellerEmail,
    price,
    rating,
    subCategory,
  } = toy;

  return (
    <div className="card card-side w-[70%] mx-auto bg-base-100 shadow-xl">
      <figure>
        <img className="w-80" src={photoURL} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">{productsTitle}</h2>
        <div>
          <p className="text-xl font-bold ">
            {" "}
            <span className="">${price}</span>
          </p>

          {/* Rating */}
          <Rating
            className="text-xs text-warning"
            readonly
            fullSymbol={<FaStar />}
            placeholderRating={rating}
            emptySymbol={<FaRegStar />}
            placeholderSymbol={<FaStar />}
          />
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
