/* Type your javascript code here */

function add(...args)
{
  return args.reduce((sum,current) => sum+current,0); 
}

function getIndex(nestedArray,targetArray)
{
  for(let i=0;i<nestedArray.length;i++)
    {
     if(JSON.stringify(nestedArray[i]) == JSON.stringify(targetArray))
       return i;
    }
  
  return -1;
}

console.log(add(1,2,3,4));
console.log(add(3,4));
console.log(add(89,90,76,6,6,5,4));


console.log(getIndex([[1,2],[3,4],[5, [6,7]]],[9,8]))
console.log(getIndex([[1,2],[3,4],[5, [6,7]]],[5, [6,7]]))