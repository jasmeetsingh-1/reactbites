import React from "react";
import image from "../../assets/tempAssets/Snapchat-1619031910.jpg";
const TempFileComponent = () => {
  return (
    <div style={{ maxWidth: "20%", maxHeight: "20%" }}>
      <svg
        id="sw-js-blob-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop
              id="stop1"
              stop-color="rgba(194.159, 101.805, 65.889, 1)"
              offset="0%"
            ></stop>
            <stop
              id="stop2"
              stop-color="rgba(125.856, 51.258, 22.204, 1)"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <mask id="image-1" mask-type="alpha">
          <path
            fill="url(#sw-gradient)"
            d="M24.9,-14.7C30.1,-5.4,30.6,6.2,25.6,15.2C20.7,24.2,10.3,30.4,-1.8,31.4C-13.8,32.5,-27.7,28.2,-33,19C-38.4,9.8,-35.2,-4.3,-28.3,-14.6C-21.3,-25,-10.7,-31.4,-0.4,-31.2C9.9,-31,19.7,-24,24.9,-14.7Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            stroke-width="0"
            style={{ transition: "all 0.3s ease 0s" }}
            stroke="url(#sw-gradient)"
          ></path>
        </mask>
        <g mask="url(#image-1)">
          <path
            fill="url(#sw-gradient)"
            d="M24.9,-14.7C30.1,-5.4,30.6,6.2,25.6,15.2C20.7,24.2,10.3,30.4,-1.8,31.4C-13.8,32.5,-27.7,28.2,-33,19C-38.4,9.8,-35.2,-4.3,-28.3,-14.6C-21.3,-25,-10.7,-31.4,-0.4,-31.2C9.9,-31,19.7,-24,24.9,-14.7Z"
            // width="100%"
            // height="100%"
            transform="translate(50 50)"
            stroke-width="0"
            style={{ transition: "all 0.3s ease 0s", position: "relative" }}
            stroke="url(#sw-gradient)"
          ></path>
          <image
            href={image}
            width="106%"
            height="140%"
            style={{
              position: "absolute",
              top: "0",
              bottom: "0",
              right: "0",
              left: "0",
            }}
          />
        </g>
      </svg>
    </div>
  );
};

export default TempFileComponent;
