export default async function existsArbetstyp(obj, file) {
  let arr = []

  for(let i = 0; i < obj.tillverkare.length; i += 1) {
    arr.push(await existsRow(file, obj.tillverkare[i], obj.arbetstyp[i], obj.column))
  }

  return arr
}

async function existsRow(file, tillverkare, arbetstyp, column) {
  let res = await getContent(column, file)
  let filtered = res[column].filter((row) => row.tillverkare == tillverkare && row.arbetstyp == arbetstyp)

  return filtered.length
    ? filtered[0][column + "_id"]
    : await createRow(res, file, tillverkare, arbetstyp,  column)
}

async function createRow(res, file, tillverkare, arbetstyp,  column) {
  await fetch(`/api/content/${column}`, {
    method: "POST",
    body: JSON.stringify({
      file: file,
      tillverkare: tillverkare,
      arbetstyp: arbetstyp
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return Math.max(...res[column].map(o => o[column + "_id"])) + 1
}

async function getContent(column, file) {
  const res = await fetch(`api/content/${column}?file=${file}`);

  return await res.json();
}