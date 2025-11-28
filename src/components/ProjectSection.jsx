import React from "react";
import { motion } from "framer-motion";
import bgOne from "/bgOne.jpg";
import bgTwo from "/bgTwo.jpg";
import bgThree from "/bgThree.png";
import bgFour from "/bgFour.png";
import bgFive from "/bgFive.jpg";
import bgSix from "/bgSix.jpg";

const ProjectSection = () => {
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
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const projects = [
    {
      name: "Mobile Design",
      category: "E-commerce Mobile App",
      desc: "An automotive e-commerce app where users can easily explore, compare, and purchase vehicles online",
      screenShot: bgOne,
      preview:"https://www.figma.com/design/v85H4Y9r0fMzPzu4KVrl9r/Drizzy-Auto?node-id=0-1&t=UHRIb3rwmG3KMdnB-1",
    },
    {
      name: "Mobile Design",
      category: "Ebook Mobile Design",
      desc: "A clean and accessible interface for browsing, downloading, and reading books on the go",
      screenShot: bgTwo,
      preview:"https://www.figma.com/design/Mx5KvGyC8ANPxve8ewCzjb/lautech-manual?node-id=51-212&t=Czw8f0lnhL4Ve36X-1",
    },
    {
      name: "Website Design",
      category: "NGO Website Design",
      desc: "A user-friendly website designed to help a non-profit organization communicate their mission and increase donation engagement.",
      screenShot: bgThree,
      preview:"https://www.figma.com/design/vfiwe6usZ37EYW8pjevOpv/Mastermind?node-id=0-1&t=nhBJgpQnJyML7ykd-1",
    },
    {
      name: "Website Design",
      category: "Sport News & Update Website",
      desc: "An automotive e-commerce app where users can easily explore, compare, and purchase vehicles online",
      screenShot: bgFour,
      preview:"https://www.figma.com/design/HZie9pGDcbtzCRJeCkJMrP/Drizzy-fc?node-id=0-1&t=6jyt3ApCFK2QgL6p-1",
    },
    {
      name: "Investment Dashoard",
      category: "Crypto & Stocks Investment",
      desc: "Designed to simplify complex financial data into clear visuals and actionable insights for investors at any level.",
      screenShot: bgFive,
    },
    {
      name: "Asset Dashoard",
      category: "Digital Asset Dashboard",
      desc: "A modern crypto wallet enabling users to store, send, and receive digital currencies with enhanced security.",
      screenShot: bgSix,
    },
  ];

  return (
    <motion.section
      id="project"
      className="flex flex-col gap-8 lg:gap-15 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} 
    >
      <motion.div className="flex items-center flex-col" variants={fadeUp}>
        <h2 className="text-[20px] sm:text-[30px] lg:text-[40px] font-medium">
          Featured <span className="text-tetiary">Projects</span>
        </h2>
        <p className="text-sm sm:text-base lg:text-[18px] font-medium lg:w-3/7 text-center">
          Showcasing projects that define my design approach and process.
        </p>
      </motion.div>

      <motion.div
        className="grid sm:grid-cols-2 gap-3 lg:grid-cols-3 w-full"
        variants={container}
      >
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.preview}
            target:"_blank"
            className="flex cursor-pointer flex-col border border-[rgba(255,255,255,0.2)] rounded-[10px] overflow-hidden hover:shadow-xl hover:shadow-[rgba(255,255,255,0.05)] transition-shadow"
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
          >
            <motion.div className="h-[55%] w-full group overflow-hidden">
              <motion.img
                src={project.screenShot}
                alt="bg-image"
                className="w-full h-full object-cover group-hover:scale-[110%] transition-all duration-500 rounded-t-[10px] border-b border-b-[rgba(255,255,255,0.2)]"
              />
            </motion.div>
            <motion.div className="flex gap-3 flex-col p-5">
              <motion.h4 className="text-sm sm:text-base lg:text-[18px] text-tetiary font-medium">
                {project.name}
              </motion.h4>
              <motion.h3 className="text-base sm:text-sm lg:text-[22px] font-semibold">
                {project.category}
              </motion.h3>
              <motion.p className="font-normal text-xs sm:text-sm lg:text-base text-[rgba(255,255,255,1)]">
                {project.desc}
              </motion.p>
            </motion.div>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ProjectSection;
