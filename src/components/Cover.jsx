import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({ img, title, description }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      {/* Blur transition from min to max */}
      <div className="bg-cover  bg-center lg:h-screen h-[400px]  flex flex-col  justify-center items-center">
        <div className="bg-[#151515] h-[350px] w-10/12 flex flex-col opacity-50  text-center justify-center items-center">
          <h3 className="text-5xl font-cinzel text-white mb-5 ">{title}</h3>
          <p className="text-white font-inter w-9/12">{description}</p>
        </div>
      </div>
      {/* <div style={{ height: "200px" }} /> */}
    </Parallax>
  );
};

export default Cover;
