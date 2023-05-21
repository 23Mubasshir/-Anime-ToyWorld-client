import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const toy = useLoaderData();
  const {_id, quantity, price, description, name } = toy;

  const UpdateToyInfo = (event) => {
    event.preventDefault();

    const form = event.target;

    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const updatedToyInfo = {
      price,
      description,
      quantity,
    };

    console.log(updatedToyInfo);

    // send data to the server
    fetch(`http://localhost:5000/update-toy/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToyInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Your Toy Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        form.reset();
      });
  };

  return (
    <div>
      <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold mb-12">
          Update Toy Information : {name}
        </h2>
        <form onSubmit={UpdateToyInfo}>
          {/* form price and row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="price"
                  placeholder="$ Price"
                  className="input input-bordered w-full"
                  defaultValue={price}
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Available quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="quantity"
                  placeholder="Available Quantity"
                  className="input input-bordered w-full"
                  defaultValue={quantity}
                />
              </label>
            </div>
          </div>

          {/* form description and details row */}
          <div className="md:flex mb-8">
            <div className="form-control w-full ml-4">
              <label className="label">
                <span className="label-text">Detail description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  placeholder="Detail description"
                  className="input input-bordered w-full"
                  defaultValue={description}
                />
              </label>
            </div>
          </div>

          {/* ADD Toy*/}
          <input type="submit" value="Update" className="btn btn-block" />
        </form>
      </div>
    </div>
  );
};

export default UpdateToy;
