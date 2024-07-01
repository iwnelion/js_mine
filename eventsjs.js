//for events.html

//button 1 is in the html

//button 2
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World from js");

//button 3
const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
  alert("Hello World I'm button 3");
});

//button 4
function alertFunct(){
    alert("Hello from alertFunct()");
}

//button 5
function alertFunct23(){
    alert("Hello from alertFunct23()");
}
const btn5=document.querySelector("#btn5");
    // method 2
    btn5.onclick=alertFunct23;
    // method 3
    btn5.addEventListener("click", alertFunct23);

//button 6
btn6.addEventListener("click", function(e){
    e.target.style.background="blue";
});
