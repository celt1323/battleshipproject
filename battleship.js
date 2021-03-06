// sets grid rows and columns and the size of each square
var rows = 10;
var cols = 10;
var squareSize = 50;

// gets the container element
var gameBoardContainer = document.getElementById("gameboard");

// you can use this to convert your letters into numbers for use
// with the 2D array
var letterConversion = {
	"A": 0,
	"B": 1,
	"C": 2,
	"D": 3,
	"E": 4,
	"F": 5,
	"G": 6,
	"H": 7,
	"I": 8,
	"J": 9
}

// makes the grid columns and rows
for (i = 0; i < cols; i++) {
	for (j = 0; j < rows; j++) {

		// creates a new div HTML element for each grid square and makes it the right size
		var square = document.createElement("div");
		gameBoardContainer.appendChild(square);

    // give each div element a unique id based on its row and column, like "s00"
		square.id = 's00' + j + i;
		square.className = "boardSquare";

		// THIS IS WHERE YOU WILL ADD CODE FOR PART 1 TO ADD TEXT TO EACH SQUARE
    var letterArray = ["A", "B", "C", "D","E","F","G","H","I","J"];
		square.textContent = letterArray[j] +=
			square.textContent = i + 1;


		// set each grid square's coordinates: multiples of the current row or column number
		var topPosition = j * squareSize;
		var leftPosition = i * squareSize;

		// use CSS absolute positioning to place each grid square on the page
		square.style.top = topPosition + 'px';
		square.style.left = leftPosition + 'px';
	}
}

// Hardcoded 2D array to indicate where the ships are placed
var gameBoard = [
				[0,0,0,1,1,1,1,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,1,0,0,0],
				[0,0,0,0,0,0,1,0,0,0],
				[1,0,0,0,0,0,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0],
				[1,0,0,1,0,0,0,0,0,0],
				[1,0,0,1,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0]
				]

var hitCount = 0;

function fireTorpedo() {

	// Your game logic will go here!
 	var userGuess = $("#userInput").val();
var rowLetter = userGuess.substring(0,1);
 		var columnNumber = userGuess.substring(1,2);

  rowNumber = letterConversion[rowLetter];
   //columnNumber = letterConversion[rowLetter];
var battleshipGuess = gameBoard[rowNumber][columnNumber];
 var boardSquare = "#s" + rowNumber + columnNumber;
  if (battleshipGuess == 1) {
  	alert('Hit');
		console.log(boardSquare);
 		$(boardSquare).css("background-color", "red");
		hitCount = hitCount + 1;
}
 else {
	   alert('Miss');
  	$(boardSquare).css("background-color", "gray");
   }


 if (hitCount = 17) {
 $("#instructions").text("YOU SUNK ALL MY BATTLESHIPS!");
 }}
