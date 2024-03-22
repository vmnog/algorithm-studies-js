function findMedian(arr) {
  const sorted = arr.sort((a,b) => a - b)
  return sorted[(sorted.length - 1) / 2]
}

console.log(findMedian([0,1,2,4,6,5,3]))
// Expect
// 3
