//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  let urlArray = [`http://numbersapi.com/${choice}`, `http://numbersapi.com/${choice}`, `http://numbersapi.com/${choice}`]
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

function getCount(str) {
  let a = 0
  str.split('').forEach((c) => {
    if(c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u'){
      a+=1
    }
  })
  return a
 }

getCount('aabb')
