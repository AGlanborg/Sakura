<script lang="ts">
  import { layoutsMultiple } from "$lib/schemes/layouts";

  let info =  {}

  layoutsMultiple.forEach((s: {column: string}) => {
    info[s.column] = ""
  })
</script>

<button class="commitCreateButton">
  Commit
</button>
<div class="mutipleContainer">
  {#each layoutsMultiple as column}
    <div>
      <h2>
        {column.category}
        <br>
        {column.title}
      </h2>
      <textarea class="mutipleTextarea" bind:value={info[column.column]} />
    </div>
  {/each}
</div>

<style lang="scss">
  .commitCreateButton {
    position: absolute;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    font-size: 25px;
    top: 3vh;
    right: 2.5vw;
    height: 50px;
    width: 200px;
  }

  .mutipleContainer {
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    height: 80vh;
    width: 94vw;
    padding: 1vh 2vw;

    &>div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      margin-right: 25px;
    }

    h2 {
      text-align: center;
      line-height: 30px;
      width: 250px;
    }

    .mutipleTextarea {
      outline-style: solid;
      outline-width: 3px;
      border: none;
      border-radius: 10px;
      height: 70vh;
      padding: 5px 10px;

      &:focus {
        outline-color: rgb(200, 50, 50);
      }
    }
  }
</style>
