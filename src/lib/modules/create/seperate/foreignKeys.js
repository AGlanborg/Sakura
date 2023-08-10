import filledValuesForeignKeys from "../verify/filledValuesForeignKeys";
import existsForeignKeys from "../verify/existsForeignKeys";

export default async function foreignKeys(obj) {
  const saljare = {
    rst: obj.saljare_rst.split("\n"),
    cop: obj.saljare_cop.split("\n"),
    kontakt: obj.saljare_kontakt.split("\n"),
    column: "saljare",
    title: "Säljare",
  };

  const kopare = {
    rst: obj.kopare_rst.split("\n"),
    cop: obj.kopare_cop.split("\n"),
    kontakt: obj.kopare_kontakt.split("\n"),
    column: "kopare",
    title: "Köpare",
  };

  const arbetstyp = {
    arbetstyp: obj.arbetstyp_arbetstyp.split("\n"),
    tillverkare: obj.arbetstyp_tillverkare.split("\n"),
    column: "arbetstyp",
    title: "Arbetstyp",
  };

  filledValuesForeignKeys(saljare.rst, saljare.cop, saljare);
  filledValuesForeignKeys(kopare.rst, kopare.cop, kopare);
  filledValuesForeignKeys(
    arbetstyp.arbetstyp,
    arbetstyp.tillverkare,
    arbetstyp
  );

  const saljare_ids = await existsForeignKeys(saljare)
  const kopare_ids = await existsForeignKeys(kopare)
  const arbetstyp_ids = await existsForeignKeys(arbetstyp)
}
