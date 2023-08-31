import { db } from "$lib/memory/selected";

export default async function main(arr) {
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

  arr = checkDups(arr)

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

async function createRow(obj, file) {
  await fetch(`/api/content/main`, {
    method: "POST",
    body: JSON.stringify({
      file: file,
      values: obj,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function checkDups(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let n = 0; n < arr.length; n += 1) {
      if (
        JSON.stringify(arr[i]) === JSON.stringify(arr[n]) &&
        i != n
      ) {
        arr.splice(n, 1)

        i = 0
        n = 0
      }
    }
  }

  return arr
}