import React from "react";
import "./style.scss";

export default function HomeGrid() {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  return (
    <div class="reveal row">
	<div class="gridContainer">
		<div class="test_box box-01 col-xs-6 col-md-4">
			<div class="inner">
				<a href="/products" class="test_click">
					<div class="flex_this">
						<h1 class="test_title">Visit Our Shop</h1>
						<span class="test_link">New Arrivals</span>
					</div>
				</a>
			</div>
		</div>
		<div class="test_box box-02 col-xs-6 col-md-4">
			<div class="inner">
				<a href="#" class="test_click">
					<div class="flex_this">
						<h1 class="test_title">Official Emporium Magazine</h1>
						<span class="test_link">Discover More</span>
					</div>
				</a>
			</div>
		</div>
		<div class="test_box box-03 col-xs-6 col-md-4">
			<div class="inner">
				<a href="/contact" class="test_click">
					<div class="flex_this">
						<h1 class="test_title">Join Our Newsletter</h1>
						<span class="test_link">Let's Do More Together</span>
					</div>
				</a>
			</div>
		</div>
	</div>
</div>
  );
}
