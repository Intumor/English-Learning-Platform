window.addEventListener('beforeunload', (event) => {
  event.preventDefault();
  event.returnValue = '';

  return "";
})

let lessonIsDone = localStorage.getItem('lesson4Status');
let userName = localStorage.getItem('username');

const startButton = document.querySelector('.start-recording');
const deleteButton = document.querySelector('.delete-recording');
const audioBar = document.querySelector('.self-recording');

let mediaRecorder;
let chunks = [];
let audioURL;
let timeInterval;
let timerIsSet = false;
const timerBox = document.querySelector('.timer');
let secondsOne = 0;
let secondsTwo = 0;
let minutesOne = 0;
let minutesTwo = 0;
timerBox.textContent = `${minutesTwo}${minutesOne} : ${secondsTwo}${secondsOne}`;

const startRecording = () => {
  navigator.mediaDevices.getUserMedia({ audio: true })
  .then(stream => {
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = event => {
          chunks.push(event.data);
      };
      mediaRecorder.onstop = () => {
          const blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });
          const audioURL = URL.createObjectURL(blob);
          const audio = document.querySelector('audio');
          audio.src = audioURL;
      };
      mediaRecorder.start();
  })
  .catch(error => {
      console.error('Error accessing microphone:', error);
  });

  if (startButton.textContent === "Start Recording") {
    startButton.textContent = "Stop Recording";
    startButton.classList.add("stopped")
  } else if (startButton.textContent === "Stop Recording") {
    stopRecording();
    startButton.classList.remove("stopped");
    audioBar.classList.add('displayed');
    startButton.textContent = "New Recording";
    startButton.classList.remove("stopped");
  } else if (startButton.textContent === "New Recording") {
    audioBar.classList.remove('displayed');
    let secondsOne = 0;
    let secondsTwo = 0;
    let minutesOne = 0;
    let minutesTwo = 0;
    timerBox.textContent = `${minutesTwo}${minutesOne} : ${secondsTwo}${secondsOne}`;
    startButton.textContent = "Start Recording";
  }

  if (!timerIsSet) {
    startTimer();
    timerIsSet = true;
  } else {
    clearInterval(timeInterval);
  }

};

const stopRecording = () => {
    mediaRecorder.stop();
};

const deleteRecording = () => {
  chunks = [];
  const audio = document.querySelector('audio');
  audio.src = '';
  URL.revokeObjectURL(audioURL);
};


const startTimer = () => {
  timeInterval = setInterval(() => {
    secondsOne++;
    if (secondsOne === 10) {
      secondsOne = 0;
      secondsTwo++;
    }

    if (secondsTwo === 6) {
      secondsTwo = 0;
      minutesOne++;
    }

    if (minutesOne === 10) {
      minutesOne = 0;
      minutesTwo++;
    }

    timerBox.textContent = `${minutesTwo}${minutesOne} : ${secondsTwo}${secondsOne}`;
  }, 1000)
}

startButton.addEventListener('click', startRecording);
/*deleteButton.addEventListener('click', deleteRecording);*/

const flashQuiz = [
  {index: 0, imgUrl: "./images/hello.jpg", option1: "Hello", option2: "Excuse me", option3: "Goodbye", option4: "Good night", answer: "Hello"},
  {index: 1, imgUrl: "./images/please.jpg", option1: "Nice to meet you", option2: "Hello", option3: "Please", option4: "Good night", answer: "Please"},
  {index: 2, imgUrl: "./images/good-night.png", option1: "Good night", option2: "I'm sorry", option3: "i regret", option4: "Goodbye", answer: "Good night"},
  {index: 3, imgUrl: "./images/sorry.jpg", option1: "So long", option2: "Sorry?", option3: "Goodbye", option4: "Nice to meet you", answer: "Sorry?"},
  {index: 4, imgUrl: "./images/thank-you.jpg", option1: "Goodbye", option2: "Sorry?", option3: "Good night", option4: "Thank you", answer: "Thank you"},
  {index: 5, imgUrl: "./images/goodbye.jpg", option1: "Goodbye", option2: "I'm sorry", option3: "Thank you", option4: "i apologize", answer: "Goodbye"},
  {index: 6, imgUrl: "./images/meeting.jpg", option1: "Excuse me", option2: "You're welcome", option3: "Nice to meet you", option4: "Sorry?", answer: "Nice to meet you"},
  {index: 7, imgUrl: "./images/apology.jpeg", option1: "Good night", option2: "Good afternoon", option3: "Good morning", option4: "I apologize", answer: "I apologize"},
  {index: 8, imgUrl: "./images/so-long.jpg", option1: "I'm sorry", option2: "So long", option3: "Please", option4: "I regret", answer: "So long"},
  {index: 9, imgUrl: "./images/i-am-sorry.jpg", option1: "Goodbye", option2: "Hello", option3: "I'm sorry", option4: "Take care", answer: "I'm sorry"},
  {index: 10, imgUrl: "./images/good-morning.jpg", option1: "Good morning", option2: "Nice to meet you", option3: "Good night", option4: "Beg your pardon?", answer: "Good morning"},
  {index: 11, imgUrl: "./images/excuse-me.jpg", option1: "Goodbye", option2: "You're welcome", option3: "Excuse me", option4: "Good morning", answer: "Excuse me"},
  {index: 12, imgUrl: "./images/welcome.jpg", option1: "So long", option2: "Good afternoon", option3: "You're welcome", option4: "See you", answer: "You're welcome"},
  {index: 13, imgUrl: "./images/see-ya.jpg", option1: "See you", option2: "Please", option3: "I apologize", option4: "Beg your pardon?", answer: "See you"},
  {index: 14, imgUrl: "./images/regret.jpg", option1: "Hello", option2: "Regret", option3: "Take care", option4: "Good afternoon", answer: "Regret"},
  {index: 15, imgUrl: "./images/afternoon.jpg", option1: "Sorry?", option2: "Forgive me", option3: "Good afternoon", option4: "Good night", answer: "Good afternoon"},
  {index: 16, imgUrl: "./images/beg-your-pardon.jpg", option1: "So long", option2: "See you", option3: "Please", option4: "Beg your pardon?", answer: "Beg your pardon?"},
  {index: 17, imgUrl: "./images/take-care.jpg", option1: "Thank you", option2: "You're welcome", option3: "Take care", option4: "I apologize", answer: "Take care"},
  {index: 18, imgUrl: "./images/forgive-me.jpg", option1: "Forgive me", option2: "Goodbye", option3: "So long", option4: "Hello", answer: "Forgive me"},
]

