function timeConversion(s) {
  let [hour, minutes, secondsAndType] = s.split(':')
  let hourNumber = Number(hour)
  const seconds = secondsAndType.slice(0, 2)
  const type = secondsAndType.slice(2, 4)

  if (type === 'PM' && hourNumber != 12) {
    hourNumber =  Number(hourNumber + 12)
  } else if (type === 'AM' && hourNumber == 12) {
    hourNumber = '00'
  }  

  if (hourNumber < 10 && hourNumber !== '00') {
    hourNumber = `0${hourNumber}`
  } 

  return `${hourNumber}:${minutes}:${seconds}`
}

console.log(timeConversion('07:05:45PM'))
// Expect
// 19:05:45
console.log(timeConversion('12:05:45PM'))
// Expect
// 12:05:45
console.log(timeConversion('12:05:45AM'))
// Expect
// 00:05:45
console.log(timeConversion('06:40:03AM'))
// Expect
// 06:40:03AM
