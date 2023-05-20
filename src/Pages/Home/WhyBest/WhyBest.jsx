import React from "react";
import { FaUserNinja } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";

const WhyBest = () => {
  return (
    <div className=" ">
      {/* <h1 className="font-bold text-6xl text-center mt-24 pb-12">Why we are the Best</h1> */}

      <div className="lg:flex py-12 px-12 md:px-32 bg-base-200 grid w-full place-items-center">
        
      <div className="card text-[#62376c] w-96 mx-6  bg-base-100 shadow-xl my-6 md:my-0">
        <div className="card-body">
          <h2 className="card-title"> <FaUserNinja/> Unique Pops</h2>
          <p>In our website you will find most wanted or best quality Pops or action figures. Not only that you will get almost all kinds of anime pops here.</p>
        </div>
      </div>
      <div className="card text-[#62376c] w-96 mx-6  bg-base-100 shadow-xl my-6 md:my-0">
        <div className="card-body">
          <h2 className="card-title">
          <FaUsers/> Members</h2>
          <p>In our website you will find most wanted or best quality Pops or action figures. Not only that you will get almost all kinds of anime pops here.</p>
        </div>
      </div>
      <div className="card text-[#62376c] mx-6 w-96 bg-base-100 shadow-xl my-6 md:my-0">
        <div className="card-body">
          <h2 className="card-title">
          <FaHandsHelping/> Support</h2>
          <p>In our website you will find most wanted or best quality Pops or action figures. Not only that you will get almost all kinds of anime pops here.</p>
        </div>
      </div>
      <div className="card text-[#62376c] mx-6 w-96 bg-base-100 shadow-xl my-6 md:my-0">
        <div className="card-body">
          <h2 className="card-title">
          <FaBookOpen/> User Blogs</h2>
          <p>In our website you will find most wanted or best quality Pops or action figures. Not only that you will get almost all kinds of anime pops here.</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default WhyBest;
