import React, { useEffect, useState } from "react";
import TableToy from "../../Shared/TableToy/TableToy";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5000/all-toys/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        setToys(result);
      });
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div>
      <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-6xl font-bold text-center">All Toys</h2>

        <div className="text-center my-12">
        <div className=" btn-group">
          <button
            onClick={() => handleTabClick("remote")}
            className={`btn ${
                activeTab == "remote" ? " btn-active" : ""
              }`}
          >
            remote
          </button>
          <button onClick={() => handleTabClick("offline")} className={`btn ${
                activeTab == "offline" ? " btn-active" : ""
              }`}>
            offline
          </button>
        </div>
        </div>

        <div className="overflow-x-auto">
  <table className="table table-compact w-full">
    <thead>
      <tr>
        <th>Seller Name</th> 
        <th>Toy Name</th> 
        <th>Sub-category</th> 
        <th>Price</th> 
        <th>Available Quantity</th> 
        <th>View Details</th>
      </tr>
    </thead> 
    <tbody>
    {/* limited 20 data and mapping */}
    {toys?.slice(0, 20).map((toy, idk) => (
          <TableToy key={idk} toy={toy}></TableToy>
        ))}
    </tbody>
  </table>
</div>


        
      </div>
    </div>
  );
};

export default AllToys;
