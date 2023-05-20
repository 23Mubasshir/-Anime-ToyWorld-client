import React from "react";
import logo from "../../../../src/assets/images/logo.png";

const Stat = () => {
  return (
    <div className="grid place-items-center m-12">
      <div className=" text-center stats w-full  stats-vertical lg:stats-horizontal shadow">
        <div className="stat">
          <div className="stat-title">Toys sold</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Users</div>
          <div className="stat-value text-primary">2.6K</div>
          <div className="stat-desc">5% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img src={logo} />
              </div>
            </div>
          </div>
          <div className="stat-value">100%</div>
          <div className="stat-title">Happy Customers</div>
          <div className="stat-desc text-orange-400">Love - Support - Anime</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Page Views</div>
          <div className="stat-value text-secondary">2.6M</div>
          <div className="stat-desc">From January 1st to March 1st</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Total Customers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
