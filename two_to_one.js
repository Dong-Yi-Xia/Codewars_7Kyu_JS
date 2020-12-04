// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


let s1 = "xyaabbbccccdefww"
let s2 = "xxxxyyyyabklmopq"

function longest(s1, s2) {
    let c = (s1+s2).split("")
    let unqieArray = c.filter( (value,index,array) => array.indexOf(value) === index)
    return unqieArray.sort().join("")
}

console.log(longest(s1, s2))







// const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')