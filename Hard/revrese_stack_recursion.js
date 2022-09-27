// Reverse a Stack using Recursion

let str = [1,2,3,4];
function insertBottom(temp)
{
    if(str.length==0)
        str.push(temp);
    else
    {
            let item = str.pop();
            insertBottom(temp);
            str.push(item);
    }
}
function reverse()
{
    if(str.length > 0)
        {
            let temp = str.pop();
            reverse();
            insertBottom(temp);
        }
}

reverse();
console.log(str);