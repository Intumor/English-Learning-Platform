let lessonIsDone = localStorage.getItem('lesson6Status');
let userName = localStorage.getItem('username');

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

recordAnswer(1)


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

const questions2 = [
  {type: 'subheader', title: 'Everybody'},
  {type: 'explanation', text: '"everybody" means "todos" or "todo el mundo", as simple as that'},
  {id: 29, answer: 'he knows everybody', done: false, textContent: 'Como se dice "Él conoce a todo el mundo"?', divider: 'remove'}
]

const questions3 = [
  {type: 'subheader', title: 'Somebody'},
  {type: 'explanation', text: '"somebody" means "alguien"'},
  {id: 30, answer: 'somebody sees me', done: false, textContent: 'Como se dice "Alguien me ve"?', divider: 'remove'}
]

const questions4 = [
  {type: 'subheader', title: 'Nobody'},
  {type: 'explanation', text: '"nobody" means "nadie"'},
  {id: 31, answer: 'nobody will help you', done: false, textContent: 'Como se dice "Nadie te ayudará"?', divider: 'remove'},
  {id: 32, answer: 'nobody does it', done: false, textContent: 'Como se dice "Nadie lo hace"?'},
  {id: 33, answer: 'nobody helped him', done: false, textContent: 'Como se dice "Nadie lo ayudó"?'},
  {id: 34, answer: 'nobody loves them', done: false, textContent: 'Como se dice "Nadie los ama"?'},
]

const questions5 = [
  {type: 'subheader', title: 'Anybody'},
  {type: 'explanation', text: '"anybody" means "cualquiera"'},
  {id: 35, answer: 'will anybody help me', done: false, textContent: 'Como se dice "¿Cualquiera me ayudará?"?', divider: 'remove'},
]

const questions6 = [
  {type: 'subheader', title: 'Everything'},
  {type: 'explanation', text: '"everything" means "todo"'},
  {id: 36, answer: 'i know everything about you', done: false, textContent: 'Como se dice "Sé todo sobre ti"?', divider: 'remove'},
]

const questions7 = [
  {type: 'subheader', title: 'Something'},
  {type: 'explanation', text: '"something" means "algo"'},
  {id: 37, answer: 'i will tell you something', done: false, textContent: 'Como se dice "Te diré algo"?', divider: 'remove'},
  {id: 38, answer: 'give me something to eat', done: false, textContent: 'Como se dice "Dame algo de comer"?'},
  {id: 39, answer: 'give me something to drink', done: false, textContent: 'Como se dice "Dame algo de beber"?'},
  {id: 40, answer: 'do you want something to drink', answer2: "do you want something to drink?", done: false, textContent: 'Como se dice "¿Quieres algo de beber?"?'},
]

const questions8 = [
  {type: 'subheader', title: 'Nothing'},
  {type: 'explanation', text: '"nothing" means "nada". Ok, here we have one really imprtant thing to cover. When we use the word "nada" in Spanish we use double negative "i do not know anything", but in English we cannot do that, so when we say "i do not know anything" we will only use a single negative. Like this "i know nothing" which literally translates to "(spanish)". It might seem strange at first but you will get more used to it as you will inevitably encounter this structure all the time, but for now you will just have to commit that to memory'},
  {id: 41, answer: 'i know nothing about it', done: false, textContent: 'Como se dice "No sé nada al respecto"?', divider: 'remove'},
  {id: 42, answer: 'i have nothing to hide', done: false, textContent: 'Como se dice "No tengo nada que ocultar"?'},
  {id: 43, answer: 'i see nothing', done: false, textContent: 'Como se dice "No veo nada"?'}
]

const questions9 = [
  {type: 'subheader', title: 'Anything'},
  {type: 'explanation', text: '"anything" means "cualquier cosa"'},
  {id: 44, answer: 'i will eat anything', done: false, textContent: 'Como se dice "Comeré cualquier cosa"?', divider: 'remove'},
  {id: 45, answer: 'he will do anything', done: false, textContent: 'Como se dice "Él hará cualquier cosa"?'}
]

const questions10 = [
  {type: 'subheader', title: 'Everywhere'},
  {type: 'explanation', text: '"everywhere" means "en todas partes"'},
  {id: 46, answer: 'they are everywhere', done: false, textContent: 'Como se dice "Ellos están en todas partes"?', divider: 'remove'},
  {id: 47, answer: 'i see him everywhere', done: false, textContent: 'Como se dice "Lo veo en todas partes"?'}
]

const questions11 = [
  {type: 'subheader', title: 'Somewhere'},
  {type: 'explanation', text: '"somewhere" means "en algún lugar"'},
  {id: 48, answer: 'he went somewhere', done: false, textContent: 'Como se dice "Ellos están en todas partes"?', divider: 'remove'},
]

const questions12 = [
  {type: 'subheader', title: 'Nowhere'},
  {type: 'explanation', text: '"nowhere" means "ningún lugar"'},
  {id: 49, answer: 'i have no where to go', done: false, textContent: 'Como se dice "No tengo adónde ir"?', divider: 'remove'},
  {id: 50, answer: 'it goes nowhere', done: false, textContent: 'Como se dice "No lleva a ningún lado"?'}
]

const questions13 = [
  {type: 'subheader', title: 'Anywhere'},
  {type: 'explanation', text: '"anywhere" means "en cualquier lugar"'},
  {id: 51, answer: 'it can be anywhere', done: false, textContent: 'Como se dice "Puede ser en cualquier lugar"?', divider: 'remove'},
  {id: 52, answer: 'i will go anywhere you want', done: false, textContent: 'Como se dice "Iría a cualquier lugar que quieras"?'}
]

