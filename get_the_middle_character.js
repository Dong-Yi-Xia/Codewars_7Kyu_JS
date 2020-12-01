// You are going to be given a word. Your job is to return the 
// middle character of the word. If the word's length is odd, return the middle 
// character. If the word's length is even, return the middle 2 characters.

// #Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"


const s = "abcdef"

function getMiddle(s) {
    let mid = s.length/2
    if (s.length % 2 === 0){
      let top = mid + 1
      let bot = mid - 1
      return s.slice(bot,top)
    } else {
        return s[Math.floor(mid)]
    }
}

console.log(getMiddle(s))



// function getMiddle(s){
//   return s.slice((s.length-1)/2, s.length/2+1);
// }