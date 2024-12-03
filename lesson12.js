let lessonIsDone = localStorage.getItem('lesson12Status');
let userName = localStorage.getItem('username');
/*
const recordAnswer = (id) => {
  const startButton = document.querySelector(`#start-recording-${id}`);
  const deleteButton = document.querySelector(`#delete-recording-${id}`);
  const audioBar = document.querySelector(`#self-recording-${id}`);
  
  let mediaRecorder;
  let chunks = [];
  let audioURL;
  let timeInterval;
  let timerIsSet = false;
  const timerBox = document.querySelector(`#timer-${id}`);
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
          console.log(audioBar)
            chunks.push(event.data);
        };
        mediaRecorder.onstop = () => {
            const blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });
            const audioURL = URL.createObjectURL(blob);
            audioBar.src = audioURL;
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
      secondsOne = 0;
      secondsTwo = 0;
      minutesOne = 0;
      minutesTwo = 0;
      timerBox.textContent = `${minutesTwo}${minutesOne} : ${secondsTwo}${secondsOne}`;
      startButton.textContent = "Start Recording";
      deleteRecording();
      timerIsSet = false;
      return;
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
    audioBar.src = '';
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
}

recordAnswer(1);*/

const questions = [
  {type: "header", headerText: "Reescribe los siguientes números usando letras:"},
  {id: 1, answer: 'twenty eight', done: false, textContent: '28', divider: 'remove'},
  {id: 2, answer: 'sixty four', done: false, textContent: '64'},
  {id: 3, answer: 'thirty seven', done: false, textContent: '37'},
  {id: 4, answer: 'fifty two', done: false, textContent: '52'},
  {id: 5, answer: 'eighty nine', done: false, textContent: '89'},
  {id: 6, answer: 'one hundred and forty five', answer2: 'a hundred and forty five', answer3: "one forty five", answer4: 'a hundred forty five', answer5: "one hundred forty five", done: false, textContent: '145'},
  {id: 7, answer: 'six hundred and seventy three', answer2: "six seventy three", answer3: "six hundred seventy three", done: false, textContent: '673'},
  {id: 8, answer: 'three hundred and ninety two', answer2: "three ninety two", answer3: "three hundred ninety two", done: false, textContent: '392'},
  {id: 9, answer: 'eighteen forty three', done: false, textContent: '1843'},
  {id: 10, answer: 'seventy five sixty two', done: false, textContent: '7562'}
]

const questions2 = [
  {type: "header", headerText: "Escribe las siguientes fechas usando solo letras:"},
  {id: 11, answer: 'january the first', answer2: "january first", answer3: 'first of january', answer4: "the first of january", done: false, textContent: '1 de enero', divider: 'remove'},
  {id: 12, answer: 'february the fifteenth', answer2: "february fifteenth", answer3: 'fifteenth of february', answer4: "the fifteenth of february", done: false, textContent: '15 de febrero'},
  {id: 13, answer: 'march the twenty second', answer2: "march twenty second", answer3: 'twenty second of march', answer4: "the twenty second of march", done: false, textContent: '22 de marzo'},
  {id: 14, answer: 'april the sixteenth', answer2: "april sixteenth", answer3: 'sixteenth of april', answer4: "the sixteenth of april", done: false, textContent: '16 de abril'},
  {id: 15, answer: 'may the eighth', answer2: "may eighth", answer3: 'eighth of may', answer4: "the eighth of may", done: false, textContent: '8 de mayo'},
  {id: 16, answer: 'june the ninth', answer2: "june ninth", answer3: 'ninth of june', answer4: "the ninth of june", done: false, textContent: '9 de junio'},
  {id: 17, answer: 'july the twentieth', answer2: "july twentieth", answer3: 'twentieth of july', answer4: "the twentieth of july", done: false, textContent: '20 de julio'},
  {id: 18, answer: 'august the third', answer2: "august third", answer3: 'third of august', answer4: "the third of august", done: false, textContent: '3 de agosto'},
  {id: 19, answer: 'september the seventeenth', answer2: "september seventeenth", answer3: 'seventeenth of september', answer4: "the seventeenth of september", done: false, textContent: '17 de septiembre'},
  {id: 20, answer: 'october the tenth', answer2: "october tenth", answer3: 'tenth of october', answer4: "the tenth of october", done: false, textContent: '10 de octubre'}
]

