let lessonIsDone = localStorage.getItem('lesson5Status');
let userName = localStorage.getItem('username');

const questions = [
  {id: 1, answer: 'he is older than you', done: false, textContent: 'Como se dice "Él es mayor que tú"?', divider: 'remove'},
  {id: 2, answer: 'she is yonger than me', done: false, textContent: 'Como se dice "Ella es más joven que yo"?'},
  {id: 3, answer: 'my car is faster than your car', done: false, textContent: 'Como se dice "Mi coche es más rápido que tu coche"?'},
  {id: 4, answer: 'your car is slower than my car', done: false, textContent: 'Como se dice "Tu coche es más lento que mi coche"?'},
  {id: 5, answer: 'my son is yonger than your me', done: false, textContent: 'Como se dice "Mi hijo es más joven que tu hijo"?'},
  {id: 6, answer: 'my grandparents are older than thier children', done: false, textContent: 'Como se dice "Mis abuelos son mayores que sus hijos"?'},
  {id: 7, answer: 'they are faster than us', done: false, textContent: 'Como se dice "Ellos son más rápidos que nosotros"?'},
  {id: 8, answer: 'you are slower than her', done: false, textContent: 'Como se dice "Tú eres más lento que ella"?'},
]

const questions2 = [
  {id: 9, answer: 'i will come in three days', done: false, textContent: 'Como se dice "Voy a venir en tres días"?'},
  {id: 10, answer: 'he left three days ago', done: false, textContent: 'Como se dice "Él se fue hace tres días"?'},
  {id: 11, answer: 'i will see you in one week', answer2: 'i will see you in one week', done: false, textContent: 'Como se dice "Te veré en una semana"?'},
  {id: 12, answer: 'i saw him two weeks ago', done: false, textContent: 'Como se dice "Lo vi hace dos semanas"?'},
  {id: 13, answer: 'yesterday i did not work but tomorrow i will work', done: false, textContent: 'Como se dice "Ayer no trabajé, pero mañana trabajaré"?'},
  {id: 14, answer: 'i will go to new york', done: false, textContent: 'Como se dice "Voy a ir a Nueva York"?'},
  {id: 15, answer: 'in one hour we will go home', answer2: 'in an hour we will go home', done: false, textContent: 'Como se dice "Te veré en una semana"?'},
  {id: 16, answer: 'i was here yesterday', done: false, textContent: 'Como se dice "Estuve aquí ayer"?'},
  {id: 17, answer: 'i will be here tomorrow', done: false, textContent: 'Como se dice "Estaré aquí mañana"?'}
]

const questions3 = [
  {id: 18, answer: 'i will come on monday', done: false, textContent: 'Como se dice "Voy a venir el lunes"?'},
  {id: 19, answer: 'i am yonger than him', done: false, textContent: 'Como se dice "Soy más joven que él"?'},
  {id: 20, answer: 'today i speak better than yesterday', done: false, textContent: 'Como se dice "Hoy hablo mejor que ayer"?'},
  {id: 21, answer: 'yesterday i spoke worse than today', done: false, textContent: 'Como se dice "Ayer hablé peor que hoy"?'},
  {id: 22, answer: 'today i am more interesting than yesterday', done: false, textContent: 'Como se dice "Hoy soy más interesante que ayer"?'},
  {id: 23, answer: 'november is shorter than october', done: false, textContent: 'Como se dice "Noviembre es más corto que octubre"?'},
  {id: 24, answer: 'february is the shortest month', done: false, textContent: 'Como se dice "Febrero es el mes más corto"?'},
  {id: 25, answer: 'texas is bigger than florida', done: false, textContent: 'Como se dice "Texas es más grande que Florida"?'},
  {id: 26, answer: 'i am the best student', done: false, textContent: 'Como se dice "Soy el mejor estudiante"?'},
  {id: 27, answer: 'i like summer more than winter', done: false, textContent: 'Como se dice "Me gusta más el verano que el invierno"?'}
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

createQuiz(questions, "one");
createQuiz(questions2, "three");
createQuiz(questions3, "four");

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
      localStorage.setItem('lessons', JSON.stringify({1: 'complete', 2: 'complete', 3: 'complete', 4: 'complete', 5: 'complete', 6: "unlocked"}));
      localStorage.setItem('lesson5Status', lessonIsDone);
    }
  })
}

finishButton.addEventListener('click', congratulate);
