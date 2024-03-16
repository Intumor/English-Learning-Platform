
window.addEventListener('beforeunload', (event) => {
  event.preventDefault();
  event.returnValue = '';

  return "";
})

let lessonIsDone = localStorage.getItem('lesson2Status');
let userName = localStorage.getItem('username');

const questions = [
  {id: 1, answer: 'revolution', done: false, textContent: 'Como se dice "revolution"?'},
  {id: 2, answer: 'information', done: false, textContent: 'Como se dice "information"?'},
  {id: 3, answer: 'nation', done: false, textContent: 'Como se dice "nation"?'},
  {id: 4, answer: 'innovation', done: false, textContent: 'Como se dice "innovation"?'},
  {id: 5, answer: 'modernization', done: false, textContent: 'Como se dice "modernization"?'},
  {id: 6, answer: 'stragnation', done: false, textContent: 'Como se dice "stragnation"?'},
  {id: 7, answer: 'provocation', done: false, textContent: 'Como se dice "provocation"?'},
  {id: 8, answer: 'meditation', done: false, textContent: 'Como se dice "meditation"?'},
  {id: 9, answer: 'computerization', done: false, textContent: 'Como se dice "computerization"?'},
  {id: 10, answer: 'profession', done: false, textContent: 'Como se dice "profession"?'},
  {id: 11, answer: 'demonstration', done: false, textContent: 'Como se dice "demonstration"?'},
]

const wordsAndQuestions = [
  {type: 'new-word', content: 'ask - preguntar'},
  {id: 12, answer: 'i will ask', answer2: "i'll ask", done: false, textContent: 'Como se dice "Yo preguntaré"?', divider: 'remove'},
  {id: 13, answer: 'did you ask', answer2: "did you ask?", done: false, textContent: 'Como se dice "¿Preguntaste?"?'}
]

const wordsAndQuestions2 = [
  {type: 'new-word', content: 'answer - responder'},
  {id: 14, answer: 'i will not answer', done: false, textContent: 'Como se dice "No responderé"?', divider: 'remove'},
  {id: 15, answer: 'i answered', done: false, textContent: 'Como se dice "Respondí"?'},
  {id: 16, answer: "he doesn't answer", answer2: 'he does not answer', done: false, textContent: "Como se dice 'Él no responde'?"}
]

const wordsAndQuestions3 = [
  {type: 'new-word', content: 'give (gave) - dar'},
  {id: 17, answer: 'we gave', done: false, textContent: 'Como se dice "Nosotros dimos"?', divider: 'remove'},
  {id: 18, answer: 'will you give', answer2: 'will you give?', done: false, textContent: 'Como se dice "¿Darás?"?'},
  {id: 19, answer: "they will not give", done: false, textContent: "Como se dice 'Ellos no darán'?"}
]

const wordsAndQuestions4 = [
  {type: 'new-word', content: 'take (took) - tomar'},
  {id: 20, answer: 'i will take', answer2: "i'll take", done: false, textContent: 'Como se dice "Tomaré"?', divider: 'remove'},
  {id: 21, answer: 'i took', done: false, textContent: 'Como se dice "Tomé"?'},
  {id: 22, answer: "will you take", answer2: "will you take?", done: false, textContent: "Como se dice '¿Tomarás?'?"},
  {id: 23, answer: "i will not take", done: false, textContent: "Como se dice 'No tomaré'?"}
]

const wordsAndQuestions5 = [
  {type: 'new-word', content: 'help - ayudar'},
  {id: 24, answer: 'i will help', answer2: "i'll help", done: false, textContent: 'Como se dice "Ayudaré"?', divider: 'remove'},
  {id: 25, answer: "he didn't help", answer2: "he did not help", done: false, textContent: 'Como se dice "Él no ayudó"?'},
  {id: 26, answer: "he will help", answer2: "he'll help", done: false, textContent: "Como se dice 'Él ayudará'?"},
  {id: 27, answer: "will you help", answer2: "will you help?", done: false, textContent: "Como se dice '¿Ayudarás?'?"}
]

