const videoToggle: Element = document.querySelector(".video_toggle")!;
const videoToggleSlide: Element = document.querySelector(".slider")!;
const videoElement: HTMLVideoElement = document.querySelector(".video")!;

videoToggle.addEventListener("click", () => {
  if (!videoToggleSlide.classList.contains("slide")) {
    videoToggleSlide.classList.add("slide");
    videoElement.pause();
  } else {
    videoToggleSlide.classList.remove("slide");
    videoElement.play();
  }
});
