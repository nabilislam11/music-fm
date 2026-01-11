"use client";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
    description:
      "Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
  },
  {
    title: "Learn from Industry Professionals Who Live Music",
    description:
      "Our instructors are active musicians and industry experts who bring real-world experience into every lesson. From stage performance to studio techniques, you’ll gain insights that go beyond textbooks and tutorials.",
  },
  {
    title: "Practice, Perform, and Grow with Confidence",
    description:
      "We believe true learning happens through practice and performance. Regular live sessions, feedback-driven improvement, and performance opportunities help you build confidence and stage presence naturally.",
  },
  {
    title: "Flexible Learning Designed for Your Lifestyle",
    description:
      "Whether you’re a student, a working professional, or a hobbyist, our flexible schedules and adaptive learning paths fit seamlessly into your routine—so your passion for music never has to pause.",
  },
  {
    title: "A Supportive Community That Inspires Creativity",
    description:
      "Join a vibrant community of fellow learners and mentors who share your love for music. Collaborate, create, and grow together in an environment that celebrates creativity and individuality.",
  },
];
export default function MusicContend() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