const questions3 = [
  {type: "header", headerText: "Escribe las siguientes fechas usando solo letras:"},
  {id: 21, answer: 'february the twelfth fourteen sixty one', answer2: "february twelfth fourteen sixty one", answer3: 'twelfth of february fourteen sixty one', answer4: "the twelfth of february fourteen sixty one", done: false, textContent: '12 de febrero de 1461', divider: 'remove'},

  {id: 22, answer: 'september the thirtieth nineteen ninety eight', answer2: "september thirtieth nineteen ninety eight", answer3: 'thirtieth of september nineteen ninety eight', answer4: "the thirtieth of september nineteen ninety eight", done: false, textContent: '30 de septiembre de 1998'},

  {id: 23, answer: 'july the eighth thirteen forty five', answer2: "july eighth thirteen forty five", answer3: 'eighth of july thirteen forty five', answer4: "the eighth of july thirteen forty five", done: false, textContent: '8 de julio de 1345'},

  {id: 24, answer: 'may the twenty first nineteen eighty three', answer2: "may twenty first nineteen eighty three", answer3: 'twenty first of may nineteen eighty three', answer4: "the twenty first of may nineteen eighty three", done: false, textContent: '21 de mayo de 1983'},

  {id: 25, answer: 'november the fifth nineteen ninety two', answer2: "november fifth nineteen ninety two", answer3: 'fifth of november nineteen ninety two', answer4: "the fifth of november nineteen ninety two", done: false, textContent: '5 de noviembre de 1992'},

  {id: 26, answer: 'march the seventeenth eighteen ninety', answer2: "march seventeenth eighteen ninety", answer3: 'seventeenth of march eighteen ninety', answer4: "the seventeenth of march eighteen ninety", done: false, textContent: '17 de marzo de 1890'},

  {id: 27, answer: 'october the third twenty fifteen', answer2: "october third twenty fifteen", answer3: 'third of october twenty fifteen', answer4: "the third of october twenty fifteen", done: false, textContent: '3 de octubre de 2015'},

  {id: 28, answer: 'june the twenty ninth nineteen ninety', answer2: "june twenty ninth nineteen ninety", answer3: 'twenty ninth of june nineteen ninety', answer4: "the twenty ninth of june nineteen ninety", done: false, textContent: '29 de junio de 1990'},

  {id: 29, answer: 'december the fourteenth nineteen thirty four', answer2: "december fourteenth nineteen thirty four", answer3: 'fourteenth of december nineteen thirty four', answer4: "the fourteenth of december nineteen thirty four", done: false, textContent: '14 de diciembre de 1934'},

  {id: 30, answer: 'august the twentieth nineteen eighty seven', answer2: "august twentieth nineteen eighty seven", answer3: 'twentieth of august nineteen eighty seven', answer4: "the twentieth of august nineteen eighty seven", done: false, textContent: '20 de agosto de 1987'},
  {type: "explanation", text: "¡Felicidades por tu progreso hasta ahora! Has hecho un trabajo increíble y estás casi al final de este curso. Solo nos quedan un puñado de cosas por aprender que cubriremos en las próximas cuatro clases. Un recordatorio amistoso: no olvides dedicar tiempo a repasar las estructuras básicas del verbo, la tabla de las primeras lecciones. Si no lo has estado haciendo, deberías hacerlo. Esto facilitará hablar y entender el inglés."}
]



const createQuiz = (questionsArr, num) => {
  const quizHeader = document.querySelector('.quiz-header');
  const section = document.querySelector(`#section-${num}`);
  const quiz = document.createElement('div');
  quiz.className = 'quiz';

  if (questionsArr[0].type === "header") {
    const header = document.createElement('h2')
    header.className = "quiz-header intro-header"
    header.textContent = questionsArr[0].headerText,
    header.id = "quiz-header-intro-header"
    quiz.appendChild(header);
  }


  questionsArr.forEach((question, index) => {
    if (question.type === 'new-word') {
      const newWords = document.createElement('p');
      newWords.className = 'new-words';
      newWords.textContent = question.content;
      section.appendChild(newWords);
      return;
    }

    if (question.type === 'explanation') {
      const explanation = document.createElement('p');
      explanation.className = "margined-down"
      explanation.textContent = question.text;
      section.appendChild(explanation);
      return;
    }

    if (question.type === 'subheader') {
      const subheader = document.createElement('p');
      subheader.className = "p-sub-header";
      subheader.textContent = question.title;
      section.appendChild(subheader);
      return;
    }

    if (question.type === 'header') {
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
    quizTextBar.placeholder = 'Tu respuesta...';
    quizTextBar.autocomplete = 'off';

    const checkBox = document.createElement('div');
    checkBox.className = 'check-box';

    const submitButton = document.createElement('input');
    submitButton.className = 'submit';
    submitButton.id = `submit-${question.id}`;
    submitButton.type = 'submit';
    submitButton.value = 'Checar';

    const correct = document.createElement('div');
    correct.className = 'correct';
    correct.id = `correct-${question.id}`;

    const correctIcon = document.createElement('img');
    correctIcon.src = "icons/icons8-correct.svg"
    correctIcon.alt = "Correcto";

    const incorrect = document.createElement('div');
    incorrect.className = 'incorrect';
    incorrect.id = `incorrect-${question.id}`;

    const tryAgainText = document.createElement('p');
    tryAgainText.textContent = "Inténtalo de nuevo";

    const incorrectIcon = document.createElement('img');
    incorrectIcon.src = "icons/icons8-wrong.svg"
    incorrectIcon.alt = "Incorrecto";

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
        } else if (word === "let's") {
          word = "let us";
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
      } else if (answer === question.answer3) {
        correct.classList.add('correct-shown');
      } else if (answer === question.answer4) {
        correct.classList.add('correct-shown');
      } else if (answer === question.answer5) {
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

createQuiz(questions, "three")
createQuiz(questions2, "four")
createQuiz(questions3, "five")


const finishButton = document.querySelector('.finish-lesson-button-2');
const congratsPopup = document.querySelector('.popup-congrats');
const congratsBox = document.querySelector('.popup-box');
const congratsText = document.querySelector('.congrats-text')
const congratulate = () => {
  for (let i = 1; i < questions.length; i++) {
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

  congratsPopup.classList.add('popup-congrats-isclicked');
  congratsText.textContent = `¡Felicidades, ${userName}!`;
  const nextLessonButton = document.querySelector('.next-lesson-button');
  nextLessonButton.addEventListener('click', () => {
    if (lessonIsDone) {
      return;
    } else {
      lessonIsDone = true;
      localStorage.setItem('lessons', JSON.stringify({1: 'complete', 2: 'complete', 3: 'complete', 4: 'complete', 5: "complete", 6: "complete", 7: "complete", 8: "complete", 9: "complete", 10: "complete", 11: "complete", 12: "complete", 13: "unlocked"}));
      localStorage.setItem('lesson12Status', lessonIsDone);
    }
  })
}