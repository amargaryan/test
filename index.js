function isMagic(square) {
    let rows = square.map((item, i, array) => {
      return item.reduce((sum, el, j, subarray) => {
        return sum += el;
      }, 0)
    })
    let columns = square.map((item, i, array) => {
      let sum = 0
      item.forEach((el, j, subarray) => {
        sum += array[j][i]
      })
      return sum
    })
  
    let firstDiagonal = square.reduce((sum, item, i, array) => {
      return sum += array[i][i]
    }, 0)
  
    let secondDiagonal = square.reduce((sum, item, i, array) => {
      return sum += array[i][array.length - 1 - i]
    }, 0)
  
    let result = new Set(rows.concat(columns, firstDiagonal, secondDiagonal))
  
    return result.size === 1
  }
  
  
  
  
  console.log(isMagic([
        [2, 7, 6],
        [9, 5, 1],
        [4, 3, 8]
      ]))