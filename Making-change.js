/*
Complete the method that will determine the minimum number of coins 
needed to make change for a given amount in American currency.

Coins used will be half-dollars, quarters, dimes, nickels, and pennies, 
worth 50¢, 25¢, 10¢, 5¢ and 1¢, respectively. 
They'll be represented by the symbols H, Q, D, N and P.

The argument passed in will be an integer representing the value in cents. 
The return value should be a hash/dictionary/object with the symbols as keys, 
and the numbers of coins as values.

Coins that are not used should not be included in the hash. 
If the argument passed in is 0, then the method should return an empty hash.

Examples:
  makeChange(0)   //-->  {}
  makeChange(1)   //-->  {"P":1}
  makeChange(43)  //-->  {"Q":1, "D":1, "N":1, "P":3}
  makeChange(91)  //-->  {"H":1, "Q":1, "D":1, "N":1, "P":1}
*/


// Solution

const makingChange = n => {
  let H = Math.floor(n/50);
  n -= (50*H);
  let Q = Math.floor(n/25);
  n -= (25*Q);
  let D = Math.floor(n/10);
  n -= (10*D);
  let N = Math.floor(n/5);
  n-= (5*N);
  let obj = {H,Q,D,N,P:n}
  return Object.keys(obj).filter(k=>obj[k]).reduce((o,k)=>{
      o[k] = obj[k];
      return o
  },{})
};

// or

const makeChange = (amount) => {
  let values = { H: 50, Q: 25, D: 10, N: 5, P: 1 };
  let hash = {};
  for (const [key, value] of Object.entries(values)) {
    const newKey = Math.floor(amount / value);
    if (newKey !== 0) hash[key] = newKey;
    amount = amount % value;
  }
  return hash;
};