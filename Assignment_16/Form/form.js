function addrow(){

    let tableElement = document.querySelector("#table");
    let row = tableElement.insertRow();
    let td1 = row.insertCell();
    td1.innerText= document.querySelector("#first").value;
    document.querySelector("#first").value = "";
    let td2 = row.insertCell();
    td2.innerText= document.querySelector("#last").value;
    document.querySelector("#last").value = "";

    let td3 = row.insertCell();
    td3.innerText= document.querySelector("#add").value;
    document.querySelector("#add").value = "";
    let td4 = row.insertCell();
    td4.innerText= document.querySelector("#pin").value;
    document.querySelector("#pin").value = "";
    let td5 = row.insertCell();
    td5.innerText= document.querySelector("#gender").value;
    document.querySelector("#gender").value = "";

    let td6 = row.insertCell();
    td6.innerText= document.querySelector("#food").value;
    document.querySelector("#food").value = ""; 
   
    
    let td7 = row.insertCell();
    td7.innerText= document.querySelector("#state").value;
    document.querySelector("#state").value = ""; 
    let td8 = row.insertCell();
    td8.innerText= document.querySelector("#country").value;
    document.querySelector("#country").value = "";

  
}
// function addrow(){
//     var tableElement = document.getElementById("table");
//     var row = tableElement.insertRow();
//     var td1 = row.insertCell();
//     td1.innerText = "CCC"
//     var td2 = row.insertCell();
//     td2.innerText = "28"
//     var td3 = row.insertCell();
//     td3.innerText = "CCC"
//     var td4 = row.insertCell();
//     td4.innerText = "28"
// }