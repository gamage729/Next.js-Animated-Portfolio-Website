"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="min-h-full pt-4 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-24 
            pl-4 sm:pl-6 md:pl-8 lg:pl-12 xl:pl-20
            flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 
            lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/bioPicture.png"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
            I am a final-year Computer Science student with a passion for web development and design. I love working with JavaScript and exploring modern web technologies. In addition, I enjoy WordPress development and freelancing, creating responsive and user-friendly websites that combine functionality with aesthetic appeal.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
            "Building web experiences that are both beautiful and functional is my passion."
            </span>
            {/* BIOGRAPHY SIGN IMAGE */}
          <div className="self-end">
            <Image
              src="/signature.png"
              alt="Signature"
              width={185}   // adjust to match your design
              height={77}   // adjust to match your design
              className="w-48 h-auto" // responsive scaling
              priority
            />
          </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                UI/UX Design
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                CSS3
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PHP
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Laravel
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MySQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                GitHub
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                VS Code
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Postman
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Python
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </div> 
              
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-96"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
              {/* LEFT */}
              <div className="w-1/3">
                {/* PROJECT TITLE */}
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  AI CV Detecting System
                </div>
                {/* PROJECT DESC */}
                <div className="p-3 text-sm italic">
                  Built an AI-driven CV detection system using React and Node.js.
                </div>
                {/* PROJECT DATE */}
                <div className="p-3 text-red-400 text-sm font-semibold">2024</div>
                {/* TAG/TECH */}
                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                  React · Node.js
                </div>
              </div>
              {/* CENTER */}
              <div className="w-1/6 flex justify-center">
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/3"></div>
            </div>

            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
              {/* LEFT EMPTY */}
              <div className="w-1/3"></div>
              {/* CENTER */}
              <div className="w-1/6 flex justify-center">
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/3">
                {/* PROJECT TITLE */}
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Military Leave Management System
                </div>
                {/* PROJECT DESC */}
                <div className="p-3 text-sm italic">
                  Developed a full-stack leave management system using React, Node.js, and Express.
                </div>
                {/* PROJECT DATE */}
                <div className="p-3 text-red-400 text-sm font-semibold">2025</div>
                {/* TAG/TECH */}
                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                  React · Node.js · Express
                </div>
              </div>
            </div>

            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
              {/* LEFT */}
              <div className="w-1/3">
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Food Delivery Website
                </div>
                <div className="p-3 text-sm italic">
                  Designed and developed a responsive food delivery platform.
                </div>
                <div className="p-3 text-red-400 text-sm font-semibold">2024</div>
                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                  React · Node.js
                </div>
              </div>
              {/* CENTER */}
              <div className="w-1/6 flex justify-center">
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>
              {/* RIGHT EMPTY */}
              <div className="w-1/3"></div>
            </div>

            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
              {/* LEFT EMPTY */}
              <div className="w-1/3"></div>
              {/* CENTER */}
              <div className="w-1/6 flex justify-center">
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/3">
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  University Projects
                </div>
                <div className="p-3 text-sm italic">
                  Gained hands-on experience with databases, Python, and Java through final-year coursework.
                </div>
                <div className="p-3 text-red-400 text-sm font-semibold">2025</div>
                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                  Database · Python · Java
                </div>
              </div>
            </div>

            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
              {/* LEFT */}
              <div className="w-1/3">
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  WordPress Development
                </div>
                <div className="p-3 text-sm italic">
                  Designed and customized WordPress websites for clients.
                </div>
                <div className="p-3 text-red-400 text-sm font-semibold">2025 - Present</div>
                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                  WordPress · CMS
                </div>
              </div>
              {/* CENTER */}
              <div className="w-1/6 flex justify-center">
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>
              {/* RIGHT EMPTY */}
              <div className="w-1/3"></div>
            </div>

            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
              {/* LEFT EMPTY */}
              <div className="w-1/3"></div>
              {/* CENTER */}
              <div className="w-1/6 flex justify-center">
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/3">
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Freelance Developer
                </div>
                <div className="p-3 text-sm italic">
                  Delivered web solutions on Fiverr, working with clients worldwide.
                </div>
                <div className="p-3 text-red-400 text-sm font-semibold">2025 - Present</div>
                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                  Fiverr · Freelancing
                </div>
              </div>
            </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block sticky top-0 z-30 flex-1">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;