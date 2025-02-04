
//speed reading'
let speed = document.getElementById("speed").value	;

console.log(speed);

var board = [[], [], [], [], [], [], [], [], []]

function FillBoard(board) {
	for (var i = 0; i < 9; i++) {
		for (var j = 0; j < 9; j++) {
			if (board[i][j] != 0) {
				document.getElementById(i*9+j).innerText = board[i][j];
			}
			
			else
			document.getElementById(i*9+j).innerText = '';
	}
}
}

let GetPuzzle = document.getElementById('GetPuzzle')
let SolvePuzzle = document.getElementById('SolvePuzzle')

GetPuzzle.onclick = function () {
	var xhrRequest = new XMLHttpRequest()
	xhrRequest.onload = function () {
		var response = JSON.parse(xhrRequest.response)
		console.log(response)
		board = response.board
		FillBoard(board)
	}
	xhrRequest.open('GET', 'https://sugoku.onrender.com/board?difficulty=easy');

	// xhrRequest.open('get', 'https://sugoku.onrender.com/board?difficulty=easy')
	//we can change the difficulty of the puzzle the allowed values of difficulty are easy, medium, hard and random
	xhrRequest.send()
}

SolvePuzzle.onclick = () => {
	speed = document.getElementById("speed").value;
	SudokuSolver(board);
};





 function isValid(board,  ii, jj, num){
	let sr = ii-ii%3;
	let sc = jj-jj%3;

	for(let i=0;i<3;i++){
		for(let j=0;j<3;j++){
			if(board[sr+i][sc+j]==num && sr+i!=ii && sc+j!=jj)
				return false;
		}
	}
	for(let i=0;i<9;i++){
		if(board[i][jj]==num )
			return false;
	}
	for(let i=0;i<9;i++){
		if(board[ii][i]==num )
			return false;
	}
	return true;
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function SudokuSolver(board) {
    

    // Try to fill the cell with an appropriate number
	for(let i=0;i< 9; i++){
		for(let j=0;j<9;j++){
			if(board[i][j]==0){
				for (let num = 1; num <= 9; num++) {
					// Check if num can be filled
					if (isValid(board, i, j, num)) {
						board[i][j] = num;
						document.getElementById(i * 9 + j).innerText = num;
						document.getElementById(i * 9 + j).style.backgroundColor = "white";
						await wait(speed); // Add a delay of 0.3 seconds
			
						let subAns = await SudokuSolver(board);
						if (subAns) {
							return true;
						}
			
						// Backtracking -> undo the change
						board[i][j] = 0;
						document.getElementById((i * 9) + j).style.backgroundColor="red";
						await wait(speed); // Add a delay of 0.3 seconds
					}
				}
				return false;
			}
		}
	}
    

    return true;
}