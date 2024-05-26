let lessonIsDone = localStorage.getItem('lesson9Status');
let userName = localStorage.getItem('username');

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

const vocabularyQuiz = [
  {
    index: 0,
    rectangles: true,
    taskText: "Find all the rooms",
    newWordsText: "room - habitacion",
    selected: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false},
    answer: {1: true, 2: true, 3: true, 4: true, 5: true, 6: true, 7: true, 8: true},
    correct: false
  },
  {
    index: 1,
    rectangles: true,
    taskText: "Find the bathroom",
    newWordsText: "bathroom - baño",
    selected: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false},
    answer: {1: false, 2: false, 3: false, 4: false, 5: false, 6: true, 7: false, 8: false},
    correct: false
  },
  {
    index: 2,
    rectangles: true,
    taskText: "Find the kitchen",
    newWordsText: "kitchen - cocina",
    selected: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false},
    answer: {1: false, 2: false, 3: false, 4: false, 5: true, 6: false, 7: false, 8: false},
    correct: false
  },
  {
    index: 3,
    rectangles: true,
    taskText: "Find the bedroom",
    newWordsText: "bedroom - dormitorio",
    selected: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false},
    answer: {1: false, 2: true, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false},
    correct: false
  },
  {
    index: 4,
    rectangles: true,
    taskText: "Find the office",
    newWordsText: "office - oficina",
    selected: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false},
    answer: {1: true, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false},
    correct: false
  },
  {
    index: 5,
    rectangles: true,
    taskText: "Find the basement",
    newWordsText: "basement - sótano",
    selected: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false},
    answer: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: true},
    correct: false
  },
  {
    index: 6,
    rectangles: true,
    taskText: "Find the balcony",
    newWordsText: "balcony - balcón",
    selected: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false},
    answer: {1: false, 2: false, 3: true, 4: false, 5: false, 6: false, 7: false, 8: false},
    correct: false
  },
  {
    index: 7,
    rectangles: true,
    taskText: "Find the living room",
    newWordsText: "living room - sala de estar",
    selected: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false},
    answer: {1: false, 2: false, 3: false, 4: true, 5: false, 6: false, 7: false, 8: false},
    correct: false
  },
  {
    index: 8,
    rectangles: true,
    taskText: "Find the hallway",
    newWordsText: "hallway - pasillo",
    selected: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false},
    answer: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: true, 8: false},
    correct: false
  },
  {
    index: 9,
    rectangles: true,
    taskText: "Find all the rooms with a ceiling",
    newWordsText: "ceiling - techo",
    selected: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false},
    answer: {1: true, 2: true, 3: false, 4: true, 5: true, 6: true, 7: true, 8: true},
    correct: false,
  },
  {
    index: 10,
    rectangles: true,
    taskText: "Find all the rooms with only one door",
    newWordsText: "door - puerta",
    selected: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false},
    answer: {1: true, 2: false, 3: true, 4: false, 5: false, 6: true, 7: false, 8: true},
    correct: false,
  },
  {
    index: 11,
    rectangles: true,
    taskText: "Find all the rooms with a chandelier",
    newWordsText: "chandelier - araña",
    selected: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false},
    answer: {1: false, 2: true, 3: false, 4: true, 5: true, 6: false, 7: true, 8: false},
    correct: false,
  },
  {
    index: 12,
    rectangles: true,
    taskText: "Find all the rooms with a closet",
    newWordsText: "closet - armario",
    selected: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false},
    answer: {1: false, 2: true, 3: false, 4: false, 5: false, 6: false, 7: true, 8: false},
    correct: false,
  },
  {
    index: 13,
    rectangles: true,
    taskText: "Find the room with a bird",
    newWordsText: "bird - pajaro",
    selected: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false},
    answer: {1: false, 2: false, 3: true, 4: false, 5: false, 6: false, 7: false, 8: false},
    correct: false,
  },
  {
    index: 14,
    rectangles: true,
    taskText: "Find the room with an umbrella",
    newWordsText: "umbrella - paraguas",
    selected: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false},
    answer: {1: false, 2: false, 3: true, 4: false, 5: false, 6: false, 7: false, 8: false},
    correct: false,
  },
  {
    index: 15,
    rectangles: true,
    taskText: "Find the room with a toilet",
    newWordsText: "toilet - inodoro",
    selected: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false},
    answer: {1: false, 2: false, 3: false, 4: false, 5: false, 6: true, 7: false, 8: false},
    correct: false,
  },
  {
    index: 16,
    rectangles: true,
    taskText: "Find all the rooms with a painting",
    newWordsText: "painting - pintura",
    selected: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false},
    answer: {1: false, 2: true, 3: false, 4: false, 5: false, 6: false, 7: true, 8: false},
    correct: false,
  },
  {
    index: 17,
    rectangles: true,
    taskText: "Find the room with a dog",
    newWordsText: "dog - perro",
    selected: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false},
    answer: {1: false, 2: false, 3: false, 4: true, 5: false, 6: false, 7: false, 8: false},
    correct: false,
  },
  {
    index: 18,
    rectangles: true,
    taskText: "Find the room with a computer",
    newWordsText: "computer - computadora",
    selected: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false},
    answer: {1: true, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false},
    correct: false,
  },
  {
    index: 19,
    rectangles: true,
    taskText: "Find the room with a TV",
    newWordsText: "TV - televisor",
    selected: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false},
    answer: {1: false, 2: false, 3: false, 4: true, 5: false, 6: false, 7: false, 8: false},
    correct: false,
  },
  {
    index: 20,
    rectangles: true,
    taskText: "Find the room with a phone",
    newWordsText: "phone - teléfono",
    selected: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false},
    answer: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: true, 8: false},
    correct: false,
  },
  {
    index: 21,
    rectangles: true,
    taskText: "Find the room with a bed",
    newWordsText: "bed - cama",
    selected: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false},
    answer: {1: false, 2: true, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false},
    correct: false,
  },
  {
    index: 22,
    rectangles: true,
    taskText: "Find the room with a sink",
    newWordsText: "sink - lavabo",
    selected: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false},
    answer: {1: false, 2: false, 3: false, 4: false, 5: false, 6: true, 7: false, 8: false},
    correct: false,
  },
  {
    index: 23,
    rectangles: true,
    taskText: "Find the room with a fishtank",
    newWordsText: "fishtank - acuario",
    selected: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false},
    answer: {1: true, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false},
    correct: false,
  },
  {
    index: 24,
    rectangles: true,
    taskText: "Find the room with an iron",
    newWordsText: "iron - plancha",
    selected: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false},
    answer: {1: false, 2: true, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false},
    correct: false,
  },
  {
    index: 25,
    rectangles: true,
    taskText: "Find the room with a fridge",
    newWordsText: "fridge - refrigerador",
    selected: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false},
    answer: {1: false, 2: false, 3: false, 4: false, 5: true, 6: false, 7: false, 8: false},
    correct: false,
  },
  {
    index: 26,
    rectangles: true,
    taskText: "Find the room with a washing machine",
    newWordsText: "washing machine - lavadora",
    selected: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false},
    answer: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: true},
    correct: false,
  },
  {
    index: 27,
    rectangles: true,
    taskText: "Find the room with a bathtub",
    newWordsText: "bathtub - bañera",
    selected: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false},
    answer: {1: false, 2: false, 3: false, 4: false, 5: false, 6: true, 7: false, 8: false},
    correct: false,
  },
  {
    index: 28,
    rectangles: true,
    taskText: "Find the room with a microwave",
    newWordsText: "microwave - microondas",
    selected: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false},
    answer: {1: false, 2: false, 3: false, 4: false, 5: true, 6: false, 7: false, 8: false},
    correct: false,
  },
  {
    index: 29,
    rectangles: true,
    taskText: "",
    newWordsText: "",
    buttonValue: "Play again",
    selected: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false},
    answer: {1: false, 2: false, 3: false, 4: false, 5: true, 6: false, 7: false, 8: false},
    correct: false,
  },
]

