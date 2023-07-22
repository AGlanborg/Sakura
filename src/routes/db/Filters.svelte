<script>
  export let fullscreen = false;
</script>

<div class="filter {fullscreen ? 'filterSmall' : ''}">
  <h2>
    Filters
  </h2>
</div>

<style>
  h2 {
    display: inline-block;
    margin: 30px;
    font-size: 30px;
    font-weight: 100;
  }

  .filter {
    position: fixed;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    margin: 4vh 0;
    height: 77vh;
    width: 20vw;
  }

  .filterSmall {
    box-shadow: none;
  }
</style>