// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

// Test.assertEquals(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
// Test.assertEquals(findShort("turns out random test cases are easier than writing out basic ones"), 3); 

const s = "this old man is the world fastest runner"


function findShort(s){
    s = s.split(" ").sort((wordA, wordB) => {
      return wordA.length - wordB.length
    })
    return s[0].length
 }

console.log(findShort(s)) 




// function findShort(s){
//     return Math.min(...s.split(" ").map (s => s.length));
// }