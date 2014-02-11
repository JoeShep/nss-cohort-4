(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#quizBtn').click(askQuestion);
    $('button.tiny').click(answerQuestion);
  }
  
  var questions = [
    ['How many moons does Earth have?', '1'],
    ['How many moons does Saturn have?', '31'],
    ['How many moons does Venus have?', '0'],
    ['How many moons does Planet Claire Have?', '45']
  ];

  function askQuestion() {

    for (var i=0; i<questions.length; i++) {
      $('#q' + i).text(questions[i][0]);
    }
  }

  function answerQuestion(){
    var score = 0;
    var qNum = $(this).data('qnum');
    if( $('.answer' + qNum).val() === questions[qNum][1]) {
      alert('Correct!');
      score++;
    } else {
      alert('Sorry. The correct answer is ' + questions[qNum][1]);
    }
  }


  //var message = 'You got ' + score;
  //message += ' out of ' + questions.length;
  //message += ' questions correct.';
 // document.write('<p>' + message + '</p>');


})();

