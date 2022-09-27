// Alogorthm for finding whether the number is armstrong or not


function isArmstrong(n) {
    let sum = 0;
    let temp = n;
    while (temp > 0) {
        sum = sum + (temp % 10) * (temp % 10) * (temp % 10)
        temp = parseInt(temp / 10)
    }
    return sum == n;
}

console.log(isArmstrong(153));

