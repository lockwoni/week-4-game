$(document).ready(function() {

//Variables for tracking players wins & losses
var wins = 0;
var losses = 0;

//The computer's random number for the current round
var computerNum = [];

//Random number assigned to crystals for the current round
var orangeNum;
var tealNum;
var clearNum;
var greenNum;

//The player's score counter for the current round; add 0 & player # works but not random number
var playerCounter = 0;

//**How to start the game**//
function startGame() {
	var compNum = Math.floor(Math.random() * 102) + 19;
	computerNum.push(compNum);
	$("#random-number").text(computerNum[0]);
	console.log("Computer number: " + computerNum);
	
	//Random number for crystals
	orangeNum = Math.floor(Math.random() * 12) + 1;
	console.log("Orange: " + orangeNum);

	tealNum = Math.floor(Math.random() * 12) + 1;
	console.log("Teal: " + tealNum);

	clearNum = Math.floor(Math.random() * 12) + 1;
	console.log("Clear: " + clearNum);

	greenNum = Math.floor(Math.random() * 12) + 1;
	console.log("Green: " + greenNum);
};

//How to reset the game
function nextGame() {
	computerNum.length = 0;
	playerCounter = 0;
	startGame();
};

//Function to determine if player counter </=/> computer's number
function checkingNum () {
	if (playerCounter === computerNum[0]) {
		wins++;
		$("#outcome").html("You won!!");
		$("#wins").html("Wins: "+ wins);
		console.log("You won!!");
		nextGame();
	}

	else if (playerCounter > computerNum[0]) {
		losses++;
		$("#outcome").html("You lost!!");
		$("#losses").html("Losses: " + losses);
		console.log("You lost!!");
		nextGame();
	}

	else {
		console.log("Keep guessing!")
	}

};

//Calling the game to start
startGame();

//Clicking crystals
$("#crystal-orange").on("click", function() {
	playerCounter = orangeNum + playerCounter;
	$("#player-count").text(playerCounter);
	console.log(playerCounter);
	checkingNum();
});

$("#crystal-teal").on("click", function() {
	playerCounter = tealNum + playerCounter;
	$("#player-count").text(playerCounter);
	console.log(playerCounter);
	checkingNum();
});

$("#crystal-clear").on("click", function() {
	playerCounter = clearNum + playerCounter;
	$("#player-count").text(playerCounter);
	console.log(playerCounter);
	checkingNum();
});

$("#crystal-green").on("click", function() {
	playerCounter = greenNum + playerCounter;
	$("#player-count").text(playerCounter);
	console.log(playerCounter);
	checkingNum();
});

});