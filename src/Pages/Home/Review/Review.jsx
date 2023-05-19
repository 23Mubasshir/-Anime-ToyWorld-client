import React from "react";
import img8 from "../../../assets/images/Pops/07.jpg"
import img1 from "../../../assets/images/Pops/01.jpg"
import img4 from "../../../assets/images/Pops/05.jpg"

const Review = () => {
  return (
    <div className=" ">
      <h1 className="font-bold text-6xl text-center mt-24 pb-12">
        Best Seller
      </h1>

      <div className="lg:flex py-12 px-12 md:px-32 bg-base-200 grid  mx-12 mb-12 rounded-lg">

        <div className="card w-96 bg-base-100 shadow-xl mx-6">
          <figure>
            <img
              src={img8}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-block btn-warning">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl mx-6">
          <figure>
            <img
              src={img1}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-block btn-warning">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mx-6">
          <figure>
            <img
              src={img4}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-warning">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Review;
