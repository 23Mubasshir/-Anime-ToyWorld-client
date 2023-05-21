import React from 'react';

const ToyCard = ({ toy }) => {

    const {
        name,
        rating,
        price,
        _id,
        photo
      } = toy || {};

    return (
        <div>
            <div className="card w-96 bg-orange-400 p-5 shadow-xl mx-6 my-5 lg:my-10 text-white ">
          <figure>
            <img
              src={photo}
              alt="Shoes"
              className="rounded-lg max-w-[350px]"
            />
          </figure>
          <div className="card-body">
          <h2 className="card-title justify-center text-4xl font-extrabold">{name}</h2>
            <p className="text-xl">Price: $ {price}</p>
            <p className="text-xl">Rating:  {rating}</p>

            <div className="card-actions justify-end">
              <button className="btn btn-block border-red-600 text-red-600 bg-slate-50 text-xl font-bold mt-5
              hover:bg-slate-200 ">View Details</button>
            </div>
          </div>
        </div>
        </div>
    );
};

export default ToyCard;