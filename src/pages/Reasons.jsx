import "../App.css";
import reason1 from "../assets/reason1.svg";
import reason2 from "../assets/reason2.svg";
import reason3 from "../assets/reason3.svg";
import { Link } from "react-router-dom";

const Reasons = () => {
  return (
    <section>
      <div className="w-full flex items-center flex-col px-[16px] lg:px-[120px] justify-center py-[40px]">
        {" "}
        <p className="reason-head text-[32px] md:text-[40px] pb-3">
          Why Choose our Reports?
        </p>
        <p className="why-choose-us pb-12">Why choose us?</p>
        <div className="flex flex-col md:flex-row w-full justify-center items-center gap-5 pb-10">
          <div className="reason-card flex flex-col justify-center items-center">
            <img src={reason1} alt="" />
            <p className="reason-card-text">Comprehensive Market Analysis</p>
          </div>
          <div className="reason-card flex flex-col justify-center items-center">
            <img src={reason2} alt="" />
            <p className="reason-card-text">Data-driven Insights</p>
          </div>
          <div className="reason-card flex flex-col justify-center items-center">
            <img src={reason3} alt="" />
            <p className="reason-card-text">Timely Updates</p>
          </div>
        </div>
        <Link to={"#"} className="menu-btn w-auto h-auto text-white mb-8">
          Get monthly Report
        </Link>
      </div>
    </section>
  );
};

export default Reasons;
