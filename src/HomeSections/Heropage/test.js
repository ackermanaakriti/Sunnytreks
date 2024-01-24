import { Container, Grid } from "@mui/material";
import React from "react";
import "./Heropage.scss";
import PlaceIcon from "@mui/icons-material/Place";
import LightModeIcon from "@mui/icons-material/LightMode";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
const HeropageSearch = () => {
  return (
    <>
      <div className="heropage--search">
        <Container>
          <div className="heropage--search--container">
            <div className="search--field">
              <PlaceIcon sx={{ fontSize: "25px" }} />
              <input placeholder="Destination" />
            </div>

            <div className="search--field">
              <LightModeIcon sx={{ fontSize: "25px" }} />

              <input placeholder="Season" />
            </div>
            <div className="search--field">
              <EmojiPeopleIcon sx={{ fontSize: "25px" }} />
              <input placeholder="Activities" />
            </div>

            <button className="search--rsultbtn">Search </button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HeropageSearch;
