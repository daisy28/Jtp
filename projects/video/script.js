"use strict";
const videoToggle = document.querySelector(".video_toggle");
const videoToggleSlide = document.querySelector(".slider");
const videoElement = document.querySelector(".video");
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
