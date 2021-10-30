let opportunities = 8;
const url = "https://palabras-aleatorias-public-api.herokuapp.com/random";
// API gera palavras aleatorias en espanhol
const tries = document.getElementById('tries');
const word = document.querySelector('.word');
const palo = document.querySelector('.palo');
const head = document.querySelector('.head');
const bodyToy = document.querySelector('.body_toy');
const arms = document.querySelector('.arms');
const feet = document.querySelector('.feet');
const btnComecar = document.querySelector('.btn');
const error = document.querySelector('.error');
let secretWord;

tries.textContent = opportunities;

const getWord =()=>{
      return fetch(url)
            .then(response => response.json())
            .then(data =>{
                
                //document.getElementById('hidden').value = data.body.Word;
                secretWord = data.body.Word;
                 //return  data.body.Word
                 console.log('dentro do fecth',secretWord)
                 function gerarEspaciosdaPalavraSecreta(){

                 }
            })
            .catch(err =>{
                error.style.color = 'red';
                error.textContent =" no se pudo conectar la API " + err;
             err})
  
    //"https://palabras-aleatorias-public-api.herokuapp.com/word-as-image?word=famoso"
}
//btnComecar.addEventListener('click', getWord)
getWord()
//secretWord = document.getElementById('hidden').value;



