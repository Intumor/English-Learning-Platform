let lessonIsDone = localStorage.getItem('lesson8Status');
let userName = localStorage.getItem('username');


const flashQuiz = [
  {index: 0, imgUrl: "./images/under.png", option1: "at the table", option2: "on the table", option3: "in the table", option4: "under the table", answer: "under the table", sentence: "The cat is"},

  {index: 1, imgUrl: "./images/to.jpg", option1: "for his owner", option2: "from his owner", option3: "to his owner", option4: "on his owner", answer: "to his owner", sentence: "The dog is running"},

  {index: 2, imgUrl: "./images/between.jpg", option1: "between the boxes", option2: "over the boxes", option3: "about the boxes", option4: "to the boxes", answer: "between the boxes", sentence: "The cat is"},

  {index: 3, imgUrl: "./images/for.png", option1: "from me", option2: "about me", option3: "in me", option4: "for me", answer: "for me", sentence: "please do it"},

  {index: 4, imgUrl: "./images/without.jpg", option1: "on sugar", option2: "over sugar", option3: "at sugar", option4: "without sugar", answer: "without sugar", sentence: "This coke is"},

  {index: 5, imgUrl: "./images/from.jpg", option1: "to the monster", option2: "from the monster", option3: "under the monster", option4: "in the monster", answer: "from the monster", sentence: "Scooby and Shaggy are running"},

  {index: 6, imgUrl: "./images/over.jpg", option1: "over the fence", option2: "under the fence", option3: "from the fence", option4: "to the fence", answer: "over the fence", sentence: "The dog is jumping"},

  {index: 7, imgUrl: "./images/about.jpg", option1: "over somebody", option2: "at somebody", option3: "on somebody", option4: "about somebody", answer: "about somebody", sentence: "The girls are talking"},

  {index: 8, imgUrl: "./images/in.jpg", option1: "on the box", option2: "in the box", option3: "at the box", option4: "over the box", answer: "in the box", sentence: "The baby fox is"},

  {index: 9, imgUrl: "./images/with.jpg", option1: "at his friend", option2: "without his friend", option3: "with his friend", option4: "for his friend", answer: "with his friend", sentence: "The boy is playing"},

  {index: 10, imgUrl: "./images/on.jpg", option1: "in the table", option2: "over the table", option3: "at the table", option4: "on the table", answer: "on the table", sentence: "The cat is"},

  {index: 11, imgUrl: "./images/at.jpg", option1: "at 4 o'clock", option2: "in 4 o'clock", option3: "on 4 o'clock", option4: "with 4 o'clock", answer: "at 4 o'clock", sentence: "i will meet you"}
]

const FlashCardQuizBox = document.querySelector('.flashcard-quiz');
  let index = 0;

const createFlashQuiz = (flashQuestions) => {

  const quizHeader = document.createElement('h2');
  quizHeader.className = 'quiz-header';
  quizHeader.textContent = 'Choose the correct option';

  const sentence = document.createElement('p')
  sentence.className = "sentence-header"
  sentence.textContent = `${flashQuestions[index].sentence}...`

  const FlashCard = document.createElement('img');
  FlashCard.setAttribute('src', `${flashQuestions[index].imgUrl}`);
  FlashCard.className = "flashcard";

  const buttonsBox = document.createElement('div');
  buttonsBox.className = "buttons-container"

  const option1 = document.createElement('div');
  option1.textContent = `${flashQuestions[index].option1}`;
  option1.className = "option";

  const option2 = document.createElement('div');
  option2.textContent = `${flashQuestions[index].option2}`;
  option2.className = "option";

  const option3 = document.createElement('div');
  option3.textContent = `${flashQuestions[index].option3}`;
  option3.className = "option";

  const option4 = document.createElement('div');
  option4.textContent = `${flashQuestions[index].option4}`;
  option4.className = "option";

  FlashCardQuizBox.appendChild(quizHeader)
  FlashCardQuizBox.appendChild(sentence)
  FlashCardQuizBox.appendChild(FlashCard);
  FlashCardQuizBox.appendChild(buttonsBox);
  buttonsBox.appendChild(option1);
  buttonsBox.appendChild(option2);
  buttonsBox.appendChild(option3);
  buttonsBox.appendChild(option4);

  const checkFlashAnswer = (answer, userAnswer, option) => {
    if (answer === userAnswer) {
      option.classList.add('turn-green');
      setTimeout(() => {
        FlashCardQuizBox.innerHTML = "";
        index++;
        if (index === 12) {
          flashQuizCongratulate();
          return;
        }
        createFlashQuiz(flashQuestions);
      }, 500)
    } else {
      option.classList.add('turn-red');
    }
  }

  option1.addEventListener('click', () => {
    checkFlashAnswer(flashQuestions[index].answer, option1.textContent, option1)
  });

  option2.addEventListener('click', () => {
    checkFlashAnswer(flashQuestions[index].answer, option2.textContent, option2)
  });

  option3.addEventListener('click', () => {
    checkFlashAnswer(flashQuestions[index].answer, option3.textContent, option3)
  });

  option4.addEventListener('click', () => {
    checkFlashAnswer(flashQuestions[index].answer, option4.textContent, option4)
  });

  const flashQuizCongratulate = () => {
    const congrats = document.createElement('h2');
    congrats.className = "flash-congrats-message";
    congrats.textContent = "Great job!";
    const tryAgain = document.createElement('button')
    tryAgain.textContent = "take the quiz again"
    tryAgain.addEventListener('click', () => {
      FlashCardQuizBox.innerHTML = "";
      index = 0;
      createFlashQuiz(flashQuestions);
    })
    FlashCardQuizBox.appendChild(congrats)
    FlashCardQuizBox.appendChild(tryAgain)
  }
}

