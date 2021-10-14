export function showNotification(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

function checkRows(g) {
  if (g[0][0] === g[0][1] && g[0][0] === g[0][2]) {
    return g[0][0];
  } else if (g[1][0] === g[1][1] && g[1][0] === g[1][2]) {
    return g[1][0];
  } else if (g[2][0] === g[2][2] && g[2][0] === g[2][1]) {
    return g[2][0];
  } else {
    return 2;
  }
}

function checkCols(g) {
  if (g[0][0] === g[1][0] && g[0][0] === g[2][0]) {
    return g[0][0];
  } else if (g[0][1] === g[1][1] && g[0][1] === g[2][1]) {
    return g[0][1];
  } else if (g[0][2] === g[1][2] && g[0][2] === g[2][2]) {
    return g[0][2];
  } else {
    return 2;
  }
}

function checkDiagonals(g) {
  if (g[0][0] === g[1][1] && g[0][0] === g[2][2]) {
    return g[0][0];
  } else if (g[0][2] === g[1][1] && g[2][0] === g[0][2]) {
    return g[0][2];
  } else {
    return 2;
  }
}

export function checkWin(grid) {
  let status = "";
  let winner = 2;
  //   Check for win
  //   rows
  winner = checkRows(grid);
  console.log("rows: ", winner);

  // cols
  if (winner === 2) {
    winner = checkCols(grid);
    console.log("cols: ", winner);
  }

  // cross
  if (winner === 2) {
    winner = checkDiagonals(grid);
    console.log("Diagonals: ", winner);
  }

  if (winner === 0) {
    status = "O";
  } else if (winner === 1) {
    status = "X";
  }
  // Check for cats game
  if (!(grid[0].includes(2) || grid[1].includes(2) || grid[2].includes(2))) {
    status = "C";
  }

  return status;
}
