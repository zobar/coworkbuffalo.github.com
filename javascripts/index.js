// Generated by CoffeeScript 1.6.3
$(function() {
  var $header, $herd, $window, layer, location, map, onscroll;
  $window = $(window);
  $header = $('h1');
  $herd = $('#herd');
  layer = new MM.StamenTileLayer("toner");
  map = new MM.Map(document.getElementById("tile"), layer, null, null);
  location = new MM.Location(42.891618, -78.872079);
  map.setCenterZoom(location, 16);
  onscroll = function() {
    var currentPosition, pos;
    pos = $window.scrollTop();
    if (pos <= 800) {
      $header.css({
        'background-position': "" + (pos - 72) + "px 105%"
      });
    }
    if (pos >= 861 && pos <= 1800) {
      currentPosition = Math.floor((pos - 860) / 2) + 1;
      return $herd.css({
        'background-position': "0 " + currentPosition + "px"
      });
    }
  };
  $window.bind('scroll', $.throttle(25, onscroll));
  $("#map").click(function(event) {
    return window.location = $(this).find("a").attr("href");
  });
  return $('#slider').nivoSlider({
    effect: 'slideInRight',
    pauseTime: 4000,
    randomStart: true,
    controlNav: false,
    directionNavHide: true,
    keyboardNav: false
  });
});
