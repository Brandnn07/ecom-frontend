import React from "react";
import "./style.scss";

export default function Hero() {
  window.onload = () => {
    const log = console.log,
      array = [
        "{require(../../assests/images/videos/pexels-taryn-elliott-5309353.mp4)}",
        "{require(../../assests/images/videos/video.mp4)}",
        "{require(../../assests/images/videos/pexels-tima-miroshnichenko-6873503.mp4)}",
      ],
      random = Math.floor(Math.random() * array.length),
      target = document.getElementById("target");
    console.log(array[random]);
    target.src = `${array[random]}`;
    log(target);
  };

  return (
    <div>
      <video autoPlay muted loop id="myVideo">
        <source
          id="target"
          src={require("../../assests/images/videos/pexels-taryn-elliott-5309353.mp4")}
          type="video/mp4"
        />
      </video>
        <div id="hero">
          <p>Welcome to the luxury.​</p>
        </div>
    </div>
  );
}
