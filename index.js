function isMagic(square) {
  let limit = ((square.length * square.length + 1) * square.length) / 2;
  if (square.length == 0) return true;
  if (square.length == 1) return limit == square[0][0];
  let sum = 0;
  let sum1 = 0;
  let sum2 = 0;
  let sum3 = 0;
  for (let i = 0; i < square.length; i++) {
    sum += square[i][i];
    sum1 += square[i][square.length - 1 - i];
    for (var j = 0; j < square.length; j++) {
      sum2 += square[i][j];
      sum3 += square[j][i];
    }
    if (sum2 != limit || sum3 != limit) return false;
  }
  if (sum != limit || sum1 != limit) return false;
  return true;
}
console.log(
  isMagic([
    [1, 2],
    [3, 4],
  ])
);
