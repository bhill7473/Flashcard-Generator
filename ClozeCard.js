var basicard = require("./basiccard.js");
module.exports=ClozeCard;
var inquirer = require("inquirer");
var fs = require("fs");

function ClozeCard(text,partial,cloze){
	this.text=text;
	this.partial=partial;
	this.cloze=cloze;
	
  if(error){
    console.log(error);
  }
	var questionOne = new ClozeCard(this.text + this.partial,this.cloze);
};