let index = 0;

const createVocabularyQuiz = (quizArray) => {
  const vocabularyQuiz = document.querySelector(".find-objects-quiz");
  const imageHolder = document.querySelector(".image-holder");

  let fullscreenButton = document.querySelector(".fullscreen-icon")

    if (quizArray[index].rectangles) {
      const rectangleOffice = document.createElement("div");
      rectangleOffice.className = "rectangle-office";

      const rectangleBedroom = document.createElement("div");
      rectangleBedroom.className = "rectangle-bedroom";

      const rectangleBalcony = document.createElement("div");
      rectangleBalcony.className = "rectangle-balcony";

      const rectangleLivingRoom = document.createElement("div");
      rectangleLivingRoom.className = "rectangle-living-room";

      const rectanglekitchen = document.createElement("div");
      rectanglekitchen.className = "rectangle-kitchen";

      const rectangleBathroom = document.createElement("div");
      rectangleBathroom.className = "rectangle-bathroom";

      const rectangleHall = document.createElement("div");
      rectangleHall.className = "rectangle-hall";

      const rectangleBasement = document.createElement("div");
      rectangleBasement.className = "rectangle-basement";

      const taskAssigner = document.createElement("div");
      taskAssigner.className = "task-assigner";

      const taskText = document.createElement("p");
      taskText.className = "task-text";
      taskText.textContent = `${quizArray[index].taskText}`

      const newWords = document.createElement("p");
      newWords.className = "new-words";
      newWords.id = "task-words"
      newWords.textContent = `${quizArray[index].newWordsText}`

      const submitButton = document.createElement("button")
      submitButton.className = "next-button"
      submitButton.textContent = "Submit"

      if (quizArray[index].buttonValue) {
        submitButton.textContent = `${quizArray[index].buttonValue}`
      }

      vocabularyQuiz.appendChild(taskAssigner)
      imageHolder.appendChild(rectangleOffice)
      imageHolder.appendChild(rectangleBedroom)
      imageHolder.appendChild(rectangleBalcony)
      imageHolder.appendChild(rectangleLivingRoom)
      imageHolder.appendChild(rectanglekitchen)
      imageHolder.appendChild(rectangleBathroom)
      imageHolder.appendChild(rectangleHall)
      imageHolder.appendChild(rectangleBasement)
      taskAssigner.appendChild(taskText)
      taskAssigner.appendChild(newWords)

      if (quizArray[index].taskText === "") {
        taskAssigner.removeChild(taskText)
      }

      if (quizArray[index].newWordsText === "") {
        taskAssigner.removeChild(newWords)
        const congratsLine = document.createElement("p")
        congratsLine.className = "congrats-line"
        congratsLine.textContent = "Awesome job!"
        taskAssigner.appendChild(congratsLine)
      }

      taskAssigner.appendChild(submitButton)

      const toggleFullscreen = () => {
        imageHolder.classList.toggle("widened")
        taskText.classList.toggle("smaller-task-text")
        taskAssigner.classList.toggle("small-task-assigner")
        fullscreenButton.classList.toggle("fullscreen-icon")
        fullscreenButton.classList.toggle("exit-full-screen")
        rectangleOffice.classList.toggle("rectangle-office-fullscreen")
        rectangleBedroom.classList.toggle("rectangle-bedroom-fullscreen")
        rectangleBalcony.classList.toggle("rectangle-balcony-fullscreen")
        rectangleLivingRoom.classList.toggle("rectangle-living-room-fullscreen")
        rectanglekitchen.classList.toggle("rectangle-kitchen-fullscreen")
        rectangleBathroom.classList.toggle("rectangle-bathroom-fullscreen")
        rectangleHall.classList.toggle("rectangle-hall-fullscreen")
        rectangleBasement.classList.toggle("rectangle-basement-fullscreen")
        submitButton.classList.toggle("next-button-fullscreen")
      }

      const changeObjectColor = (event) => {
        const rectangle = event.target
        rectangle.classList.toggle("rectangle-clicked")
      }

      if (!fullscreenButton) {
        fullscreenButton = document.querySelector(".exit-full-screen")
        taskText.classList.toggle("smaller-task-text")
        taskAssigner.classList.toggle("small-task-assigner")
        rectangleOffice.classList.toggle("rectangle-office-fullscreen")
        rectangleBedroom.classList.toggle("rectangle-bedroom-fullscreen")
        rectangleBalcony.classList.toggle("rectangle-balcony-fullscreen")
        rectangleLivingRoom.classList.toggle("rectangle-living-room-fullscreen")
        rectanglekitchen.classList.toggle("rectangle-kitchen-fullscreen")
        rectangleBathroom.classList.toggle("rectangle-bathroom-fullscreen")
        rectangleHall.classList.toggle("rectangle-hall-fullscreen")
        rectangleBasement.classList.toggle("rectangle-basement-fullscreen")
        submitButton.classList.toggle("next-button-fullscreen")
      }

      fullscreenButton.addEventListener("click", toggleFullscreen)

      const checkResults = (userSelection, correctAnswer) => {
        if (submitButton.textContent === "Next") {
          index++
          submitButton.textContent = "Submit"
          vocabularyQuiz.removeChild(taskAssigner)
          imageHolder.removeChild(rectangleOffice)
          imageHolder.removeChild(rectangleBedroom)
          imageHolder.removeChild(rectangleBalcony)
          imageHolder.removeChild(rectangleLivingRoom)
          imageHolder.removeChild(rectanglekitchen)
          imageHolder.removeChild(rectangleBathroom)
          imageHolder.removeChild(rectangleHall)
          imageHolder.removeChild(rectangleBasement)
          fullscreenButton.removeEventListener("click", toggleFullscreen)
          createVocabularyQuiz(quizArray)
          return
        }

        if (submitButton.textContent === "Try again") {
          imageHolder.appendChild(rectangleOffice)
          imageHolder.appendChild(rectangleBedroom)
          imageHolder.appendChild(rectangleBalcony)
          imageHolder.appendChild(rectangleLivingRoom)
          imageHolder.appendChild(rectanglekitchen)
          imageHolder.appendChild(rectangleBathroom)
          imageHolder.appendChild(rectangleHall)
          imageHolder.appendChild(rectangleBasement)
          submitButton.textContent = "Submit"
          vocabularyQuiz.removeChild(taskAssigner)
          imageHolder.removeChild(rectangleOffice)
          imageHolder.removeChild(rectangleBedroom)
          imageHolder.removeChild(rectangleBalcony)
          imageHolder.removeChild(rectangleLivingRoom)
          imageHolder.removeChild(rectanglekitchen)
          imageHolder.removeChild(rectangleBathroom)
          imageHolder.removeChild(rectangleHall)
          imageHolder.removeChild(rectangleBasement)
          fullscreenButton.removeEventListener("click", toggleFullscreen)
          quizArray[index].selected[1] = false
          quizArray[index].selected[2] = false
          quizArray[index].selected[3] = false
          quizArray[index].selected[4] = false
          quizArray[index].selected[5] = false
          quizArray[index].selected[6] = false
          quizArray[index].selected[7] = false
          quizArray[index].selected[8] = false
          createVocabularyQuiz(quizArray)
          return;
        }

        if (submitButton.textContent === "Play again") {
          submitButton.textContent = "Submit"
          vocabularyQuiz.removeChild(taskAssigner)
          imageHolder.removeChild(rectangleOffice)
          imageHolder.removeChild(rectangleBedroom)
          imageHolder.removeChild(rectangleBalcony)
          imageHolder.removeChild(rectangleLivingRoom)
          imageHolder.removeChild(rectanglekitchen)
          imageHolder.removeChild(rectangleBathroom)
          imageHolder.removeChild(rectangleHall)
          imageHolder.removeChild(rectangleBasement)
          for (let i = 0; i < quizArray.length; i++) {
            quizArray[i].selected[1] = false
            quizArray[i].selected[2] = false
            quizArray[i].selected[3] = false
            quizArray[i].selected[4] = false
            quizArray[i].selected[5] = false
            quizArray[i].selected[6] = false
            quizArray[i].selected[7] = false
            quizArray[i].selected[8] = false
            quizArray[i].correct = false
          }
          index = 0
          createVocabularyQuiz(quizArray)
          return;
        }

        const userInput = []
        const correctAnswerArr = []
        for (const prop in userSelection) {
          userInput.push(userSelection[prop])
        }

        for (const prop in correctAnswer) {
          correctAnswerArr.push(correctAnswer[prop])
        }

        const userAnswer = userInput.join("")
        const correctAnswer2 = correctAnswerArr.join("")

        if (userAnswer === correctAnswer2) {
          quizArray[index].correct = true
          submitButton.textContent = "Next"

          rectangleOffice.classList.remove("rectangle-clicked")
          rectangleBedroom.classList.remove("rectangle-clicked")
          rectangleBalcony.classList.remove("rectangle-clicked")
          rectangleLivingRoom.classList.remove("rectangle-clicked")
          rectanglekitchen.classList.remove("rectangle-clicked")
          rectangleBathroom.classList.remove("rectangle-clicked")
          rectangleHall.classList.remove("rectangle-clicked")
          rectangleBasement.classList.remove("rectangle-clicked")

          if (quizArray[index].answer[1]) {
            rectangleOffice.classList.add("rectangle-correct")
          } 
          
          if (quizArray[index].answer[2]) {
            rectangleBedroom.classList.add("rectangle-correct")
          }
          
          if (quizArray[index].answer[3]) {
            rectangleBalcony.classList.add("rectangle-correct")
          }
          
          if (quizArray[index].answer[4]) {
            rectangleLivingRoom.classList.add("rectangle-correct")
          }
          
          if (quizArray[index].answer[5]) {
            rectanglekitchen.classList.add("rectangle-correct")
          }
          
          if (quizArray[index].answer[6]) {
            rectangleBathroom.classList.add("rectangle-correct")
          }
          
          if (quizArray[index].answer[7]) {
            rectangleHall.classList.add("rectangle-correct")
          }
          
          if (quizArray[index].answer[8]) {
            rectangleBasement.classList.add("rectangle-correct")
          }

          const correctLine = document.createElement("p");
          correctLine.className = "correct-line";
          correctLine.textContent = "Correct!";
          taskAssigner.appendChild(correctLine);
        } else {
          const incorrectLine = document.createElement("p");
          incorrectLine.className = "incorrect-line";
          incorrectLine.textContent = "Wrong";
          taskAssigner.appendChild(incorrectLine);
          submitButton.textContent = "Try again"

          rectangleOffice.classList.remove("rectangle-clicked")
          rectangleBedroom.classList.remove("rectangle-clicked")
          rectangleBalcony.classList.remove("rectangle-clicked")
          rectangleLivingRoom.classList.remove("rectangle-clicked")
          rectanglekitchen.classList.remove("rectangle-clicked")
          rectangleBathroom.classList.remove("rectangle-clicked")
          rectangleHall.classList.remove("rectangle-clicked")
          rectangleBasement.classList.remove("rectangle-clicked")

          imageHolder.removeChild(rectangleOffice)
          imageHolder.removeChild(rectangleBedroom)
          imageHolder.removeChild(rectangleBalcony)
          imageHolder.removeChild(rectangleLivingRoom)
          imageHolder.removeChild(rectanglekitchen)
          imageHolder.removeChild(rectangleBathroom)
          imageHolder.removeChild(rectangleHall)
          imageHolder.removeChild(rectangleBasement)
        }
      }

      submitButton.addEventListener("click", () => {
        checkResults(quizArray[index].selected, quizArray[index].answer)
      })

      const toggleSelected = (selectedItem) => {
        if (selectedItem) {
          return false
        } else {
          return true
        }
      }

      const changeReactangles = (event, number) => {
        if (quizArray[index].correct) {
          console.log("not added")
          return;
        } else {
          console.log("added")
          changeObjectColor(event)
          quizArray[index].selected[number] = toggleSelected(quizArray[index].selected[number])
        }
      }

      console.log("gotetms")
      rectangleOffice.addEventListener("click", (event) => {
        console.log("triggered")
        changeReactangles(event, 1)
      })

      rectangleBedroom.addEventListener("click", (event) => {
        changeReactangles(event, 2)
      })

      rectangleBalcony.addEventListener("click", (event) => {
        changeReactangles(event, 3)
      })

      rectangleLivingRoom.addEventListener("click", (event) => {
        changeReactangles(event, 4)
      })

      rectanglekitchen.addEventListener("click", (event) => {
        changeReactangles(event, 5)
      })

      rectangleBathroom.addEventListener("click", (event) => {
        changeReactangles(event, 6)
      })

      rectangleHall.addEventListener("click", (event) => {
        changeReactangles(event, 7)
      })

      rectangleBasement.addEventListener("click", (event) => {
        changeReactangles(event, 8)
      })
    } else {

    }
  }

createVocabularyQuiz(vocabularyQuiz)

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
      localStorage.setItem('lessons', JSON.stringify({1: 'complete', 2: 'complete', 3: 'complete', 4: 'complete', 5: "complete", 6: "complete", 7: "complete", 8: "complete", 9: "complete", 10: "unlocked"}));
      localStorage.setItem('lesson9Status', lessonIsDone);
    }
  })
}