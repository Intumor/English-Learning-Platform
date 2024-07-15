let lessonIsDone = localStorage.getItem('lesson11Status');
let userName = localStorage.getItem('username');

const fillInQuestions = [
  {id: 1, question: 'You<input type="text" class="inline-textbar" id="inline-textbar-1">(learn) a lot this semester', answer: "have learned", done: false, divider: 'remove'},
  {id: 2, question: 'They<input type="text" class="inline-textbar" id="inline-textbar-2">(travel) to many countries', answer: "have traveled", done: false},
  {id: 3, question: 'He<input type="text" class="inline-textbar" id="inline-textbar-3">(write) three books', answer: "has written", done: false},
  {id: 4, question: 'We<input type="text" class="inline-textbar" id="inline-textbar-4">(finish) our project', answer: "have finished", done: false},
  {id: 5, question: 'The weather<input type="text" class="inline-textbar" id="inline-textbar-5">(change) since this morning', answer: "has changed", done: false},
  {id: 6, question: 'She<input type="text" class="inline-textbar" id="inline-textbar-6">(complete) her homework', answer: "has completed", done: false},
  {id: 7, question: 'They<input type="text" class="inline-textbar" id="inline-textbar-7">(build) a new house', answer: "have built", done: false},
  {id: 8, question: 'She<input type="text" class="inline-textbar" id="inline-textbar-8">(lose) her keys', answer: "has lost", done: false},
  {id: 9, question: 'The children<input type="text" class="inline-textbar" id="inline-textbar-9">(eat) all the cookies', answer: "have eaten", done: false},
  {id: 10, question: 'I<input type="text" class="inline-textbar" id="inline-textbar-10">(not see) this movie before', answer: "have not seen", answer2: "haven't seen", done: false},
]

const createFillInQuiz = (questionsArr, num) => {
  const section = document.querySelector(`#section-${num}`);
  const quiz = document.createElement('div');
  quiz.className = "quiz";
  quiz.classList.add('fill-in-quiz');

  questionsArr.forEach((question, index) => {
    const divider = document.createElement('hr');

    const quizBox = document.createElement('div');
    quizBox.className = "quiz-box";

    const quizContainer = document.createElement('div');
    quizContainer.className = "quiz-container";

    const fillInQuestion = document.createElement("P");
    fillInQuestion.className = "exercise-text";
    fillInQuestion.innerHTML = question.question

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

    let inputValue = "";

    section.appendChild(quiz);
    quiz.appendChild(divider)
    quiz.appendChild(quizBox);
    quizBox.appendChild(quizContainer);
    quizContainer.appendChild(fillInQuestion)
    quizBox.appendChild(checkBox);
    checkBox.appendChild(submitButton);
    checkBox.appendChild(correct);
    checkBox.appendChild(incorrect);
    correct.appendChild(correctIcon);
    incorrect.appendChild(incorrectIcon);
    incorrect.appendChild(tryAgainText);

    if (index === 0 || question.divider === 'remove') {
      quiz.removeChild(divider)
    }

    const quizTextBar = document.querySelector(`#inline-textbar-${question.id}`)

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
  })
}


createFillInQuiz(fillInQuestions, "one");

const questions = [
  {id: 11, answer: 'my father is brave', done: false, textContent: 'Como se dice "Mi padre es valiente"', divider: 'remove'},
  {id: 12, answer: 'i am afraid', done: false, textContent: 'Como se dice "Tengo miedo"'},
  {id: 13, answer: 'will you be bored', answer2: 'will you be bored?', done: false, textContent: 'Como se dice "¿Estarás aburrido?"'},
  {id: 14, answer: 'are you tired', answer2: 'are you tired?', done: false, textContent: 'Como se dice "¿Estás cansada?"'},
  {id: 15, answer: 'they will be thirsty', done: false, textContent: 'Como se dice "Ellos estarán sedientos"'},
  {id: 16, answer: 'my mom is happy', done: false, textContent: 'Como se dice "Mi mamá está feliz"'},
  {id: 17, answer: 'i will be angry', done: false, textContent: 'Como se dice "Yo estaré enojado"'},
  {id: 18, answer: 'she was cold', done: false, textContent: 'Como se dice "Ella tenía frío"'},
  {id: 19, answer: 'you were hungry', done: false, textContent: 'Como se dice "Tú estabas hambriento"'},
  {id: 20, answer: 'we are sad', done: false, textContent: 'Como se dice "Nosotros estamos tristes"'},
  {id: 21, answer: 'are you interested', answer2: 'are you interested?', done: false, textContent: 'Como se dice "¿Estás interesado?"'},
  {id: 22, answer: 'were we hot', answer2: 'were we hot?', done: false, textContent: 'Como se dice "¿Nosotros teníamos calor?"'}
]

