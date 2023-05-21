import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const ToyDetails = () => {
  useTitle('Anime ToyWorld | Toy Details');
  const toy = useLoaderData();
  const { email, rating, name, seller, photo, quantity, price, description } = toy;
  return (
    <div>
        <h2 className="text-4xl font-bold text-center py-6 bg-base-200">Toy Details</h2>
    
    <div className="hero my-12 py-32 bg-base-200">
        
      <div className="hero-content flex-col lg:flex-row">
      
        <img
          src={photo}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="md:ml-12">
          <h1 className="text-5xl font-bold my-4">Toy Name: {name}</h1>
          <p className="py-2">
          <span className="font-bold">Description :</span> {description}
          </p>
          
          <p className="py-2">
          <span className="font-bold">Seller Name :</span> {seller}
          </p>
          
          <p className="py-2">
          <span className="font-bold">Seller Email :</span>  {email}
          </p>

          <p className="py-2">
          <span className="font-bold">Available Quantity :</span> {quantity}
          </p>

          <p className="py-2">
          <span className="font-bold">Price :</span> $ {price}
          </p>

          <p className="py-2">
          <span className="font-bold">Rating :</span> {rating} / 5
          </p>
          <Link to="/" ><button className="btn btn-block mt-5 btn-warning">Buy Now</button></Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ToyDetails;
