import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyToyRow from "./MyToyRow";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  const url = `http://localhost:2000/myToys?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [url]);

  // Update a toy:
  // const handleUpdateToy = (id) => {
  //   console.log(id);
  //   fetch(`http://localhost:2000/toyDetails/${id}`, {
  //     method: "PATCH",
  //     header: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // };

  // Delete a toy:
  const handleDeleteToy = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:2000/myToys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const remaining = toys.filter((toy) => toy._id !== id);
            setToys(remaining);
            Swal.fire("Deleted successfully!");
          });
      }
    });
  };

  return (
    <>
      <div className="mb-auto">
        <div className="w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>
                  Price & <br /> Rating
                </th>
                <th>
                  Available <br /> Quantity
                </th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {toys.map((toy) => (
                <MyToyRow
                  key={toy._id}
                  toy={toy}
                  handleDeleteToy={handleDeleteToy}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyToys;
