//callback functions

hello(goodbye)

function hello(callback){
    console.log("hello");
    callback()
}
function goodbye(){
    console.log("goodbye :(");
}

function sum(callback,x,y){
    let result = x + y;
    callback(result);
}
function displayConsole(result){
    console.log(result);
}
function displayPage(result){
    document.getElementById("myH1").textContent = result;
}

sum(displayPage,5,3)
