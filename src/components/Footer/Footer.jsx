import React from "react";
import {Link} from "react-router-dom";
import "./style.css"

export default function Footer() {
    return(
        <footer>
  <ul>
    <li>Developed by: Brandon Carter</li>
    <li><a rel="noreferrer" target="_blank" href="https://twitter.com">Twitter</a></li>
    <Link to="/contact">
    <li><a rel="noreferrer" href="/contact">Contact</a></li>
    </Link>
    <li><a rel="noreferrer" target="_blank" href="https://facebook.com">Facebook</a></li>
    <li><a rel="noreferrer" target="_blank" href="https://github.com/brandnn07">Github</a></li>
    <li>
      <p>👋</p>
    </li>
  </ul>
</footer>
    )
}