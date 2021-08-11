var readLineSync = require("readline-sync");
var score = 0;
var bestScores = [{
  name : "Rohit",
  score : 3
},
{
  name : "Mohit",
  score : 2
}]

// Welcome message
function greet(){
  var userName = readLineSync.question("What is your Name? ");
  console.log("Hey", userName, "Welcome to the FRIENDS's Quiz");
  console.log("-------------------------------------");
}


// function to ask question and check answer
function askQuestion(userAnswer, answer){
  if(userAnswer.toLowerCase()===answer){
    console.log(userAnswer + " is correct answer.");
    score = score+1;
  }
  else{
    console.log("Nah! wrong answer.");
  }
  console.log("Your score is: ", score);
}

// create questions
var questions = [
  {question : "Which character has a twin? ",
  answer : "phoebe"},
  {question : "Who is Monica's first Kiss? ",
  answer : "ross"},
  {question : "How many sisters does Joey have? ",
  answer : "7"}
];

// ask questions on loop
function playGame(){
  for(var i=0; i < questions.length; i++){
    var userAnswer = readLineSync.question(questions[i]["question"]);
    askQuestion(userAnswer, questions[i]["answer"]);
  }
}

function showScores(){
  console.log("------------------------------------")
  console.log("Your score is ", score);
  console.log("Check the high scores below and if you have beaten the high score ping me I'll update it.")
  bestScores.map(score => console.log(score.name, " : ", score.score));
}

greet();
playGame();
showScores();
