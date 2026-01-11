"use client";
import Link from "next/link";
import { HoverEffect } from "@/components/ui/card-hover-effect";
const UpcomingWebinar = () => {
  const upComingWebinar = [
    {
      title: "Stripe",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];
  return (
    <div className="p-12 bg-gray-900 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6  ">
        <div className="flex flex-col gap-2 items-center justify-center">
          <p className="text-[15px] font-medium text-teal-500 ">
            FEATURED COURSES
          </p>
          <h2 className="font-bold text-2xl  text-white  ">
            Learn With the Best
          </h2>
        </div>
        <div className="">
          {" "}
          <HoverEffect items={upComingWebinar} />
        </div>
        <div className="mt-10 text-center ">
          <button className=" py-2 px-3.5 bg-white text-black rounded-md">
            <Link href={"/"}>View All Courses</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWebinar;
