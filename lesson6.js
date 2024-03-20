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


const questions = [
  {id: 1, answer: 'she wants him to sing', done: false, textContent: 'Como se dice "Ella quiere que él cante"?', divider: 'remove'},
  {id: 2, answer: 'they need her to leave', done: false, textContent: 'Como se dice "Ellos necesitan que ella se vaya"?'},
  {id: 3, answer: 'i want her to jump', done: false, textContent: 'Como se dice "Quiero que ella salte"?'},
  {id: 4, answer: 'he asked me to help', done: false, textContent: 'Como se dice "Él me pidió que ayudara"?'},
  {id: 5, answer: 'we want them to come', done: false, textContent: 'Como se dice "Queremos que ellos vengan"?'},
  {id: 6, answer: 'they want me to go', done: false, textContent: 'Como se dice "Quieren que yo vaya"?'},
  {id: 7, answer: 'she needs them to talk', done: false, textContent: 'Como se dice "Ella necesita que ellos hablen"?'},
  {id: 8, answer: 'sarah asked us to join', done: false, textContent: 'Como se dice "Sarah nos pidió que nos unamos"?'},
  {id: 9, answer: 'we need them to stop', done: false, textContent: 'Como se dice "Necesitamos que ellos se parar"?'},
  {id: 10, answer: 'you want me to help', done: false, textContent: 'Como se dice "Quieres que te ayude"?'}
]


