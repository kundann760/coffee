"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const coffeeContent = [
  {
    title: "Artisanal Coffee Selection",
    description:
      "Discover our carefully curated selection of premium coffee beans sourced from sustainable farms worldwide. Each batch is expertly roasted in-house to bring out the unique flavor profiles and ensure the freshest cup possible.",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-[linear-gradient(to_bottom_right,var(--amber-700),var(--yellow-600))]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-24 h-24 text-white"
        >
          <path d="M12 2C10 2 8.3 3 7 4.5 5.5 6.3 4.5 8.5 4.5 11S5.5 15.7 7 17.5C8.3 19 10 20 12 20s3.7-1 5-2.5c1.5-1.8 2.5-4 2.5-6.5S18.5 6.3 17 4.5C15.7 3 14 2 12 2zm-1.5 7.5C11 9.5 12 10.5 12 12s-1 2.5-1.5 2.5S9 13.5 9 12s1-2.5 1.5-2.5z" />
        </svg>
      </div>
    ),
  },
  {
    title: "Cozy Atmosphere",
    description:
      "Step into our thoughtfully designed space where modern comfort meets rustic charm. Whether you're working remotely, meeting friends, or seeking a quiet moment alone, our warm and inviting atmosphere provides the perfect setting for every occasion.",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-[linear-gradient(to_bottom_right,var(--stone-800),var(--stone-600))]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-24 h-24 text-white"
        >
          <path d="M18 8h-2V7c0-1.1-.9-2-2-2H4C2.9 5 2 5.9 2 7v8c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4v-1h2c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zm-4 7c0 1.66-1.34 3-3 3H6c-1.66 0-3-1.34-3-3V7c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v8z" />
          <path d="M20 10h-2v4h2c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1z" />
        </svg>
      </div>
    ),
  },
  {
    title: "Premium Coffee Experience",
    description:
      "Enjoy expertly crafted espresso-based drinks, pour-over brews, and specialty beverages made by skilled baristas dedicated to the art of coffee making.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-24 h-24 text-amber-200"
        >
          <path d="M5 2h14c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm1 2v16h12V4H6zm4 14c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1h-4v1zm6-4v2H8v-2h8zm0-4v2H8v-2h8zm0-4v2H8V6h8z" />
        </svg>
      </div>
    ),
  },
];

function WhyChooseUs() {
  return <StickyScroll content={coffeeContent} />;
}

export default WhyChooseUs;
