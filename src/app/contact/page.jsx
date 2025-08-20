"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    setIsLoading(true);
    setErrorMessage("");

    // Validate environment variables
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError(true);
      setErrorMessage("Configuration error. Please check environment variables.");
      setIsLoading(false);
      return;
    }

    console.log("Attempting to send email with:", {
      serviceId,
      templateId,
      publicKey: publicKey.substring(0, 10) + "..."
    });

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        (result) => {
          console.log("Email sent successfully:", result);
          setSuccess(true);
          form.current.reset();
          setIsLoading(false);
        },
        (error) => {
          console.error("EmailJS error:", error);
          setError(true);
          setErrorMessage(`Error ${error.status}: ${error.text || "Failed to send email"}`);
          setIsLoading(false);
        }
      );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-screen flex flex-col lg:flex-row relative overflow-hidden">
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-200/30 rounded-full blur-3xl"></div>
        </div>

        {/* LEFT SIDE - Hero Text */}
        <div className="h-screen lg:h-full lg:w-1/2 flex flex-col items-center justify-center relative z-10 px-8 sm:px-12 md:px-16 lg:px-24 ml-4 lg:ml-8">
          <motion.div
            className="text-center space-y-6 max-w-lg"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Animated Title */}
            <motion.div className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <div className="flex justify-center items-center space-x-2">
                {text.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    className="inline-block bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent"
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ 
                      opacity: [1, 0.3, 1],
                      y: [0, -10, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.1,
                      ease: "easeInOut"
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
                <motion.span
                  className="text-4xl md:text-5xl lg:text-6xl"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  👋
                </motion.span>
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              className="space-y-3"
              variants={itemVariants}
            >
              <h2 className="text-lg md:text-xl font-light text-gray-700 max-w-sm mx-auto">
                Let&apos;s create something amazing together
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto rounded-full"></div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-4 pt-6"
              variants={itemVariants}
            >
              <div className="flex flex-col gap-4 justify-center items-center">
                <div className="flex items-center space-x-2 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-700 font-medium text-sm">Available for projects</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <span className="text-lg">🌍</span>
                  <span className="text-gray-700 font-medium text-sm">Remote Friendly</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT SIDE - Contact Form */}
        <div className="h-screen lg:h-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-20 relative z-10">
          <motion.div
            className="w-full max-w-md mb-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-white/20">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-blue-500/10 to-red-500/10 p-4 border-b border-white/10">
                <h3 className="text-lg font-bold text-gray-800 mb-1">Get In Touch</h3>
                <p className="text-gray-600 text-sm">
                  I&apos;d love to hear from you. Send me a message!
                </p>
              </div>

              {/* Form */}
              <form
                onSubmit={sendEmail}
                ref={form}
                className="p-4 space-y-4"
              >
                <motion.div
                  className="space-y-2"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.4 }}
                >
                  <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    Your Message
                  </label>
                  <div className="relative">
                    <textarea
                      rows={3}
                      className="w-full bg-white/70 backdrop-blur-sm border-2 border-gray-200/50 rounded-lg px-3 py-2 text-gray-800 placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none text-sm"
                      name="message"
                      placeholder="Tell me about your project ideas..."
                      required
                    />
                    <div className="absolute bottom-2 right-2 text-xs text-gray-400">
                      💭
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="space-y-2"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.5 }}
                >
                  <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    Your Email Address
                  </label>
                  <div className="relative">
                    <input
                      name="name"
                      type="email"
                      className="w-full bg-white/70 backdrop-blur-sm border-2 border-gray-200/50 rounded-lg px-3 py-2 text-gray-800 placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-sm"
                      placeholder="your@email.com"
                      required
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      📧
                    </div>
                  </div>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-500 to-red-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.6 }}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <span>Send Message</span>
                      <span className="transform group-hover:translate-x-1 transition-transform duration-200">🚀</span>
                    </div>
                  )}
                </motion.button>

                {/* Success/Error Messages */}
                <div className="min-h-[40px]">
                  {success && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 text-green-600 font-semibold bg-green-50 p-2 rounded-lg border border-green-200"
                    >
                      <span className="text-sm">✅</span>
                      <span className="text-xs">Message sent successfully!</span>
                    </motion.div>
                  )}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col space-y-1 text-red-600 font-semibold bg-red-50 p-2 rounded-lg border border-red-200"
                    >
                      <div className="flex items-center space-x-2">
                        <span className="text-sm">❌</span>
                        <span className="text-xs">Something went wrong!</span>
                      </div>
                      {errorMessage && (
                        <span className="text-xs text-red-500 ml-6">{errorMessage}</span>
                      )}
                    </motion.div>
                  )}
                </div>
              </form>
            </div>

            {/* Social Links or Additional Info */}
            <motion.div
              className="mt-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <p className="text-gray-600 text-sm">
                Usually respond within 24 hours ⚡
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;