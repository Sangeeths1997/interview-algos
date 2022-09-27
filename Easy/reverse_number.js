// Algorithm for reversing a number

let rev = 0;
function reverseNum(n) {
    while (n != 0) {
        rev = (rev * 10) + (n % 10);
        n = parseInt(n/10);
    }
    return rev;
}

console.log(reverseNum(12345));