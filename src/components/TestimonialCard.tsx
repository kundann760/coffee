"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "The moment I walked in, the aroma of freshly roasted coffee beans captivated me. Their signature latte is simply divine, and the baristas truly understand the art of coffee making. It's become my daily sanctuary.",
    name: "Sarah Mitchell",
    title: "Regular Customer",
  },
  {
    quote:
      "As a coffee connoisseur, I'm quite particular about my brew. This place exceeds all expectations. Their single-origin Ethiopian beans make the most extraordinary pour-over I've ever tasted. It's a coffee lover's paradise.",
    name: "James Wilson",
    title: "Coffee Blogger",
  },
  {
    quote:
      "The atmosphere here is perfect for both work and relaxation. The combination of amazing coffee, friendly staff, and cozy ambiance keeps me coming back. It's my favorite spot in the city.",
    name: "Emily Rodriguez",
    title: "Freelance Writer",
  },
  {
    quote:
      "I've traveled the world tasting coffee, and the expertise here rivals the best cafes in Italy. Their attention to detail, from bean selection to the perfect temperature, creates an exceptional coffee experience.",
    name: "Michael Chang",
    title: "Food Critic",
  },
  {
    quote:
      "The pastries are as impressive as the coffee. Everything is baked fresh daily, and you can taste the quality in every bite. Their almond croissant paired with a cappuccino is my idea of heaven.",
    name: "Lisa Thompson",
    title: "Local Food Blogger",
  },
];

function TestimonialCard() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10 text-white">
        Hear Our Harmony: Voices of Success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
