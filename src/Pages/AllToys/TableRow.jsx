import React from "react";

const TableRow = ({ toy }) => {
  const { _id, photoURL, name, price, rating, desc } = toy;
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
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>Qan zee</td>
      <td>
        ${price}
        <br />
        <span className="badge badge-ghost badge-sm">{rating}</span>
      </td>
      <td>10</td>
      <th className="space-x-2">
        <button className="btn btn-ghost btn-xs">View Details</button>
      </th>
    </tr>
  );
};

export default TableRow;
