var waypoints = $('.animate__animated').waypoint(function() {
  let target = $($(this)[0].element);

  let className = target.attr('data-effect');
  target.addClass(className);

}, {
  offset: '25%'
})