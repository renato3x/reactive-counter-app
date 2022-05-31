const { fromEvent, Observable, BehaviorSubject } = rxjs

let i = 0

const onBtnPlusClick$ = fromEvent(document.querySelector('#plus'), 'click') // create an observable for event listener
const onBtnMinusClick$ = fromEvent(document.querySelector('#minus'), 'click')
const numberEmitter$ = new BehaviorSubject(i)

function increment() {
  numberEmitter$.next(++i)
}

function decrement() {
  numberEmitter$.next(--i)
}

function setValueInCounter(value) {
  document.querySelector('.counter').innerText = value
}

onBtnPlusClick$.subscribe(increment)
onBtnMinusClick$.subscribe(decrement)
numberEmitter$.subscribe(setValueInCounter)
