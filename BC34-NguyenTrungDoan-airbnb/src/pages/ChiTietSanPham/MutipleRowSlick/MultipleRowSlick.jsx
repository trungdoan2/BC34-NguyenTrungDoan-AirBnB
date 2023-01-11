import React, { Component } from "react";
import styleSlick from "./MultipleRowSlick.module.css";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import RoomLocation from "../RoomLocation";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-next"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const MultipleRowSlick = (props) => {


    const renderPhong = () => {
        return props.arrRoom.slice(0, 12).map((item, index) => {
          return (
            <div key={index}>
              <hr className="mt-5"/>
              <RoomLocation item={item} />
            </div>
          );
        });
      };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "50px",
    slidesToShow: 3,
    speed: 500,
    row: 2,
    slidesPreRow: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
   <div>

<div className="flex justify-center ...">
  <div>
    {renderPhong()}
  </div>
</div>

     
    </div>
  );
};
export default MultipleRowSlick;
