

let change=document.getElementById('change');
function greetme(){
change.style.color='red';
}
change.addEventListener("click",greetme);


let p=document.createElement('p');
p.innerHTML="this is react js";
change.append(p);
console.log("p");