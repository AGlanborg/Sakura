<script lang="ts">
  import CreateSingleLayout from "./CreateSingleLayout.svelte";
  import {
    layoutsSingle,
    layoutsSingleExceptions as exceptions,
  } from "$lib/schemes/layouts";
  import { db } from "$lib/memory/selected";

  let row = 1;
  let file = "";
  let table = new Object();
  let info = new Object();
  let failed = new Array();

  function infoInit() {
    layoutsSingle.forEach((s) => {
      s.column == "antal" ? (info[s.column] = 1) : (info[s.column] = "");
    });

    exceptions.forEach((s) => {
      info[s.column] = "";
    });
  }

  async function getContent() {
    db.subscribe(async (val: string) => {
      file = val;
    });

    const res = await fetch(`api/content?file=${file}`);

    table = await res.json();
  }

  async function createContent() {
    for (let [key, value] of Object.entries(info)) {
      if (
        value == "" &&
        !["text", "info", "kommentar", ...exceptions.map((a) => a.column)].includes(key)
      ) {
        failed.push(key);
      }
    }

    failed = failed;

    if (!failed.length) {
      createRow(info);
      infoInit()
    }
  }

  async function createRow(o) {
    await fetch(`/api/content/main`, {
      method: "POST",
      body: JSON.stringify({
        file: file,
        keys: "saljare,kopare,arbetstyp,antal,typ,leverantor,text,info,valuta,mangd,inprisex,inprisin,procent,oh,totalt,fakturanum,kommentar,inpris,start,slut,perioder,upfront,rest,internfakt,intakt,scan,now",
        values: `'${o.saljare}','${o.kopare}','${o.arbetstyp}','${o.antal}','${o.typ}','${o.leverantor}','${o.text}','${o.info}','${o.valuta}','${o.mangd}','${o.inprisex}','${o.inprisin}','${o.procent}','${o.oh}','${o.totalt}','${o.fakturanum}','${o.kommentar}','${o.inpris}','${o.start}','${o.slut}','${o.perioder}','${o.upfront}','${o.rest}','${o.internfakt}','${o.intakt}','${o.scan}','${o.now}'`,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  infoInit()
</script>

<div class="mutipleReason">
  <button
    class="formatButton {row ? 'formatHighlight' : ''}"
    on:click={() => (row = 1)}
  >
    <span class="material-icons-outlined">density_medium</span>
  </button>
  <button
    class="formatButton {row ? '' : 'formatHighlight'}"
    on:click={() => (row = 0)}
  >
    <span class="material-icons-outlined deg90">density_medium</span>
  </button>
</div>
<button class="commitCreateButton" on:click={() => createContent()}>
  Commit
</button>
{#await getContent()}
  <div class="fillBody center-absolute">
    <p>Loading...</p>
  </div>
{:then}
  <CreateSingleLayout bind:info bind:failed {table} {file} {getContent} {row} />
{/await}

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

  .mutipleReason {
    position: absolute;
    display: flex;
    flex-direction: row;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
    top: 3vh;
    left: 50vw;
    border-radius: 10px;
  }

  .formatButton {
    border-radius: 10px;
    width: 50px;
    height: 50px;

    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    &:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
</style>
