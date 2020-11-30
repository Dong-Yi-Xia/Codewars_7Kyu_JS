
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

const s = "RqaEzty"

function accum(s) {
	let letters = s.toLowerCase().split("").map( (char,index) => {
    return char.repeat(index+1)
  })

    letters = letters.map(char => {
        return (char[0].toUpperCase() + char.slice(1))
    }).join("-")
    
    return letters
}

console.log( accum(s) )




// function accum(s) {
//      return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
//  }