import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Shop = () => {
  return (
    <div class="container mx-auto px-5 py-2 lg:px-32 lg:p-24 m-5 rounded-3xl bg-base-200 ">
        <h1 className=" text-center text-6xl font-bold mb-12 text-[#62376c]">Shop by category </h1>

      <Tabs className="text-center">
        <TabList>
          <Tab>Anime</Tab>
          <Tab>Start Wars</Tab>
          <Tab>Marvel</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Shop;
