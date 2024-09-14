import React from "react";

export default function ImageContent ({imgPath, imgCaption}) {
  return (
    <>
      <img
        src={imgPath}
        alt="m1"
        className="destination-image"
      />
      <small style={{ textAlign: "center", display: "block" }}>
        {imgCaption}
      </small>
    </>
  );
};
