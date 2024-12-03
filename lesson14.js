let lessonIsDone = localStorage.getItem('lesson14Status');
let userName = localStorage.getItem('username');

const questions = [
  {id: 1, answer: 'when should i call you', answer2: "when should i call you?", done: false, textContent: 'Como se dice "¿Cuándo debería llamarte?"', divider: 'remove'},
  {id: 2, answer: 'he did not call me back', done: false, textContent: 'Como se dice "Él no me devolvió la llamada"'},
  {id: 3, answer: 'i called him but he did not call me back', done: false, textContent: 'Como se dice "Lo llamé, pero él no me devolvió la llamada"'},
  {id: 4, answer: 'shelly called you but did not leave a message', done: false, textContent: 'Como se dice "Shelly te llamó, pero no dejó un mensaje"'},
  {id: 5, answer: 'did anybody call me', answer2: "did anybody call me?", answer: 'did somebody call me', answer2: "did somebody call me?", done: false, textContent: 'Como se dice "¿Alguien me llamó?"'},
  {id: 6, answer: 'if anybody calls me take a message', answer2: "if somebody calls me take a message", done: false, textContent: 'Como se dice "Si alguien me llama, toma un mensaje"'},
  {id: 7, answer: 'call me but if i do not take the call text me or email me', done: false, textContent: 'Como se dice "Llámame, pero si no atiendo la llamada, envíame un mensaje de texto o un correo electrónico"'},
  {id: 8, answer: 'yesterday i got a call from jason inviting me to go to the movies', done: false, textContent: 'Como se dice "Ayer recibí una llamada de Jason invitándome a ir al cine"'},
]

const questions2 = [
  {id: 9, answer: 'who did this', answer2: "who did this?", done: false, textContent: 'Como se dice "¿Quién hizo esto?"', divider: 'remove'},
  {id: 10, answer: 'what did you do', answer2: "what did you do?", done: false, textContent: 'Como se dice "¿Qué hiciste?"'},
  {id: 11, answer: 'who saw you', answer2: "who saw you?", done: false, textContent: 'Como se dice "Who saw you"'},
  {id: 12, answer: 'who did you see', answer2: "who did you see?", done: false, textContent: 'Como se dice "¿A quién viste?"'},
  {id: 13, answer: 'what did you hear', answer2: "what did you hear?", done: false, textContent: 'Como se dice "¿Qué oíste?"'},
  {id: 14, answer: 'who heard about it', answer2: "who heard about it?", done: false, textContent: 'Como se dice "¿Quién escuchó sobre eso?"'},
  {id: 15, answer: 'who do you love', answer2: "who do you love?", done: false, textContent: 'Como se dice "¿A quién amas?"'},
  {id: 16, answer: 'who loves you', answer2: "who loves you?", done: false, textContent: 'Como se dice "¿Quién te ama?"'},

  {id: 17, answer: 'who wants to drink', answer2: "who wants to drink?", done: false, textContent: 'Como se dice "¿Quién quiere beber?"'},
  {id: 18, answer: 'what did you see', answer2: "what did you see?", done: false, textContent: 'Como se dice "¿Qué viste?"'},
  {id: 19, answer: 'who saw it', answer2: "who saw it?", done: false, textContent: 'Como se dice "¿Quién lo vio?"'},
  {id: 20, answer: 'who gets you', answer2: "who gets you?", done: false, textContent: 'Como se dice "¿Quién te toca?"'},
  {id: 21, answer: 'who do you get', answer2: "who do you get?", done: false, textContent: 'Como se dice "¿A quién te toca?"'},
  {id: 22, answer: 'who was here', answer2: "who was here?", done: false, textContent: 'Como se dice "¿Quién estuvo aquí?"'},
  {id: 23, answer: 'who did you see here', answer2: "who did you see here?", done: false, textContent: 'Como se dice "¿A quién viste aquí?"'},
  {id: 24, answer: 'who sent you here', answer2: "who sent you here?", done: false, textContent: 'Como se dice "¿Quién te envió aquí?"'},

  {id: 25, answer: 'who did you send there', answer2: "who did you send there?", done: false, textContent: 'Como se dice "¿A quién enviaste allí?"'},
  {id: 26, answer: 'who called you', answer2: "who called you?", done: false, textContent: 'Como se dice "¿Quién te llamó?"'},

  {id: 27, answer: 'who did you call', answer2: "who did you call?", done: false, textContent: 'Como se dice "¿A quién llamaste?"'},
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
    incorrectIcon.alt = "incorrecto";

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
        } else if (word === "can't") {
          word = "cannot";
          return word;
        } else if (word === "shouldn't") {
          word = "should not";
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

createQuiz(questions, "one")
createQuiz(questions2, "two")


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
      localStorage.setItem('lessons', JSON.stringify({1: 'complete', 2: 'complete', 3: 'complete', 4: 'complete', 5: "complete", 6: "complete", 7: "complete", 8: "complete", 9: "complete", 10: "complete", 11: "complete", 12: "complete", 13: "complete", 14: "complete", 15: "unlocked"}));
      localStorage.setItem('lesson14Status', lessonIsDone);
    }
  })
}