const newWordsContent = 
"buy (bought) - comprar <br>" +
"sell (sold) - vender <br>" +
"make (made) - hacer <br>" +
"choose (chose) - elegir <br>" +
"think (thought) - pensar"

const questions = [
  {type: 'new-word', content: newWordsContent},
  {id: 1, answer: 'i will buy coffee', done: false, textContent: 'Como se dice "Compraré café"?', divider: 'remove'},
  {id: 2, answer: 'he buys green tea', done: false, textContent: 'Como se dice "Él compra té verde"?'},
  {id: 3, answer: 'we bought a car', done: false, textContent: 'Como se dice "Compramos un coche"?'},
  {id: 4, answer: 'she will sell her phone', done: false, textContent: 'Como se dice "Ella venderá su teléfono"?'},
  {id: 5, answer: 'we sell our house', done: false, textContent: 'Como se dice "Nosotros vendemos nuestra casa"?'},
  {id: 6, answer: 'i sold my car', done: false, textContent: 'Como se dice "Vendí mi coche"?'},
  {id: 7, answer: 'i made you tea', done: false, textContent: 'Como se dice "Te hice té"?'},
  {id: 8, answer: 'we made it', done: false, textContent: 'Como se dice "Lo hicimos"?'},
  {id: 9, answer: 'he will make me a coffee', done: false, textContent: 'Como se dice "Él me hará un café"?'},
  {id: 10, answer: 'i choose you', done: false, textContent: 'Como se dice "Te elijo a ti"?'},
  {id: 11, answer: 'you will not choose him', done: false, textContent: 'Como se dice "No lo elegirás a él"?'},
  {id: 12, answer: 'we chose her', done: false, textContent: 'Como se dice "La elegimos a ella"?'},
  {id: 13, answer: 'i thought about it', done: false, textContent: 'Como se dice "Lo pensé"?'},
  {id: 14, answer: 'she will not think about you', done: false, textContent: 'Como se dice "Ella no pensará en ti"?'},
  {id: 15, answer: 'she will think about me', done: false, textContent: 'Como se dice "Ella pensará en mí"?'}
]

const explanation = 
"These verb below are all regular but there is one thing that you should know about. Some verbs change in funny way when you spell them. It will still follow th rules from before: \"When a verb is regular we add \"ed\" to the end of it\". So it will still be the case with a verb like \"try\", when you hear it will sound exactly how you expect it to sound with a \"d\" at the end, but spelling will change slightly. It will look like this \"tried\". Mostly it only affects verbs that end with \"y\", but not all of them, for example the verb \"play\" wil be \"played\".<br>" +
"Don't worry too much about it for now, we will gradualy go over them, and you will keep coming across them later on as well, so you'll memorize them with time. I just didn't want you to wrack your brain trying to figure out where it came from";

const newWordsContent2 = 
"pay - pagar <br>" +
"try - intentar <br>" +
"change - hacer <br>" +
"show - elegir <br>" +
"play - pensar <br>" + 
"turn - girar";

const questions2 = [
  {type: "explanation", text: explanation},
  {type: 'new-word', content: newWordsContent2},
  {id: 16, answer: 'i paid for it', done: false, textContent: 'Como se dice "Me gusta beber"?', divider: 'remove'},
  {id: 17, answer: 'she did not pay me', done: false, textContent: 'Como se dice "Me gusta ver"?'},
  {id: 18, answer: 'we will pay him', done: false, textContent: 'Como se dice "Quiero ir"?'},
  {id: 19, answer: 'i will try it', done: false, textContent: 'Como se dice "Voy a intentarlo"?'},
  {id: 20, answer: 'i tried it yesterday', done: false, textContent: 'Como se dice "Lo intenté ayer"?'},
  {id: 21, answer: 'he will try it tomorrow', done: false, textContent: 'Como se dice "Él lo intentará mañana"?'},
  {id: 22, answer: 'i changed', done: false, textContent: 'Como se dice "Cambié"?'},
  {id: 23, answer: 'he wants to change it', done: false, textContent: 'Como se dice "Él quiere cambiarlo"?'},
  {id: 24, answer: 'we did not change him', done: false, textContent: 'Como se dice "No lo cambiamos"?'},
  {id: 25, answer: 'they showed you something', done: false, textContent: 'Como se dice "Te mostraron algo"?'},
  {id: 26, answer: 'he will show his car', done: false, textContent: 'Como se dice "Él mostrará su coche"?'},
  {id: 27, answer: 'you do not show', done: false, textContent: 'Como se dice "No muestras"?'},
  {id: 28, answer: 'we played two days ago', answer2: "we played 2 days ago", done: false, textContent: 'Como se dice "Jugamos hace dos días"?'},
  {id: 29, answer: 'they will play in one week', answer2: "they will play in a week", done: false, textContent: 'Como se dice "Ellos jugarán en una semana"?'},
  {id: 30, answer: 'i want to play', done: false, textContent: 'Como se dice "Quiero jugar"?'}
]

