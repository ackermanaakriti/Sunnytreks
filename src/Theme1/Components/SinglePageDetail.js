import React from "react";
import { Container, Grid } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HikingIcon from '@mui/icons-material/Hiking';
import GroupsIcon from '@mui/icons-material/Groups';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FilterHdrIcon from '@mui/icons-material/FilterHdr';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import "./components.scss";

const SinglePageDetail = () => {
  return (
    <>
      <div className="singlepagedetail--container">
        <Container>
          <div className="singlepgdetail--wrapper">
            <Grid container>
              <Grid xs={3}>
                <div className="pgdetail">
                  <AccessTimeIcon sx={{ fontSize: "40px", color: "#F56960" }} />
                  <div className="pgdetail--content">
                    <h4>Duration</h4>
                    <p>17 Days</p>
                  </div>
                </div>
              </Grid>
              <Grid xs={3}>
                <div className="pgdetail">
                  <HikingIcon sx={{ fontSize: "40px", color: "#F56960" }} />
                  <div className="pgdetail--content">
                    <h4>Tour Type</h4>
                    <p>Trekkings</p>
                  </div>
                </div>
              </Grid>
              <Grid xs={3}>
                <div className="pgdetail">
                  <GroupsIcon sx={{ fontSize: "40px", color: "#F56960" }} />
                  <div className="pgdetail--content">
                    <h4>Group Size</h4>
                    <p>+2</p>
                  </div>
                </div>
              </Grid>
              <Grid xs={3}>
                <div className="pgdetail">
                  <AccountBalanceIcon sx={{ fontSize: "40px", color: "#F56960" }} />
                  <div className="pgdetail--content">
                    <h4>Accomodation</h4>
                    <p>Lorem</p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className="singlepgdetail--wrapper">
            <Grid container>
              <Grid xs={3}>
                <div className="pgdetail">
                  <RestaurantIcon sx={{ fontSize: "40px", color: "#F56960" }} />
                  <div className="pgdetail--content">
                    <h4>Meal</h4>
                    <p>Breakfast,Lunch</p>
                  </div>
                </div>
              </Grid>
              <Grid xs={3}>
                <div className="pgdetail">
                  <FilterHdrIcon sx={{ fontSize: "40px", color: "#F56960" }} />
                  <div className="pgdetail--content">
                    <h4>Altitude</h4>
                    <p>2340m</p>
                  </div>
                </div>
              </Grid>
              <Grid xs={3}>
                <div className="pgdetail">
                  <CloudQueueIcon sx={{ fontSize: "40px", color: "#F56960" }} />
                  <div className="pgdetail--content">
                    <h4>Best Season</h4>
                    <p>Lorem</p>
                  </div>
                </div>
              </Grid>
              <Grid xs={3}>
                <div className="pgdetail">
                  <AccountBalanceIcon sx={{ fontSize: "40px", color: "#F56960" }} />
                  <div className="pgdetail--content">
                    <h4>Departure from </h4>
                    <p>kathmandu</p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SinglePageDetail;
