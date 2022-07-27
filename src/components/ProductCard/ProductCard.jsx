import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const ProductsCard = ({ id, name, price, image, description }) => (
  <>
    <div class="product-grid-item">
      <div key={id} class="flip-card product-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={image} alt={name} />
            <div class="product-container">
              <h4>
                <b>{name}</b>
              </h4>
              <p>{price}</p>
            </div>
          </div>
          <div value={name} class="flip-card-back">
            <h2 class="carName">{name}</h2>
            <p>{description}</p>
            <Link to={"/product/" + id}>
              <button class="purchaseBtn">Purchase</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default ProductsCard;
