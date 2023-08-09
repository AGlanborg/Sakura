// @ts-nocheck

import filledValuesForeignKeys from "../verify/filledValuesForeignKeys";

export default function foreignKeys(obj) {
  filledValuesForeignKeys(
    obj.saljare_rst.split("\n"),
    obj.saljare_cop.split("\n"),
    "saljare",
    "Säljare"
  );
  filledValuesForeignKeys(
    obj.kopare_rst.split("\n"),
    obj.kopare_cop.split("\n"),
    "kopare",
    "Köpare"
  );
  console.log("hmm")
  filledValuesForeignKeys(
    obj.arbetstyp_forkortning.split("\n"),
    obj.arbetstyp_tillverkare.split("\n"),
    "arbetstyp",
    "Arbetstyp"
  );
}
