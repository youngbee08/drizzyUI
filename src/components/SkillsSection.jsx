import React from "react";
import { motion } from "framer-motion";
import figma from "/figma.png";
import ps from "/ps.png";
import canva from "/canva.png";
import il from "/il.png";
import vs from "/vs.png";

const SkillsSection = () => {
  const services = [
    {
      icon: figma,
      serviceName: "Figma",
    },
    {
      icon: ps,
      serviceName: "Photoshop",
    },
    {
      icon: canva,
      serviceName: "Canva",
    },
    {
      icon: il,
      serviceName: "Illustrator",
    },
    {
      icon: vs,
      serviceName: "VSC",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <motion.section
      id="about"
      className="flex flex-col gap-8 lg:gap-15 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="flex items-center flex-col" variants={fadeUp}>
        <h2 className="text-[20px] sm:text-[30px] lg:text-[40px] font-medium">
          Skills & <span className="text-tetiary">Tools</span>
        </h2>
        <p className="text-sm sm:text-base lg:text-[18px] font-medium lg:w-3/7 text-center">
          How I make ideas real.
        </p>
      </motion.div>
      <motion.div className="grid grid-cols-2 grid-rows-2 lg:flex justify-between gap-4 items-stretch lg:flex-row flex-col">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col gap-4 bg-[rgba(217,205,233,.1)] lg:h-[244px] rounded-[10px] border border-[rgba(255,255,255,0.2)] px-5 items-center justify-center py-5 lg:w-[243px]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2 * index,
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <div className="px-4 lg:px-7 py-2 lg:py-4 bg-[rgba(217,205,233,.1)] rounded-[10px] border border-[rgba(255,255,255,0.2)]">
              <img
                src={service.icon}
                alt="service-icon"
                className="w-7 sm:w-8 lg:w-10 object-cover"
              />
            </div>
            <h3 className="text-sm sm:text-[18px] lg:text-[24px] font-bold flex items-end justify-end h-4/8">
              {service.serviceName}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default SkillsSection;
