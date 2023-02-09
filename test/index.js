function isPalindrome(text){
    const textArray = [...text]
    const ansArray = []

    for (let i = textArray.length -1; i >= 0; i--){
        ansArray.push(textArray[i])
    }

    let bool = true;

    for (let i = textArray.length -1; i>=0; i--){
        if (ansArray[i] !== textArray[i]){
            bool = false;
            return bool
        }
    }
    return bool;
}
