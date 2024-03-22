function plusMinus(arr) {
  const positiveNumbers = arr.filter(n => n > 0).length
  const negativeNumbers = arr.filter(n => n < 0).length
  const zeroNumbers = arr.filter(n => n === 0).length

  console.log((positiveNumbers / arr.length).toFixed(6))
  console.log((negativeNumbers / arr.length).toFixed(6))
  console.log((zeroNumbers / arr.length).toFixed(6))
}

console.log(plusMinus( [-4, 3, -9, 0, 4, 1]))
// Expect
// 0.500000
// 0.333333
// 0.166667
console.log(plusMinus( [ 1, 2, 3, -1, -2, -3, 0, 0 ]))
// Expect
// 0.375000
// 0.375000
// 0.250000
