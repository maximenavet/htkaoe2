import { Subject } from 'rxjs';
import { scan, startWith, count } from 'rxjs/operators';

export const score$ = new Subject()

export const win$ = score$.pipe(
  scan((acc, state) =>  acc + (state.status === 'win' ? 1 : 0) , 0),
  startWith(0)
)

export const loose$ = score$.pipe(
  scan((acc, state) =>  acc + (state.status === 'loose' ? 1 : 0) , 0),
  startWith(0)
)

export const total$ = score$.pipe(
  scan((acc) =>  acc + 1, 0),
  startWith(0)
)
