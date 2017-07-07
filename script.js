$(document).ready(function() {

  $("#nav_title").hide();

  // makes title move when scrolling
  $(window).scroll(function() {
    var maxHeight = $("#title").outerHeight(true);
    var scrollTopVal = $(this).scrollTop();

    if (scrollTopVal > maxHeight+20) {
      $("#title").hide();
      $("#nav_title").show();
    } else {
      $("#title").show();
      $("#nav_title").hide();
    }
  });

  // view spoilers
  $(".spoiler").hover(function() {
    $(this).css("background-color", "#ECE0E0");
    $(this).css("color", "#666666");
    }, function() {
    $(this).css("background-color", "#312F45");
    $(this).css("color", "#312F45");
  });

});