import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const TableRow = ({ toy }) => {
  const {
    _id,
    photoURL,
    quantity,
    name,
    sellerName,
    sellerEmail,
    price,
    rating,
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
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-80">United States</div>
          </div>
        </div>
      </td>
      <td>
        <span className="font-bold">{sellerName}</span>
        <br />
        <span className="text-sm opacity-80">{sellerEmail}</span>
      </td>
      <td>
        <span className="font-bold">${price}</span>
        <br />
        {/* Rating */}
        <Rating
          className="text-warning text-xs"
          readonly
          placeholderRating={rating}
          placeholderSymbol={<FaStar />}
          emptySymbol={<FaRegStar />}
          fullSymbol={<FaStarHalfAlt />}
        />
      </td>
      <td>{quantity}</td>
      <th className="space-x-2">
        <Link to="/toyDetails">
          <button className="btn btn-ghost btn-xs">View Details</button>
        </Link>
      </th>
    </tr>
  );
};

export default TableRow;
