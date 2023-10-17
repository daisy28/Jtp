"use strict";
const videoToggle = document.querySelector(".video_toggle");
const videoToggleSlide = document.querySelector(".slider");
const videoElement = document.querySelector(".video");
const preloader = document.querySelector(".preloader_div");
window.addEventListener("load", () => {
    preloader.classList.add("hide_preloader");
});
videoToggle.addEventListener("click", () => {
    if (!videoToggleSlide.classList.contains("slide")) {
        videoToggleSlide.classList.add("slide");
        videoElement.pause();
    }
    else {
        videoToggleSlide.classList.remove("slide");
        videoElement.play();
    }
});
