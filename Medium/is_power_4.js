// check given number is a power of another number or not

function isPower(n, p)
{
  if(n == 0)
    return false;
  while(n != 1)
  {   
   if(n % p != 0)
      return false;
    n = n / p;     
  }
  return true;
}

console.log(isPower(144, 12));


