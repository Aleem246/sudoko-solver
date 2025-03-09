# Sudoku Solver

## Overview
This project is a **Sudoku Solver** with a **Backtracking Algorithm Visualizer**.
It provides an interactive web-based interface to solve Sudoku puzzles and visualize the backtracking approach used in solving them.

## Live Demo
[Click here to view the deployed site](https://sudoku-solver.netlify.app/)

## Features
- **Automatic Sudoku Grid Generation**: Users cannot manually enter numbers; instead, a random puzzle is generated.
- **Backtracking Algorithm Visualization**: Shows step-by-step solving using backtracking.
- **Speed Control**: Adjust the solving speed.
- **Get Puzzle**: Generates a random Sudoku puzzle.
- **Solve Puzzle**: Automatically solves the given puzzle.

## Sudoku Rules
- A standard Sudoku grid consists of **9×9 cells**, divided into **9 smaller 3×3 boxes**.
- Each row, column, and 3×3 box must contain the numbers **1-9** without repetition.
- The puzzle starts with some pre-filled numbers, and the goal is to fill in the rest correctly.

## How the Backtracking Algorithm Works
- The solver iterates over empty cells and tries placing numbers **1-9**.
- It checks if the placement is valid according to Sudoku rules.
- If a conflict arises, it **backtracks** (removes the last placed number and tries the next possible number).
- This process continues recursively until the grid is completely and correctly filled.

## Technologies Used
- **HTML, CSS, JavaScript** for the frontend.
- **Backtracking Algorithm** for solving Sudoku.

## How to Run
1. Clone the repository:
   ```sh
   git clone https://github.com/aleem246/sudoku-solver.git
   ```
2. Navigate to the project folder:
   ```sh
   cd sudoku-solver
   ```
3. Open `index.html` in a browser.

## Project Structure
```
📂 sudoku-solver
├── 📄 index.html      # Main HTML file
├── 📄 style.css       # Styling for the UI
├── 📄 script.js       # JavaScript logic
└── 📄 README.md       # Project documentation
```

## Usage
- Click **GetPuzzle** to generate a random Sudoku puzzle.
- Click **SolvePuzzle** to visualize the backtracking solution.
- Adjust the **Speed** input to change solving speed.


## Contributions
Contributions are welcome! Feel free to open issues or submit pull requests.

## License
This project is licensed under the MIT License.

---
**Happy Coding! 🚀**

