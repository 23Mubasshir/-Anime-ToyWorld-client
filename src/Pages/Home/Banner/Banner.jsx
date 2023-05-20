import React from "react";
import img1 from "../../../assets/images/1.jpg";
import img2 from "../../../assets/images/2.jpg";
import img3 from "../../../assets/images/3.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full">
      {/* ------- Slide-1 ------ */}
      <div id="slide1" className="carousel-item relative w-full grid grid-cols-1">
        <img src={img1} className="object-contain" />
        <div className="lg:absolute lg:bg-none bg-orange-400 md:bg-transparent flex items-center h-full left-0 top-40 py-6">
          <div className="text-white space-y-6 pl-32 w-2/3">
            <h2 className="text-6xl  font-bold">
              Available full Naruto  Action figure set.
            </h2>
            <p>
              There are many Naruto anime character action figures in our store. But the most unique three action figures just came live for sell so buy now before it become out of stock. 
              
            </p>
            <div className="flex">
              <button className="lg:w-96 btn bg-slate-50 hover:bg-slate-200 font-bold text-orange-400 lg:text-2xl btn-accent btn-md  mr-5">View details</button>
              <button className="btn lg:w-72 bg-slate-50  hover:bg-slate-200 font-bold text-orange-400 lg:text-2xl btn-accent btn-md  mr-5">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* ------- Slide-2 ------ */}
      <div id="slide2" className="carousel-item relative w-full grid grid-cols-1">
        <img src={img2} className="object-contain" />
        <div className="lg:absolute lg:bg-none bg-violet-300 flex md:bg-transparent items-center h-full left-0 top-40 py-6">
          <div className="text-white space-y-6 pl-32 w-2/3">
            <h2 className="text-6xl  font-bold">
            Available full Demon Slayer Action figure set.
            </h2>
            <p>
              There are many Naruto anime character action figures in our store. But the most unique three action figures just came live for sell so buy now before it become out of stock. 
              
            </p>
            <div className="flex">
              <button className="lg:w-96 btn bg-slate-50 hover:bg-slate-200 font-bold border-violet-400 text-violet-400 lg:text-2xl btn-accent btn-md  mr-5">View details</button>
              <button className="btn lg:w-72 bg-slate-50  hover:bg-slate-200 font-bold border-violet-400 text-violet-400 lg:text-2xl btn-accent btn-md  mr-5">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* ------- Slide-3 ------ */}
      <div id="slide3" className="carousel-item relative w-full grid grid-cols-1 ">
        <img src={img3} className="object-contain w-full" />
        <div className="lg:absolute lg:bg-none bg-green-700 flex items-center md:bg-transparent h-full left-0 top-40 py-6">
          <div className="text-white space-y-6 pl-32 w-2/3">
            <h2 className="text-6xl  font-bold">
            Available full Attack On Titan  Action figure set.
            </h2>
            <p>
              There are many Naruto anime character action figures in our store. But the most unique three action figures just came live for sell so buy now before it become out of stock. 
              
            </p>
            <div className="flex">
              <button className="lg:w-96 btn bg-slate-50 hover:bg-slate-200 font-bold text-green-500 border-green-600 lg:text-2xl btn-accent btn-md  mr-5">View details</button>
              <button className="btn lg:w-72 bg-slate-50  hover:bg-slate-200 font-bold text-green-500 border-green-600 lg:text-2xl btn-accent btn-md  mr-5">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>




















      {/* ------- Slide-2 ------ */}
      {/* <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="object-contain" />
        <div className="lg:absolute lg:bg-none bg-orange-400 flex items-center h-full left-0 top-40 py-6">
          <div className="text-white space-y-6 pl-32 w-2/3">
            <h2 className="text-6xl font-bold">
              Available full Demon Slayer Action figure set.
            </h2>
            <p>
              There are many Naruto anime character action figures in our store. But the most unique three action figures just came live for sell so buy now before it become out of stock. 
              
            </p>
            <div className="flex">
              <button className="lg:w-96 btn bg-slate-50 hover:bg-slate-200 font-bold text-violet-400 lg:text-2xl btn-accent btn-md border-violet-400  mr-5">View details</button>
              <button className="btn lg:w-72 bg-slate-50  hover:bg-slate-200 font-bold border-violet-400 text-violet-400  lg:text-2xl btn-accent btn-md  mr-5">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div> */}

      {/* ------- Slide-3 ------ */}
      {/* <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="object-contain" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-40">
          <div className="text-white space-y-6 pl-32 w-2/3">
            <h2 className="text-6xl font-bold">
              Available full Attack On Titan  Action figure set.
            </h2>
            <p>
              There are many Naruto anime character action figures in our store. But the most unique three action figures just came live for sell so buy now before it become out of stock. 
              
            </p>
            <div className="flex">
              <button className="lg:w-96 btn bg-slate-50 hover:bg-slate-200 font-bold text-green-500 border-green-600 lg:text-2xl btn-accent btn-md  mr-5">View details</button>
              <button className="btn lg:w-72 bg-slate-50  hover:bg-slate-200 font-bold text-green-500 border-green-600 lg:text-2xl btn-accent btn-md  mr-5">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div> */}

      
      </div>
  );
};

export default Banner;
