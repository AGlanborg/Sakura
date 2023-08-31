import existsCompany from "./existsCompany";
import existsArbetstyp from "./existsArbetstyp";
import { db } from "$lib/memory/selected";

export default async function existsForeignKeys(obj) {
  let file = ""

  db.subscribe(async (val) => {
    file = val;
  });

  return ["arbetstyp"].includes(obj.column)
      ? await existsArbetstyp(obj, file)
      : await existsCompany(obj, file);
}