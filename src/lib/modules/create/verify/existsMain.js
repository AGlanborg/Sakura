import { db } from "$lib/memory/selected";

export default async function existsMain(arr) {
  let del = [];
  let file = "";

  db.subscribe(async (val) => {
    file = val;
  });

  let res = await getContent(file);

  res = rearange(res.main);

  for (let i = 0; i < arr.length; i += 1) {
    for (let n = 0; n < res.length; n += 1) {
      if (Object.values(arr[i]).sort().join(",") == res[n].sort().join(",")) {
        del.push(i);
      }
    }

    del.sort((a, b) => a - b);

    for (let i = 0; i < del.length; i += 1) {
      arr.splice(i, 1);
    }
  }

  for (let i = 0; i < arr.length; i += 1) {
    await createRow(arr[i], file);
  }

  return {
    result: "Success",
    reason: "",
    code: 1,
    object: {
      failed: [],
    },
  };
}

async function getContent(file) {
  const res = await fetch(`api/content/main?file=${file}`);

  return await res.json();
}

function rearange(res) {
  let list = [];

  res.forEach((obj) => {
    delete obj.main_id;
    list.push(Object.values(obj));
  });

  return list;
}

async function createRow(o, file) {
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
