let lessonIsDone = localStorage.getItem('lesson13Status');
let userName = localStorage.getItem('username');

const questions = [
  {id: 1, answer: 'where did you go yesterday', answer2: "where did you go yesterday?", done: false, textContent: 'Como se dice "¿A dónde fuiste ayer?"', divider: 'remove'},
  {id: 2, answer: 'where will you go tomorrow', answer2: "where will you go tomorrow?", done: false, textContent: 'Como se dice "¿A dónde irás mañana?"'},
  {id: 3, answer: 'where did i see you', answer2: "where did i see you?", done: false, textContent: 'Como se dice "¿Dónde te vi?"'},
  {id: 4, answer: 'she does not want to talk to me about it', done: false, textContent: 'Como se dice "Ella no quiere hablar conmigo sobre eso"'},
  {id: 5, answer: 'will we talk about it', answer2: "will we talk about it?", done: false, textContent: 'Como se dice "¿Hablaremos sobre eso?"'},
  {id: 6, answer: 'where will they invite us to go', answer2: 'where will they invite us to go?', done: false, textContent: 'Como se dice "¿A dónde nos invitarán a ir?"'},
  {id: 7, answer: 'how many times did you go to argentina', answer2: "how many times did you go to argentina?", done: false, textContent: 'Como se dice "¿Cuántas veces fuiste a Argentina?"'},
  {id: 8, answer: 'will you work tomorrow', answer2: "will you work tomorrow?", done: false, textContent: 'Como se dice "¿Trabajarás mañana?"'},
  {id: 9, answer: 'when does your mom arrive', answer2: "when does your mom arrive?", done: false, textContent: 'Como se dice "¿Cuándo llega tu mamá?"'},
  {id: 10, answer: 'i want you to go', done: false, textContent: 'Como se dice "Quiero que vayas"'},
  {id: 11, answer: 'i want you to be happy', done: false, textContent: 'Como se dice "Quiero que seas feliz"'},
  {id: 12, answer: 'i want him to speak to me', done: false, textContent: 'Como se dice "Quiero que él me hable"'},
  {id: 13, answer: 'do it', done: false, textContent: 'Como se dice "Hazlo"'},
  {id: 14, answer: 'go there', done: false, textContent: 'Como se dice "Ve allí"'},
  {id: 15, answer: 'come here', done: false, textContent: 'Como se dice "Ven aquí"'},
  {id: 16, answer: 'let us go', done: false, textContent: 'Como se dice "Vamos"'},
  {id: 17, answer: 'dance', done: false, textContent: 'Como se dice "Baila"'},
  {id: 18, answer: 'do not dance', done: false, textContent: 'Como se dice "No bailes"'},
  {id: 19, answer: 'will you dance with me', answer2: "will you dance with me?", done: false, textContent: 'Como se dice "¿Bailarás conmigo?"'},
]

const questions2 = [
  {id: 20, answer: 'we came to help', done: false, textContent: 'Como se dice "Vinimos para ayudar"', divider: 'remove'},
  {id: 21, answer: 'they came to watch', done: false, textContent: 'Como se dice "Vinieron para mirar"'},
  {id: 22, answer: 'i went to mexico to see you', done: false, textContent: 'Como se dice "Fui a México para verte"'},
  {id: 23, answer: 'she works to live', done: false, textContent: 'Como se dice "Ella trabaja para vivir"'},
  {id: 24, answer: 'you live to win', done: false, textContent: 'Como se dice "Vives para ganar"'},
  {id: 25, answer: 'they came to eat', done: false, textContent: 'Como se dice "Vinieron para comer"'},
]

const questions3 = [
  {id: 26, answer: 'let him go', done: false, textContent: 'Como se dice "Déjalo ir"', divider: 'remove'},
  {id: 27, answer: 'let me eat', done: false, textContent: 'Como se dice "Déjame comer"'},
  {id: 28, answer: 'let them see it', done: false, textContent: 'Como se dice "Déjalos verlo"'},
  {id: 29, answer: 'let her come', done: false, textContent: 'Como se dice "Déjala venir"'},
  {id: 30, answer: 'will you let them go', answer2: "will you let them go?", done: false, textContent: 'Como se dice "¿Los dejarás ir?"'},
  {id: 31, answer: 'do not talk to him', done: false, textContent: 'Como se dice "No hables con él"'},
  {id: 32, answer: 'let us talk about it', done: false, textContent: 'Como se dice "Hablemos sobre eso"'},
  {id: 33, answer: 'do not talk to him about it', done: false, textContent: 'Como se dice "No le hables sobre eso"'},
  {id: 34, answer: 'where did she go', answer2: "where did she go?", done: false, textContent: 'Como se dice "¿Adónde fue ella?"'},
  {id: 35, answer: 'she went to dance', done: false, textContent: 'Como se dice "Ella fue a bailar"'},
  {id: 36, answer: 'let her tell everything', done: false, textContent: 'Como se dice "Déjala contar todo"'},
  {id: 37, answer: 'let us discuss our work together', done: false, textContent: 'Como se dice "Discutamos nuestro trabajo juntos"'},
  {id: 38, answer: 'let him help me', done: false, textContent: 'Como se dice "Déjalo ayudarme"'},
  {id: 39, answer: 'do not go there today', done: false, textContent: 'Como se dice "No vayas allí hoy"'},
]

const questions4 = [
  {id: 40, answer: 'i think you should talk to him', done: false, textContent: 'Como se dice "Creo que deberías hablar con él"'},
  {id: 41, answer: 'can i call you', answer2: "can i call you?", done: false, textContent: 'Como se dice "¿Puedo llamarte?"'},
  {id: 42, answer: 'you cannot call me', done: false, textContent: 'Como se dice "No puedes llamarme"'},
  {id: 43, answer: 'they should not come here', done: false, textContent: 'Como se dice "No deberían venir aquí"'},
  {id: 44, answer: 'we cannot help you', done: false, textContent: 'Como se dice "No podemos ayudarte"'},
  {id: 45, answer: 'he should not go there alone', done: false, textContent: 'Como se dice "Él no debería ir allí solo"'},
  {id: 46, answer: 'i cannot see you', done: false, textContent: 'Como se dice "No puedo verte"'},
  {id: 47, answer: 'we cannot tell you', done: false, textContent: 'Como se dice "No podemos decirte"'},
  {id: 48, answer: 'she should not dance', done: false, textContent: 'Como se dice "Ella no debería bailar"'},
  {id: 49, answer: 'can he drink', answer2: "can he drink?", done: false, textContent: 'Como se dice "¿Puede él beber?"'},
  {id: 50, answer: 'you cannot smoke here', done: false, textContent: 'Como se dice "No puedes fumar aquí"'},
  {id: 51, answer: 'we should not think about it', done: false, textContent: 'Como se dice "No deberíamos pensar sobre eso"'},
  {id: 52, answer: 'you should not talk like that', done: false, textContent: 'Como se dice "No deberías hablar así"'},
  {id: 53, answer: 'i do not know if i can talk to him about it', done: false, textContent: 'Como se dice "No sé si puedo hablar con él sobre eso"'},
  {id: 54, answer: 'can i help you', answer2: "can i help you?", done: false, textContent: 'Como se dice "¿Puedo ayudarte?"'},
  {id: 55, answer: 'should i help you', answer2: "should i help you?", done: false, textContent: 'Como se dice "¿Debería ayudarte?"'},
  {id: 56, answer: 'i do not know if i should help you', done: false, textContent: 'Como se dice "No sé si debería ayudarte"'},
  {id: 57, answer: 'we cannot do it now', done: false, textContent: 'Como se dice "No podemos hacerlo ahora"'},
  {id: 58, answer: 'i do not know if i should do it', done: false, textContent: 'Como se dice "No sé si debería hacerlo"'},
  {id: 59, answer: 'i do not know if i can do it', done: false, textContent: 'Como se dice "No sé si puedo hacerlo"'},
  {id: 60, answer: 'come', done: false, textContent: 'Como se dice "Ven"'},
  {id: 61, answer: 'go', done: false, textContent: 'Como se dice "Ve"'},
  {id: 62, answer: 'dance', done: false, textContent: 'Como se dice "Baila"'},
  {id: 63, answer: 'drink', done: false, textContent: 'Como se dice "Bebe"'},
  {id: 64, answer: 'do not go', done: false, textContent: 'Como se dice "No vayas"'},
  {id: 65, answer: 'do not come', done: false, textContent: 'Como se dice "No vengas"'},
  {id: 66, answer: 'do not drink', done: false, textContent: 'Como se dice "No bebas"'},
  {id: 67, answer: 'do not dance', done: false, textContent: 'Como se dice "No bailes"'},
  {id: 68, answer: 'let us go', done: false, textContent: 'Como se dice "Vamos"'},
  {id: 69, answer: 'let us drink', done: false, textContent: 'Como se dice "Bebamos"'},
  {id: 70, answer: 'let us sing', done: false, textContent: 'Como se dice "Cantemos"'},
  {id: 71, answer: 'if you di it i will help you', done: false, textContent: 'Como se dice "Si lo haces, te ayudaré"'},
  {id: 72, answer: 'if you help me you will be my friend', done: false, textContent: 'Como se dice "Si me ayudas, serás mi amigo"'},
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
createQuiz(questions3, "three")
createQuiz(questions4, "four")


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
      localStorage.setItem('lessons', JSON.stringify({1: 'complete', 2: 'complete', 3: 'complete', 4: 'complete', 5: "complete", 6: "complete", 7: "complete", 8: "complete", 9: "complete", 10: "complete", 11: "complete", 12: "complete", 13: "complete", 14: "unlocked"}));
      localStorage.setItem('lesson13Status', lessonIsDone);
    }
  })
}