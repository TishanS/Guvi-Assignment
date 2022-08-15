//  1.	How to compare two JSON have the same properties without order?:

var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
var flag=true;

if(Object.keys(obj1).length === Object.keys(obj2).length){
    for(let key in obj1) {
    // console.log(key);
        if(obj1[key] === obj2[key]) {
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}
else {
    flag=false;
}
console.log("is object equal:"+" "+flag);

//  2.  Use the rest countries API and print all countries name, region, sub region and population, display all the country flags in console

let req = new XMLHttpRequest();
 req.open('GET', 'https://restcountries.com/v3.1/all');
 req.send();
 req.onload= function()
 {
     let data=JSON.parse(this.response);
    
     for(let i=0; i<data.length; i++)
     {
        console.log(data[i]);
        console.log("Region:"+data[i].region)
        console.log("Subregion:"+data[i].subregion)
        console.log("Population:"+data[i].population)
//         console.log(data.flags.svg)
         
        const h3 = document.createElement("h3");
        h3.innerHTML+= "\n"+"Country name: "+data[i].name+ " " +"Region: "+data[i].region;
    
        const img = document.createElement("img");
        img.src=data[i].flags.png;
        document.getElementById("main").append(h3,img);

    }
 }
