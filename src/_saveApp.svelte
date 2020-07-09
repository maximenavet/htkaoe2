<style>
	div {
		display: flex;
		height: 100%;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.keys {
		display: flex;
		flex-direction: row;
	}

	.loose {
		background-color: #ff3e00;
	}

	.win {
		background-color: #00ff00;
	}

	kbd {
		background-color: #eee;
		border-radius: 4px;
		font-size: 6em;
		padding: 0.2em 0.5em;
		border-top: 5px solid rgba(255,255,255,0.5);
		border-left: 5px solid rgba(255,255,255,0.5);
		border-right: 5px solid rgba(0,0,0,0.2);
		border-bottom: 5px solid rgba(0,0,0,0.2);
		color: #555;
	}
</style>

<script>
	/*
		Keep listening until a wrong key is typed
		If a wrong key is typed set a new goal
	*/
	import { BehaviorSubject, Subject, combineLatest, timer, Observable } from 'rxjs'
	import { map, take, bufferCount, tap, scan, filter, takeUntil, switchMap, takeWhile, last, startWith, pluck, delay } from 'rxjs/operators'
	import { getRandomInt } from './utils';

	let files;

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

	const getRandomGoal = () => goals[getRandomInt(0, goals.length - 1)];

	let flashStatus = null;

	const anyKeyPresses$ = new Subject();
	const goal$ = new BehaviorSubject(getRandomGoal(goals))
	const score$ = new Subject()

	const win$ = score$.pipe(
		scan((acc, state) =>  acc + (state.status === 'win' ? 1 : 0) , 0),
		startWith(0)
	)

	const loose$ = score$.pipe(
		scan((acc, state) =>  acc + (state.status === 'loose' ? 1 : 0) , 0),
		startWith(0)
	)

	score$.pipe(
		startWith([]),
		scan((acc, value) => {
			return [ ...acc, value ]
		}),
	).subscribe(value => {
		console.log('score', value);
	})

	const recordCombo = goal => anyKeyPresses$.pipe(
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

	const comboEnd$ = goal$.pipe(switchMap(goal => recordCombo(goal)))

	const comboKeys$ = goal$.pipe(
		switchMap(goal => anyKeyPresses$.pipe(
			take(goal.keys.length),
			startWith([]),
			scan((acc, value) => {
				return [ ...acc, value ];
			})
		))
	)

	comboEnd$.subscribe(state => {
		score$.next(state);
	})

	const delayedComboEnd$ = comboEnd$.pipe(
		tap(state => { flashStatus = state.status }),
		delay(200)
	)
	
	delayedComboEnd$.subscribe(() => {
		flashStatus = null;
		goal$.next(getRandomGoal());
	})

	function handleKeydown(event) {
		event.key === 'Tab' && event.preventDefault()
		anyKeyPresses$.next(event.key)
	}

	import { inflateRaw } from 'pako/lib/inflate';	

	$: {
		if (files && files[0]) {
			const file = files[0]
			console.log('file', file)

			file.arrayBuffer().then(buffer => {
				var output = inflateRaw(buffer);
				console.log('output', output);
				var dataView = new DataView(output.buffer);
				
				var offset = 0;
				var version = dataView.getFloat32(offset, true);
				
				offset = offset + 4;
				var groupsLength = dataView.getInt32(offset, true);
				
				offset = offset + 4;
				var groupLength = dataView.getInt32(offset, true);
				
				offset = offset + 4;
				var keyId = dataView.getInt32(offset, true);
				
				offset = offset + 4;
				var stringId = dataView.getInt32(offset, true);

				offset = offset + 4;
				var ctrl = dataView.getInt8(offset, true);

				offset = offset + 1;
				var alt = dataView.getInt8(offset, true);

				offset = offset + 1;
				var shift = dataView.getInt8(offset, true);

				offset = offset + 1;
				var mouse = dataView.getInt8(offset, true);

				offset = offset + 1;
				var other = dataView.getInt32(offset, true);

				console.log('version', version)
				console.log('groupsLength', groupsLength)
				console.log('groupLength', groupLength)
				console.log('keyId', keyId)
				console.log('stringId', stringId)
				console.log('ctrl', ctrl)
				console.log('alt', alt)
				console.log('shift', shift)
				console.log('mouse', mouse)
				console.log('other', other)
			})

		}
	}


</script>

<svelte:window on:keydown={handleKeydown}/>

<div class="{flashStatus}" style="text-align: center">
	{#if files && files[0]}
		<p>
			{files[0].name}
		</p>
	{/if}
	<input type="file" bind:files>
	<p>Right: {$win$}</p>
	<p>Wrong: {$loose$}</p>
	<p>Goal: {$goal$.keys}</p>
	{#if $anyKeyPresses$}
		<div class="keys">
			{#each $comboKeys$ as keys}
				{#each keys as key}
					<kbd>{key === ' ' ? 'Space' : key}</kbd>
				{/each}
			{/each}
		</div>
		<!-- <p>STREAM: {$stream && $stream.keys}</p> -->
		<!-- <p>{status}</p> -->
	{:else}
		<p>Focus this window and press any key</p>
	{/if}
</div>