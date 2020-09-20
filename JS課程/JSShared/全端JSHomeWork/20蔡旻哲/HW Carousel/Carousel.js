$(document).ready(function () {

  $("#container").hover(function () {
    $(this).stop().animate({ height: "150" }, 200);
  }, function () {
    $(this).stop().animate({ height: "22" }, 300);
  });

  var t = setInterval(function () {
    $(".container ul").delay(3000).fadeIn();
    $(".container ul").animate({ marginLeft: -50 + "vw" }, 2000, function () {
      $(this).find("li:last").after($(this).find("li:first"));
      $(this).css({ marginLeft: 0 });
    })
  }, 2000);




});