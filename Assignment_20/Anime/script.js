let data = document.querySelector("#content");
let i=0;
let nul = ""

data.addEventListener("click", populateData) 
async function populateData(){

    if(i < 13){
         
         let ele = await fetch("https://anime-facts-rest-api.herokuapp.com/api/v1");
         let res = await ele.json();
        //  console.log(res.data[i].anime_name);
         let name = res.data[i].anime_name;
         document.querySelector("#quote").value = name;
         let web = res.data[i].anime_img;
         let img = document.querySelector(".url");
         img.setAttribute("src", web );
         i++;
     }
   else{
    //  console.log("Try Again");
     document.querySelector("#quote").value = "Refresh Page";
     let img = document.querySelector(".url"); 
     img.setAttribute("src", nul );

   }
}
    