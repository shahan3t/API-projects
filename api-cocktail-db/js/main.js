//The user will enter a cocktail. Get a cocktail name, photo
//and instructions and place them in the DOM


document.querySelector('button').addEventListener('click', cocktailMaker)

function cocktailMaker() {
    console.clear();
    let drink = document.querySelector('input').value.toLowerCase().replaceAll(' ', '+')
    console.log(drink)
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drink)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      for (let i = 0; i < data.drinks.length; i++) {
        setTimeout( _ => {
          document.querySelector('h2').innerText = data.drinks[i].strDrink
          document.querySelector('h3').innerText = data.drinks[i].strInstructions
          document.querySelector('img').src = data.drinks[i].strDrinkThumb
        }, i * 2000);      
      }
      }
    )
    .catch(err => {
        console.log(`error ${err}`)
    });
}