
let text1 = document.querySelector("#first");
text1.addEventListener("keyup", function press(e) {
if(!((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105) ) )
        
    alert("Only numbers are allowed");

})
let text2 = document.querySelector("#second");
text2.addEventListener("keyup", function press(e) {
if(!((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105) ))

    alert("Only numbers are allowed");

})

let addition = document.querySelector("#add");
addition.addEventListener("click", function add(){

let num1 = document.querySelector("#first").value ;
let num2 = document.querySelector("#second").value ;
let out = parseInt(num1) + parseInt(num2);
console.log(out);
document.querySelector("#out").value = out;
})

let subtraction = document.querySelector("#sub");
subtraction.addEventListener("click", function sub(){

let num1 = document.querySelector("#first").value ;
let num2 = document.querySelector("#second").value ;
let out = parseInt(num1) - parseInt(num2);
console.log(out);
document.querySelector("#out").value = out;
})

let multiply = document.querySelector("#mul");
multiply.addEventListener("click", function mul(e){

let num1 = document.querySelector("#first").value ;
let num2 = document.querySelector("#second").value ;
let out = parseInt(num1) * parseInt(num2);
console.log(out);
document.querySelector("#out").value = out;
})

let division = document.querySelector("#div");
division.addEventListener("click", function div(e){

let num1 = document.querySelector("#first").value ;
let num2 = document.querySelector("#second").value ;
let out = parseInt(num1) / parseInt(num2);
console.log(out);
document.querySelector("#out").value = out;
})

let modulus = document.querySelector("#mod");
modulus.addEventListener("click", function mod(e){

let num1 = document.querySelector("#first").value ;
let num2 = document.querySelector("#second").value ;
let out = parseInt(num1) % parseInt(num2);
console.log(out);
document.querySelector("#out").value = out;
})
   
    




