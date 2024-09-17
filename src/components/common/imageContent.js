import React from "react";

export default function ImageContent ({imgPath, imgCaption}) {
  return (
    <>
      <img
        src={imgPath}
        alt={imgCaption}
        className="destination-image"
      />
      <small style={{ textAlign: "center", display: "block" }}>
        {imgCaption}
      </small>
    </>
  );
};
