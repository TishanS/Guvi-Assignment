//1. Solve problems using array functions on rest countries data.

let req = new XMLHttpRequest();
 req.open('GET', 'https://restcountries.com/v3.1/all');
 req.send();
 req.onload= function()
 {
     let arr = JSON.parse(this.response);
  
 
//    a) Get all the countries from Asia continent /region using Filter function

Code: Sample 10 to 20 array data
let arr = Sample Data;
let res= arr.filter(ele => ele.region === 'Asia');
res.map((val,index) => console.log(index+" "+val.name))

//    b) Get all the countries with a population of less than 2 lakhs using Filter function

let res= arr.filter(ele => ele.population < 200000);
res.map((val,index) => console.log(index+" "+val.name))

//     c) Print the following details name, capital, flag using forEach function

arr.forEach(myFunction);

function myFunction(item) 
{
    console.log(item.name);
    console.log(item.capital);
    console.log(item.flag);
}

//     d) Print the total population of countries using reduce function

let pop=[];

arr.map(ele=> { 
    pop.push(ele.population);
    console.log(pop);
});
const reducer=(sum,ele)=> sum+ele;
console.log(pop.reduce(reducer));
console.log(pop.reduce((sum,ele)=> sum+ele));
  
let totalPop = arr.reduce((acc,value)=>acc+=value.population,0)
console.log("Total Population: "+totalPop)


//     e) Print the country which uses US Dollars as currency.

arr.map(ele => {
    let currency = ele.currencies.code;
   
    if(currency === "USD")
     {
         console.log(ele.name);
    }
 }

}

API: https://restcountries.com/v3.1/all(PostMan JSON data)
