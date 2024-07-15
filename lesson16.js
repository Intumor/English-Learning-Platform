let lessonIsDone = localStorage.getItem('lesson16Status');
let userName = localStorage.getItem('username');


const questions = [
  {id: 1, answer: 'they help each other', done: false, textContent: 'Como se dice "Ellos se ayudan el uno al otro"', divider: 'remove'},
  {id: 2, answer: 'we trust each other', done: false, textContent: 'Como se dice "Nos confiamos el uno al otro"'},
  {id: 3, answer: 'they will not hug each other', done: false, textContent: 'Como se dice "Ellos se abrazan el uno al otro"'},
  {id: 4, answer: 'we support each other', done: false, textContent: 'Como se dice "Nos apoyamos la una a la otra"'},
  {id: 5, answer: 'do they understand each other', answer2: "do they understand each other?", done: false, textContent: 'Como se dice "¿Ellos se entienden el uno al otro?"'},
  {id: 6, answer: 'will we call each other', answer2: "will we call each other?", done: false, textContent: 'Como se dice "Nos llamamos la una a la otra"'},
  {id: 7, answer: 'they respect each other', done: false, textContent: 'Como se dice "Ellos se respetan el uno al otro"'},
  {id: 8, answer: 'yesterday we met each other', done: false, textContent: 'Como se dice "Ayer nos encontramos el uno al otro"'},
  {id: 9, answer: 'did they listen to each other', answer2: "did they listen to each other?", done: false, textContent: 'Como se dice "Ellas se escuchan la una a la otra"'},
  {id: 10, answer: 'we will greet each other',  done: false, textContent: 'Como se dice "Nos saludamos el uno al otro"'}
]

const questions2 = [
  {id: 11, answer: 'when was the gallery founded', done: false, textContent: 'Como se dice "¿Cuándo fue fundada la galería?"', divider: 'remove'},
  {id: 12, answer: 'my first book was published ten years ago', done: false, textContent: 'Como se dice "Mi primer libro fue publicado hace diez años"'},
  {id: 13, answer: 'my new program will be released next year', done: false, textContent: 'Como se dice "Mi nuevo programa será lanzado el próximo año"'},
  {id: 14, answer: 'this question was discussed yesterday', done: false, textContent: 'Como se dice "Esta pregunta fue discutida ayer"'},
  {id: 15, answer: 'this script was written last year', done: false, textContent: 'Como se dice "Este guion fue escrito el año pasado"'},
  {id: 16, answer: 'this book was written by tom', done: false, textContent: 'Como se dice "Este libro fue escrito por Tom"'},
  {id: 17, answer: 'this role was played by daniel', done: false, textContent: 'Como se dice "Este papel fue interpretado por Daniel"'},
  {id: 18, answer: 'this house was sold', done: false, textContent: 'Como se dice "Esta casa fue vendida"'},
  {id: 19, answer: 'this car was bought', done: false, textContent: 'Como se dice "Este coche fue comprado"'},
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

createQuiz(questions, "two")
createQuiz(questions2, "four")

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
      localStorage.setItem('lessons', JSON.stringify({1: 'complete', 2: 'complete', 3: 'complete', 4: 'complete', 5: "complete", 6: "complete", 7: "complete", 8: "complete", 9: "complete", 10: "complete", 11: "complete", 12: "complete", 13: "complete", 14: "complete", 15: "complete", 16: "complete"}));
      localStorage.setItem('lesson16Status', lessonIsDone);
    }
  })
}