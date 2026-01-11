import Link from "next/link";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/moving-border";
const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] z-10 w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 ">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 ">
        Master the art of music
      </h1>
      <p className="mt-4 font-normal text-base text-[16px] md:text-lg text-neutral-300 max-w-lg mx-auto">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, libero
        debitis corporis, nostrum, in pariatur incidunt deleniti maxime autem
        velit fuga laborum corrupti quia mollitia earum suscipit! Soluta quasi
        et provident obcaecati, iusto sed, suscipit non nobis cupiditate magni
        quo voluptatum sunt! Expedita, facilis corporis? Ex facilis facere earum
        architecto.
      </p>
      <div className="mt-4 py-2 px-3 rounded-lg ">
        <Link href={"/courses"}>
          <Button>Courses</Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
