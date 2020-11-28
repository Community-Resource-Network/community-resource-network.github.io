$.fn.shuffleChildren = function () {
  $.each(this.get(), function (index, el) {
    var $el = $(el);
    var $find = $el.children();

    $find.sort(function () {
      return 0.5 - Math.random();
    });

    $el.empty();
    $find.appendTo($el);
  });
};
$(document).ready(function () {
  $(".testimonial-carousel").shuffleChildren();
  var total = $(".testimonial-carousel")[0].childNodes.length, // get the number of slides
    rand = Math.floor(Math.random() * total); // random number
  $(".testimonial-carousel")
    .slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
      arrows: true,
      prevArrow: $(".testimonial-carousel-controls .prev"),
      nextArrow: $(".testimonial-carousel-controls .next"),
    })
    .slick("slickGoTo", rand); //navigate to random slide;
  console.log(rand);
  //$(".testimonial-carousel").shuffleChildren();
});
