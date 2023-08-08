// @ts-nocheck

export default function handleForeignKeys(content, id, column) {
  if (column == "arbetstyp") {
    return handleArbetstyp(content, id);
  }

  return handleCompany(content, id, column);
}

export function handleArbetstyp(content, id) {
  const obj = content.arbetstyp.filter((obj) => obj.arbetstyp_id == id);
  return obj[0].arbetstyp;
}

export function handleCompany(content, id, column = "kopare" || "saljare") {
  let obj = content[column].filter((obj) => obj[column + "_id"] == id);

  if (obj[0].name == 1) {
    return obj[0].rst;
  }

  return obj[0].copernicus;
}