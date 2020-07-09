<style>
  .container {
    display: flex;
    direction: row;
    margin-top: 20px;
  }

  .key {
    font-size: 2em;
    font-weight: bold;
    display: flex;
    background: #332E59;
    border-radius: 30px;
    box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.1);
    height: 100px;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    padding: 0px 40px;
  }
</style>

<script>
  import { comboKeys$ } from './combo';

  // console.log('keys$', keys$);

  comboKeys$.subscribe(state => {
    console.log('vite state', state);
  })
</script>

<div class='container'>
  {#if $comboKeys$.length !== 0 }
    {#each $comboKeys$ as key}
      <div class='key'>{key === null ? '...' : key}</div>
    {/each}
  {:else}
    <div class='key'>...</div>
  {/if}
</div>