const questions2 = [
  {id: 23, answer: 'i am not afraid', done: false, textContent: 'Como se dice "No tengo miedo"', divider: 'remove'},
  {id: 24, answer: 'are you hungry', answer2: 'are you hungry?', done: false, textContent: 'Como se dice "¿Tienes hambre?"'},
  {id: 25, answer: 'are you angry', answer2: 'will you be bored?', done: false, textContent: 'Como se dice "¿Estás enojado?"'},
  {id: 26, answer: 'are you tired', answer2: 'are you tired?', done: false, textContent: 'Como se dice "¿Estás cansada?"'},
  {id: 27, answer: 'why are you afraid',answer2: 'why are you afraid?', done: false, textContent: 'Como se dice "¿Por qué tienes miedo?"'},
  {id: 28, answer: 'i am not afraid of you', done: false, textContent: 'Como se dice "No tengo miedo de ti"'},
  {id: 29, answer: 'before i was afraid but now i am not afraid', done: false, textContent: 'Como se dice "Antes tenía miedo, pero ahora no tengo miedo"'},
  {id: 30, answer: 'i am afraid this evening i will be hungry', done: false, textContent: 'Como se dice "Ella tenía frío"'},
  {id: 31, answer: 'i am happy', done: false, textContent: 'Como se dice "Estoy feliz"'},
  {id: 32, answer: 'i am happy because i am not afraid', done: false, textContent: 'Como se dice "Estoy feliz porque no tengo miedo"'},
  {id: 33, answer: 'i am happy because i am free and strong', done: false, textContent: 'Como se dice "Estoy feliz porque soy libre y fuerte"'},
  {id: 34, answer: 'before breakfast i was hungry', answer2: 'before the breakfast i was hungry', done: false, textContent: 'Como se dice "Antes del desayuno, tenía hambre"'},
  {id: 35, answer: 'after breakfast i am afraid of nothing', answer2: "after breakfast i am not afraid of anything", answer3: 'after the breakfast i am afraid of nothing', answer4: "after the breakfast i am not afraid of anything", done: false, textContent: 'Como se dice "Después del desayuno, no tengo miedo de nada"'},
  {id: 36, answer: 'are you afraid of something', answer2: 'are you afraid of something?', done: false, textContent: 'Como se dice "¿Tienes miedo de algo?"'},
  {id: 37, answer: 'i am tired of everything', done: false, textContent: 'Como se dice "Estoy cansada de todo"'}
]

const questions3 = [
  {id: 38, answer: 'i do not know anything', done: false, textContent: "I know nothing", divider: 'remove'},
  {id: 39, answer: 'i have not seen anything', done: false, textContent: 'I have seen nothing'},
  {id: 40, answer: 'i said nothing to him', done: false, textContent: "I didn't say anything to him"},
  {id: 41, answer: 'i did not feel anything', done: false, textContent: 'i felt nothing'},
  {id: 42, answer: 'i know nobody', done: false, textContent: "I don't know anybody"}
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
createQuiz(questions2, "three")
createQuiz(questions3, "four")


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
      localStorage.setItem('lessons', JSON.stringify({1: 'complete', 2: 'complete', 3: 'complete', 4: 'complete', 5: "complete", 6: "complete", 7: "complete", 8: "complete", 9: "complete", 10: "complete", 11: "complete", 12: "unlocked"}));
      localStorage.setItem('lesson11Status', lessonIsDone);
    }
  })
}