// function isPalindrome (word){
//     let wordArray = [...word]
//     let ansArray = []

//     for (let i = wordArray.length -1; i >= 0; i--){
//         ansArray.push(wordArray[i])
//     }

//     for (let i = wordArray.length -1; i>=0; i--){
//         if (ansArray[i] !== wordArray[i]){
//             return false;
//         }
//     }
//     return true
// }

console.log(isPalindrome('christian'))

// solution in next page

function reverseString(word) {
    // create an array from the input string
    const wordArray = word.split("");
    // reverse the array
    const reversedWordArray = wordArray.reverse();
    // create a string from the reversed array
    const reversedWord = reversedWordArray.join("");
    // return the reversed string
    return reversedWord;
  }
  
  function isPalindrome(word) {
    // reverse the input string
    const reversedWord = reverseString(word);
    // if the reversed string is the same as the input
    if (word === reversedWord) {
      return true;
    } else {
      return false;
    }
  }
