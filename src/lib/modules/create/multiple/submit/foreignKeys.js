import existsForeignKeys from "../verify/exists/existsForeignKeys";

export default async function foreignKeys(obj, saljare, kopare, arbetstyp) {
  delete obj.saljare_rst
  delete obj.saljare_cop
  delete obj.saljare_kontakt
  delete obj.kopare_rst
  delete obj.kopare_cop
  delete obj.kopare_kontakt
  delete obj.arbetstyp_arbetstyp
  delete obj.arbetstyp_tillverkare

  obj.saljare = await existsForeignKeys(saljare)
  obj.kopare = await existsForeignKeys(kopare)
  obj.arbetstyp = await existsForeignKeys(arbetstyp)

  return obj
}
