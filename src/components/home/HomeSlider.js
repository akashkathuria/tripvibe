import * as React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { HOME_DATA } from "./HomePageData";

function HomeSlider({heading}) {

  const navigate = useNavigate();
const images = HOME_DATA.imageList;

  const handleClick = (e) => {
    const post = images[e];
    navigate(post.redirect);
  }

  return (
    <>
    {heading && <Typography
        variant="h6"
        sx={{
          fontWeight: 900,
        }}
      >
        {heading}
      </Typography>}
        <Carousel onClickItem={handleClick} handleClickItem={(e) => handleClick(e)} className="carousel-layout">
      {images.map((imageEle) => (
        <div className="slider-image">
          <img src={imageEle.imgPath} alt="gallery"/>
          <p className="legend">{imageEle.label}</p>
        </div>
      ))}
    </Carousel>
    </>
  );
}

export default HomeSlider;
