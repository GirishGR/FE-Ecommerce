import React from "react";
import MensCatogory from "../assets/Images/MenCatogory.avif";
import WomensCatogory from "../assets/Images/WomenCat.avif";
import KidsCatorgy from "../assets/Images/KidsCategory.jpg";

const CategorySection = () => {
  const categories = [
    {
      title: "Men",
      imageUrl: MensCatogory,
    },
    {
      title: "Women",
      imageUrl: WomensCatogory,
    },
    {
      title: "Kids",
      imageUrl: KidsCatorgy,
    },
  ];

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mt-5">
      {categories.map((category, index) => (
        <div key={index} className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
          <img src={category.imageUrl} alt="" className="w-full h-full object-cover rounded-lg shadow-md"/>
          <div className="absolute top-20 right-10 ">
            <p className="text-xl font-bold ">{category.title}</p>
            <p className="text-gray-700">View All</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