const FlashCardQuizBox = document.querySelector('.flashcard-quiz');
let index = 0;

const createFlashQuiz = (flashQuestions) => {
  const quizHeader = document.createElement('h2');
  quizHeader.className = 'quiz-header';
  quizHeader.textContent = 'Choose the correct option';
  const FlashCard = document.createElement('img');
  FlashCard.setAttribute('src', `${flashQuestions[index].imgUrl}`);
  FlashCard.className = "flashcard";
  const buttonsBox = document.createElement('div');
  buttonsBox.className = "buttons-container"

  const option1 = document.createElement('div');
  option1.textContent = `${flashQuestions[index].option1}`;
  option1.className = "option";

  const option2 = document.createElement('div');
  option2.textContent = `${flashQuestions[index].option2}`;
  option2.className = "option";

  const option3 = document.createElement('div');
  option3.textContent = `${flashQuestions[index].option3}`;
  option3.className = "option";

  const option4 = document.createElement('div');
  option4.textContent = `${flashQuestions[index].option4}`;
  option4.className = "option";

  FlashCardQuizBox.appendChild(quizHeader)
  FlashCardQuizBox.appendChild(FlashCard);
  FlashCardQuizBox.appendChild(buttonsBox);
  buttonsBox.appendChild(option1);
  buttonsBox.appendChild(option2);
  buttonsBox.appendChild(option3);
  buttonsBox.appendChild(option4);

  const checkFlashAnswer = (answer, userAnswer, option) => {
    if (answer === userAnswer) {
      option.classList.add('turn-green');
      setTimeout(() => {
        FlashCardQuizBox.innerHTML = "";
        index++;
        createFlashQuiz(flashQuestions);
      }, 500)
    } else {
      option.classList.add('turn-red');
    }
  }

  /*checkFlashAnswer(flashQuestions[index].answer, option2.textContent, option2)*/

  option1.addEventListener('click', () => {
    checkFlashAnswer(flashQuestions[index].answer, option1.textContent, option1)
  });

  option2.addEventListener('click', () => {
    checkFlashAnswer(flashQuestions[index].answer, option2.textContent, option2)
  });

  option3.addEventListener('click', () => {
    checkFlashAnswer(flashQuestions[index].answer, option3.textContent, option3)
  });

  option4.addEventListener('click', () => {
    checkFlashAnswer(flashQuestions[index].answer, option4.textContent, option4)
  });
}

createFlashQuiz(flashQuiz);

const finishButton = document.querySelector('.finish-lesson-button-2');
const congratsPopup = document.querySelector('.popup-congrats');
const congratsBox = document.querySelector('.popup-box');
const congratsText = document.querySelector('.congrats-text')
const congratulate = () => {
  congratsPopup.classList.add('popup-congrats-isclicked');
  congratsText.textContent = `Congratualtions, ${userName}!`;
  const nextLessonButton = document.querySelector('.next-lesson-button');
  nextLessonButton.addEventListener('click', () => {
    if (lessonIsDone) {
      return;
    } else {
      lessonIsDone = true;
      localStorage.setItem('lessons', JSON.stringify({1: 'complete', 2: 'complete', 3: 'complete', 4: 'complete', 5: 'unlocked' }));
      localStorage.setItem('lesson4Status', lessonIsDone);
    }
  })
}

finishButton.addEventListener('click', congratulate);
