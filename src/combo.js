import { switchMap, scan, take, startWith, map, takeWhile, last, tap, delay } from 'rxjs/operators';

import { goal$ } from './goalStore';
import { keyPress$ } from './keysStore';

export const comboKeys$ = goal$.pipe(
  switchMap(goal => keyPress$.pipe(
    take(goal.keys.length),
    startWith([]),
    scan((acc, value) => {
      return [ ...acc, value ];
    })
  ))
)

const recordCombo = goal => keyPress$.pipe(
  startWith({ goal, keys: [], index: 0, status: 'run', start: null, end: null }),
  scan((state, key) => {
    return {
      ...state,
      keys: [ ...state.keys, key ],
      start: state.start === null ? Date.now() : state.start
    }
  }),
  map(state => {
    const { keys } = state;
    const win = keys.length === goal.keys.length;
    const loose = keys[keys.length - 1] !== goal.keys[keys.length - 1];
    const status = (loose ? 'loose' : win ? 'win' : 'run');

    return {
      ...state,
      status,
      end: status !== 'run' ? Date.now() : state.end
    }
  }),
  takeWhile(({ status }) => status === 'run', true),
  last()
)

export const comboEnd$ = goal$.pipe(
  switchMap(goal => recordCombo(goal))
)

export const delayedComboEnd$ = comboEnd$.pipe(
  delay(200)
)
