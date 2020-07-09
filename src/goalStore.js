import { BehaviorSubject } from 'rxjs';

import { getRandomInt } from './utils';

export const getRandomGoal = () => goals[getRandomInt(0, goals.length - 1)];

let goals = [
  {
    name: 'Go to Town Center',
    keys: ['h']
  },
  {
    name: 'Select all Town Center',
    keys: ['a', 'h', 'j']
  }
]

export const goal$ = new BehaviorSubject(getRandomGoal(goals))