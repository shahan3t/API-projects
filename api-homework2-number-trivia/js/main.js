//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  let urlArray = [`https://numbersapi.com/${choice}`, `https://numbersapi.com/${choice}`, `https://numbersapi.com/${choice}`]
  let holderArray = ['#trivia', '#math', '#date']
  urlArray.forEach((url, index) => {
    fetch(url)
          .then(res => res.text()) // parse response as JSON
          .then(data => {
            console.log(data)
            console.log(holderArray[index])
            document.querySelector(holderArray[index]).innerText = data
          })
          .catch(err => {
            console.log(`error ${err}`)
          })
  })
}


