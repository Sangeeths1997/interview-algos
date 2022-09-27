// create array for the snake and ladder game from 1 to 100 in o(n)

function snakeLadderArr() {
    let arr = [];
    for (let i = 1; i <= 64; i++) {
        const base = Math.floor((i - 1) / 10);
        if (base % 2 === 0) {
            arr.push(i);
        } else {
            arr.push(((base + 1) * 10) - ((i - 1) % 10));
        }
    }
    return arr;
}

console.log(snakeLadderArr());
