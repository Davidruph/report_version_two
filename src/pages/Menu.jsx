import "../App.css";
import img_dark from "../assets/logo-black.svg";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence

const Menu = () => {
  const [isOpen, setOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <>
      <section>
        <div className="w-full flex items-center px-[16px] lg:px-[120px] justify-between py-[40px]">
          <div className="logo-section">
            <img src={img_dark} alt="logo white" />
          </div>
          <div className="menu-section hidden md:flex items-center menu-links">
            <Link to={"#"}>What we do</Link>
            <Link to={"#"}>See Insights</Link>
            <Link to={"#"}>Benefits</Link>
          </div>
          <div className="menu-section text-[#747474] hidden md:flex items-center">
            <Link to={"#"} className="menu-btn text-white">
              Get Started
            </Link>
          </div>
          <div className="hamburger-menu md:hidden border bg-black rounded-[6px]">
            <Hamburger toggled={isOpen} toggle={setOpen} color={"white"} />
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="bg-white flex w-full p-5"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              transition={{ duration: 0.5 }}
            >
              <div className="menu-section text-[#747474] flex flex-col items-start gap-8 w-full">
                <Link to={"#"}>What we do</Link>
                <Link to={"#"}>See Insights</Link>
                <Link to={"#"}>Benefits</Link>
                <Link to={"#"} className="menu-btn text-white">
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default Menu;
