$(document).ready(initialize);
function initialize(){
  $('#calc').click(calculate);
  $('#clear').click(clear);
  $('#sum').click(sum);
}

function sum(){
  var s = 0;
  $('.sumFields').each(function(index, element){
      s += parseFloat(element.value); 
  $('#result').text(s);
}

function calculate(){
 // debugger;
  var num1 = $('#num1').val();
  num1 = parseFloat(num1);
  var num2 = $('#num2').val();
  num2 = parseFloat(num2);
  var op = $("#op").val();

  var result = compute(num1, num2, op);
  $('#resultText').text(result);
}

function clear(){
  $('.calFields').val("");
  $('#result').text("");
}

function compute(x, y, op){
  var result;

  switch(op) {
    case "+":
      result = x + y;
      break;
    case "-":
      result = x - y;
      break;
    case "*":
      result = x * y;
      break;
    case "/":
      result = x / y;
  }
  return result;
}
      


