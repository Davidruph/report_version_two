import "../App.css";
import { Link } from "react-router-dom";
import line from "../assets/line.svg";
import trends1 from "../assets/trends1.svg";
import trends2 from "../assets/trends2.svg";
import right from "../assets/right.svg";

const Trends = () => {
  return (
    <section>
      <div className="w-full flex items-center flex-col px-[16px] lg:px-[120px] justify-center py-[40px]">
        <p className="reason-head text-[32px] md:text-[40px] pb-3">
          The Challenge of <br /> Understanding Market Trends
        </p>
        <p className="why-choose-us pb-12">The Problem vs Our Solution </p>

        <div className="flex justify-center flex-col lg:flex-row items-center gap-5">
          <div className="trends-card border justify-center h-auto md:h-[750px] max-w-[560px] w-full bg-[#F3EBFF] rounded-[24px] p-5 lg:p-10">
            <p className="trends-card-topic-1 text-[16px] lg:text-[18px] pb-5">
              THE PROBLEM
            </p>

            <div className="flex justify-center">
              <img src={trends1} alt="" />
            </div>

            <p className="why-choose-us pt-5">
              Disjoined nationwide report and challenges in tracking food prices
              and market trends
            </p>

            <div className="flex justify-center pt-5 md:pt-16">
              <Link className="trends-link flex items-center justify-center">
                Learn more <img src={right} />
              </Link>
            </div>
          </div>

          <div className="h-auto">
            <img src={line} className="hidden lg:flex" alt="" />
          </div>

          <div className="trends-card border h-auto justify-center md:h-[750px] max-w-[560px] w-full bg-[#10800033] rounded-[24px] p-5 lg:p-10">
            <p className="trends-card-topic-2 text-[16px] lg:text-[18px] pb-5">
              OUR SOLUTION
            </p>

            <div className="flex justify-center">
              <img src={trends2} alt="" />
            </div>

            <p className="why-choose-us pt-5">
              How our reports provide solutions with precise data and analysis{" "}
            </p>

            <div className="flex justify-center pt-5 md:pt-16">
              <Link className="trends-link flex justify-center items-center">
                Discover our approach <img src={right} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trends;
