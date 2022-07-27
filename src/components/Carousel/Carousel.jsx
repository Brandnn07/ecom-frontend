import React from "react";
import "./style.scss"

export default function Carousel() {

    const handlePageTransfer = () => {
        window.location.pathname = "/products";
      };
    
      const handleColorChange = () => {
        document.querySelector("body").classList.toggle("blue");
        document.querySelector(".player").classList.toggle("blue");
      };
    

    return( 
    <>
        <h2 class="reveal sliderHead">
        Emporium quality vehicles
      </h2>

      <div class="reveal homeContainer">
        <input
          onClick={handleColorChange}
          type="radio"
          name="slider"
          id="item-1"
          checked
        />
        <input
          onClick={handleColorChange}
          type="radio"
          name="slider"
          id="item-2"
        />
        <input
          onClick={handleColorChange}
          type="radio"
          name="slider"
          id="item-3"
        />
        <div class="cards">
          <label class="card" for="item-1" id="song-1">
            <img
              src={require("../../assests/images/626b6a19a571503c003954a0_2021-Aston-Martin-DBS-Superleggera-Volante-White-Stone-SCFRMHCV8MGT02491_100-p-800(1).jpeg")}
              alt="song"
            />
          </label>
          <label class="card" for="item-2" id="song-2">
            <img
              src={require("../../assests/images/2018-Lamborghini-Huracan-Coupe-Grigio-Lynx-ZHWUC2ZF7JLA10515_070-p-800.jpeg")}
              alt="song"
            />
          </label>
          <label class="card" for="item-3" id="song-3">
            <img
              src={require("../../assests/images/6260db845d43271b506d7ca2_2021-Lamborghini-Aventador-SVJ-Roadster-Grigio-Liqueo-ZHWUN6ZDXMLA10769_076-p-800.jpeg")}
              alt="song"
            />
          </label>
        </div>
        <div onClick={handlePageTransfer} class="player">
          <div class="upper-part">
            <div class="info-area" id="test">
              <label class="song-info" id="song-info-1">
                <p class="title">2021 Aston Martin DBS Superleggera Volante</p>
                <div class="sub-line">
                  <p class="subtitle">$369, 999</p>
                </div>
              </label>
              <label class="song-info" id="song-info-2">
                <p class="title">Lamborghini Huracan Coupe Grigio Lynx</p>
                <div class="sub-line">
                  <p class="subtitle">$259,999</p>
                </div>
              </label>
              <label class="song-info" id="song-info-3">
                <p class="title">
                  2021 Lamborghini Aventador SVJ Roadster-Grigio
                </p>
                <div class="sub-line">
                  <p class="subtitle">$1,019,999</p>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}