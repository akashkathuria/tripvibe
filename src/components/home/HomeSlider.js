import * as React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import { HOME_DATA } from "./HomePageData";
import { MAURITIUS_DATA } from "../destination/mauritius/mauritiusData";

function HomeSlider({ heading }) {
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const [fullscreenImage, setFullscreenImage] = React.useState("");

  const openFullscreen = (image) => {
    setFullscreenImage(image);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };
  // const navigate = useNavigate();
  const images = HOME_DATA.imageList;

  // const handleClick = (e) => {
  //   const post = images[e];
  //   navigate(post.redirect);
  // }

  return (
    <Box sx={{ width: "100%" }}>
      {heading && (
        <Typography
          variant="h6"
          sx={{
            fontWeight: 900,
            color: "black",
            mb: "5px",
          }}
        >
          {heading}
        </Typography>
      )}
      {/* onClickItem={handleClick} handleClickItem={(e) => handleClick(e)} */}
      <Carousel
        autoPlay
        showThumbs={false}
        infiniteLoop
        useKeyboardArrows
        className="carousel-layout"
      >
        {images.map((imageEle, index) => (
          <div
            key={index}
            style={{
              background: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),url(${imageEle.imgPath}) no-repeat center center/cover`,
            }}
            className="slider-image"
            onClick={() => openFullscreen(imageEle.imgPath)}
          >
            <img
              className="slider-images"
              src={imageEle.imgPath}
              alt="gallery"
            />
            <p className="legend">{imageEle.label}</p>
          </div>
        ))}
      </Carousel>
      {isFullscreen && (
        <div className="fullscreen-overlay" onClick={closeFullscreen}>
          <img
            src={fullscreenImage}
            alt="Fullscreen"
            className="fullscreen-image"
          />
        </div>
      )}
      <Box>
        <Typography variant="body1" sx={{ textAlign: "left", color: "black", padding:"10px" }}>
          {MAURITIUS_DATA.summary}
        </Typography>
      </Box>
    </Box>
  );
}

export default HomeSlider;
