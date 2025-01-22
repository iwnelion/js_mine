document.querySelector("button").addEventListener("click",getDrink)
function getDrink(){
    let drink=document.querySelector("input").value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data.drinks[1])
            document.querySelector('h2').innerText=data.drinks[1].strDrink
            document.querySelector('img').src=data.drinks[1].strDrinkThumb
            document.querySelector('h3').innerText=data.drinks[1].strInstructions
        })
        .catch(err=>{
            console.log(`error ${err}`)
        });
}