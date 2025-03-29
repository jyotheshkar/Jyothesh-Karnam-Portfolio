"use client";
import React, { useState } from "react";
import Image from "next/image";
import InsightsIcon from "@mui/icons-material/Insights";
import ReactIcon from "../images/bedrock.png";
import project2 from "../images/llm.png";
import project3 from "../images/project3.png";
import project4 from "../images/nn.png";
import project5 from "../images/Reinforce.png";
// Framer Motion + Icons
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Github, FileText, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Project 1: RAG-Based AI Chatbot with AWS Bedrock",
    description: [
      "I built a RAG-based chatbot using Amazon Bedrock, S3, and OpenSearch Serverless for intelligent, document-driven Q&A. The knowledge base was created by uploading documents to S3, embedding them with Titan Text Embeddings v2, and syncing with OpenSearch. I integrated the Llama 3.3 70B model for real-time, contextual responses and refined output through prompt tuning and chunk size optimization. I also addressed model provisioning challenges by understanding AWS’s on-demand and pre-provisioned inference modes.",
    ],
    image: ReactIcon,
    links: {
      github: "",
      docs: "https://github.com/jyotheshkar/jyotheshkar-RAG-Based-AI-Chatbot-with-AWS-Bedrock/blob/main/legendary-ai-rag-bedrock.pdf",
      architecture: "https://github.com/jyotheshkar/jyotheshkar-RAG-Based-AI-Chatbot-with-AWS-Bedrock/blob/main/architecture-complete.png",
    },
  },
  {
    title: "Project 2: Built a Generative Pre-Trained Transformer (GPT) from Scratch",
    description: [
      "I developed a GPT-style Transformer in PyTorch with custom tokenization, embeddings, and positional encodings. The model featured multi-head self-attention with causal masking for autoregressive text generation and a scalable 4-layer decoder architecture with residuals, normalization, and dropout. I optimized training using the AdamW optimizer and cross-entropy loss, fine-tuning hyperparameters for improved validation. GPU acceleration with Nvidia CUDA significantly boosted training speed and efficiency on large-scale text data.",
    ],
    image: project2,
    links: {
      github: "https://github.com/jyotheshkar/Creating-a-Large-Language-Model-from-Scratch/blob/main/gpt-v1%20(3).ipynb",
      docs: "https://github.com/jyotheshkar/Creating-a-Large-Language-Model-from-Scratch/blob/main/README.md",
      architecture: "https://github.com/jyotheshkar/Creating-a-Large-Language-Model-from-Scratch/blob/main/gpt%20architecture.png",
    },
  },
  {
    title: "Project 3: AWS Three-Tier Web Application",
    description: [
      "I designed a secure three-tier web architecture using Amazon S3 for hosting static frontend files and CloudFront for global delivery with Origin Access Control. The logic tier was built with AWS Lambda and API Gateway to serve RESTful APIs for dynamic data fetching. For the data tier, I used DynamoDB with userId as the partition key, accessed via the AWS SDK in Lambda. I resolved CORS and permission issues by configuring Lambda headers and fine-tuning IAM policies. The entire flow was validated by testing end-to-end data retrieval from the frontend.",
    ],
    image: project3,
    links: {
      github: "",
      docs: "https://github.com/jyotheshkar/AWS-Three-Tier-Web-Application-/blob/main/legendary-aws-compute-threetier.pdf",
      architecture: "https://github.com/jyotheshkar/AWS-Three-Tier-Web-Application-/blob/main/AWS%20three%20tier.png",
    },
  },
  {
    title: "Project 4: Time Series Neural Network Software Suite & App Development for Dairy Herd Monitoring Project",
    description: [
      "I engineered a full-stack AI-powered application for real-time dairy herd monitoring as part of my Master’s project. The system combined a scalable backend, an interactive Tkinter-based GUI, and LSTM time-series models for health forecasting. Users could upload, process, and visualize data while interacting with AI models. I ensured prediction accuracy through validation mechanisms and followed Agile practices with modular design for maintainability and scalability.",
    ],
    image: project4,
    links: {
      github: "https://github.com/jyotheshkar/Time-series-Neural-network-software-application/tree/main/Codes",
      docs: "https://github.com/jyotheshkar/Time-series-Neural-network-software-application/blob/main/Project%20Documentation.pdf",
      architecture: "",
    },
  },
  {
    title: "Project 5: AI-Controlled Zombie Hunter: A Reinforcement Learning Agent Survival Game",
    description: [
      "I built Zombie Hunter, an AI-powered Python game where a Deep Q-Network (DQN) agent learns to survive, shoot zombies, and progress through increasingly challenging levels. The game uses reinforcement learning to train the AI on actions like movement, shooting, and strategic survival. Developed with Pygame for visuals and PyTorch for the RL model, it features health mechanics, dynamic zombie spawning, level progression, and engaging effects like animations and sounds. The DQN learns through a reward system and replay buffer, with stable training ensured by target network updates. The game runs at 60 FPS on a 1200x700 screen, and includes future enhancement plans like boss zombies, power-ups, and leaderboard support.",
    ],
    image: project5,
    links: {
      github: "https://github.com/jyotheshkar/ReInforcement-Learning-Agent-/blob/main/ai.py",
      docs: "https://github.com/jyotheshkar/ReInforcement-Learning-Agent-/blob/main/README.md",
      architecture: "https://github.com/jyotheshkar/ReInforcement-Learning-Agent-/blob/main/RL%20agent.png",
    },
  },
  // {
  //   title: "Project 6: RAG-Based AI Chatbot with AWS Bedrock",
  //   description: [
  //     "I built a RAG-based chatbot using Amazon Bedrock, S3, and OpenSearch Serverless for intelligent, document-driven Q&A. The knowledge base was created by uploading documents to S3, embedding them with Titan Text Embeddings v2, and syncing with OpenSearch. I integrated the Llama 3.3 70B model for real-time, contextual responses and refined output through prompt tuning and chunk size optimization. I also addressed model provisioning challenges by understanding AWS’s on-demand and pre-provisioned inference modes.",
  //   ],
  //   image: ReactIcon,
  //   links: {
  //     github: "https://github.com/jyotheshkar",
  //     docs: "https://github.com/jyotheshkar/jyotheshkar-RAG-Based-AI-Chatbot-with-AWS-Bedrock/tree/main",
  //     architecture: "https://github.com/jyotheshkar/jyotheshkar-RAG-Based-AI-Chatbot-with-AWS-Bedrock/tree/main",
  //   },
  // },
  // {
  //   title: "Project 7: RAG-Based AI Chatbot with AWS Bedrock",
  //   description: [
  //     "I built a RAG-based chatbot using Amazon Bedrock, S3, and OpenSearch Serverless for intelligent, document-driven Q&A. The knowledge base was created by uploading documents to S3, embedding them with Titan Text Embeddings v2, and syncing with OpenSearch. I integrated the Llama 3.3 70B model for real-time, contextual responses and refined output through prompt tuning and chunk size optimization. I also addressed model provisioning challenges by understanding AWS’s on-demand and pre-provisioned inference modes.",
  //   ],
  //   image: ReactIcon,
  //   links: {
  //     github: "https://github.com/jyotheshkar",
  //     docs: "https://github.com/jyotheshkar/jyotheshkar-RAG-Based-AI-Chatbot-with-AWS-Bedrock/tree/main",
  //     architecture: "https://github.com/jyotheshkar/jyotheshkar-RAG-Based-AI-Chatbot-with-AWS-Bedrock/tree/main",
  //   },
  // },
  // {
  //   title: "Project 8: RAG-Based AI Chatbot with AWS Bedrock",
  //   description: [
  //     "I built a RAG-based chatbot using Amazon Bedrock, S3, and OpenSearch Serverless for intelligent, document-driven Q&A. The knowledge base was created by uploading documents to S3, embedding them with Titan Text Embeddings v2, and syncing with OpenSearch. I integrated the Llama 3.3 70B model for real-time, contextual responses and refined output through prompt tuning and chunk size optimization. I also addressed model provisioning challenges by understanding AWS’s on-demand and pre-provisioned inference modes.",
  //   ],
  //   image: ReactIcon,
  //   links: {
  //     github: "https://github.com/jyotheshkar",
  //     docs: "https://github.com/jyotheshkar/jyotheshkar-RAG-Based-AI-Chatbot-with-AWS-Bedrock/tree/main",
  //     architecture: "https://github.com/jyotheshkar/jyotheshkar-RAG-Based-AI-Chatbot-with-AWS-Bedrock/tree/main",
  //   },
  // },
];

