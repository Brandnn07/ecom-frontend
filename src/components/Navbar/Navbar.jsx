import React, {Component} from "react";
import "./style.scss"
import { Link } from "react-router-dom";


export default class Navbar extends Component {

    render() {
        return (
<div class="container teal borderYtoX">
    <Link to="/">
  <a>HOME</a>
    </Link>
    <Link to="/about">
  <a href="*">ABOUT</a>
    </Link>
    <Link to="/products">
  <a href="*">SHOP</a>
    </Link>
    <Link to="/cart">
  <a href="*">CART</a>
    </Link>
    <Link to="/contact">
  <a href="*">CONTACT</a>
    </Link>
    
    <figure>
      <img src={require("../../assests/images/logomaybe2.png")} alt="" />
    </figure>
</div>

        )
    }
}