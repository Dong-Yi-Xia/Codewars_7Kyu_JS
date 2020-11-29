

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.


const str = "doomsday is coming"

function getCount(str) {
    var vowelsCount = 0;
    let vowels = "aeiou"
    
    for(let i=0; i<str.length; i++){
      vowels.includes(str[i]) ? vowelsCount++ : null     
    }
  
    return vowelsCount;
  }


  console.log( getCount(str) )
