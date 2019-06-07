"use strict";

if (
  document.readyState === "complete" ||
  (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  init();
} else {
  document.addEventListener("DOMContentLoaded", init);
}

function init() {
  if (!isTouchDevice()) {
    var banner = document.querySelector("#banner");

    banner.style.position = "fixed";

    window.onscroll = function() {
      // get ratio of scroll depth to screen size and use that to fade div
      var viewportHieght = window.innerHeight;

      var position = window.scrollY;
      var fade = 1 - (position / viewportHieght) * 2;

      banner.style.opacity = "" + fade;
    };
  }

  document.querySelector("#learn-more").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector("#main-content").scrollIntoView({
      behavior: "smooth"
    });
  });
}

function isTouchDevice() {
  return "ontouchstart" in window || "onmsgesturechange" in window;
}
