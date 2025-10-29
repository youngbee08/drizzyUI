import { Link } from "react-router-dom";

const Footer = () => {
  const handleScroll = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.href);

    if (e.target.href === "") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <footer className="w-full bg-linear-to-l from-secondary to-tetiary/30 text-white  px-6 sm:px-10 py-5 flex flex-col gap-3 border-t border-purple-700">
      <div className="flex lg:flex-row flex-col justify-between items-center">
        <p className="text-[16px] lg:text-[18px] transition-colors font-semibold">
          © {new Date().getFullYear()} Alabi Idris
        </p>

        <div className="flex space-x-4">
          <a
            onClick={handleScroll}
            href=""
            className="text-[16px] lg:text-[18px] hover:text-tetiary transition-colors duration-300 font-semibold"
          >
            Home
          </a>
          <a
            onClick={handleScroll}
            href="/#about"
            className="text-[16px] lg:text-[18px] hover:text-tetiary transition-colors duration-300 font-semibold"
          >
            About
          </a>
          <a
            onClick={handleScroll}
            href="/#projects"
            className="text-[16px] lg:text-[18px] hover:text-tetiary transition-colors duration-300 font-semibold"
          >
            Project
          </a>
          <a
            onClick={handleScroll}
            href="/#contact"
            className="text-[16px] lg:text-[18px] hover:text-tetiary transition-colors duration-300 font-semibold"
          >
            Contact
          </a>
        </div>
      </div>
      <hr className="text-[rgba(255,255,255,1)] text-sm" />
      <p className="text-xs sm:text-sm lg:text-base text-center">
        Shaping the future of digital products
      </p>
    </footer>
  );
};

export default Footer;
