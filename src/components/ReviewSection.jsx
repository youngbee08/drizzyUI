import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BsStarFill } from "react-icons/bs";

const ReviewSection = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);


  const reviews = [
  {
    id: 1,
    name: "Badmus Bur'han",
    role: "CEO, Mastermind Foundation",
    rating: 5,
    text: "Working with Drizzy was seamless. He understood our goals quickly and delivered a polished product on time.",
    img: "/manOne.jpeg",
  },
  {
    id: 2,
    name: "Amina S.",
    role: "Product Lead, Novera Labs",
    rating: 5,
    text: "Drizzy brought our vision to life effortlessly. His eye for detail made the final design look clean and modern.",
    img: "/manTwo.jpeg",
  },
  {
    id: 3,
    name: "Tom F.",
    role: "Founder, BrightHive",
    rating: 5,
    text: "Collaborating with Drizzy was smooth and efficient. He quickly captured what we needed and exceeded our expectations.",
    img: "/manThree.jpeg",
  },
  {
    id: 4,
    name: "Lina K.",
    role: "Marketing Manager, Zentro Media",
    rating: 5,
    text: "Drizzy’s designs elevated our brand. He communicates clearly and delivers results that truly stand out.",
    img: "/manFour.jpeg",
  }
];


  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [index]);

  function startAutoPlay() {
    stopAutoPlay();
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
  }

  function stopAutoPlay() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }

  function goPrev() {
    setIndex((i) => (i - 1 + reviews.length) % reviews.length);
  }

  function goNext() {
    setIndex((i) => (i + 1) % reviews.length);
  }

  return (
    <motion.section
      id="review"
      className="flex flex-col gap-8 lg:gap-15 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} 
      variants={container}
    >
      <motion.div className="flex items-center flex-col" variants={fadeUp}>
        <h2 className="text-[20px] sm:text-[30px] lg:text-[40px] font-medium">
          Clients <span className="text-tetiary">Testimonials</span>
        </h2>
        <p className="text-sm sm:text-base lg:text-[18px] font-medium lg:w-3/7 text-center">
          Here’s what others have shared about working with me.
        </p>
      </motion.div>

      <motion.div
        className="w-full flex justify-center flex-col items-center"
        variants={fadeUp}
      >
        <motion.div
          className="w-full lg:w-8/10 bg-[#D9CDE91A]/10 border border-[#FFFFFF33]/20 rounded-[10px]"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="rounded-2xl backdrop-blur-md p-8 md:p-12 shadow-2xl relative">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <BsStarFill key={i} className="w-6 h-6 text-yellow-400" />
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-full md:w-11/12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={reviews[index].id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="p-6 text-center"
                  >
                    <p className="text-base sm:text-xl lg:text-[26px] font-medium text-white/95 mb-6">
                      {reviews[index].text}
                    </p>

                    <div className="flex items-center justify-center gap-4">
                      <img
                        src={reviews[index].img}
                        alt={reviews[index].name}
                        className="w-10 lg:w-14 h-10 lg:h-14 rounded-full object-cover border-2 border-white/20"
                      />
                      <div className="text-left">
                        <p className="text-white font-medium text-sm sm:text-base lg:text-[22px]">
                          {reviews[index].name}
                        </p>
                        <p className="font-medium text-xs sm:text-sm lg:text-[16px] text-white/70">
                          {reviews[index].role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 flex items-center gap-4"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          <button
            onClick={goPrev}
            aria-label="Previous review"
            className="w-10 h-10 rounded-full bg-primary flex items-center cursor-pointer justify-center hover:bg-tetiary/20 transition-colors"
          >
            <ChevronLeft className="hover:text-tetiary" />
          </button>

          <div className="flex items-center gap-3">
            {reviews.map((r, i) => (
              <button
                key={r.id}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                  i === index ? "bg-tetiary scale-110" : "bg-white/70"
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            aria-label="Next review"
            className="w-10 h-10 rounded-full bg-primary flex items-center cursor-pointer justify-center hover:bg-tetiary/20 transition-colors"
          >
            <ChevronRight className="hover:text-tetiary" />
          </button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ReviewSection;
