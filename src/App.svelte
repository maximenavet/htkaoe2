<style>
  :global(html, body) {
		padding: 0;
		margin: 0;
    color: white;
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
	}

  :global(*) {
    box-sizing: border-box;
  }

	.background {
		display: flex;
		height: 100%;
		align-items: center;
		justify-content: center;
    background: #2C264A;
	}

  .container {
    max-width: 700px;
    display: flex;
    flex-direction: column;
  }
</style>

<script>
  import Scoreboard from './Scoreboard.svelte';
  import Instructions from './Instructions.svelte';
  import Keys from './Keys.svelte';

  import { keyPress$ } from './keysStore';
  import { comboEnd$, delayedComboEnd$ } from './combo';
  import { score$ } from './score';
  import { goal$, getRandomGoal } from './goalStore';

  comboEnd$.subscribe(state => {
    console.log('state', state);
		score$.next(state);
  })
  
  delayedComboEnd$.subscribe(() => {
		goal$.next(getRandomGoal());
  })
  
  console.log(process.env.publicPath);


  function handleKeydown(event) {
    console.log('event', event.key)
    keyPress$.next(event.key)
	}
</script>

<svelte:window on:keydown={handleKeydown}/>

<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<div class='background'>
  <div class='container'>
    <Scoreboard />
    <Instructions />
    <Keys />
  </div>
</div>