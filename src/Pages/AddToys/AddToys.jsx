import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const AddToys = () => {
  const { user } = useContext(AuthContext);

  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const price = form.price.value;
    const seller = form.seller.value;
    const email = form.email.value;
    const category = form.category.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const newToy = {
      name,
      price,
      seller,
      email,
      category,
      description,
      photo,
      quantity,
      rating
    };

    console.log(newToy);

    // send data to the server
    fetch("http://localhost:5000/add-toys", {
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
          Swal.fire({
            title: "Success!",
            text: "Your Toy Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Add a Toy</h2>
      <form onSubmit={handleAddToy}>

        {/* form name and price row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Toy Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
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
              />
            </label>
          </div>
        </div>
        {/* form Seller name and e-mail row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={user?.displayName}
                type="text"
                name="seller"
                placeholder="Seller Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Seller E-mail</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={user?.email}
                type="email"
                name="email"
                placeholder="Seller E-mail"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* form description and details row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
          <label className="label">
              <span className="label-text">Detail description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="Detail description"
                className="input input-bordered w-full"
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
              />
            </label>
          </div>
        </div>

        

        {/* form rating and sub-category row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label htmlFor="rating">Ratings</label>
            <select
              className="input input-bordered w-full mt-3"
              id="rating"
              name="rating"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label htmlFor="category">Sub-Category</label>
            <select
              className="input input-bordered w-full mt-3"
              id="category"
              name="category"
            >
              <option value="Anime">Anime</option>
              <option value="Marvel">Marvel</option>
              <option value="StarWars">Start wars</option>
            </select>
          </div>
        </div>


        {/* form name and quantity row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            
          </div>
        </div>

        {/* ADD Toy*/}
        <input type="submit" value="Add Toy" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddToys;
