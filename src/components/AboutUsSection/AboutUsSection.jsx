import React from "react";
import "./style.scss";

export default function AboutUsSection() {
  return (
    <>
     <section class="aboutUsSection">
        Born of the spirit of innovation, Emporium epitomises the power of a
        lifelong passion and the beauty of limitless human achievement, creating
        & marketing timeless icons for a changing world
      </section>
      <section class="cards-wrapper">
        <div class="card-grid-space">
          <div class="num">01</div>
          <a
            class="abt-card abt-card1"
            href="/about"
            style={{ backgroundImage: "" }}
          >
            <div>
              <h1>Individuality</h1>
              <p>
                Our talented individuals are our greatest resource. However they
                can only pursue the extraordinary by working together as a team.
                By fostering integrity, excellence and generosity, we give each
                of our people the possibility to express their own full
                potential and to be part of something greater
              </p>
            </div>
          </a>
        </div>
        <div class="card-grid-space">
          <div class="num">02</div>
          <a
            class="abt-card abt-card2"
            href="/about"
          >
            <div>
              <h1>Tradition & Innovation</h1>
              <p>
                Tradition always stems from innovation. The ongoing quest for
                lasting firsts is what fuels us. Our ability to combine
                revolutionary technological solutions with exceptional artisanal
                craftsmanship is what enables us to create icons that stay
                timeless in a fast changing world.
              </p>
            </div>
          </a>
        </div>
        <div class="card-grid-space">
          <div class="num">03</div>
          <a
            class="abt-card abt-card3"
            href="/about"
          >
            <div>
              <h1>Passion & Achievement</h1>
              <p>
                Nothing excites us more than setting ambitious targets and
                expectations and then exceeding them, to push every boundary. It
                is how the power of passion becomes the beauty of achievement.
              </p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
