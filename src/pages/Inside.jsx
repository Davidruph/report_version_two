import "../App.css";
import inside1 from "../assets/inside1.svg";
import inside2 from "../assets/inside2.svg";
import inside3 from "../assets/inside3.svg";
import { Link } from "react-router-dom";

const Inside = () => {
  return (
    <section>
      <div className="w-full flex items-center flex-col px-[16px] lg:px-[120px] justify-center py-[40px]">
        {" "}
        <p className="reason-head text-[32px] md:text-[40px] pb-3">
          What’s Inside?{" "}
        </p>
        <p className="why-choose-us pb-12">
          Take a quick glimpse into our Market Report
        </p>
        <div className="flex flex-col md:flex-row w-full gap-5 pb-10 justify-center items-center">
          <div className="flex flex-col justify-center gap-3">
            <div className="reason-card border-0 flex flex-col justify-center items-center">
              <img src={inside1} alt="" />
            </div>
            <p className="reason-card-text text-[16px] md:text-[18px] pt-3">
              Focus on Price trends in a specific region
            </p>
          </div>

          <div className="flex flex-col justify-center gap-3">
            <div className="reason-card border-0 flex flex-col justify-center items-center">
              <img src={inside2} alt="" />
            </div>
            <p className="reason-card-text text-[16px] md:text-[18px] pt-3">
              Highlighting cost changes in essential goods
            </p>
          </div>

          <div className="flex flex-col justify-center gap-3">
            <div className="reason-card border-0 flex flex-col justify-center items-center">
              <img src={inside3} alt="" />
            </div>
            <p className="reason-card-text text-[16px] md:text-[18px] pt-3">
              Predictive analytics for future market shifts
            </p>
          </div>
        </div>
        <Link to={"#"} className="menu-btn w-auto h-auto text-white mb-8">
          See More Insights
        </Link>
      </div>
    </section>
  );
};

export default Inside;
