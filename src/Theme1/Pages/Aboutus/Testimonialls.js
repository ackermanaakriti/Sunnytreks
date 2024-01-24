import React from "react";
import { Container, Paper, Button } from "@mui/material";
import { styled } from "@mui/system";
import Carousel from "react-material-ui-carousel";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TestimonialCard from "../../../Components/Cards/TestimonialCard";
import '../Pages.scss'
import TestimoniallCard from "../../Components/Cards/TestimoniallCard";

const NavButtonContainer = styled("div")({
  position: "absolute",
  top: "40%",
  transform: "translateY(-50%)",
  left: 0,
  width: "100%",
});

const NavButton = styled(Button)({
  display: "flex",
  color:'rgba(7, 145, 190, 0.85)    '
});

const Nav = styled("div")({
  display: "flex",
});

const NavText = styled("span")({
  position: "relative",
  top: "5%",
  fontSize: "20px",
  color: "rgba(7, 145, 190, 0.85)",
  fontWeight: "500",
  marginLeft: "10px",
  textAlign: "center",
});

const Testimonialls = () => {
  const items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <div className="testimonial--container">
     <div className='header--info'>
            <h1 className='sections--header'>What Our Client Say About Us</h1>
            {/* <p className='p--headerr'>Mollit voluptatem  convallis elementum corporis quo veritatis aliquid blandit, blandit torquent,
             odit placeat. Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae placeat.</p> */}
            </div>
      <Container>
        <div
          style={{
            paddingTop: "50px",
            backgroundColor: "aliceblue",
            padding: "90px ",
            marginTop: "60px",
          }}
        >
          <Carousel
            sx={{}}
            NavButton={({ onClick, className, next, prev }) => (
              <NavButtonContainer>
                <NavText>
                  {" "}
                  <p style={{ margin: " 0px 0px 10px 18px" }}>
                    Client Testimonials
                  </p>{" "}
                </NavText>
                <Nav>
                  <NavButton
                    onClick={onClick}
                    className={className}
                    prev={prev}
                  >
                    <ArrowBackIosIcon />
                  </NavButton>
                  <NavButton
                    onClick={onClick}
                    className={className}
                    next={next}
                  >
                    <ArrowForwardIosIcon />
                  </NavButton>
                </Nav>
              </NavButtonContainer>
            )}
          >
            {items.map((item, i) => (
              <TestimoniallCard/>
            ))}
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default Testimonialls;
