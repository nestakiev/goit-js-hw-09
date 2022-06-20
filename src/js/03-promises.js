import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
}

refs.form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  const {
    elements: { delay, step, amount }
  } = event.currentTarget;

  let totalDelay = 0;
  let position = 0;

  for (let i = 0; i < amount.value; i += 1) {
    position += 1;
    totalDelay = Number(delay.value) + Number(step.value) * Number(i);
        
    PromiseResult(position, totalDelay);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) =>
  setTimeout(() => {  
  if (shouldResolve) {
    resolve(({position, delay}));
  } else {
    reject(({position, delay}));
  }  
}, delay));
}

function PromiseResult (position, totalDelay) {
  createPromise(position, totalDelay).then(({ position, delay}) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay}) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  })
}




