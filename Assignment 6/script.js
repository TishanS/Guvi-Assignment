
// 2)
alert("I'm invoked!");


// 3)
alert("I'm JavaScript!");
alert("Hello"); 
alert(`Wor
 ld`)
alert(3 +
1
+ 2); // this is multiple line code and its working


// 4)
let admin=9, fname=10.5 , lname; 
fname = "Guvi";
lname = "geek"
admin = fname+" "+lname;
alert( admin ); // "Guvi geek"

// 5)
let fname=10.5; 
fname = "Guvi";
lname = "geek"
let name = fname+lname;
alert( `hello ${name}`);

// 6)
let a = prompt("First number?");
let b = prompt("Second number?");
alert(parseInt(a) + parseInt(b));

// 7)
//If value of 'a' is either zero or null then it will get Diffused.
var a = "2" > "12"; 
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}

// 8)
//Leave the prompt 'Empty' and press OK to display 'Success'
let a = prompt("Enter a number?");
//Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}

// 9)
let value = prompt('How many runs you scored in this ball');
if (parseInt(value) === 4) {
      console.log("You hit a Four");
} else if (parseInt(value) === 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}

// 10)
// You cant change the value of the msg
let message;
if (null || 2 || undefined )
{
   message = "welcome boss";
}
else
{
   message = "Go away";
}
  console.log(message);

// 11)
let message;
let lock = 0;
//Dont change any code below this 
if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message);

// 12)
let message;
let lock = 0;
//Dont change any code below this
if (lock && " " || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);

// 13)
// You can change only 2 characters
let i = 3;
while (i) {
  console.log( i-- );
}


// 14)
let num = 1
console.log(num,num+1,num+2)
num += 3
console.log(num,num+1,num+2)
num += 3
console.log(num, num+1)
num += 2
console.log(num,num+1)


// 15)
// You are allowed to modify only one character 
for (let num = 2; num <= 20; num += 2) {
    console.log(num)
  }

// 16)
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(gifts[i]);
}


// 17)
let countdown = 100;
while (countdown > 0) {
  
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
  countdown--;
}

// 18)
//Msg printed is 'hi' as lemein is string("0")the condition is true and lemeout is (0) the condition is false
var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += "Hello";
}
console.log(msg);