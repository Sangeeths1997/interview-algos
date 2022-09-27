// how many ways can we make the change for some value using given coins


function count(coins , n , sum )
{
    if (sum == 0)
        return 1;
    if (sum < 0)
        return 0;
    if (n <=0)
    return count( coins, n - 1, sum ) +
           count( coins, n, sum - coins[n - 1] );
}
 
var coins = [1, 2, 3];
var n = coins.length;
console.log(count(coins, n, 4));