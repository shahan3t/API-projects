
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const urlAdvice = 'https://api.adviceslip.com/advice'
  fetch(urlAdvice)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.slip.advice
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
  const urlCat = 'https://cataas.com/cat/gif'
  fetch(urlCat)
      .then((response) => response.blob())
      .then((blob) => {
        const imageUrl = URL.createObjectURL(blob)
        document.querySelector('img').src = imageUrl
      })
      .catch(err => {
        console.log(`error ${err}`)
        });
}
let smapleVariable = 25

