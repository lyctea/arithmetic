let lazyImage = [...document.querySelectorAll(".lazy-image")];
let inAdvance = 300; // 自定义高度

function lazyLoad() {
  lazyImage.forEach(image => {
    if (image.offsetTop < window.inerHeight + window.pageXOffset + inAdvance) {
      image.src = image.dataset.src;
      image.onlocad = () => image.classList.add("loaded");
    }
  });
}

lazyLoad();

window.addEventListener("scroll", _.throttle(lazyLoad, 16)); //节流
window.addEventListener("resize", _.throttle(lazyLoad, 16)); //节流
