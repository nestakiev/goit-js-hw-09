import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    btnStart: document.querySelector('[data-start]'),
    daysCount: document.querySelector('[data-days]'),
    hoursCount: document.querySelector('[data-hours]'),
    minutesCount: document.querySelector('[data-minutes]'),
    secondsCount: document.querySelector('[data-seconds]'),
    input: document.querySelector('[id="datetime-picker"]'),
}

refs.btnStart.disabled = true;

let pickedDate = 0;
let intervalId = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const past = selectedDates[0].getTime() < options.defaultDate.getTime()
        if (past) {
            Notify.warning('Please choose a date in the future');
        } else {
            pickedDate = selectedDates[0].getTime();
            refs.btnStart.disabled = false;
        }       
    },
  };

flatpickr("#datetime-picker", options);

refs.btnStart.addEventListener('click', onStartTimer);

function onStartTimer() {    
    intervalId = setInterval(currentTimerValue, 1000);
    refs.btnStart.disabled = true;
    refs.input.disabled = true;
}

function currentTimerValue () {    
    const dateNow = Date.now();
    const differenceTime = pickedDate - dateNow;    
    const obj = convertMs(differenceTime);
    updateTimerCount(obj);
    if (differenceTime < 1000) {
        clearInterval(intervalId);
        Notify.success("It's your time!");
    }
}

function updateTimerCount ({ days, hours, minutes, seconds }) {
    refs.daysCount.textContent = addLeadingZero(days);
    refs.hoursCount.textContent = addLeadingZero(hours);
    refs.minutesCount.textContent = addLeadingZero(minutes);
    refs.secondsCount.textContent = addLeadingZero(seconds);
    }

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, 0);
}








