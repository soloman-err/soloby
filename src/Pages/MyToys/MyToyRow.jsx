import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const MyToyRow = ({ toy, handleDeleteToy }) => {
  const {
    _id,
    photoURL,
    quantity,
    productsTitle,
    name,
    email,
    price,
    rating,
    subCategory,
  } = toy;

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-40 h-20">
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
        <button className="btn btn-sm btn-info">Update</button>
        <button
          onClick={() => handleDeleteToy(_id)}
          className="btn btn-sm btn-error"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default MyToyRow;
