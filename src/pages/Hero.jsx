import "../App.css";
import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.svg";
import hero2 from "../assets/hero2.svg";

const Hero = () => {
  return (
    <section className="w-full px-0 lg:px-[120px]">
      <div className="hero-section rounded-[16px]">
        <div className="flex flex-col justify-center items-center py-20">
          <h5 className="hero-caption text-[48px] md:text-[72px]">
            Get ahead with <br /> data-driven <br />
          </h5>
          <p className="hero-caption-spotlight text-[48px] lg:text-[72px]">
            Market Reports
          </p>

          <p className="hero-caption-text text-[18px] md:text-[20px] pt-5 pb-10">
            Access actionable bi-monthly economic reports for{" "}
            <br className="hidden md:flex" /> business insights.
          </p>

          <Link
            to={"#"}
            className="menu-btn w-[278px] h-auto text-white text-center"
          >
            Get Premium Subscription Free
          </Link>

          <div className="flex flex-col lg:flex-row justify-center gap-3 items-center pt-10 px-3 md:px-0">
            <img src={hero1} alt="" />
            <img src={hero2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