createFlashQuiz(flashQuiz);


const fillInQuiz = [
  {id: 12, options: {option1: "saw", option2: "looked", option3: "watched"}, answer: "saw", done: false, textContent: "a beautiful cat yesterday", divider: 'remove', beforeInput: "I"},
  {id: 13, options: {option1: "see", option2: "look", option3: "watch"}, answer: "look", done: false, textContent: "at this picture"},
  {id: 14, options: {option1: "saw", option2: "looked", option3: "watched"}, answer: "watched", done: false, textContent: "a good movie", beforeInput: "Last night, we"},
  {id: 15, options: {option1: "saw", option2: "looked", option3: "watched"}, answer: "saw", done: false, textContent: "a family of squirrels in the park", beforeInput: "I"},
  {id: 16, options: {option1: "see", option2: "look", option3: "watch"}, answer: "look", done: false, textContent: "at me!", beforeInput: "Please"},
  {id: 17, options: {option1: "seing", option2: "looking", option3: "watching"}, answer: "watching", done: false, textContent: "a football game", beforeInput: "Me and my dad are"},
  {id: 18, options: {option1: "see", option2: "look", option3: "watch"}, answer: "watch", done: false, textContent: "the kids play", beforeInput: "She likes to"},
  {id: 19, options: {option1: "see", option2: "look", option3: "watch"}, answer: "see", done: false, textContent: "anything without my glasses", beforeInput: "I don't"},
  {id: 20, options: {option1: "see", option2: "look", option3: "watch"}, answer: "watch", done: false, textContent: "a movie tonight", beforeInput: "Let's"},
  {id: 20, options: {option1: "saw", option2: "looked", option3: "watched"}, answer: "watched", done: false, textContent: "the sunrise every morning", beforeInput: "Last Summer, we"},
]

const fillInQuiz2 = [
  {id: 21, options: {option1: "hear", option2: "listen"}, answer: "hear", done: false, textContent: "your music from my house", divider: 'remove', beforeInput: "I"},
  {id: 22, options: {option1: "hear", option2: "listen"}, answer: "listen", done: false, textContent: "to the teacher", beforeInput: "Please"},
  {id: 23, options: {option1: "hear", option2: "listen"}, answer: "hear", done: false, textContent: "what she said?", beforeInput: "Did you"},
  {id: 24, options: {option1: "hear", option2: "listen"}, answer: "hear", done: false, textContent: "the birds twittering at my window every morning", beforeInput: "I"},
  {id: 25, options: {option1: "hear", option2: "hear"}, answer: "listen", done: false, textContent: "to the instructor", beforeInput: "You need to"},
  {id: 26, options: {option1: "heard", option2: "listened"}, answer: "heard", done: false, textContent: "a strange noise from the kitchen", beforeInput: "I"},
  {id: 27, options: {option1: "hear", option2: "hear"}, answer: "hear", done: false, textContent: "anything with all this noise", beforeInput: "He doesn't"},
  {id: 28, options: {option1: "hearing", option2: "listening"}, answer: "listening", done: false, textContent: "to me? I need your attention!", beforeInput: "Are you"},
  {id: 29, options: {option1: "heard", option2: "listened"}, answer: "heard", done: false, textContent: "a great song yesterday", beforeInput: "I"},
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


createFillInBlanksQuiz(fillInQuiz, "three")
createFillInBlanksQuiz(fillInQuiz2, "four")


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
recordAnswer(2);


const questions = [
  {id: 30, answer: 'i will go to them with you', done: false, textContent: 'Como se dice "Voy a ir con ellos contigo"?', divider: 'remove'},
  {id: 31, answer: 'he made this shirt for me', done: false, textContent: 'Como se dice "Él hizo esta camisa para mí"?'},
  {id: 32, answer: 'i do not want to talk about it with him', done: false, textContent: 'Como se dice "No quiero hablar sobre eso con él"?'},
  {id: 33, answer: 'what you will tell me will be between us', done: false, textContent: 'Como se dice "Lo que me digas será entre nosotros"?'},
  {id: 34, answer: 'museum is far from me', done: false, textContent: 'Como se dice "El museo está lejos de mí"?'},
  {id: 35, answer: 'he wanted to talk about it with me', done: false, textContent: 'Como se dice "Él quería hablar sobre eso conmigo"?'},
  {id: 36, answer: 'i hope you will do it for me', done: false, textContent: 'Como se dice "Espero que lo hagas por mí"?'},
  {id: 37, answer: 'think about it', done: false, textContent: 'Como se dice "Piénsalo"?'}
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

createQuiz(questions, "six")


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
      localStorage.setItem('lessons', JSON.stringify({1: 'complete', 2: 'complete', 3: 'complete', 4: 'complete', 5: "complete", 6: "complete", 7: "complete", 8: "unlocked" }));
      localStorage.setItem('lesson7Status', lessonIsDone);
    }
  })
}

finishButton.addEventListener('click', congratulate);
