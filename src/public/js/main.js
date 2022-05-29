const { fromEvent } = rxjs
const { debounceTime } = rxjs.operators

const btnMinus = document.querySelector('#minus')
const btnPlus = document.querySelector('#plus')
const counter = document.querySelector('.counter')

let i = 0

const [ onBtnMinusClick$, onBtnPlusClick$ ] = [ fromEvent(btnMinus, 'click'), fromEvent(btnPlus, 'click') ]

fromEvent(window, 'load').subscribe(
  counter.innerText = i
)

onBtnMinusClick$
.subscribe(
  () => {
    counter.innerText = --i
  }
)

onBtnPlusClick$
.subscribe(
  () => {
    counter.innerText = ++i
  }
)
