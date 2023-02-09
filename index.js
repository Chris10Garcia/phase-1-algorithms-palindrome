function isPalindrome(word) {
    let wordArray = [...word]
    let ansArray = []

    for (let i = wordArray.length -1; i >= 0; i--){
        ansArray.push(wordArray[i])
    }

    for (let i = wordArray.length -1; i>=0; i--){
        if (ansArray[i] !== wordArray[i]){
            return false;
        }
    }
    return true
}



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
