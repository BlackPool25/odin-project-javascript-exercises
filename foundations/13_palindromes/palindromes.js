const palindromes = function (text) {
    let left = 0;
    let right = text.length-1;

    const isAlnum = char => /^[a-z0-9]$/i.test(char);

    while(left < right){
        while(left < right && !isAlnum(text[left])) left++;

        while(left < right && !isAlnum(text[right])) right--;

        if(text[left].toLowerCase() !== text[right].toLowerCase()) return false;

        left++;
        right--;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
