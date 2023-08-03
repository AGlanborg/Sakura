<script>
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  import non64 from "$lib/images/non-64.png";
  import a64 from "$lib/images/0-64.png";
  import b64 from "$lib/images/1-64.png";
  import c64 from "$lib/images/2-64.png";
  import d64 from "$lib/images/3-64.png";
  import e64 from "$lib/images/4-64.png";
  import f64 from "$lib/images/5-64.png";
  import g64 from "$lib/images/6-64.png";

  export let img = "";
  export let title = "";

  let pic64 = [a64, b64, c64, d64, e64, f64, g64];
</script>

<header class="default-background">
  <nav>
    <div>
      <div class="center-absolute dbImgContainer">
        <img
          src={!isNaN(parseFloat(img)) ? pic64[Number(img)] : non64}
          alt="Cherry Blossom Icon"
        />
      </div>
      <div class="center-absolute">
        <h1>
          {!isNaN(parseFloat(img)) ? title : title + img}
        </h1>
      </div>
    </div>
    <div class="navButtonsContainer">
      <button class="center-absolute" on:click={() => goto("/")}>
        <div>
          <p>Home</p>
          <span class="material-icons icon"> home </span>
        </div>
      </button>
      <button class="center-absolute" on:click={() => $page.url.pathname != '/overview' ? goto("/overview") : ''}>
        <div>
          <p>Overview</p>
          <span class="material-icons {$page.url.pathname == '/overview' ? 'arrowDown' : 'arrowUp'}"> arrow_back_ios </span>
        </div>
      </button>
      <button class="center-absolute" on:click={() => $page.url.pathname != '/create' ? goto("/create") : ''}>
        <div>
          <p>Create</p>
          <span class="material-icons {$page.url.pathname == '/create' ? 'arrowDown' : 'arrowUp'}"> arrow_back_ios </span>
        </div>
      </button>
      <button class="center-absolute" disabled={$page.url.pathname == '/'}>
        <div>
          <p>Graph</p>
          <span class="material-icons {$page.url.pathname == '/graph' ? 'arrowDown' : 'arrowUp'}"> arrow_back_ios </span>
        </div>
      </button>
    </div>
  </nav>
</header>

<style lang="scss">
  header {
    position: absolute;
    width: 100vw;
    min-height: 75px;
    height: 7.5vh;
    max-height: 125px;
    top: -10vh;
    left: 0;
    z-index: 2;
  }

  nav {
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100%;
  }

  nav > div {
    display: flex;
    flex-direction: row;
  }

  h1 {
    font-weight: 100;
    font-size: 35px;
    margin: 0;
  }

  button {
    > div {
      display: flex;
      flex-direction: row;
      margin: 0 15px;
    }

    p {
      user-select: none;
      font-size: 25px;
      margin: 5px 0 0;
    }

    span {
      font-size: 30px;
      margin: 5px 5px 0;
    }
  }

  .dbImgContainer {
    margin-left: 20px;
    margin-right: 20px;
  }

  .navButtonsContainer {
    margin: 1.5vh 5vw;
  }

  .arrowDown {
    transform: rotate(-90deg);
    margin: 5px 5px 0;
  }

  .arrowUp {
    transform: rotate(90deg);
    margin: 14px 5px 0px;
  }

  .arrowDown,
  .arrowUp {
    width: 20px;
    height: 20px;
    font-size: 20px;
  }

  .icon {
    font-size: 25px;
    margin: 8px 5px 0;
  }
</style>
