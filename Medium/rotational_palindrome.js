// Check if a given string is a rotation of a palindrome

function isPalindrome(str) {
    let a = 0;
    let b = str.length - 1;
    while (b > a) {
        if (str[a++] != str[b--]) {
            return false;
        }
    }
    return true;
}

function isRotationalPalindrome(str) {
    if (isPalindrome(str)) {
        return true;
    }
    let n = str.length;
    for (let i = 0; i < n - 1; i++) {
        let str1 = str.substring(i + 1);
        let str2 = str.substring(0, i + 1);

        if (isPalindrome(str1 + str2)) {
            return true;
        }
    }
    return false;
}


console.log(isRotationalPalindrome('dedcbaabc'));