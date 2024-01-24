import React from "react";
import Layout from "../Layout";
import "./Pages.scss";
import { Container, Grid } from "@mui/material";
import ContactUsForm from "../Components/ContactUsForm";
import MailOutline from "@mui/icons-material/MailOutline";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

const Contactus = () => {
  return (
    <>
      <Layout>
        <div className="aboutus--container">
          <Container>
            <div className="aboutus--content">
              <h1 className="pages--header">Contact Us</h1>
              <p className="pages--subheader">
                orem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </Container>
        </div>

        <div className="contactus--form--wrapper">
          <Container>
            <Grid container>
              <Grid xs={6}>
                <ContactUsForm />
              </Grid>
              <Grid xs={6}>
                <div className="detail--list">
                  <div className="detail--address">
                    <span>
                      <MailOutline sx={{ color: "white", fontSize: "30px" }} />
                    </span>
                    <div className="">
                      <h4>Email Address</h4>
                      <p>xyz@gmail.com</p>
                    </div>
                  </div>
                  <div className="detail--address">
                    <span>
                      <PhoneEnabledIcon sx={{ color: "white", fontSize: "30px" }} />
                    </span>
                    <div className="">
                      <h4>Phone Number</h4>
                      <p>+977 9765438</p>
                    </div>
                  </div>
                  <div className="detail--address">
                    <span>
                      <FmdGoodIcon sx={{ color: "white", fontSize: "30px" }} />
                    </span>
                    <div className="">
                      <h4>Location Address</h4>
                      <p>Lorem,Lorem</p>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>

        <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1766.0991587887424!2d85.32279026947053!3d27.711162489912258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1706089604482!5m2!1sen!2snp" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </Layout>
    </>
  );
};

export default Contactus;
