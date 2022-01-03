//a.	Print odd numbers in an array using (map and arrow function)

let odd = (arr) =>
{
    let a=[];
    arr.map(row => //looping through array simillar to [for(let i=0; i<arr.length; i++)]
    {
        if(row%2 !== 0)
            a.push(row);
    });
   return a;
};
console.log(odd([1,2,3,4,5,6,7,8,9,11]));


//b.	Convert all the strings to title caps in a string array using arrow function

let  titleCase = (arr) => {
    
    arr.map( row =>  
    {
  row = row.toLowerCase().split(' ');
  str=row;
 
  for (var i = 0; i < str.length; i++)
  {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  console.log( str.join(" "));
    });
};
titleCase(["guVI geek","hellO world"]);


//c.    Sum of all numbers in an array using (arrow and map function)

let sum= (Arr) =>
{
    let res=0;
    Arr.map(row => //looping through array
    {
     res=res+row;   
    });
 return res;   
};
console.log(sum([1,2,3,4,5]));



//d.	Return all the prime numbers in an array using(map and arrow)

let prime= (arr) =>
{
    let count=0;
    let a=[];
    arr.map(row =>   
    {
     for(let j=1; j<row; j++)
     {
          if(row%j === 0)
              count++;
     }
     
     if(count === 1)
       a.push(row);
       count=0;
    });
 return a;   
};
console.log(prime([1,2,3,4,5,7,11,12]));



//e.    Return all the palindromes in an array

let palindrome= (arr) =>
{
    let a=[];
    arr.map(row =>  
    {
        str=row;
        let rev=[...str].reverse().join("");
     
          if(str === rev)
              a.push(row);
    });
 return a;   
};
console.log(palindrome(["civic", "radar", "hello"]));

