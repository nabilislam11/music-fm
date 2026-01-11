"use client";
import { cn } from "@/lib/utils";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function MusicTestimonialCard() {
  return (
    <>
      <div className="relative h-[40rem] w-full overflow-hidden bg-white dark:bg-black">
        {/* Grid background */}
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />

        {/* Fade / vignette effect */}
        <div className="pointer-events-none absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </>
  );
}

const testimonials = [
  {
    quote:
      "Learning music here completely changed how I understand rhythm and melody. The lessons feel personal, inspiring, and practical—every session pushes me to become better than yesterday.",
    name: "Aarav Sen",
    title: "Piano Student",
  },
  {
    quote:
      "As a guitarist, I struggled with consistency and technique. This school helped me build strong fundamentals while still letting me express my own style and creativity.",
    name: "Nabil Rahman",
    title: "Guitar Enthusiast",
  },
  {
    quote:
      "The vocal training sessions boosted my confidence massively. I now understand breath control, pitch, and stage presence in a way I never did before.",
    name: "Sofia Ahmed",
    title: "Vocal Training Student",
  },
  {
    quote:
      "What I love most is the feedback system. Every performance is followed by constructive guidance that actually helps you grow instead of just pointing out mistakes.",
    name: "Rohan Mehta",
    title: "Music Production Learner",
  },
  {
    quote:
      "This isn’t just a music school—it’s a creative community. Collaborating with other students and mentors has opened doors to opportunities I never imagined.",
    name: "Lina Chowdhury",
    title: "Independent Music Artist",
  },
];
