import React from "react";
import Bluebutton from "../Button/Bluebutton";
import img from "../../images/dolpa.jpeg";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LandscapeIcon from "@mui/icons-material/Landscape";

const OurTrendingPackageCard = () => {
  return (
    <>
      <div className="ourtrendingcard--container">
        <div className="ourtrendingcard--img">
          <img src={img} />
        </div>
        <div className="ourtrendingcard--content">
          <h1>Climbing Mount Annapurna Trek</h1>
          <div className="ourtrendingcard--location">
            <div style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <FmdGoodIcon sx={{ color: "#2493e3" }} />{" "}
              <p> Kilimanjaro,Tanzania</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <CalendarMonthIcon sx={{ color: "#2493e3" }} /> <p> 7 Days</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            {" "}
            <LandscapeIcon sx={{ color: "#2493e3" }} />{" "}
            <p style={{ color: "gray", margin: " 19px 2px", fontSize: "16px" }}>
              {" "}
              Trekking
            </p>
          </div>

          <div className="otc--btn">
            <Bluebutton value="Explore" />
            <p style={{ color: "gray", fontSize: "20px" }}>Price Rs.2,999</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTrendingPackageCard;
