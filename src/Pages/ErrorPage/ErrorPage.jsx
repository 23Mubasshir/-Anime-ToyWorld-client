import React from "react";
import img from "../../assets/images/ErrorPage.png"
import { Link } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const ErrorPage = () => {
  useTitle('Anime ToyWorld | Error Page');
  return (
    <div>
      <div className="hero min-h-screen bg-base-300">
        <div className="hero-content flex-col lg:flex-row md:p-20 bg-[#fcb82f] shadow-2xl rounded-xl">
          <img
            src={img}
            className="max-w-2xl"
          />
          <div>
            <h1 className="text-8xl font-bold text-[#62376c] mb-4">Meow !!!</h1>
            <h1 className="text-4xl font-bold text-[#62376c] my-1">I DESTROYED your page.</h1>
            <h1 className="text-4xl font-bold text-[#62376c] ">Get Out from here.</h1>
            <p className="py-6 text-[#62376c] font-medium">The truth is i didn't destroyed your page. You have come to a page that doesn't exist. Now go home. </p>
            <Link className="btn btn-lg font-bold bg-[#62376c] btn-block text-base-200" to="/">Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
