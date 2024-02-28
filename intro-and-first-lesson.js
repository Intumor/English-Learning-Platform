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
  messageHeader.innerText = `Welocme aboard, ${userName}!`;
  messageHeader.style.fontSize = '3rem';
  messageHeader.style.textAlign = 'center';
  messageHeader.style.letterSpacing = '0.3rem'
  messageBox.appendChild(messageHeader);
  const messageText = document.createElement('p');
  messageText.innerText = 'Thank you for introducing yourself! I hope you have a great time learning English with us. Even though it might seem like a daunting and intimidating task you have nothing to worry about! We will be assisting you every step of the way. We are here to make this journey fun and exciting and show you that ANYONE can speak English. You do not have to think about the process, we will tell you exactly what to do, every day. So sit back, relax and let us take you on this exciting ride! Just please promise you will do your homework :)';
  messageText.style.fontSize = '2rem';
  messageText.style.lineHeight = '3.5rem';
  messageText.style.textAlign = 'center';
  messageBox.appendChild(messageText);
  const swearButton = document.createElement('button');
  swearButton.innerText = 'Pinky swear';
  swearButton.style.fontSize = '1.6rem';
  swearButton.style.margin = '2rem 1rem 2rem 1rem';
  swearButton.onclick = hideMessage;
  messageBox.appendChild(swearButton);
}

submitButton.addEventListener('click', showMessage)