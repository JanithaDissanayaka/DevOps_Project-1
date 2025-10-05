"use client";
import React from "react";
import Image from "next/image";

const reviews = [
  {
    name: "ANNE PEREIRA",
    text: `One of the best spots for affordable and delicious burgers — my all-time favorites are the Thunderbolt and Nitro burgers: nice flavor and totally worth it.`,
    rating: 5,
  },
  {
    name: "JONOE DOE",
    text: `The food was delicious... every burger was juicy and full of flavor... nice, cozy atmosphere... parking is spacious.`,
    rating: 4,
  },
  {
    name: "JACK SKEE",
    text: `The burgers are juicy, flavorful, and creatively crafted. The "Nitro" burger is a fan favorite — tasty, never disappointing, with friendly service.`,
    rating: 3,
  },
];

const Star: React.FC<{ filled?: boolean }> = ({ filled = true }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-4 h-4 inline-block mr-0.5"   
    fill={filled ? "#FFD700" : "none"}       
    stroke={filled ? "#FFD700" : "#9CA3AF"}  
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 2.25l3.09 6.26 6.91 1-5 4.88 1.18 6.88L12 17.77 5.82 21.27 7 14.39 2 9.51l6.91-1L12 2.25z"
    />
  </svg>
);
const FeatureCard: React.FC<{ icon: React.ReactNode; title: string }> = ({
  icon,
  title,
}) => (
  <div className="flex items-center bg-[#1c1c1c] rounded-2xl overflow-hidden shadow-md w-80 h-18 p-3 ">
    <div className="bg-yellow-500 w-17 h-15 flex items-center justify-center ">
      {icon}
    </div>
    <div className="flex-1 text-center md:text-left px-6">
      <span className="text-white text-lg  tracking-wide">
        {title}
      </span>
    </div>
  </div>
);
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans">
      <header className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-12">
        <div className="md:flex-1">
          <div className="rounded-2xl overflow-hidden shadow-2xl w-full -ml-12">
            <img
            src="/image/delivery.png"
            alt="Phone showing food delivery"
            className="w-full h-[400px] md:h-[700px] object-cover"
            />
          </div>
        </div>
        <div className="md:flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-3xl font-extrabold tracking-wide">
            DONT WORRY ! YOU CAN ORDER
            YOUR FOOD JUST BY PHONE
          </h2>
          <div className="mt-6 mb-4">
            <div className="w-50 h-1 bg-yellow-500 mx-auto md:mx-0"></div>
          </div>
          <div className="mt-8 flex flex-col gap-4">
            <FeatureCard
            icon={
            <img
            src="https://img.icons8.com/ios-filled/50/ffffff/delivery.png"
            alt="Delivery Truck"
            className="w-10 h-10"
            />
            }
            title="FREE DELIVERY"
            />
             <FeatureCard 
             icon={
             <img
             src="https://img.icons8.com/ios-filled/50/ffffff/cash-in-hand.png"
             alt="Cash Promo"
            className="w-10 h-10"
            />
            }
            title="SPECIAL PROMO"
            />
          </div>
          <div className="mt-9 flex gap-7 justify-center md:justify-start flex-wrap">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/image/Google-Play.png"
                alt="Get it on Google Play"
                className="h-15 -ml-14 w-70"
              />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/image/App-Store.png"
                alt="Download on the App Store"
                className="h-15 -ml-14 w-70"
              />
            </a>
          </div>
        </div>
      </header>
      <section className="bg-[#111] py-18">
        <div className="max-w-6xl mx-auto px-8">
          <h3 className="text-3xl font-bold text-center">CUSTOMER REVIEWS</h3>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {reviews.map((r, idx) => (
              <div
                key={idx}
                className="bg-[#000] p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <p className="text-gray-300 text-sm leading-relaxed">{r.text}</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-sm font-semibold">
                    {r.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">{r.name}</div>
                    <div className="mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} filled={i < r.rating} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
