// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

//=====================================
const p1=document.createElement("p");
const node=document.createTextNode("I'm red");
p1.appendChild(node);
p1.style.color="red";
const element=document.getElementById("container");
element.appendChild(p1);
//=====================================
const h3=document.createElement("h3");
const node2=document.createTextNode("I'm a blue h3");
h3.appendChild(node2);
h3.style.color="blue";
const element2=document.getElementById("container");
element2.appendChild(h3);
//=====================================
const divbp=document.createElement("div");
const node3=document.createTextNode("");
divbp.appendChild(node3);
divbp.style.backgroundColor="pink";
divbp.style.border="2px solid black";
const element3=document.getElementById("container");
element3.appendChild(divbp);
//=====================================
const h1=document.createElement("h1");
const node4=document.createTextNode("I'm in a div");
h1.appendChild(node4);
divbp.appendChild(h1);
//=====================================
const p2=document.createElement("p");
const node5=document.createTextNode("Me too");
p2.appendChild(node5);
divbp.appendChild(p2);
