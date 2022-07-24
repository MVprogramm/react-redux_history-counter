import "./index.scss";
import store, { increment, decrement, reset } from './store.js';

const resultElem = document.querySelector(".counter__result");
const incrementBtn = document.querySelector('[data-action="increment"]');
const resetBtn = document.querySelector('[data-action="reset"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

const onIncrement = () => {
  store.dispatch(increment());
}
incrementBtn.addEventListener('click', onIncrement);

const onDecrement = () => {
  store.dispatch(decrement());
}
decrementBtn.addEventListener('click', onDecrement);

const onReset = () => {
  store.dispatch(reset());
}
resetBtn.addEventListener('click', onReset);

store.subscribe(() => {
  resultElem.textContent = store.getState().history.length === 0
    ? ""
    : `${store.getState().history.join('')} = ${store.getState().history.reduce((acc, num) => 
        acc = acc + Number(num), 0)}`;
});