const createQuiz = (questionsArr, num) => {
  const quizHeader = document.querySelector('.quiz-header');
  const section = document.querySelector(`#section-${num}`);
  const quiz = document.createElement('div');
  quiz.className = 'quiz';


  questionsArr.forEach((question, index) => {
    if (question.type === 'new-word') {
      const newWords = document.createElement('p');
      newWords.className = 'new-words';
      newWords.textContent = question.content;
      section.appendChild(newWords);
      return;
    }

    const divider = document.createElement('div');
    divider.className = 'divider';
      
    const questionText = document.createElement('div');
    questionText.className = 'question';

    const label = document.createElement('label');
    label.setAttribute('for', `quiz-textbar-${question.id}`);
    label.textContent = question.textContent;

    const answerBox = document.createElement('div');
    answerBox.className = 'answer-box';

    const inputBox = document.createElement('div');
    inputBox.className = 'input-box';

    const quizTextBar = document.createElement('input');
    quizTextBar.className = 'quiz-textbar';
    quizTextBar.id = `quiz-textbar-${question.id}`;
    quizTextBar.type = 'text';
    quizTextBar.placeholder = 'Your answer...';
    quizTextBar.autocomplete = 'off';

    const checkBox = document.createElement('div');
    checkBox.className = 'check-box';

    const submitButton = document.createElement('input');
    submitButton.className = 'submit';
    submitButton.id = `submit-${question.id}`;
    submitButton.type = 'submit';
    submitButton.value = 'Check';

    const correct = document.createElement('div');
    correct.className = 'correct';
    correct.id = `correct-${question.id}`;

    const correctIcon = document.createElement('img');
    correctIcon.src = "icons/icons8-correct.svg"
    correctIcon.alt = "correct";

    const incorrect = document.createElement('div');
    incorrect.className = 'incorrect';
    incorrect.id = `incorrect-${question.id}`;

    const tryAgainText = document.createElement('p');
    tryAgainText.textContent = "Try again!";



    const incorrectIcon = document.createElement('img');
    incorrectIcon.src = "icons/icons8-wrong.svg"
    incorrectIcon.alt = "wrong";


    const TryAgainText = document.createElement('div');
    TryAgainText.textContent = "Try again!";

    let inputValue = "";

    section.appendChild(quiz);
    quiz.appendChild(divider)
    quiz.appendChild(questionText);
    questionText.appendChild(label);
    questionText.appendChild(answerBox);
    answerBox.appendChild(inputBox);
    answerBox.appendChild(checkBox);
    inputBox.appendChild(quizTextBar);
    checkBox.appendChild(submitButton);
    checkBox.appendChild(correct);
    checkBox.appendChild(incorrect);
    correct.appendChild(correctIcon);
    incorrect.appendChild(incorrectIcon);
    incorrect.appendChild(tryAgainText);

    if (index === 0 || question.divider === 'remove') {
      quiz.removeChild(divider)
    }


    const checkAnswer = () => {
      let answer = quizTextBar.value.toLowerCase().trim().replace(/[.,]/g, '');
      answer = answer.replace(/\s\s+/g, " ");
      const wordsArr = []
      let word = ""
      for (let i = 0; i < answer.length; i++) {
        if (answer[i] !== " ") {
          word += answer[i];
        } else {
          wordsArr.push(word)
          word = "";
        }
      }

      wordsArr.push(word)
      const corrected = wordsArr.map((word) => {
        if (word === "didn't") {
          word = "did not";
          return word;
        } else if (word === "don't") {
          word = "do not";
          return word;
        } else if (word === "doesn't") {
          word = "does not";
          return word;
        } else if (word === "i'll") {
          word = "i will";
          return word;
        } else if (word === "you'll") {
          word = "you will";
          return word;
        } else if (word === "we'll") {
          word = "we will";
          return word;
        } else if (word === "they'll") {
          word = "they will";
          return word;
        } else if (word === "he'll") {
          word = "he will";
          return word;
        } else if (word === "she'll") {
          word = "she will";
          return word;
        } else if (word === "it'll") {
          word = "it will";
          return word;
        } else if (word === "i'm") {
          word = "i am";
          return word;
        } else if (word === "you're") {
          word = "you are";
          return word;
        } else if (word === "we're") {
          word = "we are";
          return word;
        } else if (word === "they're") {
          word = "they are";
          return word;
        } else if (word === "he's") {
          word = "he is";
          return word;
        } else if (word === "she's") {
          word = "she is";
          return word;
        } else if (word === "isn't") {
          word = "is not";
          return word;
        } else if (word === "aren't") {
          word = "are not";
          return word;
        } else if (word === "wasn't") {
          word = "was not";
          return word;
        } else if (word === "weren't") {
          word = "were not";
          return word;
        } else {
          return word;
        }
      })
      answer = corrected;
      answer = answer.join(' ');
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

    submitButton.addEventListener('click', checkAnswer);
    quizTextBar.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        checkAnswer();
      }
    });

    quizTextBar.addEventListener('input', () => {
      if (quizTextBar.value !== inputValue) {
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
    
    quizTextBar.addEventListener('keydown', handleKeyDown);

  });
}

const fillInQuiz = [
  {id: 11, options: {option1: "How much", option2: "How many"}, answer: "How many", done: false, textContent: "apples do you have?", divider: 'remove'},
  {id: 12, options: {option1: "How much", option2: "How many"}, answer: "How much", done: false, textContent: "water do you need?"},
  {id: 13, options: {option1: "How much", option2: "How many"}, answer: "How many", done: false, textContent: "books did you read last month?"},
  {id: 14, options: {option1: "How much", option2: "How many"}, answer: "How many", done: false, textContent: "pencils are in your pencil case?"},
  {id: 15, options: {option1: "How much", option2: "How many"}, answer: "How much", done: false, textContent: "time do we have?"},
  {id: 16, options: {option1: "How much", option2: "How many"}, answer: "How many", done: false, textContent: "chairs are in the room?"},
  {id: 17, options: {option1: "How much", option2: "How many"}, answer: "How many", done: false, textContent: "people were at the concert?"},
  {id: 18, options: {option1: "How much", option2: "How many"}, answer: "How much", done: false, textContent: "milk did you drink this morning?"},
  {id: 19, options: {option1: "How much", option2: "How many"}, answer: "How much", done: false, textContent: "rice do we need to cook for dinner?"},
  {id: 19, options: {option1: "How much", option2: "How many"}, answer: "How much", done: false, textContent: "sugar do we have?"},
]


const createFillInBlanksQuiz = (questionsArr, num) => {
  const quizHeader = document.querySelector('.quiz-header');
  const section = document.querySelector(`#section-${num}`);
  const quiz = document.createElement('div');
  quiz.className = 'quiz';
  quiz.classList.add('fill-in-quiz');

  questionsArr.forEach((question) => {
    const divider = document.createElement('hr');

    const quizBox = document.createElement('div');
    quizBox.className = "quiz-box";

    const quizContainer = document.createElement('div');
    quizContainer.className = "quiz-container";

    const dropDown = document.createElement('select');
    dropDown.className = "drop-down";
    dropDown.name = "drop-down";
    dropDown.id = `drop-down-${question.id}`;

    const option = document.createElement('option');
    option.value = "";
    option.textContent = "Select an option";

    const option1 = document.createElement('option');
    option1.textContent = question.options.option1;
    option1.value = question.options.option1;
    
    const option2 = document.createElement('option');
    option2.textContent = question.options.option2;
    option2.value = question.options.option2;

    const label = document.createElement('label');
    label.className = "fill-in-blanks-label";
    label.setAttribute("for", `drop-down-${question.id}`);
    label.textContent = question.textContent;


    const checkBox = document.createElement('div');
    checkBox.className = 'check-box';

    const submitButton = document.createElement('input');
    submitButton.className = 'submit-fill-in';
    submitButton.id = `submit-${question.id}`;
    submitButton.type = 'submit';
    submitButton.value = 'Check';

    const correct = document.createElement('div');
    correct.className = 'correct';
    correct.id = `correct-${question.id}`;

    const correctIcon = document.createElement('img');
    correctIcon.src = "icons/icons8-correct.svg"
    correctIcon.alt = "correct";

    const incorrect = document.createElement('div');
    incorrect.className = 'incorrect';
    incorrect.id = `incorrect-${question.id}`;

    const tryAgainText = document.createElement('p');
    tryAgainText.textContent = "Try again!";

    const incorrectIcon = document.createElement('img');
    incorrectIcon.src = "icons/icons8-wrong.svg"
    incorrectIcon.alt = "wrong";

    section.appendChild(quiz);
    quiz.appendChild(divider);
    quiz.appendChild(quizBox);
    quizBox.appendChild(quizContainer);
    quizBox.appendChild(checkBox);
    checkBox.appendChild(submitButton);
    checkBox.appendChild(correct);
    correct.appendChild(correctIcon);
    checkBox.appendChild(incorrect);
    incorrect.appendChild(incorrectIcon);
    incorrect.appendChild(tryAgainText);
    quizContainer.appendChild(dropDown);
    dropDown.appendChild(option);
    dropDown.appendChild(option1);
    dropDown.appendChild(option2);
    quizContainer.appendChild(label);

    if (question.divider === 'remove') {
      quiz.removeChild(divider)
    }

    const checkAnswer = () => {
      let answer = dropDown.value;

      correct.classList.remove('correct-shown');
      incorrect.classList.remove('incorrect-shown');

      if (answer === question.answer) {
        correct.classList.add('correct-shown');
      } else {
        incorrect.classList.add('incorrect-shown');
      }
  
      question.done = true;
    }

    submitButton.addEventListener('click', checkAnswer);

    dropDown.addEventListener('change', () => {
      correct.classList.remove('correct-shown');
      incorrect.classList.remove('incorrect-shown');
    });
  });
}

createQuiz(questions, "two");
createFillInBlanksQuiz(fillInQuiz, "three")