<script>
  import Rows from "./Rows.svelte";
</script>

<div class="statsContainer">

</div>
<div class="rowsContainer">
  <h2>
    Data
  </h2>
  <div class="rows">
    <Rows />
  </div>
</div>

<style>
  h2 {
    height: 5%;
    padding: 2.5% 0 0;
    margin: 0 50px 0;
    font-size: 30px;
    font-weight: 100;
  }

  .statsContainer {
    margin: 2.5%;
    height: 0;
    width: 90%;
    background-color: black;
  }

  .rowsContainer {
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    margin: 2.5%;
    height: 80%;
  }

  .rows {
    display: flex;
    overflow: scroll;
    margin: 1.5% 2.5%;
    height: 85%;
  }
</style>