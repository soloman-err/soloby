import React from "react";

const AddAToy = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <form className="w-full card-body rounded shadow-xl">
          <div className="flex flex-col md:flex-row gap-5">
            {/* Row 1 */}
            <div className="">
              {/* Picture URL */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Picture URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Picture URL"
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
                  type="text"
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
                  placeholder="Rating"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
          </div>
          {/* Sub-category */}
          <div className="">
            <label className="label">
              <span className="label-text">Sub-category</span>
            </label>
            <select
              className="form-control border-2 border-slate-300 rounded"
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
          <div className="form-control mt-6">
            <button className="btn btn-primary">Publish</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAToy;
