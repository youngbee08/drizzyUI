import React from "react";
import { motion } from "framer-motion";
import ui from "/ui.png";
import brand from "/brand.png";
import graphics from "/graphics.png";
import product from "/product.png";

const ServicesSection = () => {
  const services = [
    {
      icon: ui,
      serviceName: "UI/UX Design",
      serviceDesc:
        "I create intuitive, user-driven interfaces that make digital experiences effortless and engaging",
    },
    {
      icon: brand,
      serviceName: "Brand Design",
      serviceDesc:
        "I design brand systems that strengthen recognition and create lasting impressions.",
    },
    {
      icon: graphics,
      serviceName: "Graphics Design",
      serviceDesc:
        "I create impactful visual designs that blend creativity and strategy ",
    },
    {
      icon: product,
      serviceName: "Product Design",
      serviceDesc:
        "I create impactful visual designs that blend creativity and strategy ",
    },
  ];

  const otherServices = [
    {
      serviceName: "UI/UX Design",
      serviceDesc: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
      ],
    },
    {
      serviceName: "Brand Design",
      serviceDesc: ["HTML", "CSS", "Bootstrap"],
    },
    {
      serviceName: "Graphics Design",
      serviceDesc: [
        "Agile",
        "Design Thinking",
        "User Testing",
        "Accessibility",
      ],
    },
    {
      serviceName: "Product Design",
      serviceDesc: [
        "Communication",
        "Collaboration",
        "Problem Solving",
        "Leadership",
      ],
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
    <div className="flex gap-18 flex-col">
      <motion.section
        id="about"
        className="flex flex-col gap-10 lg:gap-19 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="flex items-center flex-col" variants={fadeUp}>
          <h2 className="text-[20px] sm:text-[30px] lg:text-[40px] font-medium">
            Services <span className="text-tetiary">I Provide</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-[18px] font-medium lg:w-3/7 text-center">
            Designing thoughtful experiences that solve problems and drive
            engagement.
          </p>
        </motion.div>
        <motion.div className="flex sm:grid sm:grid-cols-2 sm:grid-rows-2 lg:flex justify-between gap-4 items-stretch lg:flex-row flex-col">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-4 bg-[rgba(217,205,233,.1)] rounded-[10px] border border-[rgba(255,255,255,0.2)] px-5 items-center justify-stretch py-5 lg:w-[305px]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2 * index,
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <div className="px-7 py-4 bg-[rgba(217,205,233,.1)] rounded-[10px] border border-[rgba(255,255,255,0.2)]">
                <img
                  src={service.icon}
                  alt="service-icon"
                  className="w-7 sm:w-8 lg:w-10 object-cover"
                />
              </div>
              <div className="flex flex-col items-center gap-2">
                <h3 className="text-sm sm:text-[18px] lg:text-[24px] font-bold">
                  {service.serviceName}
                </h3>
                <h4 className="text-xs sm:text-sm text-center lg:text-[16px] font-normal text-[rgba(255,_255,_255,_1)]">
                  {service.serviceDesc}
                </h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      <motion.section
        id="about"
        className="flex flex-col gap-8 lg:gap-15 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="flex items-center flex-col" variants={fadeUp}>
          <h2 className="text-[20px] sm:text-[30px] lg:text-[40px] font-medium">
            Other <span className="text-tetiary">Expertise</span>
          </h2>
        </motion.div>
        <motion.div className="flex sm:grid grid-cols-2 grid-rows-2 lg:flex justify-center gap-4 items-stretch lg:flex-row flex-col">
          {otherServices.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-4 bg-[rgba(217,_205,_233,_.1)] rounded-[10px] border border-[rgba(255,255,255,0.2)] cursor-pointer px-5 items-center justify-stretch py-5 lg:w-[305px]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2 * index,
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <h3 className="text-sm sm:text-[18px] lg:text-[24px] font-bold text-tetiary">
                {service.serviceName}
              </h3>
              <div className="flex flex-col gap-2">
                {service.serviceDesc.map((des, index) => (
                  <h4
                    className="text-sm sm:text-base text-center lg:text-[22px] font-normal text-[rgba(255,_255,_255,_1)]"
                    key={index}
                  >
                    {des}
                  </h4>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
};

export default ServicesSection;
