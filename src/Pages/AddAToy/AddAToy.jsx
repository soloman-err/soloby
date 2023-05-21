import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaWheelchair } from "react-icons/fa";
import Swal from "sweetalert2";

const AddAToy = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);

  const handleAddToy = (event) => {
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

    const newToy = {
      photoURL,
      productsTitle,
      price,
      name,
      email,
      rating,
      subCategory,
      quantity,
      desc,
    };

    fetch("https://soloby.vercel.app/addAToy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          form.reset();
        }
      });
    Swal.fire("Added successfully!", "You'vé a new vehicle!", "success");
  };

  return (
    <div className="hero">
      <div className="hero-content">
        <form
          onSubmit={handleAddToy}
          className="w-full card-body rounded shadow-xl"
        >
          <div className="flex justify-center items-baseline">
            <span className="text-2xl animate-pulse"> _</span>
            <h1 className="text-center font-bold text-3xl underline-offset-4">
              Add your vehicle
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
            <div className="form-contro">
              <label className="label">
                <span className="label-text">Available quantity</span>
              </label>
              <input
                type="number"
                name="quantity"
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
              className="input input-bordered py-1"
              placeholder="Write Description"
              required
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAToy;
