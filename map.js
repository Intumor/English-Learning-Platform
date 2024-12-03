let userName = localStorage.getItem('username');

if (userName) {
  const header = document.querySelector('h1');
  header.textContent = "";
  header.textContent = `¡Bienvenido de nuevo, ${userName}!`;
}

const completedLessons = {
  '1': 'unlocked',
  '2': 'locked',
  '3': 'locked',
  '4': 'locked',
  '5': 'locked',
  '6': 'locked',
  '7': 'locked',
  '8': 'locked',
  '9': 'locked',
  '10': 'locked',
  '11': 'locked',
  '12': 'locked',
  '13': 'locked',
  '14': 'locked',
  '15': 'locked',
  '16': 'locked'
}

const storedData = localStorage.getItem('lessons');
const lessonsList = JSON.parse(storedData);

for (const key in completedLessons) {
  if (lessonsList.hasOwnProperty(key)) {
    completedLessons[key] = lessonsList[key];
  }
}

const renderLessons = () => {
  for (let i = 1; i < 17; i++) {
    const lesson = document.querySelector(`#lesson${i}`);
    if (completedLessons[i] === 'unlocked') {
      lesson.classList.add('unlocked');
      const img = document.querySelector(`#icon${i}`);
      img.classList.add('hidden-img');
      const link = document.createElement('a');
      link.href = `lesson${i}.html`;
      link.appendChild(lesson);
      const map = document.querySelector('.map');
      map.appendChild(link)
    }

    if (completedLessons[i] === 'complete') {
      lesson.classList.add('complete');
    }

    if (completedLessons[i] === 'complete' && lesson.id !== 'lesson1') {
      const img = document.querySelector(`#icon${i}`);
      img.classList.add('hidden-img');
    }
  }
}

renderLessons();

