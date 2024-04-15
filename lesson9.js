const fillInQuiz = [
  {id: 21, options: {option1: "there is", option2: "there are"}, answer: "there are", done: false, textContent: "cars", divider: 'remove', beforeInput: ""},
  {id: 22, options: {option1: "there is", option2: "there are"}, answer: "there are", done: false, textContent: "bears in the forest", beforeInput: ""},
  {id: 23, options: {option1: "there is", option2: "there are"}, answer: "there is", done: false, textContent: "a cat on the table", beforeInput: ""},
  {id: 24, options: {option1: "there was", option2: "there were"}, answer: "there was", done: false, textContent: "a problem", beforeInput: "Yesterday"},
  {id: 25, options: {option1: "there was", option2: "there were"}, answer: "there were", done: false, textContent: "people on the streets", beforeInput: ""},
  {id: 26, options: {option1: "there wasn't", option2: "there weren't"}, answer: "there wasn't", done: false, textContent: "a question", beforeInput: ""},
  {id: 27, options: {option1: "there will be", option2: "there was"}, answer: "there will be", done: false, textContent: "a book on this table", beforeInput: "Tomorrow"},
  {id: 28, options: {option1: "there will be", option2: "there is"}, answer: "there will be", done: false, textContent: "a good opportunity", beforeInput: "Tomorrow"},
  {id: 29, options: {option1: "is there", option2: "there is"}, answer: "is there", done: false, textContent: "a problem with my car?", beforeInput: ""},
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
    option.textContent = "";

    const option1 = document.createElement('option');
    option1.textContent = question.options.option1;
    option1.value = question.options.option1;
    
    const option2 = document.createElement('option');
    option2.textContent = question.options.option2;
    option2.value = question.options.option2;

    const option3 = document.createElement('option');
    option3.textContent = question.options.option3;
    option3.value = question.options.option3;

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
    dropDown.appendChild(option3);
    quizContainer.appendChild(label);

    if (!question.options.option3) {
      dropDown.removeChild(option3);
    }

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

createFillInBlanksQuiz(fillInQuiz, "one")


const questions = [
  {id: 30, answer: 'tom is talking to himself', answer2: "tom's talking to himself", done: false, textContent: 'Tom is talking to Tom', divider: 'remove'},
  {id: 31, answer: 'he loves himself', done: false, textContent: 'He loves him'},
  {id: 32, answer: 'she thought to herself', done: false, textContent: 'She thought to her'},
  {id: 33, answer: 'i think about myself', done: false, textContent: 'I think about me'},
  {id: 34, answer: 'we did it by ourselves', done: false, textContent: 'We did it by us'},
  {id: 35, answer: 'will george defend himself', answer2: 'will george defend himself?', done: false, textContent: 'Will George defend George?'},
  {id: 36, answer: 'i will see myself in the mirror', done: false, textContent: 'I will see me in the mirror'},
  {id: 37, answer: 'ask yourself a question', done: false, textContent: 'Ask you a question'}
]



const createQuiz = (questionsArr, num) => {
  const quizHeader = document.querySelector('.quiz-header');
  const section = document.querySelector(`#section-${num}`);
  const quiz = document.createElement('div');
  quiz.className = 'quiz';

  const header = document.createElement('h2')
  header.className = "quiz-header intro-header"
  header.textContent = "Rewrite the following sentences using reflexive pronouns:"
  quiz.appendChild(header);


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

createQuiz(questions, "two")


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

recordAnswer(1);

const fullscreenButton = document.querySelector(".fullscreen-icon")
const imageHolder = document.querySelector(".image-holder")
const taskText = document.querySelector(".task-text")
const rectangleBathroom = document.querySelector(".rectangle-bathroom")

const toggleFullscreen = () => {
  imageHolder.classList.toggle("widened")
  taskText.classList.toggle("smaller-task-text")
  fullscreenButton.classList.toggle("fullscreen-icon")
  fullscreenButton.classList.toggle("exit-sull-screen")
  rectangleBathroom.classList.toggle("rectangle-bathroom-fullscreen")
}

const changeObjectColor = (event) => {
  const rectangle = event.target
  rectangle.classList.toggle("rectangle-clicked")
}

fullscreenButton.addEventListener("click", toggleFullscreen)
rectangleBathroom.addEventListener("click", (event) => {
  changeObjectColor(event)
})