import React from "react";
import { motion } from "framer-motion";
import profile from "/profile.png";
import { BiBarChartSquare } from "react-icons/bi";
import { RiAwardFill } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TbRobotFace } from "react-icons/tb";

const AboutSection = () => {
  const details = [
    {
      icon: FaRegCalendarAlt,
      detailNo: 3,
      detailName: "Years of experience",
    },
    {
      icon: BiBarChartSquare,
      detailNo: 20,
      detailName: "Project Completed",
    },
    {
      icon: RiAwardFill,
      detailNo: 5,
      detailName: "Design Recognitions",
    },
    {
      icon: TbRobotFace,
      detailNo: 5,
      detailName: "Happy Clients",
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
      className="flex flex-col gap-10 lg:gap-19 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="flex items-center flex-col" variants={fadeUp}>
        <h2 className="text-[20px] sm:text-[30px] lg:text-[40px] font-medium">
          About <span className="text-tetiary">Me</span>
        </h2>
        <p className="text-sm sm:text-base lg:text-[18px] font-medium lg:w-3/7 text-center">
          I’m a Product Designer focused on creating intuitive and visually
          engaging digital experiences.
        </p>
      </motion.div>

      <div className="flex items-stretch lg:flex-row flex-col gap-3">
        <motion.div
          className="flex flex-col gap-4 bg-[rgba(217,_205,_233,_.1)] rounded-[10px] border border-[rgba(255,255,255,0.2)] px-5 py-8 lg:w-1/2"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            className="flex items-center gap-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="w-[46px] sm:w-[66px] lg:w-[86px] h-[46px] sm:h-[66px] lg:h-[86px]">
              <img
                src={profile}
                alt="profile"
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <h4 className="text-base sm:text-[20px] lg:text-[24px] font-semibold">
                Alabi Idris
              </h4>
              <h5
                className="text-sm sm:text-base lg:text-[18px] font-medium text-tetiary"
                style={{ lineHeight: 1 }}
              >
                Product Designer
              </h5>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-4"
            variants={fadeUp}
            transition={{ delay: 0.4 }}
          >
            {[...Array(4)].map((_, i) => (
              <motion.p
                key={i}
                className="text-xs sm:text-sm lg:text-[18px] font-medium text-justify text-[rgba(255,255,255,0.8)]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * i }}
              >
                {
                  [
                    "With over 2 years of experience in designing. My work bridges user needs with business goals, helping products feel effortless and impactful. I value clarity, consistency, and empathy in every design decision.",
                    "I approach design with curiosity and clarity — combining user research, wireframing, prototyping, and visual storytelling to create seamless experiences that solve real problems.",
                    "As a Product Designer, I focus on improving how people interact with technology through intuitive design, thoughtful details, and purposeful storytelling.",
                    "When I’m not designing, I love exploring new UI trends, playing games, and sketching future product ideas.",
                  ][i]
                }
              </motion.p>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 grid-rows-2 gap-3 lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {details.map((detail, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-4 bg-[rgba(217,_205,_233,_.1)] rounded-[10px] border border-[rgba(255,255,255,0.2)] px-5 items-center justify-center lg:py-0 py-5"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2 * index,
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <div className="px-7 py-4 bg-[rgba(217,_205,_233,_.1)] rounded-[10px] border border-[rgba(255,255,255,0.2)]">
                <detail.icon className="text-sm sm:text-base lg:text-[20px]" />
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-base sm:text-[30px] lg:text-[40px] font-medium">
                  {detail.detailNo}+
                </h3>
                <h4 className="text-xs sm:text-base text-center lg:text-[22px] font-medium text-[rgba(255,_255,_255,_0.7)]">
                  {detail.detailName}
                </h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
