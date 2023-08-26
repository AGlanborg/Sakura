import existsCompany from "./existsCompany";
import existsArbetstyp from "./existsArbetstyp";
import { db } from "$lib/memory/selected";

export default async function existsForeignKeys(obj) {
  let file = ""

  db.subscribe(async (val) => {
    file = val;
  });

  const res = await getContent(obj, file);

  return ["arbetstyp"].includes(obj.column)
      ? await existsArbetstyp(obj, res, file)
      : await existsCompany(obj, res, file);
}

async function getContent(obj, file) {
  const res = await fetch(`api/content/${obj.column}?file=${file}`);

  return await res.json();
}