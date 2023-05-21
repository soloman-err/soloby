import React from "react";
import { useLoaderData } from "react-router-dom";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const ToyDetails = () => {
  const toy = useLoaderData();
  // console.log(toy);
  const {
    photoURL,
    productsTitle,
    quantity,
    name,
    email,
    price,
    rating,
    subCategory,
    desc,
  } = toy;

  return (
    <div className="flex flex-col md:flex-row h-80 rounded-xl w-[80%] mx-auto bg-base-100 shadow-xl">
      <figure>
        <img
          className="h-full w-96 object-cover rounded-xl shadow-xl"
          src={photoURL}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">{productsTitle}</h2>
        <hr />
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

          <div className="mt-2">
            <p className="text-sm font-bold underline">Suppliers Info:</p>
            <small>
              <span className="font-bold">Seller:</span> {name}
            </small>
            <br />
            <small>
              <span className="font-bold">Email:</span> {email}
            </small>
          </div>
        </div>
        <hr />
        <div className="text-sm mt-2">
          <p className="text-sm font-bold underline">Product Description:</p>

          <p className="opacity-95">{desc && desc.slice(0, 50)}</p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
