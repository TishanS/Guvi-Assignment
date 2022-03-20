let data = document.querySelector("#img");

data.addEventListener("click", populateData) 
async function populateData(){
     let ele = await fetch("https://api.catboys.com/dice");
     let res = await ele.json();
     let web = res.url;
     let output = res.response;
     // console.log(output);
     // console.log(web);
     let img = document.querySelector(".url")
     img.setAttribute("src", web)
     document.querySelector("#num").value = output;

}