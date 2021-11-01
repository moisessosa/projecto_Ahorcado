const btnCloseRules = document.querySelector('.close-rules');
const btnOpenRules = document.querySelector('.show-rules');
const modalWin = document.querySelector('.win');
const modalLose = document.querySelector('.lose');
const rules = document.querySelector('.rules');
const overlay = document.querySelector('.overlay');
const btnsCloseModal = document.querySelectorAll('.close-modal');
const closeRules =()=>{
    rules.classList.add('hidden');
    overlay.classList.add('hidden');
}
function showRules() {
    rules.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeModal=()=>{
    rules.classList.add('hidden');
    overlay.classList.add('hidden');
}
btnCloseRules.addEventListener('click', closeRules);
btnOpenRules.addEventListener('click', showRules);
btnsCloseModal.forEach(
    btn => btn.addEventListener('click',
    function(){
        modalWin.classList.add('hidden');
        modalLose.classList.add('hidden');
        overlay.classList.add('hidden');
    }))
