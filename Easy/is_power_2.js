// find whether the number is a power of two

function isPowerTwo(n) {
    if (n == 0)
        return false;
    while (n != 1) {
        if (n % 2 != 0)
            return false;
        n = n / 2;
    }
    return true;
} 

console.log(isPowerTwo(32));