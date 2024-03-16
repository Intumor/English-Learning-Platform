const startButton = document.querySelector('.start-recording');
const deleteButton = document.querySelector('.delete-recording');

let mediaRecorder;
let chunks = [];
let audioURL;

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
    startButton.textContent = "Start Recording"
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

startButton.addEventListener('click', startRecording);
/*deleteButton.addEventListener('click', deleteRecording);*/

const flashQuiz = [
  {}
]

const FlashCardQuizBox = document.querySelector('.flashcard-quiz');

const createFlashQuiz = () => {
  const FlashCard = document.createElement('img');
  FlashCard.setAttribute('src', "https://static.vecteezy.com/system/resources/previews/017/038/754/original/cartoon-little-boy-waving-hand-free-vector.jpg");
  FlashCard.className = "flashcard";
  const buttonsBox = document.createElement('div');
  buttonsBox.className = "buttons-container"

  const option1 = document.createElement('div');
  option1.textContent = "Good morning";
  option1.className = "option";

  const option2 = document.createElement('div');
  option2.textContent = "Good morning";
  option2.className = "option";

  const option3 = document.createElement('div');
  option3.textContent = "Good morning";
  option3.className = "option";

  const option4 = document.createElement('div');
  option4.textContent = "Good morning";
  option4.className = "option";

  FlashCardQuizBox.appendChild(FlashCard);
  FlashCardQuizBox.appendChild(buttonsBox);
  buttonsBox.appendChild(option1);
  buttonsBox.appendChild(option2);
  buttonsBox.appendChild(option3);
  buttonsBox.appendChild(option4);
}

createFlashQuiz()
