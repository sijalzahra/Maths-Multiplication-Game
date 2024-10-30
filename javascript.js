var playing = false;
var score;
var action;
var timeRemaining;
var correctAnswer;

// if we click on start/reset button
document.getElementById("startReset").onclick = function(){
  //if we are playing
  if(playing == true){
    location.reload();  //reload page
  }else{  //if we are not playing

    //change mode to playing
    playing = true;

    score = 0;   //set score to 0s


    document.getElementById("scoreValue").innerHTML = score;

    //show countdown box
    show("timeRemaining");

    timeRemaining = 60;
    document.getElementById("timeRemainingValue").innerHTML = timeRemaining;

    hide("gameOver");


    //change button to reset
    document.getElementById("startReset").innerHTML = "Reset Game";

    //start countdown
     startCountdown();

     //generate Q & A
     generateQA();
  }
}
 

//clicking on ans box
for(i=1; i<5; i++){
  document.getElementById("box"+i).onclick = function(){
      //check if we are playing
    if(playing == true){//yes
    if(this.innerHTML == correctAnswer){
      //correct answer
      //increase score by 1
      score ++;
      document.getElementById("scoreValue").innerHTML = score;
  
      //hide wrong box and show correct
      hide("wrong");
      show("correct");
      setTimeout(function(){
        hide("correct");
      },1000)
  
      generateQA();
  
    }else{
      hide("correct");
      show("wrong");
      setTimeout(function(){
        hide("wrong");
      },1000)
    }
  } 
  }
  }


//functions

//start counter
function startCountdown(){
  action = setInterval(function(){
    timeRemaining -= 1;
    document.getElementById("timeRemainingValue").innerHTML = timeRemaining;

    if(timeRemaining == 0){
      stopCountdown();
      show("gameOver");

      document.getElementById("gameOver").innerHTML = "<p> Game Over! </p> <p> Your score is " + score +". </p>"; 

      hide("timeRemaining");
      hide("correct");
      hide("wrong");
      playing = false;
      document.getElementById("startReset").innerHTML = "Start Game";
    }
  },1000)
}

//stop counter
function stopCountdown(){
  clearInterval(action);
}
 
//hide elements
function hide(id){
  document.getElementById(id).style.display = "none";
}

//show elements
function show(id){
  document.getElementById(id).style.display = "block";
}

//generate ques and ans
function generateQA(){
  var x = 1 + Math.round(9*Math.random());
  var y = 1 + Math.round(9*Math.random());
  correctAnswer = x*y;

  document.getElementById("question").innerHTML = x + "x" + y;
  var correctPosition = 1+
  Math.round(3*Math.random());
  document.getElementById("box"+correctPosition).innerHTML = correctAnswer;

  //fill other boxes with wrong answer

  var answers = [correctAnswer];

  for(i=1; i<5; i++){
    if(i != correctPosition){
      var wrongAnswer;
      do{
        wrongAnswer = (1 + Math.round(9*Math.random())) * (1 + Math.round(9*Math.random()));
      }
      while
        (answers.indexOf(wrongAnswer)> -1)
      

      document.getElementById("box"+i).innerHTML = wrongAnswer;
      answers.push(wrongAnswer);
    }
  }
}



