module.exports=ClozeCard;
var inquirer = require("inquirer");
var fs = require("fs");

function ClozeCard(text,partial,cloze){
	this.text=text;
	this.partial=partial;
	this.cloze=cloze;
	
	
};

var questionOne = new ClozeCard("Fort Knox underground vault filled with gold bars is located in", "......","Kentucky");
var questionTwo = new ClozeCard("The capital of Ohio is", ".....","Columbus");
var questionThree = new ClozeCard("The Mexican city of Tijuana borders", "......","San Diego");
var questionFour = new ClozeCard("The longest coastline in the U.S., 6,640 miles, greater than that of all other states combined is in", ".....","Alaska");
var questionFive = new ClozeCard("The only active diamond mine in the U.S. is located in", "......","Arkansas");
var questionSix = new ClozeCard("The world's largest silver nugget (1,840 pounds) found in 1894 near Aspen", ".....","Colorado");
inquirer
  .prompt([
  
    {
      type: "input",
      message: questionOne.text + questionOne.partial,
      name: "q1"
    },
    {
    	type: "answer",
    	message: questionOne.text + " " + questionOne.cloze + "." + " Is the correct answer",
    	name: "q1"
    },
    {
      type: "input",
      message: questionTwo.text + questionTwo.partial,
      name: "q2"
     
    },
     {
    	type: "answer",
    	message: questionTwo.text + " " + questionTwo.cloze + "." + " Is the correct answer",
    	name: "q1"
    },
     {
      type: "input",
      message: questionThree.text + questionThree.partial,
      name: "q3"
    },
     {
    	type: "answer",
    	message: questionThree.text + " " + questionThree.cloze + "." + " Is the correct answer",
    	name: "q1"
    },
    {
      type: "input",
      message: questionFour.text + questionFour.partial,
      name: "q4"
     
    },
     {
    	type: "answer",
    	message: questionFour.text + " " + questionFour.cloze + "." + " Is the correct answer",
    	name: "q1"
    },
     {
      type: "input",
      message: questionFive.text + questionFive.partial,
      name: "q5"
    },
     {
    	type: "answer",
    	message: questionFive.text + " " + questionFive.cloze + "." + " Is the correct answer",
    	name: "q1"
    },
    {
      type: "input",
      message: questionSix.text + questionSix.partial,
      name: "q6"
     
    },
     {
    	type: "answer",
    	message: questionSix.text + " " + questionSix.cloze + "." + " Is the correct answer",
    	name: "q1"
    },
   
  ])
 