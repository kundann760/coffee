"use client";
import React from "react";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

const coffees = [
  {
    title: "Espresso",
    description:
      "A rich, full-bodied coffee shot with a layer of golden crema.",
    link: "/espresso",
  },
  {
    title: "Cappuccino",
    description: "A perfect blend of espresso, steamed milk, and frothy foam.",
    link: "/cappuccino",
  },
  {
    title: "Latte",
    description: "A smooth, creamy espresso-based coffee with steamed milk.",
    link: "/latte",
  },
  {
    title: "Mocha",
    description:
      "A chocolate-infused coffee delight topped with whipped cream.",
    link: "/mocha",
  },
  {
    title: "Cold Brew",
    description: "A smooth, bold, and refreshing coffee brewed over hours.",
    link: "/cold-brew",
  },
  {
    title: "Macchiato",
    description:
      "Espresso with a small amount of foamed milk for a bold taste.",
    link: "/macchiato",
  },
];

function UpcomingCoffees() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COFFEES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Coffee Taste
          </p>
        </div>
        <div className="mt-10">
          <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={coffees} />
          </div>
        </div>
        <div className="mt-20 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded-sm border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All Coffees
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingCoffees;
