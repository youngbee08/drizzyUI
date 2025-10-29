import React, { useState } from "react";
import { motion } from "framer-motion";

import { toast } from "react-toastify";
import { Mail } from "lucide-react";
import { FiMail } from "react-icons/fi";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactSection = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sendingMessage, setSendingMessage] = useState(false);
  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSendingMessage(true);
    const baseUrl = import.meta.env.VITE_MAILER_BASE_URL;
    const apiKey = import.meta.env.VITE_MAILER_API_KEY;
    const formData = new FormData();
    formData.append("name", contactInfo.name);
    formData.append("email", contactInfo.email);
    formData.append("message", contactInfo.message);
    formData.append("access_key", apiKey);
    try {
      const res = await fetch(`${baseUrl}/submit`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.ok || data?.success) {
        console.log("Contact mail sent successfully");
        toast.success("Sent Successfully", {
          position: "bottom-right",
          autoClose: 2000,
          theme: "dark",
        });
      } else {
        console.log("Failed to send message", data.message);
        toast.error("Failed to send message", {
          position: "bottom-right",
          autoClose: 2000,
          theme: "dark",
        });
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSendingMessage(false);
    }
  };

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
      id="contact"
      className="flex flex-col gap-8 lg:gap-15 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div className="flex items-center flex-col" variants={fadeUp}>
        <h2 className="text-[20px] sm:text-[30px] lg:text-[40px] font-medium">
          Get In <span className="text-tetiary">Touch</span>
        </h2>
        <p className="text-sm sm:text-base lg:text-[18px] font-medium lg:w-3/7 text-center">
          Let’s bring your ideas to life — reach out anytime.{" "}
        </p>
      </motion.div>
      <div className="flex gap-3 lg:flex-row flex-col items-stretch">
        <div className="px-5 py-5 flex flex-col gap-7 bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.2)] rounded-[10px] lg:w-1/2">
          <h2 className="text-base text-tetiary font-semibold sm:text-lg lg:text-[24px]">
            Send a message
          </h2>
          <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="name"
                className="font-semibold text-xs sm:text-sm lg:text-[18px]"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="bg-[rgba(217,205,233,0.3)] outline-0 border-0 rounded-[10px] p-2 text-white text-xs sm:text-sm lg:text-base font-semibold"
                name="name"
                onChange={handleContactChange}
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="font-semibold text-xs sm:text-sm lg:text-[18px]"
              >
                Email
              </label>
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-[rgba(217,205,233,0.3)] outline-0 border-0 rounded-[10px] p-2 text-white text-xs sm:text-sm lg:text-base font-semibold"
                name="email"
                onChange={handleContactChange}
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="message"
                className="font-semibold text-xs sm:text-sm lg:text-[18px]"
              >
                Message
              </label>
              <textarea
                type="text"
                placeholder="Send a message"
                className="bg-[rgba(217,205,233,0.3)] outline-0 border-0 rounded-[10px] p-2 text-white text-xs sm:text-sm lg:text-base font-semibold h-[104px] resize-none"
                name="message"
                onChange={handleContactChange}
                required
              ></textarea>
            </div>
            <button
              disabled={sendingMessage}
              className="bg-tetiary outline-0 border-0 rounded-[10px] p-2 cursor-pointer text-white text-sm sm:text-base lg:text-[18px] font-semibold"
            >
              {sendingMessage ? "Sending Message...." : "Send Message"}
            </button>
          </form>
        </div>
        <div className="flex flex-col gap-3 lg:w-1/2">
          <div className="px-5 py-5 flex flex-col gap-3 bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.2)] rounded-[10px] lg:h-7/10">
            <h2 className="text-base text-tetiary font-semibold sm:text-lg lg:text-[24px]">
              Contact Information
            </h2>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 lg:gap-4">
                <div className="py-2 px-2 lg:px-4 bg-[rgba(217,205,233,.1)] rounded-[10px] border border-[rgba(255,255,255,0.2)]">
                  <IoMail className="text-sm sm:text-base lg:text-[24px]" />
                </div>
                <a
                  href="mailto:alabiidrisolasunkanmi@gmail.com"
                  className="font-semibold text-xs sm:text-sm lg:text-[18px]"
                >
                  alabiidrisolasunkanmi@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 lg:gap-4">
                <div className="py-2 px-2 lg:px-4 bg-[rgba(217,205,233,.1)] rounded-[10px] border border-[rgba(255,255,255,0.2)]">
                  <FaPhoneAlt className="text-sm sm:text-base lg:text-[24px]" />
                </div>
                <div className="flex items-center gap-1">
                  <a
                    href="tel:+2349031948652"
                    className="font-semibold text-xs sm:text-sm lg:text-[18px]"
                  >
                    09031948652
                  </a>
                  <span className="font-semibold text-xs sm:text-sm lg:text-[18px]">
                    /
                  </span>

                  <a
                    href="tel:+2348122680842"
                    className="font-semibold text-xs sm:text-sm lg:text-[18px]"
                  >
                    08122680842
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2 lg:gap-4">
                <div className="py-2 px-2 lg:px-4 bg-[rgba(217,205,233,.1)] rounded-[10px] border border-[rgba(255,255,255,0.2)]">
                  <img
                    src="/whatsapp.png"
                    alt="whatsappImg"
                    className="w-3.5 sm:w-4 lg:w-6"
                  />
                </div>
                <a
                  href="https://api.whatsapp.com/send/?phone=2349028315839&text=Hi+Idris%2C+I%27m+planning+on%25brnging+up+a+project&type=phone_number&app_absent=0"
                  className="font-semibold text-xs sm:text-sm lg:text-[18px]"
                  target="_blank"
                >
                  09028315839
                </a>
              </div>
              <div className="flex items-center gap-2 lg:gap-4">
                <div className="py-2 px-2 lg:px-4 bg-[rgba(217,205,233,.1)] rounded-[10px] border border-[rgba(255,255,255,0.2)]">
                  <FaLocationDot className="text-sm sm:text-base lg:text-[24px]" />
                </div>
                <h3 className="font-semibold text-xs sm:text-sm lg:text-[18px]">
                  Lagos, Nigeria
                </h3>
              </div>
            </div>
          </div>
          <div className="px-5 py-5 flex flex-col gap-3 bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.2)] rounded-[10px]">
            <h2 className="text-base text-tetiary font-semibold sm:text-lg lg:text-[24px]">
              Add Me Up
            </h2>
            <div className="flex flex-col gap-5 lg:w-9/10">
              <div className="flex justify-between gap-5">
                <a
                  className="py-2 px-5 w-1/2 lg:px-8 bg-[rgba(217,205,233,.1)] rounded-[10px] border border-[rgba(255,255,255,0.2)] flex gap-4 items-center"
                  href="https://x.com/dev_drizzy?s=21"
                  target="_blank"
                >
                  <img
                    src="/x.png"
                    alt="whatsappImg"
                    className="w-3.5 sm:w-4 lg:w-6"
                  />
                  <h4 className="font-semibold text-xs sm:text-sm lg:text-[18px]">
                    Twitter
                  </h4>
                </a>
                <a
                  className="py-2 px-5 w-1/2 lg:px-8 bg-[rgba(217,205,233,.1)] rounded-[10px] border border-[rgba(255,255,255,0.2)] flex gap-4 items-center"
                  href="https://www.instagram.com/des_drizzy77?igsh=eWI4dXJzcXIyajZm&utm_source=qr"
                  target="_blank"
                >
                  <img
                    src="/ig.png"
                    alt="whatsappImg"
                    className="w-3.5 sm:w-4 lg:w-6"
                  />
                  <h4 className="font-semibold text-xs sm:text-sm lg:text-[18px]">
                    Instagram
                  </h4>
                </a>
              </div>
              <div className="flex justify-between gap-5">
                <a
                  className="py-2 px-5 w-1/2 lg:px-8 bg-[rgba(217,205,233,.1)] rounded-[10px] border border-[rgba(255,255,255,0.2)] flex gap-4 items-center"
                  href="https://www.linkedin.com/in/idris-olasunkanmi-alabi-38a277395"
                  target="_blank"
                >
                  <img
                    src="/in.png"
                    alt="whatsappImg"
                    className="w-3.5 sm:w-4 lg:w-6"
                  />
                  <h4 className="font-semibold text-xs sm:text-sm lg:text-[18px]">
                    LinkedIn
                  </h4>
                </a>
                <a
                  className="py-2 px-5 w-1/2 lg:px-8 bg-[rgba(217,205,233,.1)] rounded-[10px] border border-[rgba(255,255,255,0.2)] flex gap-4 items-center"
                  href="https://www.behance.net/alabiidrisol"
                  target="_blank"
                >
                  <img
                    src="/be.png"
                    alt="whatsappImg"
                    className="w-3.5 sm:w-4 lg:w-6"
                  />
                  <h4 className="font-semibold text-xs sm:text-sm lg:text-[18px]">
                    Behance
                  </h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
