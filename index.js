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

