import React from "react";
import { FaTh } from "react-icons/fa";

const Gallery = () => {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:p-24 m-5 rounded-3xl bg-base-200">
      <h1 className="text-6xl font-bold mb-6 text-[#62376c] flex"><FaTh className="me-5"/> Gallery</h1>
      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="flex w-1/2 flex-wrap">
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://cf.shopee.com.br/file/b047177130780935100453d50dba0577_tn"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://i.pinimg.com/736x/1f/89/8d/1f898dac29b0d12e07e37185ebd968c2.jpg"
            />
          </div>
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://ae01.alicdn.com/kf/Sf8600b630a6d426a901537d28ae5168fS/Anime-Uzumaki-Naruto-Action-Figure-Face-Change-Shippuden-NARUTO-Figurine-Movable-Joints-Children-Cool-Toy-Kids.jpg_Q90.jpg_.webp"
            />
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://ae01.alicdn.com/kf/Hee0623b934a74127b5bb78b155d5157bm.jpg_640x640Q90.jpg_.webp"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://m.media-amazon.com/images/I/413vtOM7EOL.jpg"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://ae01.alicdn.com/kf/Sc69a939be96d4f09912507f4b84f3560u/Anime-Mo-Dao-Zu-Shi-MDZS-The-Untamed-Wei-Wuxian-YiLingLaoZu-Lan-Wangji-QingCang-Stand-Action.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
