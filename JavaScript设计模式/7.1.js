var LoopImages = function (imgArr, container) {
  this.imageArray = imgArr
  this.container = container
}

LoopImages.prototype = {  // 可复用、可共享、耗时大的方法提取出来
  createImage: function () {
    console.log('LoopImages createImage function')
  },
  changeImage: function () {
    console.log('LoopImage changeImage function')
  }
}

var SlideLoopImg = function (imgArr, container) {
  LoopImages.call(this, imgArr, container)
}
SlideLoopImg.prototype = new LoopImages()  // 原型继承
SlideLoopImg.prototype.changeImage = function () {
  console.log('SlideLoopImg changeImage function')
}



var FadeLoopImg = function (imgArr, container, arrow) {
  LoopImages(this, imgArr, container)
  this.arrow = arrow
}
FadeLoopImg.prototype = new LoopImages() // 原型继承
SlideLoopImg.prototype.changeImage = function () {
  console.log('SlideLoopImg changeImage function')
}
