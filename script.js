$(document).ready(function() {
    var ques = 0;
    var quesNum = 1;
    var answer;


    var quesItems = ["Which nba team has the most titles?", "Which team Kd plays for?", "How many nba titles the wizards have?", "How many teams are in the nba?"];
    var answers = [
      ["Boston Celtics", "Los Angles Lakers", "Wizards", "Raptors"],
      ["Golden State Warriors", "OKC", "Toronto", "Knicks"],
      ["Zero", "Five", "Two", "One"],
      ["30", "32", "25", "20"]
    ];
    var corAns = ["Boston Celtics", "Golden State Warriors", "Zero", "30"];

    $('.question').text(quesItems[0]);
      $('#1').text(answers[ques][0]);
      $('#2').text(answers[ques][1]);
      $('#3').text(answers[ques][2]);
      $('#4').text(answers[ques][3]);



    function correct(){
      alert("correct!");
      $('.question').text(quesItems[ques]);
      $("#1").text(answers[ques][0]);
      $('#2').text(answers[ques][1]);
      $('#3').text(answers[ques][2]);
      $('#4').text(answers[ques][3]);
      ques++;
    }

    function addNums(){
      quesNum++;
    }

    function incorrect(){
      alert("This is incorrect");
      ques++;
      $('.question').text(quesItems[ques]);
      $('#1').text(answers[ques][0]);
      $('#2').text(answers[ques][1]);
      $('#3').text(answers[ques][2]);
      $('#4').text(answers[ques][3]);
    }

    $('.ans').on('click', function(){
      answer = $(this).text();
      console.log(answer);
      if(answer !== corAns[ques]){
        incorrect();
      } else if (answer === corAns[ques]){
        correct();
      }
    })
});
