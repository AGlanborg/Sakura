export default async function existsCompany(obj, res, file) {
  let arr = []

  for(let i = 0; i < obj.rst.length; i += 1) {
    arr.push(await existsRow(res, file, obj.rst[i], obj.cop[i], obj.kontakt[i], obj.column))
  }

  return arr
}

async function existsRow(res, file, rst, cop, kontakt, column) {
  let filtered = res[column].filter((row) => row.rst == rst && row.copernicus == cop)

  return filtered.length
    ? filtered[0][column + "_id"]
    : await createRow(res, file, rst, cop, kontakt, column)
}

async function createRow(res, file, rst, cop, kontakt, column) {
  await fetch(`/api/content/${column}`, {
    method: "POST",
    body: JSON.stringify({
      file: file,
      rst: rst,
      cop: cop,
      kontakt: kontakt,
      name: rst ? 1 : 0
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return Math.max(...res[column].map(o => o[column + "_id"])) + 1
}