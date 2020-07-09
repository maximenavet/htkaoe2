<style>
  .instructions-container {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #332E59;
    border-radius: 30px;
    box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.1);
    padding: 30px 30px;
    border: 10px solid #332E59;
  }

  .image-container {
    padding: 25px 40px 0px 40px;
  }

  .instructions-texts-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  .instruction-text {
    font-size: 2.5em;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  }

  .bold {
    font-weight: bold;
  }

  .loose {
    border: 10px solid #E04F60;
  }
  
  .win {
    border: 10px solid #71B945;
  }
</style>

<script>
  import { goal$ } from './goalStore';
  import { comboEnd$, delayedComboEnd$ } from './combo';

  let status;

  comboEnd$.subscribe(endState => {
    status = endState.status;
  })

  delayedComboEnd$.subscribe(() => {
    status = ''
  })

</script>

<div class='instructions-container {status}'>
  <div class='instructions-texts-container'>
    <div class='instruction-text bold'>{$goal$.name}</div>
  </div>
  <div class='image-container'>
    <img width='100%' alt='Town Center' src='/images/town_center.png' />
  </div>
</div>
