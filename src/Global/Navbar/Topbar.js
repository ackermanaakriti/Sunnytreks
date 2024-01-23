import React from "react";
import "./Navbar.scss";
import { Container, Grid } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MailOutline from "@mui/icons-material/MailOutline";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeContext } from "../../ThemeSetting/ThemeContext";
import { useContext,useState } from "react";

const Topbar = () => {
  const { setHomepage } = useContext(ThemeContext);
  const [isListVisible, setIsListVisible] = useState(false);

  const handleThemeClick = (theme) => {
    setHomepage(theme);
    setIsListVisible(false);
  };
  const toggleListVisibility = () => {
    setIsListVisible((prev) => !prev);
  };
  return (
    <>
      <div className="topbar--">
        <div className="topbar--container">
          <div className="topbar--wrapper">
            <p>20% off on the trips to Annapurna from Mustang Route.</p>
          </div>
        </div>
        <div className="contact--topbar">
          <Container>
            <Grid container>
              <Grid xs={6}>
                <div style={{ display: "flex", gap: "3em" }}>
                  <div className="contact--div">
                    <MailOutline /> <p>rae@12gmail.com</p>
                  </div>
                  <div className="contact--div">
                    <PhoneEnabledIcon /> <p>rae@12gmail.com</p>
                  </div>
                </div>
              </Grid>
              <Grid xs={6}>
                <div className="socialmedia--container">
                  <Brightness7Icon onClick={toggleListVisibility}/>
                  {isListVisible && (
        <ul>
          <li onClick={() => handleThemeClick('themeOne')}>Theme One</li>
          <li onClick={() => handleThemeClick('themeTwo')}>Theme Two</li>
          <li onClick={() => handleThemeClick('themeThree')}>Theme Three</li>
        </ul>
      )}
                  <FacebookIcon />
                  <InstagramIcon />
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Topbar;
