import React, { useContext, useEffect, useState } from "react";
import TableToy from "../../Shared/TableToy/TableToy";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToyTable from "../../Shared/MyToyTable/MyToyTable";

const MyToys = () => {
  const { user} = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState(' ');
//   console.log(activeTab);
  useEffect(() => {
    fetch(`http://localhost:5000/my-toys/${user?.email}/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        setToys(result);
      });
  }, [user, activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div>
      <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-6xl font-bold text-center">My Toys</h2>

        <div className="text-center my-12">
        <div className=" btn-group">
          <button
            onClick={() => handleTabClick("ascending")}
            className={`btn btn-warning ${
                activeTab == "ascending" ? " btn-active" : ""
              }`}
          >
            Ascending by price
          </button>
          <button onClick={() => handleTabClick("descending")} className={`btn btn-warning ${
                activeTab == "descending" ? " btn-active" : ""
              }`}>
            Descending by price
          </button>
        </div>
        </div>

        <div className="overflow-x-auto">
  <table className="table table-compact w-full">
    <thead>
      <tr>
        <th></th> 
        <th>#</th> 
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
    {toys?.map((toy, index, idk) => (
          <MyToyTable index={index} key={idk} toy={toy}></MyToyTable>
        ))}
    </tbody>
  </table>
</div>


        
      </div>
    </div>
  );
};

export default MyToys;
