import { motion } from "framer-motion";
import { Download, UserPlus2 } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";
import Hand from "/hand.png";
import profile from "/profile.png";

const IntroSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <motion.section
      className="flex justify-between text-white items-center lg:flex-row sm:flex-col-reverse flex-col-reverse lg:gap-0 gap-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="flex flex-col gap-10 items-start lg:w-1/2"
        variants={fadeIn}
        custom={0.2}
      >
        <motion.div
          className="flex items-center gap-2 bg-white/20 py-2 lg:py-1 px-4 rounded-sm text-sm sm:text-base lg:text-[22px] font-semibold"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
        >
          <motion.img
            src={Hand}
            alt="hand"
            className="w-6 h-6"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          />
          <h2>Hello, I'm</h2>
        </motion.div>

        <motion.div
          className="flex gap-3 flex-col"
          variants={fadeIn}
          custom={0.6}
        >
          <motion.div className="flex flex-col" variants={fadeIn} custom={0.8}>
            <h2
              className="text-[40px] sm:text-[60px] lg:text-[90px] font-semibold"
              style={{ lineHeight: 1 }}
            >
              Alabi Idris
            </h2>
            <h4
              className="text-sm sm:text-base lg:text-[24px] text-tetiary font-medium"
              style={{ lineHeight: 1 }}
            >
              Product Designer & Creative Problem Solver
            </h4>
          </motion.div>

          <motion.p
            className="text-xs sm:text-sm lg:text-[16px] font-medium lg:w-9/10"
            variants={fadeIn}
            custom={1}
          >
            I create clean, functional interfaces that turn ideas into seamless
            experiences. With 3+ years of experience in design systems and user
            research.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex gap-5 items-center"
          variants={fadeIn}
          custom={1.2}
        >
          <motion.a
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.25)",
            }}
            whileTap={{ scale: 0.97 }}
            className="lg:flex hidden items-center justify-between gap-2 cursor-pointer bg-white/20 text-[#58178A] py-2 px-4 rounded-[5px] text-base lg:text-[18px] font-medium shadow-lg shadow-white/10"
          >
            <UserPlus2 size={16} />
            <span>Hire me</span>
            <FaArrowRight size={14} />
          </motion.a>

          <motion.a
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.05)",
            }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-between gap-2 bg-transparent border border-white cursor-pointer py-2 px-4 rounded-[5px] text-xs sm:text-base lg:text-[18px] font-medium shadow-lg shadow-white/10"
            href="/drizzy.pdf"
            download={"IdrisOluwasunkanmiResume"}
          >
            <Download size={16} />
            <span>Download Resume</span>
            <FaArrowRight size={14} />
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="lg:w-1/2 flex items-center justify-end"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.div
          className="w-[250px] sm:w-[300px] lg:w-[450px] h-[250px] sm:h-[300px] lg:h-[450px] rounded-full lg:border-8 border-6 border-tetiary border-l-transparent relative overflow-hidden shadow-[0_0_30px_rgba(88,23,138,0.4)]"
          initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
          whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.2, type: "spring" }}
        >
          <motion.img
            src={profile}
            alt="profile-image"
            className="w-full h-full object-cover absolute"
            initial={{ opacity: 0, scale: 1.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default IntroSection;
