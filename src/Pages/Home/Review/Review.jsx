import React from "react";
import img8 from "../../../assets/images/Pops/07.jpg"
import img1 from "../../../assets/images/Pops/01.jpg"
import img4 from "../../../assets/images/Pops/05.jpg"

const Review = () => {
  return (
    <div className=" ">
      <h1 className="font-bold text-6xl text-center mt-24 pb-12 text-[#62376c] w-full">
        Best Seller
      </h1>

      <div className="lg:flex py-12 px-12 bg-base-200  md:mx-12 mb-12 rounded-xl md:items-center md:justify-center  grid w-full place-items-center">

        <div className="card w-96 bg-green-500 shadow-xl p-5 mx-6 my-5 lg:my-10 text-white">
          <figure>
            <img
              src={img8}
              alt="Shoes"
              className="rounded-lg"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title justify-center text-4xl font-extrabold">Tanjuro</h2>
            <p className="font-medium">This is tanguro sitting on a chair anime pop. It is limited edition so buy now before it get sold out.</p>
            <div className="card-actions">
              <button className="btn btn-block border-red-600 text-red-600 bg-slate-50 text-xl font-bold mt-5">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-orange-400 p-5 shadow-xl mx-6 my-5 lg:my-10 text-white ">
          <figure>
            <img
              src={img1}
              alt="Shoes"
              className="rounded-lg"
            />
          </figure>
          <div className="card-body">
          <h2 className="card-title justify-center text-4xl font-extrabold">Naruto</h2>
            <p className="font-medium">This is Naruto doing clone anime pop. It is limited edition so buy now before it get sold out.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-block border-red-600 text-red-600 bg-slate-50 text-xl font-bold mt-5 ">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 p-5 bg-red-500 shadow-xl mx-6 my-5 lg:my-10 text-white">
          <figure>
            <img
              src={img4}
              alt="Shoes"
              className="rounded-lg"
            />
          </figure>
          <div className="card-body">
          <h2 className="card-title justify-center text-4xl font-extrabold">Spider-man</h2>
            <p className="font-medium">This is Spider-man with his spider kit anime pop. It is limited edition so buy now before it get sold out.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-block border-red-600 text-red-600 bg-slate-50 text-xl font-bold mt-5">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Review;
