function solution(A) {
  const positiveNumbers = new Set(A.filter(n => n > 0));
  console.log({positiveNumbers})
  let smallestPositive = 1;
  while (positiveNumbers.has(smallestPositive)) {
    smallestPositive++;
  }
  return smallestPositive;
}

// function solution(A) {
//   let sortedArray = A.sort((a,b) => a - b)
//   let lastItem = sortedArray[A.length - 1]
//   let smallest = lastItem

//   while(smallest <= 0) {
//     smallest += 1
//   

//   if (!A.includes(smallest)) {
//     return smallest
//   }

//   let smallestBefore = sortedArray[A.length - 2] + 1
//   if (!A.includes(smallestBefore)) {
//     return smallestBefore
//   }

//   let smallestAfter = sortedArray[A.length - 1] + 1
//   if (!A.includes(smallestAfter)) {
//     return smallestAfter
//   }
// }

console.log(solution([1, 3, 6, 4, 1, 2]))
console.log(solution([1, 2, 3]))
console.log(solution([-1, -3]))
console.log(solution([1, 1, 1, -2, -3, -4, 2, 3]))
