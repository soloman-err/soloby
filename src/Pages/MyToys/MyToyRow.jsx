import React from "react";
import { FaEdit, FaRegStar, FaStar, FaTrashAlt } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const MyToyRow = ({ toy, handleDeleteToy, handleUpdateToy }) => {
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
    <>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded w-10 h-10 md:w-40 md:h-20">
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
        <th className="md:space-x-2 flex flex-col md:flex-row">
          <Link to={`/updateToy/${_id}`}>
            <button
              // onClick={() => handleUpdateToy(_id)}
              className="btn btn-ghost btn-xs md:btn-sm btn-info"
            >
              <FaEdit size={20} />
            </button>
          </Link>
          <button
            onClick={() => handleDeleteToy(_id)}
            className="btn btn-ghost text-red-500 btn-xs md:btn-sm btn-error"
          >
            <FaTrashAlt size={18} />
          </button>
        </th>
      </tr>
    </>
  );
};

export default MyToyRow;
