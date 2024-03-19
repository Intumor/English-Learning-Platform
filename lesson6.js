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