const newWordsContent3 = 
"important - Importante <br>" +
"tired - Cansado"

const questions3 = [
  {type: 'new-word', content: newWordsContent3},
  {id: 31, answer: 'i am important', done: false, textContent: 'Como se dice "Yo soy importante"?', divider: 'remove'},
  {id: 32, answer: 'they will not be important', done: false, textContent: 'Como se dice "Ellos no serán importantes"?'},
  {id: 33, answer: 'are we important', answer2: "are we important?", done: false, textContent: 'Como se dice "¿Somos importantes?"?'},
  {id: 34, answer: 'he is not important', done: false, textContent: 'Como se dice "Él no es importante"?'},
  {id: 35, answer: 'you were important', done: false, textContent: 'Como se dice "Tú eras importante"?'},
  {id: 36, answer: 'he was tired', done: false, textContent: 'Como se dice "Él estaba cansado"?'},
  {id: 38, answer: 'am i tired', answer2: "am i tired?", done: false, textContent: 'Como se dice "¿Estoy cansado?"?'},
  {id: 39, answer: 'you will not be tired', done: false, textContent: 'Como se dice "No estarás cansado"?'},
  {id: 40, answer: 'they are not tired', done: false, textContent: 'Como se dice "Ellos no están cansados"?'},
  {id: 41, answer: 'was she tired', answer2: "was she tired?", done: false, textContent: 'Como se dice "¿Estaba cansada ella?"?'}
]

const newWordsContent4 = 
"drive - conducir <br>" +
"smile - sonreír <br>" +
"hide - esconder <br>" +
"knock - tocar"

const questions4 = [
  {type: 'new-word', content: newWordsContent4},
  {id: 42, answer: 'when you drive drive slowly', done: false, textContent: 'Como se dice "Cuando conduzcas, conduce lentamente"?', divider: 'remove'},
  {id: 43, answer: 'when she sees him she smiles', done: false, textContent: 'Como se dice "Cuando ella lo ve, sonríe"?'},
  {id: 44, answer: 'when i am here i am with you', done: false, textContent: 'Como se dice "Cuando estoy aquí, estoy contigo"?'},
  {id: 45, answer: 'when do you go home', answer2: "when do you go home?", done: false, textContent: 'Como se dice "¿Cuándo te vas a casa?"?'},
  {id: 46, answer: 'if she sees me i will hide', done: false, textContent: 'Como se dice "Si ella me ve, me esconderé"?'},
  {id: 47, answer: 'if we are with you we are strong', done: false, textContent: 'Como se dice "Si estamos contigo, somos fuertes"?'},
  {id: 48, answer: 'if you come knock', done: false, textContent: 'Como se dice "Si vienes, toca"?'},
  {id: 49, answer: 'if they play with me i will be happy', done: false, textContent: 'Como se dice "Si juegan conmigo, estaré feliz"?'},
]

const newWordsContent5 = 
"cook - cocinar <br>" +
"water - agua <br>" +
"eat - comer <br>" +
"find - buscar <br>" +
"steak - bistec <br>" +
"like that - asi"

