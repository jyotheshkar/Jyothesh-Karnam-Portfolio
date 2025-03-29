"use client";
import React from "react";

// MUI Icons
import WorkIcon from "@mui/icons-material/Work";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EngineeringIcon from "@mui/icons-material/Engineering";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Images (adjust paths or names if yours differ)
import image4 from "../images/tands.png";
import image5 from "../images/edu-lettings.jpeg";
import image6 from "../images/flione.png";

// import bgOne from "../images/expOne.jpg";
// import bgTwo from "../images/ExpTwo.jpg";
// import bgThree from "../images/ExpThree.jpg";

import bgOne from "../images/expOne.jpg";
import bgTwo from "../images/ExpTwo.jpg";
import bgThree from "../images/ExpThree.jpg";

// Experience data
const experiences = [
  {
    company: "Thrive & Shine",
    role: "Web Developer",
    duration: "Sep 2024 – Dec 2024",
    jobType: "Internship",
    location: "Stoke-On-Trent, United Kingdom",
    responsibilities:
      "Redesigned the website using React.js for enhanced visuals and responsiveness. Developed an AI-powered quiz utilizing NLP and Deep Q-Networks to improve user interaction.",
    skills:
      "Software Development, React.js, Machine Learning, Reinforcement Learning, NLP Embeddings, Pytorch",
    logo: image4,
    website: "https://thrive-and-shine-aee10.web.app/",
    linkedin: "https://www.linkedin.com/company/thriveandshine/",
  },
  {
    company: "Edu-Lettings",
    role: "Recreational Assistant",
    duration: "April 2024 – Present",
    jobType: "Part Time",
    location: "Stoke-On-Trent, United Kingdom",
    responsibilities:
      "Organize and facilitate recreational activities while managing facility bookings. Engage with clients to ensure smooth operations and enhance their overall experience.",
    skills:
      "Time Management, Client Services, Facility Maintenance, Client Interaction, Client Satisfaction",
    logo: image5,
    website: "https://www.edu-lettings.org/",
    linkedin: "https://www.linkedin.com/company/edu-lettings/",
  },
  {
    company: "Flione IT",
    role: "Associate Web Developer",
    duration: "August 2022 – July 2023",
    jobType: "Full Time",
    location: "Bangalore, India",
    responsibilities:
      "Collaborated with a senior developer to manage and deliver client projects in a startup environment. Enhanced company value through effective project management and client communication.",
    skills:
      "Software Development, Project Management, Client Communication, Task Prioritization, Deadline Management, Collaborative Leadership",
    logo: image6,
    website: "https://flioneit.com/",
    linkedin: "https://www.linkedin.com/company/flione-it/",
  },
];

// Background images for each card
const backgrounds = [bgOne, bgTwo, bgThree];

// Optional array of colors for the logo background – adjust if needed
const logoBgColors = ["bg-black", "bg-red-500", "bg-green-500"];

export default function Experience() {
  return (
    <div id="BodyC" className="mt-48  p-4">
      {/* Header */}
      <div className="flex items-center justify-center mb-24">
        <WorkIcon
          className="text-white mr-4"
          fontSize="inherit"
          style={{ fontSize: "3rem" }}
        />
        <h1 className="text-gray-300 font-lightbold text-4xl md:text-4xl text-center">
          Experience
        </h1>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center mb-28 gap-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="max-w-md shadow-xl rounded-xl text-black flex flex-col"
            style={{
              backgroundImage: `url(${backgrounds[index].src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Top empty space for the background image */}
            <div className="rounded-t-lg h-32 overflow-hidden" />

            {/* Main content box */}
            <div className="my-2 mx-4 rounded-lg bg-black/80 text-white px-6 py-4 flex-grow">
              {/* Logo in a circular container */}
              <div
                className={`mx-auto w-24 h-24 relative -mt-12 border-2 border-black rounded-full overflow-hidden ${logoBgColors[index]}`}
              >
                <img
                  className="object-cover object-center h-24 w-24"
                  src={exp.logo.src}
                  alt={`${exp.company} Logo`}
                />
              </div>

              <div className="text-center mb-4 mt-4 px-4">
                <h2 className="font-semibold text-xl text-white">
                  {exp.company}
                </h2>
                <p className="text-white">{exp.role}</p>
              </div>

              {/* Details: Duration, jobType, location */}
              <div className="px-5 py-2 flex flex-col items-center space-y-2">
                <div className="flex justify-between w-full px-4">
                  <div className="flex items-center text-sm text-gray-200">
                    <CalendarTodayIcon className="mr-1 text-white" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-200">
                    <WorkIcon className="mr-1 text-white" />
                    <span>{exp.jobType}</span>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-200 justify-center">
                  <LocationOnIcon className="mr-1 text-white" />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Responsibilities & Skills */}
              <p className="mb-4 mt-6 text-justify font-light text-sm">
                {exp.responsibilities}
              </p>
              <p className="text-justify font-light text-sm">
                <span className="font-semibold">Skills Gained:</span>{" "}
                {exp.skills}
              </p>
            </div>

            {/* Buttons (Website / LinkedIn) */}
            <div className="flex justify-center px-6 py-4">
              <a href={exp.website} target="_blank" rel="noopener noreferrer">
                <button className="flex items-center justify-center bg-black border-2 border-black p-2 rounded-full transition-transform duration-200 hover:scale-110">
                  <LanguageIcon className="text-white" />
                </button>
              </a>
              <a href={exp.linkedin} target="_blank" rel="noopener noreferrer">
                <button className="flex items-center justify-center bg-black border-2 border-black ml-4 p-2 rounded-full transition-transform duration-200 hover:scale-110">
                  <LinkedInIcon className="text-white" />
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
