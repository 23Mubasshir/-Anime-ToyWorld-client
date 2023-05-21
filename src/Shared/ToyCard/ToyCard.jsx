import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToyCard = ({ toy }) => {
  const { name, rating, price, _id, photo } = toy || {};

  const { user } = useContext(AuthContext);

  const handleTost = () =>{
    console.log('ok');
    <div className="alert alert-info shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <span>New software update available.</span>
  </div>
</div>
    
  }

  return (
    <div>
      <div className="card w-96 bg-orange-400 p-5 shadow-xl mx-6 my-5 lg:my-10 text-white ">
        <figure>
          <img src={photo} alt="Shoes" className="rounded-lg max-w-[350px]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center text-4xl font-extrabold">
            {name}
          </h2>
          <p className="text-xl">Price: $ {price}</p>
          <p className="text-xl">Rating: {rating}</p>

          <div className="card-actions justify-end">
            <Link onClick={handleTost} className="btn btn-block border-red-600 text-red-600 bg-slate-50 text-xl font-bold mt-5
              hover:bg-slate-200 " to={`toy/${_id}`}>
              <button
              
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
