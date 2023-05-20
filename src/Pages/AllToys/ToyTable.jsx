import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";

const ToyTable = () => {
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:2000/cars")
        .then((res) => res.json())
        .then((data) => {
          setAllToys(data);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Seller</th>
              <th>Price & Rating</th>
              <th>Available Quantity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allToys.map((toy) => (
              <TableRow key={toy._id} toy={toy} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ToyTable;
