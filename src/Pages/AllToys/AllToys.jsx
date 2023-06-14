import React, { useEffect, useState } from "react";
import TableToy from "../../Shared/TableToy/TableToy";
import useTitle from "../../Hooks/useTitle";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  useTitle('Anime ToyWorld | All Toys');

  useEffect(() => {
    fetch(`http://localhost:5000/all-toys`)
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      });
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:5000/getToysByText/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      }, []);
  };

  return (
    <div>
      <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-6xl font-bold text-center">All Toys</h2>


        <div className="text-center my-12">

        <div className="my-5">
        <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="p-1 border-blue-300 border-4"
          />{" "}
          <button className="btn btn-sm btn-primary" onClick={handleSearch}>Search</button>
        </div>
        </div>

        <div className="overflow-x-auto">
  <table className="table table-compact w-full">
    <thead>
      <tr>
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
    {toys?.map((toy, index) => (
          <TableToy key={index} index={index} toy={toy}></TableToy>
        ))}
    </tbody>
  </table>
</div>


        
      </div>
    </div>
  );
};

export default AllToys;
