<style>
  .scoreboard {
    color: #332E59;
    font-size: 2em;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #272042;
    padding: 20px 30px;
    border-radius: 30px;
    margin-bottom: 20px;
  }
</style>

<script>
  import { win$, total$ } from './score.js'
</script>

<div class='scoreboard'>
  <div>Score</div>
  <div>{$win$}/{$total$}</div>
</div>
