function miniMaxSum(arr) {
  const sortedArray = arr.sort((a,b) => a - b)
  const minSum = sortedArray.slice(0, 4).reduce((acc, curr) => acc + curr) 
  const maxSum = sortedArray.slice(1, 5).reduce((acc, curr) => acc + curr) 
  console.log(`${minSum} ${maxSum}`)
}

miniMaxSum([ 1, 2, 3, 4, 5 ])
// Expect
// 10 14
