import React, { useEffect } from "react";
import img8 from "../../../assets/images/Pops/07.jpg"
import img1 from "../../../assets/images/Pops/01.jpg"
import img4 from "../../../assets/images/Pops/05.jpg"
import Aos from "aos"
import "aos/dist/aos.css"

const Review = () => {


  useEffect(()=>{
    Aos.init();
}, [])

  return (
    <div className=" ">
      <h1 data-aos="fade-down" className="font-bold text-6xl text-center mt-24 pt-12 pb-6 text-[#62376c] bg-base-200 md:mx-12 rounded-t-2xl">
        Best Sellers
      </h1>

      <div className=" pb-12 px-12 md:px-32 bg-base-200  md:mx-12 mb-12 rounded-lg mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">

        <div data-aos="fade-right"  className="card w-96 bg-green-500 shadow-xl p-5 mx-6 my-5 lg:my-10 text-white">
          <figure>
            <img
              src={img8}
              alt="Shoes"
              className="rounded-lg"
            />
          </figure>
          <div data-aos="fade-top" className="card-body">
            <h2 className="card-title justify-center text-4xl font-extrabold">Tanjuro</h2>
            <p className="font-medium">This is tanguro sitting on a chair anime pop. It is limited edition so buy now before it get sold out.</p>
            <div className="card-actions">
              <button className="btn btn-block border-red-600 text-red-600 bg-slate-50 text-xl font-bold mt-5 hover:bg-slate-200">Buy Now</button>
            </div>
          </div>
        </div>

        <div data-aos="fade-top" className="card w-96 bg-orange-400 p-5 shadow-xl mx-6 my-5 lg:my-10 text-white ">
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
              <button className="btn btn-block border-red-600 text-red-600 bg-slate-50 text-xl font-bold mt-5
              hover:bg-slate-200 ">Buy Now</button>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className="card w-96 p-5 bg-red-500 shadow-xl mx-6 my-5 lg:my-10 text-white">
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
              <button className="btn btn-block border-red-600 text-red-600 bg-slate-50 text-xl font-bold mt-5 hover:bg-slate-200">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Review;
