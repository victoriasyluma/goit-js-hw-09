const body = document.querySelector('body');
const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');

let intervalId = null;

buttonStop.disabled = true;

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const changeBackgroundColor = () => {
  const color = getRandomHexColor();

  body.style.backgroundColor = color;
};

const toggleDisable = () => {
  buttonStart.disabled = !buttonStart.disabled;
  buttonStop.disabled = !buttonStop.disabled;
};

const startChanging = () => {
  toggleDisable();

  changeBackgroundColor();

  intervalId = setInterval(() => {
    changeBackgroundColor();
  }, 1000);
};

buttonStart.addEventListener('click', startChanging);

buttonStop.addEventListener('click', () => {
  toggleDisable();

  clearInterval(intervalId);
});
