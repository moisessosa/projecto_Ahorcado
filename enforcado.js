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
const msg = document.querySelector('.msg');
let secretWord;
let temp =0;
let wordOfUser=[]; 
let secretWordArray;
const repetidos = [];// quizas
tries.textContent = opportunities;
// funções
function gerarEspaciosdaPalavraSecreta(palavra){
    palavra.forEach((element,id) => {
        
        word.innerHTML += `<div class="letter" id=letter${id}></div>`
    });
}
function checkLetter(letra, code, word=secretWordArray){
    console.log(letra, code, word);
    if(opportunities > 0){
        if(code >=65 && code <=90){
            
            let id = 0;
            for(letter of word){
             
                if(letter==letra){
                    document.querySelector(`#letter${id}`).textContent = letra;
                    console.log("estoy dentro de las letras iguales",id)
                    wordOfUser.push(letra);
                    
                }/* else{
                    console.log(letter,letra,id)
                } */
                id++
            }
            
            if(wordOfUser.length > temp){/** */
                
                temp = wordOfUser.length;
            }else{
                opportunities-=1;
                tries.textContent = opportunities;
                
            }
            
        }else{//posible sonido de error 
            console.log('no es una letra')
        }
        //repetidos.push(letra)
    
    

}
//console.log(repetidos,repetidos.indexOf(letra))
/*if(!acerto && code >=65 && code <=90){
    opportunities-=1;
    tries.textContent = opportunities;
}*/
}
//conexão à API
const getWord =()=>{
      return fetch(url)
            .then(response => response.json())
            .then(data =>{
                
                //document.getElementById('hidden').value = data.body.Word;
                secretWord = data.body.Word.toLowerCase().normalize("NFD").replace(/[^a-zA-Zs]/g, "");
                secretWordArray = secretWord.split('')
                //return  data.body.Word
                 console.log('dentro do fecth',secretWord)
                 gerarEspaciosdaPalavraSecreta(secretWordArray);
                 msg.style.color = '#eee';
                 msg.textContent ="Pode começar jogar ";
                 /* document.body.addEventListener('keyup', (evt)=>{
                     
                     checkLetter(evt.key, evt.keyCode, secretWordArray);
                 }); */
            })
            .catch(err =>{
                msg.style.color = 'red';
                msg.textContent =" no se pudo conectar la API " + err;
             err})
  
    //"https://palabras-aleatorias-public-api.herokuapp.com/word-as-image?word=famoso"
}
//btnComecar.addEventListener('click', getWord)
getWord()
//secretWord = document.getElementById('hidden').value;
document.body.addEventListener('keyup', (evt)=>{
                     
    checkLetter(evt.key, evt.keyCode, secretWordArray);
});


