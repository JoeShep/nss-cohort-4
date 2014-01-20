$(document).ready(initialize);

function initialize(){
  $('#pwrBtn').click(powerOffOn);
  $('.numBtn').click(display);
  $('#clrBtn').click(clearDisplay);
  $('#posNegBtn').click(changeSign);
  $('#pushBtn').click(push);
  $('.operator').click(compute);
}

function powerOffOn(){
  $('#answer').text("0");
  $('#pwrBtn').toggleClass('pwrOn');
  $('.numBtn, .funcBtn, .operator').toggleClass('activeBtn');
  if($('#pwrBtn').hasClass('pwrOn')){
    $('#answer').fadeTo("slow", 1);
    $('#queueWindow').animate({"right": "-=36%"}, "slow");
  }else{
    $('#answer').fadeTo("slow", 0);
    $('#queueWindow').animate({"right": "1%"}, "slow");
  }  
}

function clearDisplay(){
  $('#answer').text("0");
  $('#queue').empty();
  $('.operator').removeClass('inactive');
}

function display() {
  var display = $('#answer').text();
  var current = this.textContent;
  var output;
  if(current === '.' && containsChar(display, '.')) return;
  if(display === '0' && current !== '.')
    output = current;
  else
    output = display + current;

  $('#answer').text(output);
}

function changeSign(){
  var num = $('#answer').text();
  num *= -1;
  $('#answer').text(num);
}

function push(){
  var display = $('#answer').text();
  $('#answer').text('0');
  var $li = $('<li>');
  $li.text(display);
  $('#queue').append($li);
  if($('#queue li').length > 2)
    $('.operator').addClass('inactive');
  $('#sumBtn').removeClass('inactive');
}

function compute() {
  if (!$(this).hasClass('inactive')){
    var $lis = $('#queue li');
    var numbers = parseTags($lis);
    var a = numbers[0];
    var b = numbers[1];
    var operators = {
      '+': function(numbers) {return a + b},
      '-': function(numbers) {return a - b},
      '*': function(numbers) {return a * b},
      '/': function(numbers) {return a / b},
      'X ⁿ': function(numbers) {return Math.pow(a,b)},
      '∑': function(numbers) {$('.operator').removeClass('inactive'); return sum(numbers)}
    }; 
    var op = this.textContent;
    var x = 3;
    var result = operators[op](numbers);
    $('#answer').text(result);
    $('#queue').empty();
  }
}

