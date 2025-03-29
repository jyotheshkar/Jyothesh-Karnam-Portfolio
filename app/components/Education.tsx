"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { twMerge } from "tailwind-merge";

// MUI icons
import SchoolIcon from "@mui/icons-material/School";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

// Images (adjust paths if needed)
import KeeleImage from "../images/Keeleimage.jpg";
import CityImage from "../images/city.jpg";

/**
 * TracingBeam: Renders the SVG path that grows/shrinks as you scroll.
 */
function TracingBeam({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (!contentRef.current) return;
    const updateHeight = () => {
      setSvgHeight(contentRef.current?.offsetHeight ?? 0);
    };
    updateHeight();

    const observer = new ResizeObserver(() => {
      updateHeight();
    });
    observer.observe(contentRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    }
  );

  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    }
  );

  return (
    <motion.div
      ref={ref}
      className={twMerge(
        "relative w-full max-w-4xl mx-auto h-full px-4 sm:px-6 md:px-8",
        className
      )}
    >
      <div className="absolute -left-0 right-4 md:-left-20 top-3">
        <motion.div className="ml-[27px] h-4 w-4 rounded-full border border-neutral-200 shadow-sm flex items-center justify-center">
          <motion.div className="h-2 w-2 rounded-full border border-neutral-300 bg-white" />
        </motion.div>

        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="ml-4 block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${
              svgHeight * 0.5
            } l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
          />
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${
              svgHeight * 0.5
            } l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
          />
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#18CCFC" stopOpacity="0" />
              <stop stopColor="#18CCFC" />
              <stop offset="0.325" stopColor="#6344F5" />
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>

      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
}

/**
 * TracingBeamDemo: The content that goes inside TracingBeam
 * (two sections for Keele + City with images, etc.)
 */
function TracingBeamDemo() {
  const dummyContent = [
    {
      description: (
        <>
          <div className="text-center my-8">
            <h1 className="text-3xl font-lightbold mb-2 text-white">
              Keele University
            </h1>
            <h2 className="text-xl font-lightbold text-gray-300 mb-4">
              Master of Science in Computer Science
            </h2>
            <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-center text-gray-300 mx-4 sm:mx-0">
              <div className="flex items-center">
                <CalendarTodayIcon className="mr-2 text-white" />
                <span>2023 – 2024</span>
              </div>
              <div className="flex items-center mt-2 sm:mt-0">
                <LocationOnIcon className="mr-2 text-white" />
                <span>Staffordshire, UK</span>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center mb-8">
            <img
              src={KeeleImage.src}
              alt="Keele University"
              className="rounded-lg shadow-md max-w-full h-auto"
            />
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-">Course Modules:</h3>
            <ul className="list-disc list-outside pl-5 text-gray-200 font-light mt-2">
              <li>System Design & Programming</li>
              <li>Computer Networks</li>
              <li>Mathematics for AI & Data Science</li>
              <li>Advanced Programming in Python</li>
              <li>Data Analytics & Databases</li>
              <li>Software Engineering</li>
              <li>Collaborative Application Development</li>
              <li>Web Technologies & Security</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white">Dissertation:</h3>
            <p className="text-gray-200 font-light mt-2">
              “Time-series neural network software suite and app development for
              dairy herd monitoring”.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Achievements:</h3>
            <p className="text-gray-200 mt-2 font-light">
              <strong>Grade:</strong> Distinction
            </p>
          </div>
        </>
      ),
    },
    {
      description: (
        <>
          <div className="text-center my-8">
            <h1 className="text-3xl font-lightbold mb-2 text-white">
              City Engineering College
            </h1>
            <h2 className="text-xl font-lightbold text-gray-300 mb-4">
              BSc Electronics and Communication Engineering
            </h2>
            <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-center text-gray-300 mx-4 sm:mx-0">
              <div className="flex items-center">
                <CalendarTodayIcon className="mr-2 text-white" />
                <span>2017 – 2022</span>
              </div>
              <div className="flex items-center mt-2 sm:mt-0">
                <LocationOnIcon className="mr-2 text-white" />
                <span>Bangalore, India</span>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center mb-8">
            <img
              src={CityImage.src}
              alt="City Engineering College"
              className="rounded-lg shadow-md max-w-full h-auto"
            />
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white">Course Modules:</h3>
            <ul className="list-disc list-outside pl-5 text-gray-200 font-light mt-2">
              <li>Electromagnetic Waves</li>
              <li>Power Electronics</li>
              <li>Python</li>
              <li>Programming in C & Data Structures</li>
              <li>Computer Networks</li>
              <li>Information Theory & Coding</li>
              <li>VLSI</li>
              <li>VHDL</li>
              <li>Digital Signal Processing & more</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Achievements:</h3>
            <p className="text-gray-200 font-light mt-2">
              <strong>Grade:</strong> First Class
            </p>
          </div>
        </>
      ),
    },
  ];

  return (
    <TracingBeam className="pl-14 pr-8">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative text-white">
        {dummyContent.map((item, index) => (
          <div
            key={`content-${index}`}
            className="mb-10 bg-black shadow-gray-900 rounded-lg shadow-2xl p-6"
          >
            {item.description}
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

/**
 * The main Education component
 */
export default function Education() {
  return (
    <div id="BodyB" className="mt-28 mb-36">
      <div className="flex items-center justify-center mb-24">
        <SchoolIcon
          className="text-white mr-4"
          fontSize="inherit"
          style={{ fontSize: "3rem" }}
        />
        <h1
          className="text-gray-300 font-lightbold text-4xl md:text-4xl"
          style={{ lineHeight: "4rem" }}
        >
          Education
        </h1>
      </div>
      <TracingBeamDemo />
    </div>
  );
}
