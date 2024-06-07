let div = document.getElementById("red");
let inn = document.getElementById("inn");


let inputbox = document.getElementById("inputbox")
div.addEventListener("mouseover",function(dets){
    inn.innerHTML = inputbox.value
});