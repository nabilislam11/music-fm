"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  // ১. স্টাইলগুলো স্টোর করার জন্য স্টেট (শুরুতে খালি অ্যারে)
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    []
  );

  useEffect(() => {
    const meteorCount = number || 70;

    // ২. আপনার লজিকটি এখানে নিয়ে আসা হয়েছে (Client Side Only)
    const styles = new Array(meteorCount).fill(true).map((_, idx) => {
      // আপনার দেওয়া পজিশন ক্যালকুলেশন লজিক
      const position = idx * (800 / meteorCount) - 400;

      return {
        top: "-40px",
        left: position + "px",
        animationDelay: Math.random() * 5 + "s",
        animationDuration: Math.floor(Math.random() * (10 - 5) + 5) + "s",
      };
    });

    setMeteorStyles(styles);
  }, [number]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {meteorStyles.map((style, idx) => (
        <span
          key={"meteor" + idx}
          // ৩. স্টাইল অবজেক্টটি এখানে বসিয়ে দিলাম
          style={style}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
            "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
            className
          )}
        ></span>
      ))}
    </motion.div>
  );
};
