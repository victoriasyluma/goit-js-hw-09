import notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const { delay, step, amount } = event.target.elements;

  const firstDelayMs = Number(delay.value);
  const stepsDelayMs = Number(step.value);
  const amountOfSteps = Number(amount.value);

  if (amountOfSteps === 0) {
    return;
  }

  let totalDelay = firstDelayMs;

  const executePromise = ({ position, delay }) => {
    return createPromise(position, delay)
      .then(() => {
        notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${totalDelay}ms`
        );
      })
      .catch(() => {
        notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${totalDelay}ms`
        );
      })
      .finally(() => {
        totalDelay = totalDelay + stepsDelayMs;
      });
  };

  await executePromise({ position: 1, delay: firstDelayMs });

  for (let position = 2; position <= amountOfSteps; position++) {
    await executePromise({ position, delay: stepsDelayMs });
  }
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = { position, delay };

      if (shouldResolve) {
        resolve(result);

        return;
      }

      reject(result);
    }, delay);
  });
}
