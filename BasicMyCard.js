module.exports = BasicCard;
var inquirer=require("inquirer");
var fs = require("fs");
function  BasicCard(front,back){
	this.front=front;
	this.back=back;
}

var questionOne = new BasicCard("What was the first state?","Delaware");
var questionTwo = new BasicCard("The only state covered by it own time zone is?","Hawaii");
var questionThree = new BasicCard("What state is located furthest west?","Alaska");
var questionFour = new BasicCard("What state is known for their cheese?","Wisconsin");
var questionFive = new BasicCard("What state has a cardinal for their state bird?","Ohio");
var questionSix = new BasicCard("What state is known as the sunshine state?","Florida");

inquirer
  .prompt([
  
    {
      type: "input",
      message: questionOne.front,
      name: "q1"
    },
     {
      type: "answer",
      message: questionOne.front + " Correct answer is: " + questionOne.back,
      name: "q1"
    },
    {
      type: "input",
      message: questionTwo.front,
      name: "q2"
     
    },
     {
      type: "answer",
      message: questionTwo.front + " Correct answer is: " + questionTwo.back,
      name: "q1"
    },
     {
      type: "input",
      message: questionThree.front,
      name: "q3"
     
    },
     {
      type: "answer",
      message: questionThree.front + " Correct answer is: " + questionThree.back,
      name: "q1"
    },
    {
      type: "input",
      message: questionFour.front,
      name: "q4"
    },
     {
      type: "answer",
      message: questionFour.front + " Correct answer is: " + questionFour.back,
      name: "q1"
    },
    {
      type: "input",
      message: questionFive.front,
      name: "q5"
     
    },
     {
      type: "answer",
      message: questionFive.front + " Correct answer is: " + questionFive.back,
      name: "q1"
    },
     {
      type: "input",
      message: questionSix.front,
      name: "q6"
     
    },
     {
      type: "answer",
      message: questionSix.front + " Correct answer is: " + questionSix.back,
      name: "q1"
    },
])
  