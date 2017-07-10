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

  // bypass parallax on mobile
  var isMobile = /Android|iPhone|iPad|iPod|BlackBerry|Opera Mini/i.test(navigator.userAgent);
  if (isMobile) {
    $(".parallax_1").css({
      "background-image": 'url("http://i.imgur.com/q0CmITd.jpg");'
    });
    $(".parallax_2").css({
      "background-image": 'url("http://i.imgur.com/w9fYxvw.jpg");'
    });
    $(".parallax_3").css({
      "background-image": 'url("http://i.imgur.com/5gWIezu.jpg");'
    });
    $(".parallax_4").css({
      "background-image": 'url("http://i.imgur.com/2IczNZg.jpg");'
    });
  }
});