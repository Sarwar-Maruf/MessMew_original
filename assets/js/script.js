'use strict';

// element toggle function
const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



// navbar variables
const navbar = document.querySelector("[data-navbar]");
const navbarToggleBtn = document.querySelector("[data-navbar-toggle-btn]");

navbarToggleBtn.addEventListener("click", function () { elemToggleFunc(navbar); });



// whishlist button
const whishlistBtn = document.querySelectorAll("[data-whishlist-btn]");

for (let i = 0; i < whishlistBtn.length; i++) {

  whishlistBtn[i].addEventListener("click", function () { elemToggleFunc(this); });

}



// go to top variable
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (this.window.scrollY >= 800) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }

});

$(document).ready(function () {
  $(".accordion-title").click(function (e) {
    var accordionitem = $(this).attr("data-tab");
    $("#" + accordionitem)
      .slideToggle()
      .parent()
      .siblings()
      .find(".accordion-content")
      .slideUp();

    $(this).toggleClass("active-title");
    $("#" + accordionitem)
      .parent()
      .siblings()
      .find(".accordion-title")
      .removeClass("active-title");

    $("i.fa-chevron-down", this).toggleClass("chevron-top");
    $("#" + accordionitem)
      .parent()
      .siblings()
      .find(".accordion-title i.fa-chevron-down")
      .removeClass("chevron-top");
  });
});