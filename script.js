const cookieSort = document.querySelector(".cookieSort");
const btnReset = document.querySelector("#btnReset");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

var randomNumber = getRandomNumber();


const phrases = ["Valorize as pequenas conquistas!","Você nunca será velho demais para sonhar um novo sonho.", "Lutar sempre, vencer às vezes, desistir nunca.", "Que os dias bons se tornem rotina e os ruins se tornem raros.", "Seus medos morrerão de fome se você alimentar a sua motivação.", "Abandone suas dores e não a esperança em dias melhores."];

cookieSort.addEventListener('click', clickPhrases);
btnReset.addEventListener('click', clickReset);

function clickPhrases(){
  toggleScreen();
  screen2.querySelector(".mySort p").innerText = phrases[randomNumber];
}

function getRandomNumber() {
  return Math.round(Math.random() *5);
}

function clickReset() {
  toggleScreen()
  randomNumber = getRandomNumber();
}

function toggleScreen() {
 screen1.classList.toggle("hide");
 screen2.classList.toggle("hide");
}