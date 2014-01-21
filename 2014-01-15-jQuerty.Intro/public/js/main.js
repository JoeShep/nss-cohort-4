$(document).ready(initialize);
function initialize(){
  // $ means jQuery function
  // // $("CSS or jQuery selector")
  $('h1').css('color', 'red');
  // .css('attribute', 'value')
  $('h1').css('font-size', '30px');
  var currentH1Text = $('h1').text();
  console.log(currentH1Text);
  $('h1').text('"Come in to my parlour," said the spider to the fly.');
  $('div').css('color', 'blue');
  $('#d2').css('font-size', '30px');
  $('#d3').css('background-color', 'yellow');
  $('.cQ').css('font-family', 'monospace');
  $('.cQ').text('PromBox');
  $('.cQ').css({'color':'green', 'background-color':'red'}).text('Spencer');

  var bgcolor = prompt('What color background would you like?');
  $('body').css('background-color', bgcolor);

  var d3color = prompt('What color for Div3?');
  $('#d3').css('background-color', d3color);

  var numPs = $('.cp').length;
  console.log(numPs);

}
