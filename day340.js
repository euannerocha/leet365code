function gameOfLife(board) {
  const dirs = [
    [1,0],[-1,0],[0,1],[0,-1],
    [1,1],[1,-1],[-1,1],[-1,-1]
  ];

  const m = board.length;
  const n = board[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let live = 0;

      for (let d of dirs) {
        const x = i + d[0];
        const y = j + d[1];
        if (x >= 0 && x < m && y >= 0 && y < n) {
          live += board[x][y] & 1;
        }
      }

      if (live === 3 || (live === 2 && board[i][j] === 1)) {
        board[i][j] |= 2;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] >>= 1;
    }
  }

  return board;
}