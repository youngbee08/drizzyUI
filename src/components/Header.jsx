import { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "" },
    { name: "About", path: "#about" },
    { name: "Project", path: "#project" },
    { name: "Contact", path: "#contact" },
  ];

  const handleScroll = (nav) => (e) => {
    if (nav.path === "") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  };

  return (
    <header className="flex justify-between items-center px-6 sm:px-10 py-5 sticky top-0 z-999 bg-linear-to-b from-secondary to-primary border-b border-gray-600 text-white">
      <h2 className="text-2xl sm:text-3xl font-semibold flex text-tetiary">
        Drizzy <span className="text-white">UI</span>
      </h2>

      <nav className="hidden md:flex gap-8 items-center">
        {navItems.map((nav, i) => {
          const isActiveTab = location.hash === nav.path;
          return (
            <a
              key={i}
              href={nav.path}
              onClick={handleScroll(nav)}
              className={`${
                isActiveTab ? "text-tetiary" : "text-white"
              } text-[16px] lg:text-[18px] font-semibold hover:text-tetiary transition-colors duration-300`}
            >
              {nav.name}
            </a>
          );
        })}
      </nav>

      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute top-[70px] left-0 w-full bg-linear-to-b from-secondary to-primary flex flex-col items-center gap-5 py-6 border-t border-gray-600 md:hidden"
          >
            {navItems.map((nav, i) => {
              const isActiveTab = location.hash === nav.path;
              return (
                <motion.a
                  key={nav.name}
                  href={nav.path}
                  onClick={handleScroll(nav)}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={i}
                  className={`${
                    isActiveTab ? "text-tetiary" : "text-white"
                  } text-[16px] sm:text-[18px] font-medium hover:text-tetiary transition-colors`}
                >
                  {nav.name}
                </motion.a>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