export default function Skills() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    if (index < projects.length - 1) {
      setDirection(1);
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setDirection(-1);
      setIndex(index - 1);
    }
  };

  // Framer Motion variants for left/right slide transitions
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 800 : -800,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 800 : -800,
      opacity: 0,
    }),
  };

  return (
    <div id="BodyE" className="mt-48 p-4">
      {/* Header */}
      <div className="flex items-center  justify-center">
        <InsightsIcon
          fontSize="inherit"
          style={{ fontSize: "3rem" }}
          className="text-black bg-white p-1 rounded-full mr-4"
        />
        <h1 className="text-gray-300 font-lightbold text-4xl md:text-4xl text-center">
          Projects
        </h1>
      </div>

      {/* Project Carousel */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center bg-black p-6">
        <div className="relative w-[90%] max-w-4xl h-[500px] flex justify-center overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
              className="absolute w-full h-[500px] rounded-2xl shadow-xl"
            >
              {/* Background for each card */}
              <div className="absolute inset-0 bg-black border border-gray-600 rounded-2xl p-8" />

              {/* Card content */}
              <div className="flex flex-col md:flex-row h-full w-full">
                {/* Left side: Image */}
                <div className="w-full md:w-[30%] relative flex items-center justify-center p-4">
                  <Image
                    src={projects[index].image}
                    alt={projects[index].title}
                    className="object-contain"
                    width={160}
                    height={160}
                    priority={index === 0}
                  />
                </div>

                {/* Right side: Content */}
                <div className="w-full md:w-[70%] relative flex items-center justify-center p-4">
                  {/* Glass effect overlay */}
                  <div className="absolute inset-0 bg-white border-t border-gray-600 md:border rounded-2xl md:rounded-r-2xl p-8" />

                  {/* Content container */}
                  <div className="relative z-10 p-6 md:text-left text-center space-y-4 leading-relaxed text-black">
                    <h3 className="text-2xl font-semibold">
                      {projects[index].title}
                    </h3>
                    {/* Description shown only on medium screens and up */}
                    <div className="hidden md:block">
                      {Array.isArray(projects[index].description) ? (
                        <div className="space-y-3">
                          {projects[index].description.map((line: string, i: number) => (
                            <p key={i} className="text-sm">
                              {line}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm">{projects[index].description}</p>
                      )}
                    </div>
                    {/* Links arranged vertically on small screens */}
                    {projects[index].links &&
                      (projects[index].links.github ||
                        projects[index].links.docs ||
                        projects[index].links.architecture) && (
                        <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center md:justify-start mt-4">
                          {projects[index].links.github && (
                            <a
                              href={projects[index].links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center hover:underline"
                            >
                              <Github size={20} className="mr-1" />
                              Code
                            </a>
                          )}
                          {projects[index].links.docs && (
                            <a
                              href={projects[index].links.docs}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center hover:underline"
                            >
                              <FileText size={20} className="mr-1" />
                              Documentation
                            </a>
                          )}
                          {projects[index].links.architecture && (
                            <a
                              href={projects[index].links.architecture}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center hover:underline"
                            >
                              <ExternalLink size={20} className="mr-1" />
                              Architecture
                            </a>
                          )}
                        </div>
                      )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute bottom-10 flex gap-6">
          <button
            onClick={prevSlide}
            className={`p-3 bg-gray-200 rounded-full ${
              index === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={index === 0}
          >
            <ChevronLeft size={32} className="text-black" />
          </button>
          <button
            onClick={nextSlide}
            className={`p-3 bg-gray-200 rounded-full ${
              index === projects.length - 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={index === projects.length - 1}
          >
            <ChevronRight size={32} className="text-black" />
          </button>
        </div>
      </div>
    </div>
  );
}
