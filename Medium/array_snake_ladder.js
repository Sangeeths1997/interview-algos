// create array for the snake and ladder in o(n)

function snakeLadderArr() {
    let arr = [];
    for (let i = 1; i <= 64; i++) {
        console.log(Math.floor((i - 1) / 8), i, (i - 1) % 8)
        const base = Math.floor((i - 1) / 8);
        if (base % 2 === 0) {
            arr.push(i);
        } else {
            arr.push(((base + 1) * 8) - ((i - 1) % 8));
        }
    }
}

console.log(snakeLadderArr());



