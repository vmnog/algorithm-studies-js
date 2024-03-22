function lonelyinteger(a) {
  let hash = {}

  for (const item of a) {
    if(hash[item]) {
      hash[item] += 1
    } else {
      hash[item] = 1
    }
  }
  
  const [result] = Object.entries(hash).filter(([, value]) => value === 1)

  return result[0]
}

console.log(lonelyinteger([1,2,3,4,3,2,1]))
// Expect
// 4
