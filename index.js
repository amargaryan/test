function isMagic(square) {
    let row = [];
    let columns = [];
    let temp = 0
    let Diagonals1 = 0;
    let Diagonals2 = 0;
    if (square.flat(1).some(a => a > square.length ** 2)) return false
    for (let i = 0; i < square.length; i++) {
      row.push(square[i].reduce((a, b) => a + b))
      Diagonals1 += square[i][square.length - i - 1]
      Diagonals2 += square[i][i]
      for (let j = 0; j < square.length; j++) {
        temp += square[j][i]
      }
      columns.push(temp)
      temp = 0
    }
    return new Set(row.concat(columns, [Diagonals1, Diagonals2])).size == 1
  } 