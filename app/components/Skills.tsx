"use client";
import React from "react";
import CodeIcon from "@mui/icons-material/Code"; // Still in use for the header icon
import htmlIcon from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import SQL from "../images/sqll.png";
import python from "../images/python.png";
import ReactIcon from "../images/react.png";
import NextIcon from "../images/next.png";
import Tailwind from "../images/tail.png";
import pytorch from "../images/pytorch.png";
import TensorFlow from "../images/tensorflow.png";
import Cuda from "../images/cuda.png";
import Flask from "../images/flask.png";
import bedrock from "../images/AWS.png";
import IAM from "../images/IAM.png"; // NEW: IAM PNG
import OpenSearch from "../images/OpenSearch.png"; // NEW: OpenSearch PNG




export default function Experience() {
  return (
    <div id="BodyD" className="mt-48 p-24">
      {/* Header */}
      <div className="flex items-center justify-center mb-24">
        <CodeIcon
          fontSize="inherit"
          style={{ fontSize: "3rem" }}
          className="text-black bg-white p-1 rounded-full mr-4"
        />
        <h1 className="text-gray-300 font-lightbold text-4xl md:text-4xl text-center">
          Skills
        </h1>
      </div>

      {/* 3 Cards Layout (responsive) */}
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {/* Left side: two stacked cards */}
        <div className="flex flex-col gap-8 w-full md:w-1/2">
          {/* Card 1 */}
          <div className="bg-black border text-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl border-b pb-3 text-center font-lightbold mb-2">
              Programming Languages
            </h2>

            {/* 
              Responsive grid for icons:
              - 2 columns by default
              - 3 columns on >=sm (≥640px)
              - 5 columns on >=md (≥768px)
            */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center p-6">
              <div className="flex flex-col items-center">
                <img
                  src={htmlIcon.src}
                  alt="HTML Icon"
                  className="w-12 h-12 mb-1"
                />
                <span>HTML</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={css.src}
                  alt="CSS Icon"
                  className="w-12 h-12 mb-1"
                />
                <span>CSS</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={js.src}
                  alt="JavaScript Icon"
                  className="w-12 h-12 mb-1 "
                />
                <span>JavaScript</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={SQL.src}
                  alt="SQL Icon"
                  className="w-12 h-12 mb-1"
                />
                <span>SQL</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={python.src}
                  alt="Python Icon"
                  className="w-12 h-12 mb-1"
                />
                <span>Python</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-black border text-white p-6 rounded-xl shadow-md md:h-72 h-auto">
            <h2 className="text-xl font-lightbold border-b text-center mb-2 pb-3">
              Frameworks
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center p-6">
              <div className="flex flex-col items-center">
                <img
                  src={ReactIcon.src}
                  alt="React Icon"
                  className="w-12 h-12 mb-1"
                />
                <span>React.js</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={NextIcon.src}
                  alt="Next.js Icon"
                  className="w-12 h-12 mb-1 bg-white rounded-full"
                />
                <span>Next.js</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={Tailwind.src}
                  alt="Tailwind Icon"
                  className="w-12 h-12 mb-1"
                />
                <span>TailwindCSS</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={pytorch.src}
                  alt="PyTorch Icon"
                  className="w-12 h-12 mb-1"
                />
                <span>PyTorch</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={TensorFlow.src}
                  alt="TensorFlow Icon"
                  className="w-12 h-12 mb-1"
                />
                <span>TensorFlow</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={Cuda.src}
                  alt="CUDA Icon"
                  className="w-12 h-12 mb-1"
                />
                <span>CUDA</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={Flask.src}
                  alt="Flask Icon"
                  className="w-12 h-12 mb-1 rounded-full"
                />
                <span>Flask</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side: one larger card (AWS Cloud Skills) */}
        <div className="w-full md:w-1/2">
          <div className="bg-black border text-white p-6 rounded-xl shadow-md h-full">
            <h2 className="text-xl font-lightbold border-b text-center mb-2 pb-3">
              AWS Cloud Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center p-6">

              {/* 1) IAM - using IAM.png */}
              <div className="flex flex-col items-center">
                <img
                  src={IAM.src}
                  alt="IAM Icon"
                  className="w-12 h-12 mb-1"
                />
                <span>IAM</span>
              </div>

              {/* 2) S3 */}
              <div className="flex flex-col items-center">
                <svg
                  className="w-12 h-12 mb-1"
                  height="40"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      x1="0%"
                      y1="100%"
                      x2="100%"
                      y2="0%"
                      id="Arch_Amazon-S3-Standard_32_svg__a"
                    >
                      <stop stopColor="#1B660F" offset="0%" />
                      <stop stopColor="#6CAE3E" offset="100%" />
                    </linearGradient>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <path
                      d="M0 0h40v40H0z"
                      fill="url(#Arch_Amazon-S3-Standard_32_svg__a)"
                    ></path>
                    <path
                      d="M30.074 22.671l.2-1.301c1.703 1.016 1.735 1.444 1.732 1.46-.004.003-.308.24-1.932-.159zm-10.185-3.733a.995.995 0 01-.992.994.994.994 0 010-1.99c.547 0 .992.448.992.996zm7.869 12.33c0 .123-.495.31-.93.478l-.445.17c-.475.189-1.037.359-1.669.504-1.576.366-3.75.585-5.817.585-5.503 0-8.435-1.009-8.439-1.798L8.256 13.57c1.899 1.452 5.8 2.382 10.641 2.382 4.63 0 9.364-.897 11.584-2.472l-1.366 8.92c-2.871-.874-6.392-2.56-8.132-3.398l-.105-.05.002-.015c0-1.098-.89-1.99-1.983-1.99a1.988 1.988 0 00-1.983 1.99c0 1.097.89 1.99 1.983 1.99.733 0 1.367-.407 1.71-1.002 1.806.868 5.41 2.591 8.356 3.468l-1.205 7.874zm-8.86-23.273c6.676 0 11.857 1.86 11.894 3.465l-.024.148c-.27 1.579-5.352 3.35-11.87 3.35-6.388 0-10.71-1.725-10.89-3.375l-.015-.12c.023-1.678 4.397-3.468 10.904-3.468zm11.538 12.318l1.344-8.76c.001-.026.006-.05.006-.076C31.786 8.674 25.233 7 18.897 7 12.003 7 7 8.883 7 11.477l.003.061 2.468 19.73c0 2.6 7.852 2.732 9.426 2.732 2.137 0 4.394-.228 6.04-.61a12.74 12.74 0 001.81-.548l.432-.167c.844-.321 1.57-.598 1.564-1.331l1.18-7.684c.655.158 1.197.24 1.63.24.58-.001.973-.143 1.21-.428a.982.982 0 00.219-.832c-.127-.681-.923-1.405-2.546-2.327z"
                      fill="#FFF"
                    ></path>
                  </g>
                </svg>
                <span>S3</span>
              </div>

              {/* 3) EC2 */}
              <div className="flex flex-col items-center">
                <svg
                  className="w-12 h-12 mb-1"
                  height="40"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      x1="0%"
                      y1="100%"
                      x2="100%"
                      y2="0%"
                      id="Arch_Amazon-EC2_32_svg__a"
                    >
                      <stop stopColor="#C8511B" offset="0%" />
                      <stop stopColor="#F90" offset="100%" />
                    </linearGradient>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <path
                      d="M0 0h40v40H0z"
                      fill="url(#Arch_Amazon-EC2_32_svg__a)"
                    ></path>
                    <path
                      d="M26.052 27L26 13.948 13 14v13.052L26.052 27zM27 14h2v1h-2v2h2v1h-2v2h2v1h-2v2h2v1h-2v2h2v1h-2v.052a.95.95 0 01-.948.948H26v2h-1v-2h-2v2h-1v-2h-2v2h-1v-2h-2v2h-1v-2h-.052a.95.95 0 01-.948-.948V27h-2v-1h2v-2h-2v-1h2v-2h-2v-1h2v-2h-2v-1h2v-2h-2v-1h2v-.052a.95.95 0 01.948-.948H13v-2h1v2h2v-2h1v2h2v-2h1v2h2v-2h1v2h.052a.95.95 0 01.948.948V14zm-6 19H7V19h2v-1H7.062C6.477 18 6 18.477 6 19.062v13.876C6 33.523 6.477 34 7.062 34h13.877c.585 0 1.061-.477 1.061-1.062V31h-1v2zM34 7.062v13.876c0 .585-.476 1.062-1.061 1.062H30v-1h3V7H19v3h-1V7.062C18 6.477 18.477 6 19.062 6h13.877C33.524 6 34 6.477 34 7.062z"
                      fill="#FFF"
                    ></path>
                  </g>
                </svg>
                <span>EC2</span>
              </div>

              {/* 4) API Gateway */}
              <div className="flex flex-col items-center">
                <svg
                  className="w-12 h-12 mb-1"
                  height="40"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      x1="0%"
                      y1="100%"
                      x2="100%"
                      y2="0%"
                      id="Arch_Amazon-API-Gateway_32_svg__a"
                    >
                      <stop stopColor="#4D27A8" offset="0%" />
                      <stop stopColor="#A166FF" offset="100%" />
                    </linearGradient>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <path
                      d="M0 0h40v40H0z"
                      fill="url(#Arch_Amazon-API-Gateway_32_svg__a)"
                    ></path>
                    <path
                      d="M19 28h2v-1h-2v1zM14 7.262l-7 3.04v20.055l7 2.439V7.262zM15 13v14h2v1h-2v5.5a.5.5 0 01-.664.472l-8-2.787A.5.5 0 016 30.713V9.974c0-.199.118-.379.301-.458l8-3.474A.5.5 0 0115 6.5V12h2v1h-2zm18-2.698l-7-3.04v25.534l7-2.439V10.302zm1-.328v20.739a.5.5 0 01-.336.472l-8 2.787a.507.507 0 01-.454-.064.5.5 0 01-.21-.408V28h-2v-1h2V13h-2v-1h2V6.5a.5.5 0 01.699-.458l8 3.474a.499.499 0 01.301.458zM19 13h2v-1h-2v1zm4.975 2.658l-.95-.316-3 9 .95.316 3-9zm-5.4-2.831l-1.795 1.31 1.564 1.583-.711.703-1.973-1.995a.498.498 0 01.061-.755l2.265-1.653.589.807zm.222-11.297L8 12.794v11.07H7V12.509a.5.5 0 01.245-.43l10.28-6.08.51.862zM34 14.864v12.52a.5.5 0 01-.251.433L23.478 33.73l-.499-.866L33 27.095V14.864h1z"
                      fill="#FFF"
                    ></path>
                  </g>
                </svg>
                <span>API Gateway</span>
              </div>

              {/* 5) CodeBuild */}
              <div className="flex flex-col items-center">
                <svg
                  className="w-12 h-12 mb-1"
                  height="40"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      x1="0%"
                      y1="100%"
                      x2="100%"
                      y2="0%"
                      id="Arch_Amazon-CodeBuild_32_svg__a"
                    >
                      <stop stopColor="#2E27AD" offset="0%" />
                      <stop stopColor="#527FFF" offset="100%" />
                    </linearGradient>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <path
                      d="M0 0h40v40H0z"
                      fill="url(#Arch_Amazon-CodeBuild_32_svg__a)"
                    ></path>
                    <path
                      d="M28.683 26.854l1.986-2a.503.503 0 000-.707l-1.986-2-.701.707 1.633 1.646-1.633 1.647.701.707zm-6.656 0l.701-.707-1.633-1.647 1.633-1.646-.701-.707-1.986 2a.503.503 0 000 .707l1.986 2zM33.259 11l-3.14-3h-.588l-2.977 3h6.705zm-5.132-3h-5.544l2.772 2.793L28.127 8zm-2.772 9.035L20.152 19h10.406l-5.203-1.965zM17.91 29H32.8v-9H17.91v9zm6.247-18l-2.773-2.792L18.614 11h5.543zm-6.78-.169L20.187 8h-6.32l3.51 2.831zM16 11l-3.53-2.845L9.301 11H16zm-2.06 1H9.853l4.087 3.433V12zm0 5.708l-4.723 4.759 4.723 3.966v-8.725zm0 10.903L9.022 33h4.918v-4.389zm-4.962 3.093l4.697-4.192-4.697-3.944v8.136zm0-10.411l4.724-4.759-4.724-3.966v8.725zm0-11.341L11.149 8H8.978v1.952zM6.993 12h.992V7h-.992v5zm27.972-.314a.496.496 0 01-.461.314H25.85v4.154l7.619 2.878-.001.004c.188.071.322.25.322.464v10c0 .277-.221.5-.496.5h-15.88a.498.498 0 01-.497-.5v-10c0-.214.135-.393.324-.464l-.001-.004 7.617-2.878V12h-9.925v21.5c0 .277-.221.5-.496.5H8.48a.498.498 0 01-.496-.5V13H6.496A.498.498 0 016 12.5v-6c0-.276.222-.5.496-.5h1.985c.275 0 .497.224.497.5V7H30.317c.127 0 .25.05.342.138l4.186 4a.499.499 0 01.12.548zM24.326 28.52l-.92-.372 2.647-6.667.92.372-2.647 6.667z"
                      fill="#FFF"
                    ></path>
                  </g>
                </svg>
                <span>CodeBuild</span>
              </div>

              {/* 6) CodeArtifact */}
              <div className="flex flex-col items-center">
                <svg
                  className="w-12 h-12 mb-1"
                  height="40"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      x1="0%"
                      y1="100%"
                      x2="100%"
                      y2="0%"
                      id="Arch_AWS-CodeArtifact_32_svg__a"
                    >
                      <stop stopColor="#2E27AD" offset="0%" />
                      <stop stopColor="#527FFF" offset="100%" />
                    </linearGradient>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <path
                      d="M0 0h40v40H0z"
                      fill="url(#Arch_AWS-CodeArtifact_32_svg__a)"
                    ></path>
                    <path
                      d="M18.082 22.997l2.95-6.591.912.408-2.95 6.59-.912-.407zm5.131-2.008l1.77-1.292-1.559-1.582.713-.702 1.966 1.995a.5.5 0 01-.062.755l-2.238 1.633-.59-.807zm-5.4-2.831l-1.795 1.31 1.564 1.583-.711.703-1.973-1.995a.498.498 0 01.061-.755l2.265-1.653.589.807zm.222-11.297L8 12.794v11.07H7V12.509a.5.5 0 01.245-.43l10.28-6.08.51.862zM34 14.864v12.52a.5.5 0 01-.251.433L23.478 33.73l-.499-.866L33 27.095V14.864h1zm-6 9.414l-7.54 4.288L13 24.194v-8.662l7.455-4.287L28 15.619v8.659zm1 .29v-9.237a.502.502 0 00-.249-.433l-8.044-4.663a.502.502 0 00-.5-.001l-7.956 4.575a.502.502 0 00-.251.434v9.237a.5.5 0 00.247.432l7.956 4.662a.496.496 0 00.5.004l8.044-4.575a.5.5 0 00.253-.434z"
                      fill="#FFF"
                    ></path>
                  </g>
                </svg>
                <span>CodeArtifact</span>
              </div>

              {/* 7) Lambda */}
              <div className="flex flex-col items-center">
                <svg
                  className="w-12 h-12 mb-1"
                  height="40"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      x1="0%"
                      y1="100%"
                      x2="100%"
                      y2="0%"
                      id="Arch_AWS-Lambda_32_svg__a"
                    >
                      <stop stopColor="#C8511B" offset="0%" />
                      <stop stopColor="#F90" offset="100%" />
                    </linearGradient>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <path
                      d="M0 0h40v40H0z"
                      fill="url(#Arch_AWS-Lambda_32_svg__a)"
                    ></path>
                    <path
                      d="M14.386 33H8.27l6.763-14.426 3.064 6.44L14.387 33zm1.085-15.798a.49.49 0 00-.442-.282h-.002a.493.493 0 00-.441.285l-7.538 16.08a.507.507 0 00.028.482c.09.145.247.233.415.233h7.206c.19 0 .363-.111.445-.286l3.944-8.489a.508.508 0 00-.002-.432l-3.613-7.591zM32.018 33h-5.882l-9.47-20.711a.491.491 0 00-.444-.289H12.37l.005-5h7.549l9.424 20.71c.08.177.256.29.446.29h2.224v5zm.49-6h-2.4L20.684 6.29a.492.492 0 00-.446-.29h-8.353a.496.496 0 00-.491.5l-.006 6c0 .132.052.259.144.354a.488.488 0 00.347.146h4.032l9.468 20.711c.08.176.254.289.445.289h6.686a.495.495 0 00.491-.5v-6c0-.276-.219-.5-.491-.5z"
                      fill="#FFF"
                    ></path>
                  </g>
                </svg>
                <span>Lambda</span>
              </div>

              {/* 8) CloudFront */}
              <div className="flex flex-col items-center">
                <svg
                  className="w-12 h-12 mb-1"
                  height="40"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      x1="0%"
                      y1="100%"
                      x2="100%"
                      y2="0%"
                      id="Arch_Amazon-CloudFront_32_svg__a"
                    >
                      <stop stopColor="#4D27A8" offset="0%" />
                      <stop stopColor="#A166FF" offset="100%" />
                    </linearGradient>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <path
                      d="M0 0h40v40H0z"
                      fill="url(#Arch_Amazon-CloudFront_32_svg__a)"
                    ></path>
                    <path
                      d="M28 26.497c0-.828-.673-1.5-1.5-1.5s-1.5.672-1.5 1.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5zm1 0a2.503 2.503 0 01-2.5 2.5 2.503 2.503 0 01-2.5-2.5 2.503 2.503 0 012.5-2.501c1.379 0 2.5 1.122 2.5 2.5zm-14-8.004c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5c0 .828.673 1.501 1.5 1.501s1.5-.673 1.5-1.5zm1 0a2.503 2.503 0 01-2.5 2.502 2.503 2.503 0 01-2.5-2.502 2.503 2.503 0 012.5-2.5c1.379 0 2.5 1.122 2.5 2.5zm4-8.003c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zm-1 0a2.503 2.503 0 012.5-2.501c1.379 0 2.5 1.122 2.5 2.501a2.503 2.503 0 01-2.5 2.501 2.503 2.503 0 01-2.5-2.5zm14 9.504c0-4.638-2.485-8.93-6.494-11.25-.721.145-1.416.344-2.28.657l-.34-.94a19.87 19.87 0 011.233-.405A12.95 12.95 0 0020 6.99c-.844 0-1.675.087-2.487.246.587.343 1.108.686 1.615 1.071l-.604.797c-.715-.543-1.457-1-2.426-1.51a13.016 13.016 0 00-9.007 10.963 17.602 17.602 0 013.116-.349l.025 1a16.32 16.32 0 00-3.218.389c-.004.132-.014.267-.014.398 0 4.335 2.146 8.33 5.676 10.736-.627-1.87-.95-3.638-.95-5.36 0-.985.169-1.793.347-2.649l.124-.602.981.193-.125.614c-.176.839-.327 1.562-.327 2.443 0 1.952.432 3.973 1.302 6.166a12.844 12.844 0 009.978.821c.502-.99.875-1.927 1.189-3.009l.961.28c-.228.787-.49 1.5-.801 2.21.804-.361 1.564-.81 2.279-1.33-.173-.426-.35-.85-.554-1.26l.895-.446c.171.343.313.701.463 1.054C31.335 27.377 33 23.83 33 19.995zm1 0c0 4.365-1.982 8.403-5.44 11.079a13.69 13.69 0 01-4.042 2.173c-1.44.5-2.961.754-4.518.754-2.3 0-4.584-.573-6.606-1.659A13.98 13.98 0 016.029 19.15C6.37 13.303 10.377 8.245 16 6.57c3.527-1.063 7.589-.632 10.842 1.208A14.015 14.015 0 0134 19.994zm-15.343-7.272l-.658-.753c-1.12.978-1.992 2.017-3.01 3.586l.838.544c.965-1.485 1.784-2.464 2.83-3.377zm-1.845 7.431c2.296.788 4.299 2.047 6.305 3.96l.69-.722c-2.113-2.018-4.233-3.347-6.67-4.184l-.325.946zm7.011-6.828c1.876 2.862 2.933 6.005 3.14 9.34l-.998.061c-.196-3.158-1.198-6.136-2.978-8.852l.836-.549z"
                      fill="#FFF"
                    ></path>
                  </g>
                </svg>
                <span>CloudFront</span>
              </div>

              {/* 9) DynamoDB */}
              <div className="flex flex-col items-center">
                <svg
                  className="w-12 h-12 mb-1"
                  height="40"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      x1="0%"
                      y1="100%"
                      x2="100%"
                      y2="0%"
                      id="Arch_Amazon-DynamoDB_32_svg__a"
                    >
                      <stop stopColor="#2E27AD" offset="0%" />
                      <stop stopColor="#527FFF" offset="100%" />
                    </linearGradient>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <path
                      d="M0 0h40v40H0z"
                      fill="url(#Arch_Amazon-DynamoDB_32_svg__a)"
                    ></path>
                    <path
                      d="M26.066 31.019v-2.866c-1.526 1.308-4.694 2.17-8.538 2.17-3.847 0-7.015-.863-8.541-2.172v2.863c0 1.411 3.508 2.984 8.54 2.984 5.027 0 8.531-1.57 8.54-2.98zm.001-8.175l.987-.006v.006c0 .625-.312 1.207-.906 1.742.726.653.906 1.294.906 1.75l-.001.008v4.67c0 2.272-4.094 3.986-9.525 3.986-5.403 0-9.48-1.696-9.523-3.951 0-.01-.005-.016-.005-.025v-4.69l.002-.008c.002-.454.183-1.09.9-1.737-.716-.65-.897-1.284-.901-1.734L8 22.85v-4.69l.002-.007c.002-.455.184-1.09.902-1.738-.718-.65-.9-1.283-.903-1.734L8 14.675v-4.69c0-.006.003-.009.003-.014C8.023 7.706 12.109 6 17.528 6c2.608 0 5.114.43 6.874 1.177l-.381.925c-1.643-.7-4.01-1.1-6.493-1.1-5.033 0-8.54 1.573-8.54 2.984 0 1.413 3.507 2.986 8.54 2.986.138.001.268 0 .403-.006l.04 1c-.148.008-.296.008-.443.008-3.847 0-7.015-.863-8.541-2.172v2.874c.006.545.543 1.02.992 1.322 1.348.89 3.763 1.496 6.454 1.622l-.047 1c-2.723-.126-5.11-.712-6.645-1.608-.384.295-.753.692-.753 1.15 0 1.411 3.507 2.984 8.54 2.984.496 0 .98-.017 1.453-.05l.072.998c-.496.036-1.006.054-1.525.054-3.847 0-7.015-.862-8.541-2.171v2.861c.006.558.542 1.033.992 1.334 1.54 1.018 4.434 1.65 7.549 1.65h.219v1.003h-.22c-3.165 0-6.029-.612-7.785-1.641-.384.295-.754.693-.754 1.152 0 1.411 3.507 2.984 8.54 2.984 5.024 0 8.527-1.567 8.538-2.978V26.333c0-.455-.367-.85-.749-1.145-.243.143-.505.28-.801.406l-.382-.922c.362-.156.678-.323.939-.5.453-.306.994-.786.994-1.328zm5.288-8.355h-3.283a.491.491 0 01-.4-.21.506.506 0 01-.067-.452l1.455-4.348h-6.528l-3.121 6.012h3.169a.49.49 0 01.392.197.505.505 0 01.084.436l-2.718 10.108 11.017-11.743zm1.51-.155L19.705 28.36a.493.493 0 01-.6.09.505.505 0 01-.233-.568l3.063-11.39h-3.342a.492.492 0 01-.423-.242.505.505 0 01-.014-.492l3.642-7.013a.493.493 0 01.436-.267h7.515c.16 0 .309.078.401.209a.51.51 0 01.066.453l-1.455 4.347h3.746c.198 0 .376.12.454.304a.51.51 0 01-.096.543z"
                      fill="#FFF"
                    ></path>
                  </g>
                </svg>
                <span>DynamoDB</span>
              </div>

              {/* 10) CodePipeline */}
              <div className="flex flex-col items-center">
                <svg
                  className="w-12 h-12 mb-1"
                  height="40"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      x1="0%"
                      y1="100%"
                      x2="100%"
                      y2="0%"
                      id="Arch_AWS-CodePipeline_32_svg__a"
                    >
                      <stop stopColor="#2E27AD" offset="0%" />
                      <stop stopColor="#527FFF" offset="100%" />
                    </linearGradient>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <path
                      d="M0 0h40v40H0z"
                      fill="url(#Arch_AWS-CodePipeline_32_svg__a)"
                    ></path>
                    <path
                      d="M14 14h3v-1h-3v1zm4.952 15.799l-.93-.366 3.589-9.126.93.366-3.589 9.126zm4.243-2.433l2.653-2.326-2.65-2.297.655-.756 3.083 2.673a.498.498 0 01.002.754l-3.083 2.704-.66-.752zm-9.578-2.081a.5.5 0 01.017-.733l3.072-2.716.662.749-2.668 2.358 2.674 2.594-.695.718-3.062-2.97zM33 13H19v1h14v1.251A1.75 1.75 0 0131.251 17H9.108A2.111 2.111 0 017 14.891V14h5v-1H7V9.109C7 7.946 7.946 7 9.108 7h21.904A1.99 1.99 0 0133 8.989V13zM11 33h18V18H11v15zM31.012 6H9.108A3.113 3.113 0 006 9.109v5.782A3.113 3.113 0 009.108 18H10v15.5a.5.5 0 00.5.5h19a.5.5 0 00.5-.5V18h1.251A2.752 2.752 0 0034 15.251V8.989A2.992 2.992 0 0031.012 6z"
                      fill="#FFF"
                    ></path>
                  </g>
                </svg>
                <span>CodePipeline</span>
              </div>

              {/* 11) Bedrock (using bedrock.png) */}
              <div className="flex flex-col items-center">
                <img
                  src={bedrock.src}
                  alt="Bedrock Icon"
                  className="w-12 h-12 mb-1"
                />
                <span>Bedrock</span>
              </div>

              {/* 12) OpenSearch (using OpenSearch.png) */}
              <div className="flex flex-col items-center">
                <img
                  src={OpenSearch.src}
                  alt="OpenSearch Icon"
                  className="w-12 h-12 mb-1"
                />
                <span>OpenSearch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
