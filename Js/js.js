console.log(document.getElementById("parrafo1").innerHTML);
document.getElementById("parrafo2").innerHTML="Estamos probando DOM";

let elementosDom =document.getElementsByClassName("contenido");
console.log(elementosDom);
console.log(elementosDom[1].innerHTML);

console.log(elementosDom[0]);
//console.log(elementosDom[0].getElementById("parrafo3"));
console.log(typeof elementosDom[0]);
console.log(document.getElementById("parrafo3").innerHTML);
