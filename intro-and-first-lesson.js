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

quizTextbar.addEventListener('input', () => {
  if (quizTextbar.value !== inputValue) {
    correct.classList.remove('correct-shown');
    incorrect.classList.remove('incorrect-shown');
  }
});

/*second answer*/
const quizTextbar2 = document.querySelector('#quiz-textbar-2');
const checkButton2 = document.querySelector('#submit-2');
const correct2 = document.querySelector('#correct-2');
const incorrect2 = document.querySelector('#incorrect-2');
let inputValue2 = "";

const checkAnswer2 = () => {
  let answer = quizTextbar2.value.toLowerCase();
  correct2.classList.remove('correct-shown');
  incorrect2.classList.remove('incorrect-shown');
  if (answer === 'he will live' || answer === 'he will live.' || answer === "he'll live" || answer === "he'll live") {
    correct2.classList.add('correct-shown');
  } else {
    incorrect2.classList.add('incorrect-shown');
  }

  inputValue2 = answer;
}

checkButton2.addEventListener('click', checkAnswer2);
quizTextbar2.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    checkAnswer2();
  }
})

quizTextbar2.addEventListener('input', () => {
  if (quizTextbar2.value !== inputValue2) {
    correct2.classList.remove('correct-shown');
    incorrect2.classList.remove('incorrect-shown');
  }
});

/*third answer */
const quizTextbar3 = document.querySelector('#quiz-textbar-3');
const checkButton3 = document.querySelector('#submit-3');
const correct3 = document.querySelector('#correct-3');
const incorrect3 = document.querySelector('#incorrect-3');
let inputValue3 = "";

const checkAnswer3 = () => {
  let answer = quizTextbar3.value.toLowerCase();
  correct3.classList.remove('correct-shown');
  incorrect3.classList.remove('incorrect-shown');
  if (answer === 'did you see' || answer === 'did you see?') {
    correct3.classList.add('correct-shown');
  } else {
    incorrect3.classList.add('incorrect-shown');
  }

  inputValue3 = answer;
}

checkButton3.addEventListener('click', checkAnswer3);
quizTextbar3.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    checkAnswer3();
  }
});

quizTextbar3.addEventListener('input', () => {
  if (quizTextbar3.value !== inputValue3) {
    correct3.classList.remove('correct-shown');
    incorrect3.classList.remove('incorrect-shown');
  }
});

/*fourth answer */
const quizTextbar4 = document.querySelector('#quiz-textbar-4');
const checkButton4 = document.querySelector('#submit-4');
const correct4 = document.querySelector('#correct-4');
const incorrect4 = document.querySelector('#incorrect-4');
let inputValue4 = "";

const checkAnswer4 = () => {
  let answer = quizTextbar4.value.toLowerCase();
  correct4.classList.remove('correct-shown');
  incorrect4.classList.remove('incorrect-shown');
  if (answer === 'do you see' || answer === 'do you see?') {
    correct4.classList.add('correct-shown');
  } else {
    incorrect4.classList.add('incorrect-shown');
  }

  inputValue4 = answer;
}

checkButton4.addEventListener('click', checkAnswer4);
quizTextbar4.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    checkAnswer4();
  }
});

quizTextbar4.addEventListener('input', () => {
  if (quizTextbar4.value !== inputValue4) {
    correct4.classList.remove('correct-shown');
    incorrect4.classList.remove('incorrect-shown');
  }
});

/*fifth answer */
const quizTextbar5 = document.querySelector('#quiz-textbar-5');
const checkButton5 = document.querySelector('#submit-5');
const correct5 = document.querySelector('#correct-5');
const incorrect5 = document.querySelector('#incorrect-5');
let inputValue5 = "";

const checkAnswer5 = () => {
  let answer = quizTextbar5.value.toLowerCase();
  correct5.classList.remove('correct-shown');
  incorrect5.classList.remove('incorrect-shown');
  if (answer === 'will you see' || answer === 'will you see?') {
    correct5.classList.add('correct-shown');
  } else {
    incorrect5.classList.add('incorrect-shown');
  }

  inputValue5 = answer;
}

checkButton5.addEventListener('click', checkAnswer5);
quizTextbar5.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    checkAnswer5();
  }
});

quizTextbar5.addEventListener('input', () => {
  if (quizTextbar5.value !== inputValue5) {
    correct5.classList.remove('correct-shown');
    incorrect5.classList.remove('incorrect-shown');
  }
});