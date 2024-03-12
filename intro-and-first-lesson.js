const submitButton = document.querySelector('.submit-button');
const textBar = document.querySelector('.text-bar');
const popupMessage = document.querySelector('.pop-up-message');
const messageBox = document.querySelector('.message-box');
let userName = localStorage.getItem('username');
let lessonIsDone = localStorage.getItem('lessonStatus');
console.log(lessonIsDone);

if (userName) {
  submitButton.disabled = true;
  submitButton.classList.add('disabled');
  textBar.value = userName;
  console.log(userName)
}

window.addEventListener('beforeunload', (event) => {
  event.preventDefault();
  event.returnValue = '';

  return "";
})

const hideMessage = () => {
  popupMessage.classList.remove('popup-clicked');
  messageBox.innerHTML = "";
  textBar.value = "";
  location.reload();
}

const showMessage = () => {
  popupMessage.classList.add('popup-clicked');
  let userName = textBar.value;

  const messageHeader = document.createElement('h2');
  messageHeader.classList.add('popup-header');
  if (textBar.value === "") {
    userName = "Anonymous";
    localStorage.setItem('username', userName);
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

submitButton.addEventListener('click', () => {
  showMessage();
  localStorage.setItem('username', textBar.value);
});


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
  let answer = quizTextbar1.value.toLowerCase().trim();
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
  let answer = quizTextbar2.value.toLowerCase().trim();
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
  let answer = quizTextbar3.value.toLowerCase().trim();
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
  let answer = quizTextbar4.value.toLowerCase().trim();
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
  let answer = quizTextbar5.value.toLowerCase().trim();
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
  { id: 6, answer: 'i work', done: false },
  { id: 7, answer: 'i will not work', done: false },
  { id: 8, answer: 'i open', done: false },
  { id: 9, answer: 'i will open', answer2: "i'll open", done: false },
  { id: 10, answer: 'i opened', done: false },
  { id: 11, answer: 'do you open', answer2: 'do you open?', done: false },
  { id: 12, answer: 'does she open', answer2: 'does she open?', done: false },
  { id: 13, answer: 'did you open', answer2: 'did you open?', done: false },
  { id: 14, answer: 'will you open', answer2: 'will you open?', done: false },
  { id: 15, answer: 'i will not open', done: false },
  { id: 16, answer: "we didn't open", answer2: 'we did not open', done: false },
  { id: 17, answer: 'i close', done: false },
  { id: 18, answer: 'i will close', answer2: "i'll close", done: false },
  { id: 19, answer: 'will you close', answer2: 'will you close?', done: false },
  { id: 20, answer: 'i will not close', done: false },
  { id: 21, answer: 'i closed', done: false },
  { id: 22, answer: "she didn't close", answer2: 'she did not close', done: false },
  { id: 23, answer: 'did you close', answer2: 'did you close?', done: false },
  { id: 24, answer: "i don't close", answer2: 'i do not close', done: false },
  { id: 25, answer: "he doesn't close", answer2: 'he does not close', done: false },
  { id: 26, answer: 'i will know', answer2: "i'll know", done: false },
  { id: 27, answer: 'do you know', answer2: "do you know?", done: false },
  { id: 28, answer: 'does he know', answer2: 'does he know?', done: false},
  { id: 29, answer: 'does she know', answer2: 'does she know?', done: false },
  { id: 30, answer: "i didn't know", answer2: 'i did not know', done: false },
  { id: 31, answer: 'i will not know', done: false },
  { id: 32, answer: 'he knew', done: false },
  { id: 33, answer: 'i see', done: false },
  { id: 34, answer: 'do you see', answer2: 'do you see?', done: false },
  { id: 35, answer: 'will you see', answer2: 'will you see?', done: false },
  { id: 36, answer: 'i saw', done: false },
  { id: 37, answer: "he didn't see", answer2: 'he did not see', done: false },
  { id: 38, answer: "he doesn't see", answer2: 'he does not see', done: false },
  { id: 39, answer: 'he will not see', done: false },
  { id: 40, answer: 'will you go', answer2: 'will you go?', done: false },
  { id: 41, answer: 'i will go', answer2: "i'll go", done: false },
  { id: 42, answer: 'he will not go', done: false },
  { id: 43, answer: 'did you go', answer2: 'did you go?', done: false },
  { id: 44, answer: 'i went', done: false },
  { id: 45, answer: "she didn't go", answer2: 'she did not go', done: false },
  { id: 46, answer: 'does he go', answer2: 'does he go?', done: false },
  { id: 47, answer: "he goes, she doesn't go", answer2: 'he goes, she does not go', done: false },
  { id: 48, answer: "we worked", done: false },
  { id: 49, answer: 'did you work', answer2: "did you work?", done: false },
  { id: 50, answer: "we didn't work", answer2: 'we did not work', done: false },
  { id: 51, answer: 'we will work', answer2: "we'll work", done: false },
  { id: 52, answer: 'will he work', answer2: 'will he work?', done: false },
  { id: 53, answer: 'did you see', answer2: 'did you see?', done: false },
  { id: 54, answer: "he will not work", done: false },
  { id: 55, answer: 'he will think', answer2: "he'll think", done: false },
  { id: 56, answer: "i will live", answer2: "i'll live", done: false },
  { id: 57, answer: "they will not live", done: false },
  { id: 58, answer: 'did you live', answer2: "did you live?", done: false },
  { id: 59, answer: "i lived", done: false },
  { id: 60, answer: 'does she live', answer2: "does she live?", done: false },
  { id: 61, answer: 'she lives', done: false },
  { id: 62, answer: 'will you live', answer2: 'will you live?', done: false },
  { id: 63, answer: "i finish", done: false },
  { id: 64, answer: "they don't finish", answer2: 'they do not finish', done: false },
  { id: 65, answer: 'did you finish', answer2: "did you finish?", done: false },
  { id: 66, answer: "we finished", done: false },
  { id: 67, answer: "they didn't finish", answer2: 'they did not finish', done: false },
  { id: 68, answer: 'does she finish', answer2: 'does she finish?', done: false },
  { id: 69, answer: "she doesn't finish", answer2: 'she does not finish', done: false }
]

questions.forEach(question => {
  const quizTextbar = document.querySelector(`#quiz-textbar-${question.id}`);
  const checkButton = document.querySelector(`#submit-${question.id}`);
  const correct = document.querySelector(`#correct-${question.id}`);
  const incorrect = document.querySelector(`#incorrect-${question.id}`);
  let inputValue = "";

  const checkAnswer = () => {
    let answer = quizTextbar.value.toLowerCase().trim();
    correct.classList.remove('correct-shown');
    incorrect.classList.remove('incorrect-shown');
    if (answer === question.answer) {
      correct.classList.add('correct-shown');
    } else if (answer === question.answer2) {
      correct.classList.add('correct-shown');
    } else {
      incorrect.classList.add('incorrect-shown');
    }

    question.done = true;
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

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      const currentIndex = question.id;
      const nextIndex = currentIndex + 1;
      const nextTextBar = document.querySelector(`#quiz-textbar-${nextIndex}`);
      if (nextTextBar === null) {
        return;
      }
      nextTextBar.focus();
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      const currentIndex = question.id;
      const previousIndex = currentIndex - 1;
      const previousTextBar = document.querySelector(`#quiz-textbar-${previousIndex}`);
      if (previousTextBar === null) {
        return;
      }
      previousTextBar.focus()
    }
  }
  
  quizTextbar.addEventListener('keydown', handleKeyDown);
  
})

const finishButton = document.querySelector('.finish-lesson-button');
const congratsPopup = document.querySelector('.popup-congrats');
const congratsBox = document.querySelector('.popup-box');
const congratsText = document.querySelector('.congrats-text')
const congratulate = () => {
  for (let i = 6; i < questions.length; i++) {
    if (questions[i].done === false) {
      const errorMessage = document.querySelector('.error-message');
      errorMessage.classList.add('error-shown');
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
      return;
    }
  }

  if (!userName) {
    userName = 'Anonymous';
    localStorage.setItem('username', userName);
  }

  congratsPopup.classList.add('popup-congrats-isclicked');
  congratsText.textContent = `Congratualtions, ${userName}!`;
  const nextLessonButton = document.querySelector('.next-lesson-button');
  nextLessonButton.addEventListener('click', () => {
    if (lessonIsDone) {
      return;
    } else {
      lessonIsDone = true;
      localStorage.setItem('lessons', JSON.stringify({1: 'complete', 2: 'unlocked' }));
      localStorage.setItem('lessonStatus', lessonIsDone);
    }
  });
}

finishButton.addEventListener('click', congratulate);