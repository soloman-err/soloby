import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const { user } = useContext(AuthContext);
  const toy = useLoaderData();
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
    desc,
  } = toy;
  console.log(toy);

  // Update a toy:
  const handleUpdateToy = (event, id) => {
    event.preventDefault();
    const form = event.target;
    const photoURL = form.photoURL.value;
    const productsTitle = form.productsTitle.value;
    const price = form.price.value;
    const name = form.name.value;
    const email = form.email.value;
    const rating = form.rating.value;
    const subCategory = form.subCategory.value;
    const quantity = form.quantity.value;
    const desc = form.desc.value;

    const updatedToy = {
      photoURL,
      productsTitle,
      price,
      name,
      email,
      rating,
      subCategory,
      quantity,
      desc,
      _id,
    };
    console.log(id);

    Swal.fire({
      title: "Are you sure to update?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:2000/toyDetails/${_id}`, {
          method: "PUT",
          header: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedToy),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        Swal.fire("Updated!", "You'vé updated successfully!", "success");
      }
    });
  };

  return (
    <div className="hero">
      <div className="hero-content">
        <form
          onSubmit={handleUpdateToy}
          className="w-full card-body rounded shadow-xl"
        >
          <div className="flex justify-center items-baseline">
            <span className="text-2xl animate-pulse"> _</span>
            <h1 className="text-center font-bold text-3xl underline-offset-4">
              Update your vehicle
            </h1>
          </div>
          <div className="flex flex-col md:flex-row gap-5 mt-10">
            {/* Row 1 */}
            <div className="">
              {/* Picture URL */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  defaultValue={photoURL}
                  placeholder="photoURL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Products Title</span>
                </label>
                <input
                  type="text"
                  name="productsTitle"
                  defaultValue={productsTitle}
                  placeholder="Products Title"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Price */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  placeholder="$ 00.00"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            {/* Row 2 */}
            <div>
              {/* Seller name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.displayName}
                  placeholder="Seller name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  placeholder="Seller email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="text"
                  name="rating"
                  placeholder="Rating"
                  defaultValue={rating}
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
          </div>
          {/* Row 3 */}
          <div
            className="flex flex-col-reverse
             md:flex-row justify-between"
          >
            {/* Sub-category */}
            <div className="md:w-[48%]">
              <label className="label">
                <span className="label-text">Sub-category</span>
              </label>
              <select
                className="form-control w-full py-3 px-5 border-2 border-slate-300 rounded-lg bg-transparent"
                name="subCategory"
                id="subCategory"
                defaultValue={subCategory}
                required
              >
                <option value="">Select an option</option>
                <option value="fordMustang">Ford Mustang</option>
                <option value="mercuryCougar">Mercury Cougar</option>
                <option value="pontiacGTO">Pontiac GTO</option>
                <option value="superCars">Super Cars</option>
                <option value="hotHatches">Hot Hatches</option>
                <option value="exotic">Exotic</option>
                <option value="off-RoadTrucks">Off-Road Trucks</option>
                <option value="suv-BasedTrucks">SUV-Based Trucks</option>
                <option value="compactTrucks">Compact Trucks</option>
                <option value="teslaModelX">Tesla Model X</option>
                <option value="crossovers">Crossovers</option>
                <option value="microCars">Micro Cars</option>
              </select>
            </div>

            {/* Quantity */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available quantity</span>
              </label>
              <input
                type="number"
                name="quantity"
                defaultValue={quantity}
                placeholder="Available quantity"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* Row 4 */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              type="text"
              name="desc"
              defaultValue={desc}
              className="input input-bordered py-1"
              placeholder="Write Description"
              required
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Update Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateToy;
