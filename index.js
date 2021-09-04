
function isMagic(square) {
    let result = true
    const rowSum = (arr) => arr.reduce((sum, item) => sum + item);
    const columnSum = (arr, index) => arr.reduce((sum, item) => sum + item[index],0);
    const diagonalSum1 = (arr) => arr.reduce((sum,item,index) => sum + item[index],0);
    const diagonalSum2 = (arr) => arr.reduce((sum,item,index) => sum + item[item.length - 1 - index],0);
    const firstRowSum = rowSum(square[0])
    for (let i = 1; i < square.length; i++) {
        console.log(rowSum(square[i]));
        if (rowSum(square[i]) === firstRowSum) continue;
        else return false;
    }
    for (let j = 0; j < square.length; j++) {
        console.log(columnSum(square,j));
        if(columnSum(square,j) === firstRowSum) continue;
        else return false;
    }
    console.log(diagonalSum1(square));
    console.log(diagonalSum2(square));
    if(diagonalSum1(square) !== firstRowSum) return false;
    if(diagonalSum2(square) !== firstRowSum) return false;
    return result;
}

console.log(isMagic([[1, 2], [3, 4]]))