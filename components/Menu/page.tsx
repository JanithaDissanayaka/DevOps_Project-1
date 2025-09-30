"use client";

import React, { useState } from "react";
import Image from "next/image";

const Menu: React.FC = () => {

  const foods = [
    { name: "Reguler Beef Burger", price: "350", img: "/img/burger1.jpg" },
    { name: "Black Beef Burger", price: "350", img: "/img/burger2.jpg" },
    { name: "Big Meety", price: "350", img: "/img/burger3.jpg" },
    { name: "Double Mac Burger", price: "350", img: "/img/burger4.jpg" },
    { name: "Chicken Burger", price: "350", img: "/img/burger5.jpg" },
    { name: "Cheese Burger", price: "350", img: "/img/burger6.jpg" },
    { name: "Double Big Meety", price: "350", img: "/img/burger7.jpg" },
    { name: "Crispy Chicken", price: "350", img: "/img/burger8.jpg" },
  ];

  const snacks = [
    { name: "French Fries", price: "150", img: "/img/snack1.jpg" },
    { name: "Cheese Balls", price: "200", img: "/img/snack2.jpg" },
    { name: "Spring Rolls", price: "180", img: "/img/snack3.jpg" },
    { name: "Onion Rings", price: "160", img: "/img/snack4.jpg" },
    { name: "Garlic Bread", price: "120", img: "/img/snack5.jpg" },
    { name: "Nachos", price: "220", img: "/img/snack6.jpg" },
    { name: "Potato Wedges", price: "170", img: "/img/snack7.jpg" },
    { name: "Popcorn Chicken", price: "250", img: "/img/snack8.jpg" },
  ];

  const beverages = [
    { name: "Coca Cola", price: "100", img: "/img/beverage1.jpg" },
    { name: "Pepsi", price: "100", img: "/img/beverage2.jpg" },
    { name: "Orange Juice", price: "200", img: "/img/beverage3.jpg" },
    { name: "Mango Smoothie", price: "250", img: "/img/beverage4.jpg" },
    { name: "Cold Coffee", price: "220", img: "/img/beverage5.jpg" },
    { name: "Iced Tea", price: "180", img: "/img/beverage6.jpg" },
    { name: "Strawberry Shake", price: "240", img: "/img/beverage7.jpg" },
    { name: "Lemonade", price: "150", img: "/img/beverage8.jpg" },
  ];

  const [activeTab, setActiveTab] = useState<"foods" | "snacks" | "beverages">(
    "foods"
  );

  const getItems = () => {
    if (activeTab === "foods") return foods;
    if (activeTab === "snacks") return snacks;
    return beverages;
  };

  return (
    <section id="menu" className="bg-black text-white min-h-screen ">
      <div className="max-w-6xl mx-auto px-6">
      
        <h1 className="text-center text-3xl md:text-4xl font-bold mb-8">
          OUR BEST MENU
        </h1>

        <div className="flex justify-center space-x-4 mb-10">
          <button
            className={`px-6 py-2 rounded font-bold ${
              activeTab === "foods"
                ? "bg-yellow-500 text-black"
                : "bg-gray-700 text-white"
            }`}
            onClick={() => setActiveTab("foods")}
          >
            FOODS
          </button>
          <button
            className={`px-6 py-2 rounded font-bold ${
              activeTab === "snacks"
                ? "bg-yellow-500 text-black"
                : "bg-gray-700 text-white"
            }`}
            onClick={() => setActiveTab("snacks")}
          >
            SNACKS
          </button>
          <button
            className={`px-6 py-2 rounded font-bold ${
              activeTab === "beverages"
                ? "bg-yellow-500 text-black"
                : "bg-gray-700 text-white"
            }`}
            onClick={() => setActiveTab("beverages")}
          >
            BEVERAGES
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {getItems().map((item, idx) => (
            <div
              key={idx}
              className="bg-neutral-900 rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-36 object-cover"
              />
              <div className="p-3">
                <h2 className="text-sm font-bold uppercase">{item.name}</h2>
                <p className="text-yellow-400 font-semibold">RS.{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="relative text-center mt-10">
      <Image
        src="/img/restaurant-bg.jpg"
        alt="Hero"
        width={1920}
        height={0}
  

      />
      <div className="absolute inset-0 bg-black/30" aria-hidden />

      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="z-10 text-white text-3xl md:text-5xl font-bold drop-shadow-lg pt-50">
          We Serve You The Best
          <div className="w-50 h-1 bg-yellow-500 mx-auto rounded"></div>
        </h1>
        
      </div>
      
    </div>
        

        
      </div>
    </section>
  );
};

export default Menu;
