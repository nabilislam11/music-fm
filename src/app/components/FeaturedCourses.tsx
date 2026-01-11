"use client";
import courseData from "@/app/data/music_courses.json";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Link from "next/link";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}
const FeaturedCourses = () => {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-6 ">
      <div className="flex flex-col gap-2 items-center justify-center">
        <p className="text-[15px] font-medium text-teal-500 ">
          FEATURED COURSES
        </p>
        <h2 className="font-bold text-2xl  text-white  ">
          Learn With the Best
        </h2>
      </div>
      <div className=" py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center ">
        {featuredCourses.map((course: Course) => (
          <div className="flex justify-center" key={course.id}>
            <div className=" py-[20px] text-center">
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {course.title}
                </p>
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {course.description}
                </p>
                <Link href={`/courses${course.slug}`}>Learn More</Link>
              </BackgroundGradient>
            </div>
          </div>
        ))}
      </div>
      <div className=" text-center ">
        <button className=" py-2 px-3.5 bg-white text-black rounded-md">
          View All Courses
        </button>
      </div>
    </div>
  );
};

export default FeaturedCourses;
