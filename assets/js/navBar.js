$(document).ready(function () {
  $('.home_Content').load('./pages/homeBlog.html');
  $('.cricket_News').load('./pages/cricketNews.html');
  $('.match_Analysis').load('./pages/matchAnalysis.html');
  $('.ipl_Special').load('./pages/iplSpecial.html');

  $('.home_Content, .cricket_News, .match_Analysis, .ipl_Special').show();

  $('#home').click(function () {
    $('.home_Content, .cricket_News, .match_Analysis, .ipl_Special').hide();
    $('.home_Content').show();
  });

  $('#cricketNews').click(function () {
    $('.home_Content, .cricket_News, .match_Analysis, .ipl_Special').hide();
    $('.cricket_News').show();
  });

  $('#analysis').click(function () {
    $('.home_Content, .cricket_News, .match_Analysis, .ipl_Special').hide();
    $('.match_Analysis').show();
  });

  $('#special').click(function () {
    $('.home_Content, .cricket_News, .match_Analysis, .ipl_Special').hide();
    $('.ipl_Special').show();
  });

});

$('.footer').css({
  'text-align': 'center',
  'padding': '10px 0',
  'background-color': '#333',
  'color': '#fff',
  'font-size': '14px',
  'margin-top': '20px'
});

let Years = new Date().getFullYear();
$('.footer span').append(Years);

$('.footer a').css({
  'color': '#ff9800',
  'text-decoration': 'none',
  'margin': '0 5px'
}).hover(function () {
  $(this).css('text-decoration', 'underline');
}, function () {
  $(this).css('text-decoration', 'none');
});

