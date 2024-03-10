
/*window.addEventListener('beforeunload', (event) => {
  event.preventDefault();
  event.returnValue = '';

  return "";
})*/

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
  {id: 13, answer: 'did you ask', asnwer2: "did you ask?", done: false, textContent: 'Como se dice "¿Preguntaste?"?'}
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
  {id: 17, answer: 'i will help', answer2: "i'll help", done: false, textContent: 'Como se dice "Ayudaré"?', divider: 'remove'},
  {id: 18, answer: "he didn't help", answer2: "he did not help", done: false, textContent: 'Como se dice "Él no ayudó"?'},
  {id: 19, answer: "he will help", answer2: "he'll help", done: false, textContent: "Como se dice 'Él ayudará'?"},
  {id: 19, answer: "will you help", answer2: "will you help?", done: false, textContent: "Como se dice '¿Ayudarás?'?"}
]

const wordsAndQuestions6 = [
  {type: 'new-word', content: 'hope - esperar'},
  {id: 17, answer: 'i hope', done: false, textContent: 'Como se dice "Espero"?', divider: 'remove'},
  {id: 18, answer: "he hopes", done: false, textContent: 'Como se dice "Él espera"?'},
  {id: 19, answer: "do you hope", answer2: "do you hope?", done: false, textContent: "Como se dice '¿Tú esperas?'?"},
  {id: 19, answer: "i didn't hope but i will hope", answer2: "i did not hope but i will hope", answer3: "i didn't hope but i'll hope", answer4: "i did not hope but i'll hope", done: false, textContent: "Como se dice 'No esperaba, pero esperaré'?"}
]

const createQuiz = (questionsArr, num) => {
  const quizHeader = document.querySelector('.quiz-header');
  const section = document.querySelector(`#section-${num}`);
  const quiz = document.createElement('div');
  quiz.className = 'quiz';


  questionsArr.forEach((question, index) => {
    console.log(question)
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

    if (index === 0 || question.divider === 'remove') {
      quiz.removeChild(divider)
    }


    const checkAnswer = () => {
      let answer = quizTextBar.value.toLowerCase().trim().replace(/[.,]/g, '');
      answer = answer.replace(/\s\s+/g, " ");
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
createQuiz(wordsAndQuestions6, 'two'); //if they put commas make sure to remove them

