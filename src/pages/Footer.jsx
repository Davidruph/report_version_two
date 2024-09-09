import { Link } from "react-router-dom";
import "../App.css";
import img_white from "../assets/logo-white.svg";
import x from "../assets/x.svg";
import facebook from "../assets/facebook.svg";
import linkedln from "../assets/linkedln.svg";

const Footer = () => {
  return (
    <section className="bg-[#0C172C]">
      <div className="w-full py-[40px] md:py-[24px] gap-8 md:gap-10 flex flex-col items-center px-[16px] lg:px-[120px]">
        <div className="flex flex-col md:flex-row item-center justify-center md:justify-between w-full gap-8">
          <div className="logo-section">
            <img src={img_white} alt="logo white" />
          </div>
          <div className="menu-section flex flex-col md:flex-row gap-6 justify-center">
            <Link to={"#"}>About us</Link>
            <Link to={"#"}>Privacy Policy</Link>
            <Link to={"#"}>Terms of Service</Link>
          </div>
          <div className="menu-section">
            <Link to={"#"}>© Copyright 2024</Link>
          </div>
        </div>

        <div className="flex items-center justify-start md:justify-center w-full gap-3">
          <Link to={"#"}>
            <img src={x} alt="" />
          </Link>
          <Link to={"#"}>
            <img src={facebook} alt="" />
          </Link>
          <Link to={"#"}>
            <img src={linkedln} alt="" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
