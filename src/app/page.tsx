import FeaturedCourses from "./components/FeaturedCourses";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]  ">
        <h2 className="text-center font-black">Music Fm</h2>
        <HeroSection />
        <FeaturedCourses />
      </main>
    </>
  );
}
