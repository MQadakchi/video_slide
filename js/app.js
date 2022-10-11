const videoSrc = document.querySelector("video");
const items = document.querySelectorAll("img");

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    const src = item.src.split("/");
    const index = src[src.length - 1].split(".")[0];
    videoSrc.src = `video/${index}.mp4`;
    items.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
  });
});
