// get all permutations of a given string

function permute(str , ans)
{  
    if (str.length == 0)
    {
        ansArr.push(ans);
    }
       
    for(let i = 0 ;i < str.length; i++)
    {
        let ch = str[i];
        let left = str.slice(0, i);
        let right = str.slice(i + 1);
        let item = left + right;
        permute(item, ans + ch);
    }
    return ansArr;
}
let ans="";
let ansArr = [];

console.log(permute('sangeeth', ans));