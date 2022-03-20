let data = document.querySelector("#img");
let out = document.querySelector("#output");

data.addEventListener("click", populatedata);
function populatedata (){
    fetch("https://dog.ceo/api/breeds/image/random")
    
      .then(res => {
          var ele = res.json();
        //   console.log(ele);
          return ele;
      })
      .then(ele =>{
          var data = ele.message;
          out.innerHTML = "<img src="+data+" height=500 width=700>";
          })   
}