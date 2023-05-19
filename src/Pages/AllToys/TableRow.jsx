import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const TableRow = ({ toy }) => {
  const {
    _id,
    photoURL,
    quantity,
    productsTitle,
    sellerName,
    sellerEmail,
    price,
    rating,
    subCategory,
  } = toy;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photoURL} alt="toy-image" />
            </div>
          </div>
          <div>
            <div className="font-bold">{productsTitle}</div>
            <small className="text-sm opacity-80">{subCategory}</small>
          </div>
        </div>
      </td>
      <td>
        <span className="font-bold">{sellerName}</span>
        <br />
        <span className="text-sm opacity-80">{sellerEmail}</span>
      </td>
      <td>
        <span className="font-bold text-warning">${price}</span>
        <br />
        {/* Rating */}
        <Rating
          className="text-xs"
          readonly
          fullSymbol={<FaStar />}
          placeholderRating={rating}
          emptySymbol={<FaRegStar />}
          placeholderSymbol={<FaStar />}
        />
      </td>
      <td>{quantity}</td>
      <th className="space-x-2">
        <Link to={`/toyDetails/${_id}`}>
          <button className="btn btn-ghost btn-xs">View Details</button>
        </Link>
      </th>
    </tr>
  );
};

export default TableRow;
