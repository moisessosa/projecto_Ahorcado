let opportunities = 9;
const url = 'https://api.dicionario-aberto.net/random';// API em português
/*"https://palabras-aleatorias-public-api.herokuapp.com/random";
 API gera palavras aleatorias en espanhol*/
const tries = document.getElementById('tries');
const word = document.querySelector('.word');
const palo = document.querySelector('#palo');
const head = document.querySelector('#head');
const bodyToy = document.querySelector('#body_toy');
const arms = document.querySelector('#arms');
const feet = document.querySelector('#feet');
const btnComecar = document.querySelector('.btn');
const msg = document.querySelector('.msg');
let original;
let secretWord;
let temp =0;
let wordOfUser=[]; 
let wordOfUserAux=[]; 
let secretWordArray;
const repetidos = [];
tries.textContent = opportunities;
// funções
function gerarEspaciosdaPalavraSecreta(palavra){
    palavra.forEach((element,id) => {
        
        word.innerHTML += `<div class="letter" id=letter${id}></div>`
    });
}
function desenharAforcado(num){
    console.log("estoy en diseno",num)
    switch (num) {
        case 9:
            palo.style.borderRight= '15px solid var(--color-font)';
            break;
        case 8:
            palo.style.borderTop= '15px solid var(--color-font)';
            break;
        case 7:
            palo.style.borderLeft= '15px solid var(--color-font)';
            break;
        case 6:
            head.style.border = '3px solid var(--color-font)';
            break;
        case 5:
            bodyToy.style.border =  '2px solid white';
            break;
        case 4:
            arms.style.borderTop = '3px solid var(--color-font)'; 
            break;
        case 3:
            arms.style.borderLeft =  '3px solid var(--color-font)';
            break;
        case 2:
            feet.style.borderTop = '3px solid var(--color-font)'; 
            tries.style.color='red';
            break;
            
        case 1:
            feet.style.borderLeft = '3px solid var(--color-font)';
            tries.textContent = 0;
            modalLose.classList.remove('hidden');
            overlay.classList.remove('hidden');
            document.querySelector('.original1').textContent = original;
            break;
        
    }
}
function checkLetter(letra, code, word=secretWordArray){
    console.log(letra, code, word);
    if(opportunities >0){
        if(code >=65 && code <=90){
            playSom('right');//sonido de que la tecla sim é uma letra
            let id = 0;
            for(letter of word){
             
                if(letter==letra){
                    document.querySelector(`#letter${id}`).textContent = letra;
                    console.log("estoy dentro de las letras iguales",id)
                    wordOfUser[id]=letra;
                    wordOfUserAux.push(letra)
                    console.log(wordOfUser,"\n",wordOfUserAux);//
                }
                id++
            }
            
            if(wordOfUserAux.length > temp){/** */
                
                temp = wordOfUserAux.length;
            }else if(repetidos.indexOf(letra)==-1){
               // console.log("antes de deforcado", opportunities)
                desenharAforcado(opportunities, word);
                opportunities-=1;
                tries.textContent = opportunities;
                playSom('wrong')
            }

            
        }else{
            console.log('no es una letra')
        }
        repetidos.push(letra)
    if(wordOfUser.toString() === word.toString()){
        //alert("GANHO")
        modalWin.classList.remove('hidden');
        overlay.classList.remove('hidden');
        document.querySelector('.original').textContent = original;
    }
    

    }else{
        //alert('Perdio');
        modalLose.classList.remove('hidden');
        overlay.classList.remove('hidden');
        document.querySelector('.original1').textContent = original;
    }

}
//conexão à API
const getWord =()=>{
      return fetch(url)
            .then(response => response.json())
            .then(data =>{
                
                //data.W
                original= data.word;
                console.log(data.word);
                secretWord = data.word.toLowerCase().normalize("NFD").replace(/[^a-zA-Zs]/g, "");
                secretWordArray = secretWord.split('')
                
                 console.log('dentro do fecth',secretWord)
                 gerarEspaciosdaPalavraSecreta(secretWordArray);
                 msg.style.color = '#eee';
                 msg.textContent ="Pode começar jogar ";
                 
            })
            .catch(err =>{
                msg.style.color = 'red';
                msg.textContent =" no se pudo conectar la API " + err;})
  
    
}

getWord()

document.body.addEventListener('keyup', (evt)=>{
                     
    checkLetter(evt.key, evt.keyCode, secretWordArray);
});
//document.querySelector('#reiniciar').addEventListener('click', location.reload())

