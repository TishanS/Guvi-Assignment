
//a.	Print odd numbers in an array
function odd(arr)
{
    let a=[];
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]%2 !== 0)
            a.push(arr[i]);
    }
   return a;
}

console.log(odd([1,2,3,4,5,6,7,8,9]));

Output:
[ 1, 3, 5, 7, 9 ]


//b.	Convert all the strings to title caps in a string array
function titleCase(arr) {
    
    for(let j=0; j<arr.length; j++)
    {
  arr[j] = arr[j].toLowerCase().split(' ');
  str=arr[j];
 
  for (var i = 0; i < str.length; i++)
  {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  console.log( str.join(" "));
    }
}
titleCase(["guvi geek","hello world"]);

Output:
Guvi Geek
Hello World


//c.	Sum of all numbers in an array
function sum(Arr)
{
    let res=0;
    for(let i=0; i<Arr.length; i++)
    {
     res=res+Arr[i];   
    }
 return res;   
}
console.log(sum([1,2,3,4,5]));

Output:
15


//d.	Return all the prime numbers in an array
function prime(arr)
{
    let count=0;
    let a=[];
    for(let i=0; i<arr.length; i++)
    {
     for(let j=1; j<arr[i]; j++)
     {
          if(arr[i]%j === 0)
              count++;
     }
     
     if(count === 1)
       a.push(arr[i]);
       count=0;
    }
 return a;   
}
console.log(prime([1,2,3,4,5]));

Output:
[ 2, 3, 5 ]


//e.	Return all the palindromes in an array
function palindrome(arr)
{
    let a=[];
    for(let i=0; i<arr.length; i++)
    {
        str=arr[i];
        let rev=[...str].reverse().join("");
     
          if(str === rev)
              a.push(arr[i]);
    }
 return a;   
}
console.log(palindrome(["civic", "radar", "hello"]));

Output:
[ 'civic', 'radar' ]


//f.	Return median of two sorted arrays of same size
function median(arr1, arr2)
{   
    let arr3 = [...arr1,...arr2];
    arr3.sort(function(a,b){
         return a-b;
    });
    let a=arr3.length;
    if(a%2 === 0)
    {
        let b=a/2;
        let res=((parseInt(arr3[b-1])+parseInt(arr3[b]))/2);
        return res;
    }  
    else
    {
        let b=parseInt(a/2);
        return arr3[b];
    }
}
console.log(median([1,3,5,7,9], [2,4,6,8,10]));



//g.	Remove duplicates from an array
function duplicate(arr)
{
    let uniqueChars = [...new Set(arr)];
    return uniqueChars;
}
console.log(duplicate(['A', 'B', 'A', 'C', 'B']));

Output:
[ 'A', 'B', 'C' ]

//Rotate
function rotate(arr, k)
{   
    let a=arr.splice(0,k);
    let c=[...arr,...a];
    return c;
}
console.log(rotate([1,2,3,4,5],2));