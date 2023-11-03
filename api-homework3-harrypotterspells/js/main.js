const allButtons = document.getElementsByClassName('spell-type');
 for(i = 0; i < allButtons.length; i++){
  allButtons[i].addEventListener('click', getFetch);
 }
function getFetch(){
  let url = `https://wizard-world-api.herokuapp.com/Spells?Type=${this.id}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        data = data.filter(element => element['incantation'] !== null)
        const randomIndex = Math.floor(Math.random() * data.length)
        console.log(data[randomIndex])
        document.querySelector('#spell-incantation').innerText = data[randomIndex]['incantation']
        document.querySelector('#spell-description').innerText = data[randomIndex]['effect']
        }
      )
      .catch(err => {
          console.log(`error ${err}`)
      });
}

