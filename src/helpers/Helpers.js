export function showNotification(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

export function checkWin(grid) {
  let status = "";
  let winner = -1;
  //   Check for win
  //   rows
  if (grid[0][0] === grid[0][1] && grid[0][0] === grid[0][2]) {
    winner = grid[0][0];
  } else if (grid[1][0] === grid[1][1] && grid[1][0] === grid[1][2]) {
    winner = grid[1][0];
  } else if (grid[2][0] === grid[2][1] && grid[1][0] === grid[2][2]) {
    winner = grid[2][0];
    // cols
  } else if (grid[0][0] === grid[1][0] && grid[0][0] === grid[2][0]) {
    winner = grid[0][0];
  } else if (grid[0][1] === grid[1][1] && grid[0][1] === grid[2][1]) {
    winner = grid[0][1];
  } else if (grid[0][2] === grid[1][2] && grid[0][2] === grid[2][2]) {
    winner = grid[0][2];
    // cross
  } else if (grid[0][0] === grid[1][1] && grid[0][0] === grid[2][2]) {
    winner = grid[1][1];
  } else if (grid[2][0] === grid[1][1] && grid[2][0] === grid[0][2]) {
    winner = grid[1][1];
  }
  if (winner === 0) {
    status = "O";
  } else if (winner === 1) {
    status = "X";
  }
  // Check for cats game
  if (!grid.includes(2)) status = "C";
  return status;
}
