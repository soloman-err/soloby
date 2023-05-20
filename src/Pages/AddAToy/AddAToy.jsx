import React from "react";

const AddAToy = () => {
  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const photoURL = form.photoURL.value;
    const productsTitle = form.productsTitle.value;
    const price = form.price.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const rating = form.rating.value;
    const subCategory = form.subCategory.value;
    const quantity = form.quantity.value;

    const newToy = {
      photoURL,
      productsTitle,
      price,
      sellerName,
      sellerEmail,
      rating,
      subCategory,
      quantity,
    };

    fetch("    http://localhost:2000/addAToy", {
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
          alert("Toy added successfully");
        }
      });
  };

  return (
    <div className="hero">
      <div className="hero-content">
        <form
          onSubmit={handleAddToy}
          className="w-full card-body rounded shadow-xl"
        >
          <div className="flex flex-col md:flex-row gap-5">
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
                  name="sellerName"
                  placeholder="Seller name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller e-mail</span>
                </label>
                <input
                  type="email"
                  name="sellerEmail"
                  placeholder="Seller e-mail"
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
          <div className="flex justify-between">
            {/* Sub-category */}
            <div className="w-[48%]">
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
          <div className="form-control mt-6">
            <button className="btn btn-primary">Publish</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAToy;