const wordsAndQuestions6 = [
  {type: 'new-word', content: 'hope - esperar'},
  {id: 28, answer: 'i hope', done: false, textContent: 'Como se dice "Espero"?', divider: 'remove'},
  {id: 29, answer: "he hopes", done: false, textContent: 'Como se dice "Él espera"?'},
  {id: 30, answer: "do you hope", answer2: "do you hope?", done: false, textContent: "Como se dice '¿Tú esperas?'?"},
  {id: 31, answer: "i did not hope but i will hope", answer3: "i didn't hope but i'll hope", answer4: "i did not hope but i'll hope", done: false, textContent: "Como se dice 'No esperaba, pero esperaré'?"}
]

const wordsAndQuestions7 = [
  {type: 'new-word', content: 'speak (spoke) - hablar'},
  {id: 32, answer: 'we will speak', asnwer2: "we'll speak", done: false, textContent: 'Como se dice "hablaremos"?', divider: 'remove'},
  {id: 33, answer: "will you speak", asnwer2: "will you speak?", done: false, textContent: 'Como se dice "¿Hablarás?"?'},
  {id: 34, answer: "we spoke", done: false, textContent: "Como se dice 'hablamos'?"},
  {id: 35, answer: "They didn't speak", answer2: "They did not speak", done: false, textContent: "Como se dice 'No esperaba, pero esperaré'?"}
]

const wordsAndQuestions8 = [
  {type: 'new-word', content: 'travel - viajar'},
  {id: 36, answer: 'did you travel', asnwer2: "did you travel?", done: false, textContent: 'Como se dice "¿Viajaste?"?', divider: 'remove'},
  {id: 37, answer: "will you travel", asnwer2: "will you travel?", done: false, textContent: 'Como se dice "¿Viajarás?"?'},
  {id: 38, answer: "i did not travel but i will travel", done: false, textContent: "Como se dice 'No viajé, pero viajaré'?"},
  {id: 39, answer: "does he travel", answer2: "does he travel?", done: false, textContent: "Como se dice '¿Viaja él?'?"},
  {id: 40, answer: "he travels", done: false, textContent: "Como se dice 'Él viaja'?"}
]

const wordsAndQuestions9 = [
  {id: 41, answer: 'i see you', done: false, textContent: 'Como se dice "Te veo"?', divider: 'remove'},
  {id: 42, answer: "you see me", done: false, textContent: 'Como se dice "Me ves"?'},
  {id: 43, answer: "he sees her", done: false, textContent: "Como se dice 'Él la ve'?"},
  {id: 44, answer: "she does not see him", done: false, textContent: "Como se dice 'Ella no lo ve'?"},
  {id: 45, answer: "we saw them", done: false, textContent: "Como se dice 'Nosotros los vimos'?"},
  {id: 46, answer: "they did not see us", done: false, textContent: "Como se dice 'Ellos no nos vieron'?"},
  {id: 47, answer: 'i know you', done: false, textContent: 'Como se dice "Te conozco"?', divider: 'remove'},
  {id: 48, answer: "but you do not know me", done: false, textContent: 'Como se dice "Pero tú no me conoces"?'},
  {id: 49, answer: "he knows her", done: false, textContent: "Como se dice 'Él la conoce'?"},
  {id: 50, answer: "she did not know him", done: false, textContent: "Como se dice 'Ella no lo conocía'?"},
  {id: 51, answer: "she will know him", done: false, textContent: "Como se dice 'Ella lo conocerá'?"}
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

createQuiz(questions, 'one');
createQuiz(wordsAndQuestions, 'two');
createQuiz(wordsAndQuestions2, 'two');
createQuiz(wordsAndQuestions3, 'two');
createQuiz(wordsAndQuestions4, 'two');
createQuiz(wordsAndQuestions5, 'two');
createQuiz(wordsAndQuestions6, 'two');
createQuiz(wordsAndQuestions7, 'two');
createQuiz(wordsAndQuestions8, 'two');
createQuiz(wordsAndQuestions9, 'three');

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
  congratsText.textContent = `Congratualtions, ${userName}!`;
  const nextLessonButton = document.querySelector('.next-lesson-button');
  nextLessonButton.addEventListener('click', () => {
    if (lessonIsDone) {
      return;
    } else {
      lessonIsDone = true;
      localStorage.setItem('lessons', JSON.stringify({1: 'complete', 2: 'complete', 3: 'unlocked' }));
      localStorage.setItem('lesson2Status', lessonIsDone);
    }
  })
}

finishButton.addEventListener('click', congratulate);

