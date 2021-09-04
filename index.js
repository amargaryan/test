function isMagic(square){
	let size = square.length;
	if(size === 0){
		return true
	}
	for(let i = 0;i<size;i++){
		for(let j = 0;j<size;j++){
			if(square[i][j] > size**2){
				return false
			}
		}
	}
	let sum = square[0].reduce((sum,item)=>sum+item,0)
	for(let i = 0;i<size;i++){
		let rowSum = square[i].reduce((sum,item)=>sum+item,0)
		if(rowSum !== sum){
			return false
		}
	}
	for(let i = 0;i<size;i++){
		let colSum = square.reduce((sum,row)=>sum+row[i],0)
		if(colSum !== sum){
			return false
		}
	}
	let diagonal1Sum = 0;
	let diagonal2Sum = 0;
	for(let i = 0;i<size;i++){
		diagonal1Sum+=square[i][i];
		diagonal2Sum+=square[i][square.length-i-1]
	}
  return (diagonal1Sum === sum && diagonal2Sum === sum ) ? true : false
}