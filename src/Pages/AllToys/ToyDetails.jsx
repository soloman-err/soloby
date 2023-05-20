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
    desc,
  } = toy;

  return (
    <div className="card md:card-side w-[70%] mx-auto bg-base-100 shadow-xl">
      <figure>
        <img className="w-80 lg:w-[500px]" src={photoURL} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">{productsTitle}</h2>
        <div className="">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:items-end justify-between">
            <div>
              <p className="text-xl font-bold ">
                {" "}
                <span className="">${price}</span>
              </p>
            </div>
            <div className="flex flex-col">
              {/* Rating */}
              <Rating
                className="text-xs text-warning"
                readonly
                fullSymbol={<FaStar />}
                placeholderRating={rating}
                emptySymbol={<FaRegStar />}
                placeholderSymbol={<FaStar />}
              />

              <small className="">
                <span className="font-bold">Availability:</span> {quantity}
              </small>
            </div>
          </div>
          <div>
            <small>
              <span className="font-bold">Seller:</span> {sellerName}
            </small>
            <br />
            <small>
              <span className="font-bold">Email:</span> {sellerEmail}
            </small>
          </div>
        </div>

        <div className="border-t text-sm mt-2">
          <p className="opacity-95">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
