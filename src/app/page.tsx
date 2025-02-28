import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import { Instructors } from "@/components/Instructors";
import TestimonialCard from "@/components/TestimonialCard";
import UpcomingCoffes from "@/components/UpcomingCoffes";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <TestimonialCard/>
      <UpcomingCoffes/>
      <Instructors/>
    </main>
  );
}
