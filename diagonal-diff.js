function diagonalDifference(arr) {
  arr.forEach(element => {
    console.log(element)
  });
  let primaryDiagonalSum = 0;
  let secondaryDiagonalSum = 0;
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    console.log({
      '[i]': i,
      '[n]': n,
      '\narr[i][i]': arr[i][i],
      'arr[i][n - i - 1]': arr[i][n - i - 1]
    })
    primaryDiagonalSum += arr[i][i];
    secondaryDiagonalSum += arr[i][n - i - 1];
  }

  return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}

// Example usage
console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]]
))
// Output: 15
