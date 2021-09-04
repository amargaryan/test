function isMagic(square) {
    let length = square.length;
    let id = (length * length + 1) * length / 2;
    if (length === 0) return true;
    if (length === 1) return id == square[0][0];
    let a = 0;
    let b = 0;
    for (let i = 0; i < length; i++) {
      let s1 = 0;
      let s2 = 0;
      a += square[i][i];
      b += square[i][length - 1 - i];
      for (let j = 0; j < length; j++) {
        s1 += square[i][j];
        s2 += square[j][i];
      }
      if (s1 !== id || s2 !== id) return false;
    }
    if (a !== id || b !== id) return false;
    return true;
  }