const questions5 = [
  {type: 'new-word', content: newWordsContent5},
  {id: 50, answer: 'go', done: false, textContent: 'Como se dice "Ve"?', divider: 'remove'},
  {id: 51, answer: 'do not go', done: false, textContent: 'Como se dice "No te vayas"?'},
  {id: 52, answer: 'let us go', done: false, textContent: 'Como se dice "Vamos"?'},
  {id: 53, answer: 'do not talk to me', done: false, textContent: 'Como se dice "No me hables"?'},
  {id: 54, answer: 'do not watch this movie', done: false, textContent: 'Como se dice "No veas esta película"?'},
  {id: 55, answer: 'come', done: false, textContent: 'Como se dice "Ven"?'},
  {id: 56, answer: 'let us play', done: false, textContent: 'Como se dice "Juguemos"?'},
  {id: 57, answer: 'let us be happy', done: false, textContent: 'Como se dice "Seamos felices"?'},
  {id: 58, answer: 'let us go home', done: false, textContent: 'Como se dice "Vamos a casa"?'},
  {id: 59, answer: 'let us cook', done: false, textContent: 'Como se dice "Cocinemos"?'},
  {id: 60, answer: 'drink water', done: false, textContent: 'Como se dice "Bebe agua"?'},
  {id: 61, answer: 'do not eat hot dog', done: false, textContent: 'Como se dice "No comas hot dog"?'},
  {id: 62, answer: 'find a car', done: false, textContent: 'Como se dice "Encuentra un coche"?'},
  {id: 63, answer: 'do not cook this steak', done: false, textContent: 'Como se dice "No cocines este bistec"?'},
  {id: 64, answer: 'do not talk to me like that', done: false, textContent: 'Como se dice "No me hables así"?'},
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
      newWords.innerHTML = question.content;
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

  });
}

const title = 'Write three forms of adjectives like so: <br> <span class="exampleAdj">big - bigger - the biggest</span>'

const adjquestions = [
  {type: "subheader", title: title},
  {id: 42, adjective: "Dirty", slot1: "dirty", slot2: "dirtier", slot3: "the dirtiest", done: false, divider: "remove"},
  {id: 45, adjective: "Clean", slot1: "clean", slot2: "cleaner", slot3: "the cleanest", done: false},
  {id: 48, adjective: "Important", slot1: "important", slot2: "more important", slot3: "the most important", done: false},
  {id: 51, adjective: "Difficult", slot1: "difficult", slot2: "more difficult", slot3: "the most difficult", done: false},
  {id: 54, adjective: "Easy", slot1: "easy", slot2: "easier", slot3: "the easiest", done: false},
  {id: 57, adjective: "Good", slot1: "good", slot2: "better", slot3: "the best", done: false},
  {id: 60, adjective: "Bad", slot1: "bad", slot2: "worse", slot3: "the worst", done: false},
]


const createAdjectivesQuiz = (questionsArr, num) => {
  const quizHeader = document.querySelector('.quiz-header');
  const section = document.querySelector(`#section-${num}`);
  const quiz = document.createElement('div');
  quiz.className = 'quiz';

  questionsArr.forEach((question, index) => {

    if (question.type === 'subheader') {
      const subheader = document.createElement('p');
      subheader.className = "p-sub-header";
      subheader.innerHTML = question.title;
      section.appendChild(subheader);
      return;
    }

    if (question.type === 'new-word') {
      const newWords = document.createElement('p');
      newWords.className = 'new-words';
      newWords.textContent = question.content;
      section.appendChild(newWords);
      return;
    }

    const divider = document.createElement('hr');

    const adjective = document.createElement('p');
    adjective.textContent = question.adjective;
    adjective.className = "adj"

    const quizBox = document.createElement('div');
    quizBox.className = "adj-quiz-box";

    const input1 = document.createElement('input');
    input1.type = "text";
    input1.className = "adj-quiz-option";
    input1.id = `input-adj-${question.id}`;

    const input2 = document.createElement('input');
    input2.type = "text";
    input2.className = "adj-quiz-option";
    input2.id = `input-adj-${question.id + 1}`

    const input3 = document.createElement('input');
    input3.type = "text";
    input3.className = "adj-quiz-option";
    input3.id = `input-adj-${question.id + 2}`

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

    let input1Value = "";
    let input2Value = "";
    let input3Value = "";

    section.appendChild(quiz);
    quiz.appendChild(divider)
    quiz.appendChild(adjective);
    quiz.appendChild(quizBox);
    quiz.appendChild(checkBox);
    quizBox.appendChild(input1);
    quizBox.appendChild(input2);
    quizBox.appendChild(input3);
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
      let answer1 = input1.value.toLowerCase().trim().replace(/[.,]/g, '');
      let answer2 = input2.value.toLowerCase().trim().replace(/[.,]/g, '');
      let answer3 = input3.value.toLowerCase().trim().replace(/[.,]/g, '');

      input1.classList.remove('correct-adj')
      input1.classList.remove('incorrect-adj')
      input2.classList.remove('correct-adj')
      input2.classList.remove('incorrect-adj')
      input3.classList.remove('correct-adj')
      input3.classList.remove('incorrect-adj')

      if (answer1 === question.slot1) {
        input1.classList.add('correct-adj')
      } else {
        input1.classList.add('incorrect-adj')
      }

      if (answer2 === question.slot2) {
        input2.classList.add('correct-adj')
      } else {
        input2.classList.add('incorrect-adj')
      }

      if (answer3 === question.slot3) {
        input3.classList.add('correct-adj')
      } else {
        input3.classList.add('incorrect-adj')
      }

      question.done = true;
      input1Value = answer1;
      input2Value = answer2;
      input3Value = answer3;
    }

    submitButton.addEventListener('click', checkAnswer);

    input1.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        checkAnswer();
      }
    });

    input2.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        checkAnswer();
      }
    });

    input3.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        checkAnswer();
      }
    });


    input1.addEventListener('input', () => {
      if (input1.value !== input1Value) {
        input1.classList.remove('correct-adj')
        input1.classList.remove('incorrect-adj')
      }
    });

    input2.addEventListener('input', () => {
      if (input2.value !== input2Value) {
        input2.classList.remove('correct-adj')
        input2.classList.remove('incorrect-adj')
      }
    });

    input3.addEventListener('input', () => {
      if (input3.value !== input3Value) {
        input3.classList.remove('correct-adj')
        input3.classList.remove('incorrect-adj')
      }
    });



    const handleKeyDown = (event) => {
      console.log(event.key)
      if (event.shiftKey && event.key === 'ArrowRight') {
        event.preventDefault();
        const regex = /[0-9]/g;
        const currentIndex = Number(event.target.id.match(regex).join(''));
        const nextIndex = currentIndex + 1;
        const nextTextBar = document.querySelector(`#input-adj-${nextIndex}`);
        if (nextTextBar === null) {
          return;
        }
        nextTextBar.focus();
      }

      if (event.shiftKey && event.key === 'ArrowLeft') {
        event.preventDefault();
        const regex = /[0-9]/g;
        const currentIndex = Number(event.target.id.match(regex).join(''));
        const previousIndex = currentIndex - 1;
        const nextTextBar = document.querySelector(`#input-adj-${previousIndex}`);
        if (nextTextBar === null) {
          return;
        }
        nextTextBar.focus();
      }
    }


    input1.addEventListener('keydown', handleKeyDown);
    input2.addEventListener('keydown', handleKeyDown);
    input3.addEventListener('keydown', handleKeyDown);
  })
}

createQuiz(questions, "one")
createQuiz(questions2, "one")
createQuiz(questions3, "one")
createAdjectivesQuiz(adjquestions, "one")


const startButton = document.querySelector('.start-recording');
const deleteButton = document.querySelector('.delete-recording');
const audioBar = document.querySelector('.self-recording');

let mediaRecorder;
let chunks = [];
let audioURL;
let timeInterval;
let timerIsSet = false;
const timerBox = document.querySelector('.timer');
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
          chunks.push(event.data);
      };
      mediaRecorder.onstop = () => {
          const blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });
          const audioURL = URL.createObjectURL(blob);
          const audio = document.querySelector('audio');
          audio.src = audioURL;
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
    let secondsOne = 0;
    let secondsTwo = 0;
    let minutesOne = 0;
    let minutesTwo = 0;
    timerBox.textContent = `${minutesTwo}${minutesOne} : ${secondsTwo}${secondsOne}`;
    startButton.textContent = "Start Recording";
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
  const audio = document.querySelector('audio');
  audio.src = '';
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

createQuiz(questions4, "three")
createQuiz(questions5, "four")