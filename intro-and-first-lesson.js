const submitButton = document.querySelector('.submit-button');
const textBar = document.querySelector('.text-bar');
const popupMessage = document.querySelector('.pop-up-message');
const messageBox = document.querySelector('.message-box');
let storedUserName = localStorage.getItem('userName');

if (storedUserName !== "") {
  submitButton.disabled = true;
  submitButton.classList.add('disabled')
  userName = storedUserName;
} else {
  userName = "";
}

const hideMessage = () => {
  popupMessage.classList.remove('popup-clicked');
  messageBox.innerHTML = "";
  textBar.value = "";
}

const showMessage = () => {
  popupMessage.classList.add('popup-clicked');
  let userName = textBar.value;
  const messageHeader = document.createElement('h2');
  messageHeader.classList.add('popup-header');
  if (textBar.value === "") {
    userName = "Anonymous";
  }
  /*localStorage.setItem('userName', userName);*/
  messageHeader.innerText = `Welcome aboard, ${userName}!`;
  messageBox.appendChild(messageHeader);
  const messageText = document.createElement('p');
  messageText.classList.add('popup-text');
  messageText.innerText = 'Thank you for introducing yourself! I hope you have a great time learning English with us. Even though it might seem like a daunting and intimidating task you have nothing to worry about! We will be assisting you every step of the way. We are here to make this journey fun and exciting and show you that ANYONE can speak English. You do not have to think about organizing your learning process, we will tell you exactly what to do. So just sit back, relax and let us take you on this exciting ride! Just promise me you will do your homework :)';
  messageBox.appendChild(messageText);
  const swearButton = document.createElement('button');
  swearButton.classList.add('swear-button');
  swearButton.innerText = 'Pinky swear';
  swearButton.onclick = hideMessage;
  messageBox.appendChild(swearButton);
}

submitButton.addEventListener('click', showMessage);
textBar.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    showMessage;
  }
})

/*first answer*/
const quizTextbar = document.querySelector('#quiz-textbar');
const checkButton = document.querySelector('#submit');
const correct = document.querySelector('#correct');
const incorrect = document.querySelector('#incorrect');
let inputValue = "";

const removeChecks = () => {
  if (quizTextbar.value !== inputValue) {
    correct.classList.remove('correct-shown');
    incorrect.classList.remove('incorrect-shown');
  }
}

const checkAnswer = () => {
  let answer = quizTextbar.value.toLowerCase();
  correct.classList.remove('correct-shown');
  incorrect.classList.remove('incorrect-shown');
  if (answer === 'i will live' || answer === 'i will live.' || answer === "i'll live" || answer === "i'll live") {
    correct.classList.add('correct-shown');
  } else {
    incorrect.classList.add('incorrect-shown');
  }

  inputValue = answer;
}

checkButton.addEventListener('click', checkAnswer);
quizTextbar.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    checkAnswer();
  }
});

quizTextbar.addEventListener('input', removeChecks);

/*second answer*/
const quizTextbar2 = document.querySelector('#quiz-textbar-2');
const checkButton2 = document.querySelector('#submit-2');
const correct2 = document.querySelector('#correct-2');
const incorrect2 = document.querySelector('#incorrect-2');

const checkAnswer2 = () => {
  let answer = quizTextbar2.value.toLowerCase();
  correct2.classList.remove('correct-shown');
  incorrect2.classList.remove('incorrect-shown');
  if (answer === 'he will live' || answer === 'he will live.' || answer === "he'll live" || answer === "he'll live") {
    correct2.classList.add('correct-shown');
  } else {
    incorrect2.classList.add('incorrect-shown');
  }
}

checkButton2.addEventListener('click', checkAnswer2);
quizTextbar2.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    checkAnswer2();
  }
})