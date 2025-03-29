"use client";
import React, { useEffect } from "react";
import type { FC } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// MUI icon
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

// Images (adjust paths if needed)
import goldbg from "../images/rightgold.jpg";
import city from "../images/award.jpg";

const Awards: FC = () => {
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  // Start animations when in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      id="BodyAward"
      className="flex flex-col items-center px-4 py-12"
    >
      {/* Header Section */}
      <div className="flex items-center justify-center mb-24">
        <EmojiEventsIcon
          className="text-white mr-4"
          fontSize="inherit"
          style={{ fontSize: "3rem" }}
        />
        <h1
          className="text-gray-300 font-lightbold text-4xl"
          style={{ lineHeight: "4rem" }}
        >
          Awards
        </h1>
      </div>

      {/* Single Card */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-[70rem] gap-2">
        {/* Left image */}
        <div className="w-full md:w-[24rem]">
          <img
            src={city.src}
            alt="Award Ceremony"
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>

        {/* Right side: background image + text */}
        <div className="flex flex-col items-center w-full md:w-auto">
          <div
            // Parent has rounding/overflow and relative positioning
            className="w-full md:w-[24rem] h-[16rem] rounded-2xl overflow-hidden relative"
          >
            {/* Child is absolutely positioned to maintain the parent's border radius */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${goldbg.src})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
          </div>

          <p className="italic text-gray-300 mt-2 leading-normal text-center max-w-md mx-auto">
            With great pleasure, I am thrilled to share that I have been recognized with{" "}
            <span className="text-[#FFD700] px-1 rounded">
              the Best Performance in the MSc Computer Science Programme.
            </span>{" "}
            This accomplishment, awarded on January 22, 2025, highlights my consistent
            effort, passion for learning, and proven academic abilities.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Awards;
