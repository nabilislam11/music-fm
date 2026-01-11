import FeaturedCourses from "./components/FeaturedCourses";
import HeroSection from "./components/HeroSection";
import Instructors from "./components/Instructors";
import MusicContend from "./components/MusicContend";
import MusicTestimonialCard from "./components/MusicTesimonialCard";
import UpcomingWebinar from "./components/UpcomingWebinar";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] px-4 ">
        <HeroSection />
        <FeaturedCourses />
        <MusicContend />
        <MusicTestimonialCard />
        <UpcomingWebinar />
        <Instructors />
      </main>
    </>
  );
}