const questions14 = [
  {type: 'subheader', title: 'Always'},
  {type: 'explanation', text: '"always" means "siempre"'},
  {id: 53, answer: 'he always does it', done: false, textContent: 'Como se dice "Él siempre lo hace"?', divider: 'remove'},
  {id: 54, answer: 'we always go there', done: false, textContent: 'Como se dice "Siempre vamos allí"?'}
]

const questions15 = [
  {type: 'subheader', title: 'Sometimes'},
  {type: 'explanation', text: '"sometimes" means "a veces"'},
  {id: 55, answer: 'sometimes i do it', done: false, textContent: 'Como se dice "A veces lo hago"?', divider: 'remove'},
  {id: 56, answer: 'sometimes we drink', done: false, textContent: 'Como se dice "A veces bebemos"?'}
]

const questions16 = [
  {type: 'subheader', title: 'Never'},
  {type: 'explanation', text: '"never" means "nunca"'},
  {id: 57, answer: 'i never do it', done: false, textContent: 'Como se dice "Nunca lo hago"?', divider: 'remove'},
  {id: 58, answer: 'i will never see you', done: false, textContent: 'Como se dice "Nunca te veré"?'}
]

const questions17 = [
  {type: 'subheader', title: 'Anytime'},
  {type: 'explanation', text: '"anytime" means "en cualquier momento"'},
  {id: 59, answer: 'come here anytime', done: false, textContent: 'Como se dice "Ven aquí en cualquier momento"?', divider: 'remove'},
  {id: 60, answer: 'i can see you anytime', done: false, textContent: 'Como se dice "Puedo verte en cualquier momento"?'},
  {id: 61, answer: 'we can do it anytime', done: false, textContent: 'Como se dice "Podemos hacerlo en cualquier momento"?'}
]

const questions18 = [
  {id: 62, answer: 'i like to drink', done: false, textContent: 'Como se dice "Me gusta beber"?', divider: 'remove'},
  {id: 63, answer: 'i like to see', done: false, textContent: 'Como se dice "Me gusta ver"?'},
  {id: 64, answer: 'i want to go', done: false, textContent: 'Como se dice "Quiero ir"?'},
  {id: 65, answer: 'i need to eat', done: false, textContent: 'Como se dice "Necesito comer"?'},
  {id: 66, answer: 'i want to sleep', done: false, textContent: 'Como se dice "Quiero dormir"?'},
  {id: 67, answer: 'i want to think', done: false, textContent: 'Como se dice "Quiero pensar"?'}
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

const fillInQuiz2 = [
  {id: 20, options: {option1: "little", option2: "few"}, answer: "little", done: false, textContent: "sugar", divider: 'remove', beforeInput: "There is"},
  {id: 21, options: {option1: "little", option2: "few"}, answer: "few", done: false, textContent: "friends in her new school", beforeInput: "She has"},
  {id: 22, options: {option1: "little", option2: "few"}, answer: "little", done: false, textContent: "time to finish the project", beforeInput: "We have"},
  {id: 23, options: {option1: "little", option2: "few"}, answer: "little", done: false, textContent: "money to buy the tickets", beforeInput: "He has"},
  {id: 24, options: {option1: "little", option2: "few"}, answer: "few", done: false, textContent: "people at work yesterday", beforeInput: "I saw"}
]

const fillInQuiz3 = [
  {id: 25, options: {option1: "little", option2: "small"}, answer: "little", done: false, textContent: "baby", divider: 'remove', beforeInput: "She has a"},
  {id: 26, options: {option1: "little", option2: "small"}, answer: "small", done: false, textContent: "house", beforeInput: "He lives in a"},
  {id: 27, options: {option1: "little", option2: "small"}, answer: "small", done: false, textContent: "toy", beforeInput: "A baby had a"},
  {id: 28, options: {option1: "little", option2: "small"}, answer: "little", done: false, textContent: "dog is a puppy", beforeInput: "A"},
  {id: 29, options: {option1: "little", option2: "small"}, answer: "small", done: false, textContent: "", beforeInput: "Rooms in the house were"}
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

    if (question.beforeInput) {
      const beforeLabel = document.createElement('label');
      beforeLabel.className = "fill-in-blanks-label";
      beforeLabel.setAttribute("for", `drop-down-${question.id}`);
      beforeLabel.textContent = question.beforeInput;
      quizContainer.appendChild(beforeLabel);
    }

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
createFillInBlanksQuiz(fillInQuiz, "three");
createFillInBlanksQuiz(fillInQuiz2, "five");
createFillInBlanksQuiz(fillInQuiz3, "five")
createQuiz(questions2, "six");
createQuiz(questions3, "six");
createQuiz(questions4, "six");
createQuiz(questions5, "six");
createQuiz(questions6, "six");
createQuiz(questions7, "six");
createQuiz(questions8, "six");
createQuiz(questions9, "six");
createQuiz(questions10, "six");
createQuiz(questions11, "six");
createQuiz(questions12, "six");
createQuiz(questions13, "six");
createQuiz(questions14, "six");
createQuiz(questions15, "six");
createQuiz(questions16, "six");
createQuiz(questions17, "six");
createQuiz(questions18, "seven");


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
      localStorage.setItem('lessons', JSON.stringify({1: 'complete', 2: 'complete', 3: 'complete', 4: 'complete', 5: "complete", 6: "complete", 7: "unlocked" }));
      localStorage.setItem('lesson6Status', lessonIsDone);
    }
  })
}

finishButton.addEventListener('click', congratulate);