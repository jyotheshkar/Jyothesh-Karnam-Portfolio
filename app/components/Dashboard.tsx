"use client";
import React, { useEffect, useState } from "react";
import type { FC } from "react";
import { Cursor } from "react-simple-typewriter";

import { motion } from "framer-motion";
import { Link } from "react-scroll";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import InsightsIcon from "@mui/icons-material/Insights";
import WorkIcon from "@mui/icons-material/Work";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic"; // Using AutoAwesomeMosaicIcon as Amazon icon

// Import your image from the `app/images` folder:
import image1 from "../images/mainphoto.png";

// --- Typewriter component (inlined) ---
const Typewriter: FC = () => {
  const sentences = [
    "Hey, I am Jyothesh Karnam",
    "I am driven to build scalable and maintainable AI/ML software applications",
    "I have the right to work in the United Kingdom",
  ];

  const [currentSentence, setCurrentSentence] = useState("");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const typeInterval = setInterval(() => {
      if (typing) {
        if (charIndex < sentences[sentenceIndex].length) {
          setCurrentSentence((prev) => prev + sentences[sentenceIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setTyping(false);
          // done typing - wait, then move on
          setTimeout(() => {
            setTyping(true);
            setSentenceIndex((prev) => (prev + 1) % sentences.length);
            setCurrentSentence("");
            setCharIndex(0);
          }, 1000);
        }
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [charIndex, sentenceIndex, typing, sentences]);

  return (
    <div className="text-center font-lightbold text-lg mt-4 px-4">
      <span className="text-gray-200">{currentSentence}</span>
      {typing && <Cursor />}
    </div>
  );
};

// --- MAIN DASHBOARD COMPONENT ---
const Dashboard: FC = () => {
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center px-4 md:px-10">
      {/* Profile Image */}
      <div className="relative w-[150px] h-[150px] md:w-[250px] md:h-[250px]">
        <div className="inset-6">
          <img
            src={image1.src}
            alt="Profile"
            className="w-full h-full rounded-full border-2 border-black shadow-gray-800 shadow-2xl"
          />
        </div>
      </div>

      {/* Title */}
      <div className="mt-32 text-white font-light text-xl md:text-2xl text-center">
        Machine learning Software Engineer
      </div>

      {/* NAV BUTTONS (mobile layout) */}
      <div className="block md:hidden mt-8 space-y-4">
        {/* Row 1 (3 items) */}
        <div className="flex justify-center space-x-6">
          <Link to="BodyB" smooth duration={1000} spy offset={-70}>
            <motion.button
              className="flex items-center text-gray-300 hover:text-white transition duration-300 justify-center"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
            >
              <SchoolIcon
                fontSize="inherit"
                style={{ fontSize: "2rem" }}
                className="text-black bg-white p-1 rounded-full mr-2"
              />
              Education
            </motion.button>
          </Link>

          <Link to="BodyAward" smooth duration={1000} spy offset={-70}>
            <motion.button
              className="flex items-center text-gray-300 hover:text-white transition duration-300 justify-center"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
            >
              <EmojiEventsIcon
                fontSize="inherit"
                style={{ fontSize: "2rem" }}
                className="text-black bg-white p-1 rounded-full mr-2"
              />
              Awards
            </motion.button>
          </Link>

          <Link to="BodyC" smooth duration={1500} spy offset={-70}>
            <motion.button
              className="flex items-center text-gray-300 hover:text-white transition duration-300 justify-center"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
            >
              <WorkIcon
                fontSize="inherit"
                style={{ fontSize: "2rem" }}
                className="text-black bg-white p-1 rounded-full mr-2"
              />
              Experience
            </motion.button>
          </Link>
        </div>

        {/* Row 2 (2 items) */}
        <div className="flex justify-center space-x-6">
          <Link to="BodyD" smooth duration={1800} spy offset={-70}>
            <motion.button
              className="flex items-center text-gray-300 hover:text-white transition duration-300 justify-center"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
            >
              <CodeIcon
                fontSize="inherit"
                style={{ fontSize: "2rem" }}
                className="text-black bg-white p-1 rounded-full mr-2"
              />
              Skills
            </motion.button>
          </Link>

          <Link to="BodyE" smooth duration={2000} spy offset={-70}>
            <motion.button
              className="flex items-center text-gray-300 hover:text-white transition duration-300 justify-center"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
            >
              <InsightsIcon
                fontSize="inherit"
                style={{ fontSize: "2rem" }}
                className="text-black bg-white p-1 rounded-full mr-2"
              />
              Projects
            </motion.button>
          </Link>
        </div>

        {/* New row for Amazon Psychometric Results */}
        <div className="flex justify-center">
          <a
            href="https://reports.una-arcticshores.com/?reportId=338d5144-f889-4981-9ec9-e5d40399e1fe&playerKey=nxfsu729&slug=amazon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="flex items-center text-gray-300 hover:text-white transition duration-300 justify-center"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
            >
              <AutoAwesomeMosaicIcon
                fontSize="inherit"
                style={{ fontSize: "2rem" }}
                className="text-black bg-white p-1 rounded-full mr-2"
              />
              Amazon Psychometric Results
            </motion.button>
          </a>
        </div>
      </div>

      {/* NAV BUTTONS (desktop layout) */}
      <div className="hidden md:flex flex-col mt-8 space-y-4 justify-center items-center">
        {/* First row: 4 buttons */}
        <div className="flex space-x-16">
          <Link to="BodyB" smooth duration={1000} spy offset={-70}>
            <motion.button
              className="flex items-center text-gray-300 hover:text-white transition duration-300 justify-center"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
            >
              <SchoolIcon
                fontSize="inherit"
                style={{ fontSize: "2rem" }}
                className="text-black bg-white p-1 rounded-full mr-4"
              />
              Education
            </motion.button>
          </Link>

          <Link to="BodyAward" smooth duration={1000} spy offset={-70}>
            <motion.button
              className="flex items-center text-gray-300 hover:text-white transition duration-300 justify-center"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
            >
              <EmojiEventsIcon
                fontSize="inherit"
                style={{ fontSize: "2rem" }}
                className="text-black bg-white p-1 rounded-full mr-4"
              />
              Awards
            </motion.button>
          </Link>

          <Link to="BodyC" smooth duration={1500} spy offset={-70}>
            <motion.button
              className="flex items-center text-gray-300 hover:text-white transition duration-300 justify-center"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
            >
              <WorkIcon
                fontSize="inherit"
                style={{ fontSize: "2rem" }}
                className="text-black bg-white p-1 rounded-full mr-4"
              />
              Experience
            </motion.button>
          </Link>

          <Link to="BodyD" smooth duration={1800} spy offset={-70}>
            <motion.button
              className="flex items-center text-gray-300 hover:text-white transition duration-300 justify-center"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
            >
              <CodeIcon
                fontSize="inherit"
                style={{ fontSize: "2rem" }}
                className="text-black bg-white p-1 rounded-full mr-4"
              />
              Skills
            </motion.button>
          </Link>
        </div>

        {/* Second row: Projects & Amazon Psychometric Results */}
        <div className="flex space-x-16">
          <Link to="BodyE" smooth duration={2000} spy offset={-70}>
            <motion.button
              className="flex items-center text-gray-300 hover:text-white transition duration-300 justify-center"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
            >
              <InsightsIcon
                fontSize="inherit"
                style={{ fontSize: "2rem" }}
                className="text-black bg-white p-1 rounded-full mr-4"
              />
              Projects
            </motion.button>
          </Link>

          <a
            href="https://reports.una-arcticshores.com/?reportId=338d5144-f889-4981-9ec9-e5d40399e1fe&playerKey=nxfsu729&slug=amazon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="flex items-center text-gray-300 hover:text-white transition duration-300 justify-center"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
            >
              <AutoAwesomeMosaicIcon
                fontSize="inherit"
                style={{ fontSize: "2rem" }}
                className="text-black bg-white p-1 rounded-full mr-4"
              />
              Amazon Psychometric Results
            </motion.button>
          </a>
        </div>
      </div>

      {/* Typewriter */}
      <div className="mt-4 mb-20 text-white text-center">
        <Typewriter />
      </div>
    </div>
  );
};

export default Dashboard;
