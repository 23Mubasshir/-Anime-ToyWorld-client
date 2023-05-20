import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCard from "../../../Shared/ToyCard/ToyCard";

const Shop = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("Anime");
  // console.log(activeTab);

  useEffect(() => {
    fetch(`http://localhost:5000/all-toys`)
      .then((res) => res.json())
      .then((result) => {
        const newResult = result?.filter((toy) => toy.category == activeTab);
        // console.log(newResult);
        setToys(newResult);
      });
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:p-24 m-5 rounded-3xl bg-base-200 ">
      <h1 className=" text-center text-6xl font-bold mb-12 text-[#62376c]">
        Shop by category{" "}
      </h1>

      <Tabs className="text-center">
        <TabList>
          <Tab onClick={() => handleTabClick("Anime")}>Anime</Tab>
          <Tab onClick={() => handleTabClick("StarWars")}>StartWars</Tab>
          <Tab onClick={() => handleTabClick("Marvel")}>Marvel</Tab>
        </TabList>

        <TabPanel>
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
            {/* ----- mapping ------ */}
          {toys?.map((toy, idk) => (
            <ToyCard key={idk} toy={toy}></ToyCard>
          ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
            {/* ----- mapping ------ */}
          {toys?.map((toy, idk) => (
            <ToyCard key={idk} toy={toy}></ToyCard>
          ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
            {/* ----- mapping ------ */}
          {toys?.map((toy, idk) => (
            <ToyCard key={idk} toy={toy}></ToyCard>
          ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Shop;
