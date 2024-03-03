const submitButton = document.querySelector('.submit-button');
const textBar = document.querySelector('.text-bar');
const popupMessage = document.querySelector('.pop-up-message');
const messageBox = document.querySelector('.message-box');
let storedUserName = localStorage.getItem('userName');

if (storedUserName) {
  submitButton.disabled = true;
  submitButton.classList.add('disabled');
  textBar.value = storedUserName;
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
const quizTextbar1 = document.querySelector('#quiz-textbar');
const checkButton1 = document.querySelector('#submit');
const correct1 = document.querySelector('#correct');
const incorrect1 = document.querySelector('#incorrect');
let inputValue1 = "";


const checkAnswer1 = () => {
  let answer = quizTextbar1.value.toLowerCase();
  correct1.classList.remove('correct-shown');
  incorrect1.classList.remove('incorrect-shown');
  if (answer === 'i will live' || answer === 'i will live.' || answer === "i'll live" || answer === "i'll live") {
    correct1.classList.add('correct-shown');
  } else {
    incorrect1.classList.add('incorrect-shown');
  }

  inputValue1 = answer;
}

checkButton1.addEventListener('click', checkAnswer1);
quizTextbar1.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    checkAnswer1();
  }
});

quizTextbar1.addEventListener('input', () => {
  if (quizTextbar1.value !== inputValue1) {
    correct1.classList.remove('correct-shown');
    incorrect1.classList.remove('incorrect-shown');
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

const questions = [
  { id: 6, answer: 'i work' },
  { id: 7, answer: 'i will not work' },
  { id: 8, answer: 'i open' },
  { id: 9, answer: 'i will open', answer2: "i'll open" },
  { id: 10, answer: 'i opened' },
  { id: 11, answer: 'do you open', answer2: 'do you open?' },
  { id: 12, answer: 'does she open', answer2: 'does she open?' },
  { id: 13, answer: 'did you open', answer2: 'did you open?' },
  { id: 14, answer: 'will you open', answer2: 'will you open?' },
  { id: 15, answer: 'i will not open' },
  { id: 16, answer: "we didn't open", answer2: 'we did not open'},
  { id: 17, answer: 'i close' },
  { id: 18, answer: 'i will close', answer2: "i'll close" },
  { id: 19, answer: 'will you close', answer2: 'will you close?' },
  { id: 20, answer: 'i will not close' },
  { id: 21, answer: 'i closed' },
  { id: 22, answer: "she didn't close", answer2: 'she did not close' },
  { id: 23, answer: 'did you close', answer2: 'did you close?' },
  { id: 24, answer: "i don't close", answer2: 'i do not close' },
  { id: 25, answer: "he doesn't close", answer2: 'he does not close' },
  { id: 26, answer: 'i will know', answer2: "i'll know" },
  { id: 27, answer: 'do you know', answer2: "do you know?" },
  { id: 28, answer: 'does he know', answer2: 'does he know?'},
  { id: 29, answer: 'does she know', answer2: 'does she know?' },
  { id: 30, answer: "i didn't know", answer2: 'i did not know' },
  { id: 31, answer: 'i will not know' },
  { id: 32, answer: 'he knew' },
  { id: 33, answer: 'i see' },
  { id: 34, answer: 'do you see', answer2: 'do you see?' },
  { id: 35, answer: 'will you see', answer2: 'will you see?' },
  { id: 36, answer: 'i saw' },
  { id: 37, answer: "he didn't see", answer2: 'he did not see' },
  { id: 38, answer: "he doesn't see", answer2: 'he does not see' },
  { id: 39, answer: 'he will not see' },
  { id: 40, answer: 'will you go', answer2: 'will you go?' },
  { id: 41, answer: 'i will go', answer2: "i'll go" },
  { id: 42, answer: 'he will not go' },
  { id: 43, answer: 'did you go', answer2: 'did you go?' },
  { id: 44, answer: 'i went' },
  { id: 45, answer: "she didn't go", answer2: 'she did not go' },
  { id: 46, answer: 'does he go', answer2: 'does he go?' },
  { id: 47, answer: "he goes, she doesn't go", answer2: 'he goes, she does not go' },
  { id: 48, answer: "we worked" },
  { id: 49, answer: 'did you work', answer2: "did you work?" },
  { id: 50, answer: "we didn't work", answer2: 'we did not work' },
  { id: 51, answer: 'we will work', answer2: "we'll work" },
  { id: 52, answer: 'will he work', answer2: 'will he work?' },
  { id: 53, answer: 'did you see', answer2: 'did you see?' },
  { id: 54, answer: "he will not work" },
  { id: 55, answer: 'he will think', answer2: "he'll think" },
  { id: 56, answer: "i will live", answer2: "i'll live" },
  { id: 57, answer: "they will not live" },
  { id: 58, answer: 'did you live', answer2: "did you live?" },
  { id: 59, answer: "i lived" },
  { id: 60, answer: 'does she live', answer2: "does she live?" },
  { id: 61, answer: 'she lives' },
  { id: 62, answer: 'will you live', answer2: 'will you live?' },
  { id: 63, answer: "i finish" },
  { id: 64, answer: "they don't finish", answer2: 'they do not finish' },
  { id: 65, answer: 'did you finish', answer2: "did you finish?" },
  { id: 66, answer: "we finished" },
  { id: 67, answer: "they didn't finish", answer2: 'they did not finish' },
  { id: 68, answer: 'does she finish', answer2: 'does she finish?' },
  { id: 69, answer: "she doesn't finish", answer2: 'she does not finish' }
]

questions.forEach(question => {
  const quizTextbar = document.querySelector(`#quiz-textbar-${question.id}`);
  const checkButton = document.querySelector(`#submit-${question.id}`);
  const correct = document.querySelector(`#correct-${question.id}`);
  const incorrect = document.querySelector(`#incorrect-${question.id}`);
  let inputValue = "";

  const checkAnswer = () => {
    let answer = quizTextbar.value.toLowerCase();
    correct.classList.remove('correct-shown');
    incorrect.classList.remove('incorrect-shown');
    if (answer === question.answer) {
      correct.classList.add('correct-shown');
    } else if (answer === question.answer2) {
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
  })
  quizTextbar.addEventListener('input', () => {
    if (quizTextbar.value !== inputValue) {
      correct.classList.remove('correct-shown');
      incorrect.classList.remove('incorrect-shown');
    }
  })
})

const finishButton = document.querySelector('.finish-lesson-button');
const congratsPopup = document.querySelector('.popup-congrats');
const congratsBox = document.querySelector('.popup-box');
const congratsText = document.querySelector('.congrats-text')

const congratulate = () => {
  congratsPopup.classList.add('popup-congrats-isclicked');
  congratsText.textContent = `Congratualtions, ${storedUserName}!`
}

finishButton.addEventListener('click', congratulate);
