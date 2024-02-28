const submitButton = document.querySelector('.submit-button');
const textBar = document.querySelector('.text-bar');
const popupMessage = document.querySelector('.pop-up-message');
const messageBox = document.querySelector('.message-box')

const hideMessage = () => {
  popupMessage.classList.remove('popup-clicked');
  messageBox.innerHTML = "";
}

const showMessage = () => {
  popupMessage.classList.add('popup-clicked');
  const userName = textBar.value;
  const messageHeader = document.createElement('h2');
  messageHeader.classList.add('popup-header');
  messageHeader.innerText = `Welocme aboard, ${userName}!`;
  messageBox.appendChild(messageHeader);
  const messageText = document.createElement('p');
  messageText.classList.add('popup-text');
  messageText.innerText = 'Thank you for introducing yourself! I hope you have a great time learning English with us. Even though it might seem like a daunting and intimidating task you have nothing to worry about! We will be assisting you every step of the way. We are here to make this journey fun and exciting and show you that ANYONE can speak English. You do not have to think about the process, we will tell you exactly what to do, every day. So sit back, relax and let us take you on this exciting ride! Just please promise you will do your homework :)';
  messageBox.appendChild(messageText);
  const swearButton = document.createElement('button');
  swearButton.classList.add('swear-button');
  swearButton.innerText = 'Pinky swear';
  swearButton.onclick = hideMessage;
  messageBox.appendChild(swearButton);
}

submitButton.addEventListener('click', showMessage)