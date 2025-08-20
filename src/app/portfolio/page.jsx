"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "React Food-Del App",
    desc: "Food delivery web app with React (frontend), Node.js/Express (API), and MongoDB (database). Includes user auth, cart/checkout, order tracking, and admin panel.",
    img: "/food-1.png",
    link: "https://food-del-demo.netlify.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Military Leave Management System",
    desc: "Military Leave Application developed as a university project using React (frontend), Node.js/Express (backend), and Firebase (database). Enhanced with AI-powered features for intelligent leave request analysis and guidance.",
    img: "/military.png",
    link: "https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9hNDA4NmZkZDY1Njc2NTYxL0VtQy11OTljZmVsR3VhV2N6d2pBcDVFQnRQQ2J4TUZmZllwM3M3bnY0NTN3MUE%5FZT1kdVZ3Mkw&cid=A4086FDD65676561&id=A4086FDD65676561%21s94f45eff39ef497fb8acd822aaa8d666&parId=A4086FDD65676561%21s63268982ca8d4905aef1291e529c2b76&o=OneUp",
  },

];

const PortfolioPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Hero Section */}
      <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center px-4 py-20">
        <h2 className="animated-underline text-5xl md:text-6xl lg:text-8xl text-center">
          My Works
        </h2>
      </div>
      
      {/* Card Section */}
      <div className="min-h-screen bg-[#1d061a] flex items-center justify-center py-20">
        <div className="portfolio-container">
          {items.map((item, index) => (
            <motion.div 
              className="portfolio-box" 
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
            >
              <span></span>
              <div className="portfolio-content">
                <h2>{item.title}</h2>
                <div className="relative w-full h-56 my-4">
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <p>{item.desc}</p>
                <Link href={item.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hire Me Section */}
      <div className="w-full min-h-screen flex flex-col items-center justify-center text-center px-5 py-16 md:px-8 md:py-16 bg-white">
        <motion.h1 
          className="text-5xl leading-tight md:text-4xl md:leading-normal lg:text-6xl xl:text-7xl max-w-5xl mb-10 md:mb-12 font-bold text-black"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Do you have a project?
        </motion.h1>
        
        <motion.div 
          className="relative mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-72 h-72 md:w-48 md:h-48 lg:w-72 lg:h-72 xl:w-80 xl:h-80"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -70, 0 a 70,70 0 0,1 140,0 a 70,70 0 0,1 -140,0"
              />
            </defs>
            <text fill="#000" className="text-lg md:text-sm lg:text-xl font-medium">
              <textPath xlinkHref="#circlePath">
                ✦ Fullstack Developer ✦ UI Designer ✦ Creative Solutions ✦
              </textPath>
            </text>
          </motion.svg>

          <Link
            href="/contact"
            className="w-24 h-24 md:w-14 md:h-14 lg:w-20 lg:h-20 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center text-xl md:text-sm lg:text-lg font-semibold hover:bg-gray-900 transition-all duration-300 active:scale-95 shadow-lg hover:shadow-xl"
          >
            Hire Me
          </Link>
        </motion.div>
      </div>

      {/* Enhanced CSS Styles */}
      <style jsx global>{`
        .portfolio-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 60px 40px;
          justify-content: center;
          padding: 40px 20px;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
        }

        @media (max-width: 1200px) {
          .portfolio-container {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 50px 30px;
            padding: 40px 15px;
          }
        }

        @media (max-width: 768px) {
          .portfolio-container {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 30px 10px;
          }
        }

        @media (max-width: 480px) {
          .portfolio-container {
            padding: 20px 10px;
            gap: 30px;
          }
        }

        .portfolio-box {
          position: relative;
          width: 100%;
          max-width: 350px;
          height: 460px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
          cursor: pointer;
        }

        @media (max-width: 480px) {
          .portfolio-box {
            height: 420px;
            max-width: 320px;
          }
        }

        .portfolio-box::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50px;
          width: 50%;
          height: 100%;
          background: #fff;
          border-radius: 8px;
          transform: skewX(15deg);
          transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
          z-index: 1;
        }

        .portfolio-box::after {
          content: '';
          position: absolute;
          top: 0;
          left: 50px;
          width: 50%;
          height: 100%;
          background: #fff;
          border-radius: 8px;
          transform: skewX(15deg);
          transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
          filter: blur(30px);
          z-index: 0;
        }

        .portfolio-box:hover::before,
        .portfolio-box:hover::after {
          transform: skewX(0deg);
          left: 20px;
          width: calc(100% - 40px);
        }

        .portfolio-box:nth-child(1)::before,
        .portfolio-box:nth-child(1)::after {
          background: linear-gradient(315deg, #ffbc00, #ff0058);
        }

        .portfolio-box:nth-child(2)::before,
        .portfolio-box:nth-child(2)::after {
          background: linear-gradient(315deg, #03a9f4, #ff0058);
        }

        .portfolio-box:nth-child(3)::before,
        .portfolio-box:nth-child(3)::after {
          background: linear-gradient(315deg, #4dff03, #00d0ff);
        }

        .portfolio-box:nth-child(4)::before,
        .portfolio-box:nth-child(4)::after {
          background: linear-gradient(315deg, #ff00ff, #00ffff);
        }

        .portfolio-box:nth-child(5)::before,
        .portfolio-box:nth-child(5)::after {
          background: linear-gradient(315deg, #00ff88, #0066ff);
        }

        .portfolio-box:nth-child(6)::before,
        .portfolio-box:nth-child(6)::after {
          background: linear-gradient(315deg, #ffaa00, #ff6600);
        }

        .portfolio-box:nth-child(7)::before,
        .portfolio-box:nth-child(7)::after {
          background: linear-gradient(315deg, #aa00ff, #ff0080);
        }

        .portfolio-box:nth-child(8)::before,
        .portfolio-box:nth-child(8)::after {
          background: linear-gradient(315deg, #00ffaa, #0080ff);
        }

        .portfolio-box span {
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 5;
          pointer-events: none;
        }

        .portfolio-box span::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 0;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          opacity: 0;
          transition: all 0.3s ease;
          animation: animate 2s ease-in-out infinite;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
        }

        .portfolio-box:hover span::before {
          top: -50px;
          left: 50px;
          width: 100px;
          height: 100px;
          opacity: 1;
        }

        .portfolio-box span::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: 0;
          width: 0;
          height: 0;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          opacity: 0;
          transition: all 0.3s ease;
          animation: animate 2s ease-in-out infinite;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
          animation-delay: -1s;
        }

        .portfolio-box:hover span::after {
          bottom: -50px;
          right: 50px;
          width: 100px;
          height: 100px;
          opacity: 1;
        }

        @keyframes animate {
          0%, 100% {
            transform: translateY(10px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .portfolio-content {
          position: relative;
          left: 0;
          padding: 20px 30px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 10;
          transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
          color: #fff;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .portfolio-box:hover .portfolio-content {
          left: -15px;
          padding: 30px 35px;
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 480px) {
          .portfolio-content {
            padding: 15px 20px;
          }
          
          .portfolio-box:hover .portfolio-content {
            left: -10px;
            padding: 20px 25px;
          }
        }

        .portfolio-content h2 {
          font-size: 1.5em;
          color: #fff;
          margin-bottom: 12px;
          font-weight: 600;
          line-height: 1.2;
        }

        @media (max-width: 480px) {
          .portfolio-content h2 {
            font-size: 1.3em;
            margin-bottom: 10px;
          }
        }

        .portfolio-content p {
          font-size: 0.85em;
          margin-bottom: 18px;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.9);
          flex-grow: 1;
        }

        @media (max-width: 480px) {
          .portfolio-content p {
            font-size: 0.8em;
            margin-bottom: 15px;
          }
        }

        .portfolio-content a {
          display: inline-block;
          font-size: 1em;
          color: #111;
          background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
          padding: 12px 20px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          margin-top: auto;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          border: 2px solid transparent;
          align-self: flex-start;
        }

        .portfolio-content a:hover {
          background: linear-gradient(135deg, #ffcf4d 0%, #ff9800 100%);
          border: 2px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 25px rgba(255, 207, 77, 0.3);
          transform: translateY(-2px);
          color: #000;
        }

        @media (max-width: 480px) {
          .portfolio-content a {
            padding: 10px 16px;
            font-size: 0.9em;
          }
        }

        /* Enhanced animations */
        .portfolio-box:hover {
          transform: translateY(-8px);
        }

        .portfolio-box:active {
          transform: translateY(-4px);
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Loading animation for images */
        .portfolio-content .relative img {
          transition: all 0.3s ease;
        }

        .portfolio-box:hover .portfolio-content .relative img {
          transform: scale(1.05);
        }
      `}</style>
    </motion.div>
  );
};

export default PortfolioPage;