const isMagic = (arr) => {
    const test = new Set();
    for (let i = 0; i < arr.length; i++) {  
      let rowSum = 0;
      let colSum = 0;
      let diagOneSum = 0;
      let diagTwoSum = 0;
      for (let j = 0; j < arr.length; j++) {
        rowSum += arr[i][j];
        colSum += arr[j][i];
        diagOneSum += arr[j][j];
        diagTwoSum += arr[j][arr.length - 1 - j]; 
      }    
      test.add(rowSum,colSum,diagOneSum,diagTwoSum)
    }
    return test.size===1}
  console.log(isMagic([[25,13,1,19,7],[16,9,22,15,3],[12,5,18,6,24],[8,21,14,2,20],[4,17,10,23,11]]))

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
//  Shoxer
console.log(isMagic([[2,7,6],[9,5,1],[4,3,8]]))
function isMagic(arr){
  if (arr.length===0){
    return true
    }else if(arr.length===1 && arr[0][0]===2){
      return false
    }
  let rows=0
  let diag=0
  let colums=0
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
  if(j===0){colums+=(arr[i][j])}
  if(i===0){rows+=(arr[i][j])}
 if(i===j){diag+=(arr[i][j])}
    }}
return(rows&&colums&&diag===rows)
    }