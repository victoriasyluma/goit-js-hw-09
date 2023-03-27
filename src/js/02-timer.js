import flatpickr from 'flatpickr';
import notiflix from 'notiflix';

import 'flatpickr/dist/flatpickr.min.css';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const buttonStart = document.querySelector('button[data-start]');
const daysSpan = document.querySelector('span[data-days]');
const hoursSpan = document.querySelector('span[data-hours]');
const minutesSpan = document.querySelector('span[data-minutes]');
const secondsSpan = document.querySelector('span[data-seconds]');

buttonStart.disabled = true;

let selectedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: (selectedDates) => {
    selectedDate = selectedDates[0];

    const currentDate = new Date();

    const isPastDate = selectedDate < currentDate;

    if (isPastDate) {
      notiflix.Notify.failure('Please choose a date in the future');

      return;
    }

    buttonStart.disabled = false;
  },
};

buttonStart.addEventListener('click', () => {
  const intervalId = setInterval(() => {
    const currentDate = new Date();

    const millisecondsDiff = selectedDate.getTime() - currentDate.getTime();

    if (millisecondsDiff < 0) {
      clearInterval(intervalId);

      return;
    }

    const { days, hours, minutes, seconds } = convertMs(millisecondsDiff);

    daysSpan.textContent = days;
    hoursSpan.textContent = hours;
    minutesSpan.textContent = minutes;
    secondsSpan.textContent = seconds;

    buttonStart.disabled = true;
  }, 1000);
});

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
