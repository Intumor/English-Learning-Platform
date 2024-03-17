window.addEventListener('beforeunload', (event) => {
  event.preventDefault();
  event.returnValue = '';

  return "";
})


let lessonIsDone = localStorage.getItem('lesson3Status');
let userName = localStorage.getItem('username');

const questions = [
  {id: 1, answer: 'i will talk to you', done: false, textContent: 'Como se dice "Hablaré contigo"?'},
  {id: 2, answer: 'i will help you', done: false, textContent: 'Como se dice "Te ayudaré"?'},
  {id: 3, answer: 'he did not help me', done: false, textContent: 'Como se dice "Él no me ayudó"?'},
  {id: 4, answer: 'i will take your car', done: false, textContent: 'Como se dice "Tomaré tu coche"?'},
  {id: 5, answer: 'she came to me', done: false, textContent: 'Como se dice "Ella vino a mí"?'},
  {id: 6, answer: 'when do you go to him', answer2: 'when do you go to him?', done: false, textContent: 'Como se dice "¿Cuándo vas a él?"?'},
  {id: 7, answer: 'i saw him yesterday', done: false, textContent: 'Como se dice "Lo vi ayer"?'},
  {id: 8, answer: 'when did you see her', answer2: 'when did you see her?', done: false, textContent: 'Como se dice "¿Cuándo la viste?"?'}
]


const newWords = [
  {type: 'new-word', content: 'strong - fuerte'},
  {type: 'new-word', content: 'weak - débil'},
  {type: 'new-word', content: 'smart - inteligente'},
  {type: 'new-word', content: 'stupid - estúpido'},
  {type: 'new-word', content: 'happy - feliz'},
  {type: 'new-word', content: 'sad - triste'}
]

const createNewWords = (newWordsArr, num) => {
  const section = document.querySelector(`#section-${num}`);
  const newWordsBox = document.createElement('div');
  newWordsBox.className = 'new-words'

  newWordsArr.forEach((newWord) => {
    const newWordsPar = document.createElement('p');
    newWordsPar.textContent = newWord.content;
    newWordsPar.style.fontSize = '2.4rem'

    section.appendChild(newWordsBox);
    newWordsBox.appendChild(newWordsPar);
  })
}

const questions2 = [
  {id: 9, answer: 'he is strong', done: false, textContent: 'Como se dice "Él es fuerte"?'},
  {id: 10, answer: 'they are not smart', done: false, textContent: 'Como se dice "Ellos no son inteligentes"?'},
  {id: 11, answer: 'we were happy', done: false, textContent: 'Como se dice "Éramos felices"?'},
  {id: 12, answer: 'she will not be weak', done: false, textContent: 'Como se dice "Ella no será débil"?'},
  {id: 13, answer: 'am i sad', answer2: 'am i sad?', done: false, textContent: 'Como se dice "¿Estoy triste?"?'},
  {id: 14, answer: 'they were not stupid', done: false, textContent: 'Como se dice "Ellos no eran estúpidos"?'},
  {id: 15, answer: 'she is not strong', done: false, textContent: 'Como se dice "Ella no es fuerte"?'},
  {id: 16, answer: 'will you be smart', answer2: 'will you be smart?', done: false, textContent: 'Como se dice "¿Serás inteligente?"?'}
]

const questions3 = [
  {id: 17, answer: 'what do you see', answer2: 'what do you see?', done: false, textContent: 'Como se dice "¿Qué ves?"?'},
  {id: 18, answer: 'what do you know', answer2: 'what do you know?', done: false, textContent: 'Como se dice "¿Qué sabes?"?'},
  {id: 19, answer: 'what did you say', answer2: 'what did you say?', done: false, textContent: 'Como se dice "¿Qué dijiste?"?'},
  {id: 20, answer: 'who are you', answer2: 'who are you?', done: false, textContent: 'Como se dice "¿Quién eres tú?"?'},
  {id: 21, answer: 'who is she', answer2: 'who is she?', done: false, textContent: 'Como se dice "¿Quién es ella?"?'},
  {id: 22, answer: 'where did she go', answer2: 'where did she go?', done: false, textContent: 'Como se dice "¿Dónde se fue ella?"?'},
  {id: 23, answer: 'where am i', answer2: 'where am i?', done: false, textContent: 'Como se dice "¿Dónde estoy?"?'},
  {id: 24, answer: 'where will you go', answer2: 'where will you go?', done: false, textContent: 'Como se dice "¿A dónde irás?"?'},
  {id: 25, answer: 'when did i see you', answer2: 'when did i see you?', done: false, textContent: 'Como se dice "¿Cuándo te vi?"?'},
  {id: 26, answer: 'what did we come', answer2: 'what did we come?', done: false, textContent: 'Como se dice "¿Por qué vinimos?"?'},
  {id: 27, answer: 'why are you here', answer2: 'why are you here?', done: false, textContent: 'Como se dice "¿Por qué estás aquí?"?'},
  {id: 28, answer: 'why did she come', answer2: 'why did she come?', done: false, textContent: 'Como se dice "¿Por qué vino ella?"?'},
  {id: 29, answer: 'how did they find us', answer2: 'how did they find us?', done: false, textContent: 'Como se dice "¿Cómo nos encontraron?"?'}
]

const questions4 = [
  {id: 30, answer: 'she likes to sing', done: false, textContent: 'Como se dice "A ella le gusta cantar"?'},
  {id: 31, answer: 'he likes to learn', done: false, textContent: 'Como se dice "A él le gusta aprender"?'},
  {id: 32, answer: 'they hope to travel', done: false, textContent: 'Como se dice "Ellos esperan viajar"?'},
  {id: 33, answer: 'We like to sleep', done: false, textContent: 'Como se dice "Nos gusta dormir"?'},
  {id: 34, answer: 'sarah hoped to go', done: false, textContent: 'Como se dice "Sarah esperaba ir"?'},
  {id: 35, answer: 'he needs to finish', done: false, textContent: 'Como se dice "Ellos no eran estúpidos"?'},
  {id: 36, answer: 'jane needs to sleep', done: false, textContent: 'Como se dice "Jane necesita dormir"?'},
  {id: 37, answer: 'they hope to eat', done: false, textContent: 'Como se dice "Ellos esperan comer"?'}
]

const questions5 = [
  {id: 38, answer: 'i take his car', done: false, textContent: 'Como se dice "Yo tomo su coche"?'},
  {id: 39, answer: 'will she take your computer', answer2: 'will she take your computer?', done: false, textContent: 'Como se dice "¿Tomará ella tu computadora?"?'},
  {id: 40, answer: "they did not take my car", done: false, textContent: 'Como se dice "Ellos no tomaron mi coche"?'},
  {id: 41, answer: 'we will not take her computer', done: false, textContent: 'Como se dice "No tomaremos su computadora"?'},
  {id: 42, answer: 'i do not need their car', done: false, textContent: 'Como se dice "No necesito su coche"?'},
  {id: 43, answer: 'do they need our house', answer2: 'do they need our house?', done: false, textContent: 'Como se dice "¿Necesitan ellos nuestra casa?"?'}
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

createQuiz(questions, 'one');
createNewWords(newWords, 'four');
createQuiz(questions2, 'four');
createQuiz(questions3, 'five');
createQuiz(questions4, 'six');
createQuiz(questions5, 'seven');


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
      localStorage.setItem('lessons', JSON.stringify({1: 'complete', 2: 'complete', 3: 'complete', 4: 'unlocked' }));
      localStorage.setItem('lesson3Status', lessonIsDone);
    }
  })
}

finishButton.addEventListener('click', congratulate);