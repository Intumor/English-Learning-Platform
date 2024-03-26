


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