import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./style.scss";

const Purchase = () => {
  const [product, setProduct] = useState([]);
  const reqId = useParams();
  //   console.log(reqId.id);
  useEffect(() => {
    axios
      .get("https://emporiumr2h-app.herokuapp.com/api/products/" + reqId.id)
      .then((response) => {
        // console.log(response.data[0]);
        setProduct(response.data[0]);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  var arrayN = [];
  var arrayP = [];
  // var arrayI = [];
  const purchaseName = document.querySelector(".sub");
  const purchasePrice = document.querySelector(".price");
  // const holder = document.querySelector(".purchaseImg");

  const onPurchaseHandler = () => {
    // let purchaseImage = holder.src.replace("http://localhost:3000", "..");
    arrayN.push(purchaseName.textContent);
    arrayP.push(purchasePrice.textContent);
    // arrayI.push(purchaseImage);

    localStorage.setItem("Cart Items Name", JSON.stringify(arrayN));
    localStorage.setItem("Cart Items Price", JSON.stringify(arrayP));
    // localStorage.setItem("Cart Items Image", JSON.stringify(arrayI));
    alert("Item added to cart!");
  };

  return (
    <>
      <main class="purchase-main">
        <div class="purchase-card">
          <div class="card__title">
            <div class="icon">
              <a href="/products">
                <i class="fa fa-arrow-left">&#x2190;</i>
              </a>
            </div>
            <h3>Your Purchase</h3>
          </div>
          <div class="card__body">
            <div class="half">
              <div class="featured_text">
                <h1>{product.car_date}</h1>
                <p class="sub">{product.car_name}</p>
                <p class="price">{product.car_price}</p>
              </div>
              <div class="image">
                <img class="purchaseImg" src={product.car_image} alt="" />
              </div>
            </div>
            <div class="half">
              <div class="description">
                <p>{product.car_description}</p>
              </div>
              <span class="stock">
                <i class="fa fa-pen"></i> In stock
              </span>
              <div class="reviews">
                <ul class="stars">
                  <li>
                    <i class="fa fa-star"></i>
                  </li>
                  <li>
                    <i class="fa fa-star"></i>
                  </li>
                  <li>
                    <i class="fa fa-star"></i>
                  </li>
                  <li>
                    <i class="fa fa-star"></i>
                  </li>
                  <li>
                    <i class="fa fa-star-o"></i>
                  </li>
                </ul>
                <span>(1337 reviews)</span>
              </div>
            </div>
          </div>
          <div class="card__footer">
            <div class="recommend">
              <p>Recommended by</p>
              <h3>Emporium</h3>
            </div>
            <div class="action">
              <button onClick={onPurchaseHandler} type="button">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Purchase;
