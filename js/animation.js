$(document).ready(function() {
  var $offset = $(".path").css("stroke-dashoffset");

  $(window).scroll(function() {
    var $end = (($(window).scrollTop() / ($("html").height() - $(window).height())) * 100);
    var $unit = parseInt($offset, 10);
    var $offsetUnit = $end * ($unit / 400);
    $(".path").css("stroke-dashoffset", $unit - $offsetUnit);
  });
});
