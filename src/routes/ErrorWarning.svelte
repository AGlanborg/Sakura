<script lang="ts">
  export let message: any[] = new Array();
  export let duplicate: number = 1;

  function wipe() {
    message = [];
    duplicate = 0;
  }
</script>

<div class="errorMessageContainer">
  <div>
    <h1>Warning!</h1>
    {#each message as content}
      <p>
        {content}
      </p>
    {/each}
    <button class="fillBody center-absolute" on:click={() => wipe()}>
      <p>Sorry...</p>
    </button>
  </div>
</div>

<style lang="scss">
  h1 {
    font-size: 50px;
  }

  p {
    font-size: 30px;
  }

  button {
    background-color: rgb(255, 255, 255);
    padding: 20px 60px;
    margin: 10px 0 0;
    border-radius: 20px;

    p {
      margin: 0;
    }
  }

  .errorMessageContainer {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 2;
    background-color: rgb(255, 0, 0, 0.6);
    color: rgb(255, 255, 255);
    top: -40vh;
    left: 0;
    height: 203.5%;
    width: 100%;

    div {
      padding: 30px 90px;
      background-color: rgb(0, 0, 0, 0.85);
      border-radius: 30px;
    }
  }
</style>
