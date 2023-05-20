import React from 'react';

const ToyCard = () => {
    return (
        <div>
            <div className="card w-96 bg-orange-400 p-5 shadow-xl mx-6 my-5 lg:my-10 text-white ">
          <figure>
            <img
              src=""
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
        </div>
    );
};

export default ToyCard;