$(function(){
  $('.siteChoice')
    .css('opacity',0.7)
    .hover(function(){
      $(this).css({'opacity': 1,'width': '150px'});
    }, function(){
      $(this).css({'opacity': 0.7,'width': '100px'});
    });

  $('#navbar')
    .css('opacity',0)
    .hover(function(){
      $(this).css('opacity', 0.6);
    }, function(){
      $(this).css('opacity', 0);
    });
});