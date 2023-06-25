<script>
  import a128 from "$lib/images/0-128.png";
  import b128 from "$lib/images/1-128.png";
  import c128 from "$lib/images/2-128.png";
  import d128 from "$lib/images/3-128.png";
  import e128 from "$lib/images/4-128.png";
  import f128 from "$lib/images/5-128.png";
  import g128 from "$lib/images/6-128.png";

  export let rep;
  export let options;

  function selectImg(val = 100) {
    rep = val
    options = 0
  }
</script>

<div class="newImageContainer">
  <div class="newImage">
    <button on:click={() => selectImg(0)}>
      <img src={a128} alt="sakura" />
    </button>
    <button on:click={() => selectImg(1)}>
      <img src={b128} alt="sakura" />
    </button>
    <button on:click={() => selectImg(2)}>
      <img src={c128} alt="sakura" />
    </button>
    <button on:click={() => selectImg(3)}>
      <img src={d128} alt="sakura" />
    </button>
  </div>
  <div class="newImage">
    <button on:click={() => selectImg(4)}>
      <img src={e128} alt="sakura" />
    </button>
    <button on:click={() => selectImg(5)}>
      <img src={f128} alt="sakura" />
    </button>
    <button on:click={() => selectImg(6)}>
      <img src={g128} alt="sakura" />
    </button>
  </div>
  <div class="newImageCloseContainer">
    <button on:click={() => options = 0}>
      <span class="material-icons newImageClose"> add_circle </span>
    </button>
  </div>
</div>

<style>
  .newImageContainer {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 2;
    background-color: rgb(0, 0, 0, 0.6);
    top: -40vh;
    left: 0;
    height: 203.5%;
    width: 100%;
  }

  .newImage {
    display: flex;
    justify-content: space-around;
    width: 60%;
    padding: 30px 20%;
  }

  .newImageCloseContainer {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .newImageClose {
    font-size: 40px;
    transform: rotate(45deg);
  }
</style>
