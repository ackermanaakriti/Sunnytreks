// MyCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TopDestination.scss';
import { Container } from '@mui/material';
import TopDestinationCard from '../../Components/Cards/TopDestinationCard';
import {TdvData} from '../../Data/TopDestinationVacData'

const MyCarousel = () => {
    console.log(TdvData)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    accessibility:true,
    slidesToScroll: 2,

  };

  return (
    <div className="carousel-container">
        <Container>
      <Slider {...settings}>
        {TdvData.map((item)=>
        (
            <TopDestinationCard item={item}/>
        ))}
      </Slider>
      </Container>
    </div>
  );
};

export default MyCarousel